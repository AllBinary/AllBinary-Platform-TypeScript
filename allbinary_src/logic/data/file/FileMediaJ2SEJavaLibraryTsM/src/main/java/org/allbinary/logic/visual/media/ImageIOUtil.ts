
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { BufferedImage } from '../../../../../java/awt/image/BufferedImage.js';
      const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
//not game specific package import { RenderedImage } from '../../../../../java/awt/image/RenderedImage.js';
      const RenderedImage = globalThis.java.awt.image.RenderedImage;

      
//not game specific package import { ImageIO } from '../../../../../javax/imageio/ImageIO.js';
      const ImageIO = globalThis.javax.imageio.ImageIO;

      
//not game specific package import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { AbFileNativeUtil } from '../../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
      const AbFileNativeUtil = globalThis.org.allbinary.logic.io.file.AbFileNativeUtil;

      
















                                        
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
                
            

