import useCounter from '../useCounter';
import { act, renderHook } from '@testing-library/react-hooks';
import expectExport from 'expect';

describe('USE INCREMENT HOOK', () => {
  it('increment count by 1', () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('reset count by initial value', () => {
    const { result } = renderHook(useCounter);
    const initialValue = 0;

    act(() => {
      result.current.reset();
    });

    expect(result.current.count).toBe(initialValue);
  });
});
