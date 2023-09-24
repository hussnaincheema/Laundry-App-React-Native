import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity } from '../Redux/Store/Reducer/CartReducer';
import { decrementQty, incrementQty } from '../Redux/Store/Reducer/ProductReducer';
import { addToCart } from '../Redux/Store/Reducer/CartReducer';

const DressItem = ({ item }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart)
    const addItemToCart = () => {
        dispatch(addToCart(item))
        dispatch(incrementQty(item))
    }

    const handleDecrementQuantity = () => {
        dispatch(decrementQuantity(item))
        dispatch(decrementQty(item))
    }

    const handleIncrementQuantity = () => {
        dispatch(incrementQuantity(item))
        dispatch(incrementQty(item))
    }

    console.log("ITEMS IS===", item )


    return (
        <View>
            <Pressable style={{
                backgroundColor: "#F8F8F8", borderRadius: 8, padding: 10, flexDirection: "row",
                margin: 14, justifyContent: "space-between", alignItems: "center"
            }}>
                <View>
                    <Image source={{uri: item.image}} style={{ width: 70, height: 70 }} />
                </View>

                <View>
                    <Text style={{ width: 83, fontSize: 17, fontWeight: "500", marginBottom: 7 }}>{item.name}</Text>
                    <Text style={{ width: 60, color: "gray", fontSize: 15 }}>${item.price}</Text>
                </View>

                {cart.some((c) => c.id === item.id) ? (
                    <Pressable style={{ flexDirection: "row", paddingHorizontal: 10, paddingVertical: 5 }}>
                        <Pressable onPress={handleDecrementQuantity} style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#BEBEBE", backgroundColor: "#E0E0E0", justifyContent: "center", alignContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "#088F8F", paddingHorizontal: 6, fontWeight: "600", textAlign: "center" }}>-</Text>
                        </Pressable>

                        <Pressable>
                            <Text style={{ fontSize: 19, color: "#088F8F", paddingHorizontal: 8, fontWeight: "600" }}>{item.quantity}</Text>
                        </Pressable>

                        <Pressable onPress={handleIncrementQuantity} style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#BEBEBE", backgroundColor: "#E0E0E0", justifyContent: "center", alignContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "#088F8F", paddingHorizontal: 6, fontWeight: "600", textAlign: "center" }}>+</Text>
                        </Pressable>
                    </Pressable>
                ) : (
                    <Pressable onPress={addItemToCart} style={{ width: 80 }}>
                        <Text style={{ borderColor: "gray", borderWidth: 0.8, marginVertical: 10, color: "#088F8F", textAlign: "center", padding: 5, borderRadius: 4, fontSize: 17, fontWeight: "bold" }}>Add</Text>
                    </Pressable>
                )}

            </Pressable>
        </View>
    )
}

export default DressItem

const styles = StyleSheet.create({})