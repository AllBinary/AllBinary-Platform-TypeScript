
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
        



import { BaseCircularPool } from "../../../org/allbinary/logic/util/cache/BaseCircularPool.js";

    
import { CircularIndexUtil } from "../../../org/allbinary/util/CircularIndexUtil.js";

    

export class AllBinaryLayerCircularPool extends BaseCircularPool {
        
protected constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public init(allbinaryLayerFactoryInterface: AllBinaryLayerFactoryInterface, total: number){
var allbinaryLayerFactoryInterface = allbinaryLayerFactoryInterface
var total = total
this.circularIndexUtil= CircularIndexUtil.getInstance(total)
OBJECT_ARRAY= new Array(total)




                        for (
    var localIndex: number = 0;
        
        
localIndex < total; localIndex++)
        {
OBJECT_ARRAY[localIndex]= allbinaryLayerFactoryInterface!.getInstance()
}

}


}
                
            

