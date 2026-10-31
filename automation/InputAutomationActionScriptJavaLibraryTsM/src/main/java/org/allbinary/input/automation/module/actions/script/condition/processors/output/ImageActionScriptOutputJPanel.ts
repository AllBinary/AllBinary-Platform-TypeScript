
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
        
            const Short = (globalThis.java?.lang?.Short ?? class {}) as typeof globalThis.java.lang.Short;
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { swing } from '../../../../../../../../../../javax/swing.js';
//not GWT import const swing

import { InputImageType } from '../../../../../../../../../../org/allbinary/input/media/image/InputImageType.js';
//not GWT import const InputImageType

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JPanel } from './JPanel.js';
//sameFolderImports - not GWT import - same folder const JPanel
import { ImageActionScriptOutputInterface } from './ImageActionScriptOutputInterface.js';
//sameFolderImports - not GWT import - same folder const ImageActionScriptOutputInterface
import { ImageTypes } from './ImageTypes.js';
//sameFolderImports - not GWT import - same folder const ImageTypes
import { DefaultListModel } from './DefaultListModel.js';
//sameFolderImports - not GWT import - same folder const DefaultListModel
import { JDialog } from './JDialog.js';
//sameFolderImports - not GWT import - same folder const JDialog
import { JLabel } from './JLabel.js';
//sameFolderImports - not GWT import - same folder const JLabel
import { JButton } from './JButton.js';
//sameFolderImports - not GWT import - same folder const JButton
import { JCheckBox } from './JCheckBox.js';
//sameFolderImports - not GWT import - same folder const JCheckBox
import { JScrollPane } from './JScrollPane.js';
//sameFolderImports - not GWT import - same folder const JScrollPane
import { JList } from './JList.js';
//sameFolderImports - not GWT import - same folder const JList
import { Dimension } from './Dimension.js';
//sameFolderImports - not GWT import - same folder const Dimension
import { ActionListener } from './ActionListener.js';
//sameFolderImports - not GWT import - same folder const ActionListener
import { ActionEvent } from './ActionEvent.js';
//sameFolderImports - not GWT import - same folder const ActionEvent
import { Insets } from './Insets.js';
//sameFolderImports - not GWT import - same folder const Insets
import { AbstractListModel } from './AbstractListModel.js';
//sameFolderImports - not GWT import - same folder const AbstractListModel
import { GroupLayout } from './GroupLayout.js';
//sameFolderImports - not GWT import - same folder const GroupLayout

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
    

    let imageTypes: ImageTypes = this.capturedImageActionScriptOutputInterface!.getImageTypes()!;;
    

    let vector: BasicArrayList = imageTypes!.getVector()!;;
    

    let selectedArray: number[] = new Array(vector.size());;
    

    let size: number = vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let imageType: InputImageType = vector.get(index) as InputImageType;;
    
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

    let anyType: any[] = this.itemTypesJList!.getSelectedValues()!;;
    

    let imageTypes: ImageTypes = anyType.slice(, ).join('')!;;
    
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

    let defaultListModel: DefaultListModel = new DefaultListModel();;
    

    let vector: BasicArrayList = InputImageType.getAllAsVector()!;;
    

    let size: number = vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let imageType: InputImageType = vector.get(index) as InputImageType;;
    
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
    

    let capturedImageActionJDialogLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.capturedImageActionJDialog!.getContentPane());;
    
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
    

    let layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);;
    
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

