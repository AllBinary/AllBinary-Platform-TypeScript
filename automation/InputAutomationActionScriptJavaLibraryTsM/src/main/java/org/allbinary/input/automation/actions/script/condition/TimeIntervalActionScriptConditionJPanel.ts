
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class TimeIntervalActionScriptConditionJPanel extends javax.swing.JPanel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private timeIntervalActionScriptConditionInterface: TimeIntervalActionScriptConditionInterface
public constructor (timeIntervalActionScriptConditionInterface: TimeIntervalActionScriptConditionInterface){

            super();
            var timeIntervalActionScriptConditionInterface = timeIntervalActionScriptConditionInterface
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
initComponents();
    
this.timeIntervalActionScriptConditionInterface= timeIntervalActionScriptConditionInterface;
    
this.set();
    
}


    set(){
this.getTimeIntervalJTextField()!.setText(this.timeIntervalActionScriptConditionInterface!.getTimeDelayHelper()!.delay.toString());
    
this.timeIntervalActionScriptConditionInterface!.log();
    
}


    update(){
this.timeIntervalActionScriptConditionInterface!.getTimeDelayHelper()!.delay= Integer(Integer.valueOf(this.getTimeIntervalJTextField()!.getText()));
    
this.timeIntervalActionScriptConditionInterface!.log();
    
}


    public getTimeIntervalJTextField(): javax.swing.JTextField{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return timeIntervalJTextField;
    
}


    public setTimeIntervalJTextField(timeIntervalJTextField: javax.swing.JTextField){
var timeIntervalJTextField = timeIntervalJTextField
this.timeIntervalJTextField= timeIntervalJTextField;
    
}


    public getTimeIntervalActionJDialog(): javax.swing.JDialog{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return timeIntervalActionJDialog;
    
}


    public setTimeIntervalActionJDialog(timeIntervalActionJDialog: javax.swing.JDialog){
var timeIntervalActionJDialog = timeIntervalActionJDialog
this.timeIntervalActionJDialog= timeIntervalActionJDialog;
    
}


    initComponents(){
timeIntervalActionJDialog= new javax.swing.JDialog();
    
titleJLabel= new javax.swing.JLabel();
    
okJButton= new javax.swing.JButton();
    
jLabel2= new javax.swing.JLabel();
    
timeIntervalJTextField= new javax.swing.JTextField();
    
timeIntervalActionJButton= new javax.swing.JButton();
    
jLabel1= new javax.swing.JLabel();
    
timeIntervalActionJDialog!.setMinimumSize(new java.awt.Dimension(250, 150));
    
titleJLabel!.setText("Time Interval Condition Options");
    
okJButton!.setText("OK");
    
okJButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
okJButtonActionPerformed(evt);
    
}

                                }
                            );
    
jLabel2!.setText("Time (ms):");
    

    var timeIntervalActionJDialogLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(timeIntervalActionJDialog!.getContentPane());
        
        
;
    
timeIntervalActionJDialog!.getContentPane()!.setLayout(timeIntervalActionJDialogLayout);
    
timeIntervalActionJDialogLayout!.setHorizontalGroup(timeIntervalActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(timeIntervalActionJDialogLayout!.createSequentialGroup()!.addGroup(timeIntervalActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)!.addGroup(javax.swing.GroupLayout.Alignment.LEADING, timeIntervalActionJDialogLayout!.createSequentialGroup()!.addGap(82, 82, 82)!.addComponent(okJButton))!.addGroup(javax.swing.GroupLayout.Alignment.LEADING, timeIntervalActionJDialogLayout!.createSequentialGroup()!.addGap(32, 32, 32)!.addGroup(timeIntervalActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(timeIntervalActionJDialogLayout!.createSequentialGroup()!.addComponent(jLabel2)!.addGap(16, 16, 16)!.addComponent(timeIntervalJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 85, Short.MAX_VALUE))!.addComponent(titleJLabel))))!.addContainerGap(36, Short.MAX_VALUE)));
    
timeIntervalActionJDialogLayout!.setVerticalGroup(timeIntervalActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(timeIntervalActionJDialogLayout!.createSequentialGroup()!.addContainerGap()!.addComponent(titleJLabel)!.addGap(20, 20, 20)!.addGroup(timeIntervalActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel2)!.addComponent(timeIntervalJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addGap(15, 15, 15)!.addComponent(okJButton)!.addContainerGap()));
    
setMinimumSize(new java.awt.Dimension(100, 0));
    
timeIntervalActionJButton!.setText("Edit");
    
timeIntervalActionJButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
timeIntervalActionJButtonActionPerformed(evt);
    
}

                                }
                            );
    
jLabel1!.setText("Time Interval:");
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        
;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(jLabel1)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addComponent(timeIntervalActionJButton)));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel1)!.addComponent(timeIntervalActionJButton)));
    
}


    okJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.update();
    
this.getTimeIntervalActionJDialog()!.setVisible(false);
    
}


    timeIntervalActionJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.getTimeIntervalActionJDialog()!.setVisible(true);
    
}


    private jLabel1: javax.swing.JLabel

    private jLabel2: javax.swing.JLabel

    private okJButton: javax.swing.JButton

    private timeIntervalActionJButton: javax.swing.JButton

    private timeIntervalActionJDialog: javax.swing.JDialog

    private timeIntervalJTextField: javax.swing.JTextField

    private titleJLabel: javax.swing.JLabel

}
                
            

