
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
        



import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringValidationUtil } from "../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { ColorRangeInterface } from "../../../../../../../org/allbinary/media/image/analysis/ColorRangeInterface.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class ColorAtActionScriptConditionJPanel extends javax.swing.JPanel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private colorAtActionScriptConditionInterface: ColorAtActionScriptConditionInterface
public constructor (colorAtActionScriptConditionInterface: ColorAtActionScriptConditionInterface){

            super();
            var colorAtActionScriptConditionInterface = colorAtActionScriptConditionInterface
logUtil!.put(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR)
initComponents()
this.colorAtActionScriptConditionInterface= colorAtActionScriptConditionInterface
this.this.set()
}


    set(){

    var colorRangeInterface: ColorRangeInterface = this.colorAtActionScriptConditionInterface!.getColorRangeInterface()!;
        
        

this.getMinRedJTextField()!.setText(colorRangeInterface!.getMinRed().toString())
this.getMaxRedJTextField()!.setText(colorRangeInterface!.getMaxRed().toString())
this.getMinGreenJTextField()!.setText(colorRangeInterface!.getMinGreen().toString())
this.getMaxGreenJTextField()!.setText(colorRangeInterface!.getMaxGreen().toString())
this.getMinBlueJTextField()!.setText(colorRangeInterface!.getMinBlue().toString())
this.getMaxBlueJTextField()!.setText(colorRangeInterface!.getMaxBlue().toString())
this.getColorAtXJTextField()!.setText(this.colorAtActionScriptConditionInterface!.getPoint()!.x.toString())
this.getColorAtYJTextField()!.setText(this.colorAtActionScriptConditionInterface!.getPoint()!.y.toString())
this.colorAtActionScriptConditionInterface!.log()
}


    update(){

    var colorRangeInterface: ColorRangeInterface = this.colorAtActionScriptConditionInterface!.getColorRangeInterface()!;
        
        

colorRangeInterface!.setMinRed(Integer.valueOf(this.getMinRedJTextField()!.getText())!.toInt())
colorRangeInterface!.setMaxRed(Integer.valueOf(this.getMaxRedJTextField()!.getText())!.toInt())
colorRangeInterface!.setMinGreen(Integer.valueOf(this.getMinGreenJTextField()!.getText())!.toInt())
colorRangeInterface!.setMaxGreen(Integer.valueOf(this.getMaxGreenJTextField()!.getText())!.toInt())
colorRangeInterface!.setMinBlue(Integer.valueOf(this.getMinBlueJTextField()!.getText())!.toInt())
colorRangeInterface!.setMaxBlue(Integer.valueOf(this.getMaxBlueJTextField()!.getText())!.toInt())

    var xString: string = this.getColorAtXJTextField()!.getText()!;
        
        


                        if(!StringValidationUtil.getInstance()!.isEmpty(xString) && StringValidationUtil.getInstance()!.isNumber(xString))
                        
                                    {
                                    this.colorAtActionScriptConditionInterface!.getPoint()!.x= Integer.parseInt(xString)

                                    }
                                

    var yString: string = this.getColorAtYJTextField()!.getText()!;
        
        


                        if(!StringValidationUtil.getInstance()!.isEmpty(yString) && StringValidationUtil.getInstance()!.isNumber(yString))
                        
                                    {
                                    this.colorAtActionScriptConditionInterface!.getPoint()!.y= Integer.parseInt(xString)

                                    }
                                
this.colorAtActionScriptConditionInterface!.log()
}


    public getColorAtXJTextField(): javax.swing.JTextField{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return colorAtXJTextField;
    
}


    public setColorAtXJTextField(colorAtXJTextField: javax.swing.JTextField){
var colorAtXJTextField = colorAtXJTextField
this.colorAtXJTextField= colorAtXJTextField
}


    public getColorAtYJTextField(): javax.swing.JTextField{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return colorAtYJTextField;
    
}


    public setColorAtYJTextField(colorAtYJTextField: javax.swing.JTextField){
var colorAtYJTextField = colorAtYJTextField
this.colorAtYJTextField= colorAtYJTextField
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


    public getYJLabel(): javax.swing.JLabel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return yJLabel;
    
}


    public setYJLabel(yJLabel: javax.swing.JLabel){
var yJLabel = yJLabel
this.yJLabel= yJLabel
}


    public getColorAtActionJDialog(): javax.swing.JDialog{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return colorAtActionJDialog;
    
}


    public setColorAtActionJDialog(colorAtActionJDialog: javax.swing.JDialog){
var colorAtActionJDialog = colorAtActionJDialog
this.colorAtActionJDialog= colorAtActionJDialog
}


    initComponents(){
colorAtActionJDialog= javax.swing.JDialog()
titleJLabel= javax.swing.JLabel()
locationJLabel= javax.swing.JLabel()
colorAtXJTextField= javax.swing.JTextField()
xJLabel= javax.swing.JLabel()
yJLabel= javax.swing.JLabel()
colorAtYJTextField= javax.swing.JTextField()
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
colorAtActionJButton= javax.swing.JButton()
jLabel1= javax.swing.JLabel()
colorAtActionJDialog!.setMinimumSize(java.awt.Dimension(350, 250))
titleJLabel!.setText("              Color At Action Options            ")
locationJLabel!.setText("Location:")
xJLabel!.setText("X:")
yJLabel!.setText("Y:")
colorRangeJLabel!.setText("Color Range")
redJLabel!.setText("Red:")
minJLabel!.setText("Minimum")
maxJLabel!.setText("Maximum")
greenJLabel!.setText("Green:")
blueJLabel!.setText("Blue:")
okJButton!.setText("OK")
okJButton!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
okJButtonActionPerformed(evt)
}

                                }
                            )

    var colorAtActionJDialogLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(colorAtActionJDialog!.getContentPane());
        
        

