import { Text, View, Switch, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Option from "../items/Option";
import { useContext } from "react";
import NewsContext from "../contexts/NewsContext";

function BadgerPreferencesScreen(props) {
    const { prefs, setPrefs } = useContext(NewsContext);

    function changeVal(pref) {
        prefs[pref] = !prefs[pref];
        setPrefs({ ...prefs });
    }

    return (
        <SafeAreaView>
            <ScrollView style={{ padding: 12 }}>
                {Object.keys(prefs).map((key, index) => (
                    <Option
                        key={index}
                        pref={key}
                        value={prefs[key]}
                        onChange={changeVal}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

export default BadgerPreferencesScreen;
