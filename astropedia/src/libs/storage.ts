import { FavoriteType } from '@/assets/enums';
import AsyncStorage from '@react-native-async-storage/async-storage';

//define the interface of intems favorited
export interface FavoriteDetails {
    id: number,
    type: FavoriteType
}

//check if an item is favorite or no
export async function cehckFavorited(item: FavoriteDetails): Promise<boolean>{
    try{
        const data = await AsyncStorage.getItem('@astropedia:itemsFavorited');

        if(data !== null) {
            const items: FavoriteDetails[] = JSON.parse(data)
            const foundItem = items.find(favorite =>  favorite.id === item.id && favorite.type === item.type);
            return !!foundItem;
        }

        return false;

    } catch (error) {
        console.error("Error: ", error)
        return false;
    }

}

export async function loadAllFavorites(): Promise<FavoriteDetails[]>{
    try{
        const data = await AsyncStorage.getItem('@astropedia:itemsFavorited');
        let items : FavoriteDetails[] = [];
        if(data !== null){
            items = JSON.parse(data);
            //console.log(items);
        }
        return items
    } catch (error) {
        console.error("Error: ", error);
        return [];
    }
}

export async function saveFavorite(item: FavoriteDetails){
    try{
        const data = await AsyncStorage.getItem('@astropedia:itemsFavorited');
        let items: FavoriteDetails[] = [];
        if(data !== null) {
            items = JSON.parse(data);
        }
        const itemExist = items.some(favorite =>  favorite.id === item.id && favorite.type === item.type);

        if(!itemExist){
            items.push(item);
            await AsyncStorage.setItem('@astropedia:itemsFavorited', JSON.stringify(items));
        } 
        
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function deleteFavorite(item: FavoriteDetails){
    try{
        const data = await AsyncStorage.getItem('@astropedia:itemsFavorited');
        let items: FavoriteDetails[] = [];
        if(data !== null){
            items = JSON.parse(data);
            
            const itemExist = items.some(favorite =>  favorite.id === item.id && favorite.type === item.type);

            if(itemExist){
                items = items.filter(favorite =>  !(favorite.id === item.id && favorite.type === item.type))
                await AsyncStorage.setItem('@astropedia:itemsFavorited', JSON.stringify(items));
            } 

        } 

    } catch (error) {
        console.error("Error: ", error)
    }
}