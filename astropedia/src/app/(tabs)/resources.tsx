import { FavoriteType } from '@/assets/enums';
import { ResourceList } from '@/assets/resources';
import { ComponentButton } from '@/components/componentButton';
import { Title } from '@/components/title';
import { translate } from '@/libs/localization';
import { layoutStyle } from '@/styles/layoutStyles';
import { View, FlatList, SafeAreaView } from 'react-native';

export default function Resources() {
    return (
        <SafeAreaView style={layoutStyle.container}>
            <View style={layoutStyle.content} >

                <Title title={translate('resourcesTitle')} />
                <FlatList
                    data={ResourceList}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <ComponentButton
                            id={item.id}
                            type={FavoriteType.Resource}
                        />
                    )}
                    style={layoutStyle.flatList}
                />
            </View>
        </SafeAreaView>
    )
}