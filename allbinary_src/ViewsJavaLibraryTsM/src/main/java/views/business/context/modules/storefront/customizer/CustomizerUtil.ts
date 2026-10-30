
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

import { TransformInfoEntity } from '../../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntity.js';
//not GWT import const TransformInfoEntity

import { TransformInfoEntityBuilder } from '../../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntityBuilder.js';
//not GWT import const TransformInfoEntityBuilder

import { DomNodeInterface } from '../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper

import { XmlDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/XmlDocumentHelper.js';
//not GWT import const XmlDocumentHelper

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { TransformInfo } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfo.js';
//not GWT import const TransformInfo

import { TransformInfoHttpInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
//not GWT import const TransformInfoHttpInterface

import { TransformInfoInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { TransformInfoObjectConfigInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigInterface.js';
//not GWT import const TransformInfoObjectConfigInterface

import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CustomizerUtil
            extends Object
         {
        

    private static readonly instance: CustomizerUtil = new CustomizerUtil();

    public static getInstance(): CustomizerUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CustomizerUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getTransformInfoInterfaceToCustomize(customizerTransformInfoInterface: TransformInfoInterface, transformInfoInterface: TransformInfoInterface): TransformInfoInterface{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("View Name: " +customizerTransformInfoInterface!.getName(), this, "getTransformInfoInterfaceToCustomize()");
    

                                    }
                                

    let transformInfoEntityInterface: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;;
    

    let viewName: string = transformInfoInterface!.getName()!;;
    

    let httpTransformInfoInterface: TransformInfoHttpInterface = customizerTransformInfoInterface as TransformInfoHttpInterface;;
    

    let customizedTransformInfoInterface: TransformInfoInterface = transformInfoEntityInterface!.get(viewName, httpTransformInfoInterface!.getPropertiesHashMap(), httpTransformInfoInterface!.getPageContext())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return customizedTransformInfoInterface;
    
}


                //@Throws(Exception.constructor)
            
    public getTransformInfoObjectConfigComponentNodesToCustomize(customizerTransformInfoInterface: Object, transformInfoInterface: Object): BasicArrayList{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("View Name: " +customizerTransformInfoInterface!.getName(), this, "getTransformInfoObjectConfigComponentNodesToCustomize()");
    

                                    }
                                

    let transformInfoEntityInterface: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;;
    

    let viewName: string = transformInfoInterface!.getName()!;;
    

    let httpTransformInfoInterface: TransformInfoHttpInterface = customizerTransformInfoInterface as TransformInfoHttpInterface;;
    

    let customizedTransformInfoInterface: TransformInfoInterface = transformInfoEntityInterface!.get(viewName, httpTransformInfoInterface!.getPropertiesHashMap(), httpTransformInfoInterface!.getPageContext())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTransformInfoObjectConfigComponentNodes(customizedTransformInfoInterface);;
    
}


                //@Throws(Exception.constructor)
            
    public getTransformInfoObjectConfigComponentNodes(transformInfoInterface: Object): BasicArrayList{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("View Name: " +transformInfoInterface!.getName(), this, "getTransformInfoObjectConfigComponentNodes()");
    

                                    }
                                

    let transformInfoObjectConfigInterface: TransformInfoObjectConfigInterface = transformInfoInterface!.getObjectConfigInterface()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return transformInfoObjectConfigInterface!.getTransforms();;
    
}


                //@Throws(Exception.constructor)
            
    public getTransformInfoObjectConfigGroupComponentNodes(transformInfoInterface: Object): BasicArrayList{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("View Name: " +transformInfoInterface!.getName(), this, "getTransformInfoObjectConfigComponentNodes()");
    

                                    }
                                

    let transformInfoObjectConfigInterface: TransformInfoObjectConfigInterface = transformInfoInterface!.getObjectConfigInterface()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return transformInfoObjectConfigInterface!.getGroupTransforms();;
    
}


                //@Throws(Exception.constructor)
            
    public insert(transformInfoInterface: TransformInfoInterface, domNodeInterface: DomNodeInterface){

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("View Name: " +transformInfoInterface!.getName(), this, "insert()");
    

                                    }
                                

    let transformInfoEntityInterface: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;;
    

    let allViewsToBeModified: BasicArrayList = this.getTransformInfoObjectConfigGroupComponentNodes(transformInfoInterface)!;;
    

    let document: Document = DomDocumentHelper.create()!;;
    
document.appendChild(domNodeInterface!.toXmlNode(document));
    

    let documentString: string = XmlDocumentHelper.toString(document)!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    stringBuffer!.append("Total Views For Modification: ");
    
stringBuffer!.appendint(allViewsToBeModified!.size());
    
stringBuffer!.append(" New Xml/Data: ");
    
stringBuffer!.append(documentString);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "insert()");
    

                                    }
                                
