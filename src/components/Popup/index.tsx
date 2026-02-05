import { LogOut, Menu, X } from "lucide-react-native";
import { useState } from "react";
import { Modal, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useAuth } from "@/hooks/useAuth";
import { router } from "expo-router";

export default function Popup() {

    const [visible, setVisible] = useState(false);

    const { signOut } = useAuth();

    return (
        <View>
            <TouchableOpacity onPress={() => setVisible(!visible)}>
                {visible ? (
                    <X size={40} color={styles.menuIcon.color} />
                ) : (
                    <Menu size={40} color={styles.menuIcon.color} />
                )}
            </TouchableOpacity>
            <Modal transparent visible={visible}>
                <SafeAreaView style={styles.safeArea}>
                    <TouchableOpacity onPress={() => setVisible(false)} style={styles.safeArea} />
                    <View style={styles.popup}>
                        <View style={styles.viewContainer}>
                            <TouchableOpacity style={styles.container} onPress={() => router.push("/contacts")}>
                                <Text style={styles.text}>Contatos</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewContainer}>
                            <TouchableOpacity style={styles.container} onPress={() => router.push("/management")}>
                                <Text style={styles.text}>Gerenciar</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewContainer}>
                            <TouchableOpacity style={[styles.container, { borderColor: styles.popup.backgroundColor }]} onPress={signOut}>
                                <LogOut size={30} color={styles.menuIcon.color} />
                                <Text style={styles.text}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    )
}