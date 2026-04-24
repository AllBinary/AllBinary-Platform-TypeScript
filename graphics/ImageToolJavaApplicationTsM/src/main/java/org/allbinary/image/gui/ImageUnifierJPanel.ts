
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
        



            import { Integer } from "../../../../java/lang/Integer.js";
        
import { BufferedImage } from "../../../../java/awt/image/BufferedImage.js";

    
import { File } from "../../../../java/io/File.js";

    
import { swing } from "../../../../javax/swing.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { FileWrapperUtil } from "../../../../org/allbinary/logic/io/file/FileWrapperUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { ImagePersistanceUtil } from "../../../../org/allbinary/media/image/ImagePersistanceUtil.js";

    
import { ImageProcessorInput } from "../../../../org/allbinary/media/image/ImageProcessorInput.js";

    
import { ImageProcessorInputCompositeInterface } from "../../../../org/allbinary/media/image/ImageProcessorInputCompositeInterface.js";

    
import { ImageStrings } from "../../../../org/allbinary/media/image/ImageStrings.js";

    
import { ImageUnifierCell } from "../../../../org/allbinary/media/image/ImageUnifierCell.js";

    
import { ImageUnifierProperties } from "../../../../org/allbinary/media/image/ImageUnifierProperties.js";

    
import { ImageUnifierUtil } from "../../../../org/allbinary/media/image/ImageUnifierUtil.js";

    
import { ImageUtil } from "../../../../org/allbinary/media/image/ImageUtil.js";

    
import { ImagesRatioUtil } from "../../../../org/allbinary/media/image/ImagesRatioUtil.js";

    
import { CommonPhoneStrings } from "../../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { JPanel } from "./JPanel.js";

import { Short } from "./Short.js";

import { ActionEvent } from "./ActionEvent.js";

import { KeyEvent } from "./KeyEvent.js";

import { PropertyChangeEvent } from "./PropertyChangeEvent.js";

export class ImageUnifierJPanel extends javax.swing.JPanel implements ImageProcessorInputCompositeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly imageStrings: ImageStrings = ImageStrings.getInstance()!;
        
        

    private readonly imagesRatioUtil: ImagesRatioUtil = ImagesRatioUtil.getInstance()!;
        
        

    private imageProcessorInput: ImageProcessorInput

    private icon: ImageIconUnique[]

    private imageUnifierProperties: ImageUnifierProperties

    private result: BufferedImage

    private isImageFillIn: boolean = true;
        
        
