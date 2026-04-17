
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
        



import { BaseCircularPool } from "../../../../../org/allbinary/logic/util/cache/BaseCircularPool.js";

    
import { CircularIndexUtil } from "../../../../../org/allbinary/util/CircularIndexUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AllBinaryEventObjectFactoryInterface } from "./AllBinaryEventObjectFactoryInterface.js";

export class AllBinaryEventCircularPool extends BaseCircularPool {
        
public constructor (max: number){

            super();
            var max = max
this.OBJECT_ARRAY= new Array(max);
    
this.circularIndexUtil= CircularIndexUtil.getInstance(max);
    
}


    public init(allBinaryEventObjectFactoryInterface: AllBinaryEventObjectFactoryInterface){
var allBinaryEventObjectFactoryInterface = allBinaryEventObjectFactoryInterface
this.circularIndexUtil!.setIndex(0);
    

    var size: number = this.circularIndexUtil!.getSize()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
OBJECT_ARRAY[index]= allBinaryEventObjectFactoryInterface!.getInstance();
    
}

}


}
                
            

