
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
        
import { awt } from "../../../../java/awt.js";

    
import { CacheableInterface } from "../../../../org/allbinary/logic/util/cache/CacheableInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Color } from "./Color.js";

export class ColorCacheable
            extends Object
         implements CacheableInterface {
        

    private key: any

    private color: Color
public constructor (key: any = {}){

            super();
        var key = key
this.key= key;
    
this.color= new Color(key = keykey as Integer
key.
                    toInt());
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.key;
    
}


    public getColor(): Color{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.color;
    
}


    public setColor(color: Color){
var color = color
this.color= color;
    
}


}
                
            

