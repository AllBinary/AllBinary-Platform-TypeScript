
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
        



            import { Exception } from '../../java/lang/Exception.js';
        
//not game specific package import { Method } from '../../java/lang/reflect/Method.js';
      const Method = globalThis.java.lang.reflect.Method;

      
//not game specific package import { HashMap } from '../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
      const JspTagException = globalThis.javax.servlet.jsp.JspTagException;

      
//not game specific package import { BasicTextEmailHelperFactory } from '../../admin/taghelpers/BasicTextEmailHelperFactory.js';
      const BasicTextEmailHelperFactory = globalThis.admin.taghelpers.BasicTextEmailHelperFactory;

      
//not game specific package import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
      const AbResponseHandler = globalThis.org.allbinary.logic.communication.http.request.AbResponseHandler;

      
//not game specific package import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CustomTagSupport } from '../../tags/CustomTagSupport.js';
      const CustomTagSupport = globalThis.tags.CustomTagSupport;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicTextEmailTag extends CustomTagSupport {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private subject: string;

    private body: string;

public constructor (){

            super();
        }


    public setSubject(value: string){
this.subject= value;
    
}


    public setBody(value: string){
this.body= value;
    
}


    public send(): string{

        try {
            
    var propertiesHashMap: HashMap<any, any> = new HashMap<any, any>();;
    
propertiesHashMap!.put("Subject", this.subject);
    
propertiesHashMap!.put("Body", this.body);
    

    var anyType: any = new BasicTextEmailHelperFactory().getInstance(propertiesHashMap, this.pageContext)!;;
    

    var method: Method = anyType!.constructor.name.getMethod("send", 
                            null)!;;
    
method.invoke(anyType, 
                            null);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Email Sent";
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to Send Email.";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "send()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(JspTagException.constructor)
            
    public doStartTag(): number{

        try {
            this.pageContext!.getOut()!.print(this.send());
    



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
                
            

