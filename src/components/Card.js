import React from 'React'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import colors from '../styles/colors';

export default class Home extends React.Component {

    render() {

        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => Alert.alert('Descrição do serviço:', this.props.item.description)}>

                <View style={{ backgroundColor: "#fff", height: 200, padding: 20, marginBottom: 20, marginTop: this.props.item.id == 1 ? 20 : 0 }}>
                    <View style={{ flexDirection: 'row', marginTop: 0, }}>
                        <Text style={{ color: colors.texto, fontWeight: "600", fontSize: 20, marginRight: 5 }}>Cliente:</Text>
                        <Text style={{ color: colors.principal, fontSize: 20 }}>{this.props.item.customer}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, }}>
                        <Text style={{ color: colors.texto, fontWeight: "600", fontSize: 20, marginRight: 5 }}>Valor:</Text>
                        <Text style={{ color: colors.principal, fontSize: 20 }}>{this.props.item.value}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, }}>
                        <Text style={{ color: colors.texto, fontWeight: "600", fontSize: 20, marginRight: 5 }}>Vendedor:</Text>
                        <Text style={{ color: colors.principal, fontSize: 20 }}>{this.props.item.seller}</Text>
                    </View>
                    <Text style={{ marginTop: 30, color: colors.principal, fontSize: 18, textAlign: "right", fontWeight: "200" }}>VER DESCRIÇÃO</Text>



                </View>

            </TouchableOpacity>

        )
    }
}
