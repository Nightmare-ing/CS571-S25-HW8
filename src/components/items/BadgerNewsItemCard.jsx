import { Card } from "react-native-paper";
import { Image } from "react-native-web";

function BadgerNewsItemCard(props) {
    return (
        <Card
            style={{
                padding: "2%",
                margin: "3%",
            }}
        >
            <Card.Cover
                style={{
                    borderRadius: 0,
                }}
                source={{
                    uri: `https://raw.githubusercontent.com/CS571-S25/hw8-api-static-content/main/${props.img}`,
                }}
            />
            <Card.Title
                style={{
                    paddingTop: 4,
                    paddingHorizontal: "2%",
                }}
                title={props.title}
                titleNumberOfLines={0}
            />
        </Card>
    );
}

export default BadgerNewsItemCard;
