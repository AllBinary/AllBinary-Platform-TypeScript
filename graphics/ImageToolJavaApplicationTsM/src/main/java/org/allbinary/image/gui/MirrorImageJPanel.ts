
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

    
import { ImageProcessorInput } from "../../../../org/allbinary/media/image/ImageProcessorInput.js";

    
import { ImageProcessorInputCompositeInterface } from "../../../../org/allbinary/media/image/ImageProcessorInputCompositeInterface.js";

    
import { ImageStrings } from "../../../../org/allbinary/media/image/ImageStrings.js";

    
import { MirrorImageUtil } from "../../../../org/allbinary/media/image/MirrorImageUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class MirrorImageJPanel extends javax.swing.JPanel
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
                    
logUtil!.put("Starting", this, this.commonStrings!.CONSTRUCTOR)
initComponents()
this.imageProcessorInput= imageProcessorInput
}


    public process(){
object: Thread()
                                {
                                
    public run(){

        try {
            
    var imageProcessorInput: ImageProcessorInput = this@MirrorImageJPanel.getImageProcessorInput()!;
        
        


    var bufferedImageArray: BufferedImage[] = imageProcessorInput!.getBufferedImageArray()!;
        
        





                        for (
    var index: number = 0;
        
        
index < bufferedImageArray!.length; index++)
        {
this@MirrorImageJPanel.result= MirrorImageUtil.getInstance()!.getImage(bufferedImageArray[index]!, this@MirrorImageJPanel.verticleJCheckBox!.isSelected(), this@MirrorImageJPanel.horizontalJCheckBox!.isSelected())

    var file: File = imageProcessorInput!.getFiles()[index]!;
        
        


                        if(this@MirrorImageJPanel.writeOverOriginalJRadioButton!.isSelected())
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(this@MirrorImageJPanel.renameJRadioButton!.isSelected())
                        
                                    {
                                    
    var filePath: string = file.getAbsolutePath()!;
        
        


    var extensionIndex: number = filePath!.indexOf(imageStrings!.PNG_EXTENSION)!;
        
        

filePath= filePath!.substring(0, extensionIndex) +"_mirror" +imageStrings!.PNG_EXTENSION
logUtil!.put("Renamed File: " +filePath, this, commonStrings!.RUN)
file= File(filePath)

                                    }
                                

    var isWritten: boolean = ImageIO.write(this@MirrorImageJPanel.result as RenderedImage, imageStrings!.PNG, file)!;
        
        

logUtil!.put("File: " +file +" Wrote: " +isWritten, this, commonStrings!.RUN)
this@MirrorImageJPanel.getParent()!.repaint()
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
jLayeredPane1= javax.swing.JLayeredPane()
buttonGroup= javax.swing.ButtonGroup()
jPanel1= object: javax.swing.JPanel()
                                {
                                
    public paint(graphics: Graphics){
var graphics = graphics

                        if(this@MirrorImageJPanel.result != 
                                    null
                                )
                        
                                    {
                                    graphics.drawImage(this@MirrorImageJPanel.result, 0, 0, this@MirrorImageJPanel.result.getWidth(
                            null), this@MirrorImageJPanel.result.getHeight(
                            null), 
                            null)

                                    }
                                
}

                                }
                            
jPanel2= javax.swing.JPanel()
horizontalJCheckBox= javax.swing.JCheckBox()
verticleJCheckBox= javax.swing.JCheckBox()
generateJButton= javax.swing.JButton()
renameJRadioButton= javax.swing.JRadioButton()
writeOverOriginalJRadioButton= javax.swing.JRadioButton()
jPanel3= javax.swing.JPanel()
jLabel2= javax.swing.JLabel()

    var jPanel1Layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(jPanel1);
        
        

jPanel1!.setLayout(jPanel1Layout)
jPanel1Layout!.setHorizontalGroup(jPanel1Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(0, 522, Short.MAX_VALUE))
jPanel1Layout!.setVerticalGroup(jPanel1Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(0, 230, Short.MAX_VALUE))
horizontalJCheckBox!.setSelected(true)
horizontalJCheckBox!.setText("Horizontal")
horizontalJCheckBox!.setEnabled(false)
verticleJCheckBox!.setText("Verticle")
verticleJCheckBox!.setEnabled(false)
generateJButton!.setText("Generate")
generateJButton!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
generateJButtonActionPerformed(evt)
}

                                }
                            )
renameJRadioButton!.setText("Save As filename_mirror")
renameJRadioButton!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
renameJRadioButtonActionPerformed(evt)
}

                                }
                            )
writeOverOriginalJRadioButton!.setText("Write Over Original")

    var jPanel2Layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(jPanel2);
        
        

jPanel2!.setLayout(jPanel2Layout)
jPanel2Layout!.setHorizontalGroup(jPanel2Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(jPanel2Layout!.createSequentialGroup()!.addContainerGap(org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.add(verticleJCheckBox)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.UNRELATED)!.add(horizontalJCheckBox)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(writeOverOriginalJRadioButton)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.UNRELATED)!.add(renameJRadioButton)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(generateJButton)!.add(37, 37, 37)))
jPanel2Layout!.setVerticalGroup(jPanel2Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(jPanel2Layout!.createSequentialGroup()!.add(jPanel2Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.BASELINE)!.add(horizontalJCheckBox)!.add(verticleJCheckBox)!.add(writeOverOriginalJRadioButton)!.add(renameJRadioButton)!.add(generateJButton))!.addContainerGap()))
jLabel2!.setText("Results:")

    var jPanel3Layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(jPanel3);
        
        

jPanel3!.setLayout(jPanel3Layout)
jPanel3Layout!.setHorizontalGroup(jPanel3Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(jPanel3Layout!.createSequentialGroup()!.add(jLabel2)!.addContainerGap(433, Short.MAX_VALUE)))
jPanel3Layout!.setVerticalGroup(jPanel3Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(jLabel2))

    var layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(this);
        
        

this.this.setLayout(layout)
layout.setHorizontalGroup(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(org.jdesktop.layout.GroupLayout.TRAILING, layout.createSequentialGroup()!.addContainerGap()!.add(jPanel3, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addContainerGap())!.add(jPanel1, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.add(layout.createSequentialGroup()!.add(jPanel2, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addContainerGap(org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
layout.setVerticalGroup(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(layout.createSequentialGroup()!.add(jPanel2, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, 25, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(jPanel3, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(jPanel1, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
}


    generateJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.this.process()
}


    renameJRadioButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    private buttonGroup: javax.swing.ButtonGroup

    private generateJButton: javax.swing.JButton

    private horizontalJCheckBox: javax.swing.JCheckBox

    private jLabel2: javax.swing.JLabel

    private jLayeredPane1: javax.swing.JLayeredPane

    private jPanel1: javax.swing.JPanel

    private jPanel2: javax.swing.JPanel

    private jPanel3: javax.swing.JPanel

    private renameJRadioButton: javax.swing.JRadioButton

    private verticleJCheckBox: javax.swing.JCheckBox

    private writeOverOriginalJRadioButton: javax.swing.JRadioButton

    public getImageProcessorInput(): ImageProcessorInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageProcessorInput;
    
}


    public setImageProcessorInput(imageProcessorInput: ImageProcessorInput){
var imageProcessorInput = imageProcessorInput
this.imageProcessorInput= imageProcessorInput
}


}
                
            

