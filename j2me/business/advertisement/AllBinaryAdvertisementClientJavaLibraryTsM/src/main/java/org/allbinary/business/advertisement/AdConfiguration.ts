
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
        



import { Direction } from "../../../../org/allbinary/direction/Direction.js";

    
import { GameState } from "../../../../org/allbinary/game/state/GameState.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AdConfiguration
            extends Object
         {
        

    public readonly INNERACTIVE: string

    public readonly LEADBOLT: string

    public readonly ADMOB: string
public constructor (advertIdArray: any[]){

            super();
        var advertIdArray = advertIdArray
this.INNERACTIVE= advertIdArray[0]! as String;
    
this.ADMOB= advertIdArray[1]! as String;
    
this.LEADBOLT= advertIdArray[2]! as String;
    
}


    public getValidAdSpots(): Direction[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return [];
    
}


    public process(gameState: GameState){
var gameState = gameState
}


    public process(state: number){
var state = state
}


    public setShowAds(){
}


    public setShowAds(showAds: boolean){
var showAds = showAds
}


    public isShowAds(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

