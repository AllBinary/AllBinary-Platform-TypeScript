
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
        



            import { Object } from '../java/lang/Object.js';


        
            import { Class } from '../java/lang/Class.js';
        
            import { Exception } from '../java/lang/Exception.js';
        
import { Method } from '../java/lang/reflect/Method.js';
      
import { JspTagException } from '../javax/servlet/jsp/JspTagException.js';
      
import { AbResponseHandler } from '../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
      
import { LogUtil } from '../org/allbinary/logic/communication/log/LogUtil.js';
      
import { LicensingException } from '../org/allbinary/logic/system/security/licensing/LicensingException.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformTag } from './TransformTag.js';

export class XmlValidationTransformTag extends TransformTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    isValid(): boolean{

        try {
            
    var helperClass: Function = this.getHelper()!.constructor!;;
    

    var method: Method = helperClass!.getMethod(commonStrings!.IS_VALID, 
                            null)!;;
    

    var result: Boolean = method.invoke(this.getHelper(), 
                            null) as Boolean;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result.valueOf();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                            throw e;
                    
}

}


                //@Throws(JspTagException.constructor)
            
    public doStartTag(): number{

        try {
            this.setHelper();
    

                        if(this.isValid())
                        
                                    {
                                    super.doStartTag();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.EVAL_BODY_INCLUDE;
    

                                    }
                                
                        else {
                            super.doStartTag();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.SKIP_BODY;
    

                        }
                            

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
                
            

