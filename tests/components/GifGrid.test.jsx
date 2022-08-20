import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid test', () => {
    const fakeCategory = 'One Punch';
    test('Should render initially the loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            loading: true,
        });
        render(<GifGrid  category={ fakeCategory }/>);
        // screen.debug()
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(fakeCategory));
    });

    test('Should render the gifs when the data is ready', () => {
        const fakeGifs = [
            {
                id: 'ABC',
                url: 'https://media1.giphy.com/media/l0HlW9gUAdr9u/200w.gif',
                title: 'One Punch',
            },
            {
                id: 'DEF',
                url: 'https://media1.giphy.com/media/l0HlW9gUAdr9u/200w.gif',
                title: 'One Punch',
            },
        ];
        useFetchGifs.mockReturnValue({
            images: fakeGifs,
            loading: true,
        });
        render(<GifGrid  category={ fakeCategory }/>);

        expect(screen.getAllByRole('img').length).toBe(2)
        expect(screen.getAllByRole('img')).toHaveLength(fakeGifs.length);
    });
});