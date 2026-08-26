
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
        



            import { Exception } from '../../../java/lang/Exception.js';
        
//not game specific package import { JsType } from '../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { BaseCircularPool } from '../../../org/allbinary/logic/util/cache/BaseCircularPool.js';
      const BaseCircularPool = globalThis.org.allbinary.logic.util.cache.BaseCircularPool;

      
//not game specific package import { CircularIndexUtil } from '../../../org/allbinary/util/CircularIndexUtil.js';
      const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;

      
//not game specific package import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryLayerFactoryInterface } from './AllBinaryLayerFactoryInterface.js';

export class AllBinaryLayerCircularPool extends BaseCircularPool {
        

protected constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public initAllBinaryLayerCircularPool(allbinaryLayerFactoryInterface: AllBinaryLayerFactoryInterface, total: number){
this.circularIndexUtil= CircularIndexUtil.createInstance(total);
    
this.OBJECT_ARRAY= new Array(total);
    




                        for (
    var localIndex: number = 0;localIndex < total; localIndex++)
        {
this.OBJECT_ARRAY[localIndex]= allbinaryLayerFactoryInterface!.getInstance();
    
}

}


}
                
            

