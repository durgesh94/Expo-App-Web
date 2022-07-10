import { useNavigation, useRoute } from "@react-navigation/native"
import { VStack } from "native-base"
import { useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { CartCard } from "../../components/CartCard";
import { RestauranType } from "../../data/models/Restaurant";
import { setRestaurant } from "../../data/store/features/RestaurantSlice";
import { Header } from "./Header";
import { Menu } from "./Menu";

export const Restaurant = () => {

    const navigation = useNavigation();
    const { params } = useRoute();
    const { restaurant }: any = params;
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    useEffect(() => {
        dispatch(setRestaurant(restaurant))
    }, [dispatch]);

    return (
        <VStack flex={1}>
            <Header restaurant={restaurant} />
            <Menu menu={restaurant?.menu} />
            <CartCard />
        </VStack>
    )
}