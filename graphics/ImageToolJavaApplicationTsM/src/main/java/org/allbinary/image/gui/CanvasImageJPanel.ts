
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

    
import { CanvasExpandUtil } from "../../../../org/allbinary/media/image/CanvasExpandUtil.js";

    
import { CanvasTrimUtil } from "../../../../org/allbinary/media/image/CanvasTrimUtil.js";

    
import { ImageProcessedVisitor } from "../../../../org/allbinary/media/image/ImageProcessedVisitor.js";

    
import { ImageProcessorInput } from "../../../../org/allbinary/media/image/ImageProcessorInput.js";

    
import { ImageStrings } from "../../../../org/allbinary/media/image/ImageStrings.js";

    
import { CommonPhoneStrings } from "../../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { JPanel } from "./JPanel.js";

import { Short } from "./Short.js";

import { ActionEvent } from "./ActionEvent.js";

export class CanvasImageJPanel extends javax.swing.JPanel implements ImageProcessedVisitor {
        

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
            
    var canvasTrimUtil: CanvasTrimUtil = CanvasTrimUtil.getInstance()!;
        
        
;
    

    var canvasExpandUtil: CanvasExpandUtil = CanvasExpandUtil.getInstance()!;
        
        
;
    

    var leftReduction: number = Integer(Integer.valueOf(widthReductionTextField1!.getText()))!;
        
        
;
    

    var topReduction: number = Integer(Integer.valueOf(heightReductionTextField1!.getText()))!;
        
        
;
    

    var widthReduction: number = Integer(Integer.valueOf(widthReductionTextField!.getText()))!;
        
        
;
    

    var heightReduction: number = Integer(Integer.valueOf(heightReductionTextField!.getText()))!;
        
        
;
    

                        if(leftReduction <= 0 || topReduction <= 0 || widthReduction <= 0 || heightReduction <= 0)
                        
                                    {
                                    canvasTrimUtil!.process(this@CanvasImageJPanel.getImageProcessorInput(),  -leftReduction,  -topReduction,  -widthReduction,  -heightReduction, this@CanvasImageJPanel);
    

                                    }
                                
                        else {
                            canvasExpandUtil!.process(this@CanvasImageJPanel.getImageProcessorInput(), leftReduction, topReduction, this@CanvasImageJPanel);
    

                        }
                            

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
    
jPanel1= new object: javax.swing.JPanel()
                                {
                                
    public paint(graphics: Graphics){
var graphics = graphics

                        if(this@CanvasImageJPanel.result != 
                                    null
                                )
                        
                                    {
                                    graphics.drawImage(this@CanvasImageJPanel.result, 0, 0, this@CanvasImageJPanel.result.getWidth(
                            null), this@CanvasImageJPanel.result.getHeight(
                            null), 
                            null);
    

                                    }
                                
}

                                }
                            ;
    
this.generateJButton= new javax.swing.JButton();
    
this.jLabel4= new javax.swing.JLabel();
    
this.jPanel2= new javax.swing.JPanel();
    
this.jLabel5= new javax.swing.JLabel();
    
this.widthReductionTextField= new javax.swing.JTextField();
    
this.jLabel6= new javax.swing.JLabel();
    
this.heightReductionTextField= new javax.swing.JTextField();
    
this.widthReductionTextField1= new javax.swing.JTextField();
    
this.jLabel7= new javax.swing.JLabel();
    
this.jLabel8= new javax.swing.JLabel();
    
this.heightReductionTextField1= new javax.swing.JTextField();
    
this.writeOverOriginalJCheckBox!.setSelected(true);
    
this.writeOverOriginalJCheckBox!.setText("Write Over Original");
    
writeOverOriginalJCheckBox!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
writeOverOriginalJCheckBoxActionPerformed(evt);
    
}

                                }
                            );
    

    var jPanel1Layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.jPanel1);
        
        
;
    
this.jPanel1!.setLayout(jPanel1Layout);
    
jPanel1Layout!.setHorizontalGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 0, Short.MAX_VALUE));
    
