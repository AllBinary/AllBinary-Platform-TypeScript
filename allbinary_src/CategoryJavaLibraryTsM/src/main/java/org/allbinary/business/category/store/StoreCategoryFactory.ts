
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
        
import { Category } from '../../../../../org/allbinary/business/category/Category.js';
//not GWT import const Category

import { CategoryAbstractFactory } from '../../../../../org/allbinary/business/category/CategoryAbstractFactory.js';
//not GWT import const CategoryAbstractFactory

import { CategoryFactoryInterface } from '../../../../../org/allbinary/business/category/CategoryFactoryInterface.js';
//not GWT import const CategoryFactoryInterface

import { CategoryInterface } from '../../../../../org/allbinary/business/category/CategoryInterface.js';
//not GWT import const CategoryInterface

import { CategoryUtil } from '../../../../../org/allbinary/business/category/CategoryUtil.js';
//not GWT import const CategoryUtil

import { CategoryPropertiesFactoryInterface } from '../../../../../org/allbinary/business/category/properties/CategoryPropertiesFactoryInterface.js';
//not GWT import const CategoryPropertiesFactoryInterface

import { RootStoreCategoryPropertiesFactory } from '../../../../../org/allbinary/business/category/properties/root/store/RootStoreCategoryPropertiesFactory.js';
//not GWT import const RootStoreCategoryPropertiesFactory

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { TransformInfoInterface } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { Node } from '../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StoreCategoryFactory extends CategoryAbstractFactory implements CategoryFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

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
    let categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new RootStoreCategoryPropertiesFactory(this.transformInfoInterface) as CategoryPropertiesFactoryInterface;;
    



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


    public getRootInstance$overload2(categoryPath: AbPath): CategoryInterface{

 try { 
    let level: number = CategoryUtil.getPathLevel(categoryPath)!;;
    

    let categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new RootStoreCategoryPropertiesFactory(this.transformInfoInterface, categoryPath) as CategoryPropertiesFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Category(categoryPropertiesFactoryInterface, level) as CategoryInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(String, int)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public getRootInstanceFromNode(node: Node): CategoryInterface{

 try { 
    let categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new RootStoreCategoryPropertiesFactory(this.transformInfoInterface, node) as CategoryPropertiesFactoryInterface;;
    

    let categoryPath: AbPath = new AbPath(CategoryUtil.getNameFromNode(node), StringUtil.getInstance()!.EMPTY_STRING);;
    

    let level: number = CategoryUtil.getPathLevel(categoryPath)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Category(categoryPropertiesFactoryInterface, level) as CategoryInterface;
    
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


}

