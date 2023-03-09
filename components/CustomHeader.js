import {View, TouchableWithoutFeedback, Text, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {colors} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
const CustomHeader = ({title, back, backPage}) => {
  const navigation = useNavigation();
  return (
    <View style={Style.container}>
      {back ? <TouchableWithoutFeedback onPress={() => navigation.navigate(backPage)}>
        <View style={Style.backButtonContainer}>
          <Ionicons
            name='md-arrow-back-outline'
            color={colors.mainPurple}
            size={25}
          />
          <Text style={{fontSize: 15, fontWeight: '500', color: colors.mainPurple}}>
            Indietro
          </Text>
        </View>
      </TouchableWithoutFeedback> : null}
      <Text style={Style.title}>{title}</Text>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: 'flex-end',
    backgroundColor: colors.mainBlue,
    zIndex: 20,
  },
  backButtonContainer: {
    position: 'absolute',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '500',
  },
});
export default CustomHeader;
