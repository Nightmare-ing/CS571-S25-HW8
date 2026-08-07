import { Text, View, Switch, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Option from "../items/Option";

function BadgerPreferencesScreen(props) {
    return (
        <SafeAreaView>
            <ScrollView style={{ padding: "4%" }}>
                <Option />
            </ScrollView>
        </SafeAreaView>
    );
}

export default BadgerPreferencesScreen;
