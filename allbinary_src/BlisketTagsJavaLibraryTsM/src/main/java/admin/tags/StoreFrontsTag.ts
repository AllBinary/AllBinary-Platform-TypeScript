
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
        



            import { Object } from '../../java/lang/Object.js';


        
            import { Exception } from '../../java/lang/Exception.js';
        
import { Method } from '../../java/lang/reflect/Method.js';
      
import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
      
import { TagSupport } from '../../javax/servlet/jsp/tagext/TagSupport.js';
      
import { StoreFrontsHelperFactory } from '../../admin/taghelpers/StoreFrontsHelperFactory.js';
      
import { StoreFrontsRequestHelperFactory } from '../../admin/taghelpers/StoreFrontsRequestHelperFactory.js';
      
import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      
import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
      
import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TableTag } from './TableTag.js';

export class StoreFrontsTag extends TableTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (){

            super();
        this.setTagHelperFactory(new StoreFrontsHelperFactory());
    
this.setTagRequestHelperFactory(new StoreFrontsRequestHelperFactory());
    
}


                //@Throws(LicensingException.constructor)
            
    generateSelect(): string{

        try {
            
    var anyType: any = this.getTagHelperFactoryInterface()!.getInstance(this.getPropertiesHashMap(), pageContext)!;;
    

    var method: Method = anyType!.constructor.name.getMethod("generateSelect", 
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

    var error: string = "Failed to generate storefronts select";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "generateSelect()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}
*/
}


                //@Throws(LicensingException.constructor)
            
    install(): string{

        try {
            
    var anyType: any = this.getTagRequestHelperFactoryInterface()!.getInstance(this.getPropertiesHashMap(), pageContext)!;;
    

    var method: Method = anyType!.constructor.name.getMethod("install", 
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

    var error: string = "Failed to generate storefronts select";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "generateSelect()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}
*/
}


                //@Throws(LicensingException.constructor)
            
    sendStoreCreatedEmails(): string{

        try {
            
    var anyType: any = this.getTagRequestHelperFactoryInterface()!.getInstance(this.getPropertiesHashMap(), pageContext)!;;
    

    var method: Method = anyType!.constructor.name.getMethod("sendStoreCreatedEmails", 
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

    var error: string = "Failed to send email";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "sendStoreCreatedEmails()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}
*/
}


                //@Throws(JspTagException.constructor)
            
    public doStartTag(): number{

        try {
            
                        if(this.isEnabled())
                        
                                    {
                                    
                        if(this.getCommand() != 
                                    null
                                )
                        
                                    {
                                    
    var storeFrontData: StoreFrontData = StoreFrontData.getInstance()!;;
    

                        if(this.getCommand()!.compareTo(storeFrontData!.SELECT) == 0)
                        
                                    {
                                    this.pageContext!.getOut()!.print(this.generateSelect());
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(storeFrontData!.INSTALL) == 0)
                        
                                    {
                                    this.getPropertiesHashMap()!.put("current", this.getCurrent());
    
this.getPropertiesHashMap()!.put("total", this.getTotal());
    

                        if(this.getCurrent()!.intValue() == this.getTotal()!.intValue())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TagSupport.EVAL_BODY_INCLUDE;
    

                                    }
                                
this.install();
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(storeFrontData!.INSTALL_COMPLETE) == 0)
                        
                                    {
                                    this.sendStoreCreatedEmails();
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();;
    

                        }
                            

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
                
            

