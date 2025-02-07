"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";

export const SignIn = () =>{
  const router = useRouter();
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('')

  const handleEnterButton = () => {
    router.replace('/home');
  }
  return(
    <>
      <input 
        placeholder="Digite seu email"
        value={emailField}
        onChange={e => setEmailField(e.target.value)}
      />

    <input 
        type="password"
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={e => setPasswordField(e.target.value)}
      />
      <button onClick={handleEnterButton}>Entrar</button>

    </>
  )
}