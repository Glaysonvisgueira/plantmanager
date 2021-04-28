import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';


import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Header } from '../components/Header';
import { EnviromentButton } from '../components/EnviromentButton';
import { PlantCardPrimary } from '../components/PlantCardPrimary';

import api from '../services/api';

interface EnviromentProps{
    key: string;
    title: string
}


export default function PlantSelect() {

    const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);

    useEffect(() => {
        async function fetchEnviroment(){
            const { data } = await api.get('plants_environments');
            setEnviroments([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ]);
        };
        fetchEnviroment(); 
    }, [])

    return (
        <SafeAreaView style={styles.container}>           
                <View style={styles.header}>
                    <Header />
                    <Text style={styles.title}>
                        Em qual ambiente
                    </Text>
                    <Text style={styles.subtitle}>
                        você quer colocar sua planta?
                    </Text>
                </View>
                <View>
                    <FlatList 
                    data={enviroments} 
                    renderItem={({item})=> (
                        <EnviromentButton title={item.title} />
                    )} 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentList} />
                </View>
                
              
                    
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,            
        },
        header: {
            paddingHorizontal: 30,
        },
        title:{
            fontSize: 17,
            color: colors.heading,
            fontFamily: fonts.heading,
            lineHeight: 20,
            marginTop: 15
        },
        subtitle: {
            fontFamily: fonts.text,
            fontSize: 17,
            lineHeight: 20,
            color: colors.heading
        },
        enviromentList: {
            height: 40,
            justifyContent: 'center',
            paddingBottom: 5,
            marginLeft: 32,
            marginVertical: 32
        }
    });