import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import api from "@/services/api";

type modalExcluirProps = {
    id: number | null
    visible: boolean
    onConfirm: () => void
    onCancel: () => void
}

export default function ModalDelete({id, visible, onConfirm, onCancel}: modalExcluirProps) {

    async function handleDeletePublication() {
        try {
            api.delete(`/baylet/publications/${id}`);
            onConfirm();
        } catch (error) {
            console.error("Erro ao excluir publicação: ", error);
        }
    }

    return (
        <Modal animationType="fade" transparent={true} visible={visible} >
            <TouchableOpacity style={styles.centeredView} activeOpacity={1}>
                <View style={styles.modalView}>
                    <Text style={styles.text}>Tem certeza que você deseja excluir essa publicação?</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleDeletePublication}>
                            <Text style={styles.textButton}>Confirmar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCancel} onPress={onCancel}>
                            <Text style={styles.textButtonCancel}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}
