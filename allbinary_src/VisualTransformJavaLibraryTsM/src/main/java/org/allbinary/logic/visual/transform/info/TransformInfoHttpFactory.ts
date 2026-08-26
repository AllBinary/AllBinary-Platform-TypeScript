
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
        
//not game specific package import { HashMap } from '../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { StoreFrontFactory } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
//not game specific package import { StoreFrontInterface } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { WeblisketSession } from '../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
      const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoHttpContext } from './TransformInfoHttpContext.js';
import { TransformInfoInterface } from './TransformInfoInterface.js';
import { TransformInfoHttpStore } from './TransformInfoHttpStore.js';

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
                
            

