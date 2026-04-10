
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
        



import { swing } from "../../../../../../../../../javax/swing.js";

    
import { KeySingletonFactory } from "../../../../../../../../../org/allbinary/input/KeySingletonFactory.js";

    
import { InputRobot } from "../../../../../../../../../org/allbinary/input/automation/robot/InputRobot.js";

    
import { InputRobotFactory } from "../../../../../../../../../org/allbinary/input/automation/robot/InputRobotFactory.js";

    
import { TempInputRobotNames } from "../../../../../../../../../org/allbinary/input/automation/robot/TempInputRobotNames.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringValidationUtil } from "../../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CommonPhoneStrings } from "../../../../../../../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { CommonStrings } from "../../../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class KeyboardActionScriptInputJPanel extends javax.swing.JPanel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private keyActionScriptInputInterface: KeyboardActionScriptInputInterface
public constructor (keyActionScriptInputInterface: KeyboardActionScriptInputInterface){

            super();
            var keyActionScriptInputInterface = keyActionScriptInputInterface
put(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR)
initComponents()
this.keyActionScriptInputInterface= keyActionScriptInputInterface

    var defaultComboBoxModel: DefaultComboBoxModel = new DefaultComboBoxModel();
        
        

addElement(TempInputRobotNames.DX_NAME)
addElement(InputRobot.NAME)
setModel(defaultComboBoxModel)
setModel(KeyNameDefaultComboBoxModelFactory.getInstance())
setModel(KeyCharDefaultComboBoxModelFactory.getInstance())

    
                        if(this.keyActionScriptInputInterface!.isNormal())
                        
                                    {
                                    setSelected(true)
setSelected(false)
setSelected(false)

                                    }
                                
                             else 
    
                        if(this.keyActionScriptInputInterface!.isPress())
                        
                                    {
                                    setSelected(false)
setSelected(true)
setSelected(false)

                                    }
                                
                             else 
    
                        if(this.keyActionScriptInputInterface!.isRelease())
                        
                                    {
                                    setSelected(false)
setSelected(false)
setSelected(true)

                                    }
                                
this.set()
}


    set(){

    var inputTypeComboBoxModel: ComboBoxModel = this.inputAutomationTypeJComboBox!.getModel()!;
        
        

setSelectedItem(this.keyActionScriptInputInterface!.getInputRobotInterface()!.getName())
setText(this.keyActionScriptInputInterface!.getText())
setText(this.keyActionScriptInputInterface!.getDelayBetweenKeys().toString())
setText(this.keyActionScriptInputInterface!.getTime().toString())
log()
}


                @Throws(Exception::class)
            
    updateInputType(){

    var comboBoxModel: ComboBoxModel = this.inputAutomationTypeJComboBox!.getModel()!;
        
        


    var selectedItem: string = comboBoxModel!.getSelectedItem() as String;
        
        


    
                        if(!StringValidationUtil.getInstance()!.isEmpty(selectedItem))
                        
                                    {
                                    setInputRobotInterface(InputRobotFactory.getInstance()!.get(selectedItem))

                                    }
                                
}


    getSelectedKey(): Integer{

    var comboBoxModel: ComboBoxModel = this.keyNameJComboBox!.getModel()!;
        
        


    var selectedItem: string = comboBoxModel!.getSelectedItem() as String;
        
        


    
                        if(!StringValidationUtil.getInstance()!.isEmpty(selectedItem))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return KeySingletonFactory.getHashtable()!.get(selectedItem as Object) as Integer;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    updateKeys(){

    var text: string = this.textJTextField!.getText()!;
        
        

setText(text)
}


                @Throws(Exception::class)
            
    update(){
this.updateInputType()
this.updateKeys()
setTime(Integer.valueOf(this.timeJTextField!.getText())!.toInt())
log()
}


    public getKeyActionJDialog(): javax.swing.JDialog{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyActionJDialog;
    
}


    public setKeyActionJDialog(keyActionJDialog: javax.swing.JDialog){
var keyActionJDialog = keyActionJDialog
this.keyActionJDialog= keyActionJDialog
}


    initComponents(){
keyActionJDialog= javax.swing.JDialog()
titleJLabel= javax.swing.JLabel()
addKeyJLabel= javax.swing.JLabel()
keyNameJComboBox= javax.swing.JComboBox()
timeJTextField= javax.swing.JTextField()
holdTimeJLabel= javax.swing.JLabel()
inputAutomationTypeJComboBox= javax.swing.JComboBox()
inputTypeJLabel= javax.swing.JLabel()
delayJTextField= javax.swing.JTextField()
delayBetweenJLabel= javax.swing.JLabel()
testJLabel= javax.swing.JLabel()
textJTextField= javax.swing.JTextField()
pressJRadioButton= javax.swing.JRadioButton()
releaseJRadioButton= javax.swing.JRadioButton()
normalJRadioButton= javax.swing.JRadioButton()
simultaneousJRadioButton= javax.swing.JRadioButton()
sequenceJRadioButton= javax.swing.JRadioButton()
jPanel1= javax.swing.JPanel()
okJButton= javax.swing.JButton()
keyIntegerJComboBox= javax.swing.JComboBox()
keyActionJButton= javax.swing.JButton()
jLabel1= javax.swing.JLabel()
setMinimumSize(java.awt.Dimension(255, 280))
setHorizontalAlignment(javax.swing.SwingConstants.CENTER)
setText("Keyboard Input Options")
setText("Add Key:")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
keyNameJComboBoxActionPerformed(evt)
}

                                }
                            )
