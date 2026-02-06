import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type modalExcluirProps = {
    visible: boolean
    onConfirm: () => void
    onCancel: () => void
}

export default function ModalDelete({visible, onConfirm, onCancel}: modalExcluirProps) {
    return (
        <Modal animationType="fade" transparent={true} visible={visible} >
            <TouchableOpacity style={styles.centeredView} activeOpacity={1}>
                <View style={styles.modalView}>
                    <Text style={styles.text}>Tem certeza que você deseja excluir essa publicação?</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={onConfirm}>
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
