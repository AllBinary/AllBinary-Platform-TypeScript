
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
        



import { HttpServletRequest } from "../../../javax/servlet/http/HttpServletRequest.js";

    
import { StoreFront } from "../../../org/allbinary/business/context/modules/storefront/StoreFront.js";

    
import { StoreFrontFactory } from "../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { FREEBLISKET_PATH_GLOBALS } from "../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../org/allbinary/globals/URLGLOBALS.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ValidationComponentInterface } from "../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js";

    
import { AbFile } from "../../../org/allbinary/logic/io/file/AbFile.js";

    
import { AbPath } from "../../../org/allbinary/logic/io/path/AbPath.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../org/w3c/dom/Node.js";

    
import { HttpContextView } from "../../../views/business/context/HttpContextView.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AddValidationStoreFrontView extends HttpContextView implements ValidationComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    newStoreFrontInterface: StoreFrontInterface
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
this.newStoreFrontInterface= new StoreFront(this.getPageContext()!.getRequest();

                         as HttpServletRequest) as StoreFrontInterface;
    

                        if(this.newStoreFrontInterface!.getName() == 
                                    null
                                )
                        this.newStoreFrontInterface!.setName(this.getWeblisketSession()!.getStoreName());

                        
}


    public isValid(): Boolean{

        try {
            
    var valid: Boolean = Boolean.TRUE;
        
        
;
    

                        if(this.newStoreFrontInterface!.isValid() == Boolean.FALSE)
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(StoreFrontFactory.getInstance(this.newStoreFrontInterface!.getName()) != 
                                    null
                                )
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(new AbFile(new AbPath(this.getStoreViewsPath())).
                            isFile())
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valid;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate form", this, commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


                //@Throws(Error::class)
            
    getStoreViewsPath(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(URLGLOBALS.getMainPath());
    
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH);
    
stringBuffer!.append(this.newStoreFrontInterface!.getName());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

                        if(this.newStoreFrontInterface!.isValid() == Boolean.FALSE)
                        
                                    {
                                    stringBuffer!.append(this.newStoreFrontInterface!.validationInfo());
    

                                    }
                                

                        if(StoreFrontFactory.getInstance(this.newStoreFrontInterface!.getName()) != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append("Store name already used<br/>");
    

                                    }
                                

                        if(new AbFile(new AbPath(this.getStoreViewsPath())).
                            isFile())
                        
                                    {
                                    stringBuffer!.append("Store name clashes with template name<br/>");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Validating Form";
    
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


                //@Throws(Error::class)
            
    public view(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return views.ValidationOnlyTempUtil.getInstance()!.view(this);

                        ;
    
}


}
                
            

