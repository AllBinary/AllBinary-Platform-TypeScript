
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
        



import { NullRunnable } from "../../../../org/allbinary/thread/NullRunnable.js";

    
import { Display } from "../../../../org/eclipse/swt/widgets/Display.js";

    

export class SWTProcessor
            extends Object
         {
        

    private static readonly instance: SWTProcessor = new SWTProcessor();
        
        

    public static getInstance(): SWTProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

protected constructor (){

            super();
            }


    public runnable: Runnable = NullRunnable.getInstance()!;
        
        

    public process(display: Display){
    //var display = display
display.sleep()
}


}
                
            

