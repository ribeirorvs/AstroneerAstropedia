import AsyncStorage from '@react-native-async-storage/async-storage';

export interface pageDetails {
    pageTitle: string,
    pageIcon: string,
    pageNugget?: string,
    pageLink: string
}

export interface storedFavorite {
    [id: string]: {
        favorite: pageDetails
    }
}

export interface favIcon {
    pageTitle: string,
    favorited: boolean
}

export interface storedFavIcon {
    [id: string]: {
        favIcon: favIcon
    }
}

export async function saveFavorite(page: pageDetails): Promise<void> {
    try {
        const data = JSON.parse(JSON.stringify(await AsyncStorage.getItem('@astropedia:pages')));
        const favDetails = {
            pageTitle: page.pageTitle,
            favorited: true
        }
        const oldFavorites = data ? (JSON.parse(data) as storedFavorite) : {};
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

export async function loadFavorites(): Promise<pageDetails[]> {
    const data = await AsyncStorage.getItem('@astropedia:pages');
    const favorites = data ? (JSON.parse(data) as storedFavorite) : {};
    const favoritesStored = Object
        .keys(favorites)
        .map(favorite => {
            return {
                ...favorites[favorite]
            }
        })
        .sort();
    return favoritesStored;
}

export async function deleteFavorite(page: pageDetails): Promise<void> {
    try {
        const favDetails = {
            pageTitle: page.pageTitle,
            favorited: false
        }
        const data = JSON.parse(JSON.stringify(await AsyncStorage.getItem('@astropedia:pages')));
        const favorites = data ? (JSON.parse(data) as storedFavorite) : {};

        delete favorites[page.pageTitle]

        await AsyncStorage.setItem('@astropedia:pages',
            JSON.stringify(favorites)
        );
        reomveFavIcon(favDetails)
    } catch (error) {
        console.error(error)
    }
}

export async function loadFavoriteIcon(favorited: favIcon): Promise<String> {
    const key = '@stropedia:favIcon';
    const data = JSON.parse(JSON.stringify(await AsyncStorage.getItem(key)));
    const favorites = data ? (JSON.parse(data) as storedFavIcon) : {};
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

async function saveFavIcon(page: favIcon) {
    const key = '@stropedia:favIcon';
    const data = JSON.parse(JSON.stringify(await AsyncStorage.getItem(key)));
    const favorites = data ? (JSON.parse(data) as storedFavIcon) : {};
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

async function reomveFavIcon(page: favIcon) {
    const key = '@stropedia:favIcon';
    const data = JSON.parse(JSON.stringify(await AsyncStorage.getItem(key)));
    const favorites = data ? (JSON.parse(data) as storedFavIcon) : {};

    delete favorites[page.pageTitle]

    await AsyncStorage.setItem(key,
        JSON.stringify(favorites)
    );

}