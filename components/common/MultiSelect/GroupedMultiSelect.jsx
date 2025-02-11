import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SelectGroup from './SelectGroup';

const GroupedMultiSelect = ({
  items, onChange, groupBy, searchTerm,
}) => {
  const [filtered, setFiltered] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);

  const groups = items.reduce(
    (acc, item) => ({
      ...acc,
      [item[groupBy]]: [...(acc[item[groupBy]] || []), item],
    }),
    {},
  );

  useEffect(() => {
    if (searchTerm) {
      setFiltered(true);
    } else {
      setFiltered(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm) {
      const searchFilter = new RegExp(searchTerm, 'i');
      const filteredGroups = Object.keys(groups).reduce((acc, group) => {
        const filteredGroup = groups[group].filter(item => searchFilter.test(item.councilName));
        if (filteredGroup.length) {
          return { ...acc, [group]: filteredGroup };
        }
        return acc;
      }, {});
      setFilteredItems(filteredGroups);
    }
    // eslint-disable-next-line
  }, [searchTerm]);

  const sortByRegionNumber = (a, b) => {
    // from @data/councils.js, a and b is expected to look like this:
    //    'REGION 11 - WEST LA'
    //
    // so we want to get the region number and sort by it

    // eslint-disable-next-line no-unused-vars
    const [labelA, regionA, otherA] = a.split(' ');
    // eslint-disable-next-line no-unused-vars
    const [labelB, regionB, otherB] = b.split(' ');

    return Number(regionA) - Number(regionB);
  };

  return Object.keys(filtered ? filteredItems : groups)
    .sort(sortByRegionNumber)
    .map(name => (
      <SelectGroup
        key={name}
        name={name}
        items={filtered ? filteredItems[name] : groups[name]}
        onChange={onChange}
      />
    ));
};

export default GroupedMultiSelect;

GroupedMultiSelect.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      selected: PropTypes.bool,
    }),
  ),
  onChange: PropTypes.func,
  groupBy: PropTypes.string.isRequired,
};

GroupedMultiSelect.defaultProps = {
  items: [],
  onChange: () => null,
};
