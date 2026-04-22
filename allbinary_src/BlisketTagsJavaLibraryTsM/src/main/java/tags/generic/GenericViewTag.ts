
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
        



import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { InputOutputTypeData } from "../../org/allbinary/logic/io/InputOutputTypeData.js";

    
import { TransformTag } from "../../tags/TransformTag.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GenericViewTag extends TransformTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private output: string

    private file: string
public constructor (){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


    public setOutput(value: string){
var value = value
this.output= value;
    
this.getPropertiesHashMap()!.put(InputOutputTypeData.getInstance()!.NAME, this.output);
    
}


    public setFile(value: string){
var value = value
this.file= value;
    
this.getPropertiesHashMap()!.put(InputOutputTypeData.getInstance()!.FILE, this.file);
    
}


}
                
            

