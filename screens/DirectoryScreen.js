import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import * as Animatable from 'react-native-animatable';


const DirectoryScreen = ({ navigation }) => {
    const [campsites, setCampsites] = useState(CAMPSITES);

    const renderDirectoryItem = ({ item: campsite }) => { //location
        return (
            <Animatable.View animation='fadeInRightBig' duration={2000}>
            <ListItem
                onPress={() =>
                    navigation.navigate('CampsiteInfo', { campsite }) //location
                }
            >
                <Avatar source={campsite.image} rounded /> 
                <ListItem.Content>
                    <ListItem.Title>{campsite.name}</ListItem.Title> 
                    <ListItem.Subtitle>
                        {campsite.description} 
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            </Animatable.View>
        );
    };
    return (
        <FlatList
            data={campsites} //location
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;