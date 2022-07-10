import { Image, VStack, Text, Card } from "native-base";

export type CategoryCardProps = {
    img: string;
    title: string;
}

export const CategoryCard = ({
    img,
    title
}: CategoryCardProps) => {
    return (
        <VStack key={img + title}>
            <Image source={{ uri: img }}
                alt="category"
                w={70}
                h={70}
                rounded="sm"
                bg={"gray.100"}
            />
            <VStack
                position={"absolute"}
                bottom={0}
                p={1}>
                <Text
                    color={"white"}
                    fontWeight="bold">
                    {title}
                </Text>
            </VStack>
        </VStack>
    )
}