jPanel1Layout!.setVerticalGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 196, Short.MAX_VALUE));
    
this.generateJButton!.setText("Generate");
    
generateJButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
generateJButtonActionPerformed(evt);
    
}

                                }
                            );
    
this.jLabel4!.setText("Results:");
    
this.jLabel5!.setText("Right:");
    
this.widthReductionTextField!.setText(CommonPhoneStrings.getInstance()!.ZERO);
    
widthReductionTextField!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
widthReductionTextFieldActionPerformed(evt);
    
}

                                }
                            );
    
this.jLabel6!.setText("Bottom");
    
this.heightReductionTextField!.setText(CommonPhoneStrings.getInstance()!.ZERO);
    
this.widthReductionTextField1!.setText(CommonPhoneStrings.getInstance()!.ZERO);
    
widthReductionTextField1!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
widthReductionTextField1ActionPerformed(evt);
    
}

                                }
                            );
    
this.jLabel7!.setText("Top");
    
this.jLabel8!.setText("Left:");
    
this.heightReductionTextField1!.setText(CommonPhoneStrings.getInstance()!.ZERO);
    

    var jPanel2Layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.jPanel2);
        
        
;
    
this.jPanel2!.setLayout(jPanel2Layout);
    
jPanel2Layout!.setHorizontalGroup(jPanel2Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(jPanel2Layout!.createSequentialGroup()!.addContainerGap()!.addComponent(jLabel8)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(widthReductionTextField1, javax.swing.GroupLayout.PREFERRED_SIZE, 41, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel5)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(widthReductionTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 41, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel7)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(heightReductionTextField1, javax.swing.GroupLayout.PREFERRED_SIZE, 46, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel6)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(heightReductionTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 46, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap(140, Short.MAX_VALUE)));
    
jPanel2Layout!.setVerticalGroup(jPanel2Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel2Layout!.createSequentialGroup()!.addGap(0, 16, Short.MAX_VALUE)!.addGroup(jPanel2Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(jPanel2Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel6)!.addComponent(heightReductionTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addGroup(jPanel2Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel8)!.addComponent(widthReductionTextField1, javax.swing.GroupLayout.PREFERRED_SIZE, 22, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel7)!.addComponent(heightReductionTextField1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addGroup(jPanel2Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel5)!.addComponent(widthReductionTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 22, javax.swing.GroupLayout.PREFERRED_SIZE)))));
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        
;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(jPanel2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addGap(78, 78, 78))!.addGroup(layout.createSequentialGroup()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))!.addGroup(layout.createSequentialGroup()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(jLabel4)!.addGroup(layout.createSequentialGroup()!.addComponent(writeOverOriginalJCheckBox)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(generateJButton)))!.addGap(0, 0, Short.MAX_VALUE)))!.addContainerGap()));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(jPanel2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(generateJButton)!.addComponent(writeOverOriginalJCheckBox))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel4)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
}


    writeOverOriginalJCheckBoxActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    generateJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.process();
    
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
    

                        if(!this.writeOverOriginalJCheckBox!.isSelected();

                        )
                        
                                    {
                                    
    var filePath: string = file.getAbsolutePath()!;
        
        
;
    

    var extensionIndex: number = filePath!.indexOf(this.imageStrings!.PNG_EXTENSION)!;
        
        
;
    
filePath= new StringBuilder().
                            append(filePath!.substring(0, extensionIndex))!.append(this.commonSeps!.UNDERSCORE)!.append(name)!.append(this.imageStrings!.PNG_EXTENSION)!.toString();
    
file= new File(filePath);
    

                                    }
                                

    var isWritten: boolean = ImageIO.write(this@CanvasImageJPanel.result as RenderedImage, imageStrings!.PNG, file)!;
        
        
;
    
this.logUtil!.putF(new StringMaker().
                            append("File: ")!.append(StringUtil.getInstance()!.toString(file))!.append(" Wrote: ")!.appendboolean(isWritten)!.toString(), this, commonStrings!.RUN);
    
}


}
                
            

