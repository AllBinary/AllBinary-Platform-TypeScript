
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

        


//not plain js import { ARunnable } from '../../../../org/allbinary/thread/ARunnable.js';
      const ARunnable = globalThis.org.allbinary.thread.ARunnable;

      
import { File } from '../../../../java/io/File.js';
      //not GWT import const File = globalThis.java.io.File;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JDialog } from './JDialog.js';
//not GWT import const JDialog = globalThis.org.allbinary.gui.dialog.JDialog;

                import { FileJDialogListenerInterface } from './FileJDialogListenerInterface.js';
//not GWT import const FileJDialogListenerInterface = globalThis.org.allbinary.gui.dialog.FileJDialogListenerInterface;

                import { Frame } from './Frame.js';
//not GWT import const Frame = globalThis.org.allbinary.gui.dialog.Frame;

                import { JFileChooser } from './JFileChooser.js';
//not GWT import const JFileChooser = globalThis.org.allbinary.gui.dialog.JFileChooser;

                import { ActionListener } from './ActionListener.js';
//not GWT import const ActionListener = globalThis.org.allbinary.gui.dialog.ActionListener;

                import { ActionEvent } from './ActionEvent.js';
//not GWT import const ActionEvent = globalThis.org.allbinary.gui.dialog.ActionEvent;

                import { GroupLayout } from './GroupLayout.js';
//not GWT import const GroupLayout = globalThis.org.allbinary.gui.dialog.GroupLayout;

                import { Short } from './Short.js';
//not GWT import const Short = globalThis.org.allbinary.gui.dialog.Short;

                import { EventQueue } from './EventQueue.js';
//not GWT import const EventQueue = globalThis.org.allbinary.gui.dialog.EventQueue;

                import { JFrame } from './JFrame.js';
//not GWT import const JFrame = globalThis.org.allbinary.gui.dialog.JFrame;

                
export class FileJDialog extends javax.swing.JDialog {
        

    public static main(args: string[]){
java.awt.EventQueue.invokeLater(new class extends ARunnable
                                {
                                
    public run(){
new FileJDialog(new javax.swing.JFrame(), true).setVisible(true);
    
}

                                }
                            );
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private finishedListenerInterface: FileJDialogListenerInterface;

public constructor (){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
this.initComponents();
    
this.getJFileChooser1()!.setMultiSelectionEnabled(true);
    
}


public constructor (parent: java.awt.Frame, modal: boolean){
            super(parent, modal);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.initComponents();
    
this.getJFileChooser1()!.setMultiSelectionEnabled(true);
    
}


    public addFinishedListener(finishedListenerInterface: FileJDialogListenerInterface){
this.finishedListenerInterface= finishedListenerInterface;
    
}


    initComponents(){
this.jFileChooser1= new javax.swing.JFileChooser();
    
setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);
    
this.jFileChooser1!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
jFileChooser1ActionPerformed(evt);
    
}

                                }
                            );
    

    var layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(getContentPane());;
    
getContentPane()!.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(org.jdesktop.layout.GroupLayout.TRAILING, layout.createSequentialGroup()!.addContainerGap(org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.add(jFileChooser1, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addContainerGap()));
    
layout.setVerticalGroup(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(layout.createSequentialGroup()!.addContainerGap()!.add(jFileChooser1, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, 357, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addContainerGap(org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
pack();
    
}


    jFileChooser1ActionPerformed(evt: java.awt.event.ActionEvent){
this.logUtil!.putF("Starting Action Command: " +evt.getActionCommand(), this, "ActionPerformed");
    

    var files: File[] = this.getJFileChooser1()!.getSelectedFiles()!;;
    

                        if(evt.getActionCommand() == this.getJFileChooser1()!.CANCEL_SELECTION)
                        
                                    {
                                    this.setVisible(false);
    

                                    }
                                

                        if(evt.getActionCommand() == this.getJFileChooser1()!.APPROVE_SELECTION)
                        
                                    {
                                    
                        if(files != 
                                    null
                                 && files.length > 0)
                        
                                    {
                                    this.finishedListenerInterface!.onFiles(files);
    

                                    }
                                

                                    }
                                
}


    public getJFileChooser1(): javax.swing.JFileChooser{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.jFileChooser1;
    
}


    public setJFileChooser1(jFileChooser1: javax.swing.JFileChooser){
this.jFileChooser1= jFileChooser1;
    
}


    private jFileChooser1: javax.swing.JFileChooser;

}



