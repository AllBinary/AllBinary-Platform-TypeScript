
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { PageContext } from "../../../../../../javax/servlet/jsp/PageContext.js";

    
import { WeblisketSession } from "../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TransformInfoInterface } from "./TransformInfoInterface.js";

export class TransformInfoHttpComposite
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private transformInfoInterface: TransformInfoHttpInterface
public constructor (transformInfoInterface: TransformInfoInterface){

            super();
        var transformInfoInterface = transformInfoInterface

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("View Name: " +transformInfoInterface!.getName(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.transformInfoInterface= transformInfoInterface as TransformInfoHttpInterface;
    
}


                //@Throws(Error::class)
            
    public getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformInfoInterface;
    
}


    public getWeblisketSession(): WeblisketSession{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new WeblisketSession(this.getPropertiesHashMap(), this.getPageContext());
    
}


    public getPageContext(): PageContext{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformInfoInterface!.getPageContext();;
    
}


    public getPropertiesHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformInfoInterface!.getPropertiesHashMap();;
    
}


}
                
            

