import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';


import * as cartActions from '../../store/actions/cart';
import Colors from '../../constants/Colors'


const ProductDetailScreen = props => {

    const productId = props.navigation.getParam('productId');
    const selectedPorduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId))
    const dispatch = useDispatch();
    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedPorduct.imageUrl }} />
            <View style={styles.actions} >
                <Button color={Colors.primary} title="Add to Cart" onPress={() => { 
                    dispatch(cartActions.addToCart(selectedPorduct));
                }} />
            </View>
            <Text style={styles.price} > ${selectedPorduct.price.toFixed(2)} </Text>
            <Text style={styles.description} > {selectedPorduct.description} </Text>
        </ScrollView>
    );
};

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    };
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center'  
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 10
    },
    description: {

        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20
    }
});

export default ProductDetailScreen;