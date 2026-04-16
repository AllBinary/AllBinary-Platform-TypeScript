
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
        



import { JspTagException } from "../javax/servlet/jsp/JspTagException.js";

    
import { TagHelperFactoryInterface } from "../admin/taghelpers/TagHelperFactoryInterface.js";

    
import { AbResponseHandler } from "../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { LogUtil } from "../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../org/allbinary/logic/string/StringMaker.js";

    
import { LicensingException } from "../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { ViewHelperFactory } from "../taghelpers/ViewHelperFactory.js";

    
import { TransformInfoTag } from "../tags/transform/info/TransformInfoTag.js";

    

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

export class TransformTag extends TransformInfoTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor ()                        

                            : super(new ViewHelperFactory()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}

public constructor (tagHelperFactoryInterface: TagHelperFactoryInterface)                        

                            : super(tagHelperFactoryInterface){

            super();
            var tagHelperFactoryInterface = tagHelperFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    view(): string{

        try {
            
    var result: string = this.getHelper()!..constructor.name.getMethod("view", 
                            null)!.invoke(this.getHelper(), 
                            null);

                         as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e
}

}


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("Creating with: \n" +this.getPropertiesHashMap()!.toString(), this, tagStrings!.DO_START_TAG);
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("ViewTag Start For: ");
    
stringBuffer!.append(this.getName());
    
stringBuffer!.append("\nViewFile: ");
    
stringBuffer!.append(this.getObjectFile());
    
this.logUtil!.putF(stringBuffer!.toString(), this, tagStrings!.DO_START_TAG);
    

                                    }
                                
this.setHelper();
    
pageContext!.getOut()!.print(this.view());
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAG))
                        
                                    {
                                    this.logUtil!.putF("Tag End", this, tagStrings!.DO_START_TAG);
    

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
                
            

