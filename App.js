import "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import BadgerNews from "./src/components/BadgerNews";

export default function App() {
    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
                    <BadgerNews />
                </SafeAreaView>
            </SafeAreaProvider>
        </>
    );
}
