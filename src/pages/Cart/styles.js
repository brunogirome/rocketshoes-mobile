import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  padding: 20px;

  background-color: #191920;
`;

export const CartContainer = styled.View`
  padding: 15px;
  border-radius: 4px;

  background-color: #fff;
  max-height: 100%;
`;

export const HeaderItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 80px;
  height: 80px;
`;

export const TextContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;

  padding: 0 10px;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  line-height: 18px;
  color: #333;
`;

export const Price = styled.Text`
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  margin-top: 5px;
`;

export const RemoveButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 42px;
  height: 42px;
`;

export const ValueContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  height: 40px;
  padding: 10px;
  background-color: #eee;
  margin-top: 10px;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
`;

export const ItemAmount = styled.TextInput.attrs({
  editable: false,
})`
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #dddddd;
  font-size: 14px;
  line-height: 16px;
  color: #666;
  width: 50px;
  height: 26px;
  padding: 5px 12px;
  margin: 0 5px;
`;

export const TotalAmount = styled.Text`
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
`;

export const AmountButtons = styled.TouchableOpacity`
  justify-content: center;
`;

export const TotalContainer = styled.View`
  margin-top: 10px;
  margin-bottom: 30px;
  align-self: center;
`;

export const TotalLabel = styled.Text`
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  font-weight: bold;
  color: #999;
  text-align: center;
`;

export const TotalPrice = styled.Text`
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -1.6px;
  font-weight: bold;
`;

export const FooterButton = styled.TouchableOpacity`
  height: 42px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  border-radius: 4px;
  width: 100%;
`;

export const FooterButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`;

export const EmptyContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  line-height: 32px;
  font-size: 18px;
  margin: 20px 0;
  color: #ccc;
`;
