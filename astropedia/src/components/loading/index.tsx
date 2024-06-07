import { ActivityIndicator } from "react-native";
import { loadingStyle } from "./style";

export function Loading(){
    return(
        <ActivityIndicator  style={loadingStyle.loading} />
    )
}