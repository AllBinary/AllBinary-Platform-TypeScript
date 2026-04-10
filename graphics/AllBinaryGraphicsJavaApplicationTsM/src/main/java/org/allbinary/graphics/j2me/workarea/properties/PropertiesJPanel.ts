
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

    

export class PropertiesJPanel extends javax.swing.JPanel {
        
public constructor (){

            super();
            initComponents()
}


    public set(panel: JPanel){
var panel = panel
workAreaPropertiesJPanel!.add(panel)
this.this.repaint()
}


    initComponents(){
workAreaPropertiesJPanel= javax.swing.JPanel()
modifierJPanel= javax.swing.JPanel()
copyVerticalJButton= javax.swing.JButton()
copyHorizontalJButton= javax.swing.JButton()
rotateJPanel= javax.swing.JPanel()
rotateJButton= javax.swing.JButton()
angleJTextField= javax.swing.JTextField()
jPanel7= javax.swing.JPanel()
upJButton= javax.swing.JButton()
downJButton= javax.swing.JButton()
jPanel8= javax.swing.JPanel()
leftJButton= javax.swing.JButton()
rightJButton= javax.swing.JButton()
setLayout(java.awt.GridLayout(2, 1))
workAreaPropertiesJPanel!.setLayout(java.awt.GridLayout())
add(workAreaPropertiesJPanel)
modifierJPanel!.setLayout(java.awt.GridLayout(6, 0))
copyVerticalJButton!.setFont(java.awt.Font("Dialog", 0, 10))
copyVerticalJButton!.setText("Copy Vertical")
modifierJPanel!.add(copyVerticalJButton)
copyHorizontalJButton!.setFont(java.awt.Font("Dialog", 0, 10))
copyHorizontalJButton!.setText("Copy Horizontal")
modifierJPanel!.add(copyHorizontalJButton)
rotateJPanel!.setLayout(java.awt.GridLayout(1, 2))
rotateJButton!.setFont(java.awt.Font("Dialog", 0, 10))
rotateJButton!.setText("Rotate")
rotateJPanel!.add(rotateJButton)
angleJTextField!.setText("Angle")
rotateJPanel!.add(angleJTextField)
modifierJPanel!.add(rotateJPanel)
jPanel7!.setLayout(java.awt.GridLayout(1, 2))
upJButton!.setFont(java.awt.Font("Dialog", 0, 10))
upJButton!.setText("Up")
jPanel7!.add(upJButton)
downJButton!.setFont(java.awt.Font("Dialog", 0, 10))
downJButton!.setText("Down")
jPanel7!.add(downJButton)
modifierJPanel!.add(jPanel7)
jPanel8!.setLayout(java.awt.GridLayout(1, 2))
leftJButton!.setFont(java.awt.Font("Dialog", 0, 10))
leftJButton!.setText("Left")
jPanel8!.add(leftJButton)
rightJButton!.setFont(java.awt.Font("Dialog", 0, 10))
rightJButton!.setText("Right")
jPanel8!.add(rightJButton)
modifierJPanel!.add(jPanel8)
add(modifierJPanel)
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
                
            

