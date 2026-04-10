
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
        



import { ARunnable } from "../../../../../org/allbinary/thread/ARunnable.js";

    
import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { HashMapJDialogListenerInterface } from "../../../../../org/allbinary/gui/dialog/HashMapJDialogListenerInterface.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class RotateJDialog extends javax.swing.JDialog {
        

    public static main(args: string[]){
var args = args
invokeLater(object: ARunnable()
                                {
                                
    public run(){

    var dialog: RotateJDialog = new RotateJDialog(javax.swing.JFrame(), true);
        
        

addWindowListener(object: java.awt.event.WindowAdapter()
                                {
                                
    public windowClosing(e: java.awt.event.WindowEvent){
var e = e
exit(0)
}

                                }
                            )
setVisible(true)
}

                                }
                            )
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        
public constructor (parent: java.awt.Frame, modal: boolean)                        

                            : super(parent, modal){

            super();
            var parent = parent
var modal = modal


                            //For kotlin this is before the body of the constructor.
                    
initComponents()
}


    initComponents(){
angleIncrementJTextField= javax.swing.JTextField()
jLabel1= javax.swing.JLabel()
totalRotationJTextField= javax.swing.JTextField()
jLabel2= javax.swing.JLabel()
jPanel1= javax.swing.JPanel()
jButton1= javax.swing.JButton()
setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE)
setText("36")
setText("Angle Increment:")
setText("360")
setText("Total Angular Rotation:")
setText("OK")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
jButton1ActionPerformed(evt)
}

                                }
                            )

    var jPanel1Layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(jPanel1);
        
        

setLayout(jPanel1Layout)
setHorizontalGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(jPanel1Layout!.createSequentialGroup()!.addGap(62, 62, 62)!.addComponent(jButton1)!.addContainerGap(62, Short.MAX_VALUE)))
setVerticalGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(jButton1))

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(getContentPane());
        
        

setLayout(layout)
setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)!.addComponent(jLabel1)!.addComponent(jLabel2))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(totalRotationJTextField, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 31, Short.MAX_VALUE)!.addComponent(angleIncrementJTextField, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 31, javax.swing.GroupLayout.PREFERRED_SIZE))!.addContainerGap())!.addComponent(jPanel1, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(angleIncrementJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel1))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(totalRotationJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel2))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 16, Short.MAX_VALUE)!.addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap()))
pack()
}


    jButton1ActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            put(Integer(Integer.valueOf(0))Integer(Integer.valueOf(this.angleIncrementJTextField!.getText())))
put(Integer(Integer.valueOf(1))Integer(Integer.valueOf(this.totalRotationJTextField!.getText())))
onHashMap(hashMap)
this.setVisible(false)
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, "jButton1ActionPerformed")
}

}


    private angleIncrementJTextField: javax.swing.JTextField

    private jButton1: javax.swing.JButton

    private jLabel1: javax.swing.JLabel

    private jLabel2: javax.swing.JLabel

    private jPanel1: javax.swing.JPanel

    private totalRotationJTextField: javax.swing.JTextField

}
                
            