public constructor (imageProcessorInput: ImageProcessorInput){

            super();
            //var imageProcessorInput = imageProcessorInput
initComponents();
    
this.setImageProcessorInput(imageProcessorInput);
    
}


    public init(){

        try {
            
    var imageProcessorInput: ImageProcessorInput = this.getImageProcessorInput()!;
        
        
;
    

    var bufferedImageArray: BufferedImage[] = imageProcessorInput!.getBufferedImageArray()!;
        
        
;
    
this.icon= new Array(bufferedImageArray!.length);
    

    var defaultListModel: DefaultListModel = new DefaultListModel();
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < bufferedImageArray!.length; index++)
        {

    var width: number = bufferedImageArray[index]!.getWidth()!;
        
        
;
    

    var height: number = bufferedImageArray[index]!.getHeight()!;
        
        
;
    

    var newWidth: number = 52;
        
        
;
    

    var oldRatio: number = width /height;
        
        
;
    

    var newHeight: number = (newWidth /oldRatio);
        
        
;
    

    var iconBufferedImage: BufferedImage = ImageUtil.getInstance()!.createBufferedImage(bufferedImageArray[index]!, newWidth, newHeight, true)!;
        
        
;
    
this.icon[index]= new ImageIconUnique(iconBufferedImage, index);
    
defaultListModel!.addElement(this.icon[index]!);
    
}

this.imageJList!.setModel(defaultListModel);
    
this.updateOnPropertiesChange();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e);
    
}

}


    updateImage(){

        try {
            
    var bufferedImageArray: BufferedImage[] = this.getImageProcessorInput()!.getBufferedImageArray()!;
        
        
;
    

    var tempBufferedImageArray: BufferedImage[] = new Array(bufferedImageArray!.length);
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < bufferedImageArray!.length; index++)
        {

    var indexedImageIcon: ImageIconUnique = this.imageJList!.getModel()!.getElementAt(index); as ImageIconUnique;
        
        
;
    

    var bufferedImage: BufferedImage = ImageUtil.getInstance()!.createBufferedImage(bufferedImageArray[indexedImageIcon!.getId()]!, this.imageUnifierProperties!.getImageUnifierCell()!.getWidth(), this.imageUnifierProperties!.getImageUnifierCell()!.getHeight(), false)!;
        
        
;
    
tempBufferedImageArray[index]= bufferedImage;
    
}


    var totalImages: number = this.imageUnifierProperties!.getRows() *this.imageUnifierProperties!.getColumns();
        
        
;
    

    var averageRatio: number = this.imagesRatioUtil!.getAverage(tempBufferedImageArray, totalImages)!;
        
        
;
    

    var averageRatioString: string = new Double(averageRatio).
                            toString()!;
        
        
;
    

                        if(averageRatioString!.length > 4)
                        
                                    {
                                    averageRatioString= averageRatioString!.substring(0, 4);
    

                                    }
                                
this.avgRatioJTextField!.setText(averageRatioString);
    
this.fudgeItJButton!.setEnabled(false);
    

                        if(!this.imagesRatioUtil!.isEqual(tempBufferedImageArray, totalImages);)
                        
                                    {
                                    
                        if(this.isImageFillIn)
                        
                                    {
                                    this.fudgeItJButton!.setEnabled(true);
    

                                    }
                                

                                    }
                                
this.updateImage(tempBufferedImageArray);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "updateImage", e);
    
}

}


    updateImageWithFudgedImages(){

        try {
            
    var bufferedImageArray: BufferedImage[] = this.getImageProcessorInput()!.getBufferedImageArray()!;
        
        
;
    

    var tempBufferedImageArray: BufferedImage[] = new Array(bufferedImageArray!.length);
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < bufferedImageArray!.length; index++)
        {

    var indexedImageIcon: ImageIconUnique = this.imageJList!.getModel()!.getElementAt(index); as ImageIconUnique;
        
        
;
    

    var bufferedImage: BufferedImage = ImageUtil.getInstance()!.createBufferedImage(bufferedImageArray[indexedImageIcon!.getId()]!, this.imageUnifierProperties!.getImageUnifierCell()!.getWidth(), this.imageUnifierProperties!.getImageUnifierCell()!.getHeight(), false)!;
        
        
;
    
tempBufferedImageArray[index]= bufferedImage;
    
}


    var totalImages: number = this.imageUnifierProperties!.getRows() *this.imageUnifierProperties!.getColumns();
        
        
;
    

    var averageRatio: number = this.imagesRatioUtil!.getAverage(tempBufferedImageArray, totalImages)!;
        
        
;
    

    var fudgedBufferedImageArray: BufferedImage[] = imagesRatioUtil!.fudge(tempBufferedImageArray, totalImages, averageRatio)!;
        
        
;
    
this.updateImage(fudgedBufferedImageArray);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "updateImageWithFudgedImages", e);
    
}

}


    updateImage(tempBufferedImageArray: BufferedImage[]){
    //var tempBufferedImageArray = tempBufferedImageArray
this.result= ImageUnifierUtil.getInstance()!.getImage(tempBufferedImageArray, this.imageUnifierProperties);
    

    var image: Icon = new ImageIcon(this.result);
        
        
;
    

    var label: JLabel = new JLabel(image);
        
        
;
    
this.jScrollPane2!.getViewport()!.add(label);
    
this.updateUI();
    
}


    updateOnPropertiesChange(){

                        if(this.rowsJTextField!.getText()!.length() > 0 && this.columnsJTextField!.getText()!.length() > 0 && this.cellWidthJTextField!.getText()!.length() > 0 && this.cellHeightJTextField!.getText()!.length() > 0)
                        
                                    {
                                    this.imageUnifierProperties= new ImageUnifierProperties();
    
this.imageUnifierProperties!.setRows(new Integer(this.rowsJTextField!.getText()));
    
this.imageUnifierProperties!.setColumns(new Integer(this.columnsJTextField!.getText()));
    

    var imageUnifierCell: ImageUnifierCell = new ImageUnifierCell(new Integer(this.cellWidthJTextField!.getText()), new Integer(this.cellHeightJTextField!.getText()));
        
        
;
    
this.imageUnifierProperties!.setImageUnifierCell(imageUnifierCell);
    

    var cellRatio: number = (imageUnifierCell!.getWidth(); /imageUnifierCell!.getHeight());
        
        
;
    

    var cellRatioString: string = new Double(cellRatio).
                            toString()!;
        
        
;
    

                        if(cellRatioString!.length > 4)
                        
                                    {
                                    cellRatioString= cellRatioString!.substring(0, 4);
    

                                    }
                                
this.cellRatioJTextField!.setText(cellRatioString);
    
this.updateImage();
    

                                    }
                                
}


    initComponents(){

    var commonPhoneStrings: CommonPhoneStrings = CommonPhoneStrings.getInstance()!;
        
        
;
    
this.jScrollPane1= new javax.swing.JScrollPane();
    
this.imageJList= new javax.swing.JList();
    
this.jScrollPane2= new javax.swing.JScrollPane();
    
this.jPanel1= new javax.swing.JPanel();
    
this.jButton1= new javax.swing.JButton();
    
this.upJButton= new javax.swing.JButton();
    
this.downJButton= new javax.swing.JButton();
    
this.fudgeItJButton= new javax.swing.JButton();
    
this.jLabel2= new javax.swing.JLabel();
    
this.columnsJTextField= new javax.swing.JTextField();
    
this.jLabel1= new javax.swing.JLabel();
    
this.rowsJTextField= new javax.swing.JTextField();
    
this.jLabel3= new javax.swing.JLabel();
    
this.cellWidthJTextField= new javax.swing.JTextField();
    
this.jLabel4= new javax.swing.JLabel();
    
this.cellHeightJTextField= new javax.swing.JTextField();
    
this.jLabel5= new javax.swing.JLabel();
    
this.cellRatioJTextField= new javax.swing.JTextField();
    
this.jLabel6= new javax.swing.JLabel();
    
this.avgRatioJTextField= new javax.swing.JTextField();
    
this.jButton2= new javax.swing.JButton();
    
this.jButtonOrder= new javax.swing.JButton();
    
setMinimumSize(new java.awt.Dimension(500, 375));
    
setPreferredSize(new java.awt.Dimension(0, 0));
    
this.imageJList!.setMinimumSize(new java.awt.Dimension(50, 0));
    
this.jScrollPane1!.setViewportView(this.imageJList);
    
this.jButton1!.setText("Save");
    
jButton1!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
jButton1ActionPerformed(evt);
    
}

                                }
                            );
    
