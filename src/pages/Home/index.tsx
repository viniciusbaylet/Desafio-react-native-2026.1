import { ImageBackground, SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

import Logo from "@/components/Logo";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import api from "@/services/api";
import { useEffect, useState } from "react";

type publicationProps = {
    id: number;
    name: string;
    description: string;
    price: number;
    category_id: number;
    created_by: number;
    status: string;
    created_at: string;
    updated_at: string;
}

export default function HomePage() {

    const [publications, setPublications] = useState<publicationProps[]>([]);

    async function fetchPublications() {
        try {
            const response = await api.get("/baylet/publications");
            setPublications(response.data.publications);
        } catch (error) {
            console.error("Erro ao buscar publicações: ", error);
        }
    }

    const socialWatchesArray = publications.filter(publication => publication.category_id === 1);
    const sportsWatchesArray = publications.filter(publication => publication.category_id === 2);
    const smartWatchesArray = publications.filter(publication => publication.category_id === 3);

    useEffect(() => {
        fetchPublications();
    }, []);

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
                        <Carousel data={sportsWatchesArray} />
                    </View>
                    <View style={styles.main3}>
                        <View>
                            <Text style={styles.title2}>Coleções de relógios</Text>
                        </View>
                        <View style={styles.colectionContainer}>
                            <Text style={styles.textValues}>Sociais</Text>
                        </View>
                        <Carousel data={socialWatchesArray} />
                        <View style={styles.colectionContainer}>
                            <Text style={styles.textValues}>Esportivos</Text>
                        </View>
                        <Carousel data={sportsWatchesArray} />
                        <View style={styles.colectionContainer}>
                            <Text style={styles.textValues}>Smartwatches</Text>
                        </View>
                        <Carousel data={smartWatchesArray} />
                    </View>
                </View>
                <View style={styles.footer}>
                    <Logo color={styles.title.color} showIcon={false} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}