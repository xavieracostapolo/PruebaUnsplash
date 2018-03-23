import React, {Component} from 'react';
import {View, Text, Image, ScrollView, FlatList, Dimensions, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../actions';

const {width, height} = Dimensions.get('window')

class DataList extends Component{

    componentWillMount(){
        this.props.fetchData();
    }

    _renderItem(img){
        return (
            <Image key={img.user.id} style={{width: 120, height: 180}} source={{uri: img.urls.thumb}}/>
        )
    }
    

    render(){
        console.log(this.props);
        return (
            <View style={styles.container}>
                <ScrollView>
                        {this.props.dataImages.isFetching && <Text>Cargando</Text>}
                        <FlatList 
                            style={{marginHorizontal: 5}}
                            data={this.props.dataImages.data.results}
                            numColumns={3}
                            columnWrapperStyle={{marginTop: 5, marginLeft: 5}}
                            renderItem={({item}) => this._renderItem(item)}
                        />
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        dataImages: state.dataReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    header: {
        height: 40,
        backgroundColor: '#181818',
        borderBottomWidth: 1,
        borderColor: '#3a3a3a',
        paddingBottom: 5,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    searchIcon: {
        position: 'absolute',
        top: 5,
        left: 15,
        zIndex: 1,
        backgroundColor:'transparent'
    },
    iconInputClose: {
        position: 'absolute',
        top: 5,
        right: 90,
        backgroundColor: 'transparent',
        zIndex: 1
    },
    input: {
        width: width - (width / 4),
        height: 30,
        backgroundColor: '#323232',
        marginHorizontal: 10,
        paddingLeft: 30,
        borderRadius: 3,
        color: 'grey'
    },
    cancelButtonText: {
        color: 'white'
    },
    image: {
        marginRight: 5,
        width: 115,
        height: 170
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DataList);