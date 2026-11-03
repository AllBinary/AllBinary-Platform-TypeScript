
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
            const Short = (globalThis.java?.lang?.Short ?? class {}) as typeof globalThis.java.lang.Short;
        
            import { Thread } from '../../../../java/lang/Thread.js';
        
import { awt } from '../../../../java/awt.js';
//not GWT import const awt

import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

import { RenderedImage } from '../../../../java/awt/image/RenderedImage.js';
//not GWT import const RenderedImage

import { File } from '../../../../java/io/File.js';
//not GWT import const File

import { IOException } from '../../../../java/io/IOException.js';
//not GWT import const IOException

import { ImageIO } from '../../../../javax/imageio/ImageIO.js';
//not GWT import const ImageIO

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { ImageProcessedVisitor } from '../../../../org/allbinary/media/image/ImageProcessedVisitor.js';
//not GWT import const ImageProcessedVisitor

import { ImageProcessorInput } from '../../../../org/allbinary/media/image/ImageProcessorInput.js';
//not GWT import const ImageProcessorInput

import { ImageStrings } from '../../../../org/allbinary/media/image/ImageStrings.js';
//not GWT import const ImageStrings

import { SpriteSplitterUtil } from '../../../../org/allbinary/media/image/SpriteSplitterUtil.js';
//not GWT import const SpriteSplitterUtil

//not plain js import { CommonPhoneStrings } 
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
type CommonPhoneStrings<T = any, U = any> = typeof CommonPhoneStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonPhoneStrings;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JPanel } from './JPanel.js';
//sameFolderImports - not GWT import - same folder const JPanel
import { JCheckBox } from './JCheckBox.js';
//sameFolderImports - not GWT import - same folder const JCheckBox
import { JTextField } from './JTextField.js';
//sameFolderImports - not GWT import - same folder const JTextField
import { JLabel } from './JLabel.js';
//sameFolderImports - not GWT import - same folder const JLabel
import { Graphics } from './Graphics.js';
//sameFolderImports - not GWT import - same folder const Graphics
import { JButton } from './JButton.js';
//sameFolderImports - not GWT import - same folder const JButton
import { JComboBox } from './JComboBox.js';
//sameFolderImports - not GWT import - same folder const JComboBox
import { DefaultComboBoxModel } from './DefaultComboBoxModel.js';
//sameFolderImports - not GWT import - same folder const DefaultComboBoxModel
import { ActionListener } from './ActionListener.js';
//sameFolderImports - not GWT import - same folder const ActionListener
import { ActionEvent } from './ActionEvent.js';
//sameFolderImports - not GWT import - same folder const ActionEvent
import { GroupLayout } from './GroupLayout.js';
//sameFolderImports - not GWT import - same folder const GroupLayout

export class SpriteSplitterImageJPanel extends javax.swing.JPanel implements ImageProcessedVisitor {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;

    private readonly imageStrings: ImageStrings = ImageStrings.getInstance()!;

    private imageProcessorInput: ImageProcessorInput;

    private result: BufferedImage;

public constructor (imageProcessorInput: ImageProcessorInput){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
initComponents();
    
this.imageProcessorInput= imageProcessorInput;
    
}


