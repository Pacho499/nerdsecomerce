import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeItem} from '../store/actions/cartAction';
import {colors} from '../utils/colors';
const ItemCart = ({item}) => {
  const dispatch = useDispatch();
  return (
    <View key={item.item.id} style={Styles.container}>
      <Image
        source={{
          uri: item.item.image,
        }}
        style={Styles.image}
      />
      <View style={{marginLeft: 20, width: '50%'}}>
        <View>
          <Text style={Styles.description}>Articolo: {item.item.title}</Text>
          <Text style={Styles.description}>Prezzo: {item.item.cost}€</Text>
          <Text style={Styles.description}>Quantità: {item.quantity}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => dispatch(removeItem(item.item))}>
        <View style={Styles.removeButton}>
          <Text style={{color: 'white'}}>X</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderColor: colors.mainPurple,
  },
  removeButton: {
    padding: 10,
    backgroundColor: colors.mainPurple,
    borderWidth: 2,
    borderColor: colors.mainBlue,
    borderRadius: 10,
    marginLeft: 20,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ItemCart;
