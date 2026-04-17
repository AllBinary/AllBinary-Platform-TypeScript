
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
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { JPanel } from "./JPanel.js";

import { JComboBox } from "./JComboBox.js";

import { Short } from "./Short.js";

export class InputAutomationTypeJPanel extends javax.swing.JPanel {
        
public constructor (){

            super();
            initComponents();
    
}


    public getInputAutomationTypeJComboBox(): javax.swing.JComboBox{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputAutomationTypeJComboBox;
    
}


    public setInputAutomationTypeJComboBox(inputAutomationTypeJComboBox: javax.swing.JComboBox){
var inputAutomationTypeJComboBox = inputAutomationTypeJComboBox
this.inputAutomationTypeJComboBox= inputAutomationTypeJComboBox;
    
}


    initComponents(){
inputAutomationTypeJComboBox= new javax.swing.JComboBox();
    
jLabel1= new javax.swing.JLabel();
    
inputAutomationTypeJComboBox!.setModel(new javax.swing.DefaultComboBoxModel(
                                                [
                                                    "DirectX","DirectX 8","Low Level","Java Robot";
        
        
                                                ]));
    
jLabel1!.setText("Input Type:");
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        
;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(jLabel1)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(inputAutomationTypeJComboBox, 0, 98, Short.MAX_VALUE)));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel1)!.addComponent(inputAutomationTypeJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)));
    
}


    private inputAutomationTypeJComboBox: javax.swing.JComboBox

    private jLabel1: javax.swing.JLabel

}
                
            

