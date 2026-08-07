import "react-native-gesture-handler";

import BadgerNews from "./src/components/BadgerNews";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
    return (
        <>
            <SafeAreaProvider>
                <BadgerNews />
            </SafeAreaProvider>
        </>
    );
}
