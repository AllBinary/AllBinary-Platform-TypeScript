
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

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class AlwaysActionScriptConditionJPanel extends javax.swing.JPanel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private alwaysActionScriptConditionInterface: AlwaysActionScriptConditionInterface
public constructor (alwaysActionScriptConditionInterface: AlwaysActionScriptConditionInterface){

            super();
            var alwaysActionScriptConditionInterface = alwaysActionScriptConditionInterface
put(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR)
initComponents()
this.alwaysActionScriptConditionInterface= alwaysActionScriptConditionInterface
this.set()
}


    set(){

    
                        if(this.alwaysActionScriptConditionInterface!.isIsOn())
                        
                                    {
                                    setSelectedIndex(0)

                                    }
                                
                        else {
                            setSelectedIndex(1)

                        }
                            
log()
}


    update(){

    
                        if(this.alwaysJComboBox!.getSelectedIndex() == 0)
                        
                                    {
                                    setIsOn(true)

                                    }
                                
                        else {
                            setIsOn(false)

                        }
                            
log()
}


    public getAlwaysActionJDialog(): javax.swing.JDialog{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return alwaysActionJDialog;
    
}


    public setAlwaysActionJDialog(alwaysActionJDialog: javax.swing.JDialog){
var alwaysActionJDialog = alwaysActionJDialog
this.alwaysActionJDialog= alwaysActionJDialog
}


    initComponents(){
alwaysActionJDialog= javax.swing.JDialog()
titleJLabel= javax.swing.JLabel()
okJButton= javax.swing.JButton()
jLabel2= javax.swing.JLabel()
alwaysJComboBox= javax.swing.JComboBox()
alwaysActionJButton= javax.swing.JButton()
jLabel1= javax.swing.JLabel()
setMinimumSize(java.awt.Dimension(250, 150))
setText("Always Condition Options")
setText("OK")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
okJButtonActionPerformed(evt)
}

                                }
                            )
setText("On:")
setModel(javax.swing.DefaultComboBoxModel(
                                                [
                                                    "true","false";
        
        
                                                ]))

    var alwaysActionJDialogLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(alwaysActionJDialog!.getContentPane());
        
        

setLayout(alwaysActionJDialogLayout)
setHorizontalGroup(alwaysActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(alwaysActionJDialogLayout!.createSequentialGroup()!.addGroup(alwaysActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(alwaysActionJDialogLayout!.createSequentialGroup()!.addGap(47, 47, 47)!.addGroup(alwaysActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)!.addGroup(javax.swing.GroupLayout.Alignment.TRAILING, alwaysActionJDialogLayout!.createSequentialGroup()!.addComponent(jLabel2)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addComponent(alwaysJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addComponent(titleJLabel)))!.addGroup(alwaysActionJDialogLayout!.createSequentialGroup()!.addGap(79, 79, 79)!.addComponent(okJButton)))!.addContainerGap(45, Short.MAX_VALUE)))
setVerticalGroup(alwaysActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(alwaysActionJDialogLayout!.createSequentialGroup()!.addContainerGap()!.addComponent(titleJLabel)!.addGap(20, 20, 20)!.addGroup(alwaysActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(alwaysJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel2))!.addGap(15, 15, 15)!.addComponent(okJButton)!.addContainerGap()))
setMinimumSize(java.awt.Dimension(100, 0))
setText("Edit")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
alwaysActionJButtonActionPerformed(evt)
}

                                }
                            )
setText("Always:")

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        

this.setLayout(layout)
setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(jLabel1)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 33, Short.MAX_VALUE)!.addComponent(alwaysActionJButton)))
setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel1)!.addComponent(alwaysActionJButton)))
}


    okJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.update()
setVisible(false)
}


    alwaysActionJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
setVisible(true)
}


    private alwaysActionJButton: javax.swing.JButton

    private alwaysActionJDialog: javax.swing.JDialog

    private alwaysJComboBox: javax.swing.JComboBox

    private jLabel1: javax.swing.JLabel

    private jLabel2: javax.swing.JLabel

    private okJButton: javax.swing.JButton

    private titleJLabel: javax.swing.JLabel

}
                
            

