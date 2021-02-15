import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

import Colors from '../../constants/Colors'

const ProductItem = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={props.onViewDetail} useForeground>
                    <View>
                        <View style={styles.imageContainer} >
                            <Image style={styles.image} source={{ uri: props.image }} />
                        </View>
                        <View style={styles.detail} >
                            <Text style={styles.title}>{props.title}</Text>
                            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                        </View>
                        <View style={styles.actions} >
                            <Button color={Colors.primary} title='View Details' onPress={props.onViewDetail} />
                            <Button color={Colors.primary} title="To Cart" onPress={props.onAddCart} />
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({

    product: {
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,

    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    detail: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    },
    title: {
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontSize: 18,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20,
        marginTop: 4
    }
});

export default ProductItem;