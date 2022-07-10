import { Heading, Image, VStack, Text, FlatList, HStack, Divider } from "native-base"
import { MenuType } from "../../data/models/Menu";

export type MenuCardProps = {
    item: MenuType;
}

export const MenuCard = ({ item }: MenuCardProps) => {
    return (
        <HStack
            bg={"white"}
            p={4}
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
    )
}