import {View, Text, StyleSheet} from 'react-native';
import CustomButton from './CustomButton';
import {useSelector} from 'react-redux';
import {colors} from '../utils/colors';
const UserDataReview = ({navigation, changeData, isFastBuy}) => {
  const adressInfo = useSelector((state) => state.authUser.adressInfo);
  const card = useSelector((state) => state.authUser.cardData);
  return (
    <View style={Styles.container}>
      <Text
        style={{
          marginVertical: 20,
          fontSize: 18,
          textAlign: 'center',
          fontWeight: '500',
        }}
      >
        Dai un occhiata ai tuoi dati prima di procedere con l'acquisto
      </Text>
      <View>
        <Text style={{marginVertical: 20, textAlign: 'center', fontSize: 18}}>
          Dati di spedizione
        </Text>
        <View style={Styles.box}>
          <Text style={{marginBottom: 10}}>Città : {adressInfo.city}</Text>
          <Text>Via / Piazza : {adressInfo.adress}</Text>
        </View>
        <Text style={{marginVertical: 20, textAlign: 'center', fontSize: 18}}>
          Dati della carta utilizzata
        </Text>
        <View style={Styles.box}>
          <Text style={{marginBottom: 10}}>Circuito : {card.card}</Text>
          <Text>
            Numero carta : {card.cardNumber.substr(12).padStart(16, '*')}
          </Text>
        </View>
          <CustomButton
          title='Cambia dati'
          onPress={ isFastBuy ? () => navigation.navigate('userSettings') : () => changeData()}
        />
        
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 100,
    marginTop: 20,
    padding: 10,
    borderWidth: 2,
    textAlign: 'center',
    borderRadius: 10,
    borderColor: colors.secondaryPurple,
  },
  box: {
    borderWidth: 2,
    padding: 10,
    borderColor: colors.mainPurple,
    borderRadius: 20,
  },
});

export default UserDataReview;
