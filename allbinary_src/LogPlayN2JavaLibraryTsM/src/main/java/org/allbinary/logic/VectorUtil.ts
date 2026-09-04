
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2026 AllBinary 
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

        


            import { Object } from '../../../java/lang/Object.js';
        
import { ABVector } from '../../../org/allbinary/util/ABVector.js';
      //not GWT import const ABVector = globalThis.org.allbinary.util.ABVector;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class VectorUtil
            extends Object
         {
        

    private static readonly instance: VectorUtil = new VectorUtil();

    public static getInstance(): VectorUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public getSize(vector: any = {}): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (vector as ABVector).size();;
    
}


    public elementAt(vector: any = {}, index: number): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (vector as ABVector).elementAt(index);;
    
}


}



