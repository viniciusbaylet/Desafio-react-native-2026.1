import { AuthProvider } from "@/contexts/authContext";
import { Stack } from "expo-router";

export default function ManagementLayout() {
    return (
        <AuthProvider>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="createPublication" options={{ headerShown: false }} />
            </Stack>
        </AuthProvider>
    )
}