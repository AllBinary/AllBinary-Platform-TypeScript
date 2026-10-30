
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
        
            import { System } from '../../../../java/lang/System.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
            import { Thread } from '../../../../java/lang/Thread.js';
        
import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

import { Raster } from '../../../../java/awt/image/Raster.js';
//not GWT import const Raster

import { File } from '../../../../java/io/File.js';
//not GWT import const File

import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const CanvasStrings

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { ImagePersistanceUtil } from '../../../../org/allbinary/media/image/ImagePersistanceUtil.js';
//not GWT import const ImagePersistanceUtil

import { ImageProcessorInput } from '../../../../org/allbinary/media/image/ImageProcessorInput.js';
//not GWT import const ImageProcessorInput

import { ImageProcessorInputCompositeInterface } from '../../../../org/allbinary/media/image/ImageProcessorInputCompositeInterface.js';
//not GWT import const ImageProcessorInputCompositeInterface

import { ImageUtil } from '../../../../org/allbinary/media/image/ImageUtil.js';
//not GWT import const ImageUtil

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JPanel } from './JPanel.js';
//not GWT import - same folder const JPanel
import { JButton } from './JButton.js';
//not GWT import - same folder const JButton
import { ActionListener } from './ActionListener.js';
//not GWT import - same folder const ActionListener
import { ActionEvent } from './ActionEvent.js';
//not GWT import - same folder const ActionEvent
import { GroupLayout } from './GroupLayout.js';
//not GWT import - same folder const GroupLayout
import { Short } from './Short.js';
//not GWT import - same folder const Short

export class CreateIconImagesJPanel extends javax.swing.JPanel implements ImageProcessorInputCompositeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private imageProcessorInput: ImageProcessorInput;

public constructor (imageProcessorInput: ImageProcessorInput){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
initComponents();
    
this.imageProcessorInput= imageProcessorInput;
    

    let numberStringArray: string[] = new Array(101);;
    
numberStringArray[0]= Integer.toString( -1);
    




                        for (
    let index: number = 1;index < 100; index++)
        {
numberStringArray[index]= index.toString();
    
}


    let araster: Raster = this.imageProcessorInput!.getBufferedImageArray()[0]!.getAlphaRaster()!;;
    

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

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

 try { 
    let imageUtil: ImageUtil = ImageUtil.getInstance()!;;
    

    let stringMaker: StringMaker = new StringMaker();;
    

    let imageProcessorInput: ImageProcessorInput = outer$CreateIconImagesJPanel.getImageProcessorInput()!;;
    

    let files: File[] = imageProcessorInput!.getFiles()!;;
    

    let iconWidthList: BasicArrayList = new BasicArrayListD();;
    

    let iconHeightList: BasicArrayList = new BasicArrayListD();;
    
iconWidthList!.add(864);
    
iconHeightList!.add(864);
    

    let ANDROID: string = "android-icon-";;
    

    let IOS: string = "ios-icon-";;
    

    let size: number = iconWidthList!.size()!;;
    

    let width: number = 0;;
    

    let height: number = 0;;
    




                        for (
    let index2: number = 0;index2 < size; index2++)
        {
width= (get as Integer).intValue();
    
height= (get as Integer).intValue();
    

    let generatedBufferedImageArray: BufferedImage[] = imageUtil!.createBufferedImage3(imageProcessorInput!.getBufferedImageArray(), width, height, true)!;;
    

    let imagePersistanceUtil: ImagePersistanceUtil = ImagePersistanceUtil.getInstance()!;;
    




                        for (
    let index: number = 0;index < generatedBufferedImageArray!.length; index++)
        {

    let filePath: string = files[index]!.getAbsolutePath()!;;
    

    let endIndex: number = filePath!.lastIndexOf('\\')!;;
    

    let path: string = filePath!.substring(0, endIndex +1)!;;
    
stringMaker!.delete(0, stringMaker!.length());
    
stringMaker!.append(path)!.append(ANDROID)!.appendint(width)!.append(CanvasStrings.getInstance()!._PNG);
    

    let newFilePath: string = stringMaker!.toString()!;;
    
imagePersistanceUtil!.saveWithBatik(AbFile.createAbFile(newFilePath), generatedBufferedImageArray[index]!);
    
stringMaker!.delete(0, stringMaker!.length());
    
stringMaker!.append(path)!.append(IOS)!.appendint(width)!.append(CanvasStrings.getInstance()!._PNG);
    
newFilePath= stringMaker!.toString();
    
imagePersistanceUtil!.saveWithBatik(AbFile.createAbFile(newFilePath), generatedBufferedImageArray[index]!);
    
}

}

outer$CreateIconImagesJPanel.getParent()!.repaint();
    
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


    public getImageProcessorInput(): ImageProcessorInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.imageProcessorInput;
    
}


    public setImageProcessorInput(imageProcessorInput: ImageProcessorInput){
this.imageProcessorInput= imageProcessorInput;
    
}


    initComponents(){
this.aboveJButton= new javax.swing.JButton();
    
this.aboveJButton!.setText("Process");
    
this.aboveJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
aboveJButtonActionPerformed(evt);
    
}

                                }
                            );
    

    let layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(aboveJButton)!.addGap(0, 335, Short.MAX_VALUE)));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addComponent(aboveJButton)!.addContainerGap(286, Short.MAX_VALUE)));
    
}


    aboveJButtonActionPerformed(evt: java.awt.event.ActionEvent){
this.process();
    
}


    private aboveJButton: javax.swing.JButton;

}

