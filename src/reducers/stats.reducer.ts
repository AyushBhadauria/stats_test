import { BaseAction } from '../common';

export interface Blunder {
    position: number;
    opponent: string;
    equityLoss: string;
    type: string;
    cube: number;
    category: string;
    score: string;
    length: number;
    id: string; // Key purpose mock on API
};

export type UserStatsState = {
    userId: number,
    page: number,
    totalPages: number,
    blunders: Blunder[],
    filterValue: string
};

const createDefaultState = (): UserStatsState => ({
    userId: 0,
    page: 0,
    totalPages: 0,
    blunders: [],
    filterValue: '',
})

export const statsReducer = (
    state: UserStatsState = createDefaultState(),
    action: BaseAction
): UserStatsState => {
    switch (action.type) {
        case 'SET_USER_ID':
            return {
                ...state,
                userId: action.payload
            };
    }
    return state;
};