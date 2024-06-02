import React from "react";
import Colors from "../../constants/colors";
import { View, StyleSheet } from "react-native";
function Card({children}){
    return(
        <View style={styles.Card}>
            {children}
        </View>
    )

}
export default Card;

const styles = StyleSheet.create({
    Card:{
        marginHorizontal:24,
        borderRadius:8,
        elevation:4,
        padding:16,
        marginTop:36,
        backgroundColor:Colors.primary800,
        justifyContent:'center',
        alignItems:'center'
    },})