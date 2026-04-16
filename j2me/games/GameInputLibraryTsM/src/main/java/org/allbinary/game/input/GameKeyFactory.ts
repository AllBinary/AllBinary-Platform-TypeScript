
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
        



import { Canvas } from "../../../../javax/microedition/lcdui/Canvas.js";

    
import { CommonPhoneStrings } from "../../../../org/allbinary/string/CommonPhoneStrings.js";

    

import { InputFactory } from "./InputFactory.js";

export class GameKeyFactory
            extends Object
         {
        

    private static readonly instance: GameKeyFactory = new GameKeyFactory();
        
        

    public static getInstance(): GameKeyFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly NONE: GameKey = new GameKey(InputFactory.getInstance()!.MAX -1, "None");
        
        

    public readonly UP: GameKey = new GameKey(Canvas.UP, CommonPhoneStrings.getInstance()!.UP);
        
        

    public readonly DOWN: GameKey = new GameKey(Canvas.DOWN, CommonPhoneStrings.getInstance()!.DOWN);
        
        

    public readonly LEFT: GameKey = new GameKey(Canvas.LEFT, CommonPhoneStrings.getInstance()!.LEFT);
        
        

    public readonly RIGHT: GameKey = new GameKey(Canvas.RIGHT, CommonPhoneStrings.getInstance()!.RIGHT);
        
        

    public readonly KEY_POUND: GameKey = new GameKey(Canvas.KEY_POUND, "POUND");
        
        

    public readonly KEY_STAR: GameKey = new GameKey(Canvas.KEY_STAR, "STAR");
        
        

    public readonly KEY_NUM0: GameKey = new GameKey(Canvas.KEY_NUM0, CommonPhoneStrings.getInstance()!.ZERO);
        
        

    public readonly KEY_NUM1: GameKey = new GameKey(Canvas.KEY_NUM1, CommonPhoneStrings.getInstance()!.ONE);
        
        

    public readonly KEY_NUM2: GameKey = new GameKey(Canvas.KEY_NUM2, CommonPhoneStrings.getInstance()!.TWO);
        
        

    public readonly KEY_NUM3: GameKey = new GameKey(Canvas.KEY_NUM3, CommonPhoneStrings.getInstance()!.THREE);
        
        

    public readonly KEY_NUM4: GameKey = new GameKey(Canvas.KEY_NUM4, CommonPhoneStrings.getInstance()!.FOUR);
        
        

    public readonly KEY_NUM5: GameKey = new GameKey(Canvas.KEY_NUM5, CommonPhoneStrings.getInstance()!.FIVE);
        
        

    public readonly KEY_NUM6: GameKey = new GameKey(Canvas.KEY_NUM6, CommonPhoneStrings.getInstance()!.SIX);
        
        

    public readonly KEY_NUM7: GameKey = new GameKey(Canvas.KEY_NUM7, CommonPhoneStrings.getInstance()!.SEVEN);
        
        

    public readonly KEY_NUM8: GameKey = new GameKey(Canvas.KEY_NUM8, CommonPhoneStrings.getInstance()!.EIGHT);
        
        

    public readonly KEY_NUM9: GameKey = new GameKey(Canvas.KEY_NUM9, CommonPhoneStrings.getInstance()!.NINE);
        
        

    public readonly GAME_A: GameKey = new GameKey(Canvas.GAME_A, "Game A");
        
        

    public readonly GAME_B: GameKey = new GameKey(Canvas.GAME_B, "Game B");
        
        

    public readonly GAME_C: GameKey = new GameKey(Canvas.GAME_C, "Game C");
        
        

    public readonly GAME_D: GameKey = new GameKey(Canvas.GAME_D, "Game D");
        
        

    public readonly FIRE: GameKey = new GameKey(Canvas.FIRE, CommonPhoneStrings.getInstance()!.FIRE);
        
        

    public LEVEL_DOWN: GameKey = new GameKey(Canvas.KEY_NUM9 +1, "Cheat Level Up");
        
        

    public LEVEL_UP: GameKey = new GameKey(Canvas.KEY_NUM9 +2, "Cheat Level Down");
        
        

}
                
            

