
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
        



import { InputEvent } from "../../../../../../../../../java/awt/event/InputEvent.js";

    
import { swing } from "../../../../../../../../../javax/swing.js";

    
import { InputRobot } from "../../../../../../../../../org/allbinary/input/automation/robot/InputRobot.js";

    
import { InputRobotFactory } from "../../../../../../../../../org/allbinary/input/automation/robot/InputRobotFactory.js";

    
import { TempInputRobotNames } from "../../../../../../../../../org/allbinary/input/automation/robot/TempInputRobotNames.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringValidationUtil } from "../../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CommonLabels } from "../../../../../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonPhoneStrings } from "../../../../../../../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { CommonStrings } from "../../../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class MouseActionScriptInputJPanel extends javax.swing.JPanel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private mouseActionScriptInputInterface: MouseActionScriptInputInterface
public constructor (mouseActionScriptInputInterface: MouseActionScriptInputInterface){

            super();
                //var mouseActionScriptInputInterface = mouseActionScriptInputInterface
put(CommonLabels.getInstance()!.START +mouseActionScriptInputInterface, this, commonStrings!.CONSTRUCTOR)
initComponents()
this.mouseActionScriptInputInterface= mouseActionScriptInputInterface

    var defaultComboBoxModel: DefaultComboBoxModel = new DefaultComboBoxModel();
        
        

addElement(TempInputRobotNames.LOW_NAME)
addElement(TempInputRobotNames.SYS_NAME)
addElement(InputRobot.NAME)
setModel(defaultComboBoxModel)
this.set()
}


    set(){

    var inputTypeComboBoxModel: ComboBoxModel = this.inputAutomationTypeJComboBox!.getModel()!;
        
        

setSelectedItem(this.mouseActionScriptInputInterface!.getInputRobotInterface()!.getName())

    
                        if((this.mouseActionScriptInputInterface!.getButtonClicks() and InputEvent.BUTTON1_MASK) != 0)
                        
                                    {
                                    setSelected(true)

                                    }
                                
                        else {
                            setSelected(false)

                        }
                            

    
                        if((this.mouseActionScriptInputInterface!.getButtonClicks() and InputEvent.BUTTON2_MASK) != 0)
                        
                                    {
                                    setSelected(true)

                                    }
                                
                        else {
                            setSelected(false)

                        }
                            
setText(this.mouseActionScriptInputInterface!.getTime().toString())
setText(this.mouseActionScriptInputInterface!.getPoint()!.x.toString())
setText(this.mouseActionScriptInputInterface!.getPoint()!.y.toString())
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


                @Throws(Exception::class)
            
    update(){
this.updateInputType()
setTime(getText.valueOf())
put("Button State: " +this.mouseActionScriptInputInterface!.getButtonClicks(), this, "update")

    
                        if(this.button1JCheckBox!.isSelected())
                        
                                    {
                                    
    
                        if((this.mouseActionScriptInputInterface!.getButtonClicks() and InputEvent.BUTTON1_MASK) == 0)
                        
                                    {
                                    setButtonClicks(this.mouseActionScriptInputInterface!.getButtonClicks() or InputEvent.BUTTON1_MASK)
put("Button 1 Selected: " +this.mouseActionScriptInputInterface!.getButtonClicks(), this, "update")

                                    }
                                

                                    }
                                
                        else {
                            
    
                        if((this.mouseActionScriptInputInterface!.getButtonClicks() and InputEvent.BUTTON1_MASK) != 0)
                        
                                    {
                                    setButtonClicks(this.mouseActionScriptInputInterface!.getButtonClicks() xor InputEvent.BUTTON1_MASK)
put("Button 1 Deselected: " +this.mouseActionScriptInputInterface!.getButtonClicks(), this, "update")

                                    }
                                

                        }
                            

    
                        if(this.button2JCheckBox!.isSelected())
                        
                                    {
                                    
    
                        if((this.mouseActionScriptInputInterface!.getButtonClicks() and InputEvent.BUTTON2_MASK) == 0)
                        
                                    {
                                    setButtonClicks(this.mouseActionScriptInputInterface!.getButtonClicks() or InputEvent.BUTTON2_MASK)
put("Button 2 Selected: " +this.mouseActionScriptInputInterface!.getButtonClicks(), this, "update")

                                    }
                                

                                    }
                                
                        else {
                            
    
                        if((this.mouseActionScriptInputInterface!.getButtonClicks() and InputEvent.BUTTON2_MASK) != 0)
                        
                                    {
                                    setButtonClicks(this.mouseActionScriptInputInterface!.getButtonClicks() xor InputEvent.BUTTON2_MASK)
put("Button 2 Deselected: " +this.mouseActionScriptInputInterface!.getButtonClicks(), this, "update")

                                    }
                                

                        }
                            

    var mouseXString: string = this.mouseXJTextField!.getText()!;
        
        


    
                        if(!StringValidationUtil.getInstance()!.isEmpty(mouseXString) && StringValidationUtil.getInstance()!.isNumber(mouseXString))
                        
                                    {
                                    this.mouseActionScriptInputInterface!.getPoint()!.x= Integer.parseInt(mouseXString)

                                    }
                                

    var mouseYString: string = this.mouseYJTextField!.getText()!;
        
        


    
                        if(!StringValidationUtil.getInstance()!.isEmpty(mouseYString) && StringValidationUtil.getInstance()!.isNumber(mouseYString))
                        
                                    {
                                    this.mouseActionScriptInputInterface!.getPoint()!.y= Integer.parseInt(mouseYString)

                                    }
                                
log()
}


    public getMouseActionJDialog(): javax.swing.JDialog{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mouseActionJDialog;
    
}


    public setMouseActionJDialog(mouseActionJDialog: javax.swing.JDialog){
var mouseActionJDialog = mouseActionJDialog
this.mouseActionJDialog= mouseActionJDialog
}


    initComponents(){
mouseActionJDialog= javax.swing.JDialog()
titleJLabel= javax.swing.JLabel()
okJButton= javax.swing.JButton()
jLabel2= javax.swing.JLabel()
jLabel3= javax.swing.JLabel()
button1JCheckBox= javax.swing.JCheckBox()
button2JCheckBox= javax.swing.JCheckBox()
jLabel4= javax.swing.JLabel()
mouseXJTextField= javax.swing.JTextField()
jLabel5= javax.swing.JLabel()
mouseYJTextField= javax.swing.JTextField()
inputTypeJLabel= javax.swing.JLabel()
inputAutomationTypeJComboBox= javax.swing.JComboBox()
jLabel6= javax.swing.JLabel()
mouseDelayJTextField= javax.swing.JTextField()
mouseActionJButton= javax.swing.JButton()
jLabel1= javax.swing.JLabel()
setMinimumSize(java.awt.Dimension(275, 185))
setText("Mouse Input Options")
setText("OK")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
okJButtonActionPerformed(evt)
}

                                }
                            )
