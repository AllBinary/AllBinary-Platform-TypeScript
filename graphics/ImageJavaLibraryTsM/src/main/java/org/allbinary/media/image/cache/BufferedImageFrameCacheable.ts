
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Long } from '../../../../../java/lang/Long.js';
        
//not game specific package import { BufferedImage } from '../../../../../java/awt/image/BufferedImage.js';
      const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { CacheableInterface } from '../../../../../org/allbinary/logic/util/cache/CacheableInterface.js';
      const CacheableInterface = globalThis.org.allbinary.logic.util.cache.CacheableInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BufferedImageFrameCacheable
            extends Object
         implements CacheableInterface {
        

    private frame: Long;

    private bufferedImage: BufferedImage;

public constructor (bufferedImage: BufferedImage, frame: Long){

            super();
        this.frame= frame;
    
this.setBufferedImage(bufferedImage);
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.frame;
    
}


    public getBufferedImage(): BufferedImage{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.bufferedImage;
    
}


    setBufferedImage(bufferedImage: BufferedImage){
this.bufferedImage= bufferedImage;
    
}


    public getFrame(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.frame;
    
}


    public setFrame(frame: Long){
this.frame= frame;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.constructor.name.toString()!);
    
stringBuffer!.append(" Frame: ");
    
stringBuffer!.appendlong(this.getFrame());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

