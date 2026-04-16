
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
        



import { JTreeInterfaceFactory } from "../../../../../../../../../org/allbinary/input/automation/actions/script/JTreeInterfaceFactory.js";

    
import { AlwaysActionScriptCondition } from "../../../../../../../../../org/allbinary/input/automation/actions/script/condition/AlwaysActionScriptCondition.js";

    
import { ColorAtActionScriptCondition } from "../../../../../../../../../org/allbinary/input/automation/actions/script/condition/ColorAtActionScriptCondition.js";

    
import { ProfileActionScriptConditionInterface } from "../../../../../../../../../org/allbinary/input/automation/actions/script/condition/ProfileActionScriptConditionInterface.js";

    
import { TimeIntervalActionScriptCondition } from "../../../../../../../../../org/allbinary/input/automation/actions/script/condition/TimeIntervalActionScriptCondition.js";

    
import { GenericProfileActionScriptJPanel } from "../../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/script/GenericProfileActionScriptJPanel.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { ComponentPlacement } from "./ComponentPlacement.js";

import { LayoutStyle } from "./LayoutStyle.js";

import { ComponentPlacement } from "./ComponentPlacement.js";

import { LayoutStyle } from "./LayoutStyle.js";

import { ComponentPlacement } from "./ComponentPlacement.js";

import { LayoutStyle } from "./LayoutStyle.js";

import { Short } from "./Short.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { ComponentPlacement } from "./ComponentPlacement.js";

import { LayoutStyle } from "./LayoutStyle.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

export class GenericProfileActionJPanel extends javax.swing.JPanel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private genericProfileAction: GenericProfileAction

    private genericProfileActionScriptJPanel: GenericProfileActionScriptJPanel
public constructor (){

            super();
            initComponents();
    
}


    public updateProfileActionUI(){
this.blankProfileActionScriptJPanel!.removeAll();
    

    var genericProfileActionScriptJPanel: GenericProfileActionScriptJPanel = new GenericProfileActionScriptJPanel();
        
        
;
    
JTreeInterfaceFactory.getInstance()!.set(genericProfileActionScriptJPanel);
    
this.setGenericProfileActionScriptJPanel(genericProfileActionScriptJPanel);
    
this.getGenericProfileActionScriptJPanel()!.setGenericProfileActionScript(this.getGenericProfileAction()!.getGenericProfileActionScript());
    
this.getGenericProfileActionScriptJPanel()!.updateJTree();
    

    var layout: javax.swing.GroupLayout = this.blankProfileActionScriptJPanel!.getLayout();

                         as javax.swing.GroupLayout;
        
        
;
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 395, Short.MAX_VALUE)!.addComponent(this.getGenericProfileActionScriptJPanel(), javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 256, Short.MAX_VALUE)!.addComponent(this.getGenericProfileActionScriptJPanel(), javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE));
    
this.logUtil!.putF("Updated UI", this, "updateUI");
    
}


    public getGenericProfileAction(): GenericProfileAction{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return genericProfileAction;
    
}


    public setGenericProfileAction(genericProfileAction: GenericProfileAction){
var genericProfileAction = genericProfileAction
this.genericProfileAction= genericProfileAction;
    
}


    public getGenericProfileActionScriptJPanel(): GenericProfileActionScriptJPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return genericProfileActionScriptJPanel;
    
}


    public setGenericProfileActionScriptJPanel(genericProfileActionScriptJPanel: GenericProfileActionScriptJPanel){
var genericProfileActionScriptJPanel = genericProfileActionScriptJPanel
this.genericProfileActionScriptJPanel= genericProfileActionScriptJPanel;
    
}


    initComponents(){
genericProfileActionScriptJScrollPane= new javax.swing.JScrollPane();
    
blankProfileActionScriptJPanel= new javax.swing.JPanel();
    
ifJLabel= new javax.swing.JLabel();
    
newColorAtJButton= new javax.swing.JButton();
    
newTimeIntervalJButton= new javax.swing.JButton();
    
newAlwaysJButton= new javax.swing.JButton();
    
setMinimumSize(new java.awt.Dimension(440, 275));
    
setPreferredSize(new java.awt.Dimension(440, 275));
    
genericProfileActionScriptJScrollPane!.setPreferredSize(new java.awt.Dimension(474, 270));
    
blankProfileActionScriptJPanel!.setMinimumSize(new java.awt.Dimension(400, 200));
    

    var blankProfileActionScriptJPanelLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(blankProfileActionScriptJPanel);
        
        
;
    
blankProfileActionScriptJPanel!.setLayout(blankProfileActionScriptJPanelLayout);
    
blankProfileActionScriptJPanelLayout!.setHorizontalGroup(blankProfileActionScriptJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 9996, Short.MAX_VALUE));
    
blankProfileActionScriptJPanelLayout!.setVerticalGroup(blankProfileActionScriptJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 9967, Short.MAX_VALUE));
    
genericProfileActionScriptJScrollPane!.setViewportView(blankProfileActionScriptJPanel);
    
ifJLabel!.setText("Conditions:");
    
newColorAtJButton!.setText("Color Range At");
    
newColorAtJButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
newColorAtJButtonActionPerformed(evt);
    
}

                                }
                            );
    
newTimeIntervalJButton!.setText("Time Interval");
    
newTimeIntervalJButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
newTimeIntervalJButtonActionPerformed(evt);
    
}

                                }
                            );
    
newAlwaysJButton!.setText("Always On/Off");
    
newAlwaysJButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
newAlwaysJButtonActionPerformed(evt);
    
}

                                }
                            );
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        
;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(ifJLabel)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(newColorAtJButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(newTimeIntervalJButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(newAlwaysJButton)!.addContainerGap(61, Short.MAX_VALUE))!.addComponent(genericProfileActionScriptJScrollPane, javax.swing.GroupLayout.DEFAULT_SIZE, 440, Short.MAX_VALUE));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(ifJLabel, javax.swing.GroupLayout.PREFERRED_SIZE, 14, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(newColorAtJButton)!.addComponent(newTimeIntervalJButton)!.addComponent(newAlwaysJButton))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(genericProfileActionScriptJScrollPane, javax.swing.GroupLayout.DEFAULT_SIZE, 246, Short.MAX_VALUE)));
    
}


    newTimeIntervalJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.logUtil!.putF("New Time Interval Action Condition", this, "newTimeIntervalJButtonActionPerformed");
    
getGenericProfileAction()!.getGenericProfileActionScript()!.addCondition(new TimeIntervalActionScriptCondition() as ProfileActionScriptConditionInterface);
    
this.updateProfileActionUI();
    
}


    newAlwaysJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.logUtil!.putF("New EveryTime Action Condition", this, "newEveryTimeJButtonActionPerformed");
    
getGenericProfileAction()!.getGenericProfileActionScript()!.addCondition(new AlwaysActionScriptCondition() as ProfileActionScriptConditionInterface);
    
this.updateProfileActionUI();
    
}


    newColorAtJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.logUtil!.putF("New Color At Action Condition", this, "newColorAtJButtonActionPerformed");
    
getGenericProfileAction()!.getGenericProfileActionScript()!.addCondition(new ColorAtActionScriptCondition() as ProfileActionScriptConditionInterface);
    
this.updateProfileActionUI();
    
}


    private blankProfileActionScriptJPanel: javax.swing.JPanel

    private genericProfileActionScriptJScrollPane: javax.swing.JScrollPane

    private ifJLabel: javax.swing.JLabel

    private newAlwaysJButton: javax.swing.JButton

    private newColorAtJButton: javax.swing.JButton

    private newTimeIntervalJButton: javax.swing.JButton

}
                
            

