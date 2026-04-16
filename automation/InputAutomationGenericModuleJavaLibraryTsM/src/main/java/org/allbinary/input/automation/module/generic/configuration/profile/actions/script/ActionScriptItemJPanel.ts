
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
        




import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { ComponentPlacement } from "./ComponentPlacement.js";

import { LayoutStyle } from "./LayoutStyle.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { ComponentPlacement } from "./ComponentPlacement.js";

import { LayoutStyle } from "./LayoutStyle.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { ComponentPlacement } from "./ComponentPlacement.js";

import { LayoutStyle } from "./LayoutStyle.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { ComponentPlacement } from "./ComponentPlacement.js";

import { LayoutStyle } from "./LayoutStyle.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

export class ActionScriptItemJPanel extends javax.swing.JPanel {
        
public constructor (){

            super();
            initComponents();
    
}


    public getNewActionScriptInputJPanel(): javax.swing.JPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newActionScriptInputJPanel;
    
}


    public setNewActionScriptInputJPanel(newActionScriptInputJPanel: javax.swing.JPanel){
var newActionScriptInputJPanel = newActionScriptInputJPanel
this.newActionScriptInputJPanel= newActionScriptInputJPanel;
    
}


    public getRemoveJPanel(): javax.swing.JPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return removeJPanel;
    
}


    public setRemoveJPanel(removeJPanel: javax.swing.JPanel){
var removeJPanel = removeJPanel
this.removeJPanel= removeJPanel;
    
}


    public getScriptItemJPanel(): javax.swing.JPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scriptItemJPanel;
    
}


    public setScriptItemJPanel(scriptItemJPanel: javax.swing.JPanel){
var scriptItemJPanel = scriptItemJPanel
this.scriptItemJPanel= scriptItemJPanel;
    
}


    public getNewActionScriptConditionJPanel(): javax.swing.JPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newActionScriptConditionJPanel;
    
}


    public setNewActionScriptConditionJPanel(newActionScriptConditionJPanel: javax.swing.JPanel){
var newActionScriptConditionJPanel = newActionScriptConditionJPanel
this.newActionScriptConditionJPanel= newActionScriptConditionJPanel;
    
}


    public getChildActionScriptConditionJPanel(): javax.swing.JPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return childActionScriptConditionJPanel;
    
}


    public setChildActionScriptConditionJPanel(childActionScriptConditionJPanel: javax.swing.JPanel){
var childActionScriptConditionJPanel = childActionScriptConditionJPanel
this.childActionScriptConditionJPanel= childActionScriptConditionJPanel;
    
}


    initComponents(){
newActionScriptInputJPanel= new javax.swing.JPanel();
    
childActionScriptConditionJPanel= new javax.swing.JPanel();
    
newActionScriptConditionJPanel= new javax.swing.JPanel();
    
scriptItemJPanel= new javax.swing.JPanel();
    
removeJPanel= new javax.swing.JPanel();
    
newActionScriptInputJPanel!.setLayout(new java.awt.GridLayout(1, 0));
    

    var childActionScriptConditionJPanelLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(childActionScriptConditionJPanel);
        
        
;
    
childActionScriptConditionJPanel!.setLayout(childActionScriptConditionJPanelLayout);
    
childActionScriptConditionJPanelLayout!.setHorizontalGroup(childActionScriptConditionJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 229, Short.MAX_VALUE));
    
childActionScriptConditionJPanelLayout!.setVerticalGroup(childActionScriptConditionJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 8, Short.MAX_VALUE));
    
newActionScriptConditionJPanel!.setLayout(new java.awt.GridLayout(1, 0));
    
scriptItemJPanel!.setLayout(new java.awt.GridLayout(1, 1));
    
removeJPanel!.setLayout(new java.awt.GridLayout(1, 1));
    
removeJPanel!.setMinimumSize(new java.awt.Dimension(30, 20));
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        
;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(scriptItemJPanel, javax.swing.GroupLayout.PREFERRED_SIZE, 167, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(removeJPanel, javax.swing.GroupLayout.DEFAULT_SIZE, 56, Short.MAX_VALUE))!.addComponent(newActionScriptInputJPanel, javax.swing.GroupLayout.DEFAULT_SIZE, 229, Short.MAX_VALUE)!.addComponent(newActionScriptConditionJPanel, javax.swing.GroupLayout.DEFAULT_SIZE, 229, Short.MAX_VALUE)!.addComponent(childActionScriptConditionJPanel, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(scriptItemJPanel, javax.swing.GroupLayout.DEFAULT_SIZE, 31, Short.MAX_VALUE)!.addComponent(removeJPanel, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 31, Short.MAX_VALUE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(childActionScriptConditionJPanel, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(newActionScriptConditionJPanel, javax.swing.GroupLayout.PREFERRED_SIZE, 28, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(newActionScriptInputJPanel, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)));
    
}


    private childActionScriptConditionJPanel: javax.swing.JPanel

    private newActionScriptConditionJPanel: javax.swing.JPanel

    private newActionScriptInputJPanel: javax.swing.JPanel

    private removeJPanel: javax.swing.JPanel

    private scriptItemJPanel: javax.swing.JPanel

}
                
            

