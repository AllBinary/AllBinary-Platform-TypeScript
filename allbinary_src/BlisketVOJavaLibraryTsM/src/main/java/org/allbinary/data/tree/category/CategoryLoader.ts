
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { CategoryData } from '../../../../../org/allbinary/business/category/CategoryData.js';
//not GWT import const CategoryData

import { CategoryFactoryInterface } from '../../../../../org/allbinary/business/category/CategoryFactoryInterface.js';
//not GWT import const CategoryFactoryInterface

import { CategoryInterface } from '../../../../../org/allbinary/business/category/CategoryInterface.js';
//not GWT import const CategoryInterface

import { CategoryProperties } from '../../../../../org/allbinary/business/category/properties/CategoryProperties.js';
//not GWT import const CategoryProperties

import { CategoryPropertiesInterface } from '../../../../../org/allbinary/business/category/properties/CategoryPropertiesInterface.js';
//not GWT import const CategoryPropertiesInterface

import { DomSearchHelper } from '../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

import { DomDocumentHelper } from '../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { CryptFileReader } from '../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
//not GWT import const CryptFileReader

import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

import { Document } from '../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryModifierTree } from './CategoryModifierTree.js';
//not GWT import - same folder const CategoryModifierTree
import { CategoryLoaderInterface } from './CategoryLoaderInterface.js';
//not GWT import - same folder const CategoryLoaderInterface

export class CategoryLoader extends CategoryModifierTree implements CategoryLoaderInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (categoryFactoryInterface: CategoryFactoryInterface){
            super(categoryFactoryInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "CategoryLoader(CategoryFactoryInterface categoryFactoryInterface)");
    

                                    }
                                
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public getDoc(categoryInterface: CategoryInterface): Document{

 try { 
                        if(categoryInterface!.getProperties()!.getPath(categoryInterface!.getHierarchy()) != 
                                    null
                                )
                        
                                    {
                                    
                        if(categoryInterface!.getHierarchy()!.getLevel() == 1)
                        
                                    {
                                    
    let rootAbFile: AbFile = AbFile.createAbFileFromAbPath(categoryInterface!.getRootFilePath())!;;
    

                        if(!rootAbFile!.isDirectory())
                        
                                    {
                                    rootAbFile!.mkdirs();
    

                        if(!rootAbFile!.isDirectory())
                        
                                    {
                                    


                            throw new Exception("Could Not Create Directory");
                    

                                    }
                                
this.save(categoryInterface);
    

                                    }
                                

                                    }
                                

    let fileAbPath: AbPath = categoryInterface!.getFilePath()!;;
    

    let cryptFileReader: CryptFileReader = new CryptFileReader(CategoryData.getInstance()!.UNCRYPTED_EXTENSION, CategoryData.getInstance()!.ENCRYPTED_EXTENSION);;
    

    let document: Document = DomDocumentHelper.create(cryptFileReader!.get(fileAbPath))!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    

                                    }
                                
                        else {
                            


                            throw new Exception("Null Category");
                    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    
 try { categoryInterface!.log();
    
 }
 catch (caught: any) {
 {
  const e2 = caught;
  
this.logUtil!.put("Could Not Log Category", this, "getDoc", e);
    

 }
   }
 
this.logUtil!.put(this.commonStrings!.FAILURE, this, "getDoc", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}

get(...args: any[]): any {
   
    if (args.length === 1) return this.get$overload1(args[0]);
   
    if (args.length === 1) return this.get$overload2(args[0]);
   
   throw new TypeError('No matching overload: get'); }
  //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public get$overload1(categoryInterface: CategoryInterface): CategoryInterface{

 try { 
    let document: Document = this.getDoc(categoryInterface)!;;
    

    let categoryNode: Node = DomSearchHelper.getNode(CategoryData.getInstance()!.NAME, document.getChildNodes())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.addProperties(categoryInterface, categoryNode!.getChildNodes());;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public get$overload2(document: Document): CategoryInterface{

 try { 
    let categoryNode: Node = DomSearchHelper.getNode(CategoryData.getInstance()!.NAME, document.getChildNodes())!;;
    

    let loadedCategoryInterface: CategoryInterface = this.categoryFactoryInterface!.getRootInstanceFromNode(categoryNode)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.addProperties(loadedCategoryInterface, categoryNode!.getChildNodes());;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}

getAll(...args: any[]): any {
   
    if (args.length === 1) return this.getAll$overload1(args[0]);
   
    if (args.length === 1) return this.getAll$overload2(args[0]);
   
    if (args.length === 2) return this.getAll$overload3(args[0], args[1]);
   
   throw new TypeError('No matching overload: getAll'); }
  //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public getAll$overload1(categoryInterface: CategoryInterface): CategoryInterface{

 try { 
    let document: Document = this.getDoc(categoryInterface)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getAll(document);;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    getAll$overload2(document: Document): CategoryInterface{

 try { 
    let categoryNode: Node = DomSearchHelper.getNode(CategoryData.getInstance()!.NAME, document.getChildNodes())!;;
    

    let loadedCategoryInterface: CategoryInterface = this.categoryFactoryInterface!.getRootInstanceFromNode(categoryNode)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.addProperties(loadedCategoryInterface, categoryNode!.getChildNodes());;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    getAll$overload3(parentCategoryInterface: CategoryInterface, categoryNodeList: NodeList): CategoryInterface{

 try { 
                        if(categoryNodeList != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    let index: number = 0;index < categoryNodeList!.getLength(); index++)
        {

    let categoryNode: Node = categoryNodeList!.item(index)!;;
    

                        if(categoryNode != 
                                    null
                                 && categoryNode!.getNodeName()!.compareTo(CategoryData.getInstance()!.NAME) == 0)
                        
                                    {
                                    
    let categoryInterface: CategoryInterface = this.categoryFactoryInterface!.getInstance(parentCategoryInterface!.getHierarchy()!.getRoot(), parentCategoryInterface, categoryNode) as CategoryInterface;;
    
parentCategoryInterface!.addChild(categoryInterface);
    

                                    }
                                
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return parentCategoryInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    addProperties(loadedCategoryInterface: CategoryInterface, categoryNodeList: NodeList): CategoryInterface{

 try { 
                        if(categoryNodeList != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    let index: number = 0;index < categoryNodeList!.getLength(); index++)
        {

    let categoryNode: Node = categoryNodeList!.item(index)!;;
    

                        if(categoryNode != 
                                    null
                                 && categoryNode!.getNodeName()!.compareTo(CategoryData.getInstance()!.NAME) == 0)
                        
                                    {
                                    
    let categoryPropertiesInterface: CategoryPropertiesInterface = new CategoryProperties(categoryNode) as CategoryPropertiesInterface;;
    
loadedCategoryInterface!.addChildProperty(categoryPropertiesInterface);
    

                                    }
                                
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return loadedCategoryInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


}

