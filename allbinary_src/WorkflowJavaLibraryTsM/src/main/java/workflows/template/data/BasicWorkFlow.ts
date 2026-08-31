
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
        



            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
            import { Integer } from '../../../java/lang/Integer.js';
        
import { HashMap } from '../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { PageContext } from '../../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { TagSupport } from '../../../javax/servlet/jsp/tagext/TagSupport.js';
      //not GWT import const TagSupport = globalThis.javax.servlet.jsp.tagext.TagSupport;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { ValidationComponentInterface } from '../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
      //not GWT import const ValidationComponentInterface = globalThis.org.allbinary.logic.control.validate.ValidationComponentInterface;

      
import { WorkFlowData } from '../../../org/allbinary/logic/control/workflow/WorkFlowData.js';
      //not GWT import const WorkFlowData = globalThis.org.allbinary.logic.control.workflow.WorkFlowData;

      
import { WorkFlowInterface } from '../../../org/allbinary/logic/control/workflow/WorkFlowInterface.js';
      //not GWT import const WorkFlowInterface = globalThis.org.allbinary.logic.control.workflow.WorkFlowInterface;

      
import { AbeClientInformationInterface } from '../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { ServiceClientInformationInterfaceFactory } from '../../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
      //not GWT import const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
import { TransformFactory } from '../../../org/allbinary/logic/visual/transform/TransformFactory.js';
      //not GWT import const TransformFactory = globalThis.org.allbinary.logic.visual.transform.TransformFactory;

      
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicWorkFlow
            extends Object
         implements WorkFlowInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;

    private validationDomNodeInterface: ValidationComponentInterface;

    private propertiesHashMap: HashMap<any, any>;

    private pageContext: PageContext;

public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.WORKFLOW))
                        
                                    {
                                    this.logUtil!.putF("Properties: " +propertiesHashMap!.toString(), this, "BasicWorkFlow()");
    

                                    }
                                
this.propertiesHashMap= propertiesHashMap;
    
this.pageContext= pageContext;
    
this.validationDomNodeInterface= TransformFactory.getInstance()!.getInstance(this.abeClientInformation, propertiesHashMap, pageContext) as ValidationComponentInterface;
    
}


                //@Throws(Exception.constructor)
            
    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getPropertiesHashMap()!.get(WorkFlowData.getInstance()!.NAME) as string;
    
}


    getPropertiesHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.propertiesHashMap;
    
}


    getPageContext(): PageContext{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pageContext;
    
}


                //@Throws(Exception.constructor)
            
    public process(): Integer{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.WORKFLOW))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.PROCESS);
    

                                    }
                                

                        if(this.validationDomNodeInterface!.isValid().valueOf())
                        
                                    {
                                    this.pageContext!.getOut()!.print(this.validationDomNodeInterface!.view());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Integer.valueOf(TagSupport.EVAL_BODY_INCLUDE);;
    

                                    }
                                
                        else {
                            this.pageContext!.getOut()!.print(this.validationDomNodeInterface!.validationInfo());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Integer.valueOf(TagSupport.SKIP_BODY);;
    

                        }
                            
}


}



