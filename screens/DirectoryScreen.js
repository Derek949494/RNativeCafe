import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { LOCATIONS } from '../shared/locations';
import * as Animatable from 'react-native-animatable';

const DirectoryScreen = ({ navigation }) => {
    const [locations, setLocations] = useState(LOCATIONS);

    const renderDirectoryItem = ({ item: location }) => { 
        return (
            <Animatable.View animation='fadeInRightBig' duration={2000}>
            <ListItem
                onPress={() =>
                    navigation.navigate('LocationInfo', { location }) 
                }
            >
                <Avatar source={location.image} rounded /> 
                <ListItem.Content>
                    <ListItem.Title>{location.name}</ListItem.Title> 
                    <ListItem.Subtitle>
                        {location.description} 
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            </Animatable.View>
        );
    };
    return (
        <FlatList
            data={locations} 
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;