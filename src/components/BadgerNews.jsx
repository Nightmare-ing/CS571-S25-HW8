import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";

import BadgerTabs from "./navigation/BadgerTabs";
import NewsContext from "./contexts/NewsContext";
import CS571 from "@cs571/mobile-client";

export default function BadgerNews(props) {
    // Just a suggestion for Step 4! Maybe provide this to child components via context...
    const [prefs, setPrefs] = useState({});
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

                let tagLists = [];
                for (const item of data) {
                    tagLists = [...tagLists, ...item.tags];
                }
                setPrefs([...new Set(tagLists)]);
            });
    }, []);

    return (
        <>
            <NavigationContainer>
                <NewsContext.Provider value={{ prefs, news }}>
                    <BadgerTabs />
                </NewsContext.Provider>
            </NavigationContainer>
        </>
    );
}
