
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

    
import { Arrays } from "../../../../java/util/Arrays.js";

    
import { Comparator } from "../../../../java/util/Comparator.js";

    
import { ImageIO } from "../../../../javax/imageio/ImageIO.js";

    
import { FileJDialog } from "../../../../org/allbinary/gui/dialog/FileJDialog.js";

    
import { FileJDialogListenerInterface } from "../../../../org/allbinary/gui/dialog/FileJDialogListenerInterface.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ImageProcessorInput } from "../../../../org/allbinary/media/image/ImageProcessorInput.js";

    
import { ImageProcessorInputCompositeInterface } from "../../../../org/allbinary/media/image/ImageProcessorInputCompositeInterface.js";

    
import { ColorRange } from "../../../../org/allbinary/media/image/analysis/ColorRange.js";

    
import { ColorRangeInterface } from "../../../../org/allbinary/media/image/analysis/ColorRangeInterface.js";

    
import { ImageAnalysis } from "../../../../org/allbinary/media/image/analysis/ImageAnalysis.js";

    
import { ImageAnalysisResults } from "../../../../org/allbinary/media/image/analysis/ImageAnalysisResults.js";

    
import { CommonPhoneStrings } from "../../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { JFrame } from "./JFrame.js";

import { Short } from "./Short.js";

import { ActionEvent } from "./ActionEvent.js";

import { JTextField } from "./JTextField.js";

export class ImageToolJFrame extends javax.swing.JFrame implements FileJDialogListenerInterface {
        

    private imageProcessorInputCompositeInterface: ImageProcessorInputCompositeInterface

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private fileJDialog: FileJDialog

    private imageProcessorInput: ImageProcessorInput
public constructor (){

            super();
        initComponents();
    

    var commonPhoneStrings: CommonPhoneStrings = CommonPhoneStrings.getInstance()!;
        
        
;
    
this.setSize(640, 480);
    
this.getMaxRedJTextField()!.setText("255");
    
this.getMaxGreenJTextField()!.setText("255");
    
this.getMaxBlueJTextField()!.setText("255");
    
this.getMinRedJTextField()!.setText(commonPhoneStrings!.ZERO);
    
this.getMinGreenJTextField()!.setText(commonPhoneStrings!.ZERO);
    
this.getMinBlueJTextField()!.setText(commonPhoneStrings!.ZERO);
    
this.fileJDialog= new FileJDialog();
    
this.fileJDialog!.addFinishedListener(this);
    
}


    initComponents(){
analysisActionJDialog= new javax.swing.JDialog();
    
this.titleJLabel= new javax.swing.JLabel();
    
this.colorRangeJLabel= new javax.swing.JLabel();
    
this.redJLabel= new javax.swing.JLabel();
    
this.minJLabel= new javax.swing.JLabel();
    
this.maxJLabel= new javax.swing.JLabel();
    
this.greenJLabel= new javax.swing.JLabel();
    
this.blueJLabel= new javax.swing.JLabel();
    
this.minRedJTextField= new javax.swing.JTextField();
    
this.maxRedJTextField= new javax.swing.JTextField();
    
this.maxGreenJTextField= new javax.swing.JTextField();
    
this.minBlueJTextField= new javax.swing.JTextField();
    
this.maxBlueJTextField= new javax.swing.JTextField();
    
this.okJButton= new javax.swing.JButton();
    
this.minGreenJTextField= new javax.swing.JTextField();
    
this.jPanel1= new javax.swing.JPanel();
    
this.mainJMenuBar= new javax.swing.JMenuBar();
    
this.fileJMenu= new javax.swing.JMenu();
    
this.openImageJMenuItem= new javax.swing.JMenuItem();
    
this.processingJMenu= new javax.swing.JMenu();
    
this.analyzeJMenuItem= new javax.swing.JMenuItem();
    
this.generateSpriteSplitterMenuItem= new javax.swing.JMenuItem();
    
this.generateRotationMenuItem= new javax.swing.JMenuItem();
    
this.generateMirrorSpriteMenuItem= new javax.swing.JMenuItem();
    
this.generateRotationSpriteJMenuItem= new javax.swing.JMenuItem();
    
this.createStripImageJMenuItem= new javax.swing.JMenuItem();
    
this.mirrorJMenuItem= new javax.swing.JMenuItem();
    
this.scaleImagesJMenuItem= new javax.swing.JMenuItem();
    
this.canvasImagesJMenuItem= new javax.swing.JMenuItem();
    
this.createIconImagesJMenuItem= new javax.swing.JMenuItem();
    
this.analysisActionJDialog!.setMinimumSize(new java.awt.Dimension(350, 250));
    
this.titleJLabel!.setText("              Color At Action Options            ");
    
this.colorRangeJLabel!.setText("Color Range");
    
this.redJLabel!.setText("Red:");
    
this.minJLabel!.setText("Minimum");
    
this.maxJLabel!.setText("Maximum");
    
this.greenJLabel!.setText("Green:");
    
this.blueJLabel!.setText("Blue:");
    
this.okJButton!.setText("OK");
    
okJButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
okJButtonActionPerformed(evt);
    
}

                                }
                            );
    

    var analysisActionJDialogLayout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(this.analysisActionJDialog!.getContentPane());
        
        
