
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

        


import { awt } from '../../../../java/awt.js';
      //not GWT import const awt = globalThis.java.awt;

      
import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
      //not GWT import const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
      //not GWT import const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JPanel } from './JPanel.js';
//not GWT import const  = globalThis.org.allbinary.image.gui.JPanel;

                import { Graphics } from './Graphics.js';
//not GWT import const  = globalThis.org.allbinary.image.gui.Graphics;

                import { GroupLayout } from './GroupLayout.js';
//not GWT import const  = globalThis.org.allbinary.image.gui.GroupLayout;

                import { Short } from './Short.js';
//not GWT import const  = globalThis.org.allbinary.image.gui.Short;

                
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



