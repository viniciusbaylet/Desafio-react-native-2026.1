import { AuthProvider } from "@/contexts/authContext";
import { Stack } from "expo-router";

export default function Layout() {
    return (
        <AuthProvider>
            <Stack>
                <Stack.Screen name="(protected)" options={{ headerShown: false }} />
                <Stack.Screen name="login" options={{ headerShown: false }} />
            </Stack>
        </AuthProvider>
    )
}