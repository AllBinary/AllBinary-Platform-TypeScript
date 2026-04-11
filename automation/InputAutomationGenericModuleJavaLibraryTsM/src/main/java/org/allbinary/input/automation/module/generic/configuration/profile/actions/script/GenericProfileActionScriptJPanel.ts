
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
        



import { MouseEvent } from "../../../../../../../../../../java/awt/event/MouseEvent.js";

    
import { swing } from "../../../../../../../../../../javax/swing.js";

    
import { DefaultMutableTreeNode } from "../../../../../../../../../../javax/swing/tree/DefaultMutableTreeNode.js";

    
import { DefaultTreeModel } from "../../../../../../../../../../javax/swing/tree/DefaultTreeModel.js";

    
import { TreePath } from "../../../../../../../../../../javax/swing/tree/TreePath.js";

    
import { JTreeInterface } from "../../../../../../../../../../org/allbinary/input/automation/actions/script/JTreeInterface.js";

    
import { CustomTreeNodeInterface } from "../../../../../../../../../../org/allbinary/input/automation/actions/script/condition/CustomTreeNodeInterface.js";

    
import { LogUtil } from "../../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class GenericProfileActionScriptJPanel extends javax.swing.JPanel
                , JTreeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private defaultMutableTreeNode: DefaultMutableTreeNode = new DefaultMutableTreeNode("Root");
        
        

    private genericProfileActionScript: GenericProfileActionScript
public constructor (){

            super();
            logUtil!.put(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
initComponents();
    
}


    public updateJTree(){

    var defaultTreeModel: DefaultTreeModel = new DefaultTreeModel(this.getGenericProfileActionScript());
        
        
;
    
this.getActionScriptJTree()!.setModel(defaultTreeModel);
    
this.repaint();
    
logUtil!.put("Updated UI", this, "updateJTree");
    
}


    public getGenericProfileActionScript(): GenericProfileActionScript{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return genericProfileActionScript;
    
}


    public setGenericProfileActionScript(genericProfileActionScript: GenericProfileActionScript){
var genericProfileActionScript = genericProfileActionScript
this.genericProfileActionScript= genericProfileActionScript;
    
}


    public getActionScriptJTree(): javax.swing.JTree{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return actionScriptJTree;
    
}


    public setActionScriptJTree(actionScriptJTree: javax.swing.JTree){
var actionScriptJTree = actionScriptJTree
this.actionScriptJTree= actionScriptJTree;
    
}


    initComponents(){
jScrollPane1= javax.swing.JScrollPane();
    
actionScriptJTree= javax.swing.JTree();
    
setLayout(java.awt.GridLayout(1, 0));
    
actionScriptJTree!.setPreferredSize(java.awt.Dimension(500, 500));
    
actionScriptJTree!.addMouseListener(object: java.awt.event.MouseAdapter()
                                {
                                
    public mouseClicked(evt: java.awt.event.MouseEvent){
var evt = evt
actionScriptJTreeMouseClicked(evt);
    
}

    public mouseReleased(evt: java.awt.event.MouseEvent){
var evt = evt
actionScriptJTreeMouseReleased(evt);
    
}

                                }
                            );
    
jScrollPane1!.setViewportView(actionScriptJTree);
    
add(jScrollPane1);
    
}


    actionScriptJTreeMouseReleased(evt: java.awt.event.MouseEvent){
var evt = evt

    var button: number = evt.getButton()!;
        
        
;
    

                        if(button == MouseEvent.BUTTON3)
                        
                                    {
                                    
    var treePath: TreePath = this.getActionScriptJTree()!.getSelectionPath()!;
        
        
;
    

                        if(treePath != 
                                    null
                                )
                        
                                    {
                                    
    var anyType: any = {} = treePath!.getLastPathComponent()!;
        
        
;
    

                        if(anyType is CustomTreeNodeInterface)
                        
                                    {
                                    
    var customTreeNodeInterface: CustomTreeNodeInterface = anyType as CustomTreeNodeInterface;
        
        
;
    

    var jPopupMenu: JPopupMenu = customTreeNodeInterface!.getJPopupMenu()!;
        
        
;
    
jPopupMenu!.show(evt.getSource();

                         as JComponent, evt.getX(), evt.getY());
    

                                    }
                                

                                    }
                                

                                    }
                                
}


    actionScriptJTreeMouseClicked(evt: java.awt.event.MouseEvent){
var evt = evt
}


    private actionScriptJTree: javax.swing.JTree

    private jScrollPane1: javax.swing.JScrollPane

}
                
            

