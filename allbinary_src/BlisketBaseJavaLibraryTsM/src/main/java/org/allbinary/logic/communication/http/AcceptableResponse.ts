
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
        



import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class AcceptableResponse
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
protected constructor (candidate: string, tagName: string, index: number){

            super();
            var candidate = candidate
var tagName = tagName
var index = index
this.logUtil!.putF(tagName, this, this.commonStrings!.CONSTRUCTOR);
    

    var acceptableResponseUtil: AcceptableResponseUtil = AcceptableResponseUtil.getInstance()!;
        
        
;
    
acceptableResponseUtil!.candidateVector!.add(index, candidate);
    
acceptableResponseUtil!.tagNameVector!.add(index, tagName);
    
}


}
                
            

