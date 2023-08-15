import styled from '@emotion/styled';
import { SiPixabay } from 'react-icons/si';

export const Section = styled.section`
  margin-top: 15px;
  margin-bottom: 15px;
}`;

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const ImgList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const LoadMore = styled.button`
  display: block;
  min-width: 200px;
  height: 45px;
  margin: 0 auto;

  letter-spacing: 0.08em;
  cursor: pointer;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radius.normal};
  background-color: ${p => p.theme.colors.button};
  color: ${p => p.theme.colors.text};

  font-size: 18px;
  font-weight: 600;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);

  background-image: repeating-linear-gradient(
    to right,
    #f59fef,
    #f59fef 20px,
    #e52e71 20px,
    #e52e71 40px
  );

  :hover,
  :focus {
    animation: gradient 15s ease infinite;
    background-size: 200% 200%;

    @keyframes gradient {
      0% {
        background-position: 0% 0%;
      }
      50% {
        background-position: 100% 100%;
      }
      100% {
        background-position: 0% 0%;
      }
    }

    background-image: repeating-linear-gradient(
      to right,
      #f59fef,
      #f59fef 20px,
      #e52e71 20px,
      #e52e71 40px
    );
    animation: gradient 30s ease infinite;
    background-size: 200% 200%;

    @keyframes gradient {
      0% {
        background-position: 0% 0%;
      }
      50% {
        background-position: 100% 100%;
      }
      100% {
        background-position: 0% 0%;
      }
    }
  }
`;

export const SiPixabaySvg = styled(SiPixabay)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  fill: #fff;
  opacity: 0.7;
`;

export const PixabayPng = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  color: white;
  opacity: 0.3;
`;
