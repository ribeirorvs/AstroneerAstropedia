import { ContentTitle } from '@/components/contentTitle';
import { PlanetDetails } from '@/components/planetDetails';
import { PlanetResource } from '@/components/planetResource';
import { ResourceTitle } from '@/components/resourceTitle';
import { translate } from '@/libs/localization';
import { layoutStyle } from '@/styles/layoutStyles';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams } from "expo-router";
import { PlanetList } from '@/assets/planets';
import { FavoriteType } from '@/assets/enums';

export default function PlanetsDetails() {
    const { id } = useLocalSearchParams();
    const planet = PlanetList.find(planet => planet.id === Number(id));
    const hasNaturalResources = planet ? planet.hasNaturalResources : false;
    const hasAtmosphericResources = planet ? planet.hasAtmosphericResources : false;
    const naturalResources = planet?.naturalResources || [];
    const atmosphericResources = planet?.atmosphericResources || [];
    return (
        <SafeAreaView style={layoutStyle.container} >
            <ResourceTitle
                id={planet ? planet.id: 1}
                type={FavoriteType.Planet}
            />
            <ScrollView style={layoutStyle.resourceContent} contentContainerStyle={{ alignItems: 'center' }} >
                <ContentTitle title={translate('planetDetails')} />
                <PlanetDetails
                    id={planet?.id || 1}
                />
                {
                    hasNaturalResources && 
                    (<>
                        <ContentTitle title={translate('naturalResourcesTitle')} />
                        {
                            naturalResources.map(resource => {
                                return (<PlanetResource
                                    resource={resource}
                                />)
                            })
                        }
                    </>)
                }
                {
                    hasAtmosphericResources && 
                (<>
                    <ContentTitle title={translate('atmosphericResourcesTitle')} />
                    {
                        atmosphericResources.map(resource => {
                            return (<PlanetResource
                                resource={resource}
                            />)
                        })
                    }
                </>)
                }
            </ScrollView>
        </SafeAreaView>
    )
}