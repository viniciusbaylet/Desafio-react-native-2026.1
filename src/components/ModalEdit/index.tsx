import { Image, ImageBackground, ImageSourcePropType, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Camera, ImageIcon, X } from "lucide-react-native";
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import FooterButton from "../FooterButton";
import api from "@/services/api";
import DropDownPicker from 'react-native-dropdown-picker';

type modalEditProps = {
    id: number | null
    image: string
    name: string
    description: string
    price: string
    visible: boolean
    onConfirm: () => void
    onCancel: () => void
}

export default function ModalEdit({ id, image, name, description, price, visible, onConfirm, onCancel }: modalEditProps) {
    const [imageUri, setImageUri] = useState<string>("");
    const [nameEdit, setNameEdit] = useState<string>("");
    const [descriptionEdit, setDescriptionEdit] = useState<string>("");
    const [priceEdit, setPriceEdit] = useState<string>("");
    const [caretoryIdEdit, setCategoryIdEdit] = useState("");
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: 'Social', value: '1' },
        { label: 'Esportivo', value: '2' },
        { label: 'Smartwatch', value: '3' }
    ]);

    useEffect(() => {
        setNameEdit(name);
        setDescriptionEdit(description);
        setPriceEdit(price.toString());
        setImageUri(image);
    }, [name, description, price, image]);

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

    async function handleEditPublication() {
        try {
            await api.put(`/baylet/publications/${id}`, {
                name: nameEdit,
                description: descriptionEdit,
                price: Number(priceEdit),
                category_id: Number(caretoryIdEdit),
                created_by: 1,
                status: "ACTIVE"
            });
            onConfirm();
        } catch (error) {
            console.error("Erro ao editar publicação: ", error);
        }
    }

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
                                value={nameEdit}
                                onChangeText={setNameEdit}
                            />
                        </View>

                        < View style={styles.container}>
                            <Text style={styles.formTitle}>Descrição</Text>
                            <TextInput
                                style={styles.input}
                                value={descriptionEdit}
                                onChangeText={setDescriptionEdit}
                            />
                        </View>

                        <View style={styles.container}>
                            <Text style={styles.formTitle}>Preço</Text>
                            <TextInput
                                style={styles.input}
                                value={priceEdit?.toString()}
                                onChangeText={setPriceEdit}
                            />
                        </View>

                        <DropDownPicker
                            open={open}
                            value={caretoryIdEdit}
                            items={items}
                            setOpen={setOpen}
                            setValue={setCategoryIdEdit}
                            setItems={setItems}
                            placeholder="Selecione a categoria do relógio"
                        />
                    </View>
                    <FooterButton buttonText="Editar" onPress={handleEditPublication} disabled={false} />
                </View>
            </TouchableOpacity>
        </Modal>
    )
}