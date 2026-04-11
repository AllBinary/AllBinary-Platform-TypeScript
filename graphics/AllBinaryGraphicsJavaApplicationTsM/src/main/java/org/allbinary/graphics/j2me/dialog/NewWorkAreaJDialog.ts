
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
        



import { awt } from "../../../../../java/awt.js";

    
import { ActionEvent } from "../../../../../java/awt/event/ActionEvent.js";

    
import { ActionListener } from "../../../../../java/awt/event/ActionListener.js";

    
import { swing } from "../../../../../javax/swing.js";

    
import { GraphicsException } from "../../../../../org/allbinary/graphics/j2me/GraphicsException.js";

    
import { MyFrame } from "../../../../../org/allbinary/graphics/j2me/MyFrame.js";

    
import { WorkAreaJPanel } from "../../../../../org/allbinary/graphics/j2me/workarea/WorkAreaJPanel.js";

    
import { WorkAreaJPanelInterface } from "../../../../../org/allbinary/graphics/j2me/workarea/WorkAreaJPanelInterface.js";

    

export class NewWorkAreaJDialog extends javax.swing.JDialog {
        

    public static main(args: string[]){
var args = args

        try {
            NewWorkAreaJDialog(MyFrame(), true, Dimension(100, 100), "testing").
                            show();
    

                //: 
} catch(e) 
            {
}

}


    private parent: MyFrame

    private dimension: Dimension

    private xSizeJTextField: JTextField

    private ySizeJTextField: JTextField

    private nameJTextField: JTextField
public constructor (parent: MyFrame, modal: boolean, dimension: Dimension, newName: string)                        

                            : super(parent as java.awt.Frame, modal){

            super();
            var parent = parent
var modal = modal
var dimension = dimension
var newName = newName


                            //For kotlin this is before the body of the constructor.
                    

        try {
            initComponents();
    
this.parent= parent;
    
this.xSizeJTextField= JTextField("12");
    
this.ySizeJTextField= JTextField("12");
    
this.nameJTextField= JTextField(newName);
    
this.dimension= dimension;
    

    var submitButton: JButton = new JButton("Ok");
        
        
;
    
submitButton!.addActionListener(object: ActionListener()
                                {
                                
    public actionPerformed(evt: ActionEvent){
var evt = evt

        try {
            disposeNewDialog();
    

                //: 
} catch(e) 
            {
}

}

                                }
                            );
    
this.setSize(150, 100);
    
this.getContentPane()!.setLayout(GridLayout(5, 2));
    
this.getContentPane()!.add(JLabel("Please enter"));
    
this.getContentPane()!.add(JLabel(" the size."));
    
this.getContentPane()!.add(JLabel("Name:"));
    
this.getContentPane()!.add(nameJTextField);
    
this.getContentPane()!.add(JLabel("X: "));
    
this.getContentPane()!.add(xSizeJTextField);
    
this.getContentPane()!.add(JLabel("Y: "));
    
this.getContentPane()!.add(ySizeJTextField);
    
this.getContentPane()!.add(submitButton);
    
this.show();
    

                //: 
} catch(e) 
            {



                            throw e
}

}


                //@Throws(Error::class)
            
    disposeNewDialog(){

        try {
            
    var canvasWidth: Integer = new Integer(xSizeJTextField!.getText());
        
        
;
    

    var canvasHeight: Integer = new Integer(ySizeJTextField!.getText());
        
        
;
    

    var newName: string = this.nameJTextField!.getText()!;
        
        
;
    

                        if(newName == 
                                    null
                                )
                        
                                    throw GraphicsException("No Name", this, "disposeNewDialog")

    var workAreaJPanel: WorkAreaJPanel = new WorkAreaJPanel(newName, this.dimension, canvasWidth!.toInt(), canvasHeight!.toInt());
        
        
;
    
workAreaJPanel!.setLayout(GridLayout(1, 1));
    
parent.add(workAreaJPanel as WorkAreaJPanelInterface);
    
this.dispose();
    

                //: 
} catch(e) 
            {



                            throw e
}

}


    initComponents(){
addWindowListener(object: java.awt.event.WindowAdapter()
                                {
                                
    public windowClosing(evt: java.awt.event.WindowEvent){
var evt = evt
closeDialog(evt);
    
}

                                }
                            );
    
pack();
    
}


    closeDialog(evt: java.awt.event.WindowEvent){
var evt = evt
setVisible(false);
    
dispose();
    
}


}
                
            

