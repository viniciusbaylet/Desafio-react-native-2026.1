import { ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { X } from "lucide-react-native";

type dataProps = {
    id: number
    name: string
    description: string
    price: number
    category_id: number
    created_by: number
    status: string
    created_at: string
    updated_at: string

    image: string
}

type modalExcluirProps = {
    publication: dataProps | null
    visible: boolean
    onCancel: () => void
}

export default function ModalVisualize({ publication, visible, onCancel }: modalExcluirProps) {

    return (
        <Modal animationType="fade" transparent={true} visible={visible} >
            <TouchableOpacity style={styles.centeredView} activeOpacity={1}>
                <View style={styles.card}>
                    <TouchableOpacity onPress={onCancel} style={styles.closeButton}>
                        <X size={24} color={"#fff"} />
                    </TouchableOpacity>
                    <ImageBackground source={{ uri: publication?.image }} style={styles.cardImage} />
                    <View style={styles.cardContent}>
                        <Text style={styles.title}>{publication?.name}</Text>
                        <Text style={styles.description}>{publication?.description}</Text>
                        <Text style={styles.title}>R${publication?.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}