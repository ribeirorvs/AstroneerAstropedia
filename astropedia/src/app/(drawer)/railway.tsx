import { FavoriteType } from '@/assets/enums';
import { RailwayList } from '@/assets/railways';
import { ComponentButton } from '@/components/componentButton';
import { Title } from '@/components/title';
import { translate } from '@/libs/localization';
import { layoutStyle } from '@/styles/layoutStyles';
import { View, FlatList, SafeAreaView } from 'react-native';

export default function Railway() {
    return (
        <SafeAreaView style={layoutStyle.container}>
            <View style={layoutStyle.content} >

                <Title title={translate('railway')} />
                <FlatList
                    data={RailwayList}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item, index }) => (
                        <ComponentButton
                            key={index}
                            id={item.id}
                            type={FavoriteType.Railway}
                        />
                    )}
                    style={layoutStyle.flatList}
                />
            </View>
        </SafeAreaView>
    )
}