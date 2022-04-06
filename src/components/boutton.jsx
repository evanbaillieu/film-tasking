import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'

export default function Boutton({
    item,
    style,
    onPress
}) {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            {item}
        </TouchableOpacity>
    )
}
