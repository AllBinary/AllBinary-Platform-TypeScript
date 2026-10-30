
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
type ARunnable<T = any, U = any> = typeof ARunnable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ARunnable;

import { File } from '../../../../java/io/File.js';
//not GWT import const File

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JDialog } from './JDialog.js';
//sameFolderImports - not GWT import - same folder const JDialog
import { FileJDialogListenerInterface } from './FileJDialogListenerInterface.js';
//sameFolderImports - not GWT import - same folder const FileJDialogListenerInterface
import { Frame } from './Frame.js';
//sameFolderImports - not GWT import - same folder const Frame
import { JFileChooser } from './JFileChooser.js';
//sameFolderImports - not GWT import - same folder const JFileChooser
import { ActionListener } from './ActionListener.js';
//sameFolderImports - not GWT import - same folder const ActionListener
import { ActionEvent } from './ActionEvent.js';
//sameFolderImports - not GWT import - same folder const ActionEvent
import { GroupLayout } from './GroupLayout.js';
//sameFolderImports - not GWT import - same folder const GroupLayout
import { Short } from './Short.js';
//sameFolderImports - not GWT import - same folder const Short
import { EventQueue } from './EventQueue.js';
//sameFolderImports - not GWT import - same folder const EventQueue
import { JFrame } from './JFrame.js';
//sameFolderImports - not GWT import - same folder const JFrame

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
    

    let layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(getContentPane());;
    
getContentPane()!.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(org.jdesktop.layout.GroupLayout.TRAILING, layout.createSequentialGroup()!.addContainerGap(org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.add(jFileChooser1, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addContainerGap()));
    
layout.setVerticalGroup(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(layout.createSequentialGroup()!.addContainerGap()!.add(jFileChooser1, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, 357, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addContainerGap(org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
pack();
    
}


    jFileChooser1ActionPerformed(evt: java.awt.event.ActionEvent){
this.logUtil!.putF("Starting Action Command: " +evt.getActionCommand(), this, "ActionPerformed");
    

    let files: File[] = this.getJFileChooser1()!.getSelectedFiles()!;;
    

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

