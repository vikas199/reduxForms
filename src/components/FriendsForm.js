import React, { Component } from 'react';
import { connect } from 'react-redux';
import { friendsUpdate } from './actions/index';
import { CardSection, Input } from './common/Index';
import { Picker, Text, View } from 'react-native';

class FriendsForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="name"
                        placeholder="sai"
                        onChangeText={(text) => this.props.friendsUpdate({ prop: 'name', value: text })}
                        value={this.props.name}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="phone"
                        placeholder="999-999-9999"
                        onChangeText={(text) => this.props.friendsUpdate({ prop: 'phone', value: text })}
                        value={this.props.phone}
                    />
                </CardSection>
                <CardSection>
                    <Text style={styles.shift}> Shift</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={(day) => this.props.friendsUpdate({ prop: 'shift', value: day })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tue" value="Tue" />
                        <Picker.Item label="Wed" value="Wed" />
                        <Picker.Item label="Thu" value="Thu" />
                        <Picker.Item label="Fri" value="Fri" />
                        <Picker.Item label="Sat" value="Sat" />
                        <Picker.Item label="Sun" value="Sun" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}


const styles=({
    shift: {
        fontSize: 18
    }
});

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.friends;
    return {
        name, phone, shift
    };
};


export default connect(mapStateToProps, { friendsUpdate })(FriendsForm);