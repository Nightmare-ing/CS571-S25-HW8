import { ScrollView, Switch, View, Text } from "react-native";

function Option(props) {
    return (
        <View
            style={{
                borderRadius: 12,
                backgroundColor: "white",
                alignItems: "center",
                padding: 8,
                margin: 8,
            }}
        >
            <Text style={{ padding: 4 }}>
                Currently showing{" "}
                <Text style={{ fontWeight: "bold" }}>{props.pref}</Text>{" "}
                articles
            </Text>
            <View>
                <Switch
                    value={true}
                    trackColor={{ false: "#E5E5EA", true: "#fcc5b6" }}
                    thumbColor={"red"}
                    ios_backgroundColor={"#E5E5EA"}
                />
            </View>
        </View>
    );
}

export default Option;
