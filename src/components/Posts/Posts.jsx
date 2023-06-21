import { ContainerPosts, ContentPosts, LeftPosts, Right } from "../../styles";
import Post from "../Post/Post";
import Tags from "../Tags/Tags";

export const Posts = () => {
  return (
    <ContainerPosts>
      <ContentPosts>
        <LeftPosts>
          <Post />
          <Post />
          <Post />
        </LeftPosts>
        <Tags />
      </ContentPosts>
    </ContainerPosts>
  );
};
