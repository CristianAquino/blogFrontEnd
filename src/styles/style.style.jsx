import styled from "styled-components";
import "./index";

// title
export const Title48SemiBold = styled.h1`
  font-size: 48px;
  font-weight: 600;
`;

export const Title32Bold = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

export const Title32SemiBold = styled.h1`
  font-size: 32px;
  font-weight: 600;
`;

export const Title16SemiBold = styled.h1`
  font-size: 16px;
  font-weight: 600;
`;

// text
export const Text24Regular = styled.span`
  font-size: 24px;
  font-weight: 400;
`;

export const Text20Regular = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

export const Text20Bold = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const Text16Regular = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

export const Text16SemiBold = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const Text14Bold = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

// date
export const Date14Bold = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

// username
export const Username18Bold = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const Username16Bold = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const Username14Bold = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

// button
export const ButtonGeneral = styled.button`
  background-color: var(--button);
  outline: none;
  border: none;
  color: #fff;
  &:hover {
    cursor: pointer;
    outline: 1px solid var(--border);
    background-color: transparent;
    color: var(--button);
  }
`;

export const ButtonRegistrar = styled(ButtonGeneral)`
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
`;

export const ButtonMain = styled(ButtonGeneral)`
  height: 80px;
  padding: 24px;
  border-radius: 20px;
  font-size: 32px;
  font-weight: 600;
  align-self: flex-start;
`;

export const ButtonTag = styled(ButtonGeneral)`
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
`;

// containers
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 966px;
  display: flex;
  justify-content: space-between;
`;

export const SubContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

// navbar
export const ContainerNavbar = styled(Container)`
  height: 80px;
  border-bottom: 1px solid var(--border);
  color: #fff;
`;

export const ContentNavbar = styled(Content)`
  height: 100%;
  align-items: center;
`;

export const SubContentNavbar = styled(SubContent)`
  gap: 48px;
  align-items: center;
`;

// main
export const ContainerMain = styled(Container)`
  height: 468px;
  padding: 64px 0;
  border-bottom: 1px solid var(--border);
  color: #fff;
`;
export const ContentMain = styled(Content)`
  height: 100%;
`;

export const Left = styled.div`
  width: 512px;
  display: flex;
  justify-content: space-between;
`;

export const LeftText = styled(SubContentNavbar)`
  width: 100%;
  flex-direction: column;
  align-items: start;
`;

export const Right = styled.div`
  width: 340px;
  display: flex;
`;

export const LeftMain = styled(Left)`
  flex-direction: column;
  gap: 80px;
  height: 100%;
`;

// posts
export const ContainerPosts = styled(Container)`
  padding: 64px 0;
  border-bottom: 1px solid var(--border);
  color: #fff;
`;
export const ContentPosts = styled(Content)`
  height: 100%;
  gap: 16px;
`;
export const LeftPosts = styled(Left)`
  flex-direction: column;
  gap: 24px;
  height: 100%;
`;
export const RightTags = styled(Right)`
  gap: 16px;
  flex-wrap: wrap;
  align-self: flex-start;
`;
export const ContainerPost = styled(Container)`
  height: 120px;
  justify-content: space-between;
  gap: 16px;
`;

export const TextPost = styled(SubContent)`
  width: 323px;
  flex-direction: column;
  gap: 12px;
`;

// image
export const BoxImage = styled.div`
  width: ${({ width }) => width || "340px"};
  height: ${({ height }) => height || "340px"};
`;

export const ImagePost = styled.img`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  object-fit: cover;
`;

export const ImageAvatar = styled(ImagePost)`
  border-radius: ${({ borderRadius }) => borderRadius || "0%"};
`;
// text
export const Hidden2Lines = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
