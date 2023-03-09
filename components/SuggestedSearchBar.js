import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {colors} from '../utils/colors';

const SuggestedSearchBar = ({input, items, navigation}) => {
  const renderSuggest = items
    .filter((item) => item.title.includes(input))
    .map((item) => {
      const gotoItemDetail = () => {
        navigation.navigate('ItemDetail', {
          data: item,
        });
      };
      return (
        <TouchableWithoutFeedback key={item.id} onPress={gotoItemDetail}>
          <Text style={Style.text}>{item.title}</Text>
        </TouchableWithoutFeedback>
      );
    });
  return <View style={Style.container}>{renderSuggest}</View>;
};

const Style = StyleSheet.create({
  container: {
    width: '90%',
    zIndex: 20,
  },
  text: {
    padding: 10,
    borderWidth: 2,
    borderColor: colors.mainPurple,
    fontSize: 16,
    textAlign: 'center',
    borderRadius: 10,
    marginVertical: 2,
  },
});

export default SuggestedSearchBar;
