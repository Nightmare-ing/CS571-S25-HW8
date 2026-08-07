import { Text, View, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function BadgerPreferencesScreen(props) {
    return (
        <SafeAreaView>
            <View>
                <Switch value={true}></Switch>
            </View>
        </SafeAreaView>
    );
}

export default BadgerPreferencesScreen;
