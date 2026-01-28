import { FlatList, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import Logo from "@/components/Logo";
import Header from "@/components/Header";
import Card from "@/components/Card";
import { data } from "@/data/data";

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
                        <FlatList
                            data={data}
                            renderItem={({ item }) =>
                                <Card
                                    id={item.id} image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            }
                            keyExtractor={(item) => item.id}
                            horizontal
                            style={styles.flatList}
                        />
                    </View>
                    <View style={styles.main3}>
                        <View>
                            <Text style={styles.title2}>Coleções de relógios</Text>
                        </View>
                        <View style={styles.colectionContainer}>
                            <Text style={styles.textValues}>Sociais</Text>
                        </View>
                        <FlatList
                            data={data}
                            renderItem={({ item }) =>
                                <Card
                                    id={item.id} image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            }
                            keyExtractor={(item) => item.id}
                            horizontal
                            style={styles.flatList}
                        />
                        <View style={styles.colectionContainer}>
                            <Text style={styles.textValues}>Esportivos</Text>
                        </View>
                        <FlatList
                            data={data}
                            renderItem={({ item }) =>
                                <Card
                                    id={item.id} image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            }
                            keyExtractor={(item) => item.id}
                            horizontal
                            style={styles.flatList}
                        />
                        <View style={styles.colectionContainer}>
                            <Text style={styles.textValues}>Smartwatches</Text>
                        </View>
                        <FlatList
                            data={data}
                            renderItem={({ item }) =>
                                <Card
                                    id={item.id} image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            }
                            keyExtractor={(item) => item.id}
                            horizontal
                            style={styles.flatList}
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