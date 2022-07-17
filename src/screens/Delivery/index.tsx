import { useNavigation } from "@react-navigation/native"
import { Image, VStack, Text, HStack, Box, Heading, Button } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"
import { useSelector } from "react-redux"
import * as Progress from 'react-native-progress';
import { IconClose } from "../../components/icons/IconClose"
import { getRestaurant } from "../../data/store/features/RestaurantSlice"
import MapView, { Marker } from "react-native-maps";
import { Dimensions } from "react-native";

export const Delivery = () => {

    const navigation: any = useNavigation();
    const restaurant = useSelector(getRestaurant);

    return (
        <VStack
            flex={1}
            bg={"#00CCBB"}>
            <SafeAreaView style={{ zIndex: 50 }}>
                <VStack space={4} p={4}>
                    <HStack
                        alignContent={"center"}
                        alignItems="center"
                        justifyContent={"space-between"}>
                        <IconClose
                            onPress={() => navigation.navigate('Home')}
                            color={"white"}
                            size="md"
                        />
                        <Text
                            color={"white"}
                            fontWeight="bold">
                            Order Help
                        </Text>
                    </HStack>
                    <Box
                        bg={"white"}
                        p={4}
                        rounded="md">
                        <HStack
                            alignContent={"center"}
                            alignItems="center"
                            justifyContent={"space-between"}>
                            <VStack space={1}>
                                <Text
                                    fontSize={"lg"}
                                    color={"gray.500"}>
                                    Estimated Arrival
                                </Text>
                                <Heading>45-55 minutes</Heading>
                                <Progress.Bar
                                    color="#00CCBB"
                                    indeterminate={true} />
                                <Text color={"gray.500"}>
                                    {`Your order at ${restaurant.name} is being prepaired`}
                                </Text>
                            </VStack>
                            <Image
                                source={{ uri: "https://links.papareact.com/wru" }}
                                alt="profile"
                                w={60}
                                h={60}
                            />
                        </HStack>
                    </Box>
                </VStack>
            </SafeAreaView>
            <MapView
                mapType="mutedStandard"
                initialRegion={{
                    latitude: restaurant.latitude,
                    longitude: restaurant.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
                style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                    zIndex: 0,
                    marginTop: -40
                }}>
                <Marker
                    coordinate={{
                        latitude: restaurant.latitude,
                        longitude: restaurant.longitude
                    }}
                    title={restaurant.name}
                    description={restaurant.description}
                    identifier="origin"
                    pinColor="#00CCBB"
                />
            </MapView>
            <Box
                bg="white"
                position="absolute"
                bottom={0}
                zIndex={50}
                width="full">
                <HStack
                    p={4}
                    alignContent={"center"}
                    alignItems="center"
                    justifyContent={"space-between"}>
                    <HStack
                        space={4}
                        alignContent={"center"}
                        alignItems="center">
                        <Image
                            source={{ uri: "https://links.papareact.com/wru" }}
                            alt="profile"
                            w={35}
                            h={35}
                            bg="gray.300"
                            rounded={"full"}
                        />
                        <VStack>
                            <Heading>Durgesh Tambe</Heading>
                            <Text color={"gray.500"}>Your rider</Text>
                        </VStack>
                    </HStack>
                    <Button variant={"ghost"}>
                        <Text fontSize={18} color={"#00CCBB"}>Call</Text>
                    </Button>
                </HStack>
            </Box>
        </VStack >
    )
}