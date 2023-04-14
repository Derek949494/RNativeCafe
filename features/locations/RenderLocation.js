import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
 
const RenderLocation = ({ location }) => {
    if (location) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={location.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {location.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{location.description}</Text>
            </Card>
        );
    }
    return <View />;
};

export default RenderLocation;
