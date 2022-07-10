import { useNavigation, useRoute } from "@react-navigation/native"
import { VStack } from "native-base"
import { useLayoutEffect } from "react";
import { RestauranType } from "../../data/models/Restaurant";
import { Header } from "./Header";
import { Menu } from "./Menu";

export const Restaurant = () => {

    const navigation = useNavigation();
    const { params } = useRoute();
    const { restaurant }: any = params;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    return (
        <VStack flex={1}>
            <Header restaurant={restaurant} />
            <Menu menu={restaurant?.menu} />
        </VStack>
    )
}