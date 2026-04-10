
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
        



import { GamePersistanceStrings } from "../../../../org/allbinary/game/configuration/persistance/GamePersistanceStrings.js";

    
import { InputToGameKeyMapping } from "../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js";

    
import { PersistentInputMapping } from "../../../../org/allbinary/game/input/mapping/PersistentInputMapping.js";

    

export class NormalJ2MEDefaultGameInputMapping extends PersistentInputMapping {
        
public constructor ()                        

                            : super(GamePersistanceStrings.getInstance()!.DEFAULT_INPUT_MAPPING_RECORD_ID){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    

    var inputToGameKeyMapping: InputToGameKeyMapping = this.getInputMapping()!;
        
        


    var gameKeyFactory: GameKeyFactory = GameKeyFactory.getInstance()!;
        
        

add(gameKeyFactory!.UP, gameKeyFactory!.KEY_NUM2)
add(gameKeyFactory!.LEFT, gameKeyFactory!.KEY_NUM4)
add(gameKeyFactory!.RIGHT, gameKeyFactory!.KEY_NUM6)
add(gameKeyFactory!.DOWN, gameKeyFactory!.KEY_NUM8)
add(gameKeyFactory!.KEY_NUM1, gameKeyFactory!.GAME_A)
add(gameKeyFactory!.KEY_NUM3, gameKeyFactory!.GAME_B)
add(gameKeyFactory!.KEY_NUM7, gameKeyFactory!.GAME_C)
add(gameKeyFactory!.KEY_NUM9, gameKeyFactory!.GAME_D)
add(gameKeyFactory!.LEVEL_DOWN, gameKeyFactory!.LEVEL_DOWN)
add(gameKeyFactory!.LEVEL_UP, gameKeyFactory!.LEVEL_UP)
add(gameKeyFactory!.UP, gameKeyFactory!.UP)
add(gameKeyFactory!.DOWN, gameKeyFactory!.DOWN)
add(gameKeyFactory!.LEFT, gameKeyFactory!.LEFT)
add(gameKeyFactory!.RIGHT, gameKeyFactory!.RIGHT)
add(gameKeyFactory!.KEY_POUND, gameKeyFactory!.KEY_POUND)
add(gameKeyFactory!.KEY_STAR, gameKeyFactory!.KEY_STAR)
add(gameKeyFactory!.KEY_NUM1, gameKeyFactory!.KEY_NUM1)
add(gameKeyFactory!.KEY_NUM3, gameKeyFactory!.KEY_NUM3)
add(gameKeyFactory!.KEY_NUM5, gameKeyFactory!.KEY_NUM5)
add(gameKeyFactory!.KEY_NUM7, gameKeyFactory!.KEY_NUM7)
add(gameKeyFactory!.KEY_NUM9, gameKeyFactory!.KEY_NUM9)
add(gameKeyFactory!.KEY_NUM0, gameKeyFactory!.KEY_NUM0)
add(gameKeyFactory!.KEY_NUM1, gameKeyFactory!.FIRE)
}


}
                
            

