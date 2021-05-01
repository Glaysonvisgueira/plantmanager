import React from 'react';
import {Alert, View, Text, StyleSheet, Image, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { SvgFromUri } from 'react-native-svg';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Header } from '../components/Header';
import { EnviromentButton } from '../components/EnviromentButton';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import { Load } from '../components/Load';
import { Button } from '../components/Button';

import api from '../services/api';

import waterdrop from '../assets/waterdrop.png'

export function PlantSave(){
    return(
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri 
                uri="" 
                height={150}
                width={150} />
                <Text style={styles.plantName}>
                    Nome da planta
                </Text>
                <Text style={styles.plantAbout}>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Repudiandae nesciunt
                    nam molestias, ex facere dignissimos 
                    fuga est eum similique minus labore 
                    explicabo sed at in. Distinctio enim 
                    autem animi molestiae?
                </Text>
            </View>

            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image source={waterdrop} style={styles.tipImage} />
                    <Text style={styles.tipText}>
                        Lorem ipsum, dolor sit scipit doloror praesentium nisi!
                    </Text>
                </View>
                <Text style={styles.alertLabel}>
                        Escolha o melhor horário para ser lembrado:
                </Text>
                <Button 
                    title="Cadastrar planta"
                    onPress={() => {}}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.shape,  
        justifyContent: 'space-between'          
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape 
    },
    
});