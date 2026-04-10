
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

    

export class BasicTextJDialog extends javax.swing.JDialog {
        

    public static main(args: string[]){
var args = args
invokeLater(object: ARunnable()
                                {
                                
    public run(){
setVisible(true)
}

                                }
                            )
}


    private closeListenerInterface: CloseJDialogListenerInterface
public constructor (parent: java.awt.Frame, modal: boolean, text: string)                        

                            : super(parent, modal){

            super();
            var parent = parent
var modal = modal
var text = text


                            //For kotlin this is before the body of the constructor.
                    
initComponents()
this.setText(text)
}


    public setText(text: string){
var text = text
setText(text)
}


    public addCloseListener(closeListenerInterface: CloseJDialogListenerInterface){
var closeListenerInterface = closeListenerInterface
this.closeListenerInterface= closeListenerInterface
}

public constructor (text: string){

            super();
            var text = text
initComponents()
setText(text)
}


    initComponents(){
jButton1= javax.swing.JButton()
textJLabel= javax.swing.JLabel()
setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE)
setText("OK")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
jButton1ActionPerformed(evt)
}

                                }
                            )
setText("No Text Set")

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(getContentPane());
        
        

setLayout(layout)
setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addGap(80, 80, 80)!.addComponent(jButton1))!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addComponent(textJLabel, javax.swing.GroupLayout.DEFAULT_SIZE, 184, Short.MAX_VALUE)))!.addContainerGap()))
setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addGap(20, 20, 20)!.addComponent(textJLabel, javax.swing.GroupLayout.PREFERRED_SIZE, 20, javax.swing.GroupLayout.PREFERRED_SIZE)!.addGap(30, 30, 30)!.addComponent(jButton1)))
pack()
}


    jButton1ActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.setVisible(false)

    
                        if(this.closeListenerInterface != 
                                    null
                                )
                        
                                    {
                                    onClose()

                                    }
                                
}


    private jButton1: javax.swing.JButton

    private textJLabel: javax.swing.JLabel

}
                
            

