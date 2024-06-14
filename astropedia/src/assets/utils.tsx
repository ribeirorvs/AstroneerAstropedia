import { FavoriteType } from "./enums";
import { FloraDataProps, FloraList } from "./flora";
import { ItemDetailsList, ItemDetailsListDataProps } from "./itemDetails";
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
    RailwayDataProps |
    ItemDetailsListDataProps |
    FloraDataProps
;

export function HandleList( type: FavoriteType, id: number) {
    switch (type) {
        case FavoriteType.Planet:
            return PlanetList.find(planet => planet.id === id) || null;
        case FavoriteType.Resource:
            return ResourceList.find(resource => resource.id === id) || null;
        case FavoriteType.Printer:
            return PrintersList.find(printer => printer.id === id) || null;
        case FavoriteType.Item:
            return ItemsList.find(item => item.id === id) || null;
        case FavoriteType.Railway:
            return RailwayList.find(railway => railway.id === id) || null;
        case FavoriteType.ItemDetails:
            return ItemDetailsList.find(itemDetail => itemDetail.id === id) || null;
        case FavoriteType.Flora:
            return FloraList.find(flora => flora.id === id) || null;
        default:
            return null;
    }
}