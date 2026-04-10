
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
        



import { DefaultListModelHelper } from "../../../../../../../../../org/allbinary/input/automation/module/DefaultListModelHelper.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class GenericProfileActionsJPanel extends javax.swing.JPanel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private genericProfileActions: GenericProfileActions

    private genericProfileActionJPanel: GenericProfileActionJPanel
public constructor (){

            super();
            initComponents()
}


    initComponents(){
newProfileActionJDialog= javax.swing.JDialog()
newProfileActionJLabel= javax.swing.JLabel()
okNewProfileActionJButton= javax.swing.JButton()
newProfileActionJTextField= javax.swing.JTextField()
genericProfileActionsJPanel= javax.swing.JPanel()
genericProfileActionsJScrollPane= javax.swing.JScrollPane()
genericProfileActionsJList= javax.swing.JList()
newActionJButton= javax.swing.JButton()
deleteActionJButton= javax.swing.JButton()
saveJButton= javax.swing.JButton()
blankGenericProfileActionJPanel= javax.swing.JPanel()
newProfileActionJDialog!.setMinimumSize(java.awt.Dimension(250, 150))
newProfileActionJDialog!.setResizable(false)
newProfileActionJLabel!.setText("New Action Name")
okNewProfileActionJButton!.setText("Ok")
okNewProfileActionJButton!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
okNewProfileActionJButtonActionPerformed(evt)
}

                                }
                            )

    var newProfileActionJDialogLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(newProfileActionJDialog!.getContentPane());
        
        

newProfileActionJDialog!.getContentPane()!.setLayout(newProfileActionJDialogLayout)
newProfileActionJDialogLayout!.setHorizontalGroup(newProfileActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(newProfileActionJDialogLayout!.createSequentialGroup()!.addGroup(newProfileActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(newProfileActionJDialogLayout!.createSequentialGroup()!.addGap(93, 93, 93)!.addComponent(okNewProfileActionJButton))!.addGroup(newProfileActionJDialogLayout!.createSequentialGroup()!.addGap(75, 75, 75)!.addComponent(newProfileActionJLabel))!.addGroup(newProfileActionJDialogLayout!.createSequentialGroup()!.addGap(29, 29, 29)!.addComponent(newProfileActionJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 178, javax.swing.GroupLayout.PREFERRED_SIZE)))!.addContainerGap(34, Short.MAX_VALUE)))
newProfileActionJDialogLayout!.setVerticalGroup(newProfileActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(javax.swing.GroupLayout.Alignment.TRAILING, newProfileActionJDialogLayout!.createSequentialGroup()!.addContainerGap()!.addComponent(newProfileActionJLabel)!.addGap(21, 21, 21)!.addComponent(newProfileActionJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 20, Short.MAX_VALUE)!.addComponent(okNewProfileActionJButton)!.addContainerGap()))
genericProfileActionsJPanel!.setPreferredSize(java.awt.Dimension(10000, 10000))
genericProfileActionsJList!.addListSelectionListener(object: javax.swing.event.ListSelectionListener()
                                {
                                
    public valueChanged(evt: javax.swing.event.ListSelectionEvent){
var evt = evt
genericProfileActionsJListValueChanged(evt)
}

                                }
                            )
genericProfileActionsJScrollPane!.setViewportView(genericProfileActionsJList)
newActionJButton!.setText("New")
newActionJButton!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
newActionJButtonActionPerformed(evt)
}

                                }
                            )
deleteActionJButton!.setText("Delete")
deleteActionJButton!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
deleteActionJButtonActionPerformed(evt)
}

                                }
                            )
saveJButton!.setText("Save")
saveJButton!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
saveJButtonActionPerformed(evt)
}

                                }
                            )
blankGenericProfileActionJPanel!.setMinimumSize(java.awt.Dimension(500, 300))

    var blankGenericProfileActionJPanelLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(blankGenericProfileActionJPanel);
        
        

blankGenericProfileActionJPanel!.setLayout(blankGenericProfileActionJPanelLayout)
blankGenericProfileActionJPanelLayout!.setHorizontalGroup(blankGenericProfileActionJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 500, Short.MAX_VALUE))
blankGenericProfileActionJPanelLayout!.setVerticalGroup(blankGenericProfileActionJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 296, Short.MAX_VALUE))

    var genericProfileActionsJPanelLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(genericProfileActionsJPanel);
        
        

