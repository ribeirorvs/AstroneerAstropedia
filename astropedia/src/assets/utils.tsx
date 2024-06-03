import { FavoriteType } from "./enums";
import { PlanetDataProps, PlanetList } from "./planets";
import { PrinterDataProps, PrintersList } from "./printers";
import { ResourceDataProps, ResourceList } from "./resources";

//Define the types that has a list of items to be rendered in the app
export type ListOptions = PlanetDataProps | ResourceDataProps | PrinterDataProps;

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
    }
}