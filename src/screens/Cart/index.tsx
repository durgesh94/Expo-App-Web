import { useNavigation } from "@react-navigation/native"
import { Heading, HStack, VStack, Text, Image, Button, FlatList, Divider } from "native-base"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IconClose } from "../../components/icons/IconClose";
import { removeFromCart, selectCartItems } from "../../data/store/features/CartSlice";
import { getRestaurant } from "../../data/store/features/RestaurantSlice";
import { getCartItemsTotal } from "../../utils/getCartItemsTotal";
import { getUniqueCartItems } from "../../utils/getUniqueCartItems";
import { priceFormat } from "../../utils/priceFormat";

export const Cart = () => {

    const navigation: any = useNavigation();
    const restaurant = useSelector(getRestaurant);
    const dispatch = useDispatch();
    const items = useSelector(selectCartItems);
    const [uniqCart, setUniqCart] = useState<any[]>([]);
    const [subTotal, setSubTotal] = useState(0);
    const [deliveryFee, setDeliveryFee] = useState(45.75);

    const removeItem = (id: number) => {
        dispatch(removeFromCart({ id: id }));
    }

    useEffect(() => {
        //TODO: We can get dynamic delivery fees base on restaurant location 
        setDeliveryFee(55.75);
        const uniq = getUniqueCartItems(items);
        setUniqCart(uniq);
        const total = getCartItemsTotal(uniq);
        setSubTotal(total);
    }, [items]);

    return (
        <VStack flex={1} justifyContent={"space-between"}>
            <VStack>
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
                        onPress={() => alert('Coming Soon!')}
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
                                <Text>{priceFormat(item?.price * item?.quantity)}</Text>
                                <Button
                                    onPress={() => removeItem(item.id)}
                                    variant={"ghost"}
                                    color="#00CCBB">
                                    Remove
                                </Button>
                            </HStack>
                        </HStack>}
                    />
                </VStack>
            </VStack>
            <VStack bg={"white"} space={4} p={4}>
                <HStack
                    alignContent={"center"}
                    alignItems="center"
                    justifyContent={"space-between"}>
                    <Text>Subtotal</Text>
                    <Text>{priceFormat(subTotal)}</Text>
                </HStack>
                <HStack
                    alignContent={"center"}
                    alignItems="center"
                    justifyContent={"space-between"}>
                    <Text>Delivery Fee</Text>
                    <Text>{priceFormat(deliveryFee)}</Text>
                </HStack>
                <HStack
                    alignContent={"center"}
                    alignItems="center"
                    justifyContent={"space-between"}>
                    <Text fontWeight={"bold"}>Order Total</Text>
                    <Text fontWeight={"bold"}>{priceFormat(subTotal + deliveryFee)}</Text>
                </HStack>
                <Button
                    onPress={() => navigation.navigate('Preparing')}
                    size={"lg"}
                    fontWeight="bold"
                    bgColor={"#00CCBB"}>
                    Place Order
                </Button>
            </VStack>
        </VStack>
    )
}