
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { System } from '../../../../../java/lang/System.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
//not plain js import { ARunnable } from '../../../../../org/allbinary/thread/ARunnable.js';
      const ARunnable = globalThis.org.allbinary.thread.ARunnable;

      
import { HashMap } from '../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { HashMapJDialogListenerInterface } from '../../../../../org/allbinary/gui/dialog/HashMapJDialogListenerInterface.js';
      //not GWT import const HashMapJDialogListenerInterface = globalThis.org.allbinary.gui.dialog.HashMapJDialogListenerInterface;

      
//not plain js import { StdUtil } from '../../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JDialog } from './JDialog.js';
//not GWT import const JDialog = globalThis.org.allbinary.graphics.j2me.dialog.JDialog;

                import { Frame } from './Frame.js';
//not GWT import const Frame = globalThis.org.allbinary.graphics.j2me.dialog.Frame;

                import { JTextField } from './JTextField.js';
//not GWT import const JTextField = globalThis.org.allbinary.graphics.j2me.dialog.JTextField;

                import { JLabel } from './JLabel.js';
//not GWT import const JLabel = globalThis.org.allbinary.graphics.j2me.dialog.JLabel;

                import { JPanel } from './JPanel.js';
//not GWT import const JPanel = globalThis.org.allbinary.graphics.j2me.dialog.JPanel;

                import { JButton } from './JButton.js';
//not GWT import const JButton = globalThis.org.allbinary.graphics.j2me.dialog.JButton;

                import { ActionListener } from './ActionListener.js';
//not GWT import const ActionListener = globalThis.org.allbinary.graphics.j2me.dialog.ActionListener;

                import { ActionEvent } from './ActionEvent.js';
//not GWT import const ActionEvent = globalThis.org.allbinary.graphics.j2me.dialog.ActionEvent;

                import { GroupLayout } from './GroupLayout.js';
//not GWT import const GroupLayout = globalThis.org.allbinary.graphics.j2me.dialog.GroupLayout;

                import { Short } from './Short.js';
//not GWT import const Short = globalThis.org.allbinary.graphics.j2me.dialog.Short;

                import { EventQueue } from './EventQueue.js';
//not GWT import const EventQueue = globalThis.org.allbinary.graphics.j2me.dialog.EventQueue;

                import { JFrame } from './JFrame.js';
//not GWT import const JFrame = globalThis.org.allbinary.graphics.j2me.dialog.JFrame;

                import { WindowAdapter } from './WindowAdapter.js';
//not GWT import const WindowAdapter = globalThis.org.allbinary.graphics.j2me.dialog.WindowAdapter;

                import { WindowEvent } from './WindowEvent.js';
//not GWT import const WindowEvent = globalThis.org.allbinary.graphics.j2me.dialog.WindowEvent;

                
export class RotateJDialog extends javax.swing.JDialog {
        

    public static main(args: string[]){
java.awt.EventQueue.invokeLater(new class extends ARunnable
                                {
                                
    public run(){

    var dialog: RotateJDialog = new RotateJDialog(new javax.swing.JFrame(), true);;
    
dialog.addWindowListener(new class extends java.awt.event.WindowAdapter
                                {
                                
    public windowClosing(e: java.awt.event.WindowEvent){
System.exit(0);
    
}

                                }
                            );
    
dialog.setVisible(true);
    
}

                                }
                            );
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;

public constructor (parent: java.awt.Frame, modal: boolean){
            super(parent, modal);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.initComponents();
    
}


    initComponents(){
angleIncrementJTextField= new javax.swing.JTextField();
    
this.jLabel1= new javax.swing.JLabel();
    
this.totalRotationJTextField= new javax.swing.JTextField();
    
this.jLabel2= new javax.swing.JLabel();
    
this.jPanel1= new javax.swing.JPanel();
    
this.jButton1= new javax.swing.JButton();
    
setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);
    
this.angleIncrementJTextField!.setText("36");
    
this.jLabel1!.setText("Angle Increment:");
    
this.totalRotationJTextField!.setText("360");
    
this.jLabel2!.setText("Total Angular Rotation:");
    
this.jButton1!.setText("OK");
    
this.jButton1!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
jButton1ActionPerformed(evt);
    
}

                                }
                            );
    

    var jPanel1Layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.jPanel1);;
    
this.jPanel1!.setLayout(jPanel1Layout);
    
jPanel1Layout!.setHorizontalGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(jPanel1Layout!.createSequentialGroup()!.addGap(62, 62, 62)!.addComponent(jButton1)!.addContainerGap(62, Short.MAX_VALUE)));
    
jPanel1Layout!.setVerticalGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(jButton1));
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(getContentPane());;
    
getContentPane()!.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)!.addComponent(jLabel1)!.addComponent(jLabel2))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(totalRotationJTextField, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 31, Short.MAX_VALUE)!.addComponent(angleIncrementJTextField, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 31, javax.swing.GroupLayout.PREFERRED_SIZE))!.addContainerGap())!.addComponent(jPanel1, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(angleIncrementJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel1))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(totalRotationJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel2))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 16, Short.MAX_VALUE)!.addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap()));
    
pack();
    
}


    jButton1ActionPerformed(evt: java.awt.event.ActionEvent){

        try {
            this.hashMap!.put(Integer.valueOf(0)Integer.valueOf(this.angleIncrementJTextField!.getText()));
    
this.hashMap!.put(Integer.valueOf(1)Integer.valueOf(this.totalRotationJTextField!.getText()));
    
getParent = this.getParent()getParent as HashMapJDialogListenerInterface
getParent.
                    onHashMap(this.hashMap);
    
this.setVisible(false);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(commonStrings!.EXCEPTION, this, "jButton1ActionPerformed");
    
}

}


    private angleIncrementJTextField: javax.swing.JTextField;

    private jButton1: javax.swing.JButton;

    private jLabel1: javax.swing.JLabel;

    private jLabel2: javax.swing.JLabel;

    private jPanel1: javax.swing.JPanel;

    private totalRotationJTextField: javax.swing.JTextField;

}



