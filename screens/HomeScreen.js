import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const HomeScreen = () => {
  return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/insidecafe.png')}
                resizeMode='cover'
                style={{flex: 1}}
            >
                <Text style={styles.text} >Welcome To Derek's Cafe</Text>
                {/* <Button />  come back later and add a button that links to the Menu page here*/}
            </ImageBackground>
            
        </View>  
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 35,
        color: '#fff',
        textAlign: 'center',
        margin: 10,
        marginTop: 300,
    }
})

export default HomeScreen;