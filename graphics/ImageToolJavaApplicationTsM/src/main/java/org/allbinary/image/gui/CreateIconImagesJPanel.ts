
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
        
import { BufferedImage } from "../../../../java/awt/image/BufferedImage.js";

    
import { Raster } from "../../../../java/awt/image/Raster.js";

    
import { File } from "../../../../java/io/File.js";

    
import { CanvasStrings } from "../../../../org/allbinary/graphics/displayable/CanvasStrings.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { ImagePersistanceUtil } from "../../../../org/allbinary/media/image/ImagePersistanceUtil.js";

    
import { ImageProcessorInput } from "../../../../org/allbinary/media/image/ImageProcessorInput.js";

    
import { ImageProcessorInputCompositeInterface } from "../../../../org/allbinary/media/image/ImageProcessorInputCompositeInterface.js";

    
import { ImageUtil } from "../../../../org/allbinary/media/image/ImageUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../org/allbinary/util/BasicArrayListD.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { JPanel } from "./JPanel.js";

import { Short } from "./Short.js";

import { ActionEvent } from "./ActionEvent.js";

export class CreateIconImagesJPanel extends javax.swing.JPanel implements ImageProcessorInputCompositeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private imageProcessorInput: ImageProcessorInput
public constructor (imageProcessorInput: ImageProcessorInput){
            super();
                        //var imageProcessorInput = imageProcessorInput


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
new object: Thread()
                                {
                                
    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            
    var imageUtil: ImageUtil = ImageUtil.getInstance()!;
        
        
;
    

    var stringMaker: StringMaker = new StringMaker();
        
        
;
    

    var imageProcessorInput: ImageProcessorInput = this@CreateIconImagesJPanel.getImageProcessorInput()!;
        
        
;
    

    var files: File[] = imageProcessorInput!.getFiles()!;
        
        
;
    

    var iconWidthList: BasicArrayList = new BasicArrayListD();
        
        
;
    

    var iconHeightList: BasicArrayList = new BasicArrayListD();
        
        
;
    
iconWidthList!.add(864);
    
iconHeightList!.add(864);
    

    var ANDROID: string = "android-icon-";
        
        
;
    

    var IOS: string = "ios-icon-";
        
        
;
    

    var size: number = iconWidthList!.size()!;
        
        
;
    

    var width: number = 0;
        
        
;
    

    var height: number = 0;
        
        
;
    




                        for (
    var index2: number = 0;
        
        
index2 < size; index2++)
        {
width= get = iconWidthList!.get(index2);get as Integer
get.
                    toInt();
    
height= get = iconHeightList!.get(index2);get as Integer
get.
                    toInt();
    

    var generatedBufferedImageArray: BufferedImage[] = imageUtil!.createBufferedImage(imageProcessorInput!.getBufferedImageArray(), width, height, true)!;
        
        
;
    

    var imagePersistanceUtil: ImagePersistanceUtil = ImagePersistanceUtil.getInstance()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < generatedBufferedImageArray!.length; index++)
        {

    var filePath: string = files[index]!.getAbsolutePath()!;
        
        
;
    

    var endIndex: number = filePath!.lastIndexOf('\\')!;
        
        
;
    

    var path: string = filePath!.substring(0, endIndex +1)!;
        
        
;
    
stringMaker!.delete(0, stringMaker!.length());
    
stringMaker!.append(path)!.append(ANDROID)!.appendint(width)!.append(CanvasStrings.getInstance()!._PNG);
    

    var newFilePath: string = stringMaker!.toString()!;
        
        
;
    
imagePersistanceUtil!.saveWithBatik(new AbFile(newFilePath), generatedBufferedImageArray[index]!);
    
stringMaker!.delete(0, stringMaker!.length());
    
stringMaker!.append(path)!.append(IOS)!.appendint(width)!.append(CanvasStrings.getInstance()!._PNG);
    
newFilePath= stringMaker!.toString();
    
imagePersistanceUtil!.saveWithBatik(new AbFile(newFilePath), generatedBufferedImageArray[index]!);
    
}

}

this@CreateIconImagesJPanel.getParent()!.repaint();
    

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


    public getImageProcessorInput(): ImageProcessorInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageProcessorInput;
    
}


    public setImageProcessorInput(imageProcessorInput: ImageProcessorInput){
var imageProcessorInput = imageProcessorInput
this.imageProcessorInput= imageProcessorInput;
    
}


    initComponents(){
this.aboveJButton= new javax.swing.JButton();
    
this.aboveJButton!.setText("Process");
    
aboveJButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
aboveJButtonActionPerformed(evt);
    
}

                                }
                            );
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        
;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(aboveJButton)!.addGap(0, 335, Short.MAX_VALUE)));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addComponent(aboveJButton)!.addContainerGap(286, Short.MAX_VALUE)));
    
}


    aboveJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.process();
    
}


    private aboveJButton: javax.swing.JButton

}
                
            

