import { type FormEvent, type KeyboardEvent } from "react";

interface Props {
  value: string;
  placeholder?: string,
  onInput: (value: string) => void;
  onKeyUpEnter: (event: FormEvent<HTMLInputElement>) => void;
}

import './styles.css';

export default function AppInput({ placeholder = '', value = '', onInput, onKeyUpEnter }: Props) {
  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    onInput(e.currentTarget.value)
  }

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onKeyUpEnter(e)
    }
  }

  return(
    <>
      <input
        className="app-input"
        value={value}
        type="text"
        placeholder={placeholder}
        onInput={handleInput}
        onKeyUp={handleKeyUp}
      />
    </>
  )
}
