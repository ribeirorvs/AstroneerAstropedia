import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { images } from "@/assets";
import { Header } from "@/components/header";


export default function TabsLayout(){
    return (
        <Tabs
            screenOptions={{
                header: () => <Header />,
            }}
        >
            <Tabs.Screen 
                name="planets"
                options={{
                    title: "Planets",
                    tabBarIcon: ({size, color}) => (
                        <Image 
                            source={images["sylva"]}
                            style={{
                                tintColor: color,
                                width: size,
                                height: size
                            }}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="resources"
                options={{
                    title: "Resources",
                    tabBarIcon: ({size, color}) => (
                        <Image 
                            source={images["compound"]}
                            style={{
                                tintColor: color,
                                width: size,
                                height: size
                            }}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="printers"
                options={{
                    title: "Printers",
                    tabBarIcon: ({size, color}) => (
                        <Image 
                            source={images["backpackPrinter"]}
                            style={{
                                tintColor: color,
                                width: size,
                                height: size
                            }}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="favorites"
                options={{
                    title: "Favorites",
                    tabBarIcon: ({size, color}) => (
                        <MaterialIcons
                            name="star"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="setting"
                options={{
                    title: "Setting",
                    tabBarIcon: ({size, color}) => (
                        <MaterialIcons
                            name="settings"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="contactUs"
                options={{
                    href: null
                }}
            />
            <Tabs.Screen 
                name="planetsDetails"
                options={{
                    href: null
                }}
            />
        </Tabs>
    )
}