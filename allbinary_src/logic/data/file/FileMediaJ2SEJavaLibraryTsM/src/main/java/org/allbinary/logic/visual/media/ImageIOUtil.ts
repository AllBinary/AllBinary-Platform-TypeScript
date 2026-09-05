
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { BufferedImage } from '../../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
import { RenderedImage } from '../../../../../java/awt/image/RenderedImage.js';
//not GWT import const RenderedImage = globalThis.java.awt.image.RenderedImage;

      
import { ImageIO } from '../../../../../javax/imageio/ImageIO.js';
//not GWT import const ImageIO = globalThis.javax.imageio.ImageIO;

      
import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
import { AbFileNativeUtil } from '../../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
//not GWT import const AbFileNativeUtil = globalThis.org.allbinary.logic.io.file.AbFileNativeUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageIOUtil
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static read(file: AbFile): BufferedImage{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageIO.read(AbFileNativeUtil.get(file));;
    
}


                //@Throws(Exception.constructor)
            
    public static write(renderedImage: RenderedImage, name: string, file: AbFile): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageIO.write(renderedImage, name, AbFileNativeUtil.get(file));;
    
}


}



