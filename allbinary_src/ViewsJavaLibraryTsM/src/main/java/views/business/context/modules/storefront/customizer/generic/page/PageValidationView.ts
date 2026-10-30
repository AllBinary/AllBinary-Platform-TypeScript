
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
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

import { TransformInfoEntity } from '../../../../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntity.js';
//not GWT import const TransformInfoEntity

import { TransformInfoEntityBuilder } from '../../../../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntityBuilder.js';
//not GWT import const TransformInfoEntityBuilder

import { DomDocumentHelper } from '../../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper

import { XmlDocumentHelper } from '../../../../../../../../org/allbinary/data/tree/dom/document/XmlDocumentHelper.js';
//not GWT import const XmlDocumentHelper

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { ValidationComponentInterface } from '../../../../../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
//not GWT import const ValidationComponentInterface

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { TransformInfo } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfo.js';
//not GWT import const TransformInfo

import { TransformInfoHttpInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
//not GWT import const TransformInfoHttpInterface

import { TransformInfoInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { TransformInfoObjectConfigInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigInterface.js';
//not GWT import const TransformInfoObjectConfigInterface

import { PageValidation } from '../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/page/PageValidation.js';
//not GWT import const PageValidation

import { TitleData } from '../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleData.js';
//not GWT import const TitleData

import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { CustomizerUtil } from '../../../../../../../../views/business/context/modules/storefront/customizer/CustomizerUtil.js';
//not GWT import const CustomizerUtil

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PageView } from './PageView.js';
//sameFolderImports - not GWT import - same folder const PageView

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
    let isValid: Boolean = Boolean.TRUE;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.IS_VALID);
    

                                    }
                                

    let transformInfoEntityInterface: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;;
    

    let pageObjectConfigInterface: TransformInfoObjectConfigInterface = this.getTransformInfoInterface()!.getObjectConfigInterface()!;;
    

    let allViewsToBeModifiedVector: BasicArrayList = pageObjectConfigInterface!.getGroupTransforms()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Views To Be Modified: " +allViewsToBeModifiedVector!.size(), this, "get(transformInfoInterface)");
    

                                    }
                                

    let size: number = allViewsToBeModifiedVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let transformInfoInterface: TransformInfo = allViewsToBeModifiedVector!.get(index) as TransformInfo;;
    

    let viewNameOfViewToBeModified: string = transformInfoInterface!.getName()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.getTransformInfoInterface()!.getName());
    
stringBuffer!.append(" is modifying view: ");
    
stringBuffer!.append(viewNameOfViewToBeModified);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "insert()");
    

                                    }
                                

    let httpTransformInfoInterface: TransformInfoHttpInterface = this.getTransformInfoInterface() as TransformInfoHttpInterface;;
    

    let specifiedTransformInfoInterface: TransformInfoInterface = transformInfoEntityInterface!.get(viewNameOfViewToBeModified, httpTransformInfoInterface!.getPropertiesHashMap(), httpTransformInfoInterface!.getPageContext())!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.getTransformInfoInterface()!.getName());
    
stringBuffer!.append(" is adding data to view: ");
    
stringBuffer!.append(viewNameOfViewToBeModified);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "insert()");
    

                                    }
                                

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

    let title: string = specifiedTransformInfoInterface!.getName()!.substring(this.getTransformInfoInterface()!.getStoreName()!.length())!;;
    

                        if(title.compareTo("index") == 0)
                        
                                    {
                                    hashMap!.put(TitleData.getInstance()!.TEXT, this.getTransformInfoInterface()!.getStoreName() +" - Home Page");
    

                                    }
                                
                        else {
                            hashMap!.put(TitleData.getInstance()!.TEXT, this.getTransformInfoInterface()!.getStoreName() +" -" +title);
    

                        }
                            

    let pageValidation: PageValidation = new PageValidation(hashMap);;
    

                        if(pageValidation!.isValid() == false)
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(isValid == true)
                        
                                    {
                                    
    let document: Document = DomDocumentHelper.create()!;;
    
document.appendChild(pageValidation!.toXmlNode(document));
    

    let documentString: string = XmlDocumentHelper.toString(document)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
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
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    public validationInfo(): string{

 try { 
    let stringBuffer: StringMaker = new StringMaker();;
    

    let transformInfoEntityInterface: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;;
    

    let objectConfig: TransformInfoObjectConfigInterface = this.getTransformInfoInterface()!.getObjectConfigInterface()!;;
    

    let httpTransformInfoInterface: TransformInfoHttpInterface = this.getTransformInfoInterface() as TransformInfoHttpInterface;;
    

    let allViewsToBeModifiedVector: BasicArrayList = objectConfig!.getGroupTransforms()!;;
    

    let size: number = allViewsToBeModifiedVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let transformInfoInterface: TransformInfo = allViewsToBeModifiedVector!.get(index) as TransformInfo;;
    

    let viewNameOfViewToBeModified: string = transformInfoInterface!.getName()!;;
    

    let specifiedTransformInfoInterface: TransformInfoInterface = transformInfoEntityInterface!.get(viewNameOfViewToBeModified, httpTransformInfoInterface!.getPropertiesHashMap(), httpTransformInfoInterface!.getPageContext())!;;
    

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

    let title: string = specifiedTransformInfoInterface!.getName()!.substring(this.getTransformInfoInterface()!.getStoreName()!.length())!;;
    

                        if(title.compareTo("index") == 0)
                        
                                    {
                                    hashMap!.put(TitleData.getInstance()!.TEXT, this.getTransformInfoInterface()!.getStoreName() +" - Home Page");
    

                                    }
                                
                        else {
                            hashMap!.put(TitleData.getInstance()!.TEXT, this.getTransformInfoInterface()!.getStoreName() +" -" +title);
    

                        }
                            

    let pageValidation: PageValidation = new PageValidation(hashMap);;
    

                        if(pageValidation!.isValid() == false)
                        
                                    {
                                    stringBuffer!.append("TransformInfo Name for PageValidation:" +specifiedTransformInfoInterface!.getName());
    
stringBuffer!.append("PageValidation:" +hashMap);
    
stringBuffer!.append("PageValidation Info:" +pageValidation!.validationInfo());
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "An auto generated page name was invalid.";
    

 }
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

