
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
        



            import { Integer } from "../java/lang/Integer.js";
        
import { Method } from "../java/lang/reflect/Method.js";

    
import { JspTagException } from "../javax/servlet/jsp/JspTagException.js";

    
import { AbResponseHandler } from "../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LicensingException } from "../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { TransformInfoData } from "../org/allbinary/logic/visual/transform/info/TransformInfoData.js";

    
import { StoreTagWorkFlowHelperFactory } from "../taghelpers/StoreTagWorkFlowHelperFactory.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { HelperTag } from "./HelperTag.js";

export class StoreWorkFlowTag extends HelperTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private viewName: string

    private viewFile: string
public constructor ()                        

                            : super(new StoreTagWorkFlowHelperFactory()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


    public setName(value: string){
var value = value
this.viewName= value;
    
this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.NAME, this.viewName);
    
}


                //@Throws(Error::class)
            
    process(): number{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, commonStrings!.PROCESS);
    

                                    }
                                

    var helperClass: Function = this.getHelper()!.constructor!;
        
        
;
    

    var method: Method = helperClass!.getMethod(commonStrings!.PROCESS, 
                            null)!;
        
        
;
    

    var result: Integer = method.invoke(this.getHelper(), 
                            null);

                         as Integer;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result.toInt();

                        ;
    

                //: 
} catch(e) 
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
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, tagStrings!.DO_START_TAG);
    

                                    }
                                
this.setHelper();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.process();

                        ;
    

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
                
            

