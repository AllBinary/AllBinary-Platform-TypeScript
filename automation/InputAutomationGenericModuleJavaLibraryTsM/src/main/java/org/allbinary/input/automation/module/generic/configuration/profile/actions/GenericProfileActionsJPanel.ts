
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
        



            import { Object } from '../../../../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
import { DefaultListModelHelper } from '../../../../../../../../../org/allbinary/input/automation/module/DefaultListModelHelper.js';
      
import { LogUtil } from '../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { CommonStrings } from '../../../../../../../../../org/allbinary/string/CommonStrings.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JPanel } from './JPanel.js';
import { GenericProfileActions } from './GenericProfileActions.js';
import { GenericProfileActionJPanel } from './GenericProfileActionJPanel.js';
import { JDialog } from './JDialog.js';
import { JLabel } from './JLabel.js';
import { JButton } from './JButton.js';
import { JTextField } from './JTextField.js';
import { JScrollPane } from './JScrollPane.js';
import { JList } from './JList.js';
import { Dimension } from './Dimension.js';
import { ActionListener } from './ActionListener.js';
import { ActionEvent } from './ActionEvent.js';
import { GroupLayout } from './GroupLayout.js';
import { Short } from './Short.js';
import { ListSelectionListener } from './ListSelectionListener.js';
import { ListSelectionEvent } from './ListSelectionEvent.js';
import { GenericProfileAction } from './GenericProfileAction.js';

export class GenericProfileActionsJPanel extends javax.swing.JPanel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private genericProfileActions: GenericProfileActions;

    private genericProfileActionJPanel: GenericProfileActionJPanel;

public constructor (){

            super();
        this.initComponents();
    
}


    initComponents(){
this.newProfileActionJDialog= new javax.swing.JDialog();
    
this.newProfileActionJLabel= new javax.swing.JLabel();
    
this.okNewProfileActionJButton= new javax.swing.JButton();
    
this.newProfileActionJTextField= new javax.swing.JTextField();
    
this.genericProfileActionsJPanel= new javax.swing.JPanel();
    
this.genericProfileActionsJScrollPane= new javax.swing.JScrollPane();
    
this.genericProfileActionsJList= new javax.swing.JList();
    
this.newActionJButton= new javax.swing.JButton();
    
this.deleteActionJButton= new javax.swing.JButton();
    
this.saveJButton= new javax.swing.JButton();
    
this.blankGenericProfileActionJPanel= new javax.swing.JPanel();
    
this.newProfileActionJDialog!.setMinimumSize(new java.awt.Dimension(250, 150));
    
this.newProfileActionJDialog!.setResizable(false);
    
this.newProfileActionJLabel!.setText("New Action Name");
    
this.okNewProfileActionJButton!.setText("Ok");
    
this.okNewProfileActionJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
okNewProfileActionJButtonActionPerformed(evt);
    
}

                                }
                            );
    

    var newProfileActionJDialogLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.newProfileActionJDialog!.getContentPane());;
    
this.newProfileActionJDialog!.getContentPane()!.setLayout(newProfileActionJDialogLayout);
    
newProfileActionJDialogLayout!.setHorizontalGroup(newProfileActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(newProfileActionJDialogLayout!.createSequentialGroup()!.addGroup(newProfileActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(newProfileActionJDialogLayout!.createSequentialGroup()!.addGap(93, 93, 93)!.addComponent(okNewProfileActionJButton))!.addGroup(newProfileActionJDialogLayout!.createSequentialGroup()!.addGap(75, 75, 75)!.addComponent(newProfileActionJLabel))!.addGroup(newProfileActionJDialogLayout!.createSequentialGroup()!.addGap(29, 29, 29)!.addComponent(newProfileActionJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 178, javax.swing.GroupLayout.PREFERRED_SIZE)))!.addContainerGap(34, Short.MAX_VALUE)));
    
newProfileActionJDialogLayout!.setVerticalGroup(newProfileActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(javax.swing.GroupLayout.Alignment.TRAILING, newProfileActionJDialogLayout!.createSequentialGroup()!.addContainerGap()!.addComponent(newProfileActionJLabel)!.addGap(21, 21, 21)!.addComponent(newProfileActionJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 20, Short.MAX_VALUE)!.addComponent(okNewProfileActionJButton)!.addContainerGap()));
    
