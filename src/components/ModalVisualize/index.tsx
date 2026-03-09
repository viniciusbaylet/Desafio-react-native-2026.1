import { ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Card from "../Card";
import { X } from "lucide-react-native";
import api from "@/services/api";
import { useEffect, useState } from "react";

type modalExcluirProps = {
    id: number | null
    visible: boolean
    onCancel: () => void
}

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

export default function ModalVisualize({ id, visible, onCancel }: modalExcluirProps) {

    const [data, setData] = useState<dataProps>();

    async function getPublicationById() {
        try {
            const response = await api.get(`/baylet/publications/${id}`);
            setData(response.data.publication);
            console.log("publicacao individual: ", response.data);
        } catch (error) {
            console.error("Erro ao buscar publicação pelo id: ", error);
        }

    }

    useEffect(() => {
        if (visible && id) {
            getPublicationById();
        }
    }, [id, visible]);

    return (
        <Modal animationType="fade" transparent={true} visible={visible} >
            <TouchableOpacity style={styles.centeredView} activeOpacity={1}>
                <View style={styles.card}>
                    <TouchableOpacity onPress={onCancel} style={styles.closeButton}>
                        <X size={24} color={"#fff"} />
                    </TouchableOpacity>
                    <ImageBackground source={{ uri: data?.image }} style={styles.cardImage} />
                    <View style={styles.cardContent}>
                        <Text style={styles.title}>{data?.name}</Text>
                        <Text style={styles.description}>{data?.description}</Text>
                        <Text style={styles.title}>R${data?.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}