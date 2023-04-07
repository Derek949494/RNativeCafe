import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable'


const ContactScreen = () => {
    return (
        <ScrollView>
            <Animatable.View
                animation='fadeInDown'
                duration={2000}
                delay={1000}
            >
                <Card
                    wrapperStyle={{margin: 10}}
                >
                    <Card.Title>Contact Information</Card.Title>
                    <Card.Divider />
                    <Text>Main Location: 1 Roasted Bean Drive  </Text>
                    <Text>Tacoma, WA 98027</Text>
                    <Text style={{marginBottom: 10}}>U.S.A.</Text>
                    <Text>Phone: 1-222-333-4444</Text>
                    <Text>Email: Dereks@cafe.co</Text>
                </Card>
            </Animatable.View>
        </ScrollView>
  )
};
export default ContactScreen