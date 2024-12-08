import { MouseEvent } from "react";

interface Props {
  value?: string,
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean
}

import './styles.css';

export default function AppButton({ value = '', onClick, disabled }: Props) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick(e)
  }

  return(
    <>
      <button
        className="app-button"
        disabled={disabled}
        onClick={handleClick}
      >
        {value}
      </button>
    </>
  )
}
