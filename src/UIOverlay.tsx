import { View, Text, Linking } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export const UIOverlay = () => {
    return (
        <SafeAreaView className="flex-1 justify-end">
            <View className="flex flex-row justify-between items-center p-2">
                <Text className="font-bold text-slate-50 text-lg">React Native Web + Skia Demo</Text>
                <Text
                    className="font-bold text-blue-500"
                    onPress={() => Linking.openURL("https://github.com/gjtiquia/react-native-web-skia")}
                >
                    GitHub Link
                </Text>
            </View>
        </SafeAreaView>
    )
}