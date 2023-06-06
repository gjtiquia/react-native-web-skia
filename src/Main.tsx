import { SafeAreaProvider } from "react-native-safe-area-context"
import { HelloWorld } from "src/components"

const Main = () => {
    return (
        <SafeAreaProvider>
            <HelloWorld />
        </SafeAreaProvider>
    );
}

export { Main }