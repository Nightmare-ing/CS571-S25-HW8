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
                Currently{props.value ? " " : " NOT "}showing
                <Text style={{ fontWeight: "bold" }}> {props.pref} </Text>{" "}
                articles
            </Text>
            <View>
                <Switch
                    value={props.value}
                    trackColor={{ false: "#E5E5EA", true: "#fcc5b6" }}
                    thumbColor={props.value ? "red" : "#E5E5EA"}
                    ios_backgroundColor={"#E5E5EA"}
                    onValueChange={(newValue) => props.onChange(props.pref)}
                />
            </View>
        </View>
    );
}

export default Option;
