import CS571 from "@cs571/mobile-client";
import { useEffect, useState } from "react";
import { ScrollView, View, Image, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

function BadgerArticleScreen(props) {
    const [articleData, setArticleData] = useState(null);

    useEffect(() => {
        fetch(
            `https://cs571.org/rest/s25/hw8/article?id=${props.route.params.id}`,
            {
                headers: {
                    "X-CS571-ID": CS571.getBadgerId(),
                },
            },
        )
            .then((res) => res.json())
            .then((data) => {
                setArticleData(data);
            });
    }, []);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
            }}
        >
            {articleData ? (
                <ScrollView>
                    <Image
                        style={styles.img}
                        source={{
                            uri: `https://raw.githubusercontent.com/CS571-S25/hw8-api-static-content/main/${articleData.img}`,
                        }}
                    />
                    <View
                        style={{
                            padding: "3%",
                        }}
                    >
                        <Text variant="titleLarge" style={styles.title}>
                            {articleData.title}
                        </Text>
                        <View style={styles.info}>
                            <Text variant="titleSmall">
                                By {articleData.author}
                            </Text>
                            <Text variant="bodyMedium" style={styles.infoLink}>
                                Read full article here.
                            </Text>
                        </View>
                        <Text variant="bodyMedium">{articleData.body[0]}</Text>
                    </View>
                </ScrollView>
            ) : (
                <Text style={styles.loading}>Loading...</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: "100%",
        aspectRatio: 16 / 9,
        resizeMode: "cover",
    },
    title: {
        paddingBottom: 12,
        fontWeight: "bold",
    },
    info: {
        paddingBottom: 12,
    },
    infoLink: {
        color: "cyan",
    },
    loading: {
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default BadgerArticleScreen;
