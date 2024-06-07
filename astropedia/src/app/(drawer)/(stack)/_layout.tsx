import { Header } from "@/components/header";
import { Stack } from "expo-router";


export default function StackLayout(){
    return (
        <Stack 
            screenOptions={{
                header: () => <Header />
            }}
        >
            <Stack.Screen name="planets" />
            <Stack.Screen name="planet/[id]" />
        </Stack>
    )
}