;
    
this.analysisActionJDialog!.getContentPane()!.setLayout(analysisActionJDialogLayout);
    
analysisActionJDialogLayout!.setHorizontalGroup(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(analysisActionJDialogLayout!.createSequentialGroup()!.addContainerGap()!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(analysisActionJDialogLayout!.createSequentialGroup()!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(blueJLabel)!.add(greenJLabel)!.add(redJLabel)!.add(colorRangeJLabel))!.add(29, 29, 29)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(org.jdesktop.layout.GroupLayout.TRAILING, minJLabel, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, 58, Short.MAX_VALUE)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.TRAILING, false)!.add(org.jdesktop.layout.GroupLayout.LEADING, minBlueJTextField)!.add(org.jdesktop.layout.GroupLayout.LEADING, minGreenJTextField)!.add(org.jdesktop.layout.GroupLayout.LEADING, minRedJTextField, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, 42, Short.MAX_VALUE)!.add(org.jdesktop.layout.GroupLayout.LEADING, okJButton)))!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.TRAILING)!.add(org.jdesktop.layout.GroupLayout.LEADING, analysisActionJDialogLayout!.createSequentialGroup()!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.TRAILING, false)!.add(org.jdesktop.layout.GroupLayout.LEADING, maxRedJTextField)!.add(org.jdesktop.layout.GroupLayout.LEADING, analysisActionJDialogLayout!.createSequentialGroup()!.add(1, 1, 1)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(maxBlueJTextField)!.add(maxGreenJTextField, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, 43, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE))))!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED, 17, Short.MAX_VALUE))!.add(org.jdesktop.layout.GroupLayout.LEADING, maxJLabel, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, 61, Short.MAX_VALUE))!.addContainerGap())!.add(org.jdesktop.layout.GroupLayout.TRAILING, analysisActionJDialogLayout!.createSequentialGroup()!.add(titleJLabel)!.add(25, 25, 25)))));
    
analysisActionJDialogLayout!.setVerticalGroup(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(analysisActionJDialogLayout!.createSequentialGroup()!.add(titleJLabel)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.BASELINE)!.add(minJLabel)!.add(colorRangeJLabel)!.add(maxJLabel))!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.TRAILING)!.add(redJLabel)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.BASELINE)!.add(minRedJTextField, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.add(maxRedJTextField, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)))!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.TRAILING)!.add(greenJLabel)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.BASELINE)!.add(minGreenJTextField, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.add(maxGreenJTextField, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)))!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.TRAILING)!.add(blueJLabel)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.BASELINE)!.add(minBlueJTextField, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.add(maxBlueJTextField, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)))!.add(16, 16, 16)!.add(okJButton)!.addContainerGap(org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
    
getContentPane()!.setLayout(new java.awt.GridLayout(1, 0));
    
this.jPanel1!.setLayout(new java.awt.GridLayout(1, 0));
    
getContentPane()!.add(this.jPanel1);
    
this.fileJMenu!.setText("File");
    
fileJMenu!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
fileJMenuActionPerformed(evt);
    
}

                                }
                            );
    
