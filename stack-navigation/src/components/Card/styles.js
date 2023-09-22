import styled from 'styled-components/native';

export const CardContainer = styled.View`
    width: 120px;
    height: 180px;
    background-color: ${props => props.bgColor ? props.bgColor : 'lightblue'};
    margin-right: 20px;
    border-radius: 20px;
`

export const TextGroup = styled.View`
    margin: 10px;
    height: 80%;
    display: flex;
    justify-content: space-between;
`

export const Text = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: ${props => props.bold ? 700 : 500};
`;
