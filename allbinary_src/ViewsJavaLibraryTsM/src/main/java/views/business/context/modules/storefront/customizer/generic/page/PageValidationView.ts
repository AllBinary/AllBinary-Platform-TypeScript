
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
        



            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Vector } from '../../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { TransformInfoEntity } from '../../../../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntity.js';
      const TransformInfoEntity = globalThis.org.allbinary.data.tables.transform.info.TransformInfoEntity;

      
//not game specific package import { TransformInfoEntityBuilder } from '../../../../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntityBuilder.js';
      const TransformInfoEntityBuilder = globalThis.org.allbinary.data.tables.transform.info.TransformInfoEntityBuilder;

      
//not game specific package import { DomDocumentHelper } from '../../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not game specific package import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { ValidationComponentInterface } from '../../../../../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
      const ValidationComponentInterface = globalThis.org.allbinary.logic.control.validate.ValidationComponentInterface;

      
//not game specific package import { StringMaker } from '../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { TransformInfo } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfo.js';
      const TransformInfo = globalThis.org.allbinary.logic.visual.transform.info.TransformInfo;

      
//not game specific package import { TransformInfoHttpInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
      const TransformInfoHttpInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpInterface;

      
//not game specific package import { TransformInfoInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not game specific package import { TransformInfoObjectConfigInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigInterface.js';
      const TransformInfoObjectConfigInterface = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.TransformInfoObjectConfigInterface;

      
//not game specific package import { PageValidation } from '../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/page/PageValidation.js';
      const PageValidation = globalThis.org.allbinary.logic.visual.transform.template.customizer.page.PageValidation;

      
//not game specific package import { TitleData } from '../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleData.js';
      const TitleData = globalThis.org.allbinary.logic.visual.transform.template.customizer.widgets.title.TitleData;

      
//not game specific package import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { CustomizerUtil } from '../../../../../../../../views/business/context/modules/storefront/customizer/CustomizerUtil.js';
      const CustomizerUtil = globalThis.views.business.context.modules.storefront.customizer.CustomizerUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PageView } from './PageView.js';

export class PageValidationView extends PageView implements ValidationComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("View Name: " +transformInfoInterface!.getName(), this, "PageViewValidation()");
    

                                    }
                                
}


    public isValid(): Boolean{

        try {
            
    var isValid: Boolean = Boolean.TRUE;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.IS_VALID);
    

                                    }
                                

    var transformInfoEntityInterface: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;;
    

    var pageObjectConfigInterface: TransformInfoObjectConfigInterface = this.getTransformInfoInterface()!.getObjectConfigInterface()!;;
    

    var allViewsToBeModifiedVector: Vector = pageObjectConfigInterface!.getGroupTransforms()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Views To Be Modified: " +allViewsToBeModifiedVector!.length, this, "get(transformInfoInterface)");
    

                                    }
                                

    var size: number = allViewsToBeModifiedVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var transformInfoInterface: TransformInfo = allViewsToBeModifiedVector!.get(index) as TransformInfo;;
    

    var viewNameOfViewToBeModified: string = transformInfoInterface!.getName()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.getTransformInfoInterface()!.getName());
    
stringBuffer!.append(" is modifying view: ");
    
stringBuffer!.append(viewNameOfViewToBeModified);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "insert()");
    

                                    }
                                

    var httpTransformInfoInterface: TransformInfoHttpInterface = this.getTransformInfoInterface() as TransformInfoHttpInterface;;
    

    var specifiedTransformInfoInterface: TransformInfoInterface = transformInfoEntityInterface!.get(viewNameOfViewToBeModified, httpTransformInfoInterface!.getPropertiesHashMap(), httpTransformInfoInterface!.getPageContext())!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.getTransformInfoInterface()!.getName());
    
stringBuffer!.append(" is adding data to view: ");
    
stringBuffer!.append(viewNameOfViewToBeModified);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "insert()");
    

                                    }
                                

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    

    var title: string = specifiedTransformInfoInterface!.getName()!.substring(this.getTransformInfoInterface()!.getStoreName()!.length())!;;
    

                        if(title.compareTo("index") == 0)
                        
                                    {
                                    hashMap!.put(TitleData.getInstance()!.TEXT, this.getTransformInfoInterface()!.getStoreName() +" - Home Page");
    

                                    }
                                
                        else {
                            hashMap!.put(TitleData.getInstance()!.TEXT, this.getTransformInfoInterface()!.getStoreName() +" -" +title);
    

                        }
                            

    var pageValidation: PageValidation = new PageValidation(hashMap);;
    

                        if(pageValidation!.isValid() == Boolean.FALSE)
                        
                                    {
                                    isValid= Boolean.FALSE;
    

                                    }
                                

                        if(isValid == Boolean.TRUE)
                        
                                    {
                                    
    var document: Document = DomDocumentHelper.create()!;;
    
document.appendChild(pageValidation!.toXmlNode(document));
    

    var documentString: string = DomDocumentHelper.toString(document)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(viewNameOfViewToBeModified);
    
stringBuffer!.append(" is changing data in ");
    
stringBuffer!.append(specifiedTransformInfoInterface!.getDataFilePath()!.toString());
    
stringBuffer!.append(" to the following data:\n");
    
stringBuffer!.append(documentString);
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.IS_VALID);
    

                                    }
                                
CustomizerUtil.getInstance()!.write(specifiedTransformInfoInterface, documentString);
    

                                    }
                                
}




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
    

    var transformInfoEntityInterface: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;;
    

    var objectConfig: TransformInfoObjectConfigInterface = this.getTransformInfoInterface()!.getObjectConfigInterface()!;;
    

    var httpTransformInfoInterface: TransformInfoHttpInterface = this.getTransformInfoInterface() as TransformInfoHttpInterface;;
    

    var allViewsToBeModifiedVector: Vector = objectConfig!.getGroupTransforms()!;;
    

    var size: number = allViewsToBeModifiedVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var transformInfoInterface: TransformInfo = allViewsToBeModifiedVector!.get(index) as TransformInfo;;
    

    var viewNameOfViewToBeModified: string = transformInfoInterface!.getName()!;;
    

    var specifiedTransformInfoInterface: TransformInfoInterface = transformInfoEntityInterface!.get(viewNameOfViewToBeModified, httpTransformInfoInterface!.getPropertiesHashMap(), httpTransformInfoInterface!.getPageContext())!;;
    

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    

    var title: string = specifiedTransformInfoInterface!.getName()!.substring(this.getTransformInfoInterface()!.getStoreName()!.length())!;;
    

                        if(title.compareTo("index") == 0)
                        
                                    {
                                    hashMap!.put(TitleData.getInstance()!.TEXT, this.getTransformInfoInterface()!.getStoreName() +" - Home Page");
    

                                    }
                                
                        else {
                            hashMap!.put(TitleData.getInstance()!.TEXT, this.getTransformInfoInterface()!.getStoreName() +" -" +title);
    

                        }
                            

    var pageValidation: PageValidation = new PageValidation(hashMap);;
    

                        if(pageValidation!.isValid() == Boolean.FALSE)
                        
                                    {
                                    stringBuffer!.append("TransformInfo Name for PageValidation:" +specifiedTransformInfoInterface!.getName());
    
stringBuffer!.append("PageValidation:" +hashMap);
    
stringBuffer!.append("PageValidation Info:" +pageValidation!.validationInfo());
    

                                    }
                                
}




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
                        return "An auto generated page name was invalid.";
    
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



