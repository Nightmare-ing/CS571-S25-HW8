import CS571 from "@cs571/mobile-client";
import { useContext, useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import BadgerNewsItemCard from "../items/BadgerNewsItemCard";
import NewsContext from "../contexts/NewsContext";

function BadgerNewsScreen(props) {
    const { prefs, news } = useContext(NewsContext);
    const filteredNews = news.filter((item) => {
        for (const tag of item.tags) {
            if (prefs.includes(tag)) {
                return true;
            }
        }
        return false;
    });
    // console.log("Prefs: ", prefs);
    // console.log("News: ", news);
    console.log(filteredNews);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
            }}
        >
            {filteredNews.length === 0 ? (
                <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                    Loading...
                </Text>
            ) : (
                <ScrollView>
                    {filteredNews.map((item) => (
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
