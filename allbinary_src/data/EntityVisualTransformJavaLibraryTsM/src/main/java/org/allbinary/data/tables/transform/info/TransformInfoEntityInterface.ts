
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

import { BasicDataTableInterface } from '../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js';
//not GWT import const BasicDataTableInterface

import { TransformInfoInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface TransformInfoEntityInterface extends BasicDataTableInterface {
        

                //@Throws(Exception.constructor)
            
    get(name: string, propertiesHashMap: HashMap<any, any>, pageContext: PageContext): TransformInfoInterface;

                //@Throws(Exception.constructor)
            
    getObjectConfigs(storeName: string): BasicArrayList;

                //@Throws(Exception.constructor)
            
    getNames(storeName: string): BasicArrayList;

    delete(name: string): void;

    insert(values: BasicArrayList): void;

    update(updatedValues: HashMap<any, any>): void;

}

