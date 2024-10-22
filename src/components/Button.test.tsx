import '@testing-library/jest-dom';
import { MouseEvent } from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('render the button element', () => {
    /** Arrange */
    const onClickHandler = (event: MouseEvent<HTMLElement>) => console.log(event);
    render(<Button className='myBtn' onClickHandler={onClickHandler}>Click me!</Button>);

    /** Act */
    const btnElement = screen.getByRole('button', { name: /click me/i });

    /** Assert */
    expect(btnElement).toBeInTheDocument();
    expect(btnElement.className).toBe('myBtn');
});