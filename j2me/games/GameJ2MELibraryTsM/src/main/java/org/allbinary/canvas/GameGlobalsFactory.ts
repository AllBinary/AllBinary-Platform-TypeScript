
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



            import { Integer } from "../../../java/lang/Integer.js";
        
import { GPoint } from "../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../org/allbinary/graphics/PointFactory.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameGlobalsFactory
            extends Object
         {
        

    private static readonly instance: GameGlobalsFactory = new GameGlobalsFactory();
        
        

    public static getInstance(): GameGlobalsFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public newCanvas: boolean = true;
        
        

    public newDisplaybleTime: number = Integer.MIN_VALUE.toLong();
        
        

    public point: GPoint = PointFactory.getInstance()!.ZERO_ZERO;
        
        

}
                
            

