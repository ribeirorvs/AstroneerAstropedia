import { FavoriteType } from "./enums";
import { PlanetDataProps, PlanetList } from "./planets";
import { ResourceDataProps, ResourceList } from "./resources";

export type ListOptions = PlanetDataProps | ResourceDataProps;

export function HandleList( type: FavoriteType, id: number) {
    if(type === FavoriteType.Planet){
        const planet = PlanetList.find(planet => planet.id === id)
        console.log(planet)
        return planet || null
    } else if(type === FavoriteType.Resource){
        const resource = ResourceList.find(resource => resource.id === id)
        return resource || null
    }
}