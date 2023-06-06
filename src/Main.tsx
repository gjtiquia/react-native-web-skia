import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"
import { CanvasContainer } from "src/components"

// import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';

const Main = () => {
    return (
        <SafeAreaProvider>
            <View className="flex-1 justify-center">
                <CanvasContainer />
            </View>
        </SafeAreaProvider>
    );
}

export { Main }