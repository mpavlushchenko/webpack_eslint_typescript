import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';

import { useFetchPhotos } from '../usePhotos';
import { BASE_API_URL } from '../../../services/api';

const getControlledPromise = () => {
  let deferred;
  const promise = new Promise((resolve, reject) => {
    deferred = { resolve, reject };
  });
  return { deferred, promise };
};

const BASE_URL = `${BASE_API_URL}/photos?_page=1&_limit=10`;

describe('USE_FETCH_PHOTOS HOOK', () => {
  it('fetch photos by url', async () => {
    global.fetch = jest.fn();

    await act(async () => renderHook(() => useFetchPhotos(1)));
    expect(global.fetch).toBeCalledWith(BASE_URL);
  });

  describe('while fetching data', () => {
    it('loading state is correct', async () => {
      const { deferred, promise } = getControlledPromise();
      global.fetch = jest.fn(() => promise);

      const { result, waitForNextUpdate } = renderHook(() => useFetchPhotos(1));

      expect(result.current).toStrictEqual({ data: [], isLoading: true, error: null });

      deferred.resolve({ json: () => [] });

      await waitForNextUpdate();

      expect(result.current).toStrictEqual({ data: [], isLoading: false, error: null });
    });
  });

  describe('got data successfully', () => {
    it('get photos', async () => {
      const { deferred, promise } = getControlledPromise();
      global.fetch = jest.fn(() => promise);

      const photos = {
        albumId: 1,
        id: 1,
        thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        url: 'https://via.placeholder.com/600/92c952',
      };

      const { result, waitForNextUpdate } = renderHook(() => useFetchPhotos(1));

      deferred.resolve({ json: () => [photos] });
      await waitForNextUpdate();

      expect(result.current.data[0]).toStrictEqual(photos);
    });
  });

  describe('got an error', () => {
    it('get error', async () => {
      global.fetch = jest.fn(() => {
        return new Promise(() => {
          throw 'Fetch Error';
        });
      });

      const { result, waitForNextUpdate } = renderHook(() => useFetchPhotos(1));

      await waitForNextUpdate();

      expect(result.current.error).toStrictEqual('Fetch Error');
    });
  });
});