transformInfoInterface!.setData(documentString);
    

    let size: number = allViewsToBeModified!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let transformInfo: TransformInfo = allViewsToBeModified!.get(index) as TransformInfo;;
    

    let viewNameOfViewToBeModified: string = transformInfo!.getName()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(transformInfoInterface!.getName());
    
stringBuffer!.append(" is modifying view: ");
    
stringBuffer!.append(viewNameOfViewToBeModified);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "insert()");
    

                                    }
                                

    let httpTransformInfoInterface: TransformInfoHttpInterface = transformInfoInterface as TransformInfoHttpInterface;;
    

    let specifiedTransformInfoInterface: TransformInfoInterface = transformInfoEntityInterface!.get(viewNameOfViewToBeModified, httpTransformInfoInterface!.getPropertiesHashMap(), httpTransformInfoInterface!.getPageContext())!;;
    

                        if(specifiedTransformInfoInterface == 
                                    null
                                )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(transformInfoInterface!.getName());
    
stringBuffer!.append(" is unable to add data to view: ");
    
stringBuffer!.append(viewNameOfViewToBeModified);
    
stringBuffer!.append(" since it does not exist");
    
this.logUtil!.putF(stringBuffer!.toString(), this, "insert()");
    

                                    }
                                

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(transformInfoInterface!.getName() +" is adding data to view: " +viewNameOfViewToBeModified, this, "insert()");
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(viewNameOfViewToBeModified);
    
stringBuffer!.append(" is changing data in ");
    
stringBuffer!.append(specifiedTransformInfoInterface!.getDataFilePath()!.toString());
    
stringBuffer!.append(" to the following data:\n");
    
stringBuffer!.append(documentString);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "insert()");
    

                                    }
                                
this.write(specifiedTransformInfoInterface, documentString);
    

                        }
                            
}

}


                //@Throws(Exception.constructor)
            
    public write(specifiedTransformInfoInterface: TransformInfoInterface, documentString: string){

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("View Name: " +specifiedTransformInfoInterface!.getName(), this, "write()");
    

                                    }
                                

    let transformInfoEntityInterface: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;;
    
specifiedTransformInfoInterface!.setData(documentString);
    
transformInfoEntityInterface!.update(specifiedTransformInfoInterface!.toHashMap());
    
}


                //@Throws(Exception.constructor)
            
    public getViewDataForComponentsInObjectConfig(transformInfoInterface: Object): Document{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("View Name: " +transformInfoInterface!.getName(), this, "getViewDataForComponentsInObjectConfig()");
    

                                    }
                                

    let transformInfoObjectConfigInterface: TransformInfoObjectConfigInterface = transformInfoInterface!.getObjectConfigInterface()!;;
    

    let allViewsToBeModified: BasicArrayList = transformInfoObjectConfigInterface!.getGroupTransforms()!;;
    

    let transformInfoEntityInterface: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;;
    

    let size: number = allViewsToBeModified!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let nextTransformInfoInterface: TransformInfo = allViewsToBeModified!.get(index) as TransformInfo;;
    

    let viewNameOfViewToBeModified: string = nextTransformInfoInterface!.getName()!;;
    

    let httpTransformInfoInterface: TransformInfoHttpInterface = transformInfoInterface as TransformInfoHttpInterface;;
    

    let specifiedTransformInfoInterface: TransformInfoInterface = transformInfoEntityInterface!.get(viewNameOfViewToBeModified, httpTransformInfoInterface!.getPropertiesHashMap(), httpTransformInfoInterface!.getPageContext())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return specifiedTransformInfoInterface!.getDataDocument();;
    
}




                            throw new Exception("No Components Specified in ObjectConfig");
                    
}


}

