
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

import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoFactoryInterface } from './TransformInfoFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const TransformInfoFactoryInterface
import { TransformInfoHttpStore } from './TransformInfoHttpStore.js';
//sameFolderImports - not GWT import - same folder const TransformInfoHttpStore
import { TransformInfoInterface } from './TransformInfoInterface.js';
//sameFolderImports - not GWT import - same folder const TransformInfoInterface

export class TransformInfoHttpStoreFactory
            extends Object
         implements TransformInfoFactoryInterface {
        

    private static readonly instance: TransformInfoHttpStoreFactory = new TransformInfoHttpStoreFactory();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 3) return this.getInstance$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): TransformInfoHttpStoreFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformInfoHttpStoreFactory.instance;
    
}


private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance$overload2(databaseHashMap: HashMap<any, any>, propertiesHashMap: HashMap<any, any>, pageContext: PageContext): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TransformInfoHttpStore(databaseHashMap, propertiesHashMap, pageContext);
    
}


}