setText(CommonPhoneStrings.getInstance()!.ZERO)
setText("Hold Time (ms):")
setText("Input Type:")
setText(CommonPhoneStrings.getInstance()!.ZERO)
setText("Delay Between Keys (ms):")
setText("Text:")
setText(CommonPhoneStrings.getInstance()!.ZERO)
setText("Press")
setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0))
setMargin(java.awt.Insets(0, 0, 0, 0))
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
pressJRadioButtonActionPerformed(evt)
}

                                }
                            )
setText("Release")
setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0))
setMargin(java.awt.Insets(0, 0, 0, 0))
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
releaseJRadioButtonActionPerformed(evt)
}

                                }
                            )
setSelected(true)
setText("Normal")
setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0))
setMargin(java.awt.Insets(0, 0, 0, 0))
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
normalJRadioButtonActionPerformed(evt)
}

                                }
                            )
setSelected(true)
setText("Simultaneous")
setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0))
setMargin(java.awt.Insets(0, 0, 0, 0))
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
simultaneousJRadioButtonActionPerformed(evt)
}

                                }
                            )
setText("Sequence")
setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0))
setMargin(java.awt.Insets(0, 0, 0, 0))
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
sequenceJRadioButtonActionPerformed(evt)
}

                                }
                            )
setText("OK")
setHorizontalTextPosition(javax.swing.SwingConstants.CENTER)
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
okJButtonActionPerformed(evt)
}

                                }
                            )
add(okJButton)
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
keyIntegerJComboBoxActionPerformed(evt)
}

                                }
                            )

    var keyActionJDialogLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(keyActionJDialog!.getContentPane());
        
        

setLayout(keyActionJDialogLayout)
setHorizontalGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(keyActionJDialogLayout!.createSequentialGroup()!.addContainerGap()!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(keyActionJDialogLayout!.createSequentialGroup()!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)!.addComponent(addKeyJLabel, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addComponent(inputTypeJLabel, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)!.addComponent(inputAutomationTypeJComboBox, 0, 148, Short.MAX_VALUE)!.addComponent(textJTextField, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, 148, Short.MAX_VALUE)!.addGroup(keyActionJDialogLayout!.createSequentialGroup()!.addComponent(keyNameJComboBox, 0, 101, Short.MAX_VALUE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(keyIntegerJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, 41, javax.swing.GroupLayout.PREFERRED_SIZE))))!.addComponent(testJLabel, javax.swing.GroupLayout.PREFERRED_SIZE, 60, javax.swing.GroupLayout.PREFERRED_SIZE)!.addGroup(keyActionJDialogLayout!.createSequentialGroup()!.addComponent(normalJRadioButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(pressJRadioButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(releaseJRadioButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 48, javax.swing.GroupLayout.PREFERRED_SIZE))!.addGroup(javax.swing.GroupLayout.Alignment.TRAILING, keyActionJDialogLayout!.createSequentialGroup()!.addComponent(holdTimeJLabel)!.addGap(22, 22, 22)!.addComponent(timeJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 113, Short.MAX_VALUE))!.addGroup(keyActionJDialogLayout!.createSequentialGroup()!.addComponent(delayBetweenJLabel)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 15, Short.MAX_VALUE)!.addComponent(delayJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 68, javax.swing.GroupLayout.PREFERRED_SIZE))!.addGroup(keyActionJDialogLayout!.createSequentialGroup()!.addComponent(simultaneousJRadioButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(sequenceJRadioButton)))!.addContainerGap())!.addComponent(titleJLabel, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 229, Short.MAX_VALUE)!.addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, 229, Short.MAX_VALUE))
setVerticalGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(keyActionJDialogLayout!.createSequentialGroup()!.addComponent(titleJLabel)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(inputTypeJLabel)!.addComponent(inputAutomationTypeJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(addKeyJLabel)!.addComponent(keyIntegerJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(keyNameJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(testJLabel)!.addComponent(textJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(pressJRadioButton)!.addComponent(normalJRadioButton)!.addComponent(releaseJRadioButton))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(holdTimeJLabel)!.addComponent(timeJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(delayBetweenJLabel)!.addComponent(delayJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(simultaneousJRadioButton)!.addComponent(sequenceJRadioButton))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap()))
setMinimumSize(java.awt.Dimension(100, 0))
setText("Edit")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
keyActionJButtonActionPerformed(evt)
}

                                }
                            )
