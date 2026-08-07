import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BadgerArticleScreen from "../screens/BadgerArticleScreen";
import BadgerNewsScreen from "../screens/BadgerNewsScreen";

const NewsStack = createNativeStackNavigator();

function BadgerNewsStack() {
    return (
        <NewsStack.Navigator initialRouteName="Articles">
            <NewsStack.Screen name="Articles" component={BadgerNewsScreen} />
            <NewsStack.Screen name="Article" component={BadgerArticleScreen} />
        </NewsStack.Navigator>
    );
}

export default BadgerNewsStack;
