import RenderLocation from '../features/locations/RenderLocation';


const LocationInfoScreen = ({ route }) => {
    const { location } = route.params;
    return <RenderLocation location={location} />;
};
export default LocationInfoScreen;