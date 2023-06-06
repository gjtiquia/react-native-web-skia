import { Canvas, Circle, Group } from "@shopify/react-native-skia";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HelloWorld = () => {
    const size = 256;
    const r = size * 0.33;

    return (
        <Canvas style={{ flex: 1, backgroundColor: "#eee" }} onLayout={e => console.log(e.nativeEvent.layout)}>
            <Group blendMode="multiply">
                <Circle cx={r} cy={r} r={r} color="cyan" />
                <Circle cx={size - r} cy={r} r={r} color="magenta" />
                <Circle
                    cx={size / 2}
                    cy={size - r}
                    r={r}
                    color="yellow"
                />
            </Group>
        </Canvas>
    )
}

export default HelloWorld;