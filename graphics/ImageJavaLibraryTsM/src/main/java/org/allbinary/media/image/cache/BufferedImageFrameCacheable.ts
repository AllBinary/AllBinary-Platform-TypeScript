
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

    

export class BufferedImageFrameCacheable
            extends Object
        
                , CacheableInterface {
        

    private frame: Long

    private bufferedImage: BufferedImage
public constructor (bufferedImage: BufferedImage, frame: Long){

            super();
            var bufferedImage = bufferedImage
var frame = frame
this.frame= frame;
    
this.setBufferedImage(bufferedImage);
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.frame;
    
}


    public getBufferedImage(): BufferedImage{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    
}


    setBufferedImage(bufferedImage: BufferedImage){
var bufferedImage = bufferedImage
this.bufferedImage= bufferedImage;
    
}


    public getFrame(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return frame;
    
}


    public setFrame(frame: Long){
var frame = frame
this.frame= frame;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.constructor.name.toString()!);
    
stringBuffer!.append(" Frame: ");
    
stringBuffer!.appendlong(this.getFrame());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

