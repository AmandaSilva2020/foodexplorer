import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Container } from "./styles"


export function SignIn() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const { signIn } = useAuth();
  
  function handleSignIn(){
    signIn({ email, password });
  }

  return (
      <Container>
        <img src="../../../public/logo_food_explorer.png" alt="Logo do Food Explorer" />
        <main>
          <Input 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            labelName="Email"
            label
            onChange={e => setEmail(e.target.value)}
          />
          <Input 
            placeholder="No mínimo 6 caracteres"
            labelName="Senha"
            type="password"
            label
            onChange={e => setPassword(e.target.value)}
          />

          <Button title="Entrar" onClick={handleSignIn} />
          <ButtonText title="Criar uma conta"/>
        </main>
      </Container>
  );
}