
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
        



import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class PermissionItemsEntityFactory
            extends Object
         {
        

    private static readonly instance: PermissionItemsEntityFactory = new PermissionItemsEntityFactory();
        
        

    public static getInstance(): PermissionItemsEntityFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public static getPermissionItemsEntityInstance(): PermissionItemsEntity{

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return org.allbinary.data.tables.user.commerce.inventory.item.permissions.PermissionItemsEntity();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, "PermissionItemsEntityFactory", commonStrings!.GET_INSTANCE, e);
    

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
                
            

