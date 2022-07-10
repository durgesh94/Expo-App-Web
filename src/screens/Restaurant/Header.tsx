import { useNavigation } from "@react-navigation/native"
import { Heading, Image, VStack, Text, Pressable, HStack, Divider } from "native-base"
import { IconArrow } from "../../components/icons/IconArrow";
import { IconChevron } from "../../components/icons/IconChevron";
import { IconLocation } from "../../components/icons/IconLocation";
import { IconQuestion } from "../../components/icons/IconQuestion";
import { IconStar } from "../../components/icons/IconStar";
import { RestauranType } from "../../data/models/Restaurant";

export type HeaderProps = {
    restaurant: RestauranType;
}

export const Header = ({ restaurant }: HeaderProps) => {

    const navigation = useNavigation();

    return (
        <>
            <Image
                source={{ uri: restaurant?.img }}
                w="full"
                h={"25%"}
                alt={restaurant?.name}
            />
            <Pressable
                onPress={() => navigation.goBack()}
                position={"absolute"}
                mt={8} ml={4}
                bg={"white"} rounded="full" p={1}>
                <IconArrow size={"lg"} color="#00CCBB" type="arrowleft" />
            </Pressable>
            <VStack
                p={4} space={2}
                bg={"white"}>
                <Heading>{restaurant?.name}</Heading>
                <HStack
                    alignContent={"center"}
                    alignItems="center"
                    space={1}>
                    <IconStar size={"md"} color="green.500" />
                    <Text>{restaurant?.rating}</Text>
                    <IconLocation size={"md"} />
                    <Text>{restaurant?.address}</Text>
                </HStack>
                <Text numberOfLines={2}>{restaurant?.description}</Text>
                <Divider />
                <HStack
                    alignContent={"center"}
                    alignItems="center"
                    justifyContent="space-between">
                    <HStack
                        alignContent={"center"}
                        alignItems="center"
                        space={2}>
                        <IconQuestion />
                        <Text fontWeight={"bold"}>Have a food allergy?</Text>
                    </HStack>
                    <IconChevron size={"lg"} color="#00CCBB" type="chevron-right" />
                </HStack>
            </VStack>
        </>
    )
}