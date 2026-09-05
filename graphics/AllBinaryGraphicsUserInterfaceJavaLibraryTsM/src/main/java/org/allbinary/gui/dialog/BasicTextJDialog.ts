
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

        


//not plain js import { ARunnable } 
const ARunnable = globalThis.org.allbinary.thread.ARunnable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JDialog } from './JDialog.js';
//not GWT import - same folder const JDialog = globalThis.org.allbinary.gui.dialog.JDialog;

                import { CloseJDialogListenerInterface } from './CloseJDialogListenerInterface.js';
//not GWT import - same folder const CloseJDialogListenerInterface = globalThis.org.allbinary.gui.dialog.CloseJDialogListenerInterface;

                import { Frame } from './Frame.js';
//not GWT import - same folder const Frame = globalThis.org.allbinary.gui.dialog.Frame;

                import { JButton } from './JButton.js';
//not GWT import - same folder const JButton = globalThis.org.allbinary.gui.dialog.JButton;

                import { JLabel } from './JLabel.js';
//not GWT import - same folder const JLabel = globalThis.org.allbinary.gui.dialog.JLabel;

                import { ActionListener } from './ActionListener.js';
//not GWT import - same folder const ActionListener = globalThis.org.allbinary.gui.dialog.ActionListener;

                import { ActionEvent } from './ActionEvent.js';
//not GWT import - same folder const ActionEvent = globalThis.org.allbinary.gui.dialog.ActionEvent;

                import { GroupLayout } from './GroupLayout.js';
//not GWT import - same folder const GroupLayout = globalThis.org.allbinary.gui.dialog.GroupLayout;

                import { Short } from './Short.js';
//not GWT import - same folder const Short = globalThis.org.allbinary.gui.dialog.Short;

                import { EventQueue } from './EventQueue.js';
//not GWT import - same folder const EventQueue = globalThis.org.allbinary.gui.dialog.EventQueue;

                import { JFrame } from './JFrame.js';
//not GWT import - same folder const JFrame = globalThis.org.allbinary.gui.dialog.JFrame;

                
export class BasicTextJDialog extends javax.swing.JDialog {
        

    public static main(args: string[]){
java.awt.EventQueue.invokeLater(new class extends ARunnable
                                {
                                
    public run(){
new BasicTextJDialog(new javax.swing.JFrame(), true, "Test").setVisible(true);
    
}

                                }
                            );
    
}


    private closeListenerInterface: CloseJDialogListenerInterface;

public constructor (parent: java.awt.Frame, modal: boolean, text: string){
            super(parent, modal);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.initComponents();
    
this.setText(text);
    
}


    public setText(text: string){
this.textJLabel!.setText(text);
    
}


    public addCloseListener(closeListenerInterface: CloseJDialogListenerInterface){
this.closeListenerInterface= closeListenerInterface;
    
}


public constructor (text: string){

            super();
        this.initComponents();
    
this.textJLabel!.setText(text);
    
}


    initComponents(){
this.jButton1= new javax.swing.JButton();
    
this.textJLabel= new javax.swing.JLabel();
    
setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);
    
this.jButton1!.setText("OK");
    
jButton1!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
jButton1ActionPerformed(evt);
    
}

                                }
                            );
    
this.textJLabel!.setText("No Text Set");
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(getContentPane());;
    
getContentPane()!.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addGap(80, 80, 80)!.addComponent(jButton1))!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addComponent(textJLabel, javax.swing.GroupLayout.DEFAULT_SIZE, 184, Short.MAX_VALUE)))!.addContainerGap()));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addGap(20, 20, 20)!.addComponent(textJLabel, javax.swing.GroupLayout.PREFERRED_SIZE, 20, javax.swing.GroupLayout.PREFERRED_SIZE)!.addGap(30, 30, 30)!.addComponent(jButton1)));
    
pack();
    
}


    jButton1ActionPerformed(evt: java.awt.event.ActionEvent){
this.setVisible(false);
    

                        if(this.closeListenerInterface != 
                                    null
                                )
                        
                                    {
                                    this.closeListenerInterface!.onClose();
    

                                    }
                                
}


    private jButton1: javax.swing.JButton;

    private textJLabel: javax.swing.JLabel;

}



