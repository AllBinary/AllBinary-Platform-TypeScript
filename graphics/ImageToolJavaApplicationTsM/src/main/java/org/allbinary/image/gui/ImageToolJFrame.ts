
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

    

export class ImageToolJFrame extends javax.swing.JFrame
                , FileJDialogListenerInterface {
        

    private imageProcessorInputCompositeInterface: ImageProcessorInputCompositeInterface

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private fileJDialog: FileJDialog

    private imageProcessorInput: ImageProcessorInput
public constructor (){

            super();
            initComponents()

    var commonPhoneStrings: CommonPhoneStrings = CommonPhoneStrings.getInstance()!;
        
        

this.setSize(640, 480)
setText("255")
setText("255")
setText("255")
setText(commonPhoneStrings!.ZERO)
setText(commonPhoneStrings!.ZERO)
setText(commonPhoneStrings!.ZERO)
fileJDialog= FileJDialog()
addFinishedListener(this)
}


    initComponents(){
analysisActionJDialog= javax.swing.JDialog()
titleJLabel= javax.swing.JLabel()
colorRangeJLabel= javax.swing.JLabel()
redJLabel= javax.swing.JLabel()
minJLabel= javax.swing.JLabel()
maxJLabel= javax.swing.JLabel()
greenJLabel= javax.swing.JLabel()
blueJLabel= javax.swing.JLabel()
minRedJTextField= javax.swing.JTextField()
maxRedJTextField= javax.swing.JTextField()
maxGreenJTextField= javax.swing.JTextField()
minBlueJTextField= javax.swing.JTextField()
maxBlueJTextField= javax.swing.JTextField()
okJButton= javax.swing.JButton()
minGreenJTextField= javax.swing.JTextField()
jPanel1= javax.swing.JPanel()
mainJMenuBar= javax.swing.JMenuBar()
fileJMenu= javax.swing.JMenu()
openImageJMenuItem= javax.swing.JMenuItem()
processingJMenu= javax.swing.JMenu()
analyzeJMenuItem= javax.swing.JMenuItem()
generateSpriteSplitterMenuItem= javax.swing.JMenuItem()
generateRotationMenuItem= javax.swing.JMenuItem()
generateMirrorSpriteMenuItem= javax.swing.JMenuItem()
generateRotationSpriteJMenuItem= javax.swing.JMenuItem()
createStripImageJMenuItem= javax.swing.JMenuItem()
mirrorJMenuItem= javax.swing.JMenuItem()
scaleImagesJMenuItem= javax.swing.JMenuItem()
canvasImagesJMenuItem= javax.swing.JMenuItem()
createIconImagesJMenuItem= javax.swing.JMenuItem()
setMinimumSize(java.awt.Dimension(350, 250))
setText("              Color At Action Options            ")
setText("Color Range")
setText("Red:")
setText("Minimum")
setText("Maximum")
setText("Green:")
setText("Blue:")
setText("OK")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
okJButtonActionPerformed(evt)
}

                                }
                            )

    var analysisActionJDialogLayout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(analysisActionJDialog!.getContentPane());
        
        

