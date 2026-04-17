
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
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GameConfigurationCentral } from "./GameConfigurationCentral.js";

export class GameSpeed
            extends Object
         {
        

    private static readonly instance: GameSpeed = new GameSpeed();
        
        

    public static getInstance(): GameSpeed{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public getSpeed(): number{

    var speedGameConfiguration: GameConfiguration = GameConfigurationCentral.getInstance()!.SPEED;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (speedGameConfiguration!.getMaxValue()!.toInt() -speedGameConfiguration!.getValue()!.toInt() +1);
    
}


    public getDelay(): number{

    var speedGameConfiguration: GameConfiguration = GameConfigurationCentral.getInstance()!.SPEED;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 19 *(speedGameConfiguration!.getMaxValue()!.toInt() -speedGameConfiguration!.getValue()!.toInt());
    
}


}
                
            