this.genericProfileActionsJPanel!.setPreferredSize(new java.awt.Dimension(10000, 10000));
    
this.genericProfileActionsJList!.addListSelectionListener(new class extends javax.swing.event.ListSelectionListener
                                {
                                
    public valueChanged(evt: javax.swing.event.ListSelectionEvent){
genericProfileActionsJListValueChanged(evt);
    
}

                                }
                            );
    
this.genericProfileActionsJScrollPane!.setViewportView(this.genericProfileActionsJList);
    
this.newActionJButton!.setText("New");
    
this.newActionJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
newActionJButtonActionPerformed(evt);
    
}

                                }
                            );
    
this.deleteActionJButton!.setText("Delete");
    
this.deleteActionJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
deleteActionJButtonActionPerformed(evt);
    
}

                                }
                            );
    
this.saveJButton!.setText("Save");
    
this.saveJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
saveJButtonActionPerformed(evt);
    
}

                                }
                            );
    
this.blankGenericProfileActionJPanel!.setMinimumSize(new java.awt.Dimension(500, 300));
    

    var blankGenericProfileActionJPanelLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.blankGenericProfileActionJPanel);;
    
this.blankGenericProfileActionJPanel!.setLayout(blankGenericProfileActionJPanelLayout);
    
blankGenericProfileActionJPanelLayout!.setHorizontalGroup(blankGenericProfileActionJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 500, Short.MAX_VALUE));
    
blankGenericProfileActionJPanelLayout!.setVerticalGroup(blankGenericProfileActionJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 296, Short.MAX_VALUE));
    

    var genericProfileActionsJPanelLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.genericProfileActionsJPanel);;
    
this.genericProfileActionsJPanel!.setLayout(genericProfileActionsJPanelLayout);
    
