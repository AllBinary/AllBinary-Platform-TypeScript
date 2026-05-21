
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
import { Display } from '../../../../org/eclipse/swt/widgets/Display.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SWTProcessor } from './SWTProcessor.js';

export class SWTRunnableProcessor extends SWTProcessor {
        

    private static readonly instanceR: SWTRunnableProcessor = new SWTRunnableProcessor();

    public static getInstance(): SWTRunnableProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SWTRunnableProcessor.instanceR;
    
}


    public process(display: Display){
}


}
                
            

