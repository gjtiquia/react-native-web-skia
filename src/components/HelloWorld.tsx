import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export const HelloWorld = () => {
    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <Text className="font-bold text-3xl">Hello World</Text>
        </SafeAreaView>
    )
}