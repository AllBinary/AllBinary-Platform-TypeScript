
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
        



import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { StoreFrontFactory } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { DomNodeInterface } from "../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { URLGLOBALS } from "../../../../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { MultipartRequestParams } from "../../../../../../../../org/allbinary/logic/communication/http/request/MultipartRequestParams.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ValidationComponentInterface } from "../../../../../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js";

    
import { StringMaker } from "../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { TransformInfoInterface } from "../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { HeadingValidation } from "../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/hedges/heading/HeadingValidation.js";

    
import { LogoData } from "../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/logo/LogoData.js";

    
import { Document } from "../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../org/w3c/dom/Node.js";

    
import { CustomizerUtil } from "../../../../../../../../views/business/context/modules/storefront/customizer/CustomizerUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TopBarView } from "./TopBarView.js";

export class InsertHeaderValidationView extends TopBarView implements ValidationComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly LOGOPATH: string = "logo/";
        
        
public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    

    var multipartRequestHashMap: HashMap<any, any> = new MultipartRequestParams(this.getPageContext()).
                            toHashMap()!;
        
        
;
    

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;
        
        
;
    

    var fullPath: string = URLGLOBALS.getWebappPath() +storeFrontInterface!.getCurrentHostNamePath() +LOGOPATH;
        
        
;
    
multipartRequestHashMap!.put(LogoData.getInstance()!.IMAGEPATH, fullPath);
    
this.heading= new HeadingValidation(multipartRequestHashMap);
    
}


                //@Throws(Error::class)
            
    public toXmlDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public isValid(): Boolean{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("topbarValidation", this, commonStrings!.IS_VALID);
    

                                    }
                                

    var isValid: Boolean = this.heading.isValid()!;
        
        
;
    

                        if(isValid == Boolean.TRUE)
                        
                                    {
                                    CustomizerUtil.getInstance()!.insert(this.getTransformInfoInterface(), this as DomNodeInterface);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isValid;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate", this, commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.heading.validationInfo());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Getting Validation Info";
    
}

}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