this.openImageJMenuItem!.setText("Open");
    
openImageJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
openImageJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.fileJMenu!.add(this.openImageJMenuItem);
    
this.mainJMenuBar!.add(this.fileJMenu);
    
this.processingJMenu!.setText("Processing");
    
processingJMenu!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
processingJMenuActionPerformed(evt);
    
}

                                }
                            );
    
this.analyzeJMenuItem!.setText("Image Analyze");
    
analyzeJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
analyzeJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.processingJMenu!.add(this.analyzeJMenuItem);
    
this.generateMirrorSpriteMenuItem!.setText("Mirror Sprite Generator");
    
generateMirrorSpriteMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
generateMirrorSpriteMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.processingJMenu!.add(this.generateMirrorSpriteMenuItem);
    
this.generateRotationSpriteJMenuItem!.setText("Rotation Sprite Generator");
    
generateRotationSpriteJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
generateRotationSpriteJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.processingJMenu!.add(this.generateRotationSpriteJMenuItem);
    
this.generateSpriteSplitterMenuItem!.setText("Sprite Splitter Generator");
    
generateSpriteSplitterMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
generateSpriteSplitterMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.processingJMenu!.add(this.generateSpriteSplitterMenuItem);
    
this.generateRotationMenuItem!.setText("Rotate Image Generator");
    
generateRotationMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
generateRotationMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.processingJMenu!.add(this.generateRotationMenuItem);
    
this.createStripImageJMenuItem!.setText("Multi Image Unifier");
    
createStripImageJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
createStripImageJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.processingJMenu!.add(this.createStripImageJMenuItem);
    
this.mirrorJMenuItem!.setText("Mirror Image(s)");
    
mirrorJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
mirrorJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.processingJMenu!.add(this.mirrorJMenuItem);
    
this.scaleImagesJMenuItem!.setText("Scale Image(s)");
    
scaleImagesJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
scaleImagesJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.processingJMenu!.add(this.scaleImagesJMenuItem);
    
this.canvasImagesJMenuItem!.setText("Canvas Image(s)");
    
canvasImagesJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
canvasImagesJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.processingJMenu!.add(this.canvasImagesJMenuItem);
    
this.createIconImagesJMenuItem!.setText("Create Icon Image(s)");
    
createIconImagesJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
createIconsJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.processingJMenu!.add(this.createIconImagesJMenuItem);
    
this.mainJMenuBar!.add(this.processingJMenu);
    
setJMenuBar(this.mainJMenuBar);
    
pack();
    
}


    createStripImageJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            
    var imageUnifierJPanel: ImageUnifierJPanel = new ImageUnifierJPanel(this.imageProcessorInput);
        
        
;
    
this.jPanel1!.removeAll();
    
this.jPanel1!.add(imageUnifierJPanel);
    
this.jPanel1!.updateUI();
    
imageProcessorInputCompositeInterface= imageUnifierJPanel;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "createStripImageJMenuItemActionPerformed", e);
    
}

}


    okJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            this.logUtil!.putF("Starting", this, "okJButtonActionPerformed");
    

    var imageAnalysisResultsArray: ImageAnalysisResults[] = ImageAnalysis.getInstance()!.process(this.imageProcessorInput!.getBufferedImageArray(), this.getColorRangeInterface())!;
        
        
;
    