    public process(){
new class extends Thread
                                {
                                
    public run(){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

 try { 
    let spriteSplitterUtil: SpriteSplitterUtil = SpriteSplitterUtil.getInstance()!;;
    

    let spriteType: string = spriteTypeJComboBox!.getSelectedItem() as string;;
    

    let totalFrames: Integer = Integer.valueOf(totalFramesJComboBox!.getSelectedItem() as string)!;;
    

    let totalAnimations: Integer = Integer.valueOf(totalAnimationsJComboBox!.getSelectedItem() as string)!;;
    

    let widthReduction: number = Integer.valueOf(widthReductionTextField!.getText())!;;
    

    let heightReduction: number = Integer.valueOf(heightReductionTextField!.getText())!;;
    

    let increaseWidth: number = Integer.valueOf(increaseWidthTextField!.getText())!;;
    

    let increaseHeight: number = Integer.valueOf(increaseHeightTextField!.getText())!;;
    
spriteSplitterUtil!.process(outer$SpriteSplitterImageJPanel.getImageProcessorInput(), totalFrames, totalAnimations, widthReduction, heightReduction, increaseWidth, increaseHeight, spriteType, outer$SpriteSplitterImageJPanel);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    

 }
   }
 
}

                                }().start();
    
}


    initComponents(){
this.writeOverOriginalJCheckBox= new javax.swing.JCheckBox();
    
this.widthReductionTextField= new javax.swing.JTextField();
    
this.jLabel5= new javax.swing.JLabel();
    
this.jPanel1= new class extends javax.swing.JPanel
                                {
                                
    public paint(graphics: Graphics){

                        if(outer$SpriteSplitterImageJPanel.result != 
                                    null
                                )
                        
                                    {
                                    graphics.drawImage(outer$SpriteSplitterImageJPanel.result, 0, 0, outer$SpriteSplitterImageJPanel.result.getWidth(
                            null), outer$SpriteSplitterImageJPanel.result.getHeight(
                            null), 
                            null);
    

                                    }
                                
}

                                }();
    
this.jLabel4= new javax.swing.JLabel();
    
this.jLabel6= new javax.swing.JLabel();
    
this.heightReductionTextField= new javax.swing.JTextField();
    
this.generateJButton= new javax.swing.JButton();
    
this.jPanel2= new javax.swing.JPanel();
    
this.jLabel1= new javax.swing.JLabel();
    
this.totalFramesJComboBox= new javax.swing.JComboBox();
    

    let size: number = 70;;
    

    let animationStringArray2: string[] = new Array(size -1);;
    




                        for (
    let index: number = 1;index < size; index++)
        {
animationStringArray2[index -1]= index.toString();
    
}

this.totalFramesJComboBox!.setModel(new javax.swing.DefaultComboBoxModel(animationStringArray2));
    
this.jLabel2= new javax.swing.JLabel();
    
this.totalAnimationsJComboBox= new javax.swing.JComboBox();
    

    let animationStringArray: string[] = new Array(size -1);;
    




                        for (
    let index: number = 1;index < size; index++)
        {
animationStringArray[index -1]= index.toString();
    
}

this.totalAnimationsJComboBox!.setModel(new javax.swing.DefaultComboBoxModel(animationStringArray));
    
this.jLabel3= new javax.swing.JLabel();
    
this.spriteTypeJComboBox= new javax.swing.JComboBox();
    
this.spriteTypeJComboBox!.setModel(new javax.swing.DefaultComboBoxModel([
org.allbinary.media.image.SpriteSplitterUtil.getInstance()!.DIRECTIONAL_ANIMATIONS,org.allbinary.media.image.SpriteSplitterUtil.getInstance()!.HORIZONTAL_ANIMATIONS,org.allbinary.media.image.SpriteSplitterUtil.getInstance()!.HORIZONTAL_SPRITE
                                                ]));
    
this.jLabel7= new javax.swing.JLabel();
    
this.increaseWidthTextField= new javax.swing.JTextField();
    
this.jLabel8= new javax.swing.JLabel();
    
this.increaseHeightTextField= new javax.swing.JTextField();
    
this.writeOverOriginalJCheckBox!.setText("Write Over Original");
    
this.writeOverOriginalJCheckBox!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
writeOverOriginalJCheckBoxActionPerformed(evt);
    
}

                                }());
    
this.widthReductionTextField!.setText(CommonPhoneStrings.getInstance()!.ZERO);
    
this.widthReductionTextField!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
widthReductionTextFieldActionPerformed(evt);
    
}

                                }());
    
this.jLabel5!.setText("Less Width:");
    
