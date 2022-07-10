import { VStack, Text, Heading, FlatList, Box, HStack } from "native-base";
import { IconArrow } from "../icons/IconArrow";
import { IconBars } from "../icons/IconBars";
import { RestaurantCard } from "../RestaurantCard";

export type FeatureCardProps = {
    title: string;
    description: string;
    restaurants: any[];
}

export const FeatureCard = ({
    title,
    description,
    restaurants
}: FeatureCardProps) => {
    return (
        <VStack space={4}>
            <HStack
                mr={4}
                alignContent={"center"}
                alignItems="center"
                justifyContent={"space-between"}>
                <VStack>
                    <Heading>{title}</Heading>
                    <Text color={"gray.400"}>{description}</Text>
                </VStack>
                <IconArrow size={"lg"} color={"#00CCBB"} />
            </HStack>
            <FlatList
                data={restaurants ?? []}
                horizontal
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <Box p={2} />}
                keyExtractor={(item, idx) => item.id.toString() + idx.toString()}
                renderItem={({ item }) => <RestaurantCard item={item} />}
            />
        </VStack>
    )
}