
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

    
import { CanvasStrings } from "../../../../org/allbinary/graphics/displayable/CanvasStrings.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class ImageJPanel extends javax.swing.JPanel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;
        
        

    private isDrawn: boolean = false;
        
        

    private bufferedImage: BufferedImage
public constructor (bufferedImage: BufferedImage){

            super();
            var bufferedImage = bufferedImage
initComponents()
this.bufferedImage= bufferedImage
this.this.setSize(this.bufferedImage!.getWidth(
                            null), this.bufferedImage!.getHeight(
                            null))
}


    public paint(graphics: Graphics){
var graphics = graphics

                        if(!isDrawn)
                        
                                    {
                                    logUtil!.put(commonStrings!.START, this, canvasStrings!.PAINT)
graphics.drawImage(bufferedImage, 0, 0, this.bufferedImage!.getWidth(
                            null), this.bufferedImage!.getHeight(
                            null), 
                            null)
isDrawn= true

                                    }
                                
}


    initComponents(){

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        

this.this.setLayout(layout)
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 400, Short.MAX_VALUE))
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 300, Short.MAX_VALUE))
}


}
                
            

