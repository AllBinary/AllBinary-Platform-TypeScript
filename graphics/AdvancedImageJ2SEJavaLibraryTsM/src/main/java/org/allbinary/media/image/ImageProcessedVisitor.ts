
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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

        


import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
      //not GWT import const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
import { IOException } from '../../../../java/io/IOException.js';
      //not GWT import const IOException = globalThis.java.io.IOException;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageProcessorInputCompositeInterface } from './ImageProcessorInputCompositeInterface.js';
//not GWT import const  = globalThis.org.allbinary.media.image.ImageProcessorInputCompositeInterface;

                
export interface ImageProcessedVisitor extends ImageProcessorInputCompositeInterface {
        

                //@Throws(IOException.constructor)
            
    visit(generatedBufferedImage: BufferedImage, nameEnding: string, index: number)

}



