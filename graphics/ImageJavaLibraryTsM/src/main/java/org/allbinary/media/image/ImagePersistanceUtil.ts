
        /*
                *  
                *  To change this license header, choose License Headers in Project Properties. 
                *  To change this template file, choose Tools | Templates  and open the template in the editor.  
        */
        
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
import { File } from '../../../../java/io/File.js';
//not GWT import const File = globalThis.java.io.File;

      
import { IOException } from '../../../../java/io/IOException.js';
//not GWT import const IOException = globalThis.java.io.IOException;

      
import { Iterator } from '../../../../java/util/Iterator.js';
//not GWT import const Iterator = globalThis.java.util.Iterator;

      
import { IIOImage } from '../../../../javax/imageio/IIOImage.js';
//not GWT import const IIOImage = globalThis.javax.imageio.IIOImage;

      
import { ImageIO } from '../../../../javax/imageio/ImageIO.js';
//not GWT import const ImageIO = globalThis.javax.imageio.ImageIO;

      
import { ImageWriteParam } from '../../../../javax/imageio/ImageWriteParam.js';
//not GWT import const ImageWriteParam = globalThis.javax.imageio.ImageWriteParam;

      
import { ImageWriter } from '../../../../javax/imageio/ImageWriter.js';
//not GWT import const ImageWriter = globalThis.javax.imageio.ImageWriter;

      
import { ImageOutputStream } from '../../../../javax/imageio/stream/ImageOutputStream.js';
//not GWT import const ImageOutputStream = globalThis.javax.imageio.stream.ImageOutputStream;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbFileOutputStream } from '../../../../org/allbinary/logic/io/AbFileOutputStream.js';
//not GWT import const AbFileOutputStream = globalThis.org.allbinary.logic.io.AbFileOutputStream;

      
import { StreamUtil } from '../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;

      
import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { PNGImageWriter } from '../../../../org/apache/batik/ext/awt/image/codec/png/PNGImageWriter.js';
//not GWT import const PNGImageWriter = globalThis.org.apache.batik.ext.awt.image.codec.png.PNGImageWriter;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImagePersistanceUtil
            extends Object
         {
        

    private static readonly instance: ImagePersistanceUtil = new ImagePersistanceUtil();

    public static getInstance(): ImagePersistanceUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImagePersistanceUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

                //@Throws(Exception.constructor)
            
    public saveWithBatik(file: AbFile, bufferedImage: BufferedImage){

    var batikPNGImageWriter: PNGImageWriter = new PNGImageWriter();;
    

    var fileOutputStream: AbFileOutputStream = AbFileOutputStream.createFromAbFile(file)!;;
    

        try {
            batikPNGImageWriter!.writeImage(bufferedImage, fileOutputStream);
    

         finally {
            fileOutputStream!.flush();
    
StreamUtil.getInstance()!.close(fileOutputStream);
    

         }
        
this.logUtil!.putF("Wrote Image: " +file.getAbsolutePath(), this, this.commonStrings!.SAVE);
    
}


    public saveWithImageIO(filePath: string, bufferedImage: BufferedImage){
this.saveWithImageIO(new File(filePath), bufferedImage);
    
}


    public saveWithImageIO(file: File, bufferedImage: BufferedImage){

    var writer: ImageWriter = 
                null
            ;;
    

    var ios: ImageOutputStream = 
                null
            ;;
    

        try {
            
    var iter: Iterator = ImageIO.getImageWritersByFormatName("jpeg")!;;
    

                        if(!iter.hasNext())
                        
                                    {
                                    this.logUtil!.putF("Unable to save image to jpeg file type.", this, this.commonStrings!.SAVE);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
writer= iter.next() as ImageWriter;
    
ios= ImageIO.createImageOutputStream(file);
    
writer.setOutput(ios);
    

    var iwp: ImageWriteParam = writer.getDefaultWriteParam()!;;
    
iwp.setCompressionMode(ImageWriteParam.MODE_EXPLICIT);
    
iwp.setCompressionQuality(0.95);
    
writer.write(
                            null, new IIOImage(bufferedImage, 
                            null, 
                            null), iwp);
    
this.logUtil!.putF("Wrote Image: " +file.getAbsolutePath(), this, this.commonStrings!.SAVE);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.SAVE, e);
    
}

         finally {
            
        try {
            
                        if(ios != 
                                    null
                                )
                        
                                    {
                                    ios.flush();
    

        try {
            
                        if(ios != 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.putF(ios.toString(), ios, this.commonStrings!.CLOSE);
    
ios.close();
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, ios, commonStrings!.CLOSE, e);
    
}


                                    }
                                

                        if(writer != 
                                    null
                                )
                        
                                    {
                                    writer.dispose();
    

                                    }
                                

                //: 
} catch(e2) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.SAVE, e2);
    
}


         }
        
}


}



