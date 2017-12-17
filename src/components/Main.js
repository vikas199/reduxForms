import React, { Component } from 'react';
import { ListView } from 'react-native';
import ListItem from './ListItem';
import _ from 'lodash';
import { connect } from 'react-redux';
import { friendsFetch, resetForm } from './actions';
import {  Actions } from 'react-native-router-flux'

class Main extends Component {


    componentWillMount() {
        this.props.friendsFetch();
        this.createDataSource(this.props);
        Actions.refresh({
            onRight: () => this.add()
        })
    }
    componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
    }
    createDataSource({ fetch }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(fetch);
    }
    renderRow(fetch) {
        return <ListItem fetch={fetch} />;
    }

    render() {
        //console.log(this.props);
        return (
         <ListView 
         enableEmptySections
         dataSource={this.dataSource}
         renderRow={this.renderRow}
         />
        );
    }

    add(){
        this.props.resetForm()
        Actions.Add()
    }
}

const styles=({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'

    }
})

const mapStateToProps = state => {
    const fetch = _.map(state.fetch, (val, uid) => {
        return { ...val, uid };
    });
    return { fetch };
};

export default connect(mapStateToProps, { friendsFetch, resetForm })(Main);