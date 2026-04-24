
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
        



import { swing } from "../../../../../javax/swing.js";

    
import { DefaultMutableTreeNode } from "../../../../../javax/swing/tree/DefaultMutableTreeNode.js";

    
import { MutableTreeNode } from "../../../../../javax/swing/tree/MutableTreeNode.js";

    
import { TreePath } from "../../../../../javax/swing/tree/TreePath.js";

    
import { CanvasTreeLabel } from "../../../../../org/allbinary/graphics/j2me/workarea/canvas/CanvasTreeLabel.js";

    
import { MyCanvasEvent } from "../../../../../org/allbinary/graphics/j2me/workarea/canvas/event/MyCanvasEvent.js";

    
import { MyCanvasEventService } from "../../../../../org/allbinary/graphics/j2me/workarea/canvas/event/MyCanvasEventService.js";

    
import { MyCanvasEventSource } from "../../../../../org/allbinary/graphics/j2me/workarea/canvas/event/MyCanvasEventSource.js";

    
import { MyGraphicItemEvent } from "../../../../../org/allbinary/graphics/j2me/workarea/tools/event/MyGraphicItemEvent.js";

    
import { MyGraphicItemEventService } from "../../../../../org/allbinary/graphics/j2me/workarea/tools/event/MyGraphicItemEventService.js";

    
import { MyGraphicItemEventSource } from "../../../../../org/allbinary/graphics/j2me/workarea/tools/event/MyGraphicItemEventSource.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../../org/allbinary/util/BasicArrayListD.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { JPanel } from "./JPanel.js";

import { MouseEvent } from "./MouseEvent.js";

import { PopupMenuEvent } from "./PopupMenuEvent.js";

export class WorkAreaJTreeJPanel extends javax.swing.JPanel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private rootTreeNode: DefaultMutableTreeNode

    private workAreaJTree: JTree

    private highlightedBasicArrayList: BasicArrayList
public constructor (workAreaName: string){

            super();
        var workAreaName = workAreaName
initComponents();
    
this.rootTreeNode= new DefaultMutableTreeNode(workAreaName);
    
this.workAreaPropertiesJPanel!.removeAll();
    
updateTree();
    
this.highlightedBasicArrayList= new BasicArrayListD();
    
}


    public add(treeNode: MutableTreeNode){
var treeNode = treeNode
this.rootTreeNode!.add(treeNode);
    
}


    public updateTree(){
this.workAreaJTree= new JTree(this.rootTreeNode);
    
this.workAreaJTree!.addMouseListener(new object: java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
workAreaJTreeMousePressed(evt);
    
}

                                }
                            );
    
this.workAreaPropertiesJPanel!.removeAll();
    