setLayout(analysisActionJDialogLayout)
setHorizontalGroup(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(analysisActionJDialogLayout!.createSequentialGroup()!.addContainerGap()!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(analysisActionJDialogLayout!.createSequentialGroup()!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(blueJLabel)!.add(greenJLabel)!.add(redJLabel)!.add(colorRangeJLabel))!.add(29, 29, 29)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(org.jdesktop.layout.GroupLayout.TRAILING, minJLabel, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, 58, Short.MAX_VALUE)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.TRAILING, false)!.add(org.jdesktop.layout.GroupLayout.LEADING, minBlueJTextField)!.add(org.jdesktop.layout.GroupLayout.LEADING, minGreenJTextField)!.add(org.jdesktop.layout.GroupLayout.LEADING, minRedJTextField, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, 42, Short.MAX_VALUE)!.add(org.jdesktop.layout.GroupLayout.LEADING, okJButton)))!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.TRAILING)!.add(org.jdesktop.layout.GroupLayout.LEADING, analysisActionJDialogLayout!.createSequentialGroup()!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.TRAILING, false)!.add(org.jdesktop.layout.GroupLayout.LEADING, maxRedJTextField)!.add(org.jdesktop.layout.GroupLayout.LEADING, analysisActionJDialogLayout!.createSequentialGroup()!.add(1, 1, 1)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(maxBlueJTextField)!.add(maxGreenJTextField, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, 43, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE))))!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED, 17, Short.MAX_VALUE))!.add(org.jdesktop.layout.GroupLayout.LEADING, maxJLabel, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, 61, Short.MAX_VALUE))!.addContainerGap())!.add(org.jdesktop.layout.GroupLayout.TRAILING, analysisActionJDialogLayout!.createSequentialGroup()!.add(titleJLabel)!.add(25, 25, 25)))))
setVerticalGroup(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(analysisActionJDialogLayout!.createSequentialGroup()!.add(titleJLabel)!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.BASELINE)!.add(minJLabel)!.add(colorRangeJLabel)!.add(maxJLabel))!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.TRAILING)!.add(redJLabel)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.BASELINE)!.add(minRedJTextField, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.add(maxRedJTextField, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)))!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.TRAILING)!.add(greenJLabel)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.BASELINE)!.add(minGreenJTextField, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.add(maxGreenJTextField, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)))!.addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.TRAILING)!.add(blueJLabel)!.add(analysisActionJDialogLayout!.createParallelGroup(org.jdesktop.layout.GroupLayout.BASELINE)!.add(minBlueJTextField, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.add(maxBlueJTextField, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)))!.add(16, 16, 16)!.add(okJButton)!.addContainerGap(org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE)
setLayout(java.awt.GridLayout(1, 0))
setLayout(java.awt.GridLayout(1, 0))
add(jPanel1)
setText("File")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
fileJMenuActionPerformed(evt)
}

                                }
                            )
setText("Open")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
openImageJMenuItemActionPerformed(evt)
}

                                }
                            )
add(openImageJMenuItem)
add(fileJMenu)
setText("Processing")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
processingJMenuActionPerformed(evt)
}

                                }
                            )
setText("Image Analyze")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
analyzeJMenuItemActionPerformed(evt)
}

                                }
                            )
add(analyzeJMenuItem)
setText("Mirror Sprite Generator")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
generateMirrorSpriteMenuItemActionPerformed(evt)
}

                                }
                            )
add(generateMirrorSpriteMenuItem)
setText("Rotation Sprite Generator")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
generateRotationSpriteJMenuItemActionPerformed(evt)
}

                                }
                            )
add(generateRotationSpriteJMenuItem)
setText("Sprite Splitter Generator")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
generateSpriteSplitterMenuItemActionPerformed(evt)
}

                                }
                            )
add(generateSpriteSplitterMenuItem)
setText("Rotate Image Generator")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
generateRotationMenuItemActionPerformed(evt)
}

                                }
                            )
add(generateRotationMenuItem)
setText("Multi Image Unifier")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
createStripImageJMenuItemActionPerformed(evt)
}

                                }
                            )
add(createStripImageJMenuItem)
setText("Mirror Image(s)")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
mirrorJMenuItemActionPerformed(evt)
}

                                }
                            )
add(mirrorJMenuItem)
setText("Scale Image(s)")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
scaleImagesJMenuItemActionPerformed(evt)
}

                                }
                            )
add(scaleImagesJMenuItem)
setText("Canvas Image(s)")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
canvasImagesJMenuItemActionPerformed(evt)
}

                                }
                            )
add(canvasImagesJMenuItem)
setText("Create Icon Image(s)")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
createIconsJMenuItemActionPerformed(evt)
}

                                }
                            )
add(createIconImagesJMenuItem)
add(processingJMenu)
setJMenuBar(mainJMenuBar)
pack()
}


    createStripImageJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            
    var imageUnifierJPanel: ImageUnifierJPanel = new ImageUnifierJPanel(this.imageProcessorInput);
        
        

removeAll()
add(imageUnifierJPanel)
updateUI()
imageProcessorInputCompositeInterface= imageUnifierJPanel
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "createStripImageJMenuItemActionPerformed", e)
}

}


    okJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            put("Starting", this, "okJButtonActionPerformed")

    var imageAnalysisResultsArray: ImageAnalysisResults[] = ImageAnalysis.getInstance()!.process(imageProcessorInput!.getBufferedImageArray(), this.getColorRangeInterface())!;
        
        

