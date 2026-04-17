
        /*
                *  
                *  To change this license header, choose License Headers in Project Properties. 
                *  To change this template file, choose Tools | Templates  and open the template in the editor.  
        */
        
        /* Generated Code Do Not Modify */
        



import { BufferedImage } from "../../../../java/awt/image/BufferedImage.js";

    
import { File } from "../../../../java/io/File.js";

    
import { IOException } from "../../../../java/io/IOException.js";

    
import { Iterator } from "../../../../java/util/Iterator.js";

    
import { IIOImage } from "../../../../javax/imageio/IIOImage.js";

    
import { ImageIO } from "../../../../javax/imageio/ImageIO.js";

    
import { ImageWriteParam } from "../../../../javax/imageio/ImageWriteParam.js";

    
import { ImageWriter } from "../../../../javax/imageio/ImageWriter.js";

    
import { ImageOutputStream } from "../../../../javax/imageio/stream/ImageOutputStream.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbFileOutputStream } from "../../../../org/allbinary/logic/io/AbFileOutputStream.js";

    
import { StreamUtil } from "../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { PNGImageWriter } from "../../../../org/apache/batik/ext/awt/image/codec/png/PNGImageWriter.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImagePersistanceUtil
            extends Object
         {
        

    private static readonly instance: ImagePersistanceUtil = new ImagePersistanceUtil();
        
        

    public static getInstance(): ImagePersistanceUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public saveWithBatik(file: AbFile, bufferedImage: BufferedImage){
var file = file
var bufferedImage = bufferedImage

    var batikPNGImageWriter: PNGImageWriter = new PNGImageWriter();
        
        
;
    

    var fileOutputStream: AbFileOutputStream = new AbFileOutputStream(file);
        
        
;
    

        try {
            batikPNGImageWriter!.writeImage(bufferedImage, fileOutputStream);
    

         finally {
            fileOutputStream!.flush();
    
StreamUtil.getInstance()!.close(fileOutputStream);
    

         }
        
this.logUtil!.putF("Wrote Image: " +file.getAbsolutePath(), this, commonStrings!.SAVE);
    
}


    public saveWithImageIO(filePath: string, bufferedImage: BufferedImage){
var filePath = filePath
var bufferedImage = bufferedImage
saveWithImageIO(new File(filePath), bufferedImage);
    
}


    public saveWithImageIO(file: File, bufferedImage: BufferedImage){
var file = file
var bufferedImage = bufferedImage

    var writer: ImageWriter = 
                null
            ;
        
        
;
    

    var ios: ImageOutputStream = 
                null
            ;
        
        
;
    

        try {
            
    var iter: Iterator = ImageIO.getImageWritersByFormatName("jpeg")!;
        
        
;
    

                        if(!iter.hasNext();

                        )
                        
                                    {
                                    this.logUtil!.putF("Unable to save image to jpeg file type.", this, commonStrings!.SAVE);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
writer= iter.next();

                         as ImageWriter;
    
ios= ImageIO.createImageOutputStream(file);
    
writer.setOutput(ios);
    

    var iwp: ImageWriteParam = writer.getDefaultWriteParam()!;
        
        
;
    
iwp.setCompressionMode(ImageWriteParam.MODE_EXPLICIT);
    
iwp.setCompressionQuality(0.95f);
    
writer.write(
                            null, new IIOImage(bufferedImage, 
                            null, 
                            null), iwp);
    
this.logUtil!.putF("Wrote Image: " +file.getAbsolutePath(), this, commonStrings!.SAVE);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.SAVE, e);
    
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
                                    this.logUtil!.putF(ios.toString(), ios, commonStrings!.CLOSE);
    
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
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, commonStrings!.SAVE, e2);
    
}


         }
        
}


}
                
            

