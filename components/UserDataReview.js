import { View, Text, StyleSheet, TextInput } from "react-native";
import CustomButton from "./CustomButton";
import { useSelector } from "react-redux";
import { useState } from "react";
const UserDataReview = ({buyed, changeData}) => {
    const adressInfo = useSelector((state) => state.authUser.adressInfo);
    const card = useSelector((state) => state.authUser.cardData);
    const [CVV , setCVV] = useState('')
    return(
        <View style={Styles.container}>
                <Text style={{marginVertical:20, fontSize:18, textAlign:'center'}}>Dai un occhiata ai tuoi dati prima di procedere con l'acquisto</Text>
                <View>
                  <Text style={{marginVertical:20}}>Dati di spedizione</Text>
                  <View>
                    <Text style={{marginBottom:10}}>Città : {adressInfo.city}</Text>
                    <Text>Via / Piazza : {adressInfo.adress}</Text>
                  </View>
                  <Text style={{marginVertical:20}}>Dati della carta utilizzata</Text>
                  <Text>Circuito: {card.card}</Text>
                  <Text>Numero carta:{card.cardNumber.substr(12).padStart(16, '*')}</Text>
                  <CustomButton title='Cambia dati' onPress={changeData}/>
                  
                </View>
                <TextInput
                    placeholder='CVV (3 numeri)'
                    keyboardType="number-pad"
                    style={Styles.input}
                    value={CVV}
                    onChangeText={(text) => setCVV(text)}
                  />
                <CustomButton title='acquista' onPress={buyed}/>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
      justifyContent:'center',
      alignItems:'center'
    },
    input: {
      width: 100,
      marginTop: 30,
      paddingBottom: 10,
      paddingHorizontal: 10,
      borderBottomWidth: 2,
    },
  });

export default UserDataReview