this.upJButton!.setText("Up");
    
upJButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
upJButtonActionPerformed(evt);
    
}

                                }
                            );
    
this.downJButton!.setText("Down");
    
downJButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
downJButtonActionPerformed(evt);
    
}

                                }
                            );
    
this.fudgeItJButton!.setText("Fudge It!");
    
fudgeItJButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
fudgeItJButtonActionPerformed(evt);
    
}

                                }
                            );
    
this.jLabel2!.setText("Columns:");
    
this.columnsJTextField!.setText(commonPhoneStrings!.TWO);
    
columnsJTextField!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
columnsJTextFieldActionPerformed(evt);
    
}

                                }
                            );
    
columnsJTextField!.addPropertyChangeListener(new object: java.beans.PropertyChangeListener()
                                {
                                
    public propertyChange(evt: java.beans.PropertyChangeEvent){
var evt = evt
columnsJTextFieldPropertyChange(evt);
    
}

                                }
                            );
    
columnsJTextField!.addKeyListener(new object: java.awt.event.KeyAdapter()
                                {
                                
    public keyPressed(evt: java.awt.event.KeyEvent){
var evt = evt
columnsJTextFieldKeyPressed(evt);
    
}

    public keyTyped(evt: java.awt.event.KeyEvent){
var evt = evt
columnsJTextFieldKeyTyped(evt);
    
}

                                }
                            );
    
this.jLabel1!.setText("Rows:");
    
this.rowsJTextField!.setText(commonPhoneStrings!.TWO);
    
rowsJTextField!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
rowsJTextFieldActionPerformed(evt);
    
}

                                }
                            );
    
this.jLabel3!.setText("Cell Width:");
    
this.cellWidthJTextField!.setText("200");
    
cellWidthJTextField!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
cellWidthJTextFieldActionPerformed(evt);
    
}

                                }
                            );
    
this.jLabel4!.setText("Cell Height:");
    
this.cellHeightJTextField!.setText("150");
    
cellHeightJTextField!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
cellHeightJTextFieldActionPerformed(evt);
    
}

                                }
                            );
    
this.jLabel5!.setText("Cell Ratio:");
    
this.cellRatioJTextField!.setEditable(false);
    
this.jLabel6!.setText("Avg Image Ratio:");
    
this.avgRatioJTextField!.setEditable(false);
    
