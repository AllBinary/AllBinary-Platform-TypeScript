
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { System } from '../../../../../java/lang/System.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { ARunnable } from '../../../../../org/allbinary/thread/ARunnable.js';
      
import { HashMap } from '../../../../../java/util/HashMap.js';
      
import { HashMapJDialogListenerInterface } from '../../../../../org/allbinary/gui/dialog/HashMapJDialogListenerInterface.js';
      
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JDialog } from './JDialog.js';
import { Frame } from './Frame.js';
import { JTextField } from './JTextField.js';
import { JLabel } from './JLabel.js';
import { JPanel } from './JPanel.js';
import { JButton } from './JButton.js';
import { ActionListener } from './ActionListener.js';
import { ActionEvent } from './ActionEvent.js';
import { GroupLayout } from './GroupLayout.js';
import { Short } from './Short.js';
import { EventQueue } from './EventQueue.js';
import { JFrame } from './JFrame.js';
import { WindowAdapter } from './WindowAdapter.js';
import { WindowEvent } from './WindowEvent.js';

export class RotateJDialog extends javax.swing.JDialog {
        

    public static main(args: string[]){
java.awt.EventQueue.invokeLater(new class extends ARunnable
                                {
                                
    public run(){

    var dialog: RotateJDialog = new RotateJDialog(new javax.swing.JFrame(), true);
;
    
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

    private hashMap: HashMap<any, any> = new HashMap<any, any>();
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
    

    var jPanel1Layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.jPanel1);
;
    
this.jPanel1!.setLayout(jPanel1Layout);
    
jPanel1Layout!.setHorizontalGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(jPanel1Layout!.createSequentialGroup()!.addGap(62, 62, 62)!.addComponent(jButton1)!.addContainerGap(62, Short.MAX_VALUE)));
    
jPanel1Layout!.setVerticalGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(jButton1));
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(getContentPane());
;
    
getContentPane()!.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)!.addComponent(jLabel1)!.addComponent(jLabel2))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(totalRotationJTextField, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 31, Short.MAX_VALUE)!.addComponent(angleIncrementJTextField, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 31, javax.swing.GroupLayout.PREFERRED_SIZE))!.addContainerGap())!.addComponent(jPanel1, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(angleIncrementJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel1))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(totalRotationJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel2))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 16, Short.MAX_VALUE)!.addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap()));
    
pack();
    
}


    jButton1ActionPerformed(evt: java.awt.event.ActionEvent){

        try {
            this.hashMap!.put(Integer.valueOf(0)Integer.valueOf(this.angleIncrementJTextField!.getText()));
    
this.hashMap!.put(Integer.valueOf(1)Integer.valueOf(this.totalRotationJTextField!.getText()));
    
getParent = this.getParent();getParent as HashMapJDialogListenerInterface
getParent.
                    onHashMap(this.hashMap);
    
this.setVisible(false);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    
this.logUtil!.putF(commonStrings!.EXCEPTION, this, "jButton1ActionPerformed");
    
}

}


    private angleIncrementJTextField: javax.swing.JTextField

    private jButton1: javax.swing.JButton

    private jLabel1: javax.swing.JLabel

    private jLabel2: javax.swing.JLabel

    private jPanel1: javax.swing.JPanel

    private totalRotationJTextField: javax.swing.JTextField

}
                
            