this.workAreaPropertiesJPanel!.add(this.workAreaJTree);
    
}


    public getNode(treePathArray: TreePath[]): BasicArrayList{
var treePathArray = treePathArray

    var basicArrayList: BasicArrayList = new BasicArrayListD();
        
        
;
    

                        if(treePathArray != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < treePathArray!.length; index++)
        {
basicArrayList!.add(this.getNode(treePathArray[index]!));
    
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicArrayList;
    
}


    public getNode(treePath: TreePath): DefaultMutableTreeNode{
var treePath = treePath

                        if(treePath != 
                                    null
                                )
                        
                                    {
                                    
    var obj: any[] = treePath!.getPath()!;
        
        
;
    

                        if(obj != 
                                    null
                                )
                        
                                    {
                                    
    var node: DefaultMutableTreeNode = obj[obj.length -1]! as DefaultMutableTreeNode;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Error::class)
            
    public deselectAll(){

    var size: number = this.highlightedBasicArrayList!.size()!;
        
        
;
    
this.logUtil!.putF("size: " +size, this, "deselectAll");
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var node: DefaultMutableTreeNode = this.highlightedBasicArrayList!.get(index); as DefaultMutableTreeNode;
        
        
;
    
MyGraphicItemEventService.fire(new MyGraphicItemEvent(new MyGraphicItemEventSource(MyGraphicItemEventService.DESELECT, node) as Object));
    
}

this.highlightedBasicArrayList!.clear();
    
}


                //@Throws(Error::class)
            
    public selectGraphicItem(node: DefaultMutableTreeNode){
var node = node
this.highlightedBasicArrayList!.add(node);
    
MyGraphicItemEventService.fire(new MyGraphicItemEvent(new MyGraphicItemEventSource(MyGraphicItemEventService.SELECT, node) as Object));
    
}


                //@Throws(Error::class)
            
    public removeGraphicItem(node: DefaultMutableTreeNode){
var node = node
MyGraphicItemEventService.fire(new MyGraphicItemEvent(new MyGraphicItemEventSource(MyGraphicItemEventService.DELETE, node) as Object));
    
}


                //@Throws(Error::class)
            
    public removeCanvas(node: DefaultMutableTreeNode){
var node = node
MyCanvasEventService.fire(new MyCanvasEvent(new MyCanvasEventSource(MyCanvasEventService.DELETE, node) as Object));
    
}


                //@Throws(Error::class)
            
    public remove(treePath: TreePath){
var treePath = treePath

    var node: DefaultMutableTreeNode = this.getNode(treePath)!;
        
        
;
    

                        if(node != 
                                    null
                                )
                        
                                    {
                                    
                        if(node.getUserObject(); is CanvasTreeLabel)
                        
                                    {
                                    this.removeCanvas(node);
    

                                    }
                                
                        else {
                            this.removeGraphicItem(node);
    

                        }
                            

                                    }
                                

    var parent: DefaultMutableTreeNode = node.getParent(); as DefaultMutableTreeNode;
        
        
;
    
parent.remove(node);
    
}


                //@Throws(Error::class)
            
    copy(){

    var treePath: TreePath = this.workAreaJTree!.getSelectionPath()!;
        
        
;
    
this.copy(treePath);
    
this.updateTree();
    
this.expand();
    
this.repaint();
    
}


                //@Throws(Error::class)
            
    copy(treePath: TreePath){
var treePath = treePath

    var node: DefaultMutableTreeNode = this.getNode(treePath)!;
        
        
;
    

                        if(node != 
                                    null
                                )
                        
                                    {
                                    
                        if(node.getUserObject(); is CanvasTreeLabel)
                        
                                    {
                                    MyCanvasEventService.fire(new MyCanvasEvent(new MyCanvasEventSource(MyCanvasEventService.DUPLICATE, node) as Object));
    

                                    }
                                
                        else {
                            MyGraphicItemEventService.fire(new MyGraphicItemEvent(new MyGraphicItemEventSource(MyGraphicItemEventService.DUPLICATE, node) as Object));
    

                        }
                            

                                    }
                                
}


                //@Throws(Error::class)
            
    public rotate(treePath: TreePath, angle: number){
var treePath = treePath
var angle = angle

    var node: DefaultMutableTreeNode = this.getNode(treePath)!;
        
        
;
    

                        if(node != 
                                    null
                                )
                        
                                    {
                                    
                        if(node.getUserObject(); is CanvasTreeLabel)
                        
                                    {
                                    MyCanvasEventService.fire(new MyCanvasEvent(new MyCanvasEventSource(MyCanvasEventService.ROTATE, angle, node) as Object));
    

                                    }
                                
                        else {
                            MyGraphicItemEventService.fire(new MyGraphicItemEvent(new MyGraphicItemEventSource(MyGraphicItemEventService.ROTATE, angle, node) as Object));
    

                        }
                            

                                    }
                                
}


    public getRootTreeNode(): MutableTreeNode{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rootTreeNode;
    
}


    public expand(){
this.workAreaJTree!.expandRow(0);
    
this.workAreaJTree!.expandRow(1);
    
}


    public expand(treePath: TreePath){
var treePath = treePath
this.workAreaJTree!.expandPath(treePath);
    
}


    initComponents(){
itemJPopupMenu= new javax.swing.JPopupMenu();
    
this.deleteJMenuItem= new javax.swing.JMenuItem();
    
this.copyJMenuItem= new javax.swing.JMenuItem();
    
this.rotateJMenuItem= new javax.swing.JMenuItem();
    
this.itemJScrollPane1= new javax.swing.JScrollPane();
    
this.workAreaPropertiesJPanel= new javax.swing.JPanel();
    
itemJPopupMenu!.addPopupMenuListener(new object: javax.swing.event.PopupMenuListener()
                                {
                                
    public popupMenuCanceled(evt: javax.swing.event.PopupMenuEvent){
var evt = evt
}

    public popupMenuWillBecomeInvisible(evt: javax.swing.event.PopupMenuEvent){
var evt = evt
itemJPopupMenuPopupMenuWillBecomeInvisible(evt);
    
}

    public popupMenuWillBecomeVisible(evt: javax.swing.event.PopupMenuEvent){
var evt = evt
itemJPopupMenuPopupMenuWillBecomeVisible(evt);
    
}

                                }
                            );
    
this.deleteJMenuItem!.setText("Delete");
    
deleteJMenuItem!.addMouseListener(new object: java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
deleteJMenuItemMousePressed(evt);
    
}

                                }
                            );
    
this.itemJPopupMenu!.add(this.deleteJMenuItem);
    
this.copyJMenuItem!.setText("Copy");
    
copyJMenuItem!.addMouseListener(new object: java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
copyJMenuItemMousePressed(evt);
    
}

                                }
                            );
    
