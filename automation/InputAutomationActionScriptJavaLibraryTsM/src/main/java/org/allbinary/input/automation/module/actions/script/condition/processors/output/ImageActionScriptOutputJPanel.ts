
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

        


            import { Exception } from '../../../../../../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } from '../../../../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { swing } from '../../../../../../../../../../javax/swing.js';
      //not GWT import const swing = globalThis.javax.swing;

      
import { InputImageType } from '../../../../../../../../../../org/allbinary/input/media/image/InputImageType.js';
      //not GWT import const InputImageType = globalThis.org.allbinary.input.media.image.InputImageType;

      
//not plain js import { LogUtil } from '../../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JPanel } from './JPanel.js';
//not GWT import const JPanel = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.JPanel;

                import { ImageActionScriptOutputInterface } from './ImageActionScriptOutputInterface.js';
//not GWT import const ImageActionScriptOutputInterface = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.ImageActionScriptOutputInterface;

                import { ImageTypes } from './ImageTypes.js';
//not GWT import const ImageTypes = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.ImageTypes;

                import { DefaultListModel } from './DefaultListModel.js';
//not GWT import const DefaultListModel = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.DefaultListModel;

                import { JDialog } from './JDialog.js';
//not GWT import const JDialog = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.JDialog;

                import { JLabel } from './JLabel.js';
//not GWT import const JLabel = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.JLabel;

                import { JButton } from './JButton.js';
//not GWT import const JButton = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.JButton;

                import { JCheckBox } from './JCheckBox.js';
//not GWT import const JCheckBox = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.JCheckBox;

                import { JScrollPane } from './JScrollPane.js';
//not GWT import const JScrollPane = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.JScrollPane;

                import { JList } from './JList.js';
//not GWT import const JList = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.JList;

                import { Dimension } from './Dimension.js';
//not GWT import const Dimension = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.Dimension;

                import { ActionListener } from './ActionListener.js';
//not GWT import const ActionListener = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.ActionListener;

                import { ActionEvent } from './ActionEvent.js';
//not GWT import const ActionEvent = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.ActionEvent;

                import { Insets } from './Insets.js';
//not GWT import const Insets = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.Insets;

                import { AbstractListModel } from './AbstractListModel.js';
//not GWT import const AbstractListModel = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.AbstractListModel;

                import { GroupLayout } from './GroupLayout.js';
//not GWT import const GroupLayout = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.GroupLayout;

                import { Short } from './Short.js';
//not GWT import const Short = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.Short;

                
export class ImageActionScriptOutputJPanel extends javax.swing.JPanel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private capturedImageActionScriptOutputInterface: ImageActionScriptOutputInterface;

public constructor (capturedImageActionScriptOutputInterface: ImageActionScriptOutputInterface){

            super();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.initComponents();
    
this.capturedImageActionScriptOutputInterface= capturedImageActionScriptOutputInterface;
    
this.set();
    
}


    set(){
this.setImageTypeJlistModel();
    

    var imageTypes: ImageTypes = this.capturedImageActionScriptOutputInterface!.getImageTypes()!;;
    

    var vector: BasicArrayList = imageTypes!.getVector()!;;
    

    var selectedArray: number[] = new Array(vector.size());;
    

    var size: number = vector.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var imageType: InputImageType = vector.get(index) as InputImageType;;
    
selectedArray[index++]= imageType!.getIndex();
    
}

this.itemTypesJList!.setSelectedIndices(selectedArray);
    

                        if(this.capturedImageActionScriptOutputInterface!.isSaved())
                        
                                    {
                                    this.saveJCheckBox!.setSelected(true);
    

                                    }
                                

                        if(this.capturedImageActionScriptOutputInterface!.isSaved())
                        
                                    {
                                    this.displayJCheckBox!.setSelected(true);
    

                                    }
                                
this.capturedImageActionScriptOutputInterface!.log();
    
}


    update(){

    var anyType: any[] = this.itemTypesJList!.getSelectedValues()!;;
    

    var imageTypes: ImageTypes = anyType.slice(, ).join('')!;;
    
this.capturedImageActionScriptOutputInterface!.setImageTypes(imageTypes);
    

                        if(this.saveJCheckBox!.isSelected())
                        
                                    {
                                    this.capturedImageActionScriptOutputInterface!.setSaved(true);
    

                                    }
                                
                        else {
                            this.capturedImageActionScriptOutputInterface!.setSaved(false);
    

                        }
                            

                        if(this.displayJCheckBox!.isSelected())
                        
                                    {
                                    this.capturedImageActionScriptOutputInterface!.setDisplay(true);
    

                                    }
                                
                        else {
                            this.capturedImageActionScriptOutputInterface!.setDisplay(false);
    

                        }
                            
this.capturedImageActionScriptOutputInterface!.log();
    
}


    setImageTypeJlistModel(){

    var defaultListModel: DefaultListModel = new DefaultListModel();;
    

    var vector: BasicArrayList = InputImageType.getAllAsVector()!;;
    

    var size: number = vector.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var imageType: InputImageType = vector.get(index) as InputImageType;;
    
defaultListModel!.addElement(imageType!.getName());
    
}

