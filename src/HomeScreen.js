import React, {Component} from 'react';
import {createStackNavigator} from "react-navigation";
import {Image, StyleSheet, Text, View} from "react-native";
import {Button, Grid, Icon, Row} from "native-base";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.Head}>HELP Conciërge</Text>
                <Image source={{uri: 'https://www.detechniekacademie.nl/wp-content/uploads/2017/08/landstede-logo.png'}}
                       style={{width: 350, height: 200}}/>
                <Grid>
                    <Row>
                        <Button transparent light onPress={() => this.props.navigation.navigate('CameraScreen')}>
                            <Icon name={"map"}/>
                        </Button>
                        <Button transparent light>
                            <Icon name={"images"}/>
                        </Button>
                        <Button transparent light>
                            <Icon name={"camera"}/>
                        </Button>
                    </Row>
                </Grid>

            </View>
        );

    }

}
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#254F6E',
    },
    Head: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    Iconleft: {
        margin: 24,
        fontSize: 18,
        textAlign: 'left',
        color: '#FFFFFF',
    },
    Iconcenter: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF',
    },
});