removeAll()
add(ImageAnalysisResultsJPanel(imageAnalysisResultsArray))
updateUI()
setVisible(false)
imageProcessorInputCompositeInterface= 
                                        null
                                    
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "okJButtonActionPerformed", e)
}

}


    processingJMenuActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    openImageJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            put("Starting", this, "openImageJMenuItemActionPerformed")
setVisible(true)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "openImageJMenuItemActionPerformed", e)
}

}


    public onFiles(files: File[]){
var files = files

        try {
            put("Reading " +files.length +" files.", this, "onFiles")
sort(files, object: Comparator<File>()
                                {
                                
    public compare(file1: File, file2: File): number{
    //var file1 = file1
    //var file2 = file2

    var fileNameIndexValue1: number = extractIndexNumberIfAnyFromFileName(file1.getName())!;
        
        


    var fileNameIndexValue2: number = extractIndexNumberIfAnyFromFileName(file2.getName())!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileNameIndexValue1 -fileNameIndexValue2;
    
}

    extractIndexNumberIfAnyFromFileName(name: string): number{
    //var name = name

    var i: number = 0;
        
        


        try {
            
    var start: number = name.lastIndexOf('_') +1;
        
        


    var end: number = name.lastIndexOf('.')!;
        
        


    var number: string = name.substring(start, end)!;
        
        

i= Integer.parseInt(number)
} catch(e: Exception)
            {
i= 0
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return i;
    
}

                                }
                            )

    var bufferedImageArray: BufferedImage[] = new Array(files.length);
        
        





                        for (
    var index: number = 0;
        
        
index < files.length; index++)
        {
bufferedImageArray[index]= ImageIO.read(files[index]!)

    
                        if(bufferedImageArray[index] == 
                                    null
                                )
                        
                                    {
                                    


                            throw Exception("Unable to read file: " +files[index]!.getPath())

                                    }
                                
}

this.imageProcessorInput= ImageProcessorInput(files, bufferedImageArray)
setVisible(false)

    
                        if(imageProcessorInputCompositeInterface != 
                                    null
                                )
                        
                                    {
                                    setImageProcessorInput(this.imageProcessorInput)

                                    }
                                
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "onFiles", e)
}

}


    fileJMenuActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    analyzeJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            put("Starting", this, "analyzeJMenuItemActionPerformed")
setVisible(true)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "analyzeJMenuItemActionPerformed", e)
}

}


    generateRotationSpriteJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            put("Starting", this, "generateRotationSpriteJMenuItemActionPerformed")

    var spriteImageJPanel: RotationSpriteImageJPanel = new RotationSpriteImageJPanel(this.imageProcessorInput);
        
        

removeAll()
add(spriteImageJPanel)
updateUI()
imageProcessorInputCompositeInterface= spriteImageJPanel
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "generateRotationSpriteJMenuItemActionPerformed", e)
}

}


    generateSpriteSplitterMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            put("Starting", this, "generateRotationSpriteJMenuItemActionPerformed")

    var imageJPanel: SpriteSplitterImageJPanel = new SpriteSplitterImageJPanel(this.imageProcessorInput);
        
        

removeAll()
add(imageJPanel)
updateUI()
imageProcessorInputCompositeInterface= imageJPanel
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "generateRotationMenuItemActionPerformed", e)
}

}


    generateRotationMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            put("Starting", this, "generateRotationSpriteJMenuItemActionPerformed")

    var rotationImageJPanel: RotationImageJPanel = new RotationImageJPanel(this.imageProcessorInput);
        
        

removeAll()
add(rotationImageJPanel)
updateUI()
imageProcessorInputCompositeInterface= rotationImageJPanel
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "generateRotationMenuItemActionPerformed", e)
}

}


    scaleImagesJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            put(this.commonStrings!.START, this, "scaleImagesJMenuItemActionPerformed")

    var resizeImageJPanel: ResizeImageJPanel = new ResizeImageJPanel(this.imageProcessorInput);
        
        

removeAll()
add(resizeImageJPanel)
updateUI()
imageProcessorInputCompositeInterface= resizeImageJPanel
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "scaleImagesJMenuItemActionPerformed", e)
}

}


    createIconsJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            put(this.commonStrings!.START, this, "createIconsJMenuItemActionPerformed")

    var createIconImagesJPanel: CreateIconImagesJPanel = new CreateIconImagesJPanel(this.imageProcessorInput);
        
        

