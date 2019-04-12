import React from 'React'
import { View, Text, StatusBar, ScrollView } from 'react-native'
import AppBar from '../components/AppBar'
import Card from '../components/Card'
import axios from 'axios'
import Cores from '../styles/colors'



const baseUrl = 'https://my-json-server.typicode.com/codificar/oficina/proposals'



export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = { list: [] };
    }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    load(orcamento) {
        this.setState({ orcamento })
    }

    //componentWillMount() {
    //requisição https
    //axios.get('https://my-json-server.typicode.com/codificar/oficina/proposals')
    // .then(response => { console.log(response); })
    // .catch(() => { console.log('Erro ao recuperar'); });
    // }

    render() {
        return (

            <View style={{ backgroundColor: Cores.corpo, height: "100%" }} >
                <AppBar />
                <ScrollView>
                    {this.state.list.map(item => (<Card key={item.customer} item={item} />))}
                </ScrollView>
            </View>

        )
    }
}
