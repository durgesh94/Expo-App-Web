import { MenuType } from "../data/models/Menu";

export const getUniqueCartItems = (items: MenuType[]) => {
    const ids = items.map((i) => i.id);
    const qtyItems = items.map((item) => {
        return { ...item, quantity: ids.filter((id) => id === item.id).length }
    });
    const uniq = qtyItems.filter(({ id }, index) => !ids.includes(id, index + 1));
    return uniq;
}