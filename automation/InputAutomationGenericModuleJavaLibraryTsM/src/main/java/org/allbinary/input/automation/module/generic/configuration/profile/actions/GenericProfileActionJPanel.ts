
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

        


import { JTreeInterfaceFactory } from '../../../../../../../../../org/allbinary/input/automation/actions/script/JTreeInterfaceFactory.js';
      //not GWT import const JTreeInterfaceFactory = globalThis.org.allbinary.input.automation.actions.script.JTreeInterfaceFactory;

      
import { AlwaysActionScriptCondition } from '../../../../../../../../../org/allbinary/input/automation/actions/script/condition/AlwaysActionScriptCondition.js';
      //not GWT import const AlwaysActionScriptCondition = globalThis.org.allbinary.input.automation.actions.script.condition.AlwaysActionScriptCondition;

      
import { ColorAtActionScriptCondition } from '../../../../../../../../../org/allbinary/input/automation/actions/script/condition/ColorAtActionScriptCondition.js';
      //not GWT import const ColorAtActionScriptCondition = globalThis.org.allbinary.input.automation.actions.script.condition.ColorAtActionScriptCondition;

      
import { ProfileActionScriptConditionInterface } from '../../../../../../../../../org/allbinary/input/automation/actions/script/condition/ProfileActionScriptConditionInterface.js';
      //not GWT import const ProfileActionScriptConditionInterface = globalThis.org.allbinary.input.automation.actions.script.condition.ProfileActionScriptConditionInterface;

      
import { TimeIntervalActionScriptCondition } from '../../../../../../../../../org/allbinary/input/automation/actions/script/condition/TimeIntervalActionScriptCondition.js';
      //not GWT import const TimeIntervalActionScriptCondition = globalThis.org.allbinary.input.automation.actions.script.condition.TimeIntervalActionScriptCondition;

      
import { GenericProfileActionScriptJPanel } from '../../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/script/GenericProfileActionScriptJPanel.js';
      //not GWT import const GenericProfileActionScriptJPanel = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.script.GenericProfileActionScriptJPanel;

      
//not plain js import { LogUtil } from '../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JPanel } from './JPanel.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.JPanel;

                import { GenericProfileAction } from './GenericProfileAction.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GenericProfileAction;

                import { GroupLayout } from './GroupLayout.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GroupLayout;

                import { Short } from './Short.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.Short;

                import { JScrollPane } from './JScrollPane.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.JScrollPane;

                import { JLabel } from './JLabel.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.JLabel;

                import { JButton } from './JButton.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.JButton;

                import { Dimension } from './Dimension.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.Dimension;

                import { ActionListener } from './ActionListener.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.ActionListener;

                import { ActionEvent } from './ActionEvent.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.ActionEvent;

                
export class GenericProfileActionJPanel extends javax.swing.JPanel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private genericProfileAction: GenericProfileAction;

    private genericProfileActionScriptJPanel: GenericProfileActionScriptJPanel;

public constructor (){

            super();
        this.initComponents();
    
}


    public updateProfileActionUI(){
this.blankProfileActionScriptJPanel!.removeAll();
    

    var genericProfileActionScriptJPanel: GenericProfileActionScriptJPanel = new GenericProfileActionScriptJPanel();;
    
JTreeInterfaceFactory.getInstance()!.set(genericProfileActionScriptJPanel);
    
this.setGenericProfileActionScriptJPanel(genericProfileActionScriptJPanel);
    
this.getGenericProfileActionScriptJPanel()!.setGenericProfileActionScript(this.getGenericProfileAction()!.getGenericProfileActionScript());
    
this.getGenericProfileActionScriptJPanel()!.updateJTree();
    

    var layout: javax.swing.GroupLayout = this.blankProfileActionScriptJPanel!.getLayout() as javax.swing.GroupLayout;;
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 395, Short.MAX_VALUE)!.addComponent(this.getGenericProfileActionScriptJPanel(), javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 256, Short.MAX_VALUE)!.addComponent(this.getGenericProfileActionScriptJPanel(), javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE));
    
