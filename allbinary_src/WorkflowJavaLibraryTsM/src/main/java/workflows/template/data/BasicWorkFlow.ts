
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
        



            import { Integer } from "../../../java/lang/Integer.js";
        
import { HashMap } from "../../../java/util/HashMap.js";

    
import { PageContext } from "../../../javax/servlet/jsp/PageContext.js";

    
import { TagSupport } from "../../../javax/servlet/jsp/tagext/TagSupport.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ValidationComponentInterface } from "../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js";

    
import { WorkFlowData } from "../../../org/allbinary/logic/control/workflow/WorkFlowData.js";

    
import { WorkFlowInterface } from "../../../org/allbinary/logic/control/workflow/WorkFlowInterface.js";

    
import { AbeClientInformationInterface } from "../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ServiceClientInformationInterfaceFactory } from "../../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    
import { TransformFactory } from "../../../org/allbinary/logic/visual/transform/TransformFactory.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicWorkFlow
            extends Object
         implements WorkFlowInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        

    private validationDomNodeInterface: ValidationComponentInterface

    private propertiesHashMap: HashMap<any, any>

    private pageContext: PageContext
public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext){

            super();
            var propertiesHashMap = propertiesHashMap
var pageContext = pageContext

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.WORKFLOW))
                        
                                    {
                                    this.logUtil!.putF("Properties: " +propertiesHashMap!.toString(), this, "BasicWorkFlow()");
    

                                    }
                                
this.propertiesHashMap= propertiesHashMap;
    
this.pageContext= pageContext;
    
this.validationDomNodeInterface= TransformFactory.getInstance()!.getInstance(abeClientInformation, propertiesHashMap, pageContext);

                         as ValidationComponentInterface;
    
}


                //@Throws(Error::class)
            
    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getPropertiesHashMap()!.get(WorkFlowData.getInstance()!.NAME);

                         as String;
    
}


    getPropertiesHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.propertiesHashMap;
    
}


    getPageContext(): PageContext{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pageContext;
    
}


                //@Throws(Error::class)
            
    public process(): Integer{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.WORKFLOW))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, commonStrings!.PROCESS);
    

                                    }
                                

                        if(this.validationDomNodeInterface!.isValid())
                        
                                    {
                                    pageContext!.getOut()!.print(this.validationDomNodeInterface!.view());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Integer(Integer.valueOf(TagSupport.EVAL_BODY_INCLUDE));

                        ;
    

                                    }
                                
                        else {
                            pageContext!.getOut()!.print(this.validationDomNodeInterface!.validationInfo());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Integer(Integer.valueOf(TagSupport.SKIP_BODY));

                        ;
    

                        }
                            
}


}
                
            

