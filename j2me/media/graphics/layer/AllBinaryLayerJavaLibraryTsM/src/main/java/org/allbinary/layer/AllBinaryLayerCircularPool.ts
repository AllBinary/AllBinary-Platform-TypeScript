
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
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { BaseCircularPool } from '../../../org/allbinary/logic/util/cache/BaseCircularPool.js';
      
import { CircularIndexUtil } from '../../../org/allbinary/util/CircularIndexUtil.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryLayerFactoryInterface } from './AllBinaryLayerFactoryInterface.js';

export class AllBinaryLayerCircularPool extends BaseCircularPool {
        
protected constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public init(allbinaryLayerFactoryInterface: AllBinaryLayerFactoryInterface, total: number){
this.circularIndexUtil= CircularIndexUtil.createInstance(total);
    
this.OBJECT_ARRAY= new Array(total);
    




                        for (
    var localIndex: number = 0;
localIndex < total; localIndex++)
        {
this.OBJECT_ARRAY[localIndex]= allbinaryLayerFactoryInterface!.getInstance();
    
}

}


}
                
            

