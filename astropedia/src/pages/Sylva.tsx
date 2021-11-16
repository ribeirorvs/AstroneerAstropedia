import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../assets';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Sylva() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='sylva'
                image='iconSylva'
            />
            <View style={layoutStyle.content} >
                <ContentTitle title='natural resources' />
            </View>
        </SafeAreaView>
    )
}