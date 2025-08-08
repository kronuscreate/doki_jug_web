import { SYMBOL_HEIGHT, SymbolName } from "./constant";
import Symbol from "./symbol";

class Reel extends Phaser.GameObjects.Container {
    private symbols:Symbol[]=[];
    private backLights:Phaser.GameObjects.Image[]=[];

    constructor(scene: Phaser.Scene,symbolNames:SymbolName[]) {
        super(scene);
        this.create(symbolNames);
    }

    private create(symbolNames:SymbolName[]){
        for(let i=0;i<3;i++){
            const back_light_off=new Phaser.GameObjects.Image(this.scene, 0, 0, "back_light_off").setOrigin(0, 0);
            back_light_off.y=SYMBOL_HEIGHT*i;
            this.add(back_light_off);
            const back_light_on=new Phaser.GameObjects.Image(this.scene, 0, 0, "back_light_on").setOrigin(0, 0);
            back_light_on.y=SYMBOL_HEIGHT*i;
            this.add(back_light_on);
            this.backLights.push(back_light_on);
        }

        for(let i=0;i<symbolNames.length;i++){
            const symbol = new Symbol(this.scene,symbolNames[i]);
            symbol.y=SYMBOL_HEIGHT*i;
            this.add(symbol);
            this.symbols.push(symbol);
        }
    }
}
export default Reel