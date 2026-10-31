
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

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { CategoryPropertiesFactoryInterface } from '../../../../../../../../org/allbinary/business/category/properties/CategoryPropertiesFactoryInterface.js';
//not GWT import const CategoryPropertiesFactoryInterface

import { CategoryPropertiesInterface } from '../../../../../../../../org/allbinary/business/category/properties/CategoryPropertiesInterface.js';
//not GWT import const CategoryPropertiesInterface

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbPath } from '../../../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

import { TransformInfoInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RootStoreThemeCategoryProperties } from './RootStoreThemeCategoryProperties.js';
//sameFolderImports - not GWT import - same folder const RootStoreThemeCategoryProperties

export class RootStoreThemeCategoryPropertiesFactory
            extends Object
         implements CategoryPropertiesFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private categoryPropertiesInterface: CategoryPropertiesInterface;

    public constructor(...args: any[]) {
        super();if(args.length === 1) {
            
            this.constructor$0(args[0]);
            
        }
        else if(args.length === 2 && args[0] instanceof TransformInfoInterface && args[1] instanceof AbPath) {
            
            this.constructor$1(args[0], args[1]);
            
        }
        else if(args.length === 2 && args[0] instanceof TransformInfoInterface && args[1] instanceof Node) {
            
            this.constructor$2(args[0], args[1]);
            
        }
        else if(args.length === 2) {
            
            this.constructor$3(args[0], args[1]);
            
        }
        
    }
    
    private constructor$0(transformInfoInterface: TransformInfoInterface): void {
        this.categoryPropertiesInterface= new RootStoreThemeCategoryProperties(transformInfoInterface) as CategoryPropertiesInterface;
    

    }
    
    private constructor$1(transformInfoInterface: TransformInfoInterface, abPath: AbPath): void {
        this.categoryPropertiesInterface= new RootStoreThemeCategoryProperties(transformInfoInterface, abPath) as CategoryPropertiesInterface;
    

    }
    
    private constructor$2(transformInfoInterface: TransformInfoInterface, node: Node): void {
        this.categoryPropertiesInterface= new RootStoreThemeCategoryProperties(transformInfoInterface, node) as CategoryPropertiesInterface;
    

    }
    
    private constructor$3(transformInfoInterface: TransformInfoInterface, categoryPropertiesHashMap: HashMap<any, any>): void {
        this.categoryPropertiesInterface= new RootStoreThemeCategoryProperties(transformInfoInterface, categoryPropertiesHashMap) as CategoryPropertiesInterface;
    

    }
    
    public getInstance(): CategoryPropertiesInterface{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryPropertiesInterface as CategoryPropertiesInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


}

