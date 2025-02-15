"use client"

import { faEye, faEyeSlash, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyboardEvent, useState } from "react";

type Props = {
  placeholder: string;
  password?: boolean;
  filled?: boolean;
  value?: string;
  icon?: IconDefinition;
  onChange?: (newValue: string) => void;
  onEnter?: () => void;
}

export const Input = ({placeholder, value, password, icon, filled,  onChange, onEnter}: Props) =>{
  const [showPassWord, setShowPassWord] = useState(false);

  const handlekeyup = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.code.toLocaleLowerCase() === 'enter' && onEnter){
      onEnter();
    }
  }

  return(
    <div className={`"has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${filled && 'bg-gray-700' }`}>
      {icon && 
        <FontAwesomeIcon 
          icon={icon}
          className="ml-4 size-6 text-gray-500"
        />
        
      }
      <input 
        type={password && !showPassWord ? 'password' : 'text'}
        className="flex-1 outline-none bg-transparent h-full px-4"
        placeholder={placeholder} 
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
        onKeyUp={handlekeyup}
      />
      {password && 
        <FontAwesomeIcon 
          onClick={() => setShowPassWord(!showPassWord)}
          icon={showPassWord ? faEye : faEyeSlash} 
          className="cursor-pointer mr-4 size-6 text-gray-500"
        />
      }
    </div>
  )
}