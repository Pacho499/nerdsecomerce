import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {addItem} from '../store/actions/cartAction';
import {colors} from '../utils/colors';
const ItemSection = ({item}) => {
  const dispatch = useDispatch();
  return (
    <View key={item.id} style={Styles.container}>
      <Image
        source={{
          uri: item.image,
        }}
        style={Styles.image}
      />
      <View style={{marginLeft: 20, width: '50%'}}>
        <View style={{}}>
          <Text style={Styles.description}>{item.title}</Text>
          <Text style={Styles.description}>{item.cost}€</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => dispatch(addItem(item))}>
        <View style={Styles.addButton}>
          <Text style={{color: 'white', fontSize: 20}}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    marginVertical: 10,
    marginLeft: 10,
  },
  container: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.mainPurple,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addButton: {
    padding: 10,
    backgroundColor: colors.mainPurple,
    borderWidth: 2,
    borderColor: colors.mainBlue,
    borderRadius: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ItemSection;
