import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import BadgerNewsScreen from "../screens/BadgerNewsScreen";
import BadgerPreferencesScreen from "../screens/BadgerPreferencesScreen";
import BadgerNewsStack from "./BadgerNewsStack";
import { colorFill } from "ionicons/icons";

const BadgerTabNavigator = createBottomTabNavigator();

function BadgerTabs(props) {
    return (
        <BadgerTabNavigator.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: "red",
                headerStyle: { backgroundColor: "lightblue" },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "News") {
                        iconName = focused ? "newspaper" : "newspaper-outline";
                    } else if (route.name === "Preferences") {
                        iconName = focused ? "settings" : "settings-outline";
                    }
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
            })}
        >
            <BadgerTabNavigator.Screen
                name="News"
                component={BadgerNewsStack}
                options={{
                    headerShown: false,
                }}
            />
            <BadgerTabNavigator.Screen
                name="Preferences"
                component={BadgerPreferencesScreen}
                options={{ headerShown: false }}
            />
        </BadgerTabNavigator.Navigator>
    );
}

export default BadgerTabs;
