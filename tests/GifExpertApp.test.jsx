import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('test GifExpertApp', () => {
    test('should have the correctly title', () => {
        // const onAddCategory = jest.fn();
        const fakeValue = 'One Punch';

        render(<GifExpertApp />);
        const title = screen.getByText('Gif expert App');
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        expect(title);
        expect(input.value).toBe('');

        fireEvent.input( input, {
            target: { value: fakeValue }
        } );
        expect( input.value ).toBe(fakeValue);
        fireEvent.submit( form );
        expect(input.value).toBe('');
        
        // expect( onAddCategory ).toHaveBeenCalledWith(fakeValue);
        screen.debug();
    });
});