import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { PlanetResource } from '../components/planetResource';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function Atrox() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('atrox')}
                icon='atrox'
                nugget='nuggetAtrox'
                link='Atrox'
            />
            <View style={layoutStyle.content} >
                <ContentTitle title={translate('atmosphericResourcesTitle')} />
                <PlanetResource
                    nugget='nuggetHelium'
                    icon='helium'
                    name={translate('helium')}
                    link='Helium'
                />
                <PlanetResource
                    nugget='nuggetMethane'
                    icon='methane'
                    name={translate('methane')}
                    link='Methane'
                />
                <PlanetResource
                    nugget='nuggetNitrogen'
                    icon='nitrogen'
                    name={translate('nitrogen')}
                    link='Nitrogen'
                />
                <PlanetResource
                    nugget='nuggetSulfur'
                    icon='sulfur'
                    name={translate('sulfur')}
                    link='Sulfur'
                />
            </View>
        </SafeAreaView>
    )
}