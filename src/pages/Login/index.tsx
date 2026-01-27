import { Button, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function LoginPage() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                <View style={styles.logoContainer}>
                    <MaterialCommunityIcons name="progress-clock" size={70} color={styles.logo.color} />
                    <Text style={styles.logoTitle}>Greislógio</Text>
                    <Text style={styles.logoSubtitle}>R  E  L  O  J  O  A  R  I  A</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerTextContainer}>
                    <Text style={styles.footerText}>Faça login para ver as novidades em relógios.</Text>
                </View>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.formTitle}>Email</Text>
                        <TextInput placeholder="Digite seu email..." style={styles.formInput}/>
                    </View>
                    <View>
                        <Text style={styles.formTitle}>Senha</Text>
                        <TextInput placeholder="Digite sua senha..." style={styles.formInput} />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}