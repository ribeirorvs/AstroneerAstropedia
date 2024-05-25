import AsyncStorage from '@react-native-async-storage/async-storage';

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

export async function saveFavorite(page: PageDetails): Promise<void> {
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

export async function deleteFavorite(page: PageDetails): Promise<void> {
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