this.jPanel1!.removeAll();
    
this.jPanel1!.add(new ImageAnalysisResultsJPanel(imageAnalysisResultsArray));
    
this.jPanel1!.updateUI();
    
this.analysisActionJDialog!.setVisible(false);
    
imageProcessorInputCompositeInterface= 
                                        null
                                    ;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "okJButtonActionPerformed", e);
    
}

}


    processingJMenuActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    openImageJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            this.logUtil!.putF("Starting", this, "openImageJMenuItemActionPerformed");
    
this.fileJDialog!.setVisible(true);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "openImageJMenuItemActionPerformed", e);
    
}

}


    public onFiles(files: File[]){
var files = files

        try {
            this.logUtil!.putF("Reading " +files.length +" files.", this, "onFiles");
    
Arrays.sort(files, new object: Comparator<File>()
                                {
                                
    public compare(file1: File, file2: File): number{
    //var file1 = file1
    //var file2 = file2

    var fileNameIndexValue1: number = extractIndexNumberIfAnyFromFileName(file1.getName())!;
        
        
;
    

    var fileNameIndexValue2: number = extractIndexNumberIfAnyFromFileName(file2.getName())!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileNameIndexValue1 -fileNameIndexValue2;
    
}

    extractIndexNumberIfAnyFromFileName(name: string): number{
    //var name = name

    var i: number = 0;
        
        
;
    

        try {
            
    var start: number = name.lastIndexOf('_') +1;
        
        
;
    

    var end: number = name.lastIndexOf('.')!;
        
        
;
    

    var number: string = name.substring(start, end)!;
        
        
;
    
i= Integer.parseInt(number);
    

                //: 
} catch(e) 
            {
i= 0;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return i;
    
}

                                }
                            );
    

    var bufferedImageArray: BufferedImage[] = new Array(files.length);
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < files.length; index++)
        {
bufferedImageArray[index]= ImageIO.read(files[index]!);
    

                        if(bufferedImageArray[index] == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Error("Unable to read file: " +files[index]!.getPath())

                                    }
                                
}

this.imageProcessorInput= new ImageProcessorInput(files, bufferedImageArray);
    
this.fileJDialog!.setVisible(false);
    

                        if(imageProcessorInputCompositeInterface != 
                                    null
                                )
                        
                                    {
                                    imageProcessorInputCompositeInterface!.setImageProcessorInput(this.imageProcessorInput);
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "onFiles", e);
    
}

}


    fileJMenuActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    analyzeJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            this.logUtil!.putF("Starting", this, "analyzeJMenuItemActionPerformed");
    
this.analysisActionJDialog!.setVisible(true);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "analyzeJMenuItemActionPerformed", e);
    
}

}


    generateRotationSpriteJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            this.logUtil!.putF("Starting", this, "generateRotationSpriteJMenuItemActionPerformed");
    

    var spriteImageJPanel: RotationSpriteImageJPanel = new RotationSpriteImageJPanel(this.imageProcessorInput);
        
        
;
    
this.jPanel1!.removeAll();
    
this.jPanel1!.add(spriteImageJPanel);
    
this.jPanel1!.updateUI();
    
imageProcessorInputCompositeInterface= spriteImageJPanel;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "generateRotationSpriteJMenuItemActionPerformed", e);
    
}

}


    generateSpriteSplitterMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            this.logUtil!.putF("Starting", this, "generateRotationSpriteJMenuItemActionPerformed");
    

    var imageJPanel: SpriteSplitterImageJPanel = new SpriteSplitterImageJPanel(this.imageProcessorInput);
        
        
;
    
this.jPanel1!.removeAll();
    
this.jPanel1!.add(imageJPanel);
    
this.jPanel1!.updateUI();
    
