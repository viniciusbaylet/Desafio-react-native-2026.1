import { ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Card from "../Card";
import { data } from "@/data/data";
import { X } from "lucide-react-native";

type modalExcluirProps = {
    id: string | null
    visible: boolean
    onCancel: () => void
}

export default function ModalVisualizar({ id, visible, onCancel }: modalExcluirProps) {
    const publicationFiltered = data.find(publication => publication.id == id);
    if (!publicationFiltered) return;

    return (
        <Modal animationType="fade" transparent={true} visible={visible} >
            <TouchableOpacity style={styles.centeredView} activeOpacity={1}>
                <View style={styles.card}>
                    <TouchableOpacity onPress={onCancel} style={styles.closeButton}>
                        <X size={24} color={"#fff"}/>
                    </TouchableOpacity>
                    <ImageBackground source={publicationFiltered.image} style={styles.cardImage} />
                    <View style={styles.cardContent}>
                        <Text style={styles.title}>{publicationFiltered.title}</Text>
                        <Text style={styles.description}>{publicationFiltered.description}</Text>
                        <Text style={styles.title}>R${publicationFiltered.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}