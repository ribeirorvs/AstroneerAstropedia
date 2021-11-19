import AsyncStorage from '@react-native-async-storage/async-storage';

export interface pageDetails {
    pageTitle: string,
    pageIcon: string,
    pageLink: string
}

interface storedFavorite {
    [id: string]: {
        favorite: pageDetails
    }
}

export async function saveFavorite(page: pageDetails): Promise<void> {
    try {
        const data = JSON.parse(JSON.stringify(await AsyncStorage.getItem('@astropedia:pages')));
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
    } catch (error) {
        console.error(error)
    }
}

export async function loadFavorites(): Promise<pageDetails> {
    const data = await AsyncStorage.getItem('@astropedia:pages');
    console.log('data: ' + data)
    const favorites = data ? (JSON.parse(data) as storedFavorite) : {
        pageTitle: '',
        pageIcon: '',
        pageLink: ''
    }

    return (favorites);
}