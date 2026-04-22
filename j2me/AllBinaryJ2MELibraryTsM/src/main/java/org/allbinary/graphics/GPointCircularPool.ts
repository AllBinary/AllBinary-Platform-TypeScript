
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GPointCircularPool extends BaseCircularPool {
        
public constructor (size: number){

            super();
        var size = size
this.circularIndexUtil= CircularIndexUtil.getInstance(size);
    
this.OBJECT_ARRAY= new Array(size);
    




                        for (
    var index: number = size -1;
        
        
index >= 0; index--)
        {
this.OBJECT_ARRAY[index]= new CustomGPoint(0, 0);
    
}

}


}
                
            