removeAll()
add(createIconImagesJPanel)
updateUI()
imageProcessorInputCompositeInterface= createIconImagesJPanel
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "scaleImagesJMenuItemActionPerformed", e)
}

}


    canvasImagesJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            put(this.commonStrings!.START, this, "canvasImagesJMenuItemActionPerformed")

    var resizeImageJPanel: CanvasImageJPanel = new CanvasImageJPanel(this.imageProcessorInput);
        
        

removeAll()
add(resizeImageJPanel)
updateUI()
imageProcessorInputCompositeInterface= resizeImageJPanel
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "scaleImagesJMenuItemActionPerformed", e)
}

}


    generateMirrorSpriteMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            put("Starting", this, "generateMirrorSpriteJMenuItemActionPerformed")

    var spriteImageJPanel: MirrorSpriteImageJPanel = new MirrorSpriteImageJPanel(this.imageProcessorInput);
        
        

removeAll()
add(spriteImageJPanel)
updateUI()
imageProcessorInputCompositeInterface= spriteImageJPanel
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "generateMirrorSpriteJMenuItemActionPerformed", e)
}

}


    mirrorJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            put("Starting", this, "generateMirrorJMenuItemActionPerformed")

    var mirrorImageJPanel: MirrorImageJPanel = new MirrorImageJPanel(this.imageProcessorInput);
        
        

removeAll()
add(mirrorImageJPanel)
updateUI()
imageProcessorInputCompositeInterface= mirrorImageJPanel
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "generateMirrorJMenuItemActionPerformed", e)
}

}


    getColorRangeInterface(): ColorRangeInterface{

    var colorRangeInterface: ColorRangeInterface = ColorRange() as ColorRangeInterface;
        
        

setMinRed(Integer(this.getMinRedJTextField()!.getText()).
                            toInt())
setMaxRed(Integer(this.getMaxRedJTextField()!.getText()).
                            toInt())
setMinGreen(Integer(this.getMinGreenJTextField()!.getText()).
                            toInt())
setMaxGreen(Integer(this.getMaxGreenJTextField()!.getText()).
                            toInt())
setMinBlue(Integer(this.getMinBlueJTextField()!.getText()).
                            toInt())
setMaxBlue(Integer(this.getMaxBlueJTextField()!.getText()).
                            toInt())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return colorRangeInterface;
    
}


    public getMaxBlueJTextField(): javax.swing.JTextField{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxBlueJTextField;
    
}


    public setMaxBlueJTextField(maxBlueJTextField: javax.swing.JTextField){
var maxBlueJTextField = maxBlueJTextField
this.maxBlueJTextField= maxBlueJTextField
}


    public getMaxGreenJTextField(): javax.swing.JTextField{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxGreenJTextField;
    
}


    public setMaxGreenJTextField(maxGreenJTextField: javax.swing.JTextField){
var maxGreenJTextField = maxGreenJTextField
this.maxGreenJTextField= maxGreenJTextField
}


    public getMaxRedJTextField(): javax.swing.JTextField{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxRedJTextField;
    
}


    public setMaxRedJTextField(maxRedJTextField: javax.swing.JTextField){
var maxRedJTextField = maxRedJTextField
this.maxRedJTextField= maxRedJTextField
}


    public getMinBlueJTextField(): javax.swing.JTextField{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return minBlueJTextField;
    
}


    public setMinBlueJTextField(minBlueJTextField: javax.swing.JTextField){
var minBlueJTextField = minBlueJTextField
this.minBlueJTextField= minBlueJTextField
}


    public getMinGreenJTextField(): javax.swing.JTextField{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return minGreenJTextField;
    
}


    public setMinGreenJTextField(minGreenJTextField: javax.swing.JTextField){
var minGreenJTextField = minGreenJTextField
this.minGreenJTextField= minGreenJTextField
}


    public getMinRedJTextField(): javax.swing.JTextField{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return minRedJTextField;
    
}


    public setMinRedJTextField(minRedJTextField: javax.swing.JTextField){
var minRedJTextField = minRedJTextField
this.minRedJTextField= minRedJTextField
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
                
            

