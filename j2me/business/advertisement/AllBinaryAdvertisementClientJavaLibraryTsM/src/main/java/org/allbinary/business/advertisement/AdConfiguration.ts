
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
                *  
                *  By agreeing to this license you and any business entity you represent are
                *  legally bound to the AllBinary Open License Version 1 legal agreement.
                *  
                *  You may obtain the AllBinary Open License Version 1 legal agreement from
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
                *  
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../java/lang/Object.js';
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Direction } from '../../../../org/allbinary/direction/Direction.js';
      const Direction = globalThis.org.allbinary.direction.Direction;

      
//not game specific package import { GameState } from '../../../../org/allbinary/game/state/GameState.js';
      const GameState = globalThis.org.allbinary.game.state.GameState;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AdConfiguration
            extends Object
         {
        

    public readonly INNERACTIVE: string;

    public readonly LEADBOLT: string;

    public readonly ADMOB: string;

public constructor (advertIdArray: any[]){

            super();
        this.INNERACTIVE= advertIdArray[0]! as string;
    
this.ADMOB= advertIdArray[1]! as string;
    
this.LEADBOLT= advertIdArray[2]! as string;
    
}


    public getValidAdSpots(): Direction[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return [];
    
}


    public process(gameState: GameState){
}


    public processDemo(state: number){
}


    public setShowAds(){
}


    public setToggleAds(showAds: boolean){
}


    public isShowAds(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

