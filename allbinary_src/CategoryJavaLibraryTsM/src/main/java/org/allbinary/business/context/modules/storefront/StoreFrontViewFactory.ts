
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
        



import { StoreFrontsEntity } from "../../../../../../org/allbinary/data/tables/context/module/storefronts/StoreFrontsEntity.js";

    
import { StoreFrontsEntityFactory } from "../../../../../../org/allbinary/data/tables/context/module/storefronts/StoreFrontsEntityFactory.js";

    
import { DomNodeInterface } from "../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class StoreFrontViewFactory
            extends Object
         {
        

    public static getInstance(storeName: string): DomNodeInterface{
var storeName = storeName

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        


        try {
            
    var storeFronts: StoreFrontsEntity = StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StoreFrontView(storeFronts!.getStoreFrontInterface(storeName)) as DomNodeInterface;
    
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.FACTORYERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, "StoreFrontFactory", commonStrings!.GET_INSTANCE, e)

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
                
            