genericProfileActionsJPanelLayout!.setHorizontalGroup(genericProfileActionsJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(genericProfileActionsJPanelLayout!.createSequentialGroup()!.addComponent(genericProfileActionsJScrollPane, javax.swing.GroupLayout.PREFERRED_SIZE, 95, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(blankGenericProfileActionJPanel, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))!.addGroup(genericProfileActionsJPanelLayout!.createSequentialGroup()!.addComponent(newActionJButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(deleteActionJButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(saveJButton)!.addContainerGap()));
    
genericProfileActionsJPanelLayout!.setVerticalGroup(genericProfileActionsJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(genericProfileActionsJPanelLayout!.createSequentialGroup()!.addGroup(genericProfileActionsJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(newActionJButton)!.addComponent(deleteActionJButton)!.addComponent(saveJButton))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(genericProfileActionsJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)!.addComponent(blankGenericProfileActionJPanel, 0, 296, Short.MAX_VALUE)!.addComponent(genericProfileActionsJScrollPane, javax.swing.GroupLayout.DEFAULT_SIZE, 296, Short.MAX_VALUE))!.addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(genericProfileActionsJPanel, javax.swing.GroupLayout.PREFERRED_SIZE, 596, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(genericProfileActionsJPanel, javax.swing.GroupLayout.PREFERRED_SIZE, 336, javax.swing.GroupLayout.PREFERRED_SIZE));
    
}


    public setModel(){

    var defaultListModelHelper: DefaultListModelHelper = this.getGenericProfileActions()!.getDefaultListModelHelper()!;;
    

                        if(defaultListModelHelper!.getListModel()!.getSize() > 0)
                        
                                    {
                                    this.genericProfileActionsJList!.setModel(defaultListModelHelper!.getListModel());
    

                                    }
                                
}


    saveJButtonActionPerformed(evt: java.awt.event.ActionEvent){

        try {
            this.getGenericProfileActions()!.save();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "saveJButtonActionPerformed", e);
    
}

}


    updateProfileActionUI(profileActionNameString: string){
this.blankGenericProfileActionJPanel!.removeAll();
    

                        if(profileActionNameString != 
                                    null
                                )
                        
                                    {
                                    
    var genericProfileAction: GenericProfileAction = this.getGenericProfileActions()!.getAction(profileActionNameString)!;;
    
this.setGenericProfileActionJPanel(new GenericProfileActionJPanel());
    
this.getGenericProfileActionJPanel()!.setGenericProfileAction(genericProfileAction);
    
this.getGenericProfileActionJPanel()!.updateProfileActionUI();
    

    var layout: javax.swing.GroupLayout = this.blankGenericProfileActionJPanel!.getLayout() as javax.swing.GroupLayout;;
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 395, Short.MAX_VALUE)!.addComponent(this.getGenericProfileActionJPanel(), javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 256, Short.MAX_VALUE)!.addComponent(this.getGenericProfileActionJPanel(), javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE));
    
this.logUtil!.putF("Setting Configuration Profile Actions JPanel", this, "genericProfileActionsJListValueChanged");
    

                                    }
                                
}


    genericProfileActionsJListValueChanged(evt: javax.swing.event.ListSelectionEvent){

        try {
            
    var profileActionNameString: string = this.genericProfileActionsJList!.getSelectedValue() as string;;
    
this.updateProfileActionUI(profileActionNameString);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "genericProfileActionsJListValueChanged", e);
    
}

}


    okNewProfileActionJButtonActionPerformed(evt: java.awt.event.ActionEvent){

        try {
            
    var newActionName: string = this.newProfileActionJTextField!.getText()!;;
    
this.getGenericProfileActions()!.add(newActionName);
    
this.setModel();
    
this.genericProfileActionsJList!.setSelectedValue(newActionName, true);
    
this.newProfileActionJDialog!.setVisible(false);
    
this.updateProfileActionUI(newActionName);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "okNewProfileActionJButtonActionPerformed", e);
    
}

}


    deleteActionJButtonActionPerformed(evt: java.awt.event.ActionEvent){

        try {
            
    var anyType: any[] = this.genericProfileActionsJList!.getSelectedValues()!;;
    




                        for (
    var index: number = 0;index < anyType!.length; index++)
        {

    var nextSelectedValueString: string = anyType[index]! as string;;
    
this.getGenericProfileActions()!.remove(nextSelectedValueString);
    
}

this.selectFirstElement();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "deleteActionJButtonActionPerformed", e);
    
}

}


                //@Throws(Exception.constructor)
            
    public selectFirstElement(){
this.setModel();
    

                        if(this.genericProfileActionsJList!.getModel()!.getSize() > 0)
                        
                                    {
                                    this.genericProfileActionsJList!.setSelectedValue(this.genericProfileActionsJList!.getModel()!.getElementAt(0), true);
    
this.updateProfileActionUI(this.genericProfileActionsJList!.getModel()!.getElementAt(0) as string);
    

                                    }
                                
                        else {
                            this.blankGenericProfileActionJPanel!.removeAll();
    
this.blankGenericProfileActionJPanel!.repaint();
    

                        }
                            
}


    public getGenericProfileActionJPanel(): GenericProfileActionJPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.genericProfileActionJPanel;
    
}


    public setGenericProfileActionJPanel(genericProfileActionJPanel: GenericProfileActionJPanel){
this.genericProfileActionJPanel= genericProfileActionJPanel;
    
}


    public getGenericProfileActions(): GenericProfileActions{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.genericProfileActions;
    
}


    public setGenericProfileActions(genericProfileActions: GenericProfileActions){
this.genericProfileActions= genericProfileActions;
    
}


    newActionJButtonActionPerformed(evt: java.awt.event.ActionEvent){
this.newProfileActionJDialog!.setVisible(true);
    
}


    private blankGenericProfileActionJPanel: javax.swing.JPanel;

    private deleteActionJButton: javax.swing.JButton;

    private genericProfileActionsJList: javax.swing.JList;

    private genericProfileActionsJPanel: javax.swing.JPanel;

    private genericProfileActionsJScrollPane: javax.swing.JScrollPane;

    private newActionJButton: javax.swing.JButton;

    private newProfileActionJDialog: javax.swing.JDialog;

    private newProfileActionJLabel: javax.swing.JLabel;

    private newProfileActionJTextField: javax.swing.JTextField;

    private okNewProfileActionJButton: javax.swing.JButton;

    private saveJButton: javax.swing.JButton;

}
                
            

