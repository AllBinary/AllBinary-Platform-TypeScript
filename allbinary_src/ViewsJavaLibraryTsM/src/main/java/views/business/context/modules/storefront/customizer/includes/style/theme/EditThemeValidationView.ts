
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
        



            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
//not game specific package import { CategoryFactoryInterface } from '../../../../../../../../../org/allbinary/business/category/CategoryFactoryInterface.js';
      const CategoryFactoryInterface = globalThis.org.allbinary.business.category.CategoryFactoryInterface;

      
//not game specific package import { CategoryInterface } from '../../../../../../../../../org/allbinary/business/category/CategoryInterface.js';
      const CategoryInterface = globalThis.org.allbinary.business.category.CategoryInterface;

      
//not game specific package import { StoreThemeCategoryFactory } from '../../../../../../../../../org/allbinary/business/category/store/theme/StoreThemeCategoryFactory.js';
      const StoreThemeCategoryFactory = globalThis.org.allbinary.business.category.store.theme.StoreThemeCategoryFactory;

      
//not game specific package import { StoreThemeCategoryInterface } from '../../../../../../../../../org/allbinary/business/category/store/theme/StoreThemeCategoryInterface.js';
      const StoreThemeCategoryInterface = globalThis.org.allbinary.business.category.store.theme.StoreThemeCategoryInterface;

      
//not game specific package import { StoreThemeCategoryPathValidationView } from '../../../../../../../../../org/allbinary/business/category/store/theme/StoreThemeCategoryPathValidationView.js';
      const StoreThemeCategoryPathValidationView = globalThis.org.allbinary.business.category.store.theme.StoreThemeCategoryPathValidationView;

      
//not game specific package import { CategoryLoaderFactory } from '../../../../../../../../../org/allbinary/data/tree/category/CategoryLoaderFactory.js';
      const CategoryLoaderFactory = globalThis.org.allbinary.data.tree.category.CategoryLoaderFactory;

      
//not game specific package import { CategoryLoaderInterface } from '../../../../../../../../../org/allbinary/data/tree/category/CategoryLoaderInterface.js';
      const CategoryLoaderInterface = globalThis.org.allbinary.data.tree.category.CategoryLoaderInterface;

      
//not game specific package import { DomNodeInterface } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not game specific package import { DomDocumentHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not game specific package import { LogUtil } from '../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { ValidationComponentInterface } from '../../../../../../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
      const ValidationComponentInterface = globalThis.org.allbinary.logic.control.validate.ValidationComponentInterface;

      
//not game specific package import { StringMaker } from '../../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { TransformInfoInterface } from '../../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not game specific package import { Document } from '../../../../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ThemeCustomizerView } from './ThemeCustomizerView.js';

export class EditThemeValidationView extends ThemeCustomizerView implements ValidationComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public isValid(): Boolean{

        try {
            
    var isValid: Boolean = Boolean.TRUE;;
    

    var categoryFactoryInterface: CategoryFactoryInterface = new StoreThemeCategoryFactory(this.getTransformInfoInterface());;
    

    var categoryLoaderInterface: CategoryLoaderInterface = CategoryLoaderFactory.getInstance(categoryFactoryInterface)!;;
    

    var rootStoreThemeCategoryInterface: StoreThemeCategoryInterface = categoryFactoryInterface!.getRootInstance() as StoreThemeCategoryInterface;;
    

    var storeThemeCategoryInterface: StoreThemeCategoryInterface = categoryLoaderInterface!.getAll(rootStoreThemeCategoryInterface as CategoryInterface) as StoreThemeCategoryInterface;;
    
this.validationInterface= new StoreThemeCategoryPathValidationView(storeThemeCategoryInterface as StoreThemeCategoryInterface);
    
isValid= this.validationInterface!.isValid();
    

    var domNodeInterface: DomNodeInterface = this.validationInterface as DomNodeInterface;;
    

    var document: Document = DomDocumentHelper.create()!;;
    
document.appendChild(domNodeInterface!.toXmlNode(document));
    

    var documentString: string = DomDocumentHelper.toString(document)!;;
    

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
                                    this.logUtil!.put("Failed to validate", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.validationInterface!.validationInfo());
    



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



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

