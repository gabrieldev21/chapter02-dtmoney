import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./style";

interface HeaderProps {
  onOpenNewTransationModal: () => void;
}

export function Header({ onOpenNewTransationModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransationModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
