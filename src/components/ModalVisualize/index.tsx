import { ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Card from "../Card";
import { X } from "lucide-react-native";

type modalExcluirProps = {
    id: number | null
    image: string
    name: string
    description: string
    price: number
    visible: boolean
    onCancel: () => void
}

export default function ModalVisualize({ id, image, name, description, price, visible, onCancel }: modalExcluirProps) {
    return (
        <Modal animationType="fade" transparent={true} visible={visible} >
            <TouchableOpacity style={styles.centeredView} activeOpacity={1}>
                <View style={styles.card}>
                    <TouchableOpacity onPress={onCancel} style={styles.closeButton}>
                        <X size={24} color={"#fff"}/>
                    </TouchableOpacity>
                    <ImageBackground source={{uri: image}} style={styles.cardImage} />
                    <View style={styles.cardContent}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.description}>{description}</Text>
                        <Text style={styles.title}>R${price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}