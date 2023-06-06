import { Button, Platform, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"

import { MySkiaComponent } from "src/components";

const Main = () => {
    return (
        <SafeAreaProvider>
            <MySkiaComponent />
        </SafeAreaProvider>
    );
}

export { Main }