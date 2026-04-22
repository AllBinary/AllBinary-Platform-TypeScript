
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
        



import { swing } from "../../../../../../javax/swing.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { JPanel } from "./JPanel.js";

export class PropertiesJPanel extends javax.swing.JPanel {
        
public constructor (){

            super();
        initComponents();
    
}


    public set(panel: JPanel){
var panel = panel
this.workAreaPropertiesJPanel!.add(panel);
    
this.repaint();
    
}


    initComponents(){
this.workAreaPropertiesJPanel= new javax.swing.JPanel();
    
this.modifierJPanel= new javax.swing.JPanel();
    
this.copyVerticalJButton= new javax.swing.JButton();
    
this.copyHorizontalJButton= new javax.swing.JButton();
    
this.rotateJPanel= new javax.swing.JPanel();
    
this.rotateJButton= new javax.swing.JButton();
    
this.angleJTextField= new javax.swing.JTextField();
    
this.jPanel7= new javax.swing.JPanel();
    
this.upJButton= new javax.swing.JButton();
    
this.downJButton= new javax.swing.JButton();
    
this.jPanel8= new javax.swing.JPanel();
    
this.leftJButton= new javax.swing.JButton();
    
this.rightJButton= new javax.swing.JButton();
    
setLayout(new java.awt.GridLayout(2, 1));
    
this.workAreaPropertiesJPanel!.setLayout(new java.awt.GridLayout());
    
add(this.workAreaPropertiesJPanel);
    
this.modifierJPanel!.setLayout(new java.awt.GridLayout(6, 0));
    
this.copyVerticalJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.copyVerticalJButton!.setText("Copy Vertical");
    
this.modifierJPanel!.add(this.copyVerticalJButton);
    
this.copyHorizontalJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.copyHorizontalJButton!.setText("Copy Horizontal");
    
this.modifierJPanel!.add(this.copyHorizontalJButton);
    
this.rotateJPanel!.setLayout(new java.awt.GridLayout(1, 2));
    
this.rotateJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.rotateJButton!.setText("Rotate");
    
this.rotateJPanel!.add(this.rotateJButton);
    
this.angleJTextField!.setText("Angle");
    
this.rotateJPanel!.add(this.angleJTextField);
    
this.modifierJPanel!.add(this.rotateJPanel);
    
this.jPanel7!.setLayout(new java.awt.GridLayout(1, 2));
    
this.upJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.upJButton!.setText("Up");
    
this.jPanel7!.add(this.upJButton);
    
this.downJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.downJButton!.setText("Down");
    
this.jPanel7!.add(this.downJButton);
    
this.modifierJPanel!.add(this.jPanel7);
    
this.jPanel8!.setLayout(new java.awt.GridLayout(1, 2));
    
this.leftJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.leftJButton!.setText("Left");
    
this.jPanel8!.add(this.leftJButton);
    
this.rightJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.rightJButton!.setText("Right");
    
this.jPanel8!.add(this.rightJButton);
    
this.modifierJPanel!.add(this.jPanel8);
    
add(this.modifierJPanel);
    
}


    private rotateJButton: javax.swing.JButton

    private copyVerticalJButton: javax.swing.JButton

    private leftJButton: javax.swing.JButton

    private rotateJPanel: javax.swing.JPanel

    private angleJTextField: javax.swing.JTextField

    private workAreaPropertiesJPanel: javax.swing.JPanel

    private modifierJPanel: javax.swing.JPanel

    private upJButton: javax.swing.JButton

    private jPanel8: javax.swing.JPanel

    private downJButton: javax.swing.JButton

    private jPanel7: javax.swing.JPanel

    private rightJButton: javax.swing.JButton

    private copyHorizontalJButton: javax.swing.JButton

}
                
            

