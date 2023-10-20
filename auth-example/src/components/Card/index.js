
import { useEffect } from "react";
import { CardContainer, Text, TextGroup } from "./styles";
import { Image, View } from "react-native";

import iconPng from '../../../assets/icon.png';

export default function Card({ bgColor }) {
    return (
        <CardContainer bgColor={bgColor}>
            <TextGroup>
                <Image
                style={
                    {
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                    }
                }
                source={iconPng} />

                <View>
                <Text>R$</Text>
                <Text bold>100,00</Text>
                </View>

                <Text>ALIMENTAÇÃO</Text>
            </TextGroup>
        </CardContainer>
    )
}