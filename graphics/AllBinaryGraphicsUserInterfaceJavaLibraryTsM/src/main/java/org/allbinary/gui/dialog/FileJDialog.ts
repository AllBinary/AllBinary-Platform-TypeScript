
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
        



import { ARunnable } from "../../../../org/allbinary/thread/ARunnable.js";

    
import { File } from "../../../../java/io/File.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { JDialog } from "./JDialog.js";

import { Frame } from "./Frame.js";

import { FileJDialogListenerInterface } from "./FileJDialogListenerInterface.js";

import { Short } from "./Short.js";

import { ActionEvent } from "./ActionEvent.js";

import { JFileChooser } from "./JFileChooser.js";

export class FileJDialog extends javax.swing.JDialog {
        

    public static main(args: string[]){
var args = args
java.awt.EventQueue.invokeLater(new object: ARunnable()
                                {
                                
    public run(){
new FileJDialog(new javax.swing.JFrame(), true).
                            setVisible(true);
    
}

                                }
                            );
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private finishedListenerInterface: FileJDialogListenerInterface
public constructor (){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
initComponents();
    
this.getJFileChooser1()!.setMultiSelectionEnabled(true);
    
}

public constructor (parent: java.awt.Frame, modal: boolean){
            super(parent, modal);
                    var parent = parent
var modal = modal


                            //For kotlin this is before the body of the constructor.
                    
initComponents();
    
this.getJFileChooser1()!.setMultiSelectionEnabled(true);
    
}


    public addFinishedListener(finishedListenerInterface: FileJDialogListenerInterface){
var finishedListenerInterface = finishedListenerInterface
this.finishedListenerInterface= finishedListenerInterface;
    
}


    initComponents(){
this.jFileChooser1= new javax.swing.JFileChooser();
    
setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);
    
jFileChooser1!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
jFileChooser1ActionPerformed(evt);
    
}

                                }
                            );
    

    var layout: org.jdesktop.layout.GroupLayout = new org.jdesktop.layout.GroupLayout(getContentPane());
        
        
;
    
getContentPane()!.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(org.jdesktop.layout.GroupLayout.TRAILING, layout.createSequentialGroup()!.addContainerGap(org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.add(jFileChooser1, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addContainerGap()));
    
layout.setVerticalGroup(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)!.add(layout.createSequentialGroup()!.addContainerGap()!.add(jFileChooser1, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, 357, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)!.addContainerGap(org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
pack();
    
}


    jFileChooser1ActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.logUtil!.putF("Starting Action Command: " +evt.getActionCommand(), this, "ActionPerformed");
    

    var files: File[] = this.getJFileChooser1()!.getSelectedFiles()!;
        
        
;
    

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
                        return jFileChooser1;
    
}


    public setJFileChooser1(jFileChooser1: javax.swing.JFileChooser){
var jFileChooser1 = jFileChooser1
this.jFileChooser1= jFileChooser1;
    
}


    private jFileChooser1: javax.swing.JFileChooser

}
                
            

