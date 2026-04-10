
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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

    
import { IOException } from "../../../../java/io/IOException.js";

    
import { ImageIO } from "../../../../javax/imageio/ImageIO.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CanvasExpandUtil } from "../../../../org/allbinary/media/image/CanvasExpandUtil.js";

    
import { CanvasTrimUtil } from "../../../../org/allbinary/media/image/CanvasTrimUtil.js";

    
import { ImageProcessedVisitor } from "../../../../org/allbinary/media/image/ImageProcessedVisitor.js";

    
import { ImageProcessorInput } from "../../../../org/allbinary/media/image/ImageProcessorInput.js";

    
import { ImageStrings } from "../../../../org/allbinary/media/image/ImageStrings.js";

    
import { CommonPhoneStrings } from "../../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class CanvasImageJPanel extends javax.swing.JPanel
                , ImageProcessedVisitor {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    private readonly imageStrings: ImageStrings = ImageStrings.getInstance()!;
        
        

    private imageProcessorInput: ImageProcessorInput

    private result: BufferedImage
public constructor (imageProcessorInput: ImageProcessorInput)                        

                            : super(){

            super();
                //var imageProcessorInput = imageProcessorInput


                            //For kotlin this is before the body of the constructor.
                    
initComponents()
this.imageProcessorInput= imageProcessorInput
}


    public process(){
start()
}


    initComponents(){
writeOverOriginalJCheckBox= javax.swing.JCheckBox()
jPanel1= object: javax.swing.JPanel()
                                {
                                
    public paint(graphics: Graphics){
var graphics = graphics

    
                        if(this@CanvasImageJPanel.result != 
                                    null
                                )
                        
                                    {
                                    drawImage(this@CanvasImageJPanel.result, 0, 0, this@CanvasImageJPanel.result.getWidth(
                            null), this@CanvasImageJPanel.result.getHeight(
                            null), 
                            null)

                                    }
                                
}

                                }
                            
generateJButton= javax.swing.JButton()
jLabel4= javax.swing.JLabel()
jPanel2= javax.swing.JPanel()
jLabel5= javax.swing.JLabel()
widthReductionTextField= javax.swing.JTextField()
jLabel6= javax.swing.JLabel()
heightReductionTextField= javax.swing.JTextField()
widthReductionTextField1= javax.swing.JTextField()
jLabel7= javax.swing.JLabel()
jLabel8= javax.swing.JLabel()
heightReductionTextField1= javax.swing.JTextField()
setSelected(true)
setText("Write Over Original")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
writeOverOriginalJCheckBoxActionPerformed(evt)
}

                                }
                            )

    var jPanel1Layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(jPanel1);
        
        

setLayout(jPanel1Layout)
setHorizontalGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 0, Short.MAX_VALUE))
setVerticalGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 196, Short.MAX_VALUE))
setText("Generate")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
generateJButtonActionPerformed(evt)
}

                                }
                            )
setText("Results:")
setText("Right:")
setText(CommonPhoneStrings.getInstance()!.ZERO)
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
widthReductionTextFieldActionPerformed(evt)
}

                                }
                            )
setText("Bottom")
setText(CommonPhoneStrings.getInstance()!.ZERO)
setText(CommonPhoneStrings.getInstance()!.ZERO)
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
widthReductionTextField1ActionPerformed(evt)
}

                                }
                            )
setText("Top")
setText("Left:")
setText(CommonPhoneStrings.getInstance()!.ZERO)

    var jPanel2Layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(jPanel2);
        
        

setLayout(jPanel2Layout)
setHorizontalGroup(jPanel2Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(jPanel2Layout!.createSequentialGroup()!.addContainerGap()!.addComponent(jLabel8)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(widthReductionTextField1, javax.swing.GroupLayout.PREFERRED_SIZE, 41, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel5)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(widthReductionTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 41, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel7)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(heightReductionTextField1, javax.swing.GroupLayout.PREFERRED_SIZE, 46, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel6)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(heightReductionTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 46, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap(140, Short.MAX_VALUE)))
setVerticalGroup(jPanel2Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel2Layout!.createSequentialGroup()!.addGap(0, 16, Short.MAX_VALUE)!.addGroup(jPanel2Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(jPanel2Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel6)!.addComponent(heightReductionTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addGroup(jPanel2Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel8)!.addComponent(widthReductionTextField1, javax.swing.GroupLayout.PREFERRED_SIZE, 22, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel7)!.addComponent(heightReductionTextField1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addGroup(jPanel2Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel5)!.addComponent(widthReductionTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 22, javax.swing.GroupLayout.PREFERRED_SIZE)))))

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        

this.setLayout(layout)
setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(jPanel2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addGap(78, 78, 78))!.addGroup(layout.createSequentialGroup()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))!.addGroup(layout.createSequentialGroup()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(jLabel4)!.addGroup(layout.createSequentialGroup()!.addComponent(writeOverOriginalJCheckBox)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(generateJButton)))!.addGap(0, 0, Short.MAX_VALUE)))!.addContainerGap()))
setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(jPanel2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(generateJButton)!.addComponent(writeOverOriginalJCheckBox))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel4)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
}


    writeOverOriginalJCheckBoxActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    generateJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.process()
}


    widthReductionTextFieldActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    widthReductionTextField1ActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    private generateJButton: javax.swing.JButton

    private heightReductionTextField: javax.swing.JTextField

    private heightReductionTextField1: javax.swing.JTextField

    private jLabel4: javax.swing.JLabel

    private jLabel5: javax.swing.JLabel

    private jLabel6: javax.swing.JLabel

    private jLabel7: javax.swing.JLabel

    private jLabel8: javax.swing.JLabel

    private jPanel1: javax.swing.JPanel

    private jPanel2: javax.swing.JPanel

    private widthReductionTextField: javax.swing.JTextField

    private widthReductionTextField1: javax.swing.JTextField

    private writeOverOriginalJCheckBox: javax.swing.JCheckBox

    public getImageProcessorInput(): ImageProcessorInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageProcessorInput;
    
}


    public setImageProcessorInput(imageProcessorInput: ImageProcessorInput){
var imageProcessorInput = imageProcessorInput
this.imageProcessorInput= imageProcessorInput
}


                @Throws(IOException::class)
            
    public visit(generatedBufferedImage: BufferedImage, name: string, index: number){
    //var generatedBufferedImage = generatedBufferedImage
    //var name = name
    //var index = index
put(commonStrings!.VISIT, this, commonStrings!.VISIT)
this.result= generatedBufferedImage
repaint()

    var file: File = imageProcessorInput!.getFiles()[index]!;
        
        


    
                        if(!this.writeOverOriginalJCheckBox!.isSelected())
                        
                                    {
                                    
    var filePath: string = file.getAbsolutePath()!;
        
        


    var extensionIndex: number = filePath!.indexOf(imageStrings!.PNG_EXTENSION)!;
        
        

filePath= StringBuilder().
                            append(filePath!.substring(0, extensionIndex))!.append(commonSeps!.UNDERSCORE)!.append(name)!.append(imageStrings!.PNG_EXTENSION)!.toString()
file= File(filePath)

                                    }
                                

    var isWritten: boolean = ImageIO.write(this@CanvasImageJPanel.result as RenderedImage, imageStrings!.PNG, file)!;
        
        

put(StringMaker().
                            append("File: ")!.append(StringUtil.getInstance()!.toString(file))!.append(" Wrote: ")!.appendboolean(isWritten)!.toString(), this, commonStrings!.RUN)
}


}
                
            

