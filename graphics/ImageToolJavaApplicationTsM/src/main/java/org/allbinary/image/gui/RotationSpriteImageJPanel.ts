
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

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { ImageJ2SERotationUtil } from "../../../../org/allbinary/media/image/ImageJ2SERotationUtil.js";

    
import { ImageProcessorInput } from "../../../../org/allbinary/media/image/ImageProcessorInput.js";

    
import { ImageProcessorInputCompositeInterface } from "../../../../org/allbinary/media/image/ImageProcessorInputCompositeInterface.js";

    
import { ImageStrings } from "../../../../org/allbinary/media/image/ImageStrings.js";

    
import { CommonPhoneStrings } from "../../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class RotationSpriteImageJPanel extends javax.swing.JPanel
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
                    
initComponents()
this.imageProcessorInput= imageProcessorInput
}


    public process(){
object: Thread()
                                {
                                
    public run(){

        try {
            
    var generatedBufferedImageArray: BufferedImage[]


    var imageProcessorInput: ImageProcessorInput = this@RotationSpriteImageJPanel.getImageProcessorInput()!;
        
        


    var bufferedImageArray: BufferedImage[] = imageProcessorInput!.getBufferedImageArray()!;
        
        





                        for (
    var index: number = 0;
        
        
index < bufferedImageArray!.length; index++)
        {

    var totalFrames: Integer = Integer(Integer.valueOf(this@RotationSpriteImageJPanel.totalFramesJComboBox!.getSelectedItem() as String))!;
        
        


    var totalAngle: Integer = Integer(Integer.valueOf(this@RotationSpriteImageJPanel.totalAngleJComboBox!.getSelectedItem() as String))!;
        
        

generatedBufferedImageArray= ImageJ2SERotationUtil.getInstance()!.getRotatedImages(bufferedImageArray[index]!, totalFrames, totalAngle)
this@RotationSpriteImageJPanel.result= ImageJ2SERotationUtil.getInstance()!.createSpriteImage(generatedBufferedImageArray)
this@RotationSpriteImageJPanel.getParent()!.repaint()

    var file: File = imageProcessorInput!.getFiles()[index]!;
        
        


                        if(!this@RotationSpriteImageJPanel.writeOverOriginalJCheckBox!.isSelected())
                        
                                    {
                                    
    var filePath: string = file.getAbsolutePath()!;
        
        


    var extensionIndex: number = filePath!.indexOf(imageStrings!.PNG_EXTENSION)!;
        
        

filePath= StringMaker().
                            append(filePath!.substring(0, extensionIndex))!.append(CommonSeps.getInstance()!.UNDERSCORE)!.append("sprite")!.append(imageStrings!.PNG_EXTENSION)!.toString()
logUtil!.put("New File Path: " +filePath, this, commonStrings!.RUN)
file= File(filePath)

                                    }
                                

    var isWritten: boolean = ImageIO.write(this@RotationSpriteImageJPanel.result as RenderedImage, imageStrings!.PNG, file)!;
        
        

logUtil!.put("File: " +file +" Wrote: " +isWritten, this, commonStrings!.RUN)
}

} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e)
}

}

                                }
                            .
                            start()
}


    initComponents(){
jPanel1= object: javax.swing.JPanel()
                                {
                                
    public paint(graphics: Graphics){
var graphics = graphics

                        if(this@RotationSpriteImageJPanel.result != 
                                    null
                                )
                        
                                    {
                                    graphics.drawImage(this@RotationSpriteImageJPanel.result, 0, 0, this@RotationSpriteImageJPanel.result.getWidth(
                            null), this@RotationSpriteImageJPanel.result.getHeight(
                            null), 
                            null)

                                    }
                                
}

                                }
                            
jPanel2= javax.swing.JPanel()
totalFramesJComboBox= javax.swing.JComboBox()
jLabel1= javax.swing.JLabel()
generateJButton= javax.swing.JButton()
totalAngleJComboBox= javax.swing.JComboBox()
jLabel3= javax.swing.JLabel()
writeOverOriginalJCheckBox= javax.swing.JCheckBox()
jPanel3= javax.swing.JPanel()
jLabel2= javax.swing.JLabel()

    var jPanel1Layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(jPanel1);
        
        

jPanel1!.setLayout(jPanel1Layout)
jPanel1Layout!.setHorizontalGroup(jPanel1Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(0, 436, Short.MAX_VALUE))
jPanel1Layout!.setVerticalGroup(jPanel1Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(0, 227, Short.MAX_VALUE))
totalFramesJComboBox!.setModel(javax.swing.DefaultComboBoxModel(
                                                [
                                                    CommonPhoneStrings.getInstance()!.FOUR,CommonPhoneStrings.getInstance()!.NINE,"18","20","36";
        
        
                                                ]))
jLabel1!.setText("Total Frames:")
generateJButton!.setText("Generate")
generateJButton!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
generateJButtonActionPerformed(evt)
}

                                }
                            )
