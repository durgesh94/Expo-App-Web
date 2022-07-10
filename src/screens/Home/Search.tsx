import { HStack, Input } from "native-base";
import { IconBars } from "../../components/icons/IconBars";
import { IconSearch } from "../../components/icons/IconSearch";

export const Search = () => {
    return (
        <HStack
            space={2}
            alignContent={"center"}
            alignItems="center"
            justifyContent={"space-between"}>
            <Input
                flex={1}
                placeholder="Restaurants and Cuisines"
                InputLeftElement={<IconSearch ml={2} />}
            />
            <IconBars
                size={"2xl"}
                color={"#00CCBB"}
            />
        </HStack>
    )
}