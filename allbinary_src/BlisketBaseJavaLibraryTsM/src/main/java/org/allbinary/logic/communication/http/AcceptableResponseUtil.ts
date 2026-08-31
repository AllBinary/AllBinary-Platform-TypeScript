
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { Vector } from '../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
      //not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AcceptableResponseFactory } from './AcceptableResponseFactory.js';
//not GWT import const AcceptableResponseFactory = globalThis.org.allbinary.logic.communication.http.AcceptableResponseFactory;

                
export class AcceptableResponseUtil
            extends Object
         {
        

    private static readonly instance: AcceptableResponseUtil = new AcceptableResponseUtil();

    public static getInstance(): AcceptableResponseUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AcceptableResponseUtil.instance;
    
}


                private static initResult: number = AcceptableResponseUtil.init();
                private static init(): number { 
                    
TsUtil.getInstance()!.hashCode(AcceptableResponseFactory.getInstance()!.HTML);
    


                    return 0;
                }
            
    public readonly candidateVector: Vector = new Vector();

    public readonly tagNameVector: Vector = new Vector();

    public get(index: number): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.candidateVector!.get(index) as string;
    
}


    public getTagName(index: number): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tagNameVector!.get(index) as string;
    
}


    public size(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.candidateVector!.length;;
    
}


}



