import { Heading, Image, VStack, Text, HStack } from "native-base"
import { useState } from "react";
import { Pressable } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { MenuType } from "../../data/models/Menu";
import { RootState } from "../../data/store";
import { addToCart, removeFromCart, selectCartItemsById } from "../../data/store/features/CartSlice";
import { IconMinus } from "../icons/IconMinus";
import { IconPlus } from "../icons/IconPlus";

export type MenuCardProps = {
    item: MenuType;
}

export const MenuCard = ({ item }: MenuCardProps) => {

    const [isPressed, setIsPressed] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => selectCartItemsById(state, item.id));

    const addItemToCart = () => {
        dispatch(addToCart(item));
    }

    const removeItemFromCart = () => {
        if (items.length === 0) return;
        dispatch(removeFromCart({ id: item.id }));
    }

    return (
        <VStack bg={"white"} p={4}>
            <Pressable onPress={() => setIsPressed(!isPressed)}>
                <HStack
                    space={4}
                    alignContent={"center"}
                    alignItems="center"
                    justifyContent={"space-between"}>
                    <VStack flex={1} space={1}>
                        <Heading size={"sm"} isTruncated>{item?.name}</Heading>
                        <Text color={"gray.500"} numberOfLines={2}>{item?.description}</Text>
                        <Text color={"gray.500"}>₹{item?.price}</Text>
                    </VStack>
                    <Image
                        source={{ uri: item?.img }}
                        w={20}
                        h={20}
                        alt={item?.name}
                        rounded="sm"
                    />
                </HStack>
                {isPressed &&
                    <HStack
                        space={2}
                        mt={2}
                        alignContent={"center"}
                        alignItems="center">
                        <IconMinus
                            disabled={items.length === 0}
                            size={"md"}
                            color={items.length === 0 ? "gray.400" : "#00CCBB"}
                            onPress={removeItemFromCart}
                        />
                        <Text fontWeight={"medium"}>
                            {items.length}
                        </Text>
                        <IconPlus
                            size={"md"}
                            color="#00CCBB"
                            onPress={addItemToCart}
                        />
                    </HStack>
                }
            </Pressable>
        </VStack>
    )
}