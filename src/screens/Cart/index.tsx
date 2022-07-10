import { useNavigation } from "@react-navigation/native"
import { Heading, HStack, VStack, Text, Image, Button, ScrollView, FlatList, Divider } from "native-base"
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IconClose } from "../../components/icons/IconClose";
import { selectCartItems } from "../../data/store/features/CartSlice";
import { getRestaurant } from "../../data/store/features/RestaurantSlice";

export const Cart = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(getRestaurant);
    const items = useSelector(selectCartItems);
    const [uniqCart, setUniqCart] = useState<any[]>([]);

    useEffect(() => {
        const ids = items.map((i) => i.id);
        const qtyItems = items.map((item) => {
            return { ...item, quantity: ids.filter((id) => id === item.id).length }
        });
        const uniq = qtyItems.filter(({ id }, index) => !ids.includes(id, index + 1))
        setUniqCart(uniq);
    }, [items]);

    return (
        <VStack flex={1}>
            <HStack
                mt={6}
                p={4}
                bg="white"
                alignContent={"center"}
                alignItems="center"
                justifyContent={"space-between"}>
                <VStack></VStack>
                <VStack
                    alignContent={"center"}
                    alignItems="center">
                    <Heading>Cart</Heading>
                    <Text color={"gray.500"}>{restaurant?.name}</Text>
                </VStack>
                <IconClose
                    size={"2xl"}
                    color="#00CCBB"
                    onPress={() => navigation.goBack()}
                />
            </HStack>
            <HStack
                mt={4}
                bg="white"
                p={4}
                alignContent="center"
                alignItems={"center"}
                justifyContent="space-between">
                <HStack
                    space={2}
                    alignContent="center"
                    alignItems={"center"}>
                    <Image
                        source={{ uri: "https://links.papareact.com/wru" }}
                        alt="profile"
                        w={30}
                        h={30}
                        rounded="full"
                        bg="gray.200"
                    />
                    <Text>Deliver in 50-75 mins</Text>
                </HStack>
                <Button
                    variant={"ghost"}
                    color="#00CCBB">
                    Change
                </Button>
            </HStack>
            <VStack mt={4}>
                <FlatList
                    data={uniqCart}
                    keyExtractor={(item, idx) => item?.id.toString() + idx.toString()}
                    ItemSeparatorComponent={() => <Divider />}
                    renderItem={({ item }) => <HStack
                        bg={"white"}
                        p={4}
                        space={2}
                        alignContent="center"
                        alignItems={"center"}
                        justifyContent="space-between">
                        <HStack
                            flexShrink={1}
                            space={2}
                            alignContent={"center"}
                            alignItems="center">
                            <Text>{item?.quantity}x</Text>
                            <Image
                                source={{ uri: item?.img }}
                                w={10}
                                h={10}
                                alt={item?.name}
                                rounded="full"
                            />
                            <Text isTruncated>{item?.name}</Text>
                        </HStack>
                        <HStack
                            alignContent={"center"}
                            alignItems="center">
                            {/* TODO: Make util function for the round of values calculation*/}
                            <Text>₹{Math.round((item?.price * item?.quantity) * 100) / 100}</Text>
                            <Button
                                variant={"ghost"}
                                color="#00CCBB">
                                Remove
                            </Button>
                        </HStack>
                    </HStack>}
                />
            </VStack>
        </VStack>
    )
}