import styled from '@emotion/styled';

export const ImgItem = styled.li`
  display: block;
  width: calc((100% - 48px) / 3);
  margin-bottom: 24px;
  margin-right: 24px;

  cursor: pointer;


  :nth-of-type(3n) {
    margin-right: 0;
`;

export const PhotoCard = styled.div`
  & > img {
    object-fit: cover;
    height: 250px;
    margin: 0 auto;
  }
`;
