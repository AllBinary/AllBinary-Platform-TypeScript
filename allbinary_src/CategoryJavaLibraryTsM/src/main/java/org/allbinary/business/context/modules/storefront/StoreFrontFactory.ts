
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
        
import { StoreFrontsEntity } from '../../../../../../org/allbinary/data/tables/context/module/storefronts/StoreFrontsEntity.js';
      //not GWT import const StoreFrontsEntity = globalThis.org.allbinary.data.tables.context.module.storefronts.StoreFrontsEntity;

      
import { StoreFrontsEntityFactory } from '../../../../../../org/allbinary/data/tables/context/module/storefronts/StoreFrontsEntityFactory.js';
      //not GWT import const StoreFrontsEntityFactory = globalThis.org.allbinary.data.tables.context.module.storefronts.StoreFrontsEntityFactory;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreFront } from './StoreFront.js';
//not GWT import const StoreFront = globalThis.org.allbinary.business.context.modules.storefront.StoreFront;

                
export class StoreFrontFactory
            extends Object
         {
        

    public static getInstance(storeName: string): StoreFront{

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

        try {
            
    var storeFronts: StoreFrontsEntity = StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return storeFronts!.getStoreFrontInterface(storeName);;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.FACTORYERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, "StoreFrontFactory", commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


private constructor (){

            super();
        }


}



