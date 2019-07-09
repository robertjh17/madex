import React from 'react'
import { StyleSheet, Text, View, Platform, Image } from 'react-native'
import { Camera, Permissions } from 'expo'
import {Entypo} from '@expo/vector-icons';
import {Button} from "native-base";

export default class CameraScreen extends React.Component {
    state = {
        hasCameraPermission: false,
        type: Camera.Constants.Type.back,
        autoFocus: Camera.Constants.AutoFocus.on,
        whiteBalance: Camera.Constants.WhiteBalance.auto,
        focusDepth: 0,
        ratio: '16:9',
    };
    render() {
        const {
            hasCameraPermission,
            type,
            whiteBalance,
            focusDepth,
            photo,
        } = this.state;

        //als je geen permissie hebt gegeven krijg je alleen een wit scherm
        if (!hasCameraPermission) {
            return <View style={styles.container} />
        }

        return (
            <View style={styles.container}>
                <Camera
                    style={styles.camera}
                    ref={ref => (this._cameraInstance = ref)}
                    type={type}
                    whiteBalance={whiteBalance}
                    focusDepth={focusDepth}
                />

                <View style={styles.controls}>
                    <Button transparent light onPress={this.takePicture}>
                        <Entypo name="circle" size={32} color="white" />
                    </Button>

                    {photo && <Image style={styles.photo} source={photo} />}
                </View>
            </View>
        )
    }

    //checkt of je permissie gegeven hebt om de camera te gebruiken
    //zo niet krijg je de alert 'Je moet nog de camera aanzetten in de instellingen.'
    async componentDidMount() {
        try {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);

            this.setState({ hasCameraPermission: status === 'granted' });

            if (status !== 'granted') {
                alert('Je moet nog de camera aanzetten in de instellingen.')
            }
        } catch (err) {
            console.log('err', err)
        }
    }

    //zorgt ervoor dat de foto genomen wordt en de genomen foto in de state zet
    takePicture = async () => {
        if (this._cameraInstance) {

            const photo = await this._cameraInstance.takePictureAsync();

            this.setState({ photo })
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        position: 'relative',
    },

    camera: {
        flex: 1,
    },

    controls: {
        position: 'absolute',
        zIndex: 10,
        bottom: 0,
        left: 170,
        right: 0,
        height: 100,
    },

    photo: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: 0,
        bottom: 0,
        top: 0,
    },
});