this.jButton2!.setText(this.commonStrings!.UPDATE);
    
jButton2!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
jButton2ActionPerformed(evt);
    
}

                                }
                            );
    
this.jButtonOrder!.setText("Order");
    
jButtonOrder!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
jButtonOrderActionPerformed(evt);
    
}

                                }
                            );
    

    var jPanel1Layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.jPanel1);
        
        
;
    
this.jPanel1!.setLayout(jPanel1Layout);
    
jPanel1Layout!.setHorizontalGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout!.createSequentialGroup()!.addContainerGap()!.addGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)!.addComponent(jButton1, javax.swing.GroupLayout.DEFAULT_SIZE, 151, Short.MAX_VALUE)!.addGroup(jPanel1Layout!.createSequentialGroup()!.addComponent(upJButton, javax.swing.GroupLayout.PREFERRED_SIZE, 71, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 10, Short.MAX_VALUE)!.addComponent(downJButton, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE))!.addComponent(fudgeItJButton, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, 151, Short.MAX_VALUE)!.addGroup(javax.swing.GroupLayout.Alignment.LEADING, jPanel1Layout!.createSequentialGroup()!.addComponent(jLabel3)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 99, javax.swing.GroupLayout.PREFERRED_SIZE))!.addGroup(javax.swing.GroupLayout.Alignment.LEADING, jPanel1Layout!.createSequentialGroup()!.addComponent(jLabel4)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 96, javax.swing.GroupLayout.PREFERRED_SIZE))!.addComponent(avgRatioJTextField, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, 151, Short.MAX_VALUE)!.addComponent(jLabel6, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, 151, Short.MAX_VALUE)!.addComponent(cellRatioJTextField, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, 151, Short.MAX_VALUE)!.addComponent(jLabel5, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, 151, Short.MAX_VALUE)!.addComponent(cellHeightJTextField, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, 151, Short.MAX_VALUE)!.addComponent(cellWidthJTextField, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, 151, Short.MAX_VALUE)!.addComponent(jButton2, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, 151, Short.MAX_VALUE)!.addGroup(javax.swing.GroupLayout.Alignment.LEADING, jPanel1Layout!.createSequentialGroup()!.addGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(jLabel2)!.addComponent(jLabel1))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(rowsJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 103, Short.MAX_VALUE)!.addGroup(jPanel1Layout!.createSequentialGroup()!.addComponent(columnsJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 102, Short.MAX_VALUE)!.addGap(1, 1, 1))))!.addComponent(jButtonOrder, javax.swing.GroupLayout.DEFAULT_SIZE, 151, Short.MAX_VALUE))!.addContainerGap()));
    
jPanel1Layout!.setVerticalGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(jPanel1Layout!.createSequentialGroup()!.addContainerGap()!.addComponent(jButton1)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(upJButton)!.addComponent(downJButton))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jButtonOrder)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(fudgeItJButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel2)!.addComponent(columnsJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel1)!.addComponent(rowsJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel3)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(cellWidthJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel4)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(cellHeightJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jButton2)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel5)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addComponent(cellRatioJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addGap(7, 7, 7)!.addComponent(jLabel6)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(avgRatioJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addGap(66, 66, 66)));
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        
;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 84, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jScrollPane2, javax.swing.GroupLayout.DEFAULT_SIZE, 527, Short.MAX_VALUE)));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)!.addComponent(jPanel1, javax.swing.GroupLayout.Alignment.LEADING, 0, 445, Short.MAX_VALUE)!.addComponent(jScrollPane2, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, 445, Short.MAX_VALUE)!.addComponent(jScrollPane1, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, 445, Short.MAX_VALUE))!.addContainerGap()));
    
}


    jButton2ActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.updateOnPropertiesChange();
    
}


    columnsJTextFieldKeyPressed(evt: java.awt.event.KeyEvent){
var evt = evt
}


    columnsJTextFieldKeyTyped(evt: java.awt.event.KeyEvent){
var evt = evt
}


    columnsJTextFieldPropertyChange(evt: java.beans.PropertyChangeEvent){
var evt = evt
}


    fudgeItJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.updateImageWithFudgedImages();
    
}


    cellHeightJTextFieldActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.updateOnPropertiesChange();
    
}


    cellWidthJTextFieldActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.updateOnPropertiesChange();
    
}


    columnsJTextFieldActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.updateOnPropertiesChange();
    
}


    rowsJTextFieldActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.updateOnPropertiesChange();
    
}


    jButton1ActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            
    var fileArray: File[] = this.imageProcessorInput!.getFiles()!;
        
        
