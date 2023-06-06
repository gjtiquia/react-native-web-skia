import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"
import { HelloWorld } from "src/components"

const Main = () => {
    return (
        <SafeAreaProvider>
            <View className="flex-1 justify-center">
                <View className="h-4/6">
                    <HelloWorld />
                </View>
            </View>
        </SafeAreaProvider>
    );
}

export { Main }