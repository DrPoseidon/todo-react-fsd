import { FormEvent } from "react";

interface Props {
  value: string;
  placeholder?: string,
  onInput: (value: string) => void;
}

import './styles.css';

export default function AppInput({ placeholder = '', value = '', onInput }: Props) {
  return(
    <>
      <input className="app-input" value={value} type="text" placeholder={placeholder} onInput={(e: FormEvent<HTMLInputElement>) => {
        onInput(e.currentTarget.value)
      }}/>
    </>
  )
}
