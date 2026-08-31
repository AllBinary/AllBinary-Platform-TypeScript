
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
        



            import { Class } from '../../java/lang/Class.js';
        
            import { Exception } from '../../java/lang/Exception.js';
        
import { Method } from '../../java/lang/reflect/Method.js';
      //not GWT import const Method = globalThis.java.lang.reflect.Method;

      
import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
      //not GWT import const JspTagException = globalThis.javax.servlet.jsp.JspTagException;

      
import { PaymentProcessHelperFactory } from '../../admin/taghelpers/PaymentProcessHelperFactory.js';
      //not GWT import const PaymentProcessHelperFactory = globalThis.admin.taghelpers.PaymentProcessHelperFactory;

      
import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
      //not GWT import const AbResponseHandler = globalThis.org.allbinary.logic.communication.http.request.AbResponseHandler;

      
//not plain js import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      //not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
import { StoreValidationTransformTag } from '../../tags/StoreValidationTransformTag.js';
      //not GWT import const StoreValidationTransformTag = globalThis.tags.StoreValidationTransformTag;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PaymentProcessTag extends StoreValidationTransformTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (){

            super();
        }


                //@Throws(LicensingException.constructor, Exception.constructor)
            
    public process(): string{

        try {
            
    var anyType: any = new PaymentProcessHelperFactory().getInstance(this.getPropertiesHashMap(), this.pageContext)!;;
    

    var helperClass: Function = anyType!.constructor!;;
    

    var method: Method = helperClass!.getMethod(commonStrings!.PROCESS, 
                            null)!;;
    

    var result: string = method.invoke(anyType, 
                            null) as string;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LICENSINGERROR))
                        
                                    {
                                    this.logUtil!.put("LicensingException", this, this.commonStrings!.PROCESS, e);
    

                                    }
                                



                            throw e;
                    
}

                //: 
/* catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.PROCESS, e);
    

                                    }
                                



                            throw e;
                    
}
*/
}


                //@Throws(JspTagException.constructor)
            
    public doStartTag(): number{

        try {
            
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.AUTHORIZEORDEREVALBODYONERROR) == 0 || this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.AUTHORIZEORDERANDEVALBODY) == 0 || this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.AUTHORIZEFORMEVALBODYONERROR) == 0)
                        
                                    {
                                    this.pageContext!.getOut()!.print(this.process() +"<br />");
    

                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.AUTHORIZEORDEREVALBODYONERROR) == 0)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.SKIP_BODY;
    
                             else 
                        if()
                        

                                    }
                                
                        else {
                            


                            throw new Exception("No Such Payment Processing Command");
                    

                        }
                            

                //: 
} catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}



