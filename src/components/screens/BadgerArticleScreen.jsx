import CS571 from "@cs571/mobile-client";
import { map } from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { ScrollView, View, Image, StyleSheet, Animated } from "react-native";
import { Text } from "react-native-paper";

function BadgerArticleScreen(props) {
    const [articleData, setArticleData] = useState(null);
    const opVal = useRef(new Animated.Value(0));

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

    useEffect(() => {
        if (articleData) {
            Animated.timing(opVal.current, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }).start();
        }
    }, [articleData]);

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
                        <View style={styles.info}>
                            <Text variant="titleLarge" style={styles.title}>
                                {articleData.title}
                            </Text>
                            <Text variant="titleSmall">
                                By {articleData.author}
                            </Text>
                            <Text variant="bodyMedium" style={styles.infoLink}>
                                Read full article here.
                            </Text>
                        </View>
                        <Animated.View
                            style={{
                                opacity: opVal.current,
                            }}
                        >
                            {articleData.body.map((item, index) => (
                                <Text key={index} variant="bodyMedium">
                                    {item}
                                </Text>
                            ))}
                        </Animated.View>
                    </View>
                </ScrollView>
            ) : (
                <Text style={styles.loading}>The content is loading...</Text>
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
        color: "red",
    },
    loading: {
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default BadgerArticleScreen;
