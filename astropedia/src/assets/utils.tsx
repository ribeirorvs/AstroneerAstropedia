import { FavoriteType } from "./enums";
import { ItemsList, ItemsListDataProps } from "./items";
import { PlanetDataProps, PlanetList } from "./planets";
import { PrinterDataProps, PrintersList } from "./printers";
import { RailwayDataProps, RailwayList } from "./railways";
import { ResourceDataProps, ResourceList } from "./resources";

//Define the types that has a list of items to be rendered in the app
export type ListOptions = 
    PlanetDataProps | 
    ResourceDataProps | 
    PrinterDataProps | 
    ItemsListDataProps |
    RailwayDataProps
;

export function HandleList( type: FavoriteType, id: number) {
    if(type === FavoriteType.Planet){
        const planet = PlanetList.find(planet => planet.id === id)
        return planet || null
    } else if(type === FavoriteType.Resource){
        const resource = ResourceList.find(resource => resource.id === id)
        return resource || null
    } else if(type === FavoriteType.Printer){
        const printer = PrintersList.find(printer => printer.id === id)
        return printer || null
    } else if(type === FavoriteType.Item){
        const item = ItemsList.find(item => item.id === id)
        return item || null
    } else if(type === FavoriteType.Railway){
        const railway = RailwayList.find(railway => railway.id === id)
        return railway || null
    }
}