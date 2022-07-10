import { Heading, FlatList, Divider } from "native-base"
import { MenuCard } from "../../components/MenuCard";
import { MenuType } from "../../data/models/Menu";

export type MenuProps = {
    menu: MenuType[];
}

export const Menu = ({ menu }: MenuProps) => {
    return (
        <FlatList
            data={menu ?? []}
            keyExtractor={(item: any, idx) => item?.id.toString() + idx.toString()}
            ItemSeparatorComponent={() => <Divider />}
            stickyHeaderIndices={[0]}
            ListHeaderComponent={() => <Heading bg={"gray.100"} p={4}>Menu</Heading>}
            renderItem={({ item }: any) => <MenuCard item={item} />}
        />
    )
}