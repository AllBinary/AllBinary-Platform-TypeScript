
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { StoreFrontFactory } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
//not GWT import const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
import { StoreFrontInterface } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { WeblisketSession } from '../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
//not GWT import const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoHttpContext } from './TransformInfoHttpContext.js';
//not GWT import - same folder const TransformInfoHttpContext = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpContext;

                import { TransformInfoInterface } from './TransformInfoInterface.js';
//not GWT import - same folder const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

                import { TransformInfoHttpStore } from './TransformInfoHttpStore.js';
//not GWT import - same folder const TransformInfoHttpStore = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpStore;

                
export class TransformInfoHttpFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(propertiesHashMap: HashMap<any, any>, pageContext: PageContext): TransformInfoInterface{

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

        try {
            
    var weblisketSession: WeblisketSession = new WeblisketSession(propertiesHashMap, pageContext);;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(weblisketSession!.getStoreName()))
                        
                                    {
                                    
    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(weblisketSession!.getStoreName())!;;
    

                        if(storeFrontInterface != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TransformInfoHttpStore(storeFrontInterface, propertiesHashMap, pageContext) as TransformInfoInterface;
    

                                    }
                                
                        else {
                            


                            throw new Exception("No StoreFront with: " +weblisketSession!.getStoreName());
                    

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
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, "TransformInfoFactory", commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    
}

}


private constructor (){

            super();
        }


}