imageProcessorInputCompositeInterface= imageJPanel;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "generateRotationMenuItemActionPerformed", e);
    
}

}


    generateRotationMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            this.logUtil!.putF("Starting", this, "generateRotationSpriteJMenuItemActionPerformed");
    

    var rotationImageJPanel: RotationImageJPanel = new RotationImageJPanel(this.imageProcessorInput);
        
        
;
    
this.jPanel1!.removeAll();
    
this.jPanel1!.add(rotationImageJPanel);
    
this.jPanel1!.updateUI();
    
imageProcessorInputCompositeInterface= rotationImageJPanel;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "generateRotationMenuItemActionPerformed", e);
    
}

}


    scaleImagesJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "scaleImagesJMenuItemActionPerformed");
    

    var resizeImageJPanel: ResizeImageJPanel = new ResizeImageJPanel(this.imageProcessorInput);
        
        
;
    
this.jPanel1!.removeAll();
    
this.jPanel1!.add(resizeImageJPanel);
    
this.jPanel1!.updateUI();
    
imageProcessorInputCompositeInterface= resizeImageJPanel;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "scaleImagesJMenuItemActionPerformed", e);
    
}

}


    createIconsJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "createIconsJMenuItemActionPerformed");
    

    var createIconImagesJPanel: CreateIconImagesJPanel = new CreateIconImagesJPanel(this.imageProcessorInput);
        
        
;
    
this.jPanel1!.removeAll();
    
this.jPanel1!.add(createIconImagesJPanel);
    
this.jPanel1!.updateUI();
    
imageProcessorInputCompositeInterface= createIconImagesJPanel;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "scaleImagesJMenuItemActionPerformed", e);
    
}

}


    canvasImagesJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "canvasImagesJMenuItemActionPerformed");
    

    var resizeImageJPanel: CanvasImageJPanel = new CanvasImageJPanel(this.imageProcessorInput);
        
        
;
    
this.jPanel1!.removeAll();
    
this.jPanel1!.add(resizeImageJPanel);
    
this.jPanel1!.updateUI();
    
imageProcessorInputCompositeInterface= resizeImageJPanel;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "scaleImagesJMenuItemActionPerformed", e);
    
}

}


    generateMirrorSpriteMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            this.logUtil!.putF("Starting", this, "generateMirrorSpriteJMenuItemActionPerformed");
    

    var spriteImageJPanel: MirrorSpriteImageJPanel = new MirrorSpriteImageJPanel(this.imageProcessorInput);
        
        
;
    
this.jPanel1!.removeAll();
    
this.jPanel1!.add(spriteImageJPanel);
    
this.jPanel1!.updateUI();
    
imageProcessorInputCompositeInterface= spriteImageJPanel;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "generateMirrorSpriteJMenuItemActionPerformed", e);
    
}

}


    mirrorJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            this.logUtil!.putF("Starting", this, "generateMirrorJMenuItemActionPerformed");
    

    var mirrorImageJPanel: MirrorImageJPanel = new MirrorImageJPanel(this.imageProcessorInput);
        
        
;
    
this.jPanel1!.removeAll();
    
this.jPanel1!.add(mirrorImageJPanel);
    
this.jPanel1!.updateUI();
    
