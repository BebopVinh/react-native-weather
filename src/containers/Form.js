import React, { useState } from 'react'
import { TextInput, View, Alert, SafeAreaView, Button } from 'react-native';

export default function Form() {
    const [city, setCity] = useState('')

    return (
        <SafeAreaView>
            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => setCity(text)}
                    value={city}
                />
                <Button
                    title="Press me"
                    color="#f194ff"
                    onPress={(event) => {
                        event.preventDefault()

                    }}
                />
            </View>
        </SafeAreaView>
    )
}
