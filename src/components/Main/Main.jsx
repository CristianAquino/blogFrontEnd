import {
  ButtonMain,
  ContainerMain,
  ContentMain,
  ImagePost,
  LeftMain,
  LeftText,
  Text24Regular,
  Title48SemiBold,
  BoxImage,
} from "../../styles";
// import Image from "../Image/Image";

export const Main = () => {
  return (
    <ContainerMain as="main">
      <ContentMain>
        <LeftMain>
          <LeftText>
            <Title48SemiBold>Maecenas sit amet.</Title48SemiBold>
            <Text24Regular>
              Etiam quis odio rhoncus, accumsan nunc a, elementum orci.
              Praesent.
            </Text24Regular>
          </LeftText>
          <ButtonMain>Registrarse</ButtonMain>
        </LeftMain>
        <BoxImage>
          <ImagePost
            src={
              "https://images.pexels.com/photos/2928158/pexels-photo-2928158.jpeg"
            }
          />
        </BoxImage>
      </ContentMain>
    </ContainerMain>
  );
};
