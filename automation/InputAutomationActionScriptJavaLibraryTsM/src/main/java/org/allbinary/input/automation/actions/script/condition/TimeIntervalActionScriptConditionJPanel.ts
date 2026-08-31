
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

        


            import { Integer } from '../../../../../../../java/lang/Integer.js';
        
//not plain js import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JPanel } from './JPanel.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.actions.script.condition.JPanel;

                import { TimeIntervalActionScriptConditionInterface } from './TimeIntervalActionScriptConditionInterface.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.actions.script.condition.TimeIntervalActionScriptConditionInterface;

                import { JTextField } from './JTextField.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.actions.script.condition.JTextField;

                import { JDialog } from './JDialog.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.actions.script.condition.JDialog;

                import { JLabel } from './JLabel.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.actions.script.condition.JLabel;

                import { JButton } from './JButton.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.actions.script.condition.JButton;

                import { Dimension } from './Dimension.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.actions.script.condition.Dimension;

                import { ActionListener } from './ActionListener.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.actions.script.condition.ActionListener;

                import { ActionEvent } from './ActionEvent.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.actions.script.condition.ActionEvent;

                import { GroupLayout } from './GroupLayout.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.actions.script.condition.GroupLayout;

                import { Short } from './Short.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.actions.script.condition.Short;

                
export class TimeIntervalActionScriptConditionJPanel extends javax.swing.JPanel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private timeIntervalActionScriptConditionInterface: TimeIntervalActionScriptConditionInterface;

public constructor (timeIntervalActionScriptConditionInterface: TimeIntervalActionScriptConditionInterface){

            super();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.initComponents();
    
this.timeIntervalActionScriptConditionInterface= timeIntervalActionScriptConditionInterface;
    
this.set();
    
}


    set(){
this.getTimeIntervalJTextField()!.setText(this.timeIntervalActionScriptConditionInterface!.getTimeDelayHelper()!.delay.toString());
    
this.timeIntervalActionScriptConditionInterface!.log();
    
}


    update(){
this.timeIntervalActionScriptConditionInterface!.getTimeDelayHelper()!.delay= Integer.valueOf(this.getTimeIntervalJTextField()!.getText());
    
this.timeIntervalActionScriptConditionInterface!.log();
    
}


    public getTimeIntervalJTextField(): javax.swing.JTextField{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timeIntervalJTextField;
    
}


    public setTimeIntervalJTextField(timeIntervalJTextField: javax.swing.JTextField){
this.timeIntervalJTextField= timeIntervalJTextField;
    
}


    public getTimeIntervalActionJDialog(): javax.swing.JDialog{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timeIntervalActionJDialog;
    
}


    public setTimeIntervalActionJDialog(timeIntervalActionJDialog: javax.swing.JDialog){
this.timeIntervalActionJDialog= timeIntervalActionJDialog;
    
}


    initComponents(){
this.timeIntervalActionJDialog= new javax.swing.JDialog();
    
this.titleJLabel= new javax.swing.JLabel();
    
this.okJButton= new javax.swing.JButton();
    
this.jLabel2= new javax.swing.JLabel();
    
this.timeIntervalJTextField= new javax.swing.JTextField();
    
this.timeIntervalActionJButton= new javax.swing.JButton();
    
this.jLabel1= new javax.swing.JLabel();
    
this.timeIntervalActionJDialog!.setMinimumSize(new java.awt.Dimension(250, 150));
    
this.titleJLabel!.setText("Time Interval Condition Options");
    
this.okJButton!.setText("OK");
    
this.okJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
okJButtonActionPerformed(evt);
    
}

                                }
                            );
    
this.jLabel2!.setText("Time (ms):");
    

    var timeIntervalActionJDialogLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.timeIntervalActionJDialog!.getContentPane());;
    
this.timeIntervalActionJDialog!.getContentPane()!.setLayout(timeIntervalActionJDialogLayout);
    
timeIntervalActionJDialogLayout!.setHorizontalGroup(timeIntervalActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(timeIntervalActionJDialogLayout!.createSequentialGroup()!.addGroup(timeIntervalActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)!.addGroup(javax.swing.GroupLayout.Alignment.LEADING, timeIntervalActionJDialogLayout!.createSequentialGroup()!.addGap(82, 82, 82)!.addComponent(okJButton))!.addGroup(javax.swing.GroupLayout.Alignment.LEADING, timeIntervalActionJDialogLayout!.createSequentialGroup()!.addGap(32, 32, 32)!.addGroup(timeIntervalActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(timeIntervalActionJDialogLayout!.createSequentialGroup()!.addComponent(jLabel2)!.addGap(16, 16, 16)!.addComponent(timeIntervalJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 85, Short.MAX_VALUE))!.addComponent(titleJLabel))))!.addContainerGap(36, Short.MAX_VALUE)));
    
timeIntervalActionJDialogLayout!.setVerticalGroup(timeIntervalActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(timeIntervalActionJDialogLayout!.createSequentialGroup()!.addContainerGap()!.addComponent(titleJLabel)!.addGap(20, 20, 20)!.addGroup(timeIntervalActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel2)!.addComponent(timeIntervalJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addGap(15, 15, 15)!.addComponent(okJButton)!.addContainerGap()));
    
setMinimumSize(new java.awt.Dimension(100, 0));
    
this.timeIntervalActionJButton!.setText("Edit");
    
this.timeIntervalActionJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
timeIntervalActionJButtonActionPerformed(evt);
    
}

                                }
                            );
    
this.jLabel1!.setText("Time Interval:");
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(jLabel1)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addComponent(timeIntervalActionJButton)));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel1)!.addComponent(timeIntervalActionJButton)));
    
}


    okJButtonActionPerformed(evt: java.awt.event.ActionEvent){
this.update();
    
this.getTimeIntervalActionJDialog()!.setVisible(false);
    
}


    timeIntervalActionJButtonActionPerformed(evt: java.awt.event.ActionEvent){
this.getTimeIntervalActionJDialog()!.setVisible(true);
    
}


    private jLabel1: javax.swing.JLabel;

    private jLabel2: javax.swing.JLabel;

    private okJButton: javax.swing.JButton;

    private timeIntervalActionJButton: javax.swing.JButton;

    private timeIntervalActionJDialog: javax.swing.JDialog;

    private timeIntervalJTextField: javax.swing.JTextField;

    private titleJLabel: javax.swing.JLabel;

}



