import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Container } from "./styles"

export function SignIn() {

  return (
      <Container>
        <img src="../../../public/logo_food_explorer.png" alt="Logo do Food Explorer" />
        <main>
          <Input 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            labelName="Email"
            label
          />
          <Input 
            placeholder="No mínimo 6 caracteres"
            labelName="Senha"
            label
          />

          <Button title="Entrar"/>
          <ButtonText title="Criar uma conta"/>
        </main>
      </Container>
  );
}