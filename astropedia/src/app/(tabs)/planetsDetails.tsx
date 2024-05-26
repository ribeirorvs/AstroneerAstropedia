import { ContentTitle } from '@/components/contentTitle';
import { PlanetDetails } from '@/components/planetDetails';
import { PlanetResource } from '@/components/planetResource';
import { ResourceTitle } from '@/components/resourceTitle';
import { translate } from '@/libs/localization';
import { layoutStyle } from '@/styles/layoutStyles';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams } from "expo-router";
import { PlanetList } from '@/assets/planets';

export default function PlanetsDetails() {
    const { id } = useLocalSearchParams();
    const planet = PlanetList.find(planet => planet.id === Number(id));
    return (
        <SafeAreaView style={layoutStyle.container} >
            <ResourceTitle
                id={planet ? planet.id: 1}
            />
            <ScrollView style={layoutStyle.resourceContent} contentContainerStyle={{ alignItems: 'center' }} >
                <ContentTitle title={translate('planetDetails')} />
                <PlanetDetails
                    size={translate('medium')}
                    difficulty={translate('easy')}
                    cycle='12'
                    sun={translate('medium')}
                    sunValue='100%'
                    wind={translate('medium')}
                    windValue='48%'
                />
                <ContentTitle title={translate('naturalResourcesTitle')} />
                <PlanetResource
                    nugget='nuggetSphalerite'
                    icon='sphalerite'
                    name={translate('sphalerite')}
                    link='Sphalerite'
                    location={translate('caveLayer')}
                />
                <PlanetResource
                    nugget='nuggetMalachite'
                    icon='malachite'
                    name={translate('malachite')}
                    link='Malachite'
                    location={translate('caveLayer') + ', ' + translate('mantleLayer')} 
                />
                <ContentTitle title={translate('atmosphericResourcesTitle')} />
                <PlanetResource
                    nugget='nuggetHydrogen'
                    icon='hydrogen'
                    name={translate('hydrogen')}
                    link='Hydrogen'
                />
                <PlanetResource
                    nugget='nuggetNitrogen'
                    icon='nitrogen'
                    name={translate('nitrogen')}
                    link='Nitrogen'
                />
            </ScrollView>
        </SafeAreaView>
    )
}