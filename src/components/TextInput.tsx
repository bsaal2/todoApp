import { FC, ChangeEvent } from 'react'

interface ITextInputPropTypes {
    type: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (search: string) => void;
}

const TextInput:FC<ITextInputPropTypes> = ({ type = 'text', name, value, placeholder, onChange }) => (
    <input 
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
         />
)

export default TextInput;