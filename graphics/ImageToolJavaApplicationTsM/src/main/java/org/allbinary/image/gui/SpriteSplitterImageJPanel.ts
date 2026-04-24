
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
        



            import { Integer } from "../../../../java/lang/Integer.js";
        
import { awt } from "../../../../java/awt.js";

    
import { BufferedImage } from "../../../../java/awt/image/BufferedImage.js";

    
import { RenderedImage } from "../../../../java/awt/image/RenderedImage.js";

    
import { File } from "../../../../java/io/File.js";

    
import { IOException } from "../../../../java/io/IOException.js";

    
import { ImageIO } from "../../../../javax/imageio/ImageIO.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { ImageProcessedVisitor } from "../../../../org/allbinary/media/image/ImageProcessedVisitor.js";

    
import { ImageProcessorInput } from "../../../../org/allbinary/media/image/ImageProcessorInput.js";

    
import { ImageStrings } from "../../../../org/allbinary/media/image/ImageStrings.js";

    
import { SpriteSplitterUtil } from "../../../../org/allbinary/media/image/SpriteSplitterUtil.js";

    
import { CommonPhoneStrings } from "../../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { JPanel } from "./JPanel.js";

import { Short } from "./Short.js";

import { ActionEvent } from "./ActionEvent.js";

export class SpriteSplitterImageJPanel extends javax.swing.JPanel implements ImageProcessedVisitor {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    private readonly imageStrings: ImageStrings = ImageStrings.getInstance()!;
        
        

    private imageProcessorInput: ImageProcessorInput

    private result: BufferedImage
public constructor (imageProcessorInput: ImageProcessorInput){
            super();
                        //var imageProcessorInput = imageProcessorInput


                            //For kotlin this is before the body of the constructor.
                    
initComponents();
    
this.imageProcessorInput= imageProcessorInput;
    
}


    public process(){
new object: Thread()
                                {
                                
    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            
    var spriteSplitterUtil: SpriteSplitterUtil = SpriteSplitterUtil.getInstance()!;
        
        
;
    

    var spriteType: string = spriteTypeJComboBox!.getSelectedItem(); as String;
        
        
;
    

    var totalFrames: Integer = Integer(Integer.valueOf(totalFramesJComboBox!.getSelectedItem() as String))!;
        
        
;
    

    var totalAnimations: Integer = Integer(Integer.valueOf(totalAnimationsJComboBox!.getSelectedItem() as String))!;
        
        
;
    

    var widthReduction: number = Integer(Integer.valueOf(widthReductionTextField!.getText()))!;
        
        
;
    

    var heightReduction: number = Integer(Integer.valueOf(heightReductionTextField!.getText()))!;
        
        
;
    

    var increaseWidth: number = Integer(Integer.valueOf(increaseWidthTextField!.getText()))!;
        
        
;
    

    var increaseHeight: number = Integer(Integer.valueOf(increaseHeightTextField!.getText()))!;
        
        
;
    
spriteSplitterUtil!.process(this@SpriteSplitterImageJPanel.getImageProcessorInput(), totalFrames, totalAnimations, widthReduction, heightReduction, increaseWidth, increaseHeight, spriteType, this@SpriteSplitterImageJPanel);
    

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
this.writeOverOriginalJCheckBox= new javax.swing.JCheckBox();
    
this.widthReductionTextField= new javax.swing.JTextField();
    
this.jLabel5= new javax.swing.JLabel();
    
jPanel1= new object: javax.swing.JPanel()
                                {
                                
    public paint(graphics: Graphics){
var graphics = graphics

                        if(this@SpriteSplitterImageJPanel.result != 
                                    null
                                )
                        
                                    {
                                    graphics.drawImage(this@SpriteSplitterImageJPanel.result, 0, 0, this@SpriteSplitterImageJPanel.result.getWidth(
                            null), this@SpriteSplitterImageJPanel.result.getHeight(
                            null), 
                            null);
    

                                    }
                                
}

                                }
                            ;
    
this.jLabel4= new javax.swing.JLabel();
    
this.jLabel6= new javax.swing.JLabel();
    
this.heightReductionTextField= new javax.swing.JTextField();
    
this.generateJButton= new javax.swing.JButton();
    
this.jPanel2= new javax.swing.JPanel();
    
this.jLabel1= new javax.swing.JLabel();
    
this.totalFramesJComboBox= new javax.swing.JComboBox<>();
    

    var size: number = 70;
        
        
;
    

    var animationStringArray2: string[] = new Array(size -1);
        
        
;
    




                        for (
    var index: number = 1;
        
        
index < size; index++)
        {
animationStringArray2[index -1]= index.toString();
    
}

this.totalFramesJComboBox!.setModel(new javax.swing.DefaultComboBoxModel(animationStringArray2));
    
this.jLabel2= new javax.swing.JLabel();
    
this.totalAnimationsJComboBox= new javax.swing.JComboBox<>();
    

    var animationStringArray: string[] = new Array(size -1);
        
        
;
    




                        for (
    var index: number = 1;
        
        
index < size; index++)
        {
animationStringArray[index -1]= index.toString();
    
}

this.totalAnimationsJComboBox!.setModel(new javax.swing.DefaultComboBoxModel(animationStringArray));
    
this.jLabel3= new javax.swing.JLabel();
    
this.spriteTypeJComboBox= new javax.swing.JComboBox<>();
    
spriteTypeJComboBox!.setModel(new javax.swing.DefaultComboBoxModel(
                                                [
                                                    org.allbinary.media.image.SpriteSplitterUtil.getInstance()!.DIRECTIONAL_ANIMATIONS,org.allbinary.media.image.SpriteSplitterUtil.getInstance()!.HORIZONTAL_ANIMATIONS,org.allbinary.media.image.SpriteSplitterUtil.getInstance()!.HORIZONTAL_SPRITE;
        
        
                                                ]));
    
jLabel7= new javax.swing.JLabel();
    
this.increaseWidthTextField= new javax.swing.JTextField();
    
this.jLabel8= new javax.swing.JLabel();
    
this.increaseHeightTextField= new javax.swing.JTextField();
    
this.writeOverOriginalJCheckBox!.setText("Write Over Original");
    
writeOverOriginalJCheckBox!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
writeOverOriginalJCheckBoxActionPerformed(evt);
    
}

                                }
                            );
    
