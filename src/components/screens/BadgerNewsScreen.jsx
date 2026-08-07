import CS571 from "@cs571/mobile-client";
import { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import BadgerNewsItemCard from "../items/BadgerNewsItemCard";

function BadgerNewsScreen(props) {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch("https://cs571.org/rest/s25/hw8/articles", {
            headers: {
                "X-CS571-ID": CS571.getBadgerId(),
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setNews(data);
            });
    }, []);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
            }}
        >
            {news.length === 0 ? (
                <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                    Loading...
                </Text>
            ) : (
                <ScrollView>
                    {news.map((item) => (
                        <BadgerNewsItemCard
                            key={item.id}
                            title={item.title}
                            img={item.img}
                            fullArticleId={item.fullArticleId}
                        />
                    ))}
                </ScrollView>
            )}
        </View>
    );
}

export default BadgerNewsScreen;
