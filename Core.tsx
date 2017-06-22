import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface State {
    done: string
}

export default class Core extends Component<{}, State> {
    state = {
        done: "Not done"
    }

    componentDidMount() {
        fetch('https://github.com/ds300/react-native-typescript-transformer')
            .then(this.handleResult.bind(this));
    }

    handleResult(res) {
        this.setState({ done: 'Done :D' });
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.done}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});