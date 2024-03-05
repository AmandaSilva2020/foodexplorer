import { useState } from "react";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Container } from "./styles"

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password){
      return alert("Preencha todos os campos");
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Utilizador cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar.");
      }
    });

  }

  return (
      <Container>
        <img src="../../../public/logo_food_explorer.png" alt="Logo do Food Explorer" />
        <main>
          <Input 
            placeholder="Exemplo: Maria da Silva"
            labelName="Seu nome"
            label
            onChange={e => setName(e.target.value)}
          />
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

          <Button title="Criar conta" onClick={handleSignUp} />
          <ButtonText title="Já tenho uma conta"/>
        </main>
      </Container>
  );
}