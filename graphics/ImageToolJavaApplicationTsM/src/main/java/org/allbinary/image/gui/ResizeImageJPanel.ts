
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { System } from '../../../../java/lang/System.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
            import { Float } from '../../../../java/lang/Float.js';
        
            import { Thread } from '../../../../java/lang/Thread.js';
        
import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
      
import { Raster } from '../../../../java/awt/image/Raster.js';
      
import { File } from '../../../../java/io/File.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { FileWrapperUtil } from '../../../../org/allbinary/logic/io/file/FileWrapperUtil.js';
      
import { ImagePersistanceUtil } from '../../../../org/allbinary/media/image/ImagePersistanceUtil.js';
      
import { ImageProcessorInput } from '../../../../org/allbinary/media/image/ImageProcessorInput.js';
      
import { ImageProcessorInputCompositeInterface } from '../../../../org/allbinary/media/image/ImageProcessorInputCompositeInterface.js';
      
import { ImageUtil } from '../../../../org/allbinary/media/image/ImageUtil.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JPanel } from './JPanel.js';
import { DefaultComboBoxModel } from './DefaultComboBoxModel.js';
import { JLabel } from './JLabel.js';
import { JComboBox } from './JComboBox.js';
import { JButton } from './JButton.js';
import { JTextField } from './JTextField.js';
import { ActionListener } from './ActionListener.js';
import { ActionEvent } from './ActionEvent.js';
import { Dimension } from './Dimension.js';
import { GroupLayout } from './GroupLayout.js';
import { Short } from './Short.js';

export class ResizeImageJPanel extends javax.swing.JPanel implements ImageProcessorInputCompositeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private imageProcessorInput: ImageProcessorInput
public constructor (imageProcessorInput: ImageProcessorInput){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
initComponents();
    
this.imageProcessorInput= imageProcessorInput;
    

    var numberStringArray: string[] = new Array(101);
;
    
numberStringArray[0]= Integer.toString( -1);
    




                        for (
    var index: number = 1;
index < 100; index++)
        {
numberStringArray[index]= index.toString();
    
}

this.jComboBox1!.setModel(new javax.swing.DefaultComboBoxModel(numberStringArray));
    

    var araster: Raster = this.imageProcessorInput!.getBufferedImageArray()[0]!.getAlphaRaster()!;
;
    

                        if(araster == 
                                    null
                                )
                        
                                    {
                                    console.log("there is no Alpha channel!!!!!!!!!");
    

                                    }
                                
                        else {
                            console.log("Alpha channel found !");
    

                        }
                            
}


    public process(){
new class extends Thread
                                {
                                
    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    

        try {
            
    var imageUtil: ImageUtil = ImageUtil.getInstance()!;
;
    

    var percent: Integer = Integer.valueOf(ResizeImageJPanel.prototype.jComboBox1!.getSelectedItem() as string)!;
;
    

    var percentAsFloat: number = Float.parseFloat(ResizeImageJPanel.prototype.floatPercentJTextField!.getText())!;
;
    

    var imageProcessorInput: ImageProcessorInput = ResizeImageJPanel.prototype.getImageProcessorInput()!;
;
    

    var files: File[] = imageProcessorInput!.getFiles()!;
;
    

    var generatedBufferedImageArray: BufferedImage[] = 
                null
            ;
;
    

                        if(percentAsFloat!.intValue() !=  -1)
                        
                                    {
                                    generatedBufferedImageArray= imageUtil!.createBufferedImage2(imageProcessorInput!.getBufferedImageArray(), percentAsFloat, true);
    

                                    }
                                
                             else 
                        if(percent.intValue() !=  -1)
                        
                                    {
                                    generatedBufferedImageArray= imageUtil!.createBufferedImageForResize(imageProcessorInput!.getBufferedImageArray(), percent, true);
    

                                    }
                                
                        else {
                            
    var width: Integer = Integer.valueOf(ResizeImageJPanel.prototype.jTextField1!.getText() as string)!;
;
    

    var height: Integer = Integer.valueOf(ResizeImageJPanel.prototype.jTextField2!.getText() as string)!;
;
    
generatedBufferedImageArray= imageUtil!.createBufferedImage3(imageProcessorInput!.getBufferedImageArray(), width, height, true);
    

                        }
                            

    var araster: Raster = generatedBufferedImageArray[0]!.getAlphaRaster()!;
;
    

                        if(araster == 
                                    null
                                )
                        
                                    {
                                    console.log("No Alpha Channel In Result");
    

                                    }
                                
                        else {
                            console.log("Found Alpha Channel In Result");
    

                        }
                            

    var imagePersistanceUtil: ImagePersistanceUtil = ImagePersistanceUtil.getInstance()!;
;
    




                        for (
    var index: number = 0;
index < generatedBufferedImageArray!.length; index++)
        {
imagePersistanceUtil!.saveWithBatik(FileWrapperUtil.wrapFile(files[index]!), generatedBufferedImageArray[index]!);
    
}

ResizeImageJPanel.prototype.getParent()!.repaint();
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}

                                }
                            .start();
    
}


    public update(){
new class extends Thread
                                {
                                
    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    

        try {
            
    var imageProcessorInput: ImageProcessorInput = ResizeImageJPanel.prototype.getImageProcessorInput()!;
;
    

    var size: number = imageProcessorInput!.getBufferedImageArray()!.length;
;
    

    var bufferedImageArray: BufferedImage[] = imageProcessorInput!.getBufferedImageArray()!;
;
    

    var bufferedImage: BufferedImage
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {
bufferedImage= bufferedImageArray[0]!;
    
ResizeImageJPanel.prototype.jTextField1!.setText(bufferedImage!.getWidth().toString());
    
ResizeImageJPanel.prototype.jTextField2!.setText(bufferedImage!.getHeight().toString());
    
}

ResizeImageJPanel.prototype.getParent()!.repaint();
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}

                                }
                            .start();
    
}


    public updateFor16Above(){
new class extends Thread
                                {
                                
    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    

        try {
            
    var imageProcessorInput: ImageProcessorInput = ResizeImageJPanel.prototype.getImageProcessorInput()!;
;
    

    var size: number = imageProcessorInput!.getBufferedImageArray()!.length;
;
    

    var bufferedImageArray: BufferedImage[] = imageProcessorInput!.getBufferedImageArray()!;
;
    

    var bufferedImage: BufferedImage
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {
bufferedImage= bufferedImageArray[0]!;
    
ResizeImageJPanel.prototype.jTextField1!.setText(bufferedImage!.getWidth() /16 *16.toString());
    
ResizeImageJPanel.prototype.jTextField2!.setText(bufferedImage!.getHeight() /16 *16.toString());
    
}

ResizeImageJPanel.prototype.getParent()!.repaint();
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}

                                }
                            .start();
    
}


    public updateFor16Below(){
new class extends Thread
                                {
                                
    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    

        try {
            
    var imageProcessorInput: ImageProcessorInput = ResizeImageJPanel.prototype.getImageProcessorInput()!;
;
    

    var size: number = imageProcessorInput!.getBufferedImageArray()!.length;
;
    

    var bufferedImageArray: BufferedImage[] = imageProcessorInput!.getBufferedImageArray()!;
;
    

    var bufferedImage: BufferedImage
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {
bufferedImage= bufferedImageArray[0]!;
    
ResizeImageJPanel.prototype.jTextField1!.setText(((bufferedImage!.getWidth() /16) +1) *16.toString());
    
ResizeImageJPanel.prototype.jTextField2!.setText(((bufferedImage!.getHeight() /16) +1) *16.toString());
    
}

ResizeImageJPanel.prototype.getParent()!.repaint();
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}

                                }
                            .start();
    
}


    public getImageProcessorInput(): ImageProcessorInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.imageProcessorInput;
    
}


    public setImageProcessorInput(imageProcessorInput: ImageProcessorInput){
this.imageProcessorInput= imageProcessorInput;
    
}


    initComponents(){
this.jLabel1= new javax.swing.JLabel();
    
this.jComboBox1= new javax.swing.JComboBox<>();
    
this.aboveJButton= new javax.swing.JButton();
    
this.jTextField1= new javax.swing.JTextField();
    
this.jLabel2= new javax.swing.JLabel();
    
this.jLabel3= new javax.swing.JLabel();
    
this.jTextField2= new javax.swing.JTextField();
    
this.updateJButton= new javax.swing.JButton();
    
this.floatPercentJTextField= new javax.swing.JTextField();
    
this.adjustFor16AboveJButton= new javax.swing.JButton();
    
this.adjustFor16BelowJButton= new javax.swing.JButton();
    
this.jLabel1!.setText("Percent:");
    
this.jComboBox1!.setModel(new javax.swing.DefaultComboBoxModel<>(
                                                [
                                                    "Item 1","Item 2","Item 3","Item 4"
                                                ]));
    
this.aboveJButton!.setText("Process");
    
this.aboveJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
aboveJButtonActionPerformed(evt);
    
}

                                }
                            );
    
