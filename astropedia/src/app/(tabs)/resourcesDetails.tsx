import { FavoriteType } from "@/assets/enums";
import { ResourceList } from "@/assets/resources";
import { ContentTitle } from "@/components/contentTitle";
import { ResourceItem } from "@/components/resourceItem";
import { ResourceSubItem1 } from "@/components/resourceSubItem1";
import { ResourceTitle } from "@/components/resourceTitle";
import { translate } from "@/libs/localization";
import { layoutStyle } from "@/styles/layoutStyles";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, ScrollView } from "react-native";

export default function ResourcesDetails() {
    const { id } = useLocalSearchParams();
    const resource = ResourceList.find(resource => resource.id === Number(id));
    const hasResourceItem = resource?.hasResourceItem || false;
    const resourceItem = resource?.resourceItem || [];
    const hasUse = resource?.hasUse || false;
    const use = resource?.use || [];
    const hasSub1 = resource?.hasSub1 || false;
    const sub1 = resource?.sub1 || [];
    return (
        <SafeAreaView style={layoutStyle.container} >
            <ResourceTitle
                id={resource?.id || 1}
                type={FavoriteType.Resource}
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                {
                    hasResourceItem &&
                    (<>
                        {
                            resourceItem.map(item => {
                                return <ResourceItem name={translate(item.name)} icon={item.icon} link={item.link} />
                            })
                        }
                    </>)
                }
                <ContentTitle title={translate('usesTitle')} />
                {
                    hasUse &&
                    (<>
                        {
                            use.map(item =>{
                                return (<>
                                    <ResourceItem name={translate(item.name)} icon={item.icon} />
                                    {
                                        sub1
                                            .filter(subItem1 => subItem1.useId === item.id)
                                            .map(filteredSubItem1 => (
                                                <ResourceSubItem1 name={translate(filteredSubItem1.name)} icon={filteredSubItem1.icon} link={filteredSubItem1.link}/>
                                            ))
                                    }
                                </>)
                            })
                        }
                    </>)
                }
            </ScrollView>
        </SafeAreaView>
    )
}