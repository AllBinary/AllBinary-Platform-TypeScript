
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

    
import { PageContext } from "../javax/servlet/jsp/PageContext.js";

    
import { TagHelper } from "../admin/taghelpers/TagHelper.js";

    
import { LogUtil } from "../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StoreTagWorkFlowFactory } from "../org/allbinary/logic/control/workflow/StoreTagWorkFlowFactory.js";

    
import { StoreWorkFlowInterface } from "../org/allbinary/logic/control/workflow/StoreWorkFlowInterface.js";

    
import { AbeClientInformationInterface } from "../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ServiceClientInformationInterfaceFactory } from "../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    

export class StoreTagWorkFlowHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        

    private storeWorkFlowInterface: StoreWorkFlowInterface
public constructor (hashMap: HashMap<Any, Any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    logUtil!.put("Properties: " +hashMap!.toString(), this, "StoreTagWorkFlowHelper()")

                                    }
                                
this.storeWorkFlowInterface= StoreTagWorkFlowFactory.getInstance()!.getInstance(this.abeClientInformation, hashMap, pageContext)
}


                //@Throws(Error::class)
            
    public process(): Integer{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    logUtil!.put("Process", this, commonStrings!.PROCESS)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeWorkFlowInterface!.process();
    
} catch(e: Exception)
            {

    var error: string = "Failed to process workflow: ";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "view()", e)

                                    }
                                



                            throw e
}

}


}
                
            

