
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

    

export class GenericProfileActionJPanel extends javax.swing.JPanel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private genericProfileAction: GenericProfileAction

    private genericProfileActionScriptJPanel: GenericProfileActionScriptJPanel
public constructor (){

            super();
            initComponents()
}


    public updateProfileActionUI(){
removeAll()

    var genericProfileActionScriptJPanel: GenericProfileActionScriptJPanel = new GenericProfileActionScriptJPanel();
        
        

set(genericProfileActionScriptJPanel)
this.setGenericProfileActionScriptJPanel(genericProfileActionScriptJPanel)
setGenericProfileActionScript(this.getGenericProfileAction()!.getGenericProfileActionScript())
updateJTree()

    var layout: javax.swing.GroupLayout = this.blankProfileActionScriptJPanel!.getLayout() as javax.swing.GroupLayout;
        
        

setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 395, Short.MAX_VALUE)!.addComponent(this.getGenericProfileActionScriptJPanel(), javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 256, Short.MAX_VALUE)!.addComponent(this.getGenericProfileActionScriptJPanel(), javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
put("Updated UI", this, "updateUI")
}


    public getGenericProfileAction(): GenericProfileAction{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return genericProfileAction;
    
}


    public setGenericProfileAction(genericProfileAction: GenericProfileAction){
var genericProfileAction = genericProfileAction
this.genericProfileAction= genericProfileAction
}


    public getGenericProfileActionScriptJPanel(): GenericProfileActionScriptJPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return genericProfileActionScriptJPanel;
    
}


    public setGenericProfileActionScriptJPanel(genericProfileActionScriptJPanel: GenericProfileActionScriptJPanel){
var genericProfileActionScriptJPanel = genericProfileActionScriptJPanel
this.genericProfileActionScriptJPanel= genericProfileActionScriptJPanel
}


    initComponents(){
genericProfileActionScriptJScrollPane= javax.swing.JScrollPane()
blankProfileActionScriptJPanel= javax.swing.JPanel()
ifJLabel= javax.swing.JLabel()
newColorAtJButton= javax.swing.JButton()
newTimeIntervalJButton= javax.swing.JButton()
newAlwaysJButton= javax.swing.JButton()
setMinimumSize(java.awt.Dimension(440, 275))
setPreferredSize(java.awt.Dimension(440, 275))
setPreferredSize(java.awt.Dimension(474, 270))
setMinimumSize(java.awt.Dimension(400, 200))

    var blankProfileActionScriptJPanelLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(blankProfileActionScriptJPanel);
        
        

setLayout(blankProfileActionScriptJPanelLayout)
setHorizontalGroup(blankProfileActionScriptJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 9996, Short.MAX_VALUE))
setVerticalGroup(blankProfileActionScriptJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 9967, Short.MAX_VALUE))
setViewportView(blankProfileActionScriptJPanel)
setText("Conditions:")
setText("Color Range At")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
newColorAtJButtonActionPerformed(evt)
}

                                }
                            )
setText("Time Interval")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
newTimeIntervalJButtonActionPerformed(evt)
}

                                }
                            )
setText("Always On/Off")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
newAlwaysJButtonActionPerformed(evt)
}

                                }
                            )

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        

this.setLayout(layout)
setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(ifJLabel)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(newColorAtJButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(newTimeIntervalJButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(newAlwaysJButton)!.addContainerGap(61, Short.MAX_VALUE))!.addComponent(genericProfileActionScriptJScrollPane, javax.swing.GroupLayout.DEFAULT_SIZE, 440, Short.MAX_VALUE))
setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(ifJLabel, javax.swing.GroupLayout.PREFERRED_SIZE, 14, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(newColorAtJButton)!.addComponent(newTimeIntervalJButton)!.addComponent(newAlwaysJButton))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(genericProfileActionScriptJScrollPane, javax.swing.GroupLayout.DEFAULT_SIZE, 246, Short.MAX_VALUE)))
}


    newTimeIntervalJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
put("New Time Interval Action Condition", this, "newTimeIntervalJButtonActionPerformed")
addCondition(TimeIntervalActionScriptCondition() as ProfileActionScriptConditionInterface)
this.updateProfileActionUI()
}


    newAlwaysJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
put("New EveryTime Action Condition", this, "newEveryTimeJButtonActionPerformed")
addCondition(AlwaysActionScriptCondition() as ProfileActionScriptConditionInterface)
this.updateProfileActionUI()
}


    newColorAtJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
put("New Color At Action Condition", this, "newColorAtJButtonActionPerformed")
addCondition(ColorAtActionScriptCondition() as ProfileActionScriptConditionInterface)
this.updateProfileActionUI()
}


    private blankProfileActionScriptJPanel: javax.swing.JPanel

    private genericProfileActionScriptJScrollPane: javax.swing.JScrollPane

    private ifJLabel: javax.swing.JLabel

    private newAlwaysJButton: javax.swing.JButton

    private newColorAtJButton: javax.swing.JButton

    private newTimeIntervalJButton: javax.swing.JButton

}
                
            

