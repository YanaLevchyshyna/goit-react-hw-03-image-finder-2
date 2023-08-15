import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  text-align: center;
  justify-content: center;

  background-image: repeating-linear-gradient(
    to right,
    #f59fef,
    #f59fef 20px,
    #e52e71 20px,
    #e52e71 40px
  );

  max-width: 1440px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const FormEl = styled.form`
  display: flex;
  justify-content: center
  align-items: center;
 
`;

export const InputName = styled.input`
  display: block;
  width: 400px;
  font-size: 13px;

  border-radius: ${p => p.theme.radius.normal};
  border: none;

  ::placeholder {
    color: ${p => p.theme.colors.placeHolder};
    opacity: 0.4;
  }

  :focus {
    color: #212529
    background-color: #fff;
   
    outline-color: #f5aef0;
    box-shadow: 0 0 0 0.2rem rgba(245, 174, 240, 0.25);
  }
`;

export const Button = styled.button`
  display: block;
  margin-left: 15px;
  width: 100px;
  letter-spacing: 0.08em;
  font-size: 13px;
  font-weight: 500;
  padding: 6px 12px;

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radius.normal};
  background-color: ${p => p.theme.colors.buttonHover};
  color: ${p => p.theme.colors.button};
  cursor: pointer;

  :hover {
    box-shadow: 0 2.8px 2.2px red, 0 6.7px 5.3px blue, 0 12.5px 10px green,
      0 22.3px 17.9px purple, 0 41.8px 33.4px orange, 0 100px 80px teal;
  }
`;