genericProfileActionsJPanel!.setLayout(genericProfileActionsJPanelLayout)
genericProfileActionsJPanelLayout!.setHorizontalGroup(genericProfileActionsJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(genericProfileActionsJPanelLayout!.createSequentialGroup()!.addComponent(genericProfileActionsJScrollPane, javax.swing.GroupLayout.PREFERRED_SIZE, 95, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(blankGenericProfileActionJPanel, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))!.addGroup(genericProfileActionsJPanelLayout!.createSequentialGroup()!.addComponent(newActionJButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(deleteActionJButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(saveJButton)!.addContainerGap()))
genericProfileActionsJPanelLayout!.setVerticalGroup(genericProfileActionsJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(genericProfileActionsJPanelLayout!.createSequentialGroup()!.addGroup(genericProfileActionsJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(newActionJButton)!.addComponent(deleteActionJButton)!.addComponent(saveJButton))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(genericProfileActionsJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)!.addComponent(blankGenericProfileActionJPanel, 0, 296, Short.MAX_VALUE)!.addComponent(genericProfileActionsJScrollPane, javax.swing.GroupLayout.DEFAULT_SIZE, 296, Short.MAX_VALUE))!.addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        

this.setLayout(layout)
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(genericProfileActionsJPanel, javax.swing.GroupLayout.PREFERRED_SIZE, 596, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(genericProfileActionsJPanel, javax.swing.GroupLayout.PREFERRED_SIZE, 336, javax.swing.GroupLayout.PREFERRED_SIZE))
}


    public setModel(){

    var defaultListModelHelper: DefaultListModelHelper = this.getGenericProfileActions()!.getDefaultListModelHelper()!;
        
        


                        if(defaultListModelHelper!.getListModel()!.getSize() > 0)
                        
                                    {
                                    this.genericProfileActionsJList!.setModel(defaultListModelHelper!.getListModel())

                                    }
                                
}


    saveJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            this.getGenericProfileActions()!.save()
} catch(e: Exception)
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "saveJButtonActionPerformed", e)
}

}


    updateProfileActionUI(profileActionNameString: string){
var profileActionNameString = profileActionNameString
this.blankGenericProfileActionJPanel!.removeAll()

                        if(profileActionNameString != 
                                    null
                                )
                        
                                    {
                                    
    var genericProfileAction: GenericProfileAction = this.getGenericProfileActions()!.getAction(profileActionNameString)!;
        
        

this.setGenericProfileActionJPanel(GenericProfileActionJPanel())
this.getGenericProfileActionJPanel()!.setGenericProfileAction(genericProfileAction)
this.getGenericProfileActionJPanel()!.updateProfileActionUI()

    var layout: javax.swing.GroupLayout = this.blankGenericProfileActionJPanel!.getLayout() as javax.swing.GroupLayout;
        
        

layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 395, Short.MAX_VALUE)!.addComponent(this.getGenericProfileActionJPanel(), javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 256, Short.MAX_VALUE)!.addComponent(this.getGenericProfileActionJPanel(), javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
logUtil!.put("Setting Configuration Profile Actions JPanel", this, "genericProfileActionsJListValueChanged")

                                    }
                                
}


    genericProfileActionsJListValueChanged(evt: javax.swing.event.ListSelectionEvent){
var evt = evt

        try {
            
    var profileActionNameString: string = this.genericProfileActionsJList!.getSelectedValue() as String;
        
        

this.updateProfileActionUI(profileActionNameString)
} catch(e: Exception)
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "genericProfileActionsJListValueChanged", e)
}

}


    okNewProfileActionJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            
    var newActionName: string = this.newProfileActionJTextField!.getText()!;
        
        

this.getGenericProfileActions()!.add(newActionName)
this.setModel()
this.genericProfileActionsJList!.setSelectedValue(newActionName, true)
this.newProfileActionJDialog!.setVisible(false)
this.updateProfileActionUI(newActionName)
} catch(e: Exception)
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "okNewProfileActionJButtonActionPerformed", e)
}

}


    deleteActionJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            
    var anyType: any = {}[] = this.genericProfileActionsJList!.getSelectedValues()!;
        
        





                        for (
    var index: number = 0;
        
        
index < anyType!.length; index++)
        {

    var nextSelectedValueString: string = anyType[index]! as String;
        
        

this.getGenericProfileActions()!.remove(nextSelectedValueString)
}

this.selectFirstElement()
} catch(e: Exception)
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "deleteActionJButtonActionPerformed", e)
}

}


                //@Throws(Error::class)
            
    public selectFirstElement(){
this.setModel()

                        if(this.genericProfileActionsJList!.getModel()!.getSize() > 0)
                        
                                    {
                                    this.genericProfileActionsJList!.setSelectedValue(this.genericProfileActionsJList!.getModel()!.getElementAt(0), true)
this.updateProfileActionUI(this.genericProfileActionsJList!.getModel()!.getElementAt(0) as String)

                                    }
                                
                        else {
                            this.blankGenericProfileActionJPanel!.removeAll()
this.blankGenericProfileActionJPanel!.repaint()

                        }
                            
}


    public getGenericProfileActionJPanel(): GenericProfileActionJPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return genericProfileActionJPanel;
    
}


    public setGenericProfileActionJPanel(genericProfileActionJPanel: GenericProfileActionJPanel){
var genericProfileActionJPanel = genericProfileActionJPanel
this.genericProfileActionJPanel= genericProfileActionJPanel
}


    public getGenericProfileActions(): GenericProfileActions{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return genericProfileActions;
    
}


    public setGenericProfileActions(genericProfileActions: GenericProfileActions){
var genericProfileActions = genericProfileActions
this.genericProfileActions= genericProfileActions
}


    newActionJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.newProfileActionJDialog!.setVisible(true)
}


    private blankGenericProfileActionJPanel: javax.swing.JPanel

    private deleteActionJButton: javax.swing.JButton

    private genericProfileActionsJList: javax.swing.JList

    private genericProfileActionsJPanel: javax.swing.JPanel

    private genericProfileActionsJScrollPane: javax.swing.JScrollPane

    private newActionJButton: javax.swing.JButton

    private newProfileActionJDialog: javax.swing.JDialog

    private newProfileActionJLabel: javax.swing.JLabel

    private newProfileActionJTextField: javax.swing.JTextField

    private okNewProfileActionJButton: javax.swing.JButton

    private saveJButton: javax.swing.JButton

}
                
            

