export enum SymbolName {
    BAR = 'bar',
    BELL = 'bell',
    BUDOU = 'budou',
    CHERRY = 'cherry',
    PIERO = 'piero',
    RED_7 = 'red_7',
    REPLAY = 'replay',
    BELL2 = 'bell2',
    PIERO2 = 'piero2',
}

export enum RollName {
    REACH_BONUS_SYMBOL_CENTER = 0,
    SINGLE_CHERRY_OR_BONUS_CHERRY = 1,
    CHERRYS = 2,
    CENTER_CHERRY = 3,
    COMMON_BUDOU = 4,
    REPLAY = 5,
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
        name: RollName.REACH_BONUS_SYMBOL_CENTER,
        symbolData: [
            {
                lSymbol:SymbolName.RED_7, 
                cSymbol:SymbolName.BAR,
                rSymbol:SymbolName.RED_7
            },
            {
                lSymbol:SymbolName.RED_7, 
                cSymbol:SymbolName.BAR,
                rSymbol:SymbolName.BAR
            },
            {
                lSymbol:SymbolName.RED_7, 
                cSymbol:SymbolName.REPLAY,
                rSymbol:SymbolName.BUDOU
            },

            {
                lSymbol:SymbolName.PIERO, 
                cSymbol:SymbolName.BAR,
                rSymbol:SymbolName.RED_7
            },
            {
                lSymbol:SymbolName.PIERO, 
                cSymbol:SymbolName.BAR,
                rSymbol:SymbolName.REPLAY
            },
            {
                lSymbol:SymbolName.PIERO, 
                cSymbol:SymbolName.REPLAY,
                rSymbol:SymbolName.BUDOU
            },

            {
                lSymbol:SymbolName.BELL, 
                cSymbol:SymbolName.BAR,
                rSymbol:SymbolName.REPLAY
            },
            {
                lSymbol:SymbolName.BELL, 
                cSymbol:SymbolName.RED_7,
                rSymbol:SymbolName.REPLAY
            },
            {
                lSymbol:SymbolName.BELL, 
                cSymbol:SymbolName.RED_7,
                rSymbol:SymbolName.RED_7
            },
            {
                lSymbol:SymbolName.BELL, 
                cSymbol:SymbolName.REPLAY,
                rSymbol:SymbolName.BUDOU
            },

            {
                lSymbol:SymbolName.PIERO2, 
                cSymbol:SymbolName.BAR,
                rSymbol:SymbolName.REPLAY
            },
            {
                lSymbol:SymbolName.PIERO2, 
                cSymbol:SymbolName.RED_7,
                rSymbol:SymbolName.REPLAY
            },
            {
                lSymbol:SymbolName.PIERO2, 
                cSymbol:SymbolName.RED_7,
                rSymbol:SymbolName.RED_7
            },
            {
                lSymbol:SymbolName.PIERO2, 
                cSymbol:SymbolName.REPLAY,
                rSymbol:SymbolName.BUDOU
            },

            {
                lSymbol:SymbolName.BELL2, 
                cSymbol:SymbolName.BAR,
                rSymbol:SymbolName.BAR
            },
            {
                lSymbol:SymbolName.BELL2, 
                cSymbol:SymbolName.BAR,
                rSymbol:SymbolName.BUDOU
            },
            {
                lSymbol:SymbolName.BELL2, 
                cSymbol:SymbolName.PIERO,
                rSymbol:SymbolName.BUDOU
            },
        ]
    },
    {
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
    },
    {
        name:RollName.CHERRYS,
        symbolData:[
            {
                lSymbol:SymbolName.REPLAY, 
                cSymbol:SymbolName.CHERRY,
                rSymbol:SymbolName.BUDOU
            },
            {
                lSymbol:SymbolName.REPLAY, 
                cSymbol:SymbolName.BELL,
                rSymbol:SymbolName.BUDOU
            },
            {
                lSymbol:SymbolName.BAR, 
                cSymbol:SymbolName.CHERRY,
                rSymbol:SymbolName.BUDOU
            },
            {
                lSymbol:SymbolName.BAR, 
                cSymbol:SymbolName.BELL,
                rSymbol:SymbolName.BUDOU
            },
        ]
    },
    {
        name:RollName.CENTER_CHERRY,
        symbolData:[
            {
                lSymbol:SymbolName.CHERRY, 
                cSymbol:SymbolName.CHERRY,
                rSymbol:SymbolName.CHERRY
            },
            {
                lSymbol:SymbolName.CHERRY, 
                cSymbol:SymbolName.CHERRY,
                rSymbol:SymbolName.BAR
            },
            {
                lSymbol:SymbolName.CHERRY, 
                cSymbol:SymbolName.BELL,
                rSymbol:SymbolName.BELL
            },
            {
                lSymbol:SymbolName.CHERRY, 
                cSymbol:SymbolName.BAR,
                rSymbol:SymbolName.BUDOU
            },

            {
                lSymbol:SymbolName.BELL, 
                cSymbol:SymbolName.BELL,
                rSymbol:SymbolName.BELL
            },
            {
                lSymbol:SymbolName.BELL2, 
                cSymbol:SymbolName.BELL,
                rSymbol:SymbolName.BELL
            },

            {
                lSymbol:SymbolName.BELL, 
                cSymbol:SymbolName.CHERRY,
                rSymbol:SymbolName.BELL
            },
            {
                lSymbol:SymbolName.BELL2, 
                cSymbol:SymbolName.CHERRY,
                rSymbol:SymbolName.BELL
            },
        ]
    },
    {
        name:RollName.COMMON_BUDOU,
        symbolData:[
            {
                lSymbol:SymbolName.BUDOU, 
                cSymbol:SymbolName.BUDOU,
                rSymbol:SymbolName.BUDOU
            },
        ]
    },
    {
        name:RollName.REPLAY,
        symbolData:[
            {
                lSymbol:SymbolName.BUDOU, 
                cSymbol:SymbolName.PIERO,
                rSymbol:SymbolName.BELL
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
        SymbolName.BELL2,
        SymbolName.RED_7,
        SymbolName.PIERO,
        SymbolName.BUDOU,
        SymbolName.REPLAY,
        SymbolName.CHERRY,
        SymbolName.BAR,
        SymbolName.BELL,
        SymbolName.BUDOU,
        SymbolName.REPLAY,
        SymbolName.BELL2,
        SymbolName.RED_7,
        SymbolName.PIERO,
        SymbolName.BUDOU,
        SymbolName.REPLAY,
        SymbolName.CHERRY,
        SymbolName.BAR,
        SymbolName.PIERO2,
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