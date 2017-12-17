import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from './actions/index';
import { Card, CardSection, Button, Input, Spinner } from './common/Index';


class LoginForm extends Component {


    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    onButtonDisplay() {
        if (this.props.loading) {
            return (
                <Spinner />
            );
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                LogIn
            </Button>
        );
    }


    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.error}>{this.props.error}</Text>
                </View>
            );
        }
    }
    render() {
        return (
            <View style={styles.container}>
            <Card>
                <CardSection>
                    <Input
                        label="email"
                        placeholder="user@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        secureTextEntry
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.onButtonDisplay()}
                </CardSection>
            </Card>
            </View>

        );
    }
}

const styles = {

    error: {
        fontSize: 18,
        color: 'red',
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center'
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);