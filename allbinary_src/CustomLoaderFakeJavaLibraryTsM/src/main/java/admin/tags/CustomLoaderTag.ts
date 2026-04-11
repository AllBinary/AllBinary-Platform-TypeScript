
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
        



import { JspTagException } from "../../javax/servlet/jsp/JspTagException.js";

    
import { AppUrlGlobals } from "../../org/allbinary/globals/AppUrlGlobals.js";

    
import { GLOBALS2 } from "../../org/allbinary/globals/GLOBALS2.js";

    
import { URLGLOBALS } from "../../org/allbinary/globals/URLGLOBALS.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LicensingException } from "../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { CustomTagSupport } from "../../tags/CustomTagSupport.js";

    

export class CustomLoaderTag extends CustomTagSupport {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private command: string

    private webappPath: string
public constructor (){

            super();
            }


    public setCommand(command: string){
var command = command
this.command= command;
    
}


    public setWebappPath(value: string){
var value = value
this.webappPath= value;
    
}


                //@Throws(LicensingException::class)
            
    setCustomLoaderWebappPath(){

        try {
            
    var urlGlobals: AppUrlGlobals = new AppUrlGlobals();
        
        
;
    
urlGlobals!.setWebappPath(this.webappPath);
    
URLGLOBALS.init(urlGlobals);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "setCustomLoaderWebappPath()", e);
    

                                    }
                                
}

}


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.START, this, "doStartTag()");
    

                                    }
                                

                        if(command != 
                                    null
                                )
                        
                                    {
                                    
                        if(command.compareTo(GLOBALS2.SET) == 0)
                        
                                    {
                                    this.setCustomLoaderWebappPath();
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

                //: 
} catch(e) 
            {
AbResponseHandler.sendJspTagLicensingRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

                //: 
 catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}
                
            