setText("Key:")

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        

this.setLayout(layout)
setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(jLabel1)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 49, Short.MAX_VALUE)!.addComponent(keyActionJButton)))
setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel1)!.addComponent(keyActionJButton)))
}


    prependText(integer: Integer){
var integer = integer

    
                        if(integer != 
                                    null
                                )
                        
                                    {
                                    
    var newKey: string = "&#" +integer.toString() +";";
        
        

setText(newKey +this.textJTextField!.getText())

                                    }
                                
}


    keyIntegerJComboBoxActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
getSelectedIndex()
setSelectedIndex(this.keyIntegerJComboBox!.getSelectedIndex())
}


    sequenceJRadioButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

    
                        if(this.sequenceJRadioButton!.isSelected())
                        
                                    {
                                    setText(CommonPhoneStrings.getInstance()!.ONE)
setSelected(false)

                                    }
                                
}


    simultaneousJRadioButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

    
                        if(this.simultaneousJRadioButton!.isSelected())
                        
                                    {
                                    setText(CommonPhoneStrings.getInstance()!.ZERO)
setSelected(false)

                                    }
                                
}


    keyNameJComboBoxActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

    var integer: Integer = getSelectedKey()!;
        
        

this.prependText(integer)
setSelectedIndex(this.keyNameJComboBox!.getSelectedIndex())
}


    okJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            this.update()
setVisible(false)
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "okButtonActionPerformed", e)
}

}


    keyActionJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
setVisible(true)
}


    normalJRadioButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

    
                        if(this.normalJRadioButton!.isSelected())
                        
                                    {
                                    setNormal()
setSelected(false)
setSelected(false)

                                    }
                                
}


    releaseJRadioButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

    
                        if(this.releaseJRadioButton!.isSelected())
                        
                                    {
                                    setRelease(true)
setPress(false)
setSelected(false)
setSelected(false)

                                    }
                                
}


    pressJRadioButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

    
                        if(this.pressJRadioButton!.isSelected())
                        
                                    {
                                    setPress(true)
setRelease(false)
setSelected(false)
setSelected(false)

                                    }
                                
}


    private addKeyJLabel: javax.swing.JLabel

    private delayBetweenJLabel: javax.swing.JLabel

    private delayJTextField: javax.swing.JTextField

    private holdTimeJLabel: javax.swing.JLabel

    private inputAutomationTypeJComboBox: javax.swing.JComboBox

    private inputTypeJLabel: javax.swing.JLabel

    private jLabel1: javax.swing.JLabel

    private jPanel1: javax.swing.JPanel

    private keyActionJButton: javax.swing.JButton

    private keyActionJDialog: javax.swing.JDialog

    private keyIntegerJComboBox: javax.swing.JComboBox

    private keyNameJComboBox: javax.swing.JComboBox

    private normalJRadioButton: javax.swing.JRadioButton

    private okJButton: javax.swing.JButton

    private pressJRadioButton: javax.swing.JRadioButton

    private releaseJRadioButton: javax.swing.JRadioButton

    private sequenceJRadioButton: javax.swing.JRadioButton

    private simultaneousJRadioButton: javax.swing.JRadioButton

    private testJLabel: javax.swing.JLabel

    private textJTextField: javax.swing.JTextField

    private timeJTextField: javax.swing.JTextField

    private titleJLabel: javax.swing.JLabel

}
                
            

