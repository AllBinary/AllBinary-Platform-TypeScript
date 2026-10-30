
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
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { CategoryFactoryInterface } from '../../../../../../org/allbinary/business/category/CategoryFactoryInterface.js';
//not GWT import const CategoryFactoryInterface

import { CategoryInterface } from '../../../../../../org/allbinary/business/category/CategoryInterface.js';
//not GWT import const CategoryInterface

import { CategoryUtil } from '../../../../../../org/allbinary/business/category/CategoryUtil.js';
//not GWT import const CategoryUtil

import { CategoryPropertiesFactory } from '../../../../../../org/allbinary/business/category/properties/CategoryPropertiesFactory.js';
//not GWT import const CategoryPropertiesFactory

import { CategoryPropertiesFactoryInterface } from '../../../../../../org/allbinary/business/category/properties/CategoryPropertiesFactoryInterface.js';
//not GWT import const CategoryPropertiesFactoryInterface

import { RootStoreThemeCategoryPropertiesFactory } from '../../../../../../org/allbinary/business/category/properties/root/store/theme/RootStoreThemeCategoryPropertiesFactory.js';
//not GWT import const RootStoreThemeCategoryPropertiesFactory

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { TransformInfoInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreThemeCategory } from './StoreThemeCategory.js';
//not GWT import - same folder const StoreThemeCategory

export class StoreThemeCategoryFactory
            extends Object
         implements CategoryFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private transformInfoInterface: TransformInfoInterface;

public constructor (transformInfoInterface: TransformInfoInterface){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "StoreCategoryFactory(TransformInfoInterface transformInfoInterface)");
    

                                    }
                                
this.transformInfoInterface= transformInfoInterface;
    
}

getRootInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getRootInstance$overload1();
   
    if (args.length === 1) return this.getRootInstance$overload2(args[0]);
   
   throw new TypeError('No matching overload: getRootInstance'); }
  
    public getRootInstance$overload1(): CategoryInterface{

 try { 
    let categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new RootStoreThemeCategoryPropertiesFactory(this.transformInfoInterface) as CategoryPropertiesFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreThemeCategory(this.transformInfoInterface, categoryPropertiesFactoryInterface, 0) as CategoryInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getRootInstance()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public getRootInstance$overload2(categoryAbPath: AbPath): CategoryInterface{

 try { 
    let level: number = CategoryUtil.getPathLevel(categoryAbPath)!;;
    

    let categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new RootStoreThemeCategoryPropertiesFactory(this.transformInfoInterface, categoryAbPath) as CategoryPropertiesFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreThemeCategory(this.transformInfoInterface, categoryPropertiesFactoryInterface, level) as CategoryInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getRootInstance(String)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public getRootInstanceFromNode(node: Node): CategoryInterface{

 try { 
    let categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new RootStoreThemeCategoryPropertiesFactory(this.transformInfoInterface, node) as CategoryPropertiesFactoryInterface;;
    

    let categoryPath: AbPath = new AbPath(CategoryUtil.getNameFromNode(node), StringUtil.getInstance()!.EMPTY_STRING);;
    

    let level: number = CategoryUtil.getPathLevel(categoryPath)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreThemeCategory(this.transformInfoInterface, node, categoryPropertiesFactoryInterface, level) as CategoryInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getRootInstance(node)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}

getInstance(...args: any[]): any {
   
    if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'number') return this.getInstance$overload1(args[0], args[1]);
   
    if (args.length === 3 && typeof args[2] === 'string') return this.getInstance$overload2(args[0], args[1], args[2]);
   
    if (args.length === 2 && typeof args[1] === 'number') return this.getInstance$overload3(args[0], args[1]);
   
    if (args.length === 3) return this.getInstance$overload4(args[0], args[1], args[2]);
   
    if (args.length === 2 && typeof args[1] === 'number') return this.getInstance$overload5(args[0], args[1]);
   
    if (args.length === 3) return this.getInstance$overload6(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public getInstance$overload1(categoryPath: string, level: number): CategoryInterface{

 try { 
    let categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new CategoryPropertiesFactory(categoryPath) as CategoryPropertiesFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreThemeCategory(this.transformInfoInterface, categoryPropertiesFactoryInterface, level) as CategoryInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getInstance(String, int)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public getInstance$overload2(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryPath: string): CategoryInterface{

 try { 
    let categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new CategoryPropertiesFactory(categoryPath) as CategoryPropertiesFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreThemeCategory(this.transformInfoInterface, rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface) as CategoryInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getInstance(CategoryInterface, CategoryInterface , String, int)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public getInstance$overload3(node: Node, level: number): CategoryInterface{

 try { 
    let categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new CategoryPropertiesFactory(node) as CategoryPropertiesFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreThemeCategory(this.transformInfoInterface, categoryPropertiesFactoryInterface, level) as CategoryInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getInstance(Node, int)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public getInstance$overload4(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, node: Node): CategoryInterface{

 try { 
    let categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new CategoryPropertiesFactory(node) as CategoryPropertiesFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreThemeCategory(this.transformInfoInterface, rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface) as CategoryInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getInstance(CategoryInterface, CategoryInterface, Node, int)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public getInstance$overload5(categoryPropertiesHashMap: HashMap<any, any>, level: number): CategoryInterface{

 try { 
    let categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new CategoryPropertiesFactory(categoryPropertiesHashMap) as CategoryPropertiesFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreThemeCategory(this.transformInfoInterface, categoryPropertiesFactoryInterface, level) as CategoryInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getInstance(HashMap)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public getInstance$overload6(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryPropertiesHashMap: HashMap<any, any>): CategoryInterface{

 try { 
    let categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new CategoryPropertiesFactory(categoryPropertiesHashMap) as CategoryPropertiesFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreThemeCategory(this.transformInfoInterface, rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface) as CategoryInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getInstance(CategoryInterface, CategoryInterface, HashMap)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


}

