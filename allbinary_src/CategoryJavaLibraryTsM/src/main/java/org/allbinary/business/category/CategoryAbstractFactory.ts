
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
import { HashMap } from '../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { CategoryPropertiesFactory } from '../../../../org/allbinary/business/category/properties/CategoryPropertiesFactory.js';
//not GWT import const CategoryPropertiesFactory

import { CategoryPropertiesFactoryInterface } from '../../../../org/allbinary/business/category/properties/CategoryPropertiesFactoryInterface.js';
//not GWT import const CategoryPropertiesFactoryInterface

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbPath } from '../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Node } from '../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryFactoryInterface } from './CategoryFactoryInterface.js';
//not GWT import - same folder const CategoryFactoryInterface
import { CategoryInterface } from './CategoryInterface.js';
//not GWT import - same folder const CategoryInterface
import { Category } from './Category.js';
//not GWT import - same folder const Category

export class CategoryAbstractFactory
            extends Object
         implements CategoryFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

public constructor (){

            super();
        }

getRootInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getRootInstance$overload1();
   
    if (args.length === 1) return this.getRootInstance$overload2(args[0]);
   
   throw new TypeError('No matching overload: getRootInstance'); }
  
    public getRootInstance$overload1(): CategoryInterface{



                            throw new RuntimeException();
                    
}


    public getRootInstance$overload2(categoryAbPath: AbPath): CategoryInterface{



                            throw new RuntimeException();
                    
}


    public getRootInstanceFromNode(node: Node): CategoryInterface{



                            throw new RuntimeException();
                    
}

getInstance(...args: any[]): any {
   
    if (args.length === 1 && typeof args[0] === 'string') return this.getInstance$overload1(args[0]);
   
    if (args.length === 3 && typeof args[2] === 'string') return this.getInstance$overload2(args[0], args[1], args[2]);
   
    if (args.length === 1) return this.getInstance$overload3(args[0]);
   
    if (args.length === 3) return this.getInstance$overload4(args[0], args[1], args[2]);
   
    if (args.length === 3) return this.getInstance$overload5(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public getInstance$overload1(categoryName: string): CategoryInterface{

 try { 
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "getInstance(String)");
    

                                    }
                                

    let categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new CategoryPropertiesFactory(categoryName) as CategoryPropertiesFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Category(categoryPropertiesFactoryInterface) as CategoryInterface;
    
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


    public getInstance$overload2(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryName: string): CategoryInterface{

 try { 
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "getInstance(CategoryInterface, CategoryInterface, String)");
    

                                    }
                                

    let categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new CategoryPropertiesFactory(categoryName) as CategoryPropertiesFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Category(rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface) as CategoryInterface;
    
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


    public getInstance$overload3(node: Node): CategoryInterface{

 try { 
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "getInstance(Node)");
    

                                    }
                                

    let categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new CategoryPropertiesFactory(node) as CategoryPropertiesFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Category(categoryPropertiesFactoryInterface) as CategoryInterface;
    
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
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "getInstance(CategoryInterface, CategoryInterface, Node)");
    

                                    }
                                

    let categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new CategoryPropertiesFactory(node) as CategoryPropertiesFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Category(rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface) as CategoryInterface;
    
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


    public getInstance$overload5(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryPropertiesHashMap: HashMap<any, any>): CategoryInterface{

 try { 
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "getInstance(CategoryInterface, CategoryInterface, HashMap)");
    

                                    }
                                

    let categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new CategoryPropertiesFactory(categoryPropertiesHashMap) as CategoryPropertiesFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Category(rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface) as CategoryInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORYERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getInstance(CategoryInterface, CategoryInterface, HashMap)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


}

