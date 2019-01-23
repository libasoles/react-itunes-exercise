import uniqBy from 'lodash/uniqBy';

const mergeWithoutDuplicates = (primarySet, secondarySet) => {
  const mergedSet = [
    ...primarySet,
    ...secondarySet,
  ];

  return uniqBy(mergedSet, item => item.id);
};

export {
  mergeWithoutDuplicates,
};
