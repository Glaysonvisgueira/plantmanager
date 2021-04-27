import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/core';


import colors from '../styles/colors';
import fonts from '../styles/fonts';

import {Header} from '../components/Header';
import { EnviromentButton } from '../components/EnviromentButton';

export default function PlantSelect() {
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
                    data={[1,2,3,4,5,6,7,8,9]} 
                    renderItem={({item})=> (
                        <EnviromentButton title="Cozinha" active />
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