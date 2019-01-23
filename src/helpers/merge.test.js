import { mergeWithoutDuplicates } from './merge';

it('should merge two arrays of objects', () => {
  const first = [{ id: 1 }];
  const second = [{ id: 2 }];
  const result = mergeWithoutDuplicates(first, second);
  expect(result).toEqual([{ id: 1 }, { id: 2 }]);
});

it('should merge two arrays of objects and eliminate duplicates', () => {
  const first = [{ id: 1 }];
  const second = [{ id: 1 }, { id: 2 }];
  const result = mergeWithoutDuplicates(first, second);
  expect(result).toEqual([{ id: 1 }, { id: 2 }]);
});
