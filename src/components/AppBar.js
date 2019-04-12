import React from 'React'
import { View, Text } from 'react-native'
import colors from '../styles/colors';

export default class Home extends React.Component {

    render() {
        return (
            <View style={{ backgroundColor: colors.principal, height: 100, alignItems: 'center' }}>
                <Text style={{ marginTop: 50, color: colors.branco, fontSize: 20 }}>Lista de Orçamentos</Text>
            </View>
        )
    }
}
