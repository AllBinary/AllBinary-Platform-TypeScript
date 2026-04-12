
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
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
initComponents();
    
this.keyActionScriptInputInterface= keyActionScriptInputInterface;
    

    var defaultComboBoxModel: DefaultComboBoxModel = new DefaultComboBoxModel();
        
        
;
    
defaultComboBoxModel!.addElement(TempInputRobotNames.DX_NAME);
    
defaultComboBoxModel!.addElement(InputRobot.NAME);
    
this.inputAutomationTypeJComboBox!.setModel(defaultComboBoxModel);
    
this.keyNameJComboBox!.setModel(KeyNameDefaultComboBoxModelFactory.getInstance());
    
this.keyIntegerJComboBox!.setModel(KeyCharDefaultComboBoxModelFactory.getInstance());
    

                        if(this.keyActionScriptInputInterface!.isNormal())
                        
                                    {
                                    this.normalJRadioButton!.setSelected(true);
    
this.pressJRadioButton!.setSelected(false);
    
this.releaseJRadioButton!.setSelected(false);
    

                                    }
                                
                             else 
                        if(this.keyActionScriptInputInterface!.isPress())
                        
                                    {
                                    this.normalJRadioButton!.setSelected(false);
    
this.pressJRadioButton!.setSelected(true);
    
this.releaseJRadioButton!.setSelected(false);
    

                                    }
                                
                             else 
                        if(this.keyActionScriptInputInterface!.isRelease())
                        
                                    {
                                    this.normalJRadioButton!.setSelected(false);
    
this.pressJRadioButton!.setSelected(false);
    
this.releaseJRadioButton!.setSelected(true);
    

                                    }
                                
this.set();
    
}


    set(){

    var inputTypeComboBoxModel: ComboBoxModel = this.inputAutomationTypeJComboBox!.getModel()!;
        
        
;
    
inputTypeComboBoxModel!.setSelectedItem(this.keyActionScriptInputInterface!.getInputRobotInterface()!.getName());
    
this.textJTextField!.setText(this.keyActionScriptInputInterface!.getText());
    
this.delayJTextField!.setText(this.keyActionScriptInputInterface!.getDelayBetweenKeys().toString());
    
this.timeJTextField!.setText(this.keyActionScriptInputInterface!.getTime().toString());
    
this.keyActionScriptInputInterface!.log();
    
}


                //@Throws(Error::class)
            
    updateInputType(){

    var comboBoxModel: ComboBoxModel = this.inputAutomationTypeJComboBox!.getModel()!;
        
        
;
    

    var selectedItem: string = comboBoxModel!.getSelectedItem();

                         as String;
        
        
;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(selectedItem);

                        )
                        
                                    {
                                    this.keyActionScriptInputInterface!.setInputRobotInterface(InputRobotFactory.getInstance()!.get(selectedItem));
    

                                    }
                                
}


    getSelectedKey(): Integer{

    var comboBoxModel: ComboBoxModel = this.keyNameJComboBox!.getModel()!;
        
        
;
    

    var selectedItem: string = comboBoxModel!.getSelectedItem();

                         as String;
        
        
;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(selectedItem);

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return KeySingletonFactory.getHashtable()!.get(selectedItem as Object);

                         as Integer;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    updateKeys(){

    var text: string = this.textJTextField!.getText()!;
        
        
;
    
this.keyActionScriptInputInterface!.setText(text);
    
}


                //@Throws(Error::class)
            
    update(){
this.updateInputType();
    
this.updateKeys();
    
this.keyActionScriptInputInterface!.setTime(Integer.valueOf(this.timeJTextField!.getText())!.toInt());
    
this.keyActionScriptInputInterface!.log();
    
}


    public getKeyActionJDialog(): javax.swing.JDialog{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyActionJDialog;
    
}


    public setKeyActionJDialog(keyActionJDialog: javax.swing.JDialog){
var keyActionJDialog = keyActionJDialog
this.keyActionJDialog= keyActionJDialog;
    
}


    initComponents(){
keyActionJDialog= new javax.swing.JDialog();
    
titleJLabel= new javax.swing.JLabel();
    
addKeyJLabel= new javax.swing.JLabel();
    
keyNameJComboBox= new javax.swing.JComboBox();
    
timeJTextField= new javax.swing.JTextField();
    
holdTimeJLabel= new javax.swing.JLabel();
    
inputAutomationTypeJComboBox= new javax.swing.JComboBox();
    
inputTypeJLabel= new javax.swing.JLabel();
    
delayJTextField= new javax.swing.JTextField();
    
delayBetweenJLabel= new javax.swing.JLabel();
    
testJLabel= new javax.swing.JLabel();
    
textJTextField= new javax.swing.JTextField();
    
pressJRadioButton= new javax.swing.JRadioButton();
    
releaseJRadioButton= new javax.swing.JRadioButton();
    
normalJRadioButton= new javax.swing.JRadioButton();
    
simultaneousJRadioButton= new javax.swing.JRadioButton();
    
sequenceJRadioButton= new javax.swing.JRadioButton();
    
jPanel1= new javax.swing.JPanel();
    
okJButton= new javax.swing.JButton();
    
keyIntegerJComboBox= new javax.swing.JComboBox();
    
keyActionJButton= new javax.swing.JButton();
    
jLabel1= new javax.swing.JLabel();
    
keyActionJDialog!.setMinimumSize(new java.awt.Dimension(255, 280));
    
titleJLabel!.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
    
titleJLabel!.setText("Keyboard Input Options");
    
addKeyJLabel!.setText("Add Key:");
    
keyNameJComboBox!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
keyNameJComboBoxActionPerformed(evt);
    
}

                                }
                            );
    
