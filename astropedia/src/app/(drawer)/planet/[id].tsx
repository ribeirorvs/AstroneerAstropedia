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
    const hasFlora = planet ? planet.hasFlora : false;
    const naturalResources = planet?.naturalResources || [];
    const atmosphericResources = planet?.atmosphericResources || [];
    const flora = planet?.flora || []
    return (
        <SafeAreaView style={layoutStyle.container} >
            <ScrollView >
                <ResourceTitle
                    id={planet?.id || 1}
                    type={FavoriteType.Planet}
                />
                <ContentTitle title={translate('planetDetails')} />
                <PlanetDetails
                    id={planet?.id || 1}
                />
                {
                    hasNaturalResources && 
                    (<>
                        <ContentTitle title={translate('naturalResourcesTitle')} />
                        {
                            naturalResources.map((resource, index) => {
                                return (
                                    <PlanetResource
                                        key={index}
                                        resource={resource}
                                    />
                                )
                            })
                        }
                    </>)
                }
                {
                    hasAtmosphericResources && 
                    (<>
                        <ContentTitle title={translate('atmosphericResourcesTitle')} />
                        {
                            atmosphericResources.map((resource, index) => {
                                return (
                                    <PlanetResource
                                        key={index}
                                        resource={resource}
                                    />
                                )
                            })
                        }
                    </>)
                }
                {
                    hasFlora && 
                    (<>
                        <ContentTitle title={translate('flora')} />
                        {
                            flora.map((flora, index) => {
                                return (
                                    <PlanetResource
                                        key={index}
                                        resource={flora}
                                    />
                                )
                            })
                        }
                    </>)
                }
            </ScrollView>
        </SafeAreaView>
    )
}