this.widthReductionTextField!.setText(CommonPhoneStrings.getInstance()!.ZERO);
    
widthReductionTextField!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
widthReductionTextFieldActionPerformed(evt);
    
}

                                }
                            );
    
this.jLabel5!.setText("Less Width:");
    
this.jLabel4!.setText("Results:");
    

    var jPanel1Layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.jPanel1);
        
        
;
    
this.jPanel1!.setLayout(jPanel1Layout);
    
jPanel1Layout!.setHorizontalGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(jPanel1Layout!.createSequentialGroup()!.addComponent(jLabel4)!.addGap(0, 0, Short.MAX_VALUE)));
    
jPanel1Layout!.setVerticalGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(jPanel1Layout!.createSequentialGroup()!.addComponent(jLabel4)!.addGap(0, 184, Short.MAX_VALUE)));
    
this.jLabel6!.setText("Less Height:");
    
this.heightReductionTextField!.setText(CommonPhoneStrings.getInstance()!.ZERO);
    
this.generateJButton!.setText("Generate");
    
generateJButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
generateJButtonActionPerformed(evt);
    
}

                                }
                            );
    
this.jLabel1!.setText("Row Total:");
    
this.totalFramesJComboBox!.setSelectedIndex(1);
    
totalFramesJComboBox!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
totalFramesJComboBoxActionPerformed(evt);
    
}

                                }
                            );
    
this.jLabel2!.setText("Column Total :");
    
this.totalAnimationsJComboBox!.setSelectedIndex(3);
    
totalAnimationsJComboBox!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
totalAnimationsJComboBoxActionPerformed(evt);
    
}

                                }
                            );
    
this.jLabel3!.setText("Type:");
    
spriteTypeJComboBox!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
spriteTypeJComboBoxActionPerformed(evt);
    
}

                                }
                            );
    

    var jPanel2Layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.jPanel2);
        
        
;
    
this.jPanel2!.setLayout(jPanel2Layout);
    
jPanel2Layout!.setHorizontalGroup(jPanel2Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel2Layout!.createSequentialGroup()!.addContainerGap()!.addComponent(jLabel1)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(totalFramesJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, 48, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel2)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(totalAnimationsJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, 39, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel3)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(spriteTypeJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, 172, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
jPanel2Layout!.setVerticalGroup(jPanel2Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(jPanel2Layout!.createSequentialGroup()!.addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addGroup(jPanel2Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel1)!.addComponent(totalFramesJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel2)!.addComponent(totalAnimationsJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel3)!.addComponent(spriteTypeJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))));
    
this.jLabel7!.setText("More Width:");
    
this.increaseWidthTextField!.setText(CommonPhoneStrings.getInstance()!.ZERO);
    
increaseWidthTextField!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
increaseWidthTextFieldActionPerformed(evt);
    
}

                                }
                            );
    
this.jLabel8!.setText("More Height:");
    