timeJTextField!.setText(CommonPhoneStrings.getInstance()!.ZERO);
    
holdTimeJLabel!.setText("Hold Time (ms):");
    
inputTypeJLabel!.setText("Input Type:");
    
delayJTextField!.setText(CommonPhoneStrings.getInstance()!.ZERO);
    
delayBetweenJLabel!.setText("Delay Between Keys (ms):");
    
testJLabel!.setText("Text:");
    
textJTextField!.setText(CommonPhoneStrings.getInstance()!.ZERO);
    
pressJRadioButton!.setText("Press");
    
pressJRadioButton!.setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0));
    
pressJRadioButton!.setMargin(new java.awt.Insets(0, 0, 0, 0));
    
pressJRadioButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
pressJRadioButtonActionPerformed(evt);
    
}

                                }
                            );
    
releaseJRadioButton!.setText("Release");
    
releaseJRadioButton!.setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0));
    
releaseJRadioButton!.setMargin(new java.awt.Insets(0, 0, 0, 0));
    
releaseJRadioButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
releaseJRadioButtonActionPerformed(evt);
    
}

                                }
                            );
    
normalJRadioButton!.setSelected(true);
    
normalJRadioButton!.setText("Normal");
    
normalJRadioButton!.setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0));
    
normalJRadioButton!.setMargin(new java.awt.Insets(0, 0, 0, 0));
    
normalJRadioButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
normalJRadioButtonActionPerformed(evt);
    
}

                                }
                            );
    
simultaneousJRadioButton!.setSelected(true);
    
simultaneousJRadioButton!.setText("Simultaneous");
    
simultaneousJRadioButton!.setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0));
    
simultaneousJRadioButton!.setMargin(new java.awt.Insets(0, 0, 0, 0));
    
simultaneousJRadioButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
simultaneousJRadioButtonActionPerformed(evt);
    
}

                                }
                            );
    
sequenceJRadioButton!.setText("Sequence");
    
sequenceJRadioButton!.setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0));
    
sequenceJRadioButton!.setMargin(new java.awt.Insets(0, 0, 0, 0));
    
sequenceJRadioButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
sequenceJRadioButtonActionPerformed(evt);
    
}

                                }
                            );
    
okJButton!.setText("OK");
    
okJButton!.setHorizontalTextPosition(javax.swing.SwingConstants.CENTER);
    
okJButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
okJButtonActionPerformed(evt);
    
}

                                }
                            );
    
jPanel1!.add(okJButton);
    
keyIntegerJComboBox!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
keyIntegerJComboBoxActionPerformed(evt);
    
}

                                }
                            );
    

    var keyActionJDialogLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(keyActionJDialog!.getContentPane());
        
        
;
    
keyActionJDialog!.getContentPane()!.setLayout(keyActionJDialogLayout);
    
keyActionJDialogLayout!.setHorizontalGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(keyActionJDialogLayout!.createSequentialGroup()!.addContainerGap()!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(keyActionJDialogLayout!.createSequentialGroup()!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)!.addComponent(addKeyJLabel, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addComponent(inputTypeJLabel, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)!.addComponent(inputAutomationTypeJComboBox, 0, 148, Short.MAX_VALUE)!.addComponent(textJTextField, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, 148, Short.MAX_VALUE)!.addGroup(keyActionJDialogLayout!.createSequentialGroup()!.addComponent(keyNameJComboBox, 0, 101, Short.MAX_VALUE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(keyIntegerJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, 41, javax.swing.GroupLayout.PREFERRED_SIZE))))!.addComponent(testJLabel, javax.swing.GroupLayout.PREFERRED_SIZE, 60, javax.swing.GroupLayout.PREFERRED_SIZE)!.addGroup(keyActionJDialogLayout!.createSequentialGroup()!.addComponent(normalJRadioButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(pressJRadioButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(releaseJRadioButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 48, javax.swing.GroupLayout.PREFERRED_SIZE))!.addGroup(javax.swing.GroupLayout.Alignment.TRAILING, keyActionJDialogLayout!.createSequentialGroup()!.addComponent(holdTimeJLabel)!.addGap(22, 22, 22)!.addComponent(timeJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 113, Short.MAX_VALUE))!.addGroup(keyActionJDialogLayout!.createSequentialGroup()!.addComponent(delayBetweenJLabel)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 15, Short.MAX_VALUE)!.addComponent(delayJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 68, javax.swing.GroupLayout.PREFERRED_SIZE))!.addGroup(keyActionJDialogLayout!.createSequentialGroup()!.addComponent(simultaneousJRadioButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(sequenceJRadioButton)))!.addContainerGap())!.addComponent(titleJLabel, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 229, Short.MAX_VALUE)!.addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, 229, Short.MAX_VALUE));
    
