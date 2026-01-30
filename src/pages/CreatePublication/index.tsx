import Header from "@/components/Header"
import { router } from "expo-router"
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import FooterButton from "@/components/FooterButton"
import { Camera } from "lucide-react-native"


export default function CreatePublicationPage() {

    function handleCreatePublication() {
        console.log("Você criou uma nova publicação!");
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header onBackPress={() => router.push("/management")} />
            <View style={styles.main}>
                <View>
                    <Text style={styles.title}>Nova publicação</Text>
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.content}>

                        <View style={styles.cameraContainer}>
                            <TouchableOpacity style={styles.button}>
                                <Camera size={100} color={styles.icon.color} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.container}>
                            <Text style={styles.formTitle}>Nome</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o nome do relógio..."
                                placeholderTextColor={"#aaa9a9ff"}
                            />
                        </View>

                        <View style={styles.container}>
                            <Text style={styles.formTitle}>Descrição</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite uma descrição do relógio..."
                                placeholderTextColor={"#aaa9a9ff"}
                            />
                        </View>

                        <View style={styles.container}>
                            <Text style={styles.formTitle}>Preço</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o preço do relógio..."
                                placeholderTextColor={"#aaa9a9ff"}
                            />
                        </View>

                    </View>
                </ScrollView>
            </View>
            <FooterButton buttonText="Criar" onPress={handleCreatePublication} disabled={false} />
        </SafeAreaView>
    )
}