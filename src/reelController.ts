import { log } from "console";
import { ReelPosition, RollData, RollName, RollSymbolData, SYMBOL_HEIGHT, SYMBOL_LIST, SymbolName } from "./constant";
import Reel from "./reel";

export class ReelController {
    private reels: Reel[] = [];
    private bitaStopY: number[] = [];
    private bitaStopIndex: number[] = [];
    private rolName: RollName = RollName.REACH_BONUS_SYMBOL_CENTER;
    private stoppableSymbolsData: RollData;

    constructor(left: Reel, center: Reel, right: Reel) {
        this.reels.push(left);
        this.reels.push(center);
        this.reels.push(right);
        this.stoppableSymbolsData = this.cloneRollData(RollData[this.rolName]);
    }

    private cloneRollData(src: RollData): RollData {
        return {
            name: src.name,
            symbolData: src.symbolData.map((s) => ({
                lSymbol: s.lSymbol,
                cSymbol: s.cSymbol,
                rSymbol: s.rSymbol,
            })),
        };
    }

    public spin(): boolean {
        if (this.reels[ReelPosition.LEFT].getIsSpin() ||
            this.reels[ReelPosition.CENTER].getIsSpin() ||
            this.reels[ReelPosition.RIGHT].getIsSpin() ||
            this.reels[ReelPosition.LEFT].getIsSlip() ||
            this.reels[ReelPosition.CENTER].getIsSlip() ||
            this.reels[ReelPosition.RIGHT].getIsSlip()) {
            return false;
        }
        this.reels[ReelPosition.LEFT].spinStart();
        this.reels[ReelPosition.CENTER].spinStart();
        this.reels[ReelPosition.RIGHT].spinStart();
        return true;
    }
    public setRollName(flagName:RollName){
        this.rolName = flagName;
        this.stoppableSymbolsData = this.cloneRollData(RollData[this.rolName]);
        console.log("start", this.stoppableSymbolsData);
    }

    public stop(position: ReelPosition): boolean {
        if (!this.reels[position].getIsSpin() || this.reels[position].getIsSlip()) {
            return false;
        }
        this.reels[position].spinStop();
        this.bitaStopY[position] = Math.floor((this.reels[position].reelY + SYMBOL_HEIGHT) / (SYMBOL_HEIGHT)) * SYMBOL_HEIGHT;
        if (this.bitaStopY[position] >= SYMBOL_HEIGHT * 20) {
            this.bitaStopY[position] -= SYMBOL_HEIGHT * 20;
        }

        // 中段なので-1
        this.bitaStopIndex[position] = (this.bitaStopY[position] / SYMBOL_HEIGHT) - 1;
        const kouho: SymbolName[] = [];

        // 中段、上段、枠上、枠上２コマ、枠上３コマ
        for (let i = 0; i < 5; i++) {
            let serchIndex = SYMBOL_LIST[position].length - this.bitaStopIndex[position] - i;
            serchIndex %= 20;
            if (serchIndex < 0) {
                serchIndex += 20;
            }
            kouho.push(SYMBOL_LIST[position][serchIndex])
        }
        console.log(this.stoppableSymbolsData, kouho);
        console.log("-----");

        const removeSymbols: RollSymbolData[] = [];
        let resultSymbol: SymbolName | null = null;
        let resultSuberikoma: number = 0;
        let isSkip = false;
        for (let i = 0; i < kouho.length; i++) {
            for (let j = 0; j < this.stoppableSymbolsData.symbolData.length; j++) {
                const symbols: SymbolName[] = [
                    this.stoppableSymbolsData.symbolData[j].lSymbol,
                    this.stoppableSymbolsData.symbolData[j].cSymbol,
                    this.stoppableSymbolsData.symbolData[j].rSymbol
                ]
                if (kouho[i] == symbols[position]) {
                    resultSymbol = kouho[i];
                    isSkip = true;
                    resultSuberikoma = i;
                    break;
                }
            }
            if (isSkip) {
                break;
            }
        }
        console.log(resultSymbol, "suberikoma=", resultSuberikoma);
        for (let j = 0; j < this.stoppableSymbolsData.symbolData.length; j++) {
            const symbols: SymbolName[] = [
                this.stoppableSymbolsData.symbolData[j].lSymbol,
                this.stoppableSymbolsData.symbolData[j].cSymbol,
                this.stoppableSymbolsData.symbolData[j].rSymbol
            ]
            if (symbols[position] != resultSymbol) {
                removeSymbols.push(this.stoppableSymbolsData.symbolData[j]);
            }
        }
        // removeSymbols に一致する要素を stoppableSymbolsData.symbolData から削除
        this.stoppableSymbolsData.symbolData = this.stoppableSymbolsData.symbolData.filter((sd) => {
            return !removeSymbols.some((rm) =>
                rm.lSymbol === sd.lSymbol &&
                rm.cSymbol === sd.cSymbol &&
                rm.rSymbol === sd.rSymbol
            );
        });
        console.log("残っている候補:", this.stoppableSymbolsData.symbolData);

        const prev = this.bitaStopY[position];
        console.log("prev", prev);
        this.bitaStopY[position] += (111 * resultSuberikoma);
        this.bitaStopY[position] %= (SYMBOL_HEIGHT * 20);
        console.log("after", this.bitaStopY[position]);
        console.log("diff", this.bitaStopY[position] - prev)


        //stoppableSymbolsData.symbolData




        this.reels[position].setStopToY(this.bitaStopY[position])
        return true;
    }

    update(time: number, delta: number): void {
        this.reels[ReelPosition.LEFT].update(time, delta);
        this.reels[ReelPosition.CENTER].update(time, delta);
        this.reels[ReelPosition.RIGHT].update(time, delta);
    }
}