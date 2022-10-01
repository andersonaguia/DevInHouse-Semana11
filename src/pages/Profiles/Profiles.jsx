import { Profile } from "../../components/Profile";
import { usePerfil } from "../../contexts/Perfil";
import { Container } from "./Profiles.styles";

export const Profiles = () => {
  const { profiles } = usePerfil();
  return (
    <Container>
      {profiles.map((p) => (
        <Profile key={p.id} profile={p} />
      ))}
    </Container>
  );
};