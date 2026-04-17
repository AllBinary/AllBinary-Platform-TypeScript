
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { PageContext } from "../../../../../../javax/servlet/jsp/PageContext.js";

    
import { StoreFrontFactory } from "../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { WeblisketSession } from "../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringValidationUtil } from "../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class TransformInfoHttpFactory
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getInstance(propertiesHashMap: HashMap<any, any>, pageContext: PageContext): TransformInfoInterface{
var propertiesHashMap = propertiesHashMap
var pageContext = pageContext

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            
    var weblisketSession: WeblisketSession = new WeblisketSession(propertiesHashMap, pageContext);
        
        
;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(weblisketSession!.getStoreName());

                        )
                        
                                    {
                                    
    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(weblisketSession!.getStoreName())!;
        
        
;
    

                        if(storeFrontInterface != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TransformInfoHttpStore(storeFrontInterface, propertiesHashMap, pageContext) as TransformInfoInterface;
    

                                    }
                                
                        else {
                            


                            throw new Error("No StoreFront with: " +weblisketSession!.getStoreName())

                        }
                            

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TransformInfoHttpContext(propertiesHashMap, pageContext) as TransformInfoInterface;
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, "TransformInfoFactory", commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e
}

}

private constructor (){

            super();
            }


}
                
            

