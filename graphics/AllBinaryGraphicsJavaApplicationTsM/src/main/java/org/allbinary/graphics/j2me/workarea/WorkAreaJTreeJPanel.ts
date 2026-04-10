
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

    

export class WorkAreaJTreeJPanel extends javax.swing.JPanel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private rootTreeNode: DefaultMutableTreeNode

    private workAreaJTree: JTree

    private highlightedBasicArrayList: BasicArrayList
public constructor (workAreaName: string){

            super();
            var workAreaName = workAreaName
initComponents()
this.rootTreeNode= DefaultMutableTreeNode(workAreaName)
removeAll()
updateTree()
this.highlightedBasicArrayList= BasicArrayList()
}


    public add(treeNode: MutableTreeNode){
var treeNode = treeNode
add(treeNode)
}


    public updateTree(){
this.workAreaJTree= JTree(rootTreeNode)
addMouseListener(object: java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
workAreaJTreeMousePressed(evt)
}

                                }
                            )
removeAll()
add(this.workAreaJTree)
}


    public getNode(treePathArray: TreePath[]): BasicArrayList{
var treePathArray = treePathArray

    var basicArrayList: BasicArrayList = new BasicArrayList();
        
        


    
                        if(treePathArray != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < treePathArray!.length; index++)
        {
add(this.getNode(treePathArray[index]!))
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
                                    
    var obj: any = {}[] = treePath!.getPath()!;
        
        


    
                        if(obj != 
                                    null
                                )
                        
                                    {
                                    
    var node: DefaultMutableTreeNode = obj[obj.length -1]! as DefaultMutableTreeNode;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                @Throws(Exception::class)
            
    public deselectAll(){

    var size: number = highlightedBasicArrayList!.size()!;
        
        

put("size: " +size, this, "deselectAll")




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var node: DefaultMutableTreeNode = highlightedBasicArrayList!.get(index) as DefaultMutableTreeNode;
        
        

fire(MyGraphicItemEvent(MyGraphicItemEventSource(MyGraphicItemEventService.DESELECT, node) as Object))
}

clear()
}


                @Throws(Exception::class)
            
    public selectGraphicItem(node: DefaultMutableTreeNode){
var node = node
add(node)
fire(MyGraphicItemEvent(MyGraphicItemEventSource(MyGraphicItemEventService.SELECT, node) as Object))
}


                @Throws(Exception::class)
            
    public removeGraphicItem(node: DefaultMutableTreeNode){
var node = node
fire(MyGraphicItemEvent(MyGraphicItemEventSource(MyGraphicItemEventService.DELETE, node) as Object))
}


                @Throws(Exception::class)
            
    public removeCanvas(node: DefaultMutableTreeNode){
var node = node
fire(MyCanvasEvent(MyCanvasEventSource(MyCanvasEventService.DELETE, node) as Object))
}


                @Throws(Exception::class)
            
    public remove(treePath: TreePath){
var treePath = treePath

    var node: DefaultMutableTreeNode = this.getNode(treePath)!;
        
        


    
                        if(node != 
                                    null
                                )
                        
                                    {
                                    
    
                        if(node.getUserObject() is CanvasTreeLabel)
                        
                                    {
                                    this.removeCanvas(node)

                                    }
                                
                        else {
                            this.removeGraphicItem(node)

                        }
                            

                                    }
                                

    var parent: DefaultMutableTreeNode = node.getParent() as DefaultMutableTreeNode;
        
        

remove(node)
}


                @Throws(Exception::class)
            
    copy(){

    var treePath: TreePath = this.workAreaJTree!.getSelectionPath()!;
        
        

this.copy(treePath)
this.updateTree()
this.expand()
this.repaint()
}


                @Throws(Exception::class)
            
    copy(treePath: TreePath){
var treePath = treePath

    var node: DefaultMutableTreeNode = this.getNode(treePath)!;
        
        


    
                        if(node != 
                                    null
                                )
                        
                                    {
                                    
    
                        if(node.getUserObject() is CanvasTreeLabel)
                        
                                    {
                                    fire(MyCanvasEvent(MyCanvasEventSource(MyCanvasEventService.DUPLICATE, node) as Object))

                                    }
                                
                        else {
                            fire(MyGraphicItemEvent(MyGraphicItemEventSource(MyGraphicItemEventService.DUPLICATE, node) as Object))

                        }
                            

                                    }
                                
}


                @Throws(Exception::class)
            
    public rotate(treePath: TreePath, angle: number){
var treePath = treePath
var angle = angle

    var node: DefaultMutableTreeNode = this.getNode(treePath)!;
        
        


    
                        if(node != 
                                    null
                                )
                        
                                    {
                                    
    
                        if(node.getUserObject() is CanvasTreeLabel)
                        
                                    {
                                    fire(MyCanvasEvent(MyCanvasEventSource(MyCanvasEventService.ROTATE, angle, node) as Object))

                                    }
                                
                        else {
                            fire(MyGraphicItemEvent(MyGraphicItemEventSource(MyGraphicItemEventService.ROTATE, angle, node) as Object))

                        }
                            

                                    }
                                
}


    public getRootTreeNode(): MutableTreeNode{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rootTreeNode;
    
}


    public expand(){
expandRow(0)
expandRow(1)
}


    public expand(treePath: TreePath){
var treePath = treePath
expandPath(treePath)
}


    initComponents(){
itemJPopupMenu= javax.swing.JPopupMenu()
deleteJMenuItem= javax.swing.JMenuItem()
copyJMenuItem= javax.swing.JMenuItem()
rotateJMenuItem= javax.swing.JMenuItem()
itemJScrollPane1= javax.swing.JScrollPane()
workAreaPropertiesJPanel= javax.swing.JPanel()
addPopupMenuListener(object: javax.swing.event.PopupMenuListener()
                                {
                                
    public popupMenuCanceled(evt: javax.swing.event.PopupMenuEvent){
var evt = evt
}

    public popupMenuWillBecomeInvisible(evt: javax.swing.event.PopupMenuEvent){
var evt = evt
itemJPopupMenuPopupMenuWillBecomeInvisible(evt)
}

    public popupMenuWillBecomeVisible(evt: javax.swing.event.PopupMenuEvent){
var evt = evt
itemJPopupMenuPopupMenuWillBecomeVisible(evt)
}

                                }
                            )
setText("Delete")
addMouseListener(object: java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
deleteJMenuItemMousePressed(evt)
}

                                }
                            )
add(deleteJMenuItem)
setText("Copy")
addMouseListener(object: java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
copyJMenuItemMousePressed(evt)
}

                                }
                            )
