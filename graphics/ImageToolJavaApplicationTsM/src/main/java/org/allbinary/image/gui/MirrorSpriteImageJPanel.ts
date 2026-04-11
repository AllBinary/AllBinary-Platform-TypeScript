
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

    
import { RenderedImage } from "../../../../java/awt/image/RenderedImage.js";

    
import { File } from "../../../../java/io/File.js";

    
import { ImageIO } from "../../../../javax/imageio/ImageIO.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BufferedImageUtil2 } from "../../../../org/allbinary/media/image/BufferedImageUtil2.js";

    
import { ImageProcessorInput } from "../../../../org/allbinary/media/image/ImageProcessorInput.js";

    
import { ImageProcessorInputCompositeInterface } from "../../../../org/allbinary/media/image/ImageProcessorInputCompositeInterface.js";

    
import { ImageStrings } from "../../../../org/allbinary/media/image/ImageStrings.js";

    
import { MirrorImageUtil } from "../../../../org/allbinary/media/image/MirrorImageUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class MirrorSpriteImageJPanel extends javax.swing.JPanel
                , ImageProcessorInputCompositeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly imageStrings: ImageStrings = ImageStrings.getInstance()!;
        
        

    private imageProcessorInput: ImageProcessorInput

    private result: BufferedImage
public constructor (imageProcessorInput: ImageProcessorInput)                        

                            : super(){

            super();
            var imageProcessorInput = imageProcessorInput


                            //For kotlin this is before the body of the constructor.
                    
logUtil!.put("Starting", this, this.commonStrings!.CONSTRUCTOR);
    
initComponents();
    
this.imageProcessorInput= imageProcessorInput;
    
}


    public process(){
object: Thread()
                                {
                                
    public run(){

        try {
            
    var generatedBufferedImageArray: BufferedImage[]
;
    

    var imageProcessorInput: ImageProcessorInput = this@MirrorSpriteImageJPanel.getImageProcessorInput()!;
        
        
;
    

    var bufferedImageArray: BufferedImage[] = imageProcessorInput!.getBufferedImageArray()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < bufferedImageArray!.length; index++)
        {
generatedBufferedImageArray= MirrorImageUtil.getInstance()!.getImages(bufferedImageArray[index]!, this@MirrorSpriteImageJPanel.verticleJCheckBox!.isSelected(), this@MirrorSpriteImageJPanel.horizontalJCheckBox!.isSelected());
    
this@MirrorSpriteImageJPanel.result= BufferedImageUtil2.getInstance()!.createSpriteImage(generatedBufferedImageArray);
    
this@MirrorSpriteImageJPanel.getParent()!.repaint();
    

    var file: File = imageProcessorInput!.getFiles()[index]!;
        
        
;
    

                        if(!this@MirrorSpriteImageJPanel.writeOverOriginalJCheckBox!.isSelected();

                        )
                        
                                    {
                                    
    var filePath: string = file.getAbsolutePath()!;
        
        
;
    

    var extensionIndex: number = filePath!.indexOf(imageStrings!.PNG_EXTENSION)!;
        
        
;
    
filePath= filePath!.substring(0, extensionIndex) +"_mirror" +imageStrings!.PNG_EXTENSION;
    
logUtil!.put("Renamed File: " +filePath, this, commonStrings!.RUN);
    
file= File(filePath);
    

                                    }
                                

    var isWritten: boolean = ImageIO.write(this@MirrorSpriteImageJPanel.result as RenderedImage, imageStrings!.PNG, file)!;
        
        
;
    
logUtil!.put("File: " +file +" Wrote: " +isWritten, this, commonStrings!.RUN);
    
}


                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}

                                }
                            .
                            start();
    
}


    initComponents(){
jLayeredPane1= javax.swing.JLayeredPane();
    
jPanel1= object: javax.swing.JPanel()
                                {
                                
    public paint(graphics: Graphics){
var graphics = graphics

                        if(this@MirrorSpriteImageJPanel.result != 
                                    null
                                )
                        
                                    {
                                    graphics.drawImage(this@MirrorSpriteImageJPanel.result, 0, 0, this@MirrorSpriteImageJPanel.result.getWidth(
                            null), this@MirrorSpriteImageJPanel.result.getHeight(
                            null), 
                            null);
    

                                    }
                                
}

                                }
                            ;
    
jPanel2= javax.swing.JPanel();
    
imageHeightIsFrameSizeJCheckBox= javax.swing.JCheckBox();
    
horizontalJCheckBox= javax.swing.JCheckBox();
    
verticleJCheckBox= javax.swing.JCheckBox();
    
writeOverOriginalJCheckBox= javax.swing.JCheckBox();
    
generateJButton= javax.swing.JButton();
    
jPanel3= javax.swing.JPanel();
    
jLabel2= javax.swing.JLabel();
    

    var jPanel1Layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(jPanel1);
        
        
;
    
jPanel1!.setLayout(jPanel1Layout);
    
jPanel1Layout!.setHorizontalGroup(jPanel1Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(0, 507, Short.MAX_VALUE));
    
jPanel1Layout!.setVerticalGroup(jPanel1Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(0, 230, Short.MAX_VALUE));
    
imageHeightIsFrameSizeJCheckBox!.setSelected(true);
    
imageHeightIsFrameSizeJCheckBox!.setText("Image Height Is Frame Size");
    
imageHeightIsFrameSizeJCheckBox!.setEnabled(false);
    
imageHeightIsFrameSizeJCheckBox!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
imageHeightIsFrameSizeJCheckBoxActionPerformed(evt);
    
}

                                }
                            );
    
