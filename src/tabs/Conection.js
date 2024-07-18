import { View, StyleSheet, Text } from "react-native";
import { fetch } from "@react-native-community/netinfo";

export default function Conection(){
    const netInformation = fetch()
    const netDetails = netInformation._j
    console.log(netDetails)
    console.log(netDetails.details)
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>Está conectado ao wi-fi:</Text>
            <Text style={styles.textStyle}>Tipo de conexão:{netDetails.type}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#1f2124'
    },
    textStyle:{
        color: "white"
    }
})