totalAngleJComboBox!.setModel(javax.swing.DefaultComboBoxModel(
                                                [
                                                    "360","90";
        
        
                                                ]))
totalAngleJComboBox!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
totalAngleJComboBoxActionPerformed(evt)
}

                                }
                            )
jLabel3!.setText("Total Angle:")
writeOverOriginalJCheckBox!.setText("Write Over Original")

    var jPanel2Layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(jPanel2);
        
        

jPanel2!.setLayout(jPanel2Layout)
jPanel2Layout!.setHorizontalGroup(jPanel2Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(jPanel2Layout!.createSequentialGroup()!.add(8, 8, 8)!.add(jLabel1)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(totalFramesJComboBox, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(jLabel3)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(totalAngleJComboBox, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(writeOverOriginalJCheckBox)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(generateJButton)!.addContainerGap(org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
jPanel2Layout!.setVerticalGroup(jPanel2Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(jPanel2Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.BASELINE)!.add(jLabel1)!.add(totalFramesJComboBox, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.add(generateJButton)!.add(totalAngleJComboBox, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.add(jLabel3)!.add(writeOverOriginalJCheckBox)))
jLabel2!.setText("Results:")

    var jPanel3Layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(jPanel3);
        
        

jPanel3!.setLayout(jPanel3Layout)
jPanel3Layout!.setHorizontalGroup(jPanel3Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(jPanel3Layout!.createSequentialGroup()!.add(jLabel2)!.addContainerGap(377, Short.MAX_VALUE)))
jPanel3Layout!.setVerticalGroup(jPanel3Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(jLabel2))

    var layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(this);
        
        

this.this.setLayout(layout)
layout.setHorizontalGroup(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(org.jdesktop.layout.GroupLayout.TRAILING, jPanel2, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.add(layout.createSequentialGroup()!.addContainerGap()!.add(jPanel3, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addContainerGap())!.add(jPanel1, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
layout.setVerticalGroup(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(layout.createSequentialGroup()!.add(jPanel2, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.UNRELATED)!.add(jPanel3, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(jPanel1, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
}


    generateJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.this.process()
}


    totalAngleJComboBoxActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    private generateJButton: javax.swing.JButton

    private jLabel1: javax.swing.JLabel

    private jLabel2: javax.swing.JLabel

    private jLabel3: javax.swing.JLabel

    private jPanel1: javax.swing.JPanel

    private jPanel2: javax.swing.JPanel

    private jPanel3: javax.swing.JPanel

    private totalAngleJComboBox: javax.swing.JComboBox

    private totalFramesJComboBox: javax.swing.JComboBox

    private writeOverOriginalJCheckBox: javax.swing.JCheckBox

    public getImageProcessorInput(): ImageProcessorInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageProcessorInput;
    
}


    public setImageProcessorInput(imageProcessorInput: ImageProcessorInput){
var imageProcessorInput = imageProcessorInput
this.imageProcessorInput= imageProcessorInput
}


}
                
            

