import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

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

export const CartContainer = styled.View`
  width: 30px;
  height: 30px;
`;

export const CartCounter = styled.View`
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background-color: ${colors.primary};
  position: absolute;
  right: 0px;
  top: -5px;
  align-items: center;
  justify-content: center;
`;

export const CartCounterText = styled.Text`
  color: #fff;
  font-size: 12px;
`;
