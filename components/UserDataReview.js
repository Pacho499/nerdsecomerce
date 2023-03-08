import { View, Text, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import { useSelector } from "react-redux";
const UserDataReview = ({buyed}) => {
    const adressInfo = useSelector((state) => state.authUser.adressInfo);
    const card = useSelector((state) => state.authUser.cardNumber);
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
                  <Text>Numero carta{card.substr(12).padStart(16, '*')}</Text>
                  <CustomButton title='Cambia dati ' />
                </View>
                <CustomButton title='acquista' onPress={buyed}/>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
      justifyContent:'center',
      alignItems:'center'
    },
  });

export default UserDataReview