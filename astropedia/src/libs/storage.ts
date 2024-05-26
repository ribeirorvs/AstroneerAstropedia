import { FavoriteType } from '@/assets/enums';
import { PlanetList } from '@/assets/planets';
import { PrintersList } from '@/assets/printers';
import { ResourceList } from '@/assets/resources';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export interface PageDetails {
    pageTitle: string,
    pageIcon: string,
    pageNugget?: string,
    pageLink: string
}

export interface StoredFavorite {
    [id: string]: {
        favorite: PageDetails
    }
}

export interface FavIcon {
    pageTitle: string,
    favorited: boolean
}

export interface StoredFavIcon {
    [id: string]: {
        favIcon: FavIcon
    }
}

export async function saveFavorites(page: PageDetails): Promise<void> {
    try {
        const data = JSON.parse(JSON.stringify(await AsyncStorage.getItem('@astropedia:pages')));
        const favDetails = {
            pageTitle: page.pageTitle,
            favorited: true
        }
        const oldFavorites = data ? (JSON.parse(data) as StoredFavorite) : {};
        const newFavorite = {
            [page.pageTitle]: {
                pageTitle: page.pageTitle,
                pageIcon: page.pageIcon,
                pageLink: page.pageLink
            }
        }
        await AsyncStorage.setItem('@astropedia:pages',
            JSON.stringify({
                ...newFavorite,
                ...oldFavorites
            })
        );
        saveFavIcon(favDetails);
    } catch (error) {
        console.error(error)
    }
}

export async function loadFavorites(): Promise<PageDetails[]> {
    const data = await AsyncStorage.getItem('@astropedia:pages');
    const favorites = data ? (JSON.parse(data) as StoredFavorite) : {};
    return favoritesStored = Object
        .keys(favorites)
        .map(favorite => {
            return {
                ...favorites[favorite]
            }
        })
        .sort();
}

export async function deleteFavorites(page: PageDetails): Promise<void> {
    try {
        const favDetails = {
            pageTitle: page.pageTitle,
            favorited: false
        }
        const data = JSON.parse(JSON.stringify(await AsyncStorage.getItem('@astropedia:pages')));
        const favorites = data ? (JSON.parse(data) as StoredFavorite) : {};

        delete favorites[page.pageTitle]

        await AsyncStorage.setItem('@astropedia:pages',
            JSON.stringify(favorites)
        );
        reomveFavIcon(favDetails)
    } catch (error) {
        console.error(error)
    }
}

export async function loadFavoriteIcon(favorited: FavIcon): Promise<string> {
    const key = '@stropedia:favIcon';
    const data = JSON.parse(JSON.stringify(await AsyncStorage.getItem(key)));
    const favorites = data ? (JSON.parse(data) as StoredFavIcon) : {};
    if (JSON.stringify(favorites) != '{}') {
        if (favorites[favorited.pageTitle].favIcon.favorited) {
            return ('favIconActive')
        } else {
            return ('favIcon')
        }
    } else {
        return ('favIcon')
    }
}

async function saveFavIcon(page: FavIcon) {
    const key = '@stropedia:favIcon';
    const data = JSON.parse(JSON.stringify(await AsyncStorage.getItem(key)));
    const favorites = data ? (JSON.parse(data) as StoredFavIcon) : {};
    const newFavorite = {
        [page.pageTitle]: {
            favIcon: page
        }
    }
    await AsyncStorage.setItem(key,
        JSON.stringify({
            ...newFavorite,
            ...favorites
        })
    );
}

async function reomveFavIcon(page: FavIcon) {
    const key = '@stropedia:favIcon';
    const data = JSON.parse(JSON.stringify(await AsyncStorage.getItem(key)));
    const favorites = data ? (JSON.parse(data) as StoredFavIcon) : {};

    delete favorites[page.pageTitle]

    await AsyncStorage.setItem(key,
        JSON.stringify(favorites)
    );

}



//New way to store favorites

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