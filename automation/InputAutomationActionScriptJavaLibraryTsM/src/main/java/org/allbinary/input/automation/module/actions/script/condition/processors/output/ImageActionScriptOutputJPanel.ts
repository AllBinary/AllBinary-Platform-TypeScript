
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
        



import { Vector } from "../../../../../../../../../../java/util/Vector.js";

    
import { swing } from "../../../../../../../../../../javax/swing.js";

    
import { InputImageType } from "../../../../../../../../../../org/allbinary/input/media/image/InputImageType.js";

    
import { LogUtil } from "../../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class ImageActionScriptOutputJPanel extends javax.swing.JPanel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private capturedImageActionScriptOutputInterface: ImageActionScriptOutputInterface
public constructor (capturedImageActionScriptOutputInterface: ImageActionScriptOutputInterface){

            super();
            var capturedImageActionScriptOutputInterface = capturedImageActionScriptOutputInterface
logUtil!.put(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR)
initComponents()
this.capturedImageActionScriptOutputInterface= capturedImageActionScriptOutputInterface
this.set()
}


    set(){
this.setImageTypeJlistModel()

    var imageTypes: ImageTypes = this.capturedImageActionScriptOutputInterface!.getImageTypes()!;
        
        


    var vector: Vector = imageTypes!.getVector()!;
        
        


    var selectedArray: IntArray = IntArray(vector.length);
        
        


    var size: number = vector.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var imageType: InputImageType = vector.get(index) as InputImageType;
        
        

selectedArray[index++]= imageType!.getIndex()
}

this.itemTypesJList!.setSelectedIndices(selectedArray)

                        if(this.capturedImageActionScriptOutputInterface!.isSaved())
                        
                                    {
                                    this.saveJCheckBox!.setSelected(true)

                                    }
                                

                        if(this.capturedImageActionScriptOutputInterface!.isSaved())
                        
                                    {
                                    this.displayJCheckBox!.setSelected(true)

                                    }
                                
this.capturedImageActionScriptOutputInterface!.log()
}


    update(){

    var anyType: any = {}[] = this.itemTypesJList!.getSelectedValues()!;
        
        


    var imageTypes: ImageTypes = anyType.concatToString()

                                    !;
        
        

this.capturedImageActionScriptOutputInterface!.setImageTypes(imageTypes)

                        if(this.saveJCheckBox!.isSelected())
                        
                                    {
                                    this.capturedImageActionScriptOutputInterface!.setSaved(true)

                                    }
                                
                        else {
                            this.capturedImageActionScriptOutputInterface!.setSaved(false)

                        }
                            

                        if(this.displayJCheckBox!.isSelected())
                        
                                    {
                                    this.capturedImageActionScriptOutputInterface!.setDisplay(true)

                                    }
                                
                        else {
                            this.capturedImageActionScriptOutputInterface!.setDisplay(false)

                        }
                            
this.capturedImageActionScriptOutputInterface!.log()
}


    setImageTypeJlistModel(){

    var defaultListModel: DefaultListModel = new DefaultListModel();
        
        


    var vector: Vector = InputImageType.getAllAsVector()!;
        
        


    var size: number = vector.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var imageType: InputImageType = vector.get(index) as InputImageType;
        
        

defaultListModel!.addElement(imageType!.getName())
}

this.itemTypesJList!.setModel(defaultListModel)
}


    public getCapturedImageActionJDialog(): javax.swing.JDialog{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return capturedImageActionJDialog;
    
}


    public setCapturedImageActionJDialog(capturedImageActionJDialog: javax.swing.JDialog){
var capturedImageActionJDialog = capturedImageActionJDialog
this.capturedImageActionJDialog= capturedImageActionJDialog
}


    initComponents(){
capturedImageActionJDialog= javax.swing.JDialog()
titleJLabel= javax.swing.JLabel()
okJButton= javax.swing.JButton()
saveJCheckBox= javax.swing.JCheckBox()
displayJCheckBox= javax.swing.JCheckBox()
jScrollPane1= javax.swing.JScrollPane()
itemTypesJList= javax.swing.JList()
capturedImageActionJButton= javax.swing.JButton()
jLabel1= javax.swing.JLabel()
capturedImageActionJDialog!.setMinimumSize(java.awt.Dimension(250, 250))
titleJLabel!.setText("Image Output Options")
okJButton!.setText("OK")
okJButton!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
okJButtonActionPerformed(evt)
}

                                }
                            )
