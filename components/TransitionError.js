import { Text } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
const TransitionError = () => {
    return(
        <>
            <Text style={{textAlign:'center', fontSize:20}}>Acquisto interrotto, la preghiamo di ricontrollare l'inserimento dei dati</Text> 
            <Ionicons name="md-alert-circle" size={30} color="red" />
        </>
    )
}

export default TransitionError