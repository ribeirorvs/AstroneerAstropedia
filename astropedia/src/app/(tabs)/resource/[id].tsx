import { FavoriteType } from "@/assets/enums";
import { ResourceList } from "@/assets/resources";
import { ResourceSubItem2 } from "@/components/resourceSubItem2";
import { ContentTitle } from "@/components/contentTitle";
import { ResourceItem } from "@/components/resourceItem";
import { ResourceSubItem1 } from "@/components/resourceSubItem1";
import { ResourceTitle } from "@/components/resourceTitle";
import { translate } from "@/libs/localization";
import { layoutStyle } from "@/styles/layoutStyles";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, ScrollView } from "react-native";
import { ResourceSubItem3 } from "@/components/resourceSubItem3";
import { ResourceSubItem4 } from "@/components/resourceSubItem4";
import { ResourceSubItem5 } from "@/components/resourceSubItem5";

export default function ResourcesDetails() {
    const { id } = useLocalSearchParams();
    const resource = ResourceList.find(resource => resource.id === Number(id));
    const hasResourceItem = resource?.hasResourceItem || false;
    const resourceItem = resource?.resourceItem || [];
    const resourceSub1 = resource?.resourceSub1 || [];
    const resourceSub2 = resource?.resourceSub2 || [];
    const resourceSub3 = resource?.resourceSub3 || [];
    const resourceSub4 = resource?.resourceSub4 || [];
    const resourceSub5 = resource?.resourceSub5 || [];
    const hasUse = resource?.hasUse || false;
    const use = resource?.use || [];
    const sub1 = resource?.sub1 || [];
    const sub2 = resource?.sub2 || [];
    const sub3 = resource?.sub3 || [];
    const sub4 = resource?.sub4 || [];
    const sub5 = resource?.sub5 || [];
    return (
        <SafeAreaView style={layoutStyle.container} >
            <ScrollView>
                <ResourceTitle
                    id={resource?.id || 1}
                    type={FavoriteType.Resource}
                />
                <ContentTitle title={translate('sourceTitle')} />
                {
                    hasResourceItem &&
                    (<>
                        {
                            resourceItem.map(item => {
                                return (<>
                                    <ResourceItem name={translate(item.name)} icon={item.icon} link={item.link} />
                                    {
                                        resourceSub1
                                            .filter(resourceSubItem1 => resourceSubItem1.useId === item.id)
                                            .map(filteredResourceSubItem1 => (<>
                                                <ResourceSubItem1 
                                                    name={translate(filteredResourceSubItem1.name)}
                                                    icon={filteredResourceSubItem1.icon}
                                                    link={filteredResourceSubItem1.link}
                                                />
                                                {
                                                    resourceSub2
                                                        .filter(resourceSubItem2 => resourceSubItem2.useId === filteredResourceSubItem1.id)
                                                        .map(filteredResourceSubItem2 => (<>
                                                            <ResourceSubItem2
                                                                name={translate(filteredResourceSubItem2.name)}
                                                                icon={filteredResourceSubItem2.icon}
                                                                link={filteredResourceSubItem2.link}
                                                            />
                                                            {
                                                                resourceSub3
                                                                .filter(resourceSubItem3 => resourceSubItem3.useId === filteredResourceSubItem2.id)
                                                                .map(filteredResourceSubItem3 => (<>
                                                                    <ResourceSubItem3
                                                                        name={translate(filteredResourceSubItem3.name)}
                                                                        icon={filteredResourceSubItem3.icon}
                                                                        link={filteredResourceSubItem3.link}
                                                                    />
                                                                    {
                                                                        resourceSub4
                                                                        .filter(resourceSubItem4 => resourceSubItem4.useId === filteredResourceSubItem3.id)
                                                                        .map(filteredResourceSubItem4 => (<>
                                                                            <ResourceSubItem4
                                                                                name={translate(filteredResourceSubItem4.name)}
                                                                                icon={filteredResourceSubItem4.icon}
                                                                                link={filteredResourceSubItem4.link}
                                                                            />
                                                                            {
                                                                                resourceSub5
                                                                                .filter(resourceSubItem5 => resourceSubItem5.useId === filteredResourceSubItem4.id)
                                                                                .map(filteredResourceSubItem5 => (
                                                                                    <ResourceSubItem5
                                                                                        name={translate(filteredResourceSubItem5.name)}
                                                                                        icon={filteredResourceSubItem5.icon}
                                                                                        link={filteredResourceSubItem5.link}
                                                                                    />
                                                                                ))
                                                                            }
                                                                        </>))
                                                                    }
                                                                </>))
                                                            }
                                                        </>))
                                                }
                                            </>))
                                    }
                                </>)
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
                                    <ResourceItem name={translate(item.name)} icon={item.icon} link={item.link} />
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