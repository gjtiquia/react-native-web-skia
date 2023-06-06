import { SafeAreaView } from "react-native-safe-area-context";
import HelloWorld from "./HelloWorld";
import Breathe from "./Breath";

const MySkiaComponent = () => {
    return (
        <SafeAreaView className="absolute h-full w-full">
            {/* <HelloWorld /> */}
            <Breathe />
        </SafeAreaView>
    );
};

export default MySkiaComponent;