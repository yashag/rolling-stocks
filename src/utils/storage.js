

export function getFavouriteStocks() {
    return JSON.parse(localStorage.getItem('favouriteStocks') || '{}');
}

export function setFavouriteStocks(favouriteStocks) {
    localStorage.setItem('favouriteStocks', JSON.stringify(favouriteStocks));
}