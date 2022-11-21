import { View, StyleSheet, Image } from 'react-native';

export function Photo(){
    return(
        <View style={style.container}>
            <Image style={style.image} source={require('../img/dog.jpeg')}/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#140F1A',
    },
    component:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
    image: {
        width: 300,
        height: 300,
    }
})