this.itemTypesJList!.setModel(defaultListModel);
    
}


    public getCapturedImageActionJDialog(): javax.swing.JDialog{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.capturedImageActionJDialog;
    
}


    public setCapturedImageActionJDialog(capturedImageActionJDialog: javax.swing.JDialog){
this.capturedImageActionJDialog= capturedImageActionJDialog;
    
}


    initComponents(){
this.capturedImageActionJDialog= new javax.swing.JDialog();
    
this.titleJLabel= new javax.swing.JLabel();
    
this.okJButton= new javax.swing.JButton();
    
this.saveJCheckBox= new javax.swing.JCheckBox();
    
this.displayJCheckBox= new javax.swing.JCheckBox();
    
this.jScrollPane1= new javax.swing.JScrollPane();
    
this.itemTypesJList= new javax.swing.JList();
    
this.capturedImageActionJButton= new javax.swing.JButton();
    
this.jLabel1= new javax.swing.JLabel();
    
this.capturedImageActionJDialog!.setMinimumSize(new java.awt.Dimension(250, 250));
    
this.titleJLabel!.setText("Image Output Options");
    
this.okJButton!.setText("OK");
    
this.okJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
okJButtonActionPerformed(evt);
    
}

                                }
                            );
    
this.saveJCheckBox!.setText("Save To File");
    
this.saveJCheckBox!.setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0));
    
this.saveJCheckBox!.setMargin(new java.awt.Insets(0, 0, 0, 0));
    
this.displayJCheckBox!.setText("Display");
    
this.displayJCheckBox!.setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0));
    
this.displayJCheckBox!.setMargin(new java.awt.Insets(0, 0, 0, 0));
    
this.displayJCheckBox!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
displayJCheckBoxActionPerformed(evt);
    
}

                                }
                            );
    
this.itemTypesJList!.setModel(new class extends javax.swing.AbstractListModel
                                {
                                
    strings: string[] = 
                                                        [
                                                            "Item 1","Item 2","Item 3","Item 4","Item 5"
                                                        ];
    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return strings.length;
    
}

    public getElementAt(i: number): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return strings[i]!;
    
}

                                }
                            );
    
this.jScrollPane1!.setViewportView(this.itemTypesJList);
    

    var capturedImageActionJDialogLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.capturedImageActionJDialog!.getContentPane());;
    
this.capturedImageActionJDialog!.getContentPane()!.setLayout(capturedImageActionJDialogLayout);
    
capturedImageActionJDialogLayout!.setHorizontalGroup(capturedImageActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(capturedImageActionJDialogLayout!.createSequentialGroup()!.addGroup(capturedImageActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(capturedImageActionJDialogLayout!.createSequentialGroup()!.addGap(61, 61, 61)!.addComponent(titleJLabel))!.addGroup(capturedImageActionJDialogLayout!.createSequentialGroup()!.addContainerGap()!.addGroup(capturedImageActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(capturedImageActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(displayJCheckBox)!.addComponent(saveJCheckBox, javax.swing.GroupLayout.Alignment.TRAILING))!.addGroup(capturedImageActionJDialogLayout!.createSequentialGroup()!.addGap(84, 84, 84)!.addComponent(okJButton))))!.addGroup(capturedImageActionJDialogLayout!.createSequentialGroup()!.addContainerGap()!.addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 216, Short.MAX_VALUE)))!.addContainerGap()));
    
capturedImageActionJDialogLayout!.setVerticalGroup(capturedImageActionJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(capturedImageActionJDialogLayout!.createSequentialGroup()!.addComponent(titleJLabel)!.addGap(5, 5, 5)!.addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 105, Short.MAX_VALUE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(saveJCheckBox)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(displayJCheckBox)!.addGap(9, 9, 9)!.addComponent(okJButton)!.addContainerGap()));
    
setMinimumSize(new java.awt.Dimension(100, 0));
    
this.capturedImageActionJButton!.setText("Edit");
    
this.capturedImageActionJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
capturedImageActionJButtonActionPerformed(evt);
    
}

                                }
                            );
    
this.jLabel1!.setText("Capture Image:");
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addComponent(jLabel1)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)!.addComponent(capturedImageActionJButton)));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel1)!.addComponent(capturedImageActionJButton)));
    
}


    displayJCheckBoxActionPerformed(evt: java.awt.event.ActionEvent){
}


    okJButtonActionPerformed(evt: java.awt.event.ActionEvent){
this.update();
    
this.getCapturedImageActionJDialog()!.setVisible(false);
    
}


    capturedImageActionJButtonActionPerformed(evt: java.awt.event.ActionEvent){
this.getCapturedImageActionJDialog()!.setVisible(true);
    
}


    private capturedImageActionJButton: javax.swing.JButton;

    private capturedImageActionJDialog: javax.swing.JDialog;

    private displayJCheckBox: javax.swing.JCheckBox;

    private itemTypesJList: javax.swing.JList;

    private jLabel1: javax.swing.JLabel;

    private jScrollPane1: javax.swing.JScrollPane;

    private okJButton: javax.swing.JButton;

    private saveJCheckBox: javax.swing.JCheckBox;

    private titleJLabel: javax.swing.JLabel;

}



