import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import { ImageSourcePropType } from "react-native";

import { styles } from "./styles";

type cardProps = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  description: string;
  price: string;
};


export default function Card({id, image, title, description, price}: cardProps) {
    return (
        <View style={styles.card}>
            <ImageBackground source={image} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.title}>R${price}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}