;
    

    var file: File = fileArray[0]!;
        
        
;
    

    var filePath: string = file.getAbsolutePath()!;
        
        
;
    

    var extensionIndex: number = filePath!.indexOf(this.imageStrings!.PNG_EXTENSION)!;
        
        
;
    
filePath= new StringMaker().
                            append(filePath!.substring(0, extensionIndex))!.append(CommonSeps.getInstance()!.UNDERSCORE)!.appendint(this.imageUnifierProperties!.getColumns())!.append("_By_")!.appendint(this.imageUnifierProperties!.getRows())!.append("_Unified")!.append(this.imageStrings!.PNG_EXTENSION)!.toString();
    
this.logUtil!.putF("New File Path: " +filePath, this, StringUtil.getInstance()!.EMPTY_STRING);
    

    var outputFile: File = new File(filePath);
        
        
;
    
ImagePersistanceUtil.getInstance()!.saveWithBatik(FileWrapperUtil.wrapFile(outputFile), this.result);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "jButton1ActionPerformed", e);
    
}

}


    downJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

    var index: number = this.imageJList!.getSelectedIndex()!;
        
        
;
    

    var defaultListModel: DefaultListModel = this.imageJList!.getModel(); as DefaultListModel;
        
        
;
    

                        if(index >= 0 && index +1 < defaultListModel!.size())
                        
                                    {
                                    
    var indexedImageIcon: ImageIconUnique = defaultListModel!.remove(index); as ImageIconUnique;
        
        
;
    
defaultListModel!.insertElementAt(indexedImageIcon, index +1);
    
this.imageJList!.setSelectedIndex(index +1);
    
this.updateImage();
    

                                    }
                                
}


    upJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

    var index: number = this.imageJList!.getSelectedIndex()!;
        
        
;
    

                        if(index > 0)
                        
                                    {
                                    
    var defaultListModel: DefaultListModel = this.imageJList!.getModel(); as DefaultListModel;
        
        
;
    

    var indexedImageIcon: ImageIconUnique = defaultListModel!.remove(index); as ImageIconUnique;
        
        
;
    
defaultListModel!.insertElementAt(indexedImageIcon, index -1);
    
this.imageJList!.setSelectedIndex(index -1);
    
this.updateImage();
    

                                    }
                                
}


    jButtonOrderActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

    var defaultListModel: DefaultListModel = this.imageJList!.getModel(); as DefaultListModel;
        
        
;
    

    var size: number = defaultListModel!.size()!;
        
        
;
    

    var last: number = size -1;
        
        
;
    




                        for (
    var index: number = last;
        
        
index >= 0; index--)
        {

    var indexedImageIcon: ImageIconUnique = defaultListModel!.remove(last); as ImageIconUnique;
        
        
;
    
defaultListModel!.insertElementAt(indexedImageIcon, last -index);
    
}


                        if(size > 0)
                        
                                    {
                                    this.imageJList!.setSelectedIndex(0);
    
this.updateImage();
    

                                    }
                                
}


    private avgRatioJTextField: javax.swing.JTextField

    private cellHeightJTextField: javax.swing.JTextField

    private cellRatioJTextField: javax.swing.JTextField

    private cellWidthJTextField: javax.swing.JTextField

    private columnsJTextField: javax.swing.JTextField

    private downJButton: javax.swing.JButton

    private fudgeItJButton: javax.swing.JButton

    private imageJList: javax.swing.JList

    private jButton1: javax.swing.JButton

    private jButton2: javax.swing.JButton

    private jButtonOrder: javax.swing.JButton

    private jLabel1: javax.swing.JLabel

    private jLabel2: javax.swing.JLabel

    private jLabel3: javax.swing.JLabel

    private jLabel4: javax.swing.JLabel

    private jLabel5: javax.swing.JLabel

    private jLabel6: javax.swing.JLabel

    private jPanel1: javax.swing.JPanel

    private jScrollPane1: javax.swing.JScrollPane

    private jScrollPane2: javax.swing.JScrollPane

    private rowsJTextField: javax.swing.JTextField

    private upJButton: javax.swing.JButton

    public getImageProcessorInput(): ImageProcessorInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageProcessorInput;
    
}


    public setImageProcessorInput(imageProcessorInput: ImageProcessorInput){
var imageProcessorInput = imageProcessorInput
this.imageProcessorInput= imageProcessorInput;
    
this.init();
    
}


}
                
            

