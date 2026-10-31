
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

import { ImageIO } from '../../../../javax/imageio/ImageIO.js';
//not GWT import const ImageIO

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { ImageJ2SERotationUtil } from '../../../../org/allbinary/media/image/ImageJ2SERotationUtil.js';
//not GWT import const ImageJ2SERotationUtil

import { ImageProcessorInput } from '../../../../org/allbinary/media/image/ImageProcessorInput.js';
//not GWT import const ImageProcessorInput

import { ImageProcessorInputCompositeInterface } from '../../../../org/allbinary/media/image/ImageProcessorInputCompositeInterface.js';
//not GWT import const ImageProcessorInputCompositeInterface

import { ImageStrings } from '../../../../org/allbinary/media/image/ImageStrings.js';
//not GWT import const ImageStrings

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
import { Graphics } from './Graphics.js';
//sameFolderImports - not GWT import - same folder const Graphics
import { JComboBox } from './JComboBox.js';
//sameFolderImports - not GWT import - same folder const JComboBox
import { JLabel } from './JLabel.js';
//sameFolderImports - not GWT import - same folder const JLabel
import { JButton } from './JButton.js';
//sameFolderImports - not GWT import - same folder const JButton
import { JCheckBox } from './JCheckBox.js';
//sameFolderImports - not GWT import - same folder const JCheckBox
import { GroupLayout } from './GroupLayout.js';
//sameFolderImports - not GWT import - same folder const GroupLayout
import { DefaultComboBoxModel } from './DefaultComboBoxModel.js';
//sameFolderImports - not GWT import - same folder const DefaultComboBoxModel
import { ActionListener } from './ActionListener.js';
//sameFolderImports - not GWT import - same folder const ActionListener
import { ActionEvent } from './ActionEvent.js';
//sameFolderImports - not GWT import - same folder const ActionEvent

export class RotationSpriteImageJPanel extends javax.swing.JPanel implements ImageProcessorInputCompositeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly imageStrings: ImageStrings = ImageStrings.getInstance()!;

    private imageProcessorInput: ImageProcessorInput;

    private result: BufferedImage;

public constructor (imageProcessorInput: ImageProcessorInput){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
this.initComponents();
    
this.imageProcessorInput= imageProcessorInput;
    
}


    public process(){
new class extends Thread
                                {
                                
    public run(){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

 try { 
    let generatedBufferedImageArray: BufferedImage[];;
    

    let imageProcessorInput: ImageProcessorInput = outer$RotationSpriteImageJPanel.getImageProcessorInput()!;;
    

    let bufferedImageArray: BufferedImage[] = imageProcessorInput!.getBufferedImageArray()!;;
    




                        for (
    let index: number = 0;index < bufferedImageArray!.length; index++)
        {

    let totalFrames: Integer = Integer.valueOf(outer$RotationSpriteImageJPanel.totalFramesJComboBox!.getSelectedItem() as string)!;;
    

    let totalAngle: Integer = Integer.valueOf(outer$RotationSpriteImageJPanel.totalAngleJComboBox!.getSelectedItem() as string)!;;
    
generatedBufferedImageArray= ImageJ2SERotationUtil.getInstance()!.getRotatedImages(bufferedImageArray[index]!, totalFrames, totalAngle);
    
outer$RotationSpriteImageJPanel.result= ImageJ2SERotationUtil.getInstance()!.createSpriteImage(generatedBufferedImageArray);
    
outer$RotationSpriteImageJPanel.getParent()!.repaint();
    

    let file: File = imageProcessorInput!.getFiles()[index]!;;
    

                        if(!outer$RotationSpriteImageJPanel.writeOverOriginalJCheckBox!.isSelected())
                        
                                    {
                                    
    let filePath: string = file.getAbsolutePath()!;;
    

    let extensionIndex: number = filePath!.indexOf(this.imageStrings!.PNG_EXTENSION)!;;
    
filePath= new StringMaker().append(filePath!.substring(0, extensionIndex))!.append(CommonSeps.getInstance()!.UNDERSCORE)!.append("sprite")!.append(this.imageStrings!.PNG_EXTENSION)!.toString();
    
logUtil!.putF("New File Path: " +filePath, this, this.commonStrings!.RUN);
    
file= new File(filePath);
    

                                    }
                                

    let isWritten: boolean = ImageIO.write(outer$RotationSpriteImageJPanel.result as RenderedImage, this.imageStrings!.PNG, file)!;;
    
logUtil!.putF("File: " +file +" Wrote: " +isWritten, this, this.commonStrings!.RUN);
    
}

 }
 catch (caught: any) {
 {
  const e = caught;
  
logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    

 }
   }
 
}

                                }
                            .start();
    
}


    initComponents(){
this.jPanel1= new class extends javax.swing.JPanel
                                {
                                
    public paint(graphics: Graphics){

                        if(outer$RotationSpriteImageJPanel.result != 
                                    null
                                )
                        
                                    {
                                    graphics.drawImage(outer$RotationSpriteImageJPanel.result, 0, 0, outer$RotationSpriteImageJPanel.result.getWidth(
                            null), outer$RotationSpriteImageJPanel.result.getHeight(
                            null), 
                            null);
    

                                    }
                                
}

                                }
                            ;
    
this.jPanel2= new javax.swing.JPanel();
    
this.totalFramesJComboBox= new javax.swing.JComboBox();
    
this.jLabel1= new javax.swing.JLabel();
    
this.generateJButton= new javax.swing.JButton();
    
this.totalAngleJComboBox= new javax.swing.JComboBox();
    
this.jLabel3= new javax.swing.JLabel();
    
this.writeOverOriginalJCheckBox= new javax.swing.JCheckBox();
    
this.jPanel3= new javax.swing.JPanel();
    
this.jLabel2= new javax.swing.JLabel();
    

    let jPanel1Layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(this.jPanel1);;
    
this.jPanel1!.setLayout(jPanel1Layout);
    
jPanel1Layout!.setHorizontalGroup(jPanel1Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(0, 436, Short.MAX_VALUE));
    
jPanel1Layout!.setVerticalGroup(jPanel1Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(0, 227, Short.MAX_VALUE));
    
this.totalFramesJComboBox!.setModel(new javax.swing.DefaultComboBoxModel(
                                                [
                                                    CommonPhoneStrings.getInstance()!.FOUR,CommonPhoneStrings.getInstance()!.NINE,"18","20","36"
                                                ]));
    
this.jLabel1!.setText("Total Frames:");
    
this.generateJButton!.setText("Generate");
    
this.generateJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
generateJButtonActionPerformed(evt);
    
}

                                }
                            );
    
