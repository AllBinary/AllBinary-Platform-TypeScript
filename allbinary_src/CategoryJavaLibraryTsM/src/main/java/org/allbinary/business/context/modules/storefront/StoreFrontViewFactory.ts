
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

      
import { DomNodeInterface } from '../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreFrontView } from './StoreFrontView.js';

export class StoreFrontViewFactory
            extends Object
         {
        

    public static getInstance(storeName: string): DomNodeInterface{

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

        try {
            
    var storeFronts: StoreFrontsEntity = StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreFrontView(storeFronts!.getStoreFrontInterface(storeName)) as DomNodeInterface;
    

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


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


}



