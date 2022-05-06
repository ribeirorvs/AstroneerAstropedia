import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Zinc() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='zinc'
                icon='zinc'
                nugget='nuggetZinc'
                link='Zinc'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='sphalerite' icon='sphalerite' link='Sphalerite' />
                <ResourceSubItem1 name='sylva' icon='sylva' link='Sylva' />
                <ResourceSubItem1 name='desolo' icon='desolo' link='Desolo' />
                <ResourceSubItem1 name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='backpack printer' icon='backpackPrinter' />
                <ResourceSubItem1 name='power Cells' icon='powerCells' />
                <ResourceSubItem1 name='wide mod' icon='augment' />
                <ResourceSubItem1 name='alignment mod' icon='augment' />
                <ResourceSubItem1 name='inhibitor mod' icon='augment' />
                <ResourceSubItem1 name='boost mod' icon='augment' />
                <ResourceSubItem1 name='narrow mod' icon='augment' />
                <ResourceSubItem1 name='terrain analyzer' icon='augment' />
                <ResourceSubItem1 name='small battery' icon='battery' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='medium battery' icon='battery' />
                <ResourceSubItem1 name='power sensor' icon='sensor' />
                <ResourceSubItem1 name='storage sensor' icon='sensor' />
                <ResourceSubItem1 name='battery sensor' icon='sensor' />
                <ResourceSubItem1 name='button repeater' icon='sensor' />
                <ResourceSubItem1 name='proximity repeater' icon='sensor' />
                <ResourceSubItem1 name='delay repeater' icon='sensor' />
                <ResourceSubItem1 name='count repeater' icon='sensor' />
                <ResourceItem name='large printer' icon='largePrinter' />
                <ResourceSubItem1 name='medium sensor arch' icon='sensor' />
                <ResourceSubItem1 name='large sensor ring' icon='sensor' />
                <ResourceSubItem1 name='large sensor hoop a' icon='sensor' />
                <ResourceSubItem1 name='large sensor hoop b' icon='sensor' />
                <ResourceSubItem1 name='xl sensor arch' icon='sensor' />
                <ResourceSubItem1 name='xl sensor canopy' icon='sensor' />
                <ResourceSubItem1 name='xl sensor hoop a' icon='sensor' />
                <ResourceSubItem1 name='xl sensor hoop b' icon='sensor' />
            </ScrollView>
        </SafeAreaView>
    )
}