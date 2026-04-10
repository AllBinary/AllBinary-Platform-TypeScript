
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
        



import { BufferedImage } from "../../../../java/awt/image/BufferedImage.js";

    
import { Raster } from "../../../../java/awt/image/Raster.js";

    
import { File } from "../../../../java/io/File.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { FileWrapperUtil } from "../../../../org/allbinary/logic/io/file/FileWrapperUtil.js";

    
import { ImagePersistanceUtil } from "../../../../org/allbinary/media/image/ImagePersistanceUtil.js";

    
import { ImageProcessorInput } from "../../../../org/allbinary/media/image/ImageProcessorInput.js";

    
import { ImageProcessorInputCompositeInterface } from "../../../../org/allbinary/media/image/ImageProcessorInputCompositeInterface.js";

    
import { ImageUtil } from "../../../../org/allbinary/media/image/ImageUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class ResizeImageJPanel extends javax.swing.JPanel
                , ImageProcessorInputCompositeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private imageProcessorInput: ImageProcessorInput
public constructor (imageProcessorInput: ImageProcessorInput)                        

                            : super(){

            super();
                //var imageProcessorInput = imageProcessorInput


                            //For kotlin this is before the body of the constructor.
                    
initComponents()
this.imageProcessorInput= imageProcessorInput

    var numberStringArray: string[] = new Array(101);
        
        

numberStringArray[0]= Integer.toString( -1)




                        for (
    var index: number = 1;
        
        
index < 100; index++)
        {
numberStringArray[index]= index.toString()
}

setModel(javax.swing.DefaultComboBoxModel(numberStringArray))

    var araster: Raster = this.imageProcessorInput!.getBufferedImageArray()[0]!.getAlphaRaster()!;
        
        


    
                        if(araster == 
                                    null
                                )
                        
                                    {
                                    println("there is no Alpha channel!!!!!!!!!")

                                    }
                                
                        else {
                            println("Alpha channel found !")

                        }
                            
}


    public process(){
start()
}


    public update(){
start()
}


    public updateFor16Above(){
start()
}


    public updateFor16Below(){
start()
}


    public getImageProcessorInput(): ImageProcessorInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageProcessorInput;
    
}


    public setImageProcessorInput(imageProcessorInput: ImageProcessorInput){
var imageProcessorInput = imageProcessorInput
this.imageProcessorInput= imageProcessorInput
}


    initComponents(){
jLabel1= javax.swing.JLabel()
jComboBox1= javax.swing.JComboBox<>()
aboveJButton= javax.swing.JButton()
jTextField1= javax.swing.JTextField()
jLabel2= javax.swing.JLabel()
jLabel3= javax.swing.JLabel()
jTextField2= javax.swing.JTextField()
updateJButton= javax.swing.JButton()
floatPercentJTextField= javax.swing.JTextField()
adjustFor16AboveJButton= javax.swing.JButton()
adjustFor16BelowJButton= javax.swing.JButton()
setText("Percent:")
setModel(javax.swing.DefaultComboBoxModel<>(
                                                [
                                                    "Item 1","Item 2","Item 3","Item 4";
        
        
                                                ]))
setText("Process")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
aboveJButtonActionPerformed(evt)
}

                                }
                            )
setText("Width:")
setText("Height:")
setText("Update")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
updateJButtonActionPerformed(evt)
}

                                }
                            )
setText("-1.000000")
setMinimumSize(java.awt.Dimension(120, 22))
setText("Adjust for 16 Above")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
adjustFor16AboveJButtonActionPerformed(evt)
}

                                }
                            )
setText("Adjust for 16 Below")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
adjustFor16BelowJButtonActionPerformed(evt)
}

                                }
                            )

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        

this.setLayout(layout)
setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(jLabel1)!.addComponent(jLabel2)!.addComponent(jLabel3))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)!.addComponent(jComboBox1, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addComponent(jTextField1)!.addComponent(jTextField2))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(floatPercentJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(adjustFor16AboveJButton)!.addComponent(adjustFor16BelowJButton))!.addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))!.addGroup(layout.createSequentialGroup()!.addComponent(updateJButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(aboveJButton)!.addGap(0, 250, Short.MAX_VALUE)))
setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel1)!.addComponent(jComboBox1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(floatPercentJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jTextField1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel2)!.addComponent(adjustFor16AboveJButton))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel3)!.addComponent(jTextField2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(adjustFor16BelowJButton))!.addGap(18, 18, 18)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(aboveJButton)!.addComponent(updateJButton))!.addContainerGap(175, Short.MAX_VALUE)))
}


    aboveJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.process()
}


    updateJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.update()
}


    adjustFor16AboveJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.updateFor16Above()
}


    adjustFor16BelowJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.updateFor16Below()
}


    private aboveJButton: javax.swing.JButton

    private adjustFor16AboveJButton: javax.swing.JButton

    private adjustFor16BelowJButton: javax.swing.JButton

    private floatPercentJTextField: javax.swing.JTextField

    private jComboBox1: javax.swing.JComboBox<String>

    private jLabel1: javax.swing.JLabel

    private jLabel2: javax.swing.JLabel

    private jLabel3: javax.swing.JLabel

    private jTextField1: javax.swing.JTextField

    private jTextField2: javax.swing.JTextField

    private updateJButton: javax.swing.JButton

}
                
            

