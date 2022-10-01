import PropTypes from "prop-types";
import { usePerfil } from "../../contexts/Perfil";
import { Button } from "../Button";
import { Container } from "./Profile.styles";

export const Profile = ({ profile }) => {
  const { handleFollow } = usePerfil();
  return (
    <Container>
      <div className="nome">
        <div className="iniciais">{profile.iniciaisNome}</div>

        <p>{profile.nome}</p>
        <Button onClick={() => handleFollow(profile.id)}>
          {profile.seguindo ? "Seguindo" : "Seguir"}
        </Button>
      </div>      
      <p>{profile.descricao}</p>
    </Container>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
};