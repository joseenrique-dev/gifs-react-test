const { renderHook, waitFor } = require('@testing-library/react');
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('test useFetchGifs', () => {
    test('Should render the initial state', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { images, loading } = result.current;
        expect(images.length).toBe(0); // because we haven't fetched any gifs yet, the component at this point is not mounted yet
        expect(loading).toBe(true);
    });

    test('Should render an image array and loading in false',async () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));
    }); // wait for the promise to resolve

});