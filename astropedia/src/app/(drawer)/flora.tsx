import { FavoriteType } from '@/assets/enums';
import { FloraList } from '@/assets/flora';
import { ComponentButton } from '@/components/componentButton';
import { Title } from '@/components/title';
import { translate } from '@/libs/localization';
import { layoutStyle } from '@/styles/layoutStyles';
import { View, FlatList, SafeAreaView } from 'react-native';

export default function Flora() {
    return (
        <SafeAreaView style={layoutStyle.container}>
            <View style={layoutStyle.content} >

                <Title title={translate('flora')} />
                <FlatList
                    data={FloraList}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item, index }) => (
                        <ComponentButton
                            key={index}
                            id={item.id}
                            type={FavoriteType.Flora}
                        />
                    )}
                    style={layoutStyle.flatList}
                />
            </View>
        </SafeAreaView>
    )
}