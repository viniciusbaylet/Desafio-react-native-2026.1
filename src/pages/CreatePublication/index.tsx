import Header from "@/components/Header"
import { router } from "expo-router"
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import FooterButton from "@/components/FooterButton"
import { Camera, Image as ImageIcon } from "lucide-react-native"
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react"


export default function CreatePublicationPage() {

    const [imageUri, setImageUri] = useState<string | null>(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    function handleCreatePublication() {
        console.log("Você criou uma nova publicação!");
    }

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
        <SafeAreaView style={styles.safeArea}>
            <Header onBackPress={() => router.push("/management")} />
            <View style={styles.main}>
                <View>
                    <Text style={styles.title}>Nova publicação</Text>
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.content}>

                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.button} onPress={takePicture}>
                                <Camera size={100} color={styles.icon.color} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={accessPhoneGalery}>
                                <ImageIcon size={100} color={styles.icon.color} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.container}>
                            <Text style={styles.formTitle}>Nome</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o nome do relógio..."
                                placeholderTextColor={"#aaa9a9ff"}
                                value={name}
                                onChangeText={setName}
                            />
                        </View>

                        {imageUri && (
                            <TouchableOpacity onPress={accessPhoneGalery}>
                                <Image
                                    source={{ uri: imageUri }}
                                    style={styles.previewImage}
                                />
                            </TouchableOpacity>
                        )}

                            < View style={styles.container}>
                        <Text style={styles.formTitle}>Descrição</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite uma descrição do relógio..."
                            placeholderTextColor={"#aaa9a9ff"}
                            value={description}
                            onChangeText={setDescription}
                        />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.formTitle}>Preço</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o preço do relógio..."
                            placeholderTextColor={"#aaa9a9ff"}
                            value={price}
                            onChangeText={setPrice}
                        />
                    </View>

            </View>
        </ScrollView>
            </View >
        <FooterButton buttonText="Criar" onPress={handleCreatePublication} disabled={false} />
        </SafeAreaView >
    )
}