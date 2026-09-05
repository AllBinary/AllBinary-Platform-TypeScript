
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
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AcceptableResponseUtil } from './AcceptableResponseUtil.js';
//not GWT import - same folder const AcceptableResponseUtil = globalThis.org.allbinary.logic.communication.http.AcceptableResponseUtil;

                
export class AcceptableResponse
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

protected constructor (candidate: string, tagName: string, index: number){

            super();
        this.logUtil!.putF(tagName, this, this.commonStrings!.CONSTRUCTOR);
    

    var acceptableResponseUtil: AcceptableResponseUtil = AcceptableResponseUtil.getInstance()!;;
    
acceptableResponseUtil!.candidateVector!.addAt(index, candidate);
    
acceptableResponseUtil!.tagNameVector!.addAt(index, tagName);
    
}


}