this.itemJPopupMenu!.add(this.copyJMenuItem);
    
this.rotateJMenuItem!.setText("Rotate 45*");
    
rotateJMenuItem!.addMouseListener(new object: java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
rotateJMenuItemMousePressed(evt);
    
}

                                }
                            );
    
this.itemJPopupMenu!.add(this.rotateJMenuItem);
    
setLayout(new java.awt.GridLayout(1, 1));
    
workAreaPropertiesJPanel!.addMouseListener(new object: java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
workAreaPropertiesJPanelMousePressed(evt);
    
}

                                }
                            );
    
this.workAreaPropertiesJPanel!.setLayout(new java.awt.GridLayout(1, 0));
    
this.itemJScrollPane1!.setViewportView(this.workAreaPropertiesJPanel);
    
add(this.itemJScrollPane1);
    
}


    rotateJMenuItemMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt

        try {
            
    var treePath: TreePath = this.workAreaJTree!.getSelectionPath()!;
        
        
;
    
this.rotate(treePath, 45);
    
this.updateTree();
    
this.expand();
    
this.repaint();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "rotateJMenuItemMousePressed", e);
    
}

}


    workAreaJTreeMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt

        try {
            
    var selectedTreePathArray: TreePath[] = this.workAreaJTree!.getSelectionPaths()!;
        
        
;
    

    var list: BasicArrayList = this.getNode(selectedTreePathArray)!;
        
        
;
    

                        if(list.size() > 0)
                        
                                    {
                                    
                        if((evt.getModifiers()&evt.BUTTON3_MASK) == evt.BUTTON3_MASK)
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < selectedTreePathArray!.length; index++)
        {

    var defaultMutableTreeNode: DefaultMutableTreeNode = list.get(index); as DefaultMutableTreeNode;
        
        
;
    

                        if(defaultMutableTreeNode!.getUserObject(); is CanvasTreeLabel)
                        
                                    {
                                    this.itemJPopupMenu!.show(this, evt.getX(), evt.getY());
    

                                    }
                                
                        else {
                            this.itemJPopupMenu!.show(this, evt.getX(), evt.getY());
    

                        }
                            
}


                                    }
                                

                        if((evt.getModifiers()&evt.BUTTON1_MASK) == evt.BUTTON1_MASK)
                        
                                    {
                                    this.deselectAll();
    




                        for (
    var index: number = 0;
        
        
index < selectedTreePathArray!.length; index++)
        {

    var defaultMutableTreeNode: DefaultMutableTreeNode = list.get(index); as DefaultMutableTreeNode;
        
        
;
    

                        if(defaultMutableTreeNode!.getUserObject(); is CanvasTreeLabel)
                        
                                    {
                                    MyCanvasEventService.fire(new MyCanvasEvent(new MyCanvasEventSource(MyCanvasEventService.SELECT, defaultMutableTreeNode) as Object));
    

                                    }
                                
                        else {
                            this.selectGraphicItem(defaultMutableTreeNode);
    

                        }
                            
}


                                    }
                                

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "workAreaJTreeMousePressed", e);
    
}

}


    itemJPopupMenuPopupMenuWillBecomeInvisible(evt: javax.swing.event.PopupMenuEvent){
var evt = evt
}


    itemJPopupMenuPopupMenuWillBecomeVisible(evt: javax.swing.event.PopupMenuEvent){
var evt = evt
}


    copyJMenuItemMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt

        try {
            this.copy();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "copyJMenuItemMousePressed", e);
    
}

}


    deleteJMenuItemMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt

        try {
            
    var selectedTreePathArray: TreePath[] = this.workAreaJTree!.getSelectionPaths()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < selectedTreePathArray!.length; index++)
        {

    var treePath: TreePath = selectedTreePathArray[index]!;
        
        
;
    
this.remove(treePath);
    
this.updateTree();
    
this.expand();
    
this.repaint();
    
}


                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "deleteJMenuItemMousePressed", e);
    
}

}


    workAreaPropertiesJPanelMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
}


    private copyJMenuItem: javax.swing.JMenuItem

    private deleteJMenuItem: javax.swing.JMenuItem

    private itemJPopupMenu: javax.swing.JPopupMenu

    private itemJScrollPane1: javax.swing.JScrollPane

    private rotateJMenuItem: javax.swing.JMenuItem

    private workAreaPropertiesJPanel: javax.swing.JPanel

}
                
            

