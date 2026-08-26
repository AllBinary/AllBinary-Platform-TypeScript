
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
        



//not game specific package import { awt } from '../../../../java/awt.js';
      const awt = globalThis.java.awt;

      
//not game specific package import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
      const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
//not game specific package import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
      const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JPanel } from './JPanel.js';
import { Graphics } from './Graphics.js';
import { GroupLayout } from './GroupLayout.js';
import { Short } from './Short.js';

export class ImageJPanel extends javax.swing.JPanel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;

    private isDrawn: boolean = false;

    private bufferedImage: BufferedImage;

public constructor (bufferedImage: BufferedImage){

            super();
        this.initComponents();
    
this.bufferedImage= bufferedImage;
    
this.setSize(this.bufferedImage!.getWidth(
                            null), this.bufferedImage!.getHeight(
                            null));
    
}


    public paint(graphics: Graphics){

                        if(!this.isDrawn)
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.canvasStrings!.PAINT);
    
graphics.drawImage(bufferedImage, 0, 0, this.bufferedImage!.getWidth(
                            null), this.bufferedImage!.getHeight(
                            null), 
                            null);
    
this.isDrawn= true;
    

                                    }
                                
}


    initComponents(){

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 400, Short.MAX_VALUE));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 300, Short.MAX_VALUE));
    
}


}
                
            

