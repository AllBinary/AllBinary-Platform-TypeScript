
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Node } from '../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryPropertiesFactoryInterface } from './CategoryPropertiesFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const CategoryPropertiesFactoryInterface
import { CategoryPropertiesInterface } from './CategoryPropertiesInterface.js';
//sameFolderImports - not GWT import - same folder const CategoryPropertiesInterface
import { CategoryProperties } from './CategoryProperties.js';
//sameFolderImports - not GWT import - same folder const CategoryProperties

export class CategoryPropertiesFactory
            extends Object
         implements CategoryPropertiesFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private categoryPropertiesInterface: CategoryPropertiesInterface;

    public constructor(...args: any[]) {
        super();
        if(args.length === 1 && typeof args[0] === 'string') {
            this.constructor$0(args[0]);
        }
        else if(args.length === 1 && args[0] instanceof Node) {
            this.constructor$1(args[0]);
        }
        else if(args.length === 1) {
            this.constructor$2(args[0]);
        }
        
    }
    
    private constructor$0(name: string): void {
        this.categoryPropertiesInterface= new CategoryProperties(name) as CategoryPropertiesInterface;
    

    }
    
    private constructor$1(node: Node): void {
        this.categoryPropertiesInterface= new CategoryProperties(node) as CategoryPropertiesInterface;
    

    }
    
    private constructor$2(categoryPropertiesHashMap: HashMap<any, any>): void {
        this.categoryPropertiesInterface= new CategoryProperties(categoryPropertiesHashMap) as CategoryPropertiesInterface;
    

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

