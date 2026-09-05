
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

      
import { QuoteHelperFactory } from '../../admin/taghelpers/QuoteHelperFactory.js';
//not GWT import const QuoteHelperFactory = globalThis.admin.taghelpers.QuoteHelperFactory;

      
import { QuoteRequestHelperFactory } from '../../admin/taghelpers/QuoteRequestHelperFactory.js';
//not GWT import const QuoteRequestHelperFactory = globalThis.admin.taghelpers.QuoteRequestHelperFactory;

      
import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
//not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
//not GWT import const AbResponseHandler = globalThis.org.allbinary.logic.communication.http.request.AbResponseHandler;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
//not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TableTag } from './TableTag.js';
//not GWT import - same folder const TableTag = globalThis.admin.tags.TableTag;

                
export class QuoteRequestTag extends TableTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private storeName: string;

public constructor (){

            super();
        this.setTagHelperFactory(new QuoteHelperFactory());
    
this.setTagRequestHelperFactory(new QuoteRequestHelperFactory());
    
}


    public setStoreName(storeName: string){
this.storeName= storeName;
    
}


                //@Throws(LicensingException.constructor)
            
    email(): string{

        try {
            
    var anyType: any = new QuoteHelperFactory().getInstance(this.getPropertiesHashMap(), pageContext)!;;
    

    var helperClass: Function = anyType!.constructor!;;
    

    var method: Method = helperClass!.getMethod("email", 
                            null)!;;
    

    var result: string = method.invoke(anyType, 
                            null) as string;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

                //: 
/* catch(e) 
            {

    var error: string = "Failed to send QuoteRequest emails";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "sendEmail()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}
*/
}


                //@Throws(JspTagException.constructor)
            
    public doStartTag(): number{

        try {
            
                        if(this.getCommand() != 
                                    null
                                )
                        
                                    {
                                    this.getPropertiesHashMap()!.put(StoreFrontData.getInstance()!.NAME, this.storeName);
    

                        if(this.getCommand()!.compareTo("EMAIL") == 0)
                        
                                    {
                                    this.email();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.EVAL_BODY_INCLUDE;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();;
    

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
/* catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}
*/
}


}