this.jLabel2!.setText("Width:");
    
this.jLabel3!.setText("Height:");
    
this.updateJButton!.setText("Update");
    
this.updateJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
updateJButtonActionPerformed(evt);
    
}

                                }
                            );
    
this.floatPercentJTextField!.setText("-1.000000");
    
this.floatPercentJTextField!.setMinimumSize(new java.awt.Dimension(120, 22));
    
this.adjustFor16AboveJButton!.setText("Adjust for 16 Above");
    
this.adjustFor16AboveJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
adjustFor16AboveJButtonActionPerformed(evt);
    
}

                                }
                            );
    
this.adjustFor16BelowJButton!.setText("Adjust for 16 Below");
    
this.adjustFor16BelowJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
adjustFor16BelowJButtonActionPerformed(evt);
    
}

                                }
                            );
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(jLabel1)!.addComponent(jLabel2)!.addComponent(jLabel3))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)!.addComponent(jComboBox1, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addComponent(jTextField1)!.addComponent(jTextField2))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(floatPercentJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(adjustFor16AboveJButton)!.addComponent(adjustFor16BelowJButton))!.addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))!.addGroup(layout.createSequentialGroup()!.addComponent(updateJButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(aboveJButton)!.addGap(0, 250, Short.MAX_VALUE)));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel1)!.addComponent(jComboBox1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(floatPercentJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jTextField1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel2)!.addComponent(adjustFor16AboveJButton))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel3)!.addComponent(jTextField2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(adjustFor16BelowJButton))!.addGap(18, 18, 18)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(aboveJButton)!.addComponent(updateJButton))!.addContainerGap(175, Short.MAX_VALUE)));
    
}


    aboveJButtonActionPerformed(evt: java.awt.event.ActionEvent){
this.process();
    
}


    updateJButtonActionPerformed(evt: java.awt.event.ActionEvent){
this.update();
    
}


    adjustFor16AboveJButtonActionPerformed(evt: java.awt.event.ActionEvent){
this.updateFor16Above();
    
}


    adjustFor16BelowJButtonActionPerformed(evt: java.awt.event.ActionEvent){
this.updateFor16Below();
    
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
                
            

