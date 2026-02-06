import { Image, ImageBackground, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { data } from "@/data/data";
import { Camera, ImageIcon, X } from "lucide-react-native";
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import FooterButton from "../FooterButton";

type modalEditProps = {
    id: string | null
    visible: boolean
    onConfirm: () => void
    onCancel: () => void
}

export default function ModalVisualize({ id, visible, onConfirm, onCancel }: modalEditProps) {
    const publication = data.find(publication => publication.id == id);
    if (!publication) return;

    const [imageUri, setImageUri] = useState<string | null>(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    // useEffect(() => {
    //     if (publication) {
    //         setName(publication.title);
    //         setDescription(publication.description);
    //         setPrice(publication.price);
    //         setImageUri(publication.image || null);
    //     }
    // }, [publication]);

    // Função para tirar uma foto com a câmera
    async function takePicture() {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (!permissionResult.granted) {
            alert("Você recusou o acesso à câmera!");
            return;
        }
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    // Função para selecionar uma imagem da galeria
    async function accessPhoneGalery() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });
        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    return (
        <Modal animationType="fade" transparent={true} visible={visible} >
            <TouchableOpacity style={styles.centeredView} activeOpacity={1}>
                <View style={styles.card}>
                    <TouchableOpacity onPress={onCancel} style={styles.closeButton}>
                        <X size={24} color={"#fff"} />
                    </TouchableOpacity>

                    {imageUri ? (
                        <TouchableOpacity onPress={accessPhoneGalery}>
                            <Image
                                source={{ uri: imageUri }}
                                style={styles.previewImage}
                            />
                        </TouchableOpacity>
                    )
                        : (
                            <View style={styles.buttonsContainer}>
                                <TouchableOpacity style={styles.button} onPress={takePicture}>
                                    <Camera size={100} color={styles.icon.color} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={accessPhoneGalery}>
                                    <ImageIcon size={100} color={styles.icon.color} />
                                </TouchableOpacity>
                            </View>
                        )
                    }

                    <View style={styles.cardContent}>
                        <View style={styles.container}>
                            <Text style={styles.formTitle}>Nome</Text>
                            <TextInput
                                style={styles.input}
                                value={name}
                                onChangeText={setName}
                            />
                        </View>

                        < View style={styles.container}>
                            <Text style={styles.formTitle}>Descrição</Text>
                            <TextInput
                                style={styles.input}
                                value={description}
                                onChangeText={setDescription}
                            />
                        </View>

                        <View style={styles.container}>
                            <Text style={styles.formTitle}>Preço</Text>
                            <TextInput
                                style={styles.input}
                                value={price}
                                onChangeText={setPrice}
                            />
                        </View>
                    </View>
                    <FooterButton buttonText="Editar" onPress={onConfirm} disabled={false} />
                </View>
            </TouchableOpacity>
        </Modal>
    )
}