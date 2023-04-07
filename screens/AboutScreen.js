import { useState } from "react";
import { ScrollView, Text } from "react-native";
import { Avatar, Card, ListItem } from "react-native-elements";
import { PARTNERS } from "../shared/partners";
import * as Animatable from 'react-native-animatable';



const Mission = () => {
    return (
        <Card>
            <Card.Title>
                Get to know us!
            </Card.Title>
            <Card.Divider />
            <Text style={{ margin: 10 }} >
                As a locally-owned spot, we take the time to research the ingredients we use to ensure we’re only serving up the best coffee and pastries in the Tacoma/Federal Way area. We’re also proud to offer a wide variety of gluten-free and vegan options. So come on in, enjoy a peaceful environment with a drink or snack, and take pride in supporting a local business.
            </Text>
        </Card>
    );
};


const AboutScreen = () => {

    const [partners, setPartners] = useState(PARTNERS);

    return (
        <ScrollView>
            <Animatable.View
                    animation='fadeInDown'
                    duration={2000}
                    delay={500}
                >
            <Mission />
            <Card>
                <Card.Title>
                    Community Partners
                </Card.Title>
                <Card.Divider />
                {PARTNERS.map((partner) => {
                    return (
                        <ListItem key={partner.id} >
                            <Avatar rounded source={partner.image} />
                            <ListItem.Content>
                                <ListItem.Title>
                                    {partner.name}
                                </ListItem.Title>
                                <ListItem.Subtitle>
                                    {partner.description}
                                </ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )
                })}
            </Card>
            </Animatable.View>
        </ScrollView>
    );
};


export default AboutScreen;