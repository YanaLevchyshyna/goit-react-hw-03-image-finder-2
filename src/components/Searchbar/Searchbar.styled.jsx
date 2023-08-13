import styled from '@emotion/styled';

export const Header = styled.header`
  margin: 20px auto 20px auto;

  padding: ${p => p.theme.space[5]}px;

  background-color: ${p => p.theme.colors.secondary};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radius.normal};

  display: flex;
  justify-content: center;
  width: 790px;
`;

export const FormEl = styled.form`
  display: flex;
  justify-content: center
  align-items: center;
 
`;

export const InputName = styled.input`
  display: block;
  width: 600px;
  font-size: 13px;
  padding: 6px 0 4px 10px;
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radius.normal};
  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);

  ::placeholder {
    color: ${p => p.theme.colors.placeHolder};
    opacity: 0.4;
  }

  :focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;

export const Button = styled.button`
  display: block;
  margin-left: 15px;
  width: 120px;
  font-size: 13px;
  padding: 6px 12px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radius.normal};
  background-color: ${p => p.theme.colors.button};
  color: ${p => p.theme.colors.label};
  cursor: pointer;
  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);

  :hover {
    color: #9398a3;
    background-color: #fff;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;
