import { Button, Platform, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"

import { MySkiaComponent } from "src/components";
import { UIOverlay } from "./UIOverlay";

const Main = () => {
    return (
        <SafeAreaProvider>
            <MySkiaComponent />
            <UIOverlay />
        </SafeAreaProvider>
    );
}

export { Main }