import { useNavigation } from "@react-navigation/native";
import { Heading, VStack } from "native-base"
import { useEffect, useRef } from "react"
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';
import { Platform } from "react-native";

export const Preparing = () => {

    const navigation: any = useNavigation();
    const animation = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery');
        }, 4000);
    }, []);

    return (
        <VStack
            flex={1}
            bg="#00CCBB"
            space={4}
            p={4}
            alignContent="center"
            alignItems={"center"}
            justifyItems="center"
            justifyContent={"center"}>
            {Platform.OS !== 'web' &&
                <LottieView
                    autoPlay
                    ref={animation}
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: '#00CCBB',
                    }}
                    // Find more Lottie files at https://lottiefiles.com/featured
                    source={require('../../../assets/img/burger.json')}
                />
            }
            <Heading
                size={"sm"}
                color={"white"}
                textAlign={"center"}>
                Waiting for Restaurant to accept your order...!
            </Heading>
            <Progress.Circle size={50} indeterminate={true} color="white" />
        </VStack>
    )
}