colorAtActionJDialog!.getContentPane()!.setLayout(colorAtActionJDialogLayout)
colorAtActionJDialogLayout!.setHorizontalGroup(colorAtActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(colorAtActionJDialogLayout!.createSequentialGroup()!.addContainerGap()!.addGroup(colorAtActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(colorAtActionJDialogLayout!.createSequentialGroup()!.addGroup(colorAtActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)!.addComponent(okJButton)!.addGroup(colorAtActionJDialogLayout!.createSequentialGroup()!.addGroup(colorAtActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)!.addGroup(colorAtActionJDialogLayout!.createSequentialGroup()!.addGroup(colorAtActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(blueJLabel)!.addComponent(greenJLabel)!.addComponent(redJLabel)!.addComponent(colorRangeJLabel))!.addGap(29, 29, 29))!.addGroup(javax.swing.GroupLayout.Alignment.TRAILING, colorAtActionJDialogLayout!.createSequentialGroup()!.addComponent(locationJLabel)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addComponent(xJLabel)!.addGap(18, 18, 18)))!.addGroup(colorAtActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(minBlueJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 40, Short.MAX_VALUE)!.addComponent(minGreenJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 40, Short.MAX_VALUE)!.addComponent(minJLabel, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addComponent(minRedJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 40, Short.MAX_VALUE)!.addComponent(colorAtXJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 40, Short.MAX_VALUE))!.addGap(16, 16, 16)))!.addGap(6, 6, 6)!.addComponent(yJLabel)!.addGap(24, 24, 24)!.addGroup(colorAtActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)!.addComponent(maxJLabel, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addGroup(javax.swing.GroupLayout.Alignment.LEADING, colorAtActionJDialogLayout!.createSequentialGroup()!.addGap(1, 1, 1)!.addGroup(colorAtActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)!.addComponent(maxBlueJTextField, javax.swing.GroupLayout.Alignment.TRAILING)!.addComponent(maxRedJTextField, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 43, Short.MAX_VALUE)!.addComponent(maxGreenJTextField, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 43, javax.swing.GroupLayout.PREFERRED_SIZE)))!.addComponent(colorAtYJTextField, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, 44, Short.MAX_VALUE))!.addGap(22, 22, 22))!.addGroup(javax.swing.GroupLayout.Alignment.TRAILING, colorAtActionJDialogLayout!.createSequentialGroup()!.addComponent(titleJLabel)!.addGap(33, 33, 33)))))
colorAtActionJDialogLayout!.setVerticalGroup(colorAtActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(colorAtActionJDialogLayout!.createSequentialGroup()!.addContainerGap()!.addComponent(titleJLabel)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(colorAtActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(colorAtActionJDialogLayout!.createSequentialGroup()!.addGap(15, 15, 15)!.addGroup(colorAtActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(xJLabel)!.addComponent(locationJLabel)!.addComponent(colorAtXJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(yJLabel))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(colorAtActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(minJLabel)!.addComponent(colorRangeJLabel))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(colorAtActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(minRedJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(redJLabel))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(colorAtActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(greenJLabel)!.addComponent(minGreenJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(colorAtActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(blueJLabel)!.addComponent(minBlueJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 17, Short.MAX_VALUE)!.addComponent(okJButton))!.addGroup(colorAtActionJDialogLayout!.createSequentialGroup()!.addGap(14, 14, 14)!.addComponent(colorAtYJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(maxJLabel)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(maxRedJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(maxGreenJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(maxBlueJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))!.addContainerGap()))
setPreferredSize(java.awt.Dimension(100, 0))
colorAtActionJButton!.setText("Edit")
colorAtActionJButton!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
colorAtActionJButtonActionPerformed(evt)
}

                                }
                            )
jLabel1!.setText("Color At:")

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        

this.this.setLayout(layout)
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(jLabel1)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 15, Short.MAX_VALUE)!.addComponent(colorAtActionJButton)))
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel1)!.addComponent(colorAtActionJButton)))
}


    okJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.this.update()
this.getColorAtActionJDialog()!.setVisible(false)
}


    colorAtActionJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.getColorAtActionJDialog()!.setVisible(true)
}


    private blueJLabel: javax.swing.JLabel

    private colorAtActionJButton: javax.swing.JButton

    private colorAtActionJDialog: javax.swing.JDialog

    private colorAtXJTextField: javax.swing.JTextField

    private colorAtYJTextField: javax.swing.JTextField

    private colorRangeJLabel: javax.swing.JLabel

    private greenJLabel: javax.swing.JLabel

    private jLabel1: javax.swing.JLabel

    private locationJLabel: javax.swing.JLabel

    private maxBlueJTextField: javax.swing.JTextField

    private maxGreenJTextField: javax.swing.JTextField

    private maxJLabel: javax.swing.JLabel

    private maxRedJTextField: javax.swing.JTextField

    private minBlueJTextField: javax.swing.JTextField

    private minGreenJTextField: javax.swing.JTextField

    private minJLabel: javax.swing.JLabel

    private minRedJTextField: javax.swing.JTextField

    private okJButton: javax.swing.JButton

    private redJLabel: javax.swing.JLabel

    private titleJLabel: javax.swing.JLabel

    private xJLabel: javax.swing.JLabel

    private yJLabel: javax.swing.JLabel

}
                
            

