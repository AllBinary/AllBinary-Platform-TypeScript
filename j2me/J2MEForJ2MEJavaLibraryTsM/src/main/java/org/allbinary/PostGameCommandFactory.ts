
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
        



import { MultiPlayerGameFeatureFactory } from "../../org/allbinary/game/configuration/feature/MultiPlayerGameFeatureFactory.js";

    
import { MyCanvas } from "../../org/allbinary/graphics/displayable/MyCanvas.js";

    

export class PostGameCommandFactory
            extends Object
         {
        

    private static readonly instance: PostGameCommandFactory = new PostGameCommandFactory();
        
        

    public static getInstance(): PostGameCommandFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public addCommands(canvas: MyCanvas){
var canvas = canvas
MultiPlayerGameFeatureFactory.getInstance()!.addCommands(canvas)
}


}
                
            