keyActionJDialogLayout!.setVerticalGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(keyActionJDialogLayout!.createSequentialGroup()!.addComponent(titleJLabel)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(inputTypeJLabel)!.addComponent(inputAutomationTypeJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(addKeyJLabel)!.addComponent(keyIntegerJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(keyNameJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(testJLabel)!.addComponent(textJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(pressJRadioButton)!.addComponent(normalJRadioButton)!.addComponent(releaseJRadioButton))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(holdTimeJLabel)!.addComponent(timeJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(delayBetweenJLabel)!.addComponent(delayJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(keyActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(simultaneousJRadioButton)!.addComponent(sequenceJRadioButton))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap()));
    
setMinimumSize(new java.awt.Dimension(100, 0));
    
keyActionJButton!.setText("Edit");
    
keyActionJButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
keyActionJButtonActionPerformed(evt);
    
}

                                }
                            );
    
jLabel1!.setText("Key:");
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        
;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(jLabel1)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 49, Short.MAX_VALUE)!.addComponent(keyActionJButton)));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel1)!.addComponent(keyActionJButton)));
    
}


    prependText(integer: Integer){
var integer = integer

                        if(integer != 
                                    null
                                )
                        
                                    {
                                    
    var newKey: string = "&#" +integer.toString() +";";
        
        
;
    
this.textJTextField!.setText(newKey +this.textJTextField!.getText());
    

                                    }
                                
}


    keyIntegerJComboBoxActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.keyIntegerJComboBox!.getSelectedIndex();
    
this.keyNameJComboBox!.setSelectedIndex(this.keyIntegerJComboBox!.getSelectedIndex());
    
}


    sequenceJRadioButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

                        if(this.sequenceJRadioButton!.isSelected())
                        
                                    {
                                    this.delayJTextField!.setText(CommonPhoneStrings.getInstance()!.ONE);
    
this.simultaneousJRadioButton!.setSelected(false);
    

                                    }
                                
}


    simultaneousJRadioButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

                        if(this.simultaneousJRadioButton!.isSelected())
                        
                                    {
                                    this.delayJTextField!.setText(CommonPhoneStrings.getInstance()!.ZERO);
    
this.sequenceJRadioButton!.setSelected(false);
    

                                    }
                                
}


    keyNameJComboBoxActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

    var integer: Integer = getSelectedKey()!;
        
        
;
    
this.prependText(integer);
    
this.keyIntegerJComboBox!.setSelectedIndex(this.keyNameJComboBox!.getSelectedIndex());
    
}


    okJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            this.update();
    
this.getKeyActionJDialog()!.setVisible(false);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "okButtonActionPerformed", e);
    
}

}


    keyActionJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.getKeyActionJDialog()!.setVisible(true);
    
}


    normalJRadioButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

                        if(this.normalJRadioButton!.isSelected())
                        
                                    {
                                    this.keyActionScriptInputInterface!.setNormal();
    
this.pressJRadioButton!.setSelected(false);
    
this.releaseJRadioButton!.setSelected(false);
    

                                    }
                                
}


    releaseJRadioButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

                        if(this.releaseJRadioButton!.isSelected())
                        
                                    {
                                    this.keyActionScriptInputInterface!.setRelease(true);
    
this.keyActionScriptInputInterface!.setPress(false);
    
this.pressJRadioButton!.setSelected(false);
    
this.normalJRadioButton!.setSelected(false);
    

                                    }
                                
}


    pressJRadioButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

                        if(this.pressJRadioButton!.isSelected())
                        
                                    {
                                    this.keyActionScriptInputInterface!.setPress(true);
    
this.keyActionScriptInputInterface!.setRelease(false);
    
this.releaseJRadioButton!.setSelected(false);
    
this.normalJRadioButton!.setSelected(false);
    

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
                
            

