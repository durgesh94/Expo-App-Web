import { MenuType } from "../data/models/Menu";

export const getCartItemsTotal = (items: MenuType[]) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total = total + items[i].quantity * items[i].price;
    }
    return total;
}