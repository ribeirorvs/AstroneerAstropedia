import { layoutStyle } from "@/styles/layoutStyles";
import { Stack } from "expo-router";


export default function StackLayout(){
    return (
        <Stack 
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="welcome" />
        </Stack>
    )
}