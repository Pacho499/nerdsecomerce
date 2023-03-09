import {Text} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
const TransitionDone = () => {
  return (
    <>
      <Text style={{textAlign: 'center', fontSize: 20}}>
        Acquisto effettuato con successo!
      </Text>
      <Ionicons name='md-checkmark-done-circle' size={30} color='green' />
    </>
  );
};

export default TransitionDone;
