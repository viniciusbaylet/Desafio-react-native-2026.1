import { Linking, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Header from "@/components/Header";
import { router } from "expo-router";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react-native";

export default function ContactsPage() {

    function openLink(url: string) {
        Linking.openURL(url);    
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header onBackPress={() => router.push("/(protected)")} />
            <View style={styles.main}>
                <View>
                    <Text style={styles.title}>Contate-nos</Text>
                </View>
                <View style={styles.column}>
                    <View style={styles.line}>
                        <TouchableOpacity style={styles.button} onPress={() => openLink("https://www.instagram.com/codeempresajunior/")}>
                            <Instagram size={100} color={styles.icons.color} />
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.button} onPress={() => openLink("https://www.facebook.com/codeempresajunior")}>
                            <Facebook size={100} color={styles.icons.color} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line}>
                        <TouchableOpacity style={styles.button}>
                            <Instagram size={100} color={styles.icons.color} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => openLink("https://api.whatsapp.com/send/?phone=5532991519313&text&type=phone_number&app_absent=0")}>
                            <Phone size={100} color={styles.icons.color} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.addressContainer}>
                    <MapPin size={30} color={styles.addressText.color} />
                    <Text style={styles.addressText}>Rua José Lourenço Kelmer, 114, Bairro São Pedro, Juiz de Fora - MG</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}