import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";
import {View, Image} from "react-native";

export default function ZoomImage({uri}) {
    return (
        <View style={{flex: 1, overflow: "hidden"}}>
            <ReactNativeZoomableView
                maxZoom={1.5}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                bindToBorders={true}
                doubleTapZoomToCenter={true}
                style={{
                    padding: 10,
                    flex: 1,
                    overflow: "hidden"
                }}
            >
                <View style={{margin: 30}}>
                    {uri ? (
                        <Image source={{uri: uri}} style={{width: 350, height: 350, resizeMode: "contain"}} />
                    ) : null}
                </View>
            </ReactNativeZoomableView>
        </View>
    );
}
