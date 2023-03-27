import { renderHook } from '@testing-library/react-hooks';
import { useThrottle } from './useThrottle';
describe('useThrottle', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    test('should return callback', () => {
        const mockCb = jest.fn()
        const { result } = renderHook(() => useThrottle(mockCb));
        expect(typeof result.current).toBe('function')
    })

    test('should work in periods and should calls 1 time per period', () => {
        const mockCb = jest.fn()
        const { result } = renderHook(() => useThrottle(mockCb, 100));
        expect(mockCb).toHaveBeenCalledTimes(0)

        result.current();
        result.current();
        result.current();
        jest.advanceTimersByTime(100)
        expect(mockCb).toHaveBeenCalledTimes(1)

        result.current();
        result.current();
        result.current();
        result.current();
        jest.advanceTimersByTime(100)
        expect(mockCb).toHaveBeenCalledTimes(2)
    })

    test('should save context between rerenders', () => {
        let count = 0;
        const mockCb = jest.fn(() => {
            count += 1
        })
        const { result, rerender } = renderHook(() => useThrottle(mockCb, 100));
        rerender();

        expect(mockCb).toHaveBeenCalledTimes(0)
        expect(count).toEqual(0);

        rerender();
        rerender();
        result.current();
        jest.advanceTimersByTime(100)
        expect(mockCb).toHaveBeenCalledTimes(1)
        expect(count).toEqual(1);

        rerender();
        rerender();
        rerender();
        result.current();
        result.current();
        jest.advanceTimersByTime(100)
        expect(mockCb).toHaveBeenCalledTimes(2)
        expect(count).toEqual(2);
    })

    test('check that throttled cb calls few times if interval more then period', () => {
        const mockCb = jest.fn()
        const { result } = renderHook(() => useThrottle(mockCb, 100));


        result.current();
        jest.advanceTimersByTime(100)
        result.current();
        jest.advanceTimersByTime(100)
        result.current();
        jest.advanceTimersByTime(100)
        result.current();
        jest.advanceTimersByTime(50)
        expect(mockCb).toHaveBeenCalledTimes(3)
    })

    test('check that throttled cb calls only in period', () => {
        const mockCb = jest.fn()
        const { result } = renderHook(() => useThrottle(mockCb, 100));
        expect(mockCb).toHaveBeenCalledTimes(0)

        result.current();
        jest.advanceTimersByTime(100)
        expect(mockCb).toHaveBeenCalledTimes(1)

        result.current();
        result.current();
        jest.advanceTimersByTime(50)
        expect(mockCb).toHaveBeenCalledTimes(1)

        result.current();
        result.current();
        jest.advanceTimersByTime(50)
        expect(mockCb).toHaveBeenCalledTimes(2)
    })
})