this.jLabel4!.setText("Results:");
    

    let jPanel1Layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.jPanel1);;
    
this.jPanel1!.setLayout(jPanel1Layout);
    
jPanel1Layout!.setHorizontalGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(jPanel1Layout!.createSequentialGroup()!.addComponent(this.jLabel4)!.addGap(0, 0, Short.MAX_VALUE)));
    
jPanel1Layout!.setVerticalGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(jPanel1Layout!.createSequentialGroup()!.addComponent(this.jLabel4)!.addGap(0, 184, Short.MAX_VALUE)));
    
this.jLabel6!.setText("Less Height:");
    
this.heightReductionTextField!.setText(CommonPhoneStrings.getInstance()!.ZERO);
    
this.generateJButton!.setText("Generate");
    
this.generateJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
generateJButtonActionPerformed(evt);
    
}

                                }());
    
this.jLabel1!.setText("Row Total:");
    
this.totalFramesJComboBox!.setSelectedIndex(1);
    
this.totalFramesJComboBox!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
totalFramesJComboBoxActionPerformed(evt);
    
}

                                }());
    
this.jLabel2!.setText("Column Total :");
    
this.totalAnimationsJComboBox!.setSelectedIndex(3);
    
this.totalAnimationsJComboBox!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
totalAnimationsJComboBoxActionPerformed(evt);
    
}

                                }());
    
this.jLabel3!.setText("Type:");
    
this.spriteTypeJComboBox!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
spriteTypeJComboBoxActionPerformed(evt);
    
}

                                }());
    

    let jPanel2Layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.jPanel2);;
    
this.jPanel2!.setLayout(jPanel2Layout);
    
