
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
        



            import { Integer } from "../../../../java/lang/Integer.js";
        
import { Hashtable } from "../../../../java/util/Hashtable.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicColor } from "./BasicColor.js";

import { BasicColorFactory } from "./BasicColorFactory.js";

export class BasicColorCacheFactory
            extends Object
         {
        

    private static readonly instance: BasicColorCacheFactory = new BasicColorCacheFactory();

    public static getInstance(): BasicColorCacheFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly hashtable: Hashtable = new Hashtable();
private constructor (){

            super();
        }


    public add(basicDefaultColor: BasicColor){
    //var basicDefaultColor = basicDefaultColor
this.hashtable.put(basicDefaultColor!.toInt(), basicDefaultColor);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getAndOrCreate(integer: number): BasicColor{
    //var integer = integer

    var basicColor: BasicColor =  as BasicColorthis.hashtable.get(integer as Object);;
;
    

                        if(basicColor == 
                                    null
                                )
                        
                                    {
                                    basicColor= BasicColorFactory.getInstance()!.createInstance(integer.toInt());
    
this.hashtable.put(integer, basicColor);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicColor;
    
}


}
                
            