imageProcessorInputCompositeInterface= mirrorImageJPanel;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "generateMirrorJMenuItemActionPerformed", e);
    
}

}


    getColorRangeInterface(): ColorRangeInterface{

    var colorRangeInterface: ColorRangeInterface = new ColorRange() as ColorRangeInterface;
        
        
;
    
colorRangeInterface!.setMinRed(new Integer(this.getMinRedJTextField()!.getText()).
                            toInt());
    
colorRangeInterface!.setMaxRed(new Integer(this.getMaxRedJTextField()!.getText()).
                            toInt());
    
colorRangeInterface!.setMinGreen(new Integer(this.getMinGreenJTextField()!.getText()).
                            toInt());
    
colorRangeInterface!.setMaxGreen(new Integer(this.getMaxGreenJTextField()!.getText()).
                            toInt());
    
colorRangeInterface!.setMinBlue(new Integer(this.getMinBlueJTextField()!.getText()).
                            toInt());
    
colorRangeInterface!.setMaxBlue(new Integer(this.getMaxBlueJTextField()!.getText()).
                            toInt());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return colorRangeInterface;
    
}


    public getMaxBlueJTextField(): javax.swing.JTextField{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxBlueJTextField;
    
}


    public setMaxBlueJTextField(maxBlueJTextField: javax.swing.JTextField){
var maxBlueJTextField = maxBlueJTextField
this.maxBlueJTextField= maxBlueJTextField;
    
}


    public getMaxGreenJTextField(): javax.swing.JTextField{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxGreenJTextField;
    
}


    public setMaxGreenJTextField(maxGreenJTextField: javax.swing.JTextField){
var maxGreenJTextField = maxGreenJTextField
this.maxGreenJTextField= maxGreenJTextField;
    
}


    public getMaxRedJTextField(): javax.swing.JTextField{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxRedJTextField;
    
}


    public setMaxRedJTextField(maxRedJTextField: javax.swing.JTextField){
var maxRedJTextField = maxRedJTextField
this.maxRedJTextField= maxRedJTextField;
    
}


    public getMinBlueJTextField(): javax.swing.JTextField{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return minBlueJTextField;
    
}


    public setMinBlueJTextField(minBlueJTextField: javax.swing.JTextField){
var minBlueJTextField = minBlueJTextField
this.minBlueJTextField= minBlueJTextField;
    
}


    public getMinGreenJTextField(): javax.swing.JTextField{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return minGreenJTextField;
    
}


    public setMinGreenJTextField(minGreenJTextField: javax.swing.JTextField){
var minGreenJTextField = minGreenJTextField
this.minGreenJTextField= minGreenJTextField;
    
}


    public getMinRedJTextField(): javax.swing.JTextField{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return minRedJTextField;
    
}


    public setMinRedJTextField(minRedJTextField: javax.swing.JTextField){
var minRedJTextField = minRedJTextField
this.minRedJTextField= minRedJTextField;
    
}


    private analysisActionJDialog: javax.swing.JDialog

    private analyzeJMenuItem: javax.swing.JMenuItem

    private blueJLabel: javax.swing.JLabel

    private colorRangeJLabel: javax.swing.JLabel

    private createStripImageJMenuItem: javax.swing.JMenuItem

    private fileJMenu: javax.swing.JMenu

    private generateSpriteSplitterMenuItem: javax.swing.JMenuItem

    private generateRotationMenuItem: javax.swing.JMenuItem

    private generateMirrorSpriteMenuItem: javax.swing.JMenuItem

    private generateRotationSpriteJMenuItem: javax.swing.JMenuItem

    private greenJLabel: javax.swing.JLabel

    private jPanel1: javax.swing.JPanel

    private mainJMenuBar: javax.swing.JMenuBar

    private maxBlueJTextField: javax.swing.JTextField

    private maxGreenJTextField: javax.swing.JTextField

    private maxJLabel: javax.swing.JLabel

    private maxRedJTextField: javax.swing.JTextField

    private minBlueJTextField: javax.swing.JTextField

    private minGreenJTextField: javax.swing.JTextField

    private minJLabel: javax.swing.JLabel

    private minRedJTextField: javax.swing.JTextField

    private mirrorJMenuItem: javax.swing.JMenuItem

    private okJButton: javax.swing.JButton

    private openImageJMenuItem: javax.swing.JMenuItem

    private processingJMenu: javax.swing.JMenu

    private redJLabel: javax.swing.JLabel

    private scaleImagesJMenuItem: javax.swing.JMenuItem

    private canvasImagesJMenuItem: javax.swing.JMenuItem

    private createIconImagesJMenuItem: javax.swing.JMenuItem

    private titleJLabel: javax.swing.JLabel

}
                
            

