
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
      //not GWT import const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
import { Raster } from '../../../../java/awt/image/Raster.js';
      //not GWT import const Raster = globalThis.java.awt.image.Raster;

      
import { File } from '../../../../java/io/File.js';
      //not GWT import const File = globalThis.java.io.File;

      
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
      //not GWT import const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
      //not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { ImagePersistanceUtil } from '../../../../org/allbinary/media/image/ImagePersistanceUtil.js';
      //not GWT import const ImagePersistanceUtil = globalThis.org.allbinary.media.image.ImagePersistanceUtil;

      
import { ImageProcessorInput } from '../../../../org/allbinary/media/image/ImageProcessorInput.js';
      //not GWT import const ImageProcessorInput = globalThis.org.allbinary.media.image.ImageProcessorInput;

      
import { ImageProcessorInputCompositeInterface } from '../../../../org/allbinary/media/image/ImageProcessorInputCompositeInterface.js';
      //not GWT import const ImageProcessorInputCompositeInterface = globalThis.org.allbinary.media.image.ImageProcessorInputCompositeInterface;

      
import { ImageUtil } from '../../../../org/allbinary/media/image/ImageUtil.js';
      //not GWT import const ImageUtil = globalThis.org.allbinary.media.image.ImageUtil;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JPanel } from './JPanel.js';
//not GWT import const JPanel = globalThis.org.allbinary.image.gui.JPanel;

                import { JButton } from './JButton.js';
//not GWT import const JButton = globalThis.org.allbinary.image.gui.JButton;

                import { ActionListener } from './ActionListener.js';
//not GWT import const ActionListener = globalThis.org.allbinary.image.gui.ActionListener;

                import { ActionEvent } from './ActionEvent.js';
//not GWT import const ActionEvent = globalThis.org.allbinary.image.gui.ActionEvent;

                import { GroupLayout } from './GroupLayout.js';
//not GWT import const GroupLayout = globalThis.org.allbinary.image.gui.GroupLayout;

                import { Short } from './Short.js';
//not GWT import const Short = globalThis.org.allbinary.image.gui.Short;

                
export class CreateIconImagesJPanel extends javax.swing.JPanel implements ImageProcessorInputCompositeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private imageProcessorInput: ImageProcessorInput;

public constructor (imageProcessorInput: ImageProcessorInput){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
initComponents();
    
this.imageProcessorInput= imageProcessorInput;
    

    var numberStringArray: string[] = new Array(101);;
    
numberStringArray[0]= Integer.toString( -1);
    




                        for (
    var index: number = 1;index < 100; index++)
        {
numberStringArray[index]= index.toString();
    
}


    var araster: Raster = this.imageProcessorInput!.getBufferedImageArray()[0]!.getAlphaRaster()!;;
    

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

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

        try {
            
    var imageUtil: ImageUtil = ImageUtil.getInstance()!;;
    

    var stringMaker: StringMaker = new StringMaker();;
    

    var imageProcessorInput: ImageProcessorInput = CreateIconImagesJPanel.prototype.getImageProcessorInput()!;;
    

    var files: File[] = imageProcessorInput!.getFiles()!;;
    

    var iconWidthList: BasicArrayList = new BasicArrayListD();;
    

    var iconHeightList: BasicArrayList = new BasicArrayListD();;
    
iconWidthList!.add(864);
    
iconHeightList!.add(864);
    

    var ANDROID: string = "android-icon-";;
    

    var IOS: string = "ios-icon-";;
    

    var size: number = iconWidthList!.size()!;;
    

    var width: number = 0;;
    

    var height: number = 0;;
    




                        for (
    var index2: number = 0;index2 < size; index2++)
        {
width= (get as Integer).intValue();
    
height= (get as Integer).intValue();
    

    var generatedBufferedImageArray: BufferedImage[] = imageUtil!.createBufferedImage3(imageProcessorInput!.getBufferedImageArray(), width, height, true)!;;
    

    var imagePersistanceUtil: ImagePersistanceUtil = ImagePersistanceUtil.getInstance()!;;
    




                        for (
    var index: number = 0;index < generatedBufferedImageArray!.length; index++)
        {

    var filePath: string = files[index]!.getAbsolutePath()!;;
    

    var endIndex: number = filePath!.lastIndexOf('\\')!;;
    

    var path: string = filePath!.substring(0, endIndex +1)!;;
    
stringMaker!.delete(0, stringMaker!.length());
    
stringMaker!.append(path)!.append(ANDROID)!.appendint(width)!.append(CanvasStrings.getInstance()!._PNG);
    

    var newFilePath: string = stringMaker!.toString()!;;
    
imagePersistanceUtil!.saveWithBatik(AbFile.createAbFile(newFilePath), generatedBufferedImageArray[index]!);
    
stringMaker!.delete(0, stringMaker!.length());
    
stringMaker!.append(path)!.append(IOS)!.appendint(width)!.append(CanvasStrings.getInstance()!._PNG);
    
newFilePath= stringMaker!.toString();
    
imagePersistanceUtil!.saveWithBatik(AbFile.createAbFile(newFilePath), generatedBufferedImageArray[index]!);
    
}

}

CreateIconImagesJPanel.prototype.getParent()!.repaint();
    

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
this.aboveJButton= new javax.swing.JButton();
    
this.aboveJButton!.setText("Process");
    
this.aboveJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
aboveJButtonActionPerformed(evt);
    
}

                                }
                            );
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(aboveJButton)!.addGap(0, 335, Short.MAX_VALUE)));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addComponent(aboveJButton)!.addContainerGap(286, Short.MAX_VALUE)));
    
}


    aboveJButtonActionPerformed(evt: java.awt.event.ActionEvent){
this.process();
    
}


    private aboveJButton: javax.swing.JButton;

}



