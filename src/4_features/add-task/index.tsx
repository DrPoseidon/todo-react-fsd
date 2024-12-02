import {AppButton, AppInput} from "@/shared/ui";
import {useState} from "react";
import {TTask} from "@/entities/task";

import './styles.css';

interface Props {
  addTask: (task: TTask) => void;
}

export default function AddTask({ addTask }: Props) {
  const [inputValue, setInputValue] = useState<string>('');


  const _addTask = () => {
    addTask({
      id: new Date().getTime(),
      title: inputValue,
      completed: false
    })

    resetInputValue();
  }

  const resetInputValue = () => {
    setInputValue('');
  }

  return(<div className="add-task">
    <AppInput placeholder={"what needs to be done?"} value={inputValue} onInput={(value: string) => {
      setInputValue(value);
    }}/>

    <AppButton value="+" onClick={_addTask}/>
  </div>)
}
