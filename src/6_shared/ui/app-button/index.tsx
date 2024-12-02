import { MouseEvent } from "react";

interface Props {
  value?: string,
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

import './styles.css';

export default function AppButton({ value = '', onClick }: Props) {
  return(
    <>
      <button className="app-button" onClick={(e) => {
        onClick(e)
      }}>{value}</button>
    </>
  )
}
