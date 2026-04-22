
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
        
import { DebugInterface } from "./DebugInterface.js";

export class NoDebug
            extends Object
         implements DebugInterface {
        

    private SINGLETON: DebugInterface = new NoDebug();
        
        

    public static getInstance(): DebugInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    public start(){
}


    public stop(){
}


    public getMaxTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 10000;
    
}


    public getStartTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

