import { Text, View, Switch, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Option from "../items/Option";
import { useContext } from "react";
import NewsContext from "../contexts/NewsContext";

function BadgerPreferencesScreen(props) {
    const { prefs } = useContext(NewsContext);

    return (
        <SafeAreaView>
            <ScrollView style={{ padding: 12 }}>
                {prefs.map((pref, index) => (
                    <Option key={index} pref={pref} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

export default BadgerPreferencesScreen;
