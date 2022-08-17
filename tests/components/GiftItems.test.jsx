import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('GifItems tests', () => {
    const fakeTitle = 'Fake title';
    const fakeUrl = 'Fake url';
    it('should render correctly', () => {
        const {container} = render(<GifItem title={fakeTitle } url={fakeUrl} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});