horizontalJCheckBox!.setSelected(true);
    
horizontalJCheckBox!.setText("Horizontal");
    
horizontalJCheckBox!.setEnabled(false);
    
verticleJCheckBox!.setText("Verticle");
    
verticleJCheckBox!.setEnabled(false);
    
writeOverOriginalJCheckBox!.setText("Write Over Original");
    
generateJButton!.setText("Generate");
    
generateJButton!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
generateJButtonActionPerformed(evt);
    
}

                                }
                            );
    

    var jPanel2Layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(jPanel2);
        
        
;
    
jPanel2!.setLayout(jPanel2Layout);
    
jPanel2Layout!.setHorizontalGroup(jPanel2Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(jPanel2Layout!.createSequentialGroup()!.addContainerGap(org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.add(verticleJCheckBox)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.UNRELATED)!.add(horizontalJCheckBox)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(imageHeightIsFrameSizeJCheckBox)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(writeOverOriginalJCheckBox)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(generateJButton)));
    
jPanel2Layout!.setVerticalGroup(jPanel2Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(jPanel2Layout!.createSequentialGroup()!.add(jPanel2Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.BASELINE)!.add(imageHeightIsFrameSizeJCheckBox, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.add(horizontalJCheckBox)!.add(verticleJCheckBox)!.add(writeOverOriginalJCheckBox)!.add(generateJButton, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, 25, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE))!.addContainerGap()));
    
jLabel2!.setText("Results:");
    

    var jPanel3Layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(jPanel3);
        
        
;
    
jPanel3!.setLayout(jPanel3Layout);
    
jPanel3Layout!.setHorizontalGroup(jPanel3Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(jPanel3Layout!.createSequentialGroup()!.add(jLabel2)!.addContainerGap(448, Short.MAX_VALUE)));
    
jPanel3Layout!.setVerticalGroup(jPanel3Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(jLabel2));
    

    var layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(this);
        
        
;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(org.jdesktop.layout.GroupLayout.TRAILING, layout.createSequentialGroup()!.addContainerGap()!.add(jPanel3, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addContainerGap())!.add(jPanel1, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.add(layout.createSequentialGroup()!.add(jPanel2, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addContainerGap(org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
layout.setVerticalGroup(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(layout.createSequentialGroup()!.add(jPanel2, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, 25, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(jPanel3, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(jPanel1, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
}


    generateJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.process();
    
}


    imageHeightIsFrameSizeJCheckBoxActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    private generateJButton: javax.swing.JButton

    private horizontalJCheckBox: javax.swing.JCheckBox

    private imageHeightIsFrameSizeJCheckBox: javax.swing.JCheckBox

    private jLabel2: javax.swing.JLabel

    private jLayeredPane1: javax.swing.JLayeredPane

    private jPanel1: javax.swing.JPanel

    private jPanel2: javax.swing.JPanel

    private jPanel3: javax.swing.JPanel

    private verticleJCheckBox: javax.swing.JCheckBox

    private writeOverOriginalJCheckBox: javax.swing.JCheckBox

    public getImageProcessorInput(): ImageProcessorInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageProcessorInput;
    
}


    public setImageProcessorInput(imageProcessorInput: ImageProcessorInput){
var imageProcessorInput = imageProcessorInput
this.imageProcessorInput= imageProcessorInput;
    
}


}
                
            

