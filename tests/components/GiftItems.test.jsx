import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('GifItems tests', () => {
    const fakeTitle = 'Fake title';
    const fakeUrl = 'http://fakeurl.com/';
    it('should render correctly', () => {
        const {container} = render(<GifItem title={ fakeTitle } url={ fakeUrl } />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render the image with the correct url and the indicated ALT', () => {
        render(<GifItem title={ fakeTitle } url={ fakeUrl } />);
        expect(screen.getByRole('img').src).toBe(fakeUrl);
        expect(screen.getByRole('img').alt).toBe(fakeTitle);
    });
});