add(copyJMenuItem)
setText("Rotate 45*")
addMouseListener(object: java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
rotateJMenuItemMousePressed(evt)
}

                                }
                            )
add(rotateJMenuItem)
setLayout(java.awt.GridLayout(1, 1))
addMouseListener(object: java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
workAreaPropertiesJPanelMousePressed(evt)
}

                                }
                            )
setLayout(java.awt.GridLayout(1, 0))
setViewportView(workAreaPropertiesJPanel)
add(itemJScrollPane1)
}


    rotateJMenuItemMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt

        try {
            
    var treePath: TreePath = this.workAreaJTree!.getSelectionPath()!;
        
        

this.rotate(treePath, 45)
this.updateTree()
this.expand()
this.repaint()
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "rotateJMenuItemMousePressed", e)
}

}


    workAreaJTreeMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt

        try {
            
    var selectedTreePathArray: TreePath[] = this.workAreaJTree!.getSelectionPaths()!;
        
        


    var list: BasicArrayList = this.getNode(selectedTreePathArray)!;
        
        


    
                        if(list.size() > 0)
                        
                                    {
                                    
    
                        if((evt.getModifiers() and evt.BUTTON3_MASK) == evt.BUTTON3_MASK)
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < selectedTreePathArray!.length; index++)
        {

    var defaultMutableTreeNode: DefaultMutableTreeNode = list.get(index) as DefaultMutableTreeNode;
        
        


    
                        if(defaultMutableTreeNode!.getUserObject() is CanvasTreeLabel)
                        
                                    {
                                    show(this, evt.getX(), evt.getY())

                                    }
                                
                        else {
                            show(this, evt.getX(), evt.getY())

                        }
                            
}


                                    }
                                

    
                        if((evt.getModifiers() and evt.BUTTON1_MASK) == evt.BUTTON1_MASK)
                        
                                    {
                                    this.deselectAll()




                        for (
    var index: number = 0;
        
        
index < selectedTreePathArray!.length; index++)
        {

    var defaultMutableTreeNode: DefaultMutableTreeNode = list.get(index) as DefaultMutableTreeNode;
        
        


    
                        if(defaultMutableTreeNode!.getUserObject() is CanvasTreeLabel)
                        
                                    {
                                    fire(MyCanvasEvent(MyCanvasEventSource(MyCanvasEventService.SELECT, defaultMutableTreeNode) as Object))

                                    }
                                
                        else {
                            this.selectGraphicItem(defaultMutableTreeNode)

                        }
                            
}


                                    }
                                

                                    }
                                
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "workAreaJTreeMousePressed", e)
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
            this.copy()
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "copyJMenuItemMousePressed", e)
}

}


    deleteJMenuItemMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt

        try {
            
    var selectedTreePathArray: TreePath[] = this.workAreaJTree!.getSelectionPaths()!;
        
        





                        for (
    var index: number = 0;
        
        
index < selectedTreePathArray!.length; index++)
        {

    var treePath: TreePath = selectedTreePathArray[index]!;
        
        

this.remove(treePath)
this.updateTree()
this.expand()
this.repaint()
}

} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "deleteJMenuItemMousePressed", e)
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
                
            

