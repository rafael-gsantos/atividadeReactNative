import { StatusBar, Text, View, StyleSheet } from 'react-native';

export function Home() {
  return (
    <View style={style.container}>
      <StatusBar barStyle='light-content' backgroundColor={'#140F1A'} />

      <Text style={{ color: '#ffffff8b', fontSize: 20 }}>Olá, meu nome é</Text>

      <Text style={style.text}>Rafael Gonçalves Dos Santos</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#140F1A',
  },
  text:{
    color: '#fff',
    fontSize: 20,
  },
})
