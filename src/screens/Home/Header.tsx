import { Text, HStack, VStack, Image } from "native-base";
import { IconChevron } from "../../components/icons/IconChevron";
import { IconPerson } from "../../components/icons/IconPerson";

export const Header = () => {
    return (
        <HStack
            alignContent={"center"}
            alignItems="center"
            justifyContent={"space-between"}>
            <HStack
                space={2}
                alignContent={"center"}
                alignItems="center">
                <Image
                    source={{ uri: "https://links.papareact.com/wru" }}
                    alt="profile"
                    w={30}
                    h={30}
                    rounded="full"
                    bg="gray.200"
                />
                <VStack>
                    <Text
                        fontSize={"xs"}
                        color={"gray.400"}>
                        Deliver now!
                    </Text>
                    <HStack
                        space={2}
                        alignContent={"center"}
                        alignItems="center">
                        <Text
                            fontSize={"lg"}
                            fontWeight={"bold"}>
                            Current Location
                        </Text>
                        <IconChevron color={"#00CCBB"} />
                    </HStack>
                </VStack>
            </HStack>
            <IconPerson
                size={"2xl"}
                color={"#00CCBB"}
            />
        </HStack>
    )
}