this.increaseHeightTextField!.setText(CommonPhoneStrings.getInstance()!.ZERO);
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        
;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(jPanel2, javax.swing.GroupLayout.PREFERRED_SIZE, 415, Short.MAX_VALUE)!.addGap(78, 78, 78))!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addGroup(layout.createSequentialGroup()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(writeOverOriginalJCheckBox)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(generateJButton))!.addGroup(layout.createSequentialGroup()!.addComponent(jLabel5)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(widthReductionTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 41, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel6)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(heightReductionTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 46, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel7)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(increaseWidthTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 41, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel8)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(increaseHeightTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 46, javax.swing.GroupLayout.PREFERRED_SIZE)))!.addGap(0, 0, Short.MAX_VALUE)))!.addContainerGap()));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(jPanel2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel7)!.addComponent(increaseWidthTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 22, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel8)!.addComponent(increaseHeightTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel5)!.addComponent(widthReductionTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 22, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel6)!.addComponent(heightReductionTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(writeOverOriginalJCheckBox)!.addComponent(generateJButton))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
}


    writeOverOriginalJCheckBoxActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    generateJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.process();
    
}


    spriteTypeJComboBoxActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

    var spriteSplitterUtil: SpriteSplitterUtil = SpriteSplitterUtil.getInstance()!;
        
        
;
    
this.jLabel1!.setText(spriteSplitterUtil!.ANIMATIONS_LABELS[this.spriteTypeJComboBox!.getSelectedIndex()]!);
    
this.jLabel2!.setText(spriteSplitterUtil!.ANIMATIONS_LABELS[this.spriteTypeJComboBox!.getSelectedIndex() +1]!);
    
}


    totalAnimationsJComboBoxActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    totalFramesJComboBoxActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    widthReductionTextFieldActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    increaseWidthTextFieldActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    private generateJButton: javax.swing.JButton

    private heightReductionTextField: javax.swing.JTextField

    private increaseHeightTextField: javax.swing.JTextField

    private increaseWidthTextField: javax.swing.JTextField

    private jLabel1: javax.swing.JLabel

    private jLabel2: javax.swing.JLabel

    private jLabel3: javax.swing.JLabel

    private jLabel4: javax.swing.JLabel

    private jLabel5: javax.swing.JLabel

    private jLabel6: javax.swing.JLabel

    private jLabel7: javax.swing.JLabel

    private jLabel8: javax.swing.JLabel

    private jPanel1: javax.swing.JPanel

    private jPanel2: javax.swing.JPanel

    private spriteTypeJComboBox: javax.swing.JComboBox<String>

    private totalAnimationsJComboBox: javax.swing.JComboBox<String>

    private totalFramesJComboBox: javax.swing.JComboBox<String>

    private widthReductionTextField: javax.swing.JTextField

    private writeOverOriginalJCheckBox: javax.swing.JCheckBox

    public getImageProcessorInput(): ImageProcessorInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageProcessorInput;
    
}


    public setImageProcessorInput(imageProcessorInput: ImageProcessorInput){
var imageProcessorInput = imageProcessorInput
this.imageProcessorInput= imageProcessorInput;
    
}


                //@Throws(IOException::class)
            
    public visit(generatedBufferedImage: BufferedImage, name: string, index: number){
    //var generatedBufferedImage = generatedBufferedImage
    //var name = name
    //var index = index
this.logUtil!.putF(commonStrings!.VISIT, this, commonStrings!.VISIT);
    
this.result= generatedBufferedImage;
    
this.getParent()!.repaint();
    

    var file: File = this.imageProcessorInput!.getFiles()[index]!;
        
        
;
    

                        if(!this.writeOverOriginalJCheckBox!.isSelected();)
                        
                                    {
                                    
    var filePath: string = file.getAbsolutePath()!;
        
        
;
    

    var extensionIndex: number = filePath!.indexOf(this.imageStrings!.PNG_EXTENSION)!;
        
        
;
    
filePath= new StringBuilder().
                            append(filePath!.substring(0, extensionIndex))!.append(this.commonSeps!.UNDERSCORE)!.append(name)!.append(this.imageStrings!.PNG_EXTENSION)!.toString();
    
file= new File(filePath);
    

                                    }
                                

    var isWritten: boolean = ImageIO.write(this@SpriteSplitterImageJPanel.result as RenderedImage, imageStrings!.PNG, file)!;
        
        
;
    
this.logUtil!.putF(new StringMaker().
                            append("File: ")!.append(StringUtil.getInstance()!.toString(file))!.append(" Wrote: ")!.appendboolean(isWritten)!.toString(), this, commonStrings!.RUN);
    
}


}
                
            

