import { ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import Logo from "@/components/Logo";
import Header from "@/components/Header";
import Card from "@/components/Card";

export default function HomePage() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Header />
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.main}>
                    <ImageBackground source={require("@/assets/images/backgroundImage.jpg")} style={styles.main1} resizeMode="cover">
                        <View style={styles.main1Container}>
                            <Logo color={styles.menuIcon.color} showIcon={false} />
                            <View style={styles.textContainer}>
                                <Text style={styles.textValues}>Encontre relógios sofisticados, clássicos e modernos para todos os estilos.</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.main2}>
                        <View>
                            <Text style={styles.title}>Relógios em destaque</Text>
                        </View>
                        <Card
                            id="1"
                            image={require("@/assets/images/backgroundImage.jpg")}
                            title="Orient SolarTech"
                            description="Opção tecnológica e elegante."
                            price="1995,99"
                        />
                    </View>
                    <View style={styles.main3}>
                        <View>
                            <Text style={styles.title2}>Coleções de relógios</Text>
                        </View>
                        <View style={styles.colectionContainer}>
                            <Text style={styles.textValues}>Sociais</Text>
                        </View>
                        <Card
                            id="1"
                            image={require("@/assets/images/backgroundImage.jpg")}
                            title="Orient SolarTech"
                            description="Opção tecnológica e elegante."
                            price="1995,99"
                        />
                        <View style={styles.colectionContainer}>
                            <Text style={styles.textValues}>Esportivos</Text>
                        </View>
                        <Card
                            id="1"
                            image={require("@/assets/images/backgroundImage.jpg")}
                            title="Orient SolarTech"
                            description="Opção tecnológica e elegante."
                            price="1995,99"
                        />
                        <View style={styles.colectionContainer}>
                            <Text style={styles.textValues}>Smartwatches</Text>
                        </View>
                        <Card
                            id="1"
                            image={require("@/assets/images/backgroundImage.jpg")}
                            title="Orient SolarTech"
                            description="Opção tecnológica e elegante."
                            price="1995,99"
                        />
                    </View>
                </View>
                <View style={styles.footer}>
                    <Logo color={styles.title.color} showIcon={false} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}