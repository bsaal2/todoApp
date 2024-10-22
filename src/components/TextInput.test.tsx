import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

const getTextInputElement = (onChangeHandler: (search: string)=> void) => {
    const { getByPlaceholderText } = render(<TextInput
         type='text'
         name='username'
         value='myUsername'
         placeholder='Enter username'
         onChange={onChangeHandler}
        />);
    return getByPlaceholderText('enter username', { exact: false });
}

it('render the text input', () => {
    const onChangeHandler = (search: string) => console.log(search);

    const InputElement = getTextInputElement(onChangeHandler);
    expect(InputElement).toBeInTheDocument();
});

it('ensure the function is called when the input is entered', () => {
    const onChangeHandler = jest.fn((search: string) => console.log(search));
    const InputElement = getTextInputElement(onChangeHandler);

    fireEvent.change(InputElement, { 
        target: {
            value: 'hey'
        }
    });
    expect(onChangeHandler).toHaveBeenCalledTimes(1);
})