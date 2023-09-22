import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
    width: 100%;
    height: 60px;
    background-color: #ff9000;
    border-radius: 10px;
    margin-top: 8px;
`

export const IsideButton = styled(RectButton)`
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const ButtonText = styled.Text`
    font-family: 'RobotoSlab-Medium';
    color: #312e38;
    font-size: 18px;
`