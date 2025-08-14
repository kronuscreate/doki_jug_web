export enum SymbolName {
    BAR = 'bar',
    BELL = 'bell',
    BUDOU = 'budou',
    CHERRY = 'cherry',
    PIERO = 'piero',
    RED_7 = 'red_7',
    REPLAY = 'replay',
}

export enum RollName {
    REACH_DOUBLE_TENPAI_HAZURE = 0,
    REACH_BONUS_SYMBOL_CENTER = 1,
    SINGLE_CHERRY_OR_BONUS_CHERRY = 2
}

export interface RollData {
    name: RollName;
    symbolData: RollSymbolData[];
}

export interface RollSymbolData {
    lSymbol: SymbolName,
    cSymbol: SymbolName,
    rSymbol: SymbolName,
}

export const RollData: RollData[] = [
    {
        name: RollName.REACH_DOUBLE_TENPAI_HAZURE,
        symbolData: [
            {
                lSymbol:SymbolName.RED_7, 
                cSymbol:SymbolName.REPLAY,
                rSymbol:SymbolName.REPLAY
            },
        ]
    },
    {
        name: RollName.REACH_BONUS_SYMBOL_CENTER,
        symbolData: [
            {
                lSymbol:SymbolName.RED_7, 
                cSymbol:SymbolName.RED_7,
                rSymbol:SymbolName.BAR
            },
            {
                lSymbol:SymbolName.BAR, 
                cSymbol:SymbolName.BAR,
                rSymbol:SymbolName.BAR
            },
        ]
    },{
        name:RollName.SINGLE_CHERRY_OR_BONUS_CHERRY,
        symbolData:[
            {
                lSymbol:SymbolName.REPLAY, 
                cSymbol:SymbolName.PIERO,
                rSymbol:SymbolName.RED_7
            },
            {
                lSymbol:SymbolName.REPLAY, 
                cSymbol:SymbolName.PIERO,
                rSymbol:SymbolName.PIERO
            },

            {
                lSymbol:SymbolName.BAR, 
                cSymbol:SymbolName.RED_7,
                rSymbol:SymbolName.RED_7
            },
            {
                lSymbol:SymbolName.BAR, 
                cSymbol:SymbolName.RED_7,
                rSymbol:SymbolName.PIERO
            },

            {
                lSymbol:SymbolName.BAR, 
                cSymbol:SymbolName.BAR,
                rSymbol:SymbolName.RED_7
            },
            {
                lSymbol:SymbolName.BAR, 
                cSymbol:SymbolName.BAR,
                rSymbol:SymbolName.PIERO
            },

            {
                lSymbol:SymbolName.BAR, 
                cSymbol:SymbolName.BELL,
                rSymbol:SymbolName.RED_7
            },
            {
                lSymbol:SymbolName.BAR, 
                cSymbol:SymbolName.BELL,
                rSymbol:SymbolName.PIERO
            },

            {
                lSymbol:SymbolName.REPLAY, 
                cSymbol:SymbolName.RED_7,
                rSymbol:SymbolName.RED_7
            },
            {
                lSymbol:SymbolName.REPLAY, 
                cSymbol:SymbolName.RED_7,
                rSymbol:SymbolName.PIERO
            },

            {
                lSymbol:SymbolName.REPLAY, 
                cSymbol:SymbolName.BAR,
                rSymbol:SymbolName.RED_7
            },
            {
                lSymbol:SymbolName.REPLAY, 
                cSymbol:SymbolName.BAR,
                rSymbol:SymbolName.PIERO
            },

            {
                lSymbol:SymbolName.REPLAY, 
                cSymbol:SymbolName.BELL,
                rSymbol:SymbolName.RED_7
            },
            {
                lSymbol:SymbolName.REPLAY, 
                cSymbol:SymbolName.BELL,
                rSymbol:SymbolName.PIERO
            },
        ]
    }
];



export enum ReelPosition {
    LEFT = 0,
    CENTER = 1,
    RIGHT = 2
}

export const SYMBOL_HEIGHT = 111;

export const SYMBOL_LIST: SymbolName[][] = [
    [
        SymbolName.BELL,
        SymbolName.RED_7,
        SymbolName.PIERO,
        SymbolName.BUDOU,
        SymbolName.REPLAY,
        SymbolName.CHERRY,
        SymbolName.BAR,
        SymbolName.BELL,
        SymbolName.BUDOU,
        SymbolName.REPLAY,
        SymbolName.BELL,
        SymbolName.RED_7,
        SymbolName.PIERO,
        SymbolName.BUDOU,
        SymbolName.REPLAY,
        SymbolName.CHERRY,
        SymbolName.BAR,
        SymbolName.PIERO,
        SymbolName.BUDOU,
        SymbolName.REPLAY
    ],
    [
        SymbolName.REPLAY,
        SymbolName.RED_7,
        SymbolName.BUDOU,
        SymbolName.CHERRY,
        SymbolName.PIERO,
        SymbolName.REPLAY,
        SymbolName.BELL,
        SymbolName.BUDOU,
        SymbolName.CHERRY,
        SymbolName.PIERO,
        SymbolName.REPLAY,
        SymbolName.BAR,
        SymbolName.BUDOU,
        SymbolName.CHERRY,
        SymbolName.PIERO,
        SymbolName.REPLAY,
        SymbolName.BAR,
        SymbolName.BUDOU,
        SymbolName.BELL,
        SymbolName.PIERO
    ],
    [
        SymbolName.REPLAY,
        SymbolName.RED_7,
        SymbolName.BAR,
        SymbolName.BUDOU,
        SymbolName.BELL,
        SymbolName.REPLAY,
        SymbolName.PIERO,
        SymbolName.CHERRY,
        SymbolName.BUDOU,
        SymbolName.BELL,
        SymbolName.REPLAY,
        SymbolName.PIERO,
        SymbolName.CHERRY,
        SymbolName.BUDOU,
        SymbolName.BELL,
        SymbolName.REPLAY,
        SymbolName.PIERO,
        SymbolName.CHERRY,
        SymbolName.BUDOU,
        SymbolName.BELL
    ],
]