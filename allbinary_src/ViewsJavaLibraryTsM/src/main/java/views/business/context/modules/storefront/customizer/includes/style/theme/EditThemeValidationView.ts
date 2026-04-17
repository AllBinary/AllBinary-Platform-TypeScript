
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
        



import { CategoryFactoryInterface } from "../../../../../../../../../org/allbinary/business/category/CategoryFactoryInterface.js";

    
import { CategoryInterface } from "../../../../../../../../../org/allbinary/business/category/CategoryInterface.js";

    
import { StoreThemeCategoryFactory } from "../../../../../../../../../org/allbinary/business/category/store/theme/StoreThemeCategoryFactory.js";

    
import { StoreThemeCategoryInterface } from "../../../../../../../../../org/allbinary/business/category/store/theme/StoreThemeCategoryInterface.js";

    
import { StoreThemeCategoryPathValidationView } from "../../../../../../../../../org/allbinary/business/category/store/theme/StoreThemeCategoryPathValidationView.js";

    
import { CategoryLoaderFactory } from "../../../../../../../../../org/allbinary/data/tree/category/CategoryLoaderFactory.js";

    
import { CategoryLoaderInterface } from "../../../../../../../../../org/allbinary/data/tree/category/CategoryLoaderInterface.js";

    
import { DomNodeInterface } from "../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { DomDocumentHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ValidationComponentInterface } from "../../../../../../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js";

    
import { StringMaker } from "../../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { TransformInfoInterface } from "../../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../org/w3c/dom/Node.js";

    

import { Boolean } from "./Boolean.js";

import { Boolean } from "./Boolean.js";

export class EditThemeValidationView extends ThemeCustomizerView
                , ValidationComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}


    public isValid(): Boolean{

        try {
            
    var isValid: Boolean = Boolean.TRUE;
        
        
;
    

    var categoryFactoryInterface: CategoryFactoryInterface = new StoreThemeCategoryFactory(this.getTransformInfoInterface());
        
        
;
    

    var categoryLoaderInterface: CategoryLoaderInterface = CategoryLoaderFactory.getInstance(categoryFactoryInterface)!;
        
        
;
    

    var rootStoreThemeCategoryInterface: StoreThemeCategoryInterface = categoryFactoryInterface!.getRootInstance();

                         as StoreThemeCategoryInterface;
        
        
;
    

    var storeThemeCategoryInterface: StoreThemeCategoryInterface = categoryLoaderInterface!.getAll(rootStoreThemeCategoryInterface as CategoryInterface);

                         as StoreThemeCategoryInterface;
        
        
;
    
this.validationInterface= new StoreThemeCategoryPathValidationView(storeThemeCategoryInterface as StoreThemeCategoryInterface);
    
isValid= this.validationInterface!.isValid();
    

    var domNodeInterface: DomNodeInterface = this.validationInterface as DomNodeInterface;
        
        
;
    

    var document: Document = DomDocumentHelper.create()!;
        
        
;
    
document.appendChild(domNodeInterface!.toXmlNode(document));
    

    var documentString: string = DomDocumentHelper.toString(document)!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.putF("Setting Data: " +documentString, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.getTransformInfoInterface()!.setData(documentString);
    



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
    
stringBuffer!.append(this.validationInterface!.validationInfo());
    



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
                
            

