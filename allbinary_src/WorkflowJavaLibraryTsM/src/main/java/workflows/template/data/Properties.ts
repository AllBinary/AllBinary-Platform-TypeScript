
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
        



            import HashMap from "@ohos.util.HashMap";
        

//import { HashMap } from "../../../java/util/HashMap.js";

    
import { TagSupport } from "../../../javax/servlet/jsp/tagext/TagSupport.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class Properties
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private propertiesHashMap: HashMap<any, any>
public constructor (){

            super();
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("Start/Tag", this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.propertiesHashMap= new HashMap<any, any>();
    
}


    getPropertiesHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.propertiesHashMap;
    
}


    public doEndTag(): number{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("Tag Ended", this, "doEndTag");
    

                                    }
                                
this.propertiesHashMap= new HashMap<any, any>();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.EVAL_PAGE;
    
}


}
                
            

