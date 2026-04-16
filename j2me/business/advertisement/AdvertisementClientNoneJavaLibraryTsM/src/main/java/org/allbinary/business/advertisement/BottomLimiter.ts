
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
        



import { GameAdState } from "../../../../org/allbinary/game/GameAdState.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    

import { GameAdStateFactory } from "./GameAdStateFactory.js";

export class BottomLimiter
            extends Object
         {
        

    private static readonly instance: BottomLimiter = new BottomLimiter();
        
        

    public static getInstance(): BottomLimiter{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private bottom: number= 0

    private deltaY: number= 0

    private lower: number= 0

    private higher: number= 0
private constructor (){

            super();
            }


    public init(lower: number, higher: number){
var lower = lower
var higher = higher
this.lower= lower;
    
this.higher= higher;
    
}


    public update(){

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

    var gameAdState: GameAdState = GameAdStateFactory.getInstance()!.getCurrentInstance()!;
        
        
;
    

                        if(gameAdState!.isShowingAt())
                        
                                    {
                                    deltaY= higher;
    

                                    }
                                
                        else {
                            deltaY= lower;
    

                        }
                            
bottom= displayInfo!.getLastHeight() -deltaY;
    
}


    public getDeltaY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return deltaY;
    
}


    public getBottom(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bottom;
    
}


}
                
            

