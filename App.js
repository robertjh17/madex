import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import * as Constants from 'expo';
import CameraScreen from "./src/Camera"
import MapScreen from "./src/Map"

import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import {Button, Icon, Row, Grid} from "native-base";


class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    // wanneer je op de erop drukt navigeert die naar het camerascherm
    onPressCamera = () => {
        this.props.navigation.push('CameraScreen');
    };

    // wanneer je op de erop drukt navigeert die naar het mapcherm
    onPressMap = () =>{
        this.props.navigation.push('MapScreen');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.Head}>HELP Conciërge</Text>
                <Image source={{uri: 'https://www.detechniekacademie.nl/wp-content/uploads/2017/08/landstede-logo.png'}}
                       style={{width: 350, height: 200}}/>
                <Grid>
                    <Row>
                        <Button transparent light onPress={this.onPressMap}>
                            <Icon name={"map"}/>
                        </Button>
                        <Button transparent light>
                            <Icon name={"images"}/>
                        </Button>
                        <Button transparent light onPress={this.onPressCamera}>
                            <Icon name={"camera"}/>
                        </Button>
                    </Row>
                </Grid>
            </View>
        );
    }
}


/*
 * De schermen waar je tussen kan navigeren met stacknavigator
 */
const MainStackNavigator = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        CameraScreen: CameraScreen,
        MapScreen: MapScreen
    },

);
const NavigationApp = createAppContainer(MainStackNavigator);

// export

export default NavigationApp;

// de stylesheet binnen het scherm
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#254F6E',

    },
    Head: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'Segoe UI',
        fontWeight: 'bold',
        width: 100,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
