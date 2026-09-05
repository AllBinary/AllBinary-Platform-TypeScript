
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
import { HashMap } from '../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { PageContext } from '../../../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { WeblisketSession } from '../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
//not GWT import const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
import { WeblisketSessionInterface } from '../../../../org/allbinary/logic/communication/http/request/session/WeblisketSessionInterface.js';
//not GWT import const WeblisketSessionInterface = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSessionInterface;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AbContext
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private propertiesHashMap: HashMap<any, any>;

    private pageContext: PageContext;

public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Properties HashMap: " +propertiesHashMap!.toString(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.propertiesHashMap= propertiesHashMap;
    
this.pageContext= pageContext;
    
}


    public getWeblisketSession(): WeblisketSessionInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new WeblisketSession(this.propertiesHashMap, pageContext);
    
}


    public getPageContext(): PageContext{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pageContext;
    
}


    public getPropertiesHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.propertiesHashMap;
    
}


}



