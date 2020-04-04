import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-content: space-between;

  height: 64px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #141419;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  height: 24px;
  width: 185px;
`;
