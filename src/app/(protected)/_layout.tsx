import { useAuth } from "@/hooks/useAuth";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
    const { isLoggedIn } = useAuth();
    
    if(!isLoggedIn) {
        return <Redirect href="/login" />    
    }

    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="contacts" options={{ headerShown: false }} />
        </Stack>
    )
}