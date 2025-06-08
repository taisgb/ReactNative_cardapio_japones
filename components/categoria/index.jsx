import React from "react";
import { View, Text, ScrollView } from "react-native";
import ItemCardapio from "../itemCardapio";
import { filtroCategoria } from "../../servicos/buscaFiltro";
import styles from './styles';

export default function Categoria({route}) {
    const categoria = route.params.categoria;
    const produtosCategoria = filtroCategoria(categoria);

    return(
        <View style={styles.Container}>
            <Text style={styles.titulo}>{categoria}</Text>
            <ScrollView>
                {
                    produtosCategoria.map((produto, index) => (
                        <ItemCardapio key={index} imagem={produto.imagem} nome={produto.nome} descricao={produto.descricao}/>
                    ))
                }
            </ScrollView>
        </View>
        
    )
}