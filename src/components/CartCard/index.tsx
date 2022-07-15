import { useNavigation } from "@react-navigation/native";
import { Heading, HStack, Box, Text, Pressable } from "native-base"
import { useSelector } from "react-redux"
import { selectCartItems, selectCartTotal } from "../../data/store/features/CartSlice";
import { priceFormat } from "../../utils/priceFormat";

export const CartCard = () => {

    const cartTotal = useSelector(selectCartTotal);
    const items = useSelector(selectCartItems);
    const navigation: any = useNavigation();

    if (items.length === 0) return null;

    return (
        <Box
            position={"absolute"}
            w="full"
            bottom={4}>
            <Pressable onPress={() => navigation.navigate('Cart')}>
                <HStack
                    mx={6}
                    p={4}
                    bg={"#00CCBB"}
                    rounded={"lg"}
                    alignContent="center"
                    alignItems={"center"}
                    justifyContent="space-between">
                    <Text
                        color={"white"}
                        fontSize="lg"
                        fontWeight="bold">
                        {items.length}
                    </Text>
                    <Heading
                        color={"white"}
                        size={"md"}>
                        View Cart
                    </Heading>
                    <Text
                        color={"white"}
                        fontSize="lg"
                        fontWeight="bold">
                        {priceFormat(cartTotal)}
                    </Text>
                </HStack>
            </Pressable>
        </Box>
    )
}