setText("Buttons:")
setText("Move To:")
setText(CommonPhoneStrings.getInstance()!.ONE)
setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0))
setMargin(java.awt.Insets(0, 0, 0, 0))
setText(CommonPhoneStrings.getInstance()!.TWO)
setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0))
setMargin(java.awt.Insets(0, 0, 0, 0))
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
button2JCheckBoxActionPerformed(evt)
}

                                }
                            )
setText("x:")
setText(CommonPhoneStrings.getInstance()!.ZERO)
setText("y:")
setText(CommonPhoneStrings.getInstance()!.ZERO)
setText("Input Type:")
setText("Delay:")
setText("100")

    var mouseActionJDialogLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(mouseActionJDialog!.getContentPane());
        
        

setLayout(mouseActionJDialogLayout)
setHorizontalGroup(mouseActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(mouseActionJDialogLayout!.createSequentialGroup()!.addContainerGap()!.addGroup(mouseActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(inputTypeJLabel)!.addGroup(javax.swing.GroupLayout.Alignment.TRAILING, mouseActionJDialogLayout!.createSequentialGroup()!.addGroup(mouseActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(javax.swing.GroupLayout.Alignment.TRAILING, mouseActionJDialogLayout!.createSequentialGroup()!.addComponent(jLabel2)!.addGap(25, 25, 25))!.addGroup(mouseActionJDialogLayout!.createSequentialGroup()!.addGroup(mouseActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(jLabel3)!.addComponent(jLabel6))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)))!.addGroup(mouseActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(mouseDelayJTextField, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 154, Short.MAX_VALUE)!.addGroup(mouseActionJDialogLayout!.createSequentialGroup()!.addComponent(titleJLabel)!.addGap(45, 45, 45))!.addGroup(javax.swing.GroupLayout.Alignment.TRAILING, mouseActionJDialogLayout!.createSequentialGroup()!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(inputAutomationTypeJComboBox, 0, 154, Short.MAX_VALUE))!.addGroup(mouseActionJDialogLayout!.createSequentialGroup()!.addComponent(button1JCheckBox)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(button2JCheckBox))!.addGroup(mouseActionJDialogLayout!.createSequentialGroup()!.addGroup(mouseActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)!.addGroup(mouseActionJDialogLayout!.createSequentialGroup()!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(okJButton))!.addGroup(mouseActionJDialogLayout!.createSequentialGroup()!.addComponent(jLabel4)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 5, Short.MAX_VALUE)!.addComponent(mouseXJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 59, javax.swing.GroupLayout.PREFERRED_SIZE)))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel5)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(mouseYJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 62, Short.MAX_VALUE)))))!.addContainerGap()))
setVerticalGroup(mouseActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(mouseActionJDialogLayout!.createSequentialGroup()!.addComponent(titleJLabel)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(mouseActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(inputTypeJLabel)!.addComponent(inputAutomationTypeJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(mouseActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(jLabel2, javax.swing.GroupLayout.PREFERRED_SIZE, 15, javax.swing.GroupLayout.PREFERRED_SIZE)!.addGroup(mouseActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(button1JCheckBox)!.addComponent(button2JCheckBox)))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(mouseActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel6)!.addComponent(mouseDelayJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(mouseActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel3)!.addComponent(jLabel4)!.addComponent(jLabel5)!.addComponent(mouseYJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(mouseXJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addComponent(okJButton)!.addContainerGap()))
setMinimumSize(java.awt.Dimension(100, 0))
setText("Edit")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
mouseActionJButtonActionPerformed(evt)
}

                                }
                            )
setText("Mouse:")

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        

this.setLayout(layout)
setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(jLabel1)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 36, Short.MAX_VALUE)!.addComponent(mouseActionJButton)))
setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel1)!.addComponent(mouseActionJButton)))
}


    button2JCheckBoxActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    okJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            this.update()
setVisible(false)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "okButtonActionPerformed", e)
}

}


    mouseActionJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
setVisible(true)
}


    private button1JCheckBox: javax.swing.JCheckBox

    private button2JCheckBox: javax.swing.JCheckBox

    private inputAutomationTypeJComboBox: javax.swing.JComboBox

    private inputTypeJLabel: javax.swing.JLabel

    private jLabel1: javax.swing.JLabel

    private jLabel2: javax.swing.JLabel

    private jLabel3: javax.swing.JLabel

    private jLabel4: javax.swing.JLabel

    private jLabel5: javax.swing.JLabel

    private jLabel6: javax.swing.JLabel

    private mouseActionJButton: javax.swing.JButton

    private mouseActionJDialog: javax.swing.JDialog

    private mouseDelayJTextField: javax.swing.JTextField

    private mouseXJTextField: javax.swing.JTextField

    private mouseYJTextField: javax.swing.JTextField

    private okJButton: javax.swing.JButton

    private titleJLabel: javax.swing.JLabel

}
                
            

