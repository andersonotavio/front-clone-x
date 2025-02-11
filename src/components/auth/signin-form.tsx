"use client"

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation"
import { useState } from "react";
import { Input } from "../ui/input";

export const SignIn = () =>{
  const router = useRouter();
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('')

  const handleEnterButton = () => {
    router.replace('/home');
  }
  return(
    <>
      <Input
        placeholder="Digite seu email"
        value={emailField}
        onChange={t => setEmailField(t)}
      />
  
    <Input
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={t => setPasswordField(t)}
        password
      />
      <button onClick={handleEnterButton}>Entrar</button>

    </>
  )
}