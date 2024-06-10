import { images } from "@/assets";
import { Header } from "@/components/header";
import { translate } from "@/libs/localization";
import colors from "@/styles/colors";
import { Drawer } from "expo-router/drawer";
import { Image, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";



export default function DrawerLayout(){
    return (
        <Drawer
            backBehavior="history"
            screenOptions={{
                header: () => <Header />,
                drawerStyle: {
                    backgroundColor: colors.background,
                    width: "75%",
                    paddingTop: 20
                },
                //lazy: true,
                drawerType: 'slide',
                swipeEnabled: true,
                drawerActiveTintColor: colors.blue,
                drawerInactiveTintColor: colors.white,
                drawerActiveBackgroundColor: colors.black,
            }}
        >
            <Drawer.Screen
                name="planets"
                
                options={{
                    title: translate("planetsTitle"),
                    drawerIcon: ({size, color}) => (
                        <Image 
                            source={images.sylva}
                            style={{
                                tintColor: color,
                                width: size,
                                height: size,
                                marginRight: -25
                            }}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="resources"
                options={{
                    title: translate("resourcesTitle"),
                    drawerIcon: ({size, color}) => (
                        <Image 
                            source={images.compound}
                            style={{
                                tintColor: color,
                                width: size,
                                height: size,
                                marginRight: -25
                            }}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="printers"
                options={{
                    title: translate("printers"),
                    drawerIcon: ({size, color}) => (
                        <Image 
                            source={images.backpackPrinter}
                            style={{
                                tintColor: color,
                                width: size,
                                height: size,
                                marginRight: -25
                            }}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="favorites"
                options={{
                    title: translate("favoritesTitle"),
                    drawerIcon: ({size, color}) => (
                        <MaterialIcons
                            name="star"
                            size={size}
                            color={color}
                            style={{
                                marginRight: -25
                            }}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="railway"
                options={{
                    title: translate("railway"),
                    drawerIcon: ({size, color}) => (
                        <Image 
                            source={images.railEngine}
                            style={{
                                tintColor: color,
                                width: size,
                                height: size,
                                marginRight: -25
                            }}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="setting"
                options={{
                    title: translate("settings"),
                    drawerIcon: ({size, color}) => (
                        <MaterialIcons
                            name="settings"
                            size={size}
                            color={color}
                            style={{
                                marginRight: -25
                            }}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="planet/[id]"
                options={{
                    drawerItemStyle: {display: 'none'}
                }}
            />
            <Drawer.Screen
                name="resource/[id]"
                options={{
                    drawerItemStyle: {display: 'none'}
                }}
            />
            <Drawer.Screen
                name="printer/[id]"
                options={{
                    drawerItemStyle: {display: 'none'}
                }}
            />
            <Drawer.Screen
                name="contactUs"
                options={{
                    drawerItemStyle: {display: 'none'}
                }}
            />
            <Drawer.Screen
                name="railway/[id]"
                options={{
                    drawerItemStyle: {display: 'none'}
                }}
            />
        </Drawer>
    )
}