this.logUtil!.putF("Updated UI", this, "updateUI");
    
}


    public getGenericProfileAction(): GenericProfileAction{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.genericProfileAction;
    
}


    public setGenericProfileAction(genericProfileAction: GenericProfileAction){
this.genericProfileAction= genericProfileAction;
    
}


    public getGenericProfileActionScriptJPanel(): GenericProfileActionScriptJPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.genericProfileActionScriptJPanel;
    
}


    public setGenericProfileActionScriptJPanel(genericProfileActionScriptJPanel: GenericProfileActionScriptJPanel){
this.genericProfileActionScriptJPanel= genericProfileActionScriptJPanel;
    
}


    initComponents(){
this.genericProfileActionScriptJScrollPane= new javax.swing.JScrollPane();
    
this.blankProfileActionScriptJPanel= new javax.swing.JPanel();
    
this.ifJLabel= new javax.swing.JLabel();
    
this.newColorAtJButton= new javax.swing.JButton();
    
this.newTimeIntervalJButton= new javax.swing.JButton();
    
this.newAlwaysJButton= new javax.swing.JButton();
    
setMinimumSize(new java.awt.Dimension(440, 275));
    
setPreferredSize(new java.awt.Dimension(440, 275));
    
this.genericProfileActionScriptJScrollPane!.setPreferredSize(new java.awt.Dimension(474, 270));
    
this.blankProfileActionScriptJPanel!.setMinimumSize(new java.awt.Dimension(400, 200));
    

    var blankProfileActionScriptJPanelLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.blankProfileActionScriptJPanel);;
    
this.blankProfileActionScriptJPanel!.setLayout(blankProfileActionScriptJPanelLayout);
    
blankProfileActionScriptJPanelLayout!.setHorizontalGroup(blankProfileActionScriptJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 9996, Short.MAX_VALUE));
    
blankProfileActionScriptJPanelLayout!.setVerticalGroup(blankProfileActionScriptJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 9967, Short.MAX_VALUE));
    
this.genericProfileActionScriptJScrollPane!.setViewportView(this.blankProfileActionScriptJPanel);
    
this.ifJLabel!.setText("Conditions:");
    
this.newColorAtJButton!.setText("Color Range At");
    
this.newColorAtJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
newColorAtJButtonActionPerformed(evt);
    
}

                                }
                            );
    
this.newTimeIntervalJButton!.setText("Time Interval");
    
this.newTimeIntervalJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
newTimeIntervalJButtonActionPerformed(evt);
    
}

                                }
                            );
    
this.newAlwaysJButton!.setText("Always On/Off");
    
this.newAlwaysJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
newAlwaysJButtonActionPerformed(evt);
    
}

                                }
                            );
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(ifJLabel)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(newColorAtJButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(newTimeIntervalJButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(newAlwaysJButton)!.addContainerGap(61, Short.MAX_VALUE))!.addComponent(genericProfileActionScriptJScrollPane, javax.swing.GroupLayout.DEFAULT_SIZE, 440, Short.MAX_VALUE));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(ifJLabel, javax.swing.GroupLayout.PREFERRED_SIZE, 14, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(newColorAtJButton)!.addComponent(newTimeIntervalJButton)!.addComponent(newAlwaysJButton))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(genericProfileActionScriptJScrollPane, javax.swing.GroupLayout.DEFAULT_SIZE, 246, Short.MAX_VALUE)));
    
}


    newTimeIntervalJButtonActionPerformed(evt: java.awt.event.ActionEvent){
this.logUtil!.putF("New Time Interval Action Condition", this, "newTimeIntervalJButtonActionPerformed");
    
this.getGenericProfileAction()!.getGenericProfileActionScript()!.addCondition(new TimeIntervalActionScriptCondition() as ProfileActionScriptConditionInterface);
    
this.updateProfileActionUI();
    
}


    newAlwaysJButtonActionPerformed(evt: java.awt.event.ActionEvent){
this.logUtil!.putF("New EveryTime Action Condition", this, "newEveryTimeJButtonActionPerformed");
    
this.getGenericProfileAction()!.getGenericProfileActionScript()!.addCondition(new AlwaysActionScriptCondition() as ProfileActionScriptConditionInterface);
    
this.updateProfileActionUI();
    
}


    newColorAtJButtonActionPerformed(evt: java.awt.event.ActionEvent){
this.logUtil!.putF("New Color At Action Condition", this, "newColorAtJButtonActionPerformed");
    
this.getGenericProfileAction()!.getGenericProfileActionScript()!.addCondition(new ColorAtActionScriptCondition() as ProfileActionScriptConditionInterface);
    
this.updateProfileActionUI();
    
}


    private blankProfileActionScriptJPanel: javax.swing.JPanel;

    private genericProfileActionScriptJScrollPane: javax.swing.JScrollPane;

    private ifJLabel: javax.swing.JLabel;

    private newAlwaysJButton: javax.swing.JButton;

    private newColorAtJButton: javax.swing.JButton;

    private newTimeIntervalJButton: javax.swing.JButton;

}



