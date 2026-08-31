
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
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { awt } from '../../../../../java/awt.js';
      //not GWT import const awt = globalThis.java.awt;

      
import { ActionEvent } from '../../../../../java/awt/event/ActionEvent.js';
      //not GWT import const ActionEvent = globalThis.java.awt.event.ActionEvent;

      
import { ActionListener } from '../../../../../java/awt/event/ActionListener.js';
      //not GWT import const ActionListener = globalThis.java.awt.event.ActionListener;

      
import { swing } from '../../../../../javax/swing.js';
      //not GWT import const swing = globalThis.javax.swing;

      
import { GraphicsException } from '../../../../../org/allbinary/graphics/j2me/GraphicsException.js';
      //not GWT import const GraphicsException = globalThis.org.allbinary.graphics.j2me.GraphicsException;

      
import { MyFrame } from '../../../../../org/allbinary/graphics/j2me/MyFrame.js';
      //not GWT import const MyFrame = globalThis.org.allbinary.graphics.j2me.MyFrame;

      
import { WorkAreaJPanel } from '../../../../../org/allbinary/graphics/j2me/workarea/WorkAreaJPanel.js';
      //not GWT import const WorkAreaJPanel = globalThis.org.allbinary.graphics.j2me.workarea.WorkAreaJPanel;

      
import { WorkAreaJPanelInterface } from '../../../../../org/allbinary/graphics/j2me/workarea/WorkAreaJPanelInterface.js';
      //not GWT import const WorkAreaJPanelInterface = globalThis.org.allbinary.graphics.j2me.workarea.WorkAreaJPanelInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JDialog } from './JDialog.js';
//not GWT import const  = globalThis.org.allbinary.graphics.j2me.dialog.JDialog;

                import { Dimension } from './Dimension.js';
//not GWT import const  = globalThis.org.allbinary.graphics.j2me.dialog.Dimension;

                import { JTextField } from './JTextField.js';
//not GWT import const  = globalThis.org.allbinary.graphics.j2me.dialog.JTextField;

                import { Frame } from './Frame.js';
//not GWT import const  = globalThis.org.allbinary.graphics.j2me.dialog.Frame;

                import { JButton } from './JButton.js';
//not GWT import const  = globalThis.org.allbinary.graphics.j2me.dialog.JButton;

                import { GridLayout } from './GridLayout.js';
//not GWT import const  = globalThis.org.allbinary.graphics.j2me.dialog.GridLayout;

                import { JLabel } from './JLabel.js';
//not GWT import const  = globalThis.org.allbinary.graphics.j2me.dialog.JLabel;

                import { WindowAdapter } from './WindowAdapter.js';
//not GWT import const  = globalThis.org.allbinary.graphics.j2me.dialog.WindowAdapter;

                import { WindowEvent } from './WindowEvent.js';
//not GWT import const  = globalThis.org.allbinary.graphics.j2me.dialog.WindowEvent;

                
export class NewWorkAreaJDialog extends javax.swing.JDialog {
        

    public static main(args: string[]){

        try {
            new NewWorkAreaJDialog(new MyFrame(), true, new Dimension(100, 100), "testing").show();
    

                //: 
} catch(e) 
            {
}

}


    private parent: MyFrame;

    private dimension: Dimension;

    private xSizeJTextField: JTextField;

    private ySizeJTextField: JTextField;

    private nameJTextField: JTextField;

public constructor (parent: MyFrame, modal: boolean, dimension: Dimension, newName: string){
            super(parent as java.awt.Frame, modal);
                    

                            //For kotlin this is before the body of the constructor.
                    

        try {
            this.initComponents();
    
this.parent= parent;
    
this.xSizeJTextField= new JTextField("12");
    
this.ySizeJTextField= new JTextField("12");
    
this.nameJTextField= new JTextField(newName);
    
this.dimension= dimension;
    

    var submitButton: JButton = new JButton("Ok");;
    
submitButton!.addActionListener(new class extends ActionListener
                                {
                                
    public actionPerformed(evt: ActionEvent){

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
    
this.getContentPane()!.setLayout(new GridLayout(5, 2));
    
this.getContentPane()!.add(new JLabel("Please enter"));
    
this.getContentPane()!.add(new JLabel(" the size."));
    
this.getContentPane()!.add(new JLabel("Name:"));
    
this.getContentPane()!.add(this.nameJTextField);
    
this.getContentPane()!.add(new JLabel("X: "));
    
this.getContentPane()!.add(this.xSizeJTextField);
    
this.getContentPane()!.add(new JLabel("Y: "));
    
this.getContentPane()!.add(this.ySizeJTextField);
    
this.getContentPane()!.add(submitButton);
    
this.show();
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    disposeNewDialog(){

        try {
            
    var canvasWidth: Integer = new Integer(this.xSizeJTextField!.getText());;
    

    var canvasHeight: Integer = new Integer(this.ySizeJTextField!.getText());;
    

    var newName: string = this.nameJTextField!.getText()!;;
    

                        if(newName == 
                                    null
                                )
                        
                                    throw new GraphicsException("No Name", this, "disposeNewDialog");
                                

    var workAreaJPanel: WorkAreaJPanel = new WorkAreaJPanel(newName, this.dimension, canvasWidth!.intValue(), canvasHeight!.intValue());;
    
workAreaJPanel!.setLayout(new GridLayout(1, 1));
    
this.parent.add(workAreaJPanel as WorkAreaJPanelInterface);
    
this.dispose();
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


    initComponents(){
addWindowListener(new class extends java.awt.event.WindowAdapter
                                {
                                
    public windowClosing(evt: java.awt.event.WindowEvent){
closeDialog(evt);
    
}

                                }
                            );
    
pack();
    
}


    closeDialog(evt: java.awt.event.WindowEvent){
setVisible(false);
    
dispose();
    
}


}



