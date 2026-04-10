
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
        



import { HashMap } from "../java/util/HashMap.js";

    
import { LogUtil } from "../org/allbinary/logic/communication/log/LogUtil.js";

    

export class PropertiesTag extends CommandTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private propertiesHashMap: HashMap<Any, Any>
public constructor (){

            super();
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR)

                                    }
                                
this.propertiesHashMap= HashMap<Any, Any>()
}


    getPropertiesHashMap(): HashMap<Any, Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.propertiesHashMap;
    
}


    public doEndTag(): number{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    logUtil!.put("Tag Ended", this, "doEndTag")

                                    }
                                
this.propertiesHashMap= HashMap<Any, Any>()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EVAL_PAGE;
    
}


}
                
            

