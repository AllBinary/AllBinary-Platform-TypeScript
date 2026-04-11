
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
        



import { awt } from "../../../../java/awt.js";

    
import { BufferedImage } from "../../../../java/awt/image/BufferedImage.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    

export class ImageUnifierUtil
            extends Object
         {
        

    private static readonly instance: ImageUnifierUtil = new ImageUnifierUtil();
        
        

    public static getInstance(): ImageUnifierUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly imageUtil: ImageUtil = ImageUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


    public getDefaultConfiguration(): GraphicsConfiguration{

    var ge: GraphicsEnvironment = GraphicsEnvironment.getLocalGraphicsEnvironment()!;
        
        
;
    

    var gd: GraphicsDevice = ge.getDefaultScreenDevice()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gd.getDefaultConfiguration();

                        ;
    
}


    public getImage(bufferedImageArray: BufferedImage[], imageUnifierProperties: ImageUnifierProperties): BufferedImage{
var bufferedImageArray = bufferedImageArray
var imageUnifierProperties = imageUnifierProperties

    var newBufferedImage: BufferedImage = this.imageUtil!.create(imageUnifierProperties!.getWidth(), imageUnifierProperties!.getHeight())!;
        
        
;
    

    var commonLabels: CommonLabels = CommonLabels.getInstance()!;
        
        
;
    
logUtil!.put("Setting Image - " +commonLabels!.WIDTH_LABEL +newBufferedImage!.getWidth() +commonLabels!.HEIGHT_LABEL +newBufferedImage!.getHeight(), this, "getImage");
    

    var g: Graphics2D = newBufferedImage!.createGraphics()!;
        
        
;
    

    var columnIndex: number = 0;
        
        
;
    

    var rowIndex: number = 0;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < bufferedImageArray!.length; index++)
        {

    var x: number = imageUnifierProperties!.getImageUnifierCell()!.getWidth()!.toInt() *columnIndex++;
        
        
;
    

    var y: number = imageUnifierProperties!.getImageUnifierCell()!.getHeight()!.toInt() *rowIndex;
        
        
;
    
logUtil!.put("Adding Image: " +index +" x: " +x +" y: " +y, this, "getImage");
    
g.drawImage(bufferedImageArray[index]!, x, y, imageUnifierProperties!.getImageUnifierCell()!.getWidth()!.toInt(), imageUnifierProperties!.getImageUnifierCell()!.getHeight()!.toInt(), 
                            null);
    

    var totalColumnsMinusOne: number = (imageUnifierProperties!.getColumns()!.toInt() -1);
        
        
;
    

                        if(columnIndex > totalColumnsMinusOne)
                        
                                    {
                                    rowIndex++;
    
columnIndex= 0;
    

                                    }
                                
}

g.dispose();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newBufferedImage;
    
}


}
                
            

