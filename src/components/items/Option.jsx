import { ScrollView, Switch, View, Text } from "react-native";

function Option(props) {
    return (
        <View
            style={{
                borderRadius: 12,
                backgroundColor: "white",
                alignItems: "center",
                padding: 8,
            }}
        >
            <Text>Currently showing example articles</Text>
            <Switch value={true}></Switch>
        </View>
    );
}

export default Option;
