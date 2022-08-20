import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('AddCategory test', () => {
    test('Should change the value of textbox', () => {
        render(<AddCategory onNewCategory={()=>{}}/>);
        const input = screen.getByRole('textbox');
        const fakeValue = 'fake-vale-input';
        fireEvent.input( input, {
            target: { value: fakeValue  }
        } );
        // screen.debug();
        expect(input.value).toBe( fakeValue );
    });
});

