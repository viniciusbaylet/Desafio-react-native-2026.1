import { ImageBackground, SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

import Logo from "@/components/Logo";
import Header from "@/components/Header";
import { data } from "@/data/data";
import Carousel from "@/components/Carousel";

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
                        <Carousel data={data} />
                    </View>
                    <View style={styles.main3}>
                        <View>
                            <Text style={styles.title2}>Coleções de relógios</Text>
                        </View>
                        <View style={styles.colectionContainer}>
                            <Text style={styles.textValues}>Sociais</Text>
                        </View>
                        <Carousel data={data} />
                        <View style={styles.colectionContainer}>
                            <Text style={styles.textValues}>Esportivos</Text>
                        </View>
                        <Carousel data={data} />
                        <View style={styles.colectionContainer}>
                            <Text style={styles.textValues}>Smartwatches</Text>
                        </View>
                        <Carousel data={data} />
                    </View>
                </View>
                <View style={styles.footer}>
                    <Logo color={styles.title.color} showIcon={false} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}