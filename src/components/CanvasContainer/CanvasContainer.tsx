import { View, Text } from "react-native"
import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';

const CanvasContainer = () => {
    return (
        <WithSkiaWeb
            getComponent={() => import('../MySkiaComponent')}
            fallback={<Text style={{ textAlign: 'center' }}>Loading Skia...</Text>}
        />
    )
}

export default CanvasContainer