jPanel2Layout!.setHorizontalGroup(jPanel2Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel2Layout!.createSequentialGroup()!.addContainerGap()!.addComponent(this.jLabel1)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(this.totalFramesJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, 48, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(this.jLabel2)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(this.totalAnimationsJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, 39, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(this.jLabel3)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(this.spriteTypeJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, 172, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
jPanel2Layout!.setVerticalGroup(jPanel2Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(jPanel2Layout!.createSequentialGroup()!.addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addGroup(jPanel2Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(this.jLabel1)!.addComponent(this.totalFramesJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(this.jLabel2)!.addComponent(this.totalAnimationsJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(this.jLabel3)!.addComponent(this.spriteTypeJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))));
    
this.jLabel7!.setText("More Width:");
    
this.increaseWidthTextField!.setText(CommonPhoneStrings.getInstance()!.ZERO);
    
this.increaseWidthTextField!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
increaseWidthTextFieldActionPerformed(evt);
    
}

                                }());
    
this.jLabel8!.setText("More Height:");
    
this.increaseHeightTextField!.setText(CommonPhoneStrings.getInstance()!.ZERO);
    

    let layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(this.jPanel2, javax.swing.GroupLayout.PREFERRED_SIZE, 415, Short.MAX_VALUE)!.addGap(78, 78, 78))!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(this.jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addGroup(layout.createSequentialGroup()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(this.writeOverOriginalJCheckBox)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(this.generateJButton))!.addGroup(layout.createSequentialGroup()!.addComponent(this.jLabel5)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(this.widthReductionTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 41, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(this.jLabel6)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(this.heightReductionTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 46, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(this.jLabel7)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(this.increaseWidthTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 41, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(this.jLabel8)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(this.increaseHeightTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 46, javax.swing.GroupLayout.PREFERRED_SIZE)))!.addGap(0, 0, Short.MAX_VALUE)))!.addContainerGap()));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(this.jPanel2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(this.jLabel7)!.addComponent(this.increaseWidthTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 22, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(this.jLabel8)!.addComponent(this.increaseHeightTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(this.jLabel5)!.addComponent(this.widthReductionTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 22, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(this.jLabel6)!.addComponent(this.heightReductionTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(this.writeOverOriginalJCheckBox)!.addComponent(this.generateJButton))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(this.jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
}


    writeOverOriginalJCheckBoxActionPerformed(evt: java.awt.event.ActionEvent){
}


    generateJButtonActionPerformed(evt: java.awt.event.ActionEvent){
this.process();
    
}


    spriteTypeJComboBoxActionPerformed(evt: java.awt.event.ActionEvent){

    let spriteSplitterUtil: SpriteSplitterUtil = SpriteSplitterUtil.getInstance()!;;
    
this.jLabel1!.setText(spriteSplitterUtil!.ANIMATIONS_LABELS[this.spriteTypeJComboBox!.getSelectedIndex()]!);
    
this.jLabel2!.setText(spriteSplitterUtil!.ANIMATIONS_LABELS[this.spriteTypeJComboBox!.getSelectedIndex() +1]!);
    
}


    totalAnimationsJComboBoxActionPerformed(evt: java.awt.event.ActionEvent){
}


    totalFramesJComboBoxActionPerformed(evt: java.awt.event.ActionEvent){
}


    widthReductionTextFieldActionPerformed(evt: java.awt.event.ActionEvent){
}


    increaseWidthTextFieldActionPerformed(evt: java.awt.event.ActionEvent){
}


    private generateJButton: javax.swing.JButton;

    private heightReductionTextField: javax.swing.JTextField;

    private increaseHeightTextField: javax.swing.JTextField;

    private increaseWidthTextField: javax.swing.JTextField;

    private jLabel1: javax.swing.JLabel;

    private jLabel2: javax.swing.JLabel;

    private jLabel3: javax.swing.JLabel;

    private jLabel4: javax.swing.JLabel;

    private jLabel5: javax.swing.JLabel;

    private jLabel6: javax.swing.JLabel;

    private jLabel7: javax.swing.JLabel;

    private jLabel8: javax.swing.JLabel;

    private jPanel1: javax.swing.JPanel;

    private jPanel2: javax.swing.JPanel;

    private spriteTypeJComboBox: javax.swing.JComboBox<string>;

    private totalAnimationsJComboBox: javax.swing.JComboBox<string>;

    private totalFramesJComboBox: javax.swing.JComboBox<string>;

    private widthReductionTextField: javax.swing.JTextField;

    private writeOverOriginalJCheckBox: javax.swing.JCheckBox;

    public getImageProcessorInput(): ImageProcessorInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.imageProcessorInput;
    
}


    public setImageProcessorInput(imageProcessorInput: ImageProcessorInput){
this.imageProcessorInput= imageProcessorInput;
    
}


                //@Throws(IOException.constructor)
            
    public visit(generatedBufferedImage: BufferedImage, name: string, index: number){
this.logUtil!.putF(this.commonStrings!.VISIT, this, this.commonStrings!.VISIT);
    
this.result= generatedBufferedImage;
    
this.getParent()!.repaint();
    

    let file: File = this.imageProcessorInput!.getFiles()[index]!;;
    

                        if(!this.writeOverOriginalJCheckBox!.isSelected())
                        
                                    {
                                    
    let filePath: string = file.getAbsolutePath()!;;
    

    let extensionIndex: number = filePath!.indexOf(this.imageStrings!.PNG_EXTENSION)!;;
    
filePath= new StringMaker().append(filePath!.substring(0, extensionIndex))!.append(this.commonSeps!.UNDERSCORE)!.append(name)!.append(this.imageStrings!.PNG_EXTENSION)!.toString();
    
file= new File(filePath);
    

                                    }
                                

    let isWritten: boolean = ImageIO.write(this.result as RenderedImage, this.imageStrings!.PNG, file)!;;
    
this.logUtil!.putF(new StringMaker().append("File: ")!.append(StringUtil.getInstance()!.toString(file))!.append(" Wrote: ")!.appendboolean(isWritten)!.toString(), this, this.commonStrings!.RUN);
    
}


}

