import React, {useState} from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import styles from './styles';
import ItemCardapio from '../itemCardapio/index';
import logo from '../../assets/logo.png';
import { buscaItemCardapio, filtroSugestoes } from '../../servicos/buscaFiltro';

export default function Inicio(){
    const [titulo, setTitulo] = useState("Sugestões")
    const [termo, setTermo] = useState();

    const [cardapioLista, setCardapioLista] = useState(filtroSugestoes())

    function handleSearch(termoDigitado) {
        if(termoDigitado.length > 2) {
            const buscaLista = buscaItemCardapio(termo)

            setCardapioLista(buscaLista);
            setTitulo("Você buscou por: "+termoDigitado)
        } else {
            setCardapioLista(filtroSugestoes())
            setTitulo("Sugestões")
        }
        setTermo(termoDigitado);
    }
    return (
        <View style={styles.Container}>
            <View style={styles.LogoArea}>
                <Image style={styles.logo} source={logo}/>
                <Text style={styles.tituloLogo}>Cardápio Japonês</Text>                
            </View>
            <TextInput style={styles.busca} onChangeText={(termoDigitado) => handleSearch(termoDigitado)} value={termo} placeholder='O que você procura?'/>
            <Text style={styles.titulo}>{titulo}</Text>
            <ScrollView>
                {
                    cardapioLista.map((produto, index) => (
                        <ItemCardapio key={index} nome={produto.nome} descricao={produto.descricao} imagem={produto.imagem}/>
                    ))
                }
            </ScrollView>
        </View>
    )
}