this.totalAngleJComboBox!.setModel(new javax.swing.DefaultComboBoxModel(
                                                [
                                                    "360","90"
                                                ]));
    
this.totalAngleJComboBox!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
totalAngleJComboBoxActionPerformed(evt);
    
}

                                }
                            );
    
this.jLabel3!.setText("Total Angle:");
    
this.writeOverOriginalJCheckBox!.setText("Write Over Original");
    

    let jPanel2Layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(this.jPanel2);;
    
this.jPanel2!.setLayout(jPanel2Layout);
    
jPanel2Layout!.setHorizontalGroup(jPanel2Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(jPanel2Layout!.createSequentialGroup()!.add(8, 8, 8)!.add(jLabel1)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(totalFramesJComboBox, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(jLabel3)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(totalAngleJComboBox, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(writeOverOriginalJCheckBox)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(generateJButton)!.addContainerGap(org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
jPanel2Layout!.setVerticalGroup(jPanel2Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(jPanel2Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.BASELINE)!.add(jLabel1)!.add(totalFramesJComboBox, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.add(generateJButton)!.add(totalAngleJComboBox, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.add(jLabel3)!.add(writeOverOriginalJCheckBox)));
    
this.jLabel2!.setText("Results:");
    

    let jPanel3Layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(this.jPanel3);;
    
this.jPanel3!.setLayout(jPanel3Layout);
    
jPanel3Layout!.setHorizontalGroup(jPanel3Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(jPanel3Layout!.createSequentialGroup()!.add(jLabel2)!.addContainerGap(377, Short.MAX_VALUE)));
    
jPanel3Layout!.setVerticalGroup(jPanel3Layout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(jLabel2));
    

    let layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(this);;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(org.jdesktop.layout.GroupLayout.TRAILING, jPanel2, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.add(layout.createSequentialGroup()!.addContainerGap()!.add(jPanel3, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addContainerGap())!.add(jPanel1, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE));
    
layout.setVerticalGroup(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(layout.createSequentialGroup()!.add(jPanel2, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.UNRELATED)!.add(jPanel3, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(jPanel1, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
}


    generateJButtonActionPerformed(evt: java.awt.event.ActionEvent){
this.process();
    
}


    totalAngleJComboBoxActionPerformed(evt: java.awt.event.ActionEvent){
}


    private generateJButton: javax.swing.JButton;

    private jLabel1: javax.swing.JLabel;

    private jLabel2: javax.swing.JLabel;

    private jLabel3: javax.swing.JLabel;

    private jPanel1: javax.swing.JPanel;

    private jPanel2: javax.swing.JPanel;

    private jPanel3: javax.swing.JPanel;

    private totalAngleJComboBox: javax.swing.JComboBox;

    private totalFramesJComboBox: javax.swing.JComboBox;

    private writeOverOriginalJCheckBox: javax.swing.JCheckBox;

    public getImageProcessorInput(): ImageProcessorInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.imageProcessorInput;
    
}


    public setImageProcessorInput(imageProcessorInput: ImageProcessorInput){
this.imageProcessorInput= imageProcessorInput;
    
}


}

