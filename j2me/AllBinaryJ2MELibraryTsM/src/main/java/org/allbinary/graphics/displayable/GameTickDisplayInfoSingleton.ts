
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
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { DisplayInfoSingleton } from "./DisplayInfoSingleton.js";

export class GameTickDisplayInfoSingleton
            extends Object
         {
        

    private static readonly instance: GameTickDisplayInfoSingleton = new GameTickDisplayInfoSingleton();
        
        

    public static getInstance(): GameTickDisplayInfoSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        

    private lastWidth: number = displayInfoSingleton!.getLastWidth()!;
        
        

    private lastHeight: number = displayInfoSingleton!.getLastHeight()!;
        
        

    private lastHalfWidth: number = displayInfoSingleton!.getLastHalfWidth()!;
        
        

    private lastHalfHeight: number = displayInfoSingleton!.getLastHalfHeight()!;
        
        

    public update(){
this.lastWidth= displayInfoSingleton!.getLastWidth();
    
this.lastHeight= displayInfoSingleton!.getLastHeight();
    
this.lastHalfWidth= displayInfoSingleton!.getLastHalfWidth();
    
this.lastHalfHeight= displayInfoSingleton!.getLastHalfHeight();
    
}


    public getLastWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.lastWidth;
    
}


    public getLastHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.lastHeight;
    
}


    public getLastHalfWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.lastHalfWidth;
    
}


    public getLastHalfHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.lastHalfHeight;
    
}


}
                
            

