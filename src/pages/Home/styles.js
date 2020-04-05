import styled from 'styled-components/native';
import { darken } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;

  padding: 20px;

  background-color: #191920;
`;

export const ProductList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  max-height: 350px;
`;

export const ListItem = styled.View`
  width: 220px;
  padding: 10px;
  border-radius: 4px;
  margin-right: 15px;

  background-color: #fff;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  line-height: 21px;
  margin-top: 10px;
  color: #333;
`;

export const Price = styled.Text`
  font-size: 21px;
  line-height: 25px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${colors.primary};
  align-items: center;

  flex-direction: row;

  margin-top: auto;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
`;

export const ButtonCartContainer = styled.View`
  padding: 12px;
  background-color: ${darken(0.05, colors.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ButtonCartText = styled.Text`
  color: #fff;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 200px;
  height: 200px;
`;
