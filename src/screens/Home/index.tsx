import { useNavigation } from "@react-navigation/native";
import { VStack, FlatList, Box } from "native-base";
import { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryCard } from "../../components/CategoryCard";
import { FeatureCard } from "../../components/FeatureCard";
import { Categories } from "../../data/Categories";
import { Features } from "../../data/Features";
import { Header } from "./Header";
import { Search } from "./Search";

export const Home = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "white"
        }}>
            <VStack space={4} bg="gray.50">
                <VStack space={4} p={4} bg="white">
                    <Header />
                    <Search />
                </VStack>
                <VStack ml={4} space={4}>
                    <FlatList
                        data={Categories ?? []}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <Box p={2} />}
                        keyExtractor={(item, idx) => item.id.toString() + idx.toString()}
                        renderItem={({ item }) => <CategoryCard
                            img={item.img}
                            title={item.category}
                        />}
                    />
                    <FlatList
                        data={Features}
                        nestedScrollEnabled={true}
                        ItemSeparatorComponent={() => <Box p={2} />}
                        keyExtractor={(item, idx) => item.id.toString() + idx.toString()}
                        renderItem={({ item }) => <FeatureCard
                            title={item.title}
                            description={item.description}
                            restaurants={item.restaurants}
                        />}
                    />
                </VStack>
            </VStack>
        </SafeAreaView>
    )
}