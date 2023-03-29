export interface IFavoriteCharacterState {
    id: number;
    name: string;
    isFavorite ?: boolean
}

export interface ICharacterState {
    charactersItems : IFavoriteCharacterState[]
}