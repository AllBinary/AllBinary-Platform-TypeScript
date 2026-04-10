
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
        



import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    
import { CircularIndexUtil } from "../../../../../org/allbinary/util/CircularIndexUtil.js";

    

export class BaseCircularPool
            extends Object
         {
        

    circularIndexUtil: CircularIndexUtil = CircularIndexUtil.NULL_CIRCULAR_INDEX_UTIL;
        
        

    OBJECT_ARRAY: any = {}[] = NullUtil.getInstance()!.NULL_OBJECT_ARRAY;
        
        

                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getNextInstance(): any = {}{

    var anyType: any = {} = OBJECT_ARRAY[this.circularIndexUtil!.getIndex()]!;
        
        

next()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType;
    
}


    public init(allBinaryObjectFactoryInterface: AllBinaryObjectFactoryInterface){
var allBinaryObjectFactoryInterface = allBinaryObjectFactoryInterface
setIndex(0)

    var size: number = this.circularIndexUtil!.getSize()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
OBJECT_ARRAY[index]= allBinaryObjectFactoryInterface!.getInstance()
}

}


                @Throws(Exception::class)
            
    public getInstance(index: number): any = {}{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OBJECT_ARRAY[index]!;
    
}


}
                
            

