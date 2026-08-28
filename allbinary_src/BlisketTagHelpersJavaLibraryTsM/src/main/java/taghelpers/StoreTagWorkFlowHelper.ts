
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
        
//not game specific package import { HashMap } from '../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { PageContext } from '../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { TagHelper } from '../admin/taghelpers/TagHelper.js';
      const TagHelper = globalThis.admin.taghelpers.TagHelper;

      
//not game specific package import { LogUtil } from '../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StoreTagWorkFlowFactory } from '../org/allbinary/logic/control/workflow/StoreTagWorkFlowFactory.js';
      const StoreTagWorkFlowFactory = globalThis.org.allbinary.logic.control.workflow.StoreTagWorkFlowFactory;

      
//not game specific package import { StoreWorkFlowInterface } from '../org/allbinary/logic/control/workflow/StoreWorkFlowInterface.js';
      const StoreWorkFlowInterface = globalThis.org.allbinary.logic.control.workflow.StoreWorkFlowInterface;

      
//not game specific package import { AbeClientInformationInterface } from '../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { ServiceClientInformationInterfaceFactory } from '../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
      const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
















                                        
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



