export interface IFavoriteCharacterState {
    id: number;
    name: string;
    isFavorite ?: boolean
}

export interface ICharacterState {
    charactersItems : IFavoriteCharacterState[]
}

export interface IFilterTypes {
    name : string;
    species : string;
    status: string;
    gender : string;
}