import { useNavigation } from "@react-navigation/native";
import { VStack, Text, Image, Heading, HStack, Pressable } from "native-base";
import { RestauranType } from "../../data/models/Restaurant";
import { IconLocation } from "../icons/IconLocation";
import { IconStar } from "../icons/IconStar";

export type RestaurantCardProps = {
    item: RestauranType;
}

export const RestaurantCard = ({
    item
}: RestaurantCardProps) => {
    const navigation: any = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate('Restaurant', { restaurant: item })}>
            <VStack bg="white" rounded={"sm"} w={200}>
                <Image
                    source={{ uri: item.img }}
                    w={200}
                    h={150}
                    alt={item.name}
                    borderTopRadius={"sm"}
                />
                <VStack p={4}>
                    <Heading size={"md"} isTruncated>{item?.name}</Heading>
                    <HStack
                        space={1}
                        alignContent={"center"}
                        alignItems="center">
                        <IconStar color={"green.500"} />
                        <Text color={"green.500"}>{item?.rating}</Text>
                        <Text>{item?.category}</Text>
                    </HStack>
                    <HStack
                        space={1}
                        alignContent={"center"}
                        alignItems="center">
                        <IconLocation color={"gray.800"} size="md" />
                        <Text isTruncated>{item?.address}</Text>
                    </HStack>
                </VStack>
            </VStack>
        </Pressable>
    )
}