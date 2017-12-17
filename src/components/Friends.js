import React, { Component } from 'react';
import { Card, CardSection, Button } from './common/Index';
import { friendsCreate } from './actions/index';
import FriendsForm from './FriendsForm';
import { connect } from 'react-redux';

class Friends extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.friendsCreate({ name, phone, shift: shift || 'Monday' });
    }
    render() {
        return (
            <Card>
               <FriendsForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save
                    </Button>
                </CardSection>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    const { name, phone, shift } = state.friends;
    return {
        name, phone, shift

    }
}

export default connect(mapStateToProps, { friendsCreate })(Friends);

