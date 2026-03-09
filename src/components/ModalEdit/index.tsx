import { Image, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Camera, ImageIcon, X } from "lucide-react-native";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import FooterButton from "../FooterButton";
import api from "@/services/api";
import DropDownPicker from "react-native-dropdown-picker";

type dataProps = {
    id: number;
    name: string;
    description: string;
    price: number;
    category_id: number;
    created_by: number;
    status: string;
    created_at: string;
    updated_at: string;
    image: string;
};

type modalEditProps = {
    publication: dataProps | null;
    visible: boolean;
    onConfirm: () => void;
    onCancel: () => void;
};

export default function ModalEdit({ publication, visible, onConfirm, onCancel }: modalEditProps) {

    const [imageUri, setImageUri] = useState("");
    const [nameEdit, setNameEdit] = useState("");
    const [descriptionEdit, setDescriptionEdit] = useState("");
    const [priceEdit, setPriceEdit] = useState("");
    const [categoryIdEdit, setCategoryIdEdit] = useState<string | null>(null);

    const [open, setOpen] = useState(false);

    const [items, setItems] = useState([
        { label: "Social", value: "1" },
        { label: "Esportivo", value: "2" },
        { label: "Smartwatch", value: "3" },
    ]);

    async function takePicture() {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (!permissionResult.granted) {
            alert("Você recusou o acesso à câmera!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    }

    async function accessPhoneGalery() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    }

    async function handleEditPublication() {
        if (!publication) return;

        try {
            await api.put(`/baylet/publications/${publication.id}`, {
                name: nameEdit,
                description: descriptionEdit,
                price: Number(priceEdit),
                category_id: Number(categoryIdEdit),
                status: "ACTIVE",
            });

            onConfirm();
        } catch (error) {
            console.error("Erro ao editar publicação:", error);
        }
    }

    useEffect(() => {
        if (visible && publication) {
            setNameEdit(publication.name);
            setDescriptionEdit(publication.description);
            setPriceEdit(publication.price.toString());
            setImageUri(publication.image);
            setCategoryIdEdit(publication.category_id.toString());
        }
    }, [visible, publication]);

    return (
        <Modal animationType="fade" transparent visible={visible}>
            <TouchableOpacity style={styles.centeredView} activeOpacity={1}>
                <View style={styles.card}>
                    <TouchableOpacity onPress={onCancel} style={styles.closeButton}>
                        <X size={24} color="#fff" />
                    </TouchableOpacity>

                    {imageUri ? (
                        <TouchableOpacity onPress={accessPhoneGalery}>
                            <Image source={{ uri: imageUri }} style={styles.previewImage} />
                        </TouchableOpacity>
                    ) : (
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.button} onPress={takePicture}>
                                <Camera size={100} color={styles.icon.color} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={accessPhoneGalery}>
                                <ImageIcon size={100} color={styles.icon.color} />
                            </TouchableOpacity>
                        </View>
                    )}

                    <View style={styles.cardContent}>
                        <View style={styles.container}>
                            <Text style={styles.formTitle}>Nome</Text>
                            <TextInput
                                style={styles.input}
                                value={nameEdit}
                                onChangeText={setNameEdit}
                            />
                        </View>

                        <View style={styles.container}>
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
                                value={priceEdit}
                                onChangeText={setPriceEdit}
                            />
                        </View>

                        <DropDownPicker<string>
                            open={open}
                            value={categoryIdEdit}
                            items={items}
                            setOpen={setOpen}
                            setValue={setCategoryIdEdit}
                            setItems={setItems}
                            placeholder="Selecione a categoria do relógio"
                        />
                    </View>

                    <FooterButton
                        buttonText="Editar"
                        onPress={handleEditPublication}
                        disabled={false}
                    />
                </View>
            </TouchableOpacity>
        </Modal>
    );
}