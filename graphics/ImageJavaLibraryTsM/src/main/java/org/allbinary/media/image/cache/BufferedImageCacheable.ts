
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
        



import { BufferedImage } from "../../../../../java/awt/image/BufferedImage.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CacheableInterface } from "../../../../../org/allbinary/logic/util/cache/CacheableInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BufferedImageInfo } from "./BufferedImageInfo.js";

export class BufferedImageCacheable
            extends Object
         implements CacheableInterface {
        

    private key: BufferedImageInfo

    private bufferedImage: BufferedImage
public constructor (key: BufferedImageInfo){

            super();
        var key = key
this.key= key;
    
this.setBufferedImage(new BufferedImage(key.getWidth(), key.getHeight(), key.getType()));
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.key;
    
}


    public getBufferedImage(): BufferedImage{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    
}


    setBufferedImage(bufferedImage: BufferedImage){
var bufferedImage = bufferedImage
this.bufferedImage= bufferedImage;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.constructor.name.toString()!);
    
stringBuffer!.append(" ");
    
stringBuffer!.append(this.getKey()!.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

