
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

    

export class LaptopDefaultGameInputMapping extends PersistentInputMapping {
        
public constructor ()                        

                            : super(GamePersistanceStrings.getInstance()!.DEFAULT_INPUT_MAPPING_RECORD_ID){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    

    var inputToGameKeyMapping: InputToGameKeyMapping = this.getInputMapping()!;
        
        


    var pcKeyFactory: PCKeyFactory = PCKeyFactory.getInstance()!;
        
        


    var gameKeyFactory: GameKeyFactory = GameKeyFactory.getInstance()!;
        
        

add(gameKeyFactory!.FIRE, pcKeyFactory!.ENTER)
add(gameKeyFactory!.KEY_NUM1, pcKeyFactory!.FOUR)
add(gameKeyFactory!.KEY_NUM1, pcKeyFactory!._P)
add(gameKeyFactory!.KEY_NUM1, pcKeyFactory!.p)
add(gameKeyFactory!.UP, pcKeyFactory!.DPAD_UP)
add(gameKeyFactory!.DOWN, pcKeyFactory!.DPAD_DOWN)
add(gameKeyFactory!.LEFT, pcKeyFactory!.DPAD_LEFT)
add(gameKeyFactory!.RIGHT, pcKeyFactory!.DPAD_RIGHT)
add(gameKeyFactory!.KEY_NUM1, pcKeyFactory!.FIVE)
add(gameKeyFactory!.KEY_NUM7, pcKeyFactory!._Y)
add(gameKeyFactory!.KEY_NUM9, pcKeyFactory!._I)
add(gameKeyFactory!.UP, pcKeyFactory!._U)
add(gameKeyFactory!.LEFT, pcKeyFactory!._H)
add(gameKeyFactory!.RIGHT, pcKeyFactory!._J)
add(gameKeyFactory!.DOWN, pcKeyFactory!._N)
add(gameKeyFactory!.KEY_NUM5, pcKeyFactory!._M)
add(gameKeyFactory!.KEY_NUM7, pcKeyFactory!.y)
add(gameKeyFactory!.KEY_NUM9, pcKeyFactory!.i)
add(gameKeyFactory!.UP, pcKeyFactory!.u)
add(gameKeyFactory!.LEFT, pcKeyFactory!.h)
add(gameKeyFactory!.RIGHT, pcKeyFactory!.j)
add(gameKeyFactory!.DOWN, pcKeyFactory!.n)
add(gameKeyFactory!.KEY_NUM5, pcKeyFactory!.m)
add(gameKeyFactory!.KEY_NUM7, pcKeyFactory!._Q)
add(gameKeyFactory!.KEY_NUM9, pcKeyFactory!._E)
add(gameKeyFactory!.UP, pcKeyFactory!._W)
add(gameKeyFactory!.LEFT, pcKeyFactory!._A)
add(gameKeyFactory!.RIGHT, pcKeyFactory!._D)
add(gameKeyFactory!.DOWN, pcKeyFactory!._S)
add(gameKeyFactory!.KEY_NUM5, pcKeyFactory!._X)
add(gameKeyFactory!.KEY_NUM7, pcKeyFactory!.q)
add(gameKeyFactory!.KEY_NUM9, pcKeyFactory!.e)
add(gameKeyFactory!.UP, pcKeyFactory!.w)
add(gameKeyFactory!.LEFT, pcKeyFactory!.a)
add(gameKeyFactory!.RIGHT, pcKeyFactory!.d)
add(gameKeyFactory!.DOWN, pcKeyFactory!.s)
add(gameKeyFactory!.KEY_NUM5, pcKeyFactory!.x)
add(gameKeyFactory!.KEY_NUM3, pcKeyFactory!.THREE)
add(gameKeyFactory!.KEY_NUM0, pcKeyFactory!.ZERO)
add(gameKeyFactory!.KEY_NUM0, pcKeyFactory!.ONE)
add(gameKeyFactory!.KEY_NUM0, pcKeyFactory!.SPACE)
add(gameKeyFactory!.KEY_POUND, pcKeyFactory!.DEL)
add(gameKeyFactory!.KEY_POUND, pcKeyFactory!.TWO)
add(gameKeyFactory!.KEY_STAR, pcKeyFactory!.ESCAPE)
add(gameKeyFactory!.KEY_STAR, pcKeyFactory!.STAR)
add(gameKeyFactory!.LEVEL_DOWN, pcKeyFactory!.COMMA)
add(gameKeyFactory!.LEVEL_UP, pcKeyFactory!.PERIOD)
}


}
                
            

