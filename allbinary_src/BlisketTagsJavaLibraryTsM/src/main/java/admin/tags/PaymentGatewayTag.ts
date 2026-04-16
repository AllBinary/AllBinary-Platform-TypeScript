
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
        



import { Method } from "../../java/lang/reflect/Method.js";

    
import { JspTagException } from "../../javax/servlet/jsp/JspTagException.js";

    
import { PaymentGatewayHelperFactory } from "../../admin/taghelpers/PaymentGatewayHelperFactory.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LicensingException } from "../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { GLOBALS2 } from "./GLOBALS2.js";

import { GLOBALS2 } from "./GLOBALS2.js";

import { GLOBALS2 } from "./GLOBALS2.js";

import { GLOBALS2 } from "./GLOBALS2.js";

export class PaymentGatewayTag extends TableTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (){

            super();
            this.setTagHelperFactory(new PaymentGatewayHelperFactory());
    
this.setTagRequestHelperFactory(new PaymentGatewayHelperFactory());
    
}


                //@Throws(LicensingException::class, Error::class)
            
    public process(): string{

        try {
            
    var anyType: any = new PaymentGatewayHelperFactory().
                            getInstance(this.getPropertiesHashMap(), this.pageContext)!;
        
        
;
    

    var helperClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = helperClass!.getMethod(commonStrings!.PROCESS, 
                            null)!;
        
        
;
    

    var result: string = method.invoke(anyType, 
                            null);

                         as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {
this.logUtil!.put("LicensingException", this, commonStrings!.PROCESS, e);
    



                            throw e
}

                //: 
 catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e);
    

                                    }
                                



                            throw e
}

}


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
                        if(this.isEnabled())
                        
                                    {
                                    
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.AUTHORIZEORDEREVALBODYONERROR) == 0 || this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.AUTHORIZEORDERANDEVALBODY) == 0 || this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.AUTHORIZEFORMEVALBODYONERROR) == 0)
                        
                                    {
                                    
    var output: string = this.process()!;
        
        
;
    


                            {
                            this.pageContext!.getOut()!.print(output +"<br />");
    

                            }
                    

                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.AUTHORIZEORDEREVALBODYONERROR) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.SKIP_BODY;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.EVAL_BODY_INCLUDE;
    

                        }
                            

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();

                        ;
    

                        }
                            

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

                //: 
} catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}
                
            

