
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

    

export class CreateIconImagesJPanel extends javax.swing.JPanel
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


    public getImageProcessorInput(): ImageProcessorInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageProcessorInput;
    
}


    public setImageProcessorInput(imageProcessorInput: ImageProcessorInput){
var imageProcessorInput = imageProcessorInput
this.imageProcessorInput= imageProcessorInput
}


    initComponents(){
aboveJButton= javax.swing.JButton()
setText("Process")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
aboveJButtonActionPerformed(evt)
}

                                }
                            )

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        

this.setLayout(layout)
setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(aboveJButton)!.addGap(0, 335, Short.MAX_VALUE)))
setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addComponent(aboveJButton)!.addContainerGap(286, Short.MAX_VALUE)))
}


    aboveJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.process()
}


    private aboveJButton: javax.swing.JButton

}
                
            

