
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

    
import { IIOImage } from "../../../../../javax/imageio/IIOImage.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CacheableInterface } from "../../../../../org/allbinary/logic/util/cache/CacheableInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class IIOImageCacheable
            extends Object
         implements CacheableInterface {
        

    private key: string

    private iioImage: IIOImage
public constructor (key: string){

            super();
            var key = key
this.key= key;
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.key;
    
}


    public setBufferedImage(bufferedImage: BufferedImage){
var bufferedImage = bufferedImage
this.setIioImage(new IIOImage(bufferedImage, 
                            null, 
                            null));
    
}


    public getIioImage(): IIOImage{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return iioImage;
    
}


    setIioImage(iioImage: IIOImage){
var iioImage = iioImage
this.iioImage= iioImage;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.constructor.name.toString()!);
    
stringBuffer!.append(" Reusable IIOImage");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

