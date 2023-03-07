import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {addItem} from '../store/actions/cartAction';
const ItemSection = ({item}) => {
  const dispatch = useDispatch();
  console.log(item);
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
          <Text>{item.title}</Text>
          <Text>{item.cost}€</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => dispatch(addItem(item))}>
        <View style={Styles.removeButton}>
          <Text>+</Text>
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
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  removeButton: {
    padding: 10,
    backgroundColor: '#72ACD8',
    borderRadius: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  quantityButton: {
    backgroundColor: '#72ACD8',
    margin: 2,
    padding: 10,
    borderRadius: 10,
  },
});

export default ItemSection;
