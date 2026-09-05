
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

        


import { MouseEvent } from '../../../../../../../../../../java/awt/event/MouseEvent.js';
//not GWT import const MouseEvent = globalThis.java.awt.event.MouseEvent;

      
import { swing } from '../../../../../../../../../../javax/swing.js';
//not GWT import const swing = globalThis.javax.swing;

      
import { DefaultMutableTreeNode } from '../../../../../../../../../../javax/swing/tree/DefaultMutableTreeNode.js';
//not GWT import const DefaultMutableTreeNode = globalThis.javax.swing.tree.DefaultMutableTreeNode;

      
import { DefaultTreeModel } from '../../../../../../../../../../javax/swing/tree/DefaultTreeModel.js';
//not GWT import const DefaultTreeModel = globalThis.javax.swing.tree.DefaultTreeModel;

      
import { TreePath } from '../../../../../../../../../../javax/swing/tree/TreePath.js';
//not GWT import const TreePath = globalThis.javax.swing.tree.TreePath;

      
import { JTreeInterface } from '../../../../../../../../../../org/allbinary/input/automation/actions/script/JTreeInterface.js';
//not GWT import const JTreeInterface = globalThis.org.allbinary.input.automation.actions.script.JTreeInterface;

      
import { CustomTreeNodeInterface } from '../../../../../../../../../../org/allbinary/input/automation/actions/script/condition/CustomTreeNodeInterface.js';
//not GWT import const CustomTreeNodeInterface = globalThis.org.allbinary.input.automation.actions.script.condition.CustomTreeNodeInterface;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JPanel } from './JPanel.js';
//not GWT import - same folder const JPanel = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.script.JPanel;

                import { GenericProfileActionScript } from './GenericProfileActionScript.js';
//not GWT import - same folder const GenericProfileActionScript = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.script.GenericProfileActionScript;

                import { JTree } from './JTree.js';
//not GWT import - same folder const JTree = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.script.JTree;

                import { JScrollPane } from './JScrollPane.js';
//not GWT import - same folder const JScrollPane = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.script.JScrollPane;

                import { GridLayout } from './GridLayout.js';
//not GWT import - same folder const GridLayout = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.script.GridLayout;

                import { Dimension } from './Dimension.js';
//not GWT import - same folder const Dimension = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.script.Dimension;

                import { MouseAdapter } from './MouseAdapter.js';
//not GWT import - same folder const MouseAdapter = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.script.MouseAdapter;

                import { JPopupMenu } from './JPopupMenu.js';
//not GWT import - same folder const JPopupMenu = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.script.JPopupMenu;

                import { JComponent } from './JComponent.js';
//not GWT import - same folder const JComponent = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.script.JComponent;

                
export class GenericProfileActionScriptJPanel extends javax.swing.JPanel implements JTreeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private defaultMutableTreeNode: DefaultMutableTreeNode = new DefaultMutableTreeNode("Root");

    private genericProfileActionScript: GenericProfileActionScript;

public constructor (){

            super();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.initComponents();
    
}


    public updateJTree(){

    var defaultTreeModel: DefaultTreeModel = new DefaultTreeModel(this.getGenericProfileActionScript());;
    
this.getActionScriptJTree()!.setModel(defaultTreeModel);
    
this.repaint();
    
this.logUtil!.putF("Updated UI", this, "updateJTree");
    
}


    public getGenericProfileActionScript(): GenericProfileActionScript{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.genericProfileActionScript;
    
}


    public setGenericProfileActionScript(genericProfileActionScript: GenericProfileActionScript){
this.genericProfileActionScript= genericProfileActionScript;
    
}


    public getActionScriptJTree(): javax.swing.JTree{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.actionScriptJTree;
    
}


    public setActionScriptJTree(actionScriptJTree: javax.swing.JTree){
this.actionScriptJTree= actionScriptJTree;
    
}


    initComponents(){
this.jScrollPane1= new javax.swing.JScrollPane();
    
this.actionScriptJTree= new javax.swing.JTree();
    
setLayout(new java.awt.GridLayout(1, 0));
    
this.actionScriptJTree!.setPreferredSize(new java.awt.Dimension(500, 500));
    
this.actionScriptJTree!.addMouseListener(new class extends java.awt.event.MouseAdapter
                                {
                                
    public mouseClicked(evt: java.awt.event.MouseEvent){
actionScriptJTreeMouseClicked(evt);
    
}

    public mouseReleased(evt: java.awt.event.MouseEvent){
actionScriptJTreeMouseReleased(evt);
    
}

                                }
                            );
    
this.jScrollPane1!.setViewportView(this.actionScriptJTree);
    
add(this.jScrollPane1);
    
}


    actionScriptJTreeMouseReleased(evt: java.awt.event.MouseEvent){

    var button: number = evt.getButton()!;;
    

                        if(button == MouseEvent.BUTTON3)
                        
                                    {
                                    
    var treePath: TreePath = this.getActionScriptJTree()!.getSelectionPath()!;;
    

                        if(treePath != 
                                    null
                                )
                        
                                    {
                                    
    var anyType: any = treePath!.getLastPathComponent()!;;
    

                        if(anyType instanceof CustomTreeNodeInterface)
                        
                                    {
                                    
    var customTreeNodeInterface: CustomTreeNodeInterface = anyType as CustomTreeNodeInterface;;
    

    var jPopupMenu: JPopupMenu = customTreeNodeInterface!.getJPopupMenu()!;;
    
jPopupMenu!.show(evt.getSource() as JComponent, evt.getX(), evt.getY());
    

                                    }
                                

                                    }
                                

                                    }
                                
}


    actionScriptJTreeMouseClicked(evt: java.awt.event.MouseEvent){
}


    private actionScriptJTree: javax.swing.JTree;

    private jScrollPane1: javax.swing.JScrollPane;

}



