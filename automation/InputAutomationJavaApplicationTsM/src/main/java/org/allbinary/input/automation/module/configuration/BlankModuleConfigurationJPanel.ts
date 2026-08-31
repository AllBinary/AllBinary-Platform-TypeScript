
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
        import { JPanel } from './JPanel.js';
//not GWT import const JPanel = globalThis.org.allbinary.input.automation.module.configuration.JPanel;

                import { JLabel } from './JLabel.js';
//not GWT import const JLabel = globalThis.org.allbinary.input.automation.module.configuration.JLabel;

                import { GroupLayout } from './GroupLayout.js';
//not GWT import const GroupLayout = globalThis.org.allbinary.input.automation.module.configuration.GroupLayout;

                import { Short } from './Short.js';
//not GWT import const Short = globalThis.org.allbinary.input.automation.module.configuration.Short;

                
export class BlankModuleConfigurationJPanel extends javax.swing.JPanel {
        

public constructor (){

            super();
        this.initComponents();
    
}


    initComponents(){
this.jLabel1= new javax.swing.JLabel();
    
this.jLabel1!.setText("No Configuration Available");
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()!.addContainerGap(231, Short.MAX_VALUE)!.addComponent(jLabel1)!.addGap(225, 225, 225)));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addComponent(jLabel1)!.addContainerGap(362, Short.MAX_VALUE)));
    
}


    private jLabel1: javax.swing.JLabel;

}



