
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
        



            import HashMap from "@ohos.util.HashMap";
        

//import { HashMap } from "../../../../java/util/HashMap.js";

    
import { PageContext } from "../../../../javax/servlet/jsp/PageContext.js";

    
import { WeblisketSession } from "../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    
import { WeblisketSessionInterface } from "../../../../org/allbinary/logic/communication/http/request/session/WeblisketSessionInterface.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class AbContext
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private propertiesHashMap: HashMap<any, any>

    private pageContext: PageContext
public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext){

            super();
            var propertiesHashMap = propertiesHashMap
var pageContext = pageContext

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Properties HashMap: " +propertiesHashMap!.toString(), this, commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.propertiesHashMap= propertiesHashMap;
    
this.pageContext= pageContext;
    
}


    public getWeblisketSession(): WeblisketSessionInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new WeblisketSession(propertiesHashMap, pageContext);
    
}


    public getPageContext(): PageContext{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pageContext;
    
}


    public getPropertiesHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return propertiesHashMap;
    
}


}
                
            

