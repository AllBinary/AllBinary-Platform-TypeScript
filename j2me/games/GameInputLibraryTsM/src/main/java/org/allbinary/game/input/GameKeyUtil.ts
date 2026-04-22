
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameKeyUtil
            extends Object
         {
        

    private static readonly instance: GameKeyUtil = new GameKeyUtil();
        
        

    public static getInstance(): GameKeyUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public isDirectionKey(key: number): boolean{
var key = key

                        if(key == Canvas.UP || key == Canvas.DOWN || key == Canvas.LEFT || key == Canvas.RIGHT)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


}
                
            

