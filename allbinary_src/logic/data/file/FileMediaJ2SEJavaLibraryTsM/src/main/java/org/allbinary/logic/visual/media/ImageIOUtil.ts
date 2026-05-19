
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { BufferedImage } from '../../../../../java/awt/image/BufferedImage.js';
      
import { RenderedImage } from '../../../../../java/awt/image/RenderedImage.js';
      
import { ImageIO } from '../../../../../javax/imageio/ImageIO.js';
      
import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
      
import { AbFileNativeUtil } from '../../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
      

















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
                
            

