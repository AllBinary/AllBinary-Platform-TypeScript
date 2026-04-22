
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
        
import { GameKeyFactory } from "./GameKeyFactory.js";

import { InputFactory } from "./InputFactory.js";

import { Input } from "./Input.js";

export class J2MEKeyFactory
            extends Object
         {
        

    private static readonly instance: J2MEKeyFactory = new J2MEKeyFactory();
        
        

    public static getInstance(): J2MEKeyFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
        }


    private readonly gameKeyFactory: GameKeyFactory = GameKeyFactory.getInstance()!;
        
        

    public init(){

    var gameKeyArray: GameKey[] = 
                                                        [
                                                            this.gameKeyFactory!.DOWN,this.gameKeyFactory!.FIRE,this.gameKeyFactory!.GAME_A,this.gameKeyFactory!.GAME_B,this.gameKeyFactory!.GAME_C,this.gameKeyFactory!.GAME_D,this.gameKeyFactory!.KEY_NUM0,this.gameKeyFactory!.KEY_NUM1,this.gameKeyFactory!.KEY_NUM2,this.gameKeyFactory!.KEY_NUM3,this.gameKeyFactory!.KEY_NUM4,this.gameKeyFactory!.KEY_NUM5,this.gameKeyFactory!.KEY_NUM6,this.gameKeyFactory!.KEY_NUM7,this.gameKeyFactory!.KEY_NUM8,this.gameKeyFactory!.KEY_NUM9,this.gameKeyFactory!.KEY_POUND,this.gameKeyFactory!.KEY_STAR,this.gameKeyFactory!.LEFT,this.gameKeyFactory!.LEVEL_DOWN,this.gameKeyFactory!.LEVEL_UP,this.gameKeyFactory!.NONE,this.gameKeyFactory!.RIGHT,this.gameKeyFactory!.UP
                                                        ];
        
        
;
    

    var inputFactory: InputFactory = InputFactory.getInstance()!;
        
        
;
    




                        for (
    var index: number = gameKeyArray!.length
                ;
        
        
--index >= 0; )
        {
inputFactory!.add(gameKeyArray[index]!.getId(), gameKeyArray[index]!);
    
}

}


    public isSubmission(input: Input): boolean{
var input = input

                        if(input == this.gameKeyFactory!.FIRE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isDelete(input: Input): boolean{
var input = input

                        if(input == this.gameKeyFactory!.GAME_D)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isBackSpace(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isUp(input: Input): boolean{
var input = input

                        if(input == this.gameKeyFactory!.UP)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isDown(input: Input): boolean{
var input = input

                        if(input == this.gameKeyFactory!.DOWN)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isLeft(input: Input): boolean{
var input = input

                        if(input == this.gameKeyFactory!.LEFT)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isRight(input: Input): boolean{
var input = input

                        if(input == this.gameKeyFactory!.RIGHT)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isEnter(input: Input): boolean{
var input = input

                        if(input == this.gameKeyFactory!.FIRE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

