
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



import { NullUtil } from "../../../org/allbinary/logic/NullUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicArrayList } from "./BasicArrayList.js";

export class BasicArrayListS extends BasicArrayList {
        
public constructor (size: number){
            super(NullUtil.getInstance()!.NULL_OBJECT_ARRAY);
                        //var size = size


                            //For kotlin this is before the body of the constructor.
                    

                        if(size < 0)
                        
                                    {
                                    


                            throw new IllegalArgumentException(new StringMaker().
                            append("Init Size Exception: ")!.appendint(size)!.toString())

                                    }
                                
this.objectArray= new Array(size);
    
}

public constructor (){
            this(7);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


}
                
            

