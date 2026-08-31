
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

        


            import { Exception } from '../java/lang/Exception.js';
        
            import { Integer } from '../java/lang/Integer.js';
        
import { HashMap } from '../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { PageContext } from '../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { TagHelper } from '../admin/taghelpers/TagHelper.js';
      //not GWT import const TagHelper = globalThis.admin.taghelpers.TagHelper;

      
//not plain js import { LogUtil } from '../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { StoreTagWorkFlowFactory } from '../org/allbinary/logic/control/workflow/StoreTagWorkFlowFactory.js';
      //not GWT import const StoreTagWorkFlowFactory = globalThis.org.allbinary.logic.control.workflow.StoreTagWorkFlowFactory;

      
import { StoreWorkFlowInterface } from '../org/allbinary/logic/control/workflow/StoreWorkFlowInterface.js';
      //not GWT import const StoreWorkFlowInterface = globalThis.org.allbinary.logic.control.workflow.StoreWorkFlowInterface;

      
import { AbeClientInformationInterface } from '../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { ServiceClientInformationInterfaceFactory } from '../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
      //not GWT import const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StoreTagWorkFlowHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;

    private storeWorkFlowInterface: StoreWorkFlowInterface;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF("Properties: " +hashMap!.toString(), this, "StoreTagWorkFlowHelper()");
    

                                    }
                                
this.storeWorkFlowInterface= StoreTagWorkFlowFactory.getInstance()!.getInstance(this.abeClientInformation, hashMap, pageContext);
    
}


                //@Throws(Exception.constructor)
            
    public process(): Integer{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF("Process", this, this.commonStrings!.PROCESS);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeWorkFlowInterface!.process();;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to process workflow: ";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



