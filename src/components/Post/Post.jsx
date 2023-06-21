import {
  BoxImage,
  ContainerPost,
  Hidden2Lines,
  ImageAvatar,
  ImagePost,
  Text16Regular,
  TextPost,
  Title16SemiBold,
  Username16Bold,
} from "../../styles";

const boxPost = {
  width: "120px",
  height: "120px",
};
const boxAvatar = {
  width: "28px",
  height: "28px",
};

const img = {
  borderRadius: "50%",
};

const Post = () => {
  return (
    <ContainerPost>
      <TextPost>
        <div style={{ display: "flex", gap: "4px" }}>
          <BoxImage {...boxAvatar}>
            <ImageAvatar
              src={
                "https://images.pexels.com/photos/2928158/pexels-photo-2928158.jpeg"
              }
              {...img}
            />
          </BoxImage>
          <Username16Bold
            style={{ alignSelf: "flex-end", color: "var(--border)" }}
          >
            Username
          </Username16Bold>
        </div>
        <Hidden2Lines>
          <Title16SemiBold>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            repellendus assumenda quam beatae repellat. Nemo?
          </Title16SemiBold>
        </Hidden2Lines>
        <Hidden2Lines>
          <Text16Regular style={{ color: "var(--border)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            porro sed facere dolorem dolorum voluptas voluptate totam ipsam quod
            suscipit!
          </Text16Regular>
        </Hidden2Lines>
      </TextPost>
      <BoxImage {...boxPost}>
        <ImagePost
          src={
            "https://images.pexels.com/photos/2928158/pexels-photo-2928158.jpeg"
          }
        />
      </BoxImage>
    </ContainerPost>
  );
};
export default Post;
