import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';

export default class App extends Component {
    state = {
        mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
        locationResult: null,
        location: {coords: { latitude: 37.78825, longitude: -122.4324}},
    };


    componentDidMount() {
        this.getLocation();
    }

    // zet de map zo dat hij focust op de regio van je locatie
    MapRegionChange = mapRegion => {
        this.setState({ mapRegion });
    };

    // vraagt of je toestemming geeft om je locatie te gebruiken
    // zo niet krijg je de zin 'Je hebt geen permissies gegeven om je locatie te delen'
    // en anders roept hij je locatie op
    getLocation = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Je hebt geen permissies gegeven om je locatie te delen',
                location,
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ locationResult: JSON.stringify(location), location, });
    };

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={{ alignSelf: 'stretch', height: 500 }}
                    region={{ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                    onRegionChange={this.MapRegionChange}
                >
                    <MapView.Marker
                        coordinate={this.state.location.coords}
                        title="My Marker"
                        description="Some description"
                    />
                </MapView>

                <Text>
                    Location: {this.state.locationResult}
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});