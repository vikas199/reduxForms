import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common/Index';

class ListItem extends Component {

    selectedFriend() {
        Actions.Edit({ fetch: this.props.fetch });
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.selectedFriend.bind(this)}>
                <View>
            <CardSection>
                <Text style={styles.title}>{this.props.fetch.name}</Text>
                </CardSection>
                </View>
                </TouchableWithoutFeedback>
        );
    }
}

const styles=({
    title: {
        fontSize: 18,
        paddingLeft: 10
    }
});

export default ListItem;