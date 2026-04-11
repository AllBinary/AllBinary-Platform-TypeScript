
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
        



import { BufferedImage } from "../../../../java/awt/image/BufferedImage.js";

    
import { File } from "../../../../java/io/File.js";

    

export class ImageProcessorInput
            extends Object
         {
        

    private bufferedImageArray: BufferedImage[]

    private files: File[]
public constructor (files: File[], bufferedImageArray: BufferedImage[])                        

                            : super(){

            super();
            var files = files
var bufferedImageArray = bufferedImageArray


                            //For kotlin this is before the body of the constructor.
                    
this.bufferedImageArray= bufferedImageArray;
    
this.files= files;
    
}


    public getBufferedImageArray(): BufferedImage[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImageArray;
    
}


    public getFiles(): File[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return files;
    
}


}
                
            

