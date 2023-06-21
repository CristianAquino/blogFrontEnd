import {
  ButtonRegistrar,
  ContainerNavbar,
  ContentNavbar,
  SubContentNavbar,
  Text16SemiBold,
} from "../../styles";

const Navbar = () => {
  return (
    <ContainerNavbar as="nav">
      <ContentNavbar>
        <div>Logo</div>
        <SubContentNavbar>
          <Text16SemiBold>Ingresar</Text16SemiBold>
          <ButtonRegistrar>Registrarse</ButtonRegistrar>
        </SubContentNavbar>
      </ContentNavbar>
    </ContainerNavbar>
  );
};
export default Navbar;
