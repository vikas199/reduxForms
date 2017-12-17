import React, { Component } from 'react';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common/Index';
import { friendsUpdate, friendSave, friendDelete } from './actions/index';
import { connect } from 'react-redux';
import FriendsForm from './FriendsForm';


class FriendsEdit extends Component {
   state=({ showModal: false })
    componentWillMount() {
        _.each(this.props.fetch, (value, prop) => {
            this.props.friendsUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.friendSave({ name, phone, shift, uid: this.props.fetch.uid });
    }
    onText() {
        const { phone, shift } = this.props;

        Communications.text(phone, `your should come on ${shift}`);
    }

    onAccept() {
        const { uid } = this.props.fetch;
       this.props.friendDelete({ uid });
    }
    onDecline() {
        this.setState({ showModal: false })
    }


    render() {
        return (
            <Card>
                <FriendsForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onText.bind(this)}>
                        Text
                        </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Delete
                     </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                    >
                    Are you sure you want to delete this?
                            </Confirm>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    const { name, phone, shift } = state.friends;
    return {
        name, phone, shift

    };
};

export default connect(mapStateToProps, { friendsUpdate, friendSave, friendDelete })(FriendsEdit);