saveJCheckBox!.setText("Save To File")
saveJCheckBox!.setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0))
saveJCheckBox!.setMargin(java.awt.Insets(0, 0, 0, 0))
displayJCheckBox!.setText("Display")
displayJCheckBox!.setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0))
displayJCheckBox!.setMargin(java.awt.Insets(0, 0, 0, 0))
displayJCheckBox!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
displayJCheckBoxActionPerformed(evt)
}

                                }
                            )
itemTypesJList!.setModel(object: javax.swing.AbstractListModel()
                                {
                                
    var strings: string[] = 
                                                        [
                                                            "Item 1","Item 2","Item 3","Item 4","Item 5"
                                                        ];
        
        

    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return strings.length;
    
}

    public getElementAt(i: number): any = {}{
var i = i



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return strings[i]!;
    
}

                                }
                            )
jScrollPane1!.setViewportView(itemTypesJList)

    var capturedImageActionJDialogLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(capturedImageActionJDialog!.getContentPane());
        
        

capturedImageActionJDialog!.getContentPane()!.setLayout(capturedImageActionJDialogLayout)
capturedImageActionJDialogLayout!.setHorizontalGroup(capturedImageActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(capturedImageActionJDialogLayout!.createSequentialGroup()!.addGroup(capturedImageActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(capturedImageActionJDialogLayout!.createSequentialGroup()!.addGap(61, 61, 61)!.addComponent(titleJLabel))!.addGroup(capturedImageActionJDialogLayout!.createSequentialGroup()!.addContainerGap()!.addGroup(capturedImageActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(capturedImageActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(displayJCheckBox)!.addComponent(saveJCheckBox, javax.swing.GroupLayout.Alignment.TRAILING))!.addGroup(capturedImageActionJDialogLayout!.createSequentialGroup()!.addGap(84, 84, 84)!.addComponent(okJButton))))!.addGroup(capturedImageActionJDialogLayout!.createSequentialGroup()!.addContainerGap()!.addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 216, Short.MAX_VALUE)))!.addContainerGap()))
capturedImageActionJDialogLayout!.setVerticalGroup(capturedImageActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(capturedImageActionJDialogLayout!.createSequentialGroup()!.addComponent(titleJLabel)!.addGap(5, 5, 5)!.addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 105, Short.MAX_VALUE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(saveJCheckBox)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(displayJCheckBox)!.addGap(9, 9, 9)!.addComponent(okJButton)!.addContainerGap()))
setMinimumSize(java.awt.Dimension(100, 0))
capturedImageActionJButton!.setText("Edit")
capturedImageActionJButton!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
capturedImageActionJButtonActionPerformed(evt)
}

                                }
                            )
jLabel1!.setText("Capture Image:")

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        

this.setLayout(layout)
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(jLabel1)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addComponent(capturedImageActionJButton)))
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel1)!.addComponent(capturedImageActionJButton)))
}


    displayJCheckBoxActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    okJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.update()
this.getCapturedImageActionJDialog()!.setVisible(false)
}


    capturedImageActionJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.getCapturedImageActionJDialog()!.setVisible(true)
}


    private capturedImageActionJButton: javax.swing.JButton

    private capturedImageActionJDialog: javax.swing.JDialog

    private displayJCheckBox: javax.swing.JCheckBox

    private itemTypesJList: javax.swing.JList

    private jLabel1: javax.swing.JLabel

    private jScrollPane1: javax.swing.JScrollPane

    private okJButton: javax.swing.JButton

    private saveJCheckBox: javax.swing.JCheckBox

    private titleJLabel: javax.swing.JLabel

}
                
            

