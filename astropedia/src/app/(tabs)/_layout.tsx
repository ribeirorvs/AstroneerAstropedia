import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";


export default function TabsLayout(){
    return (
        <Tabs
            screenOptions={{
                headerShown: false
            }}
        >
            <Tabs.Screen 
                name="planets"
                options={{
                    title: "Planets",
                    tabBarIcon: ({size, color}) => (
                        <MaterialIcons
                            name="home"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Tabs>
    )
}