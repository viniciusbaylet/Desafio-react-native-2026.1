import { Alert, Button, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import Logo from "@/components/Logo";


export default function LoginPage() {

    const { signIn } = useAuth();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleLogin() {
        if(!email.trim() || !senha.trim()){
            Alert.alert("Preencha os campos de email e senha para continuar.");
            return;
        }
        signIn();
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                <Logo color={styles.logo.color} showIcon={true} />
            </View>
            <View style={styles.footer}>
                <View style={styles.footerTextContainer}>
                    <Text style={styles.footerText}>Faça login para ver as novidades em relógios.</Text>
                </View>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.formTitle}>Email</Text>
                        <TextInput placeholder="Digite seu email..." style={styles.formInput} value={email} onChangeText={setEmail}/>
                    </View>
                    <View>
                        <Text style={styles.formTitle}>Senha</Text>
                        <TextInput placeholder="Digite sua senha..." style={styles.formInput} value={senha} onChangeText={setSenha} secureTextEntry/>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}