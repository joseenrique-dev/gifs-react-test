import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('AddCategory test', () => {
    test('Should change the value of textbox', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={()=> onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const fakeValue = 'fake-vale-input';
        fireEvent.input( input, {
            target: { value: fakeValue  }
        } );
        // screen.debug();
        expect(input.value).toBe( fakeValue );
    });

    it('Should call onNewCategory if the input have value', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const fakeValue = 'fake-vale-input';
        const input = screen.getByRole('textbox');
        const form= screen.getByRole('form');
        fireEvent.input(input, {
            target: { value: fakeValue }
        })
        // screen.debug();
        fireEvent.submit(form);
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(fakeValue);
    });

    it('Should not call onNewCategory if the input have no value', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const form= screen.getByRole('form');
        
        // screen.debug();
        fireEvent.submit(form);

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });


});

