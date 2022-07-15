export const priceFormat = (price: number) => {
    const roundPrice = Math.round((price) * 100) / 100
    return `₹${roundPrice}`;
}