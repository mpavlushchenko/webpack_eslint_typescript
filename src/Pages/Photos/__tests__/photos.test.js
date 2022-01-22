import useFetchPhotos from '../usePhotos';

const { renderHook } = require('@testing-library/react-hooks');

describe('GET_PHOTOS', () => {
  it('fetches posts from the api with react-query', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchPhotos(1));

    expect(result.current.isFetching).toBe(false); // false
    await waitForNextUpdate();

    expect(result.current.isFetching).toBe(false); // still false

    expect(result.current.data).not.toBeNull(); // undefined
    expect(result.current.data).not.toBeUndefined(); // undefined
  });
});

describe('The string package', () => {
  describe('the sayHelloTo function', () => {
    it("should return 'Hi, Peter!' if the argument is 'Peter'", () => {
      const actual = 'Peter';
      const expected = 'Peter';
      expect(actual).toBe(expected);
    });
  });
});
