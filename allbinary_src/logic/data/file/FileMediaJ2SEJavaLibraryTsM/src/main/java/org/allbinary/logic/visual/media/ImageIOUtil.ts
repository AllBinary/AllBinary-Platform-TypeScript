
        /* Generated Code Do Not Modify */
        



import { BufferedImage } from "../../../../../java/awt/image/BufferedImage.js";

    
import { RenderedImage } from "../../../../../java/awt/image/RenderedImage.js";

    
import { ImageIO } from "../../../../../javax/imageio/ImageIO.js";

    
import { AbFile } from "../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { AbFileNativeUtil } from "../../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js";

    

export class ImageIOUtil
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static read(file: AbFile): BufferedImage{
var file = file



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageIO.read(AbFileNativeUtil.get(file));
    
}


                //@Throws(Error::class)
            
    public static write(renderedImage: RenderedImage, name: string, file: AbFile): boolean{
var renderedImage = renderedImage
var name = name
var file = file



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageIO.write(renderedImage, name, AbFileNativeUtil.get(file));
    
}


}
                
            

