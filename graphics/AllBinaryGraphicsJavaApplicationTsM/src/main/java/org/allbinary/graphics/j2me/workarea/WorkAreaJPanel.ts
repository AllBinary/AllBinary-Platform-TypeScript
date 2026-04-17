
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { awt } from "../../../../../java/awt.js";

    
import { EventListener } from "../../../../../java/util/EventListener.js";

    
import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { LinkedList } from "../../../../../java/util/LinkedList.js";

    
import { swing } from "../../../../../javax/swing.js";

    
import { MutableTreeNode } from "../../../../../javax/swing/tree/MutableTreeNode.js";

    
import { DomHelper } from "../../../../../org/allbinary/dom/DomHelper.js";

    
import { StatusFactory } from "../../../../../org/allbinary/graphics/j2me/StatusFactory.js";

    
import { CanvasDom } from "../../../../../org/allbinary/graphics/j2me/workarea/canvas/CanvasDom.js";

    
import { CanvasJPanel } from "../../../../../org/allbinary/graphics/j2me/workarea/canvas/CanvasJPanel.js";

    
import { MyCanvasEvent } from "../../../../../org/allbinary/graphics/j2me/workarea/canvas/event/MyCanvasEvent.js";

    
import { MyCanvasEventListener } from "../../../../../org/allbinary/graphics/j2me/workarea/canvas/event/MyCanvasEventListener.js";

    
import { MyCanvasEventService } from "../../../../../org/allbinary/graphics/j2me/workarea/canvas/event/MyCanvasEventService.js";

    
import { PropertiesJPanel } from "../../../../../org/allbinary/graphics/j2me/workarea/properties/PropertiesJPanel.js";

    
import { ToolJPanel } from "../../../../../org/allbinary/graphics/j2me/workarea/tools/ToolJPanel.js";

    
import { LOGGING } from "../../../../../org/allbinary/log/LOGGING.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { JPanel } from "./JPanel.js";

import { Dimension } from "./Dimension.js";

import { WorkAreaDom } from "./WorkAreaDom.js";

import { KeyEvent } from "./KeyEvent.js";

export class WorkAreaJPanel extends JPanel implements WorkAreaJPanelInterface, MyCanvasEventListener, EventListener, Runnable {
        

    private document: org.w3c.dom.Document

    public static getDocument(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private canvasJPanelList: LinkedList

    private canvasHolderJPanel: JPanel

    private name: string

    private selectedFrame: number= 0

    private propertiesJPanel: PropertiesJPanel

    private workAreaJTreeJPanel: WorkAreaJTreeJPanel

    private isPlaying: boolean = false;
        
        
public constructor (name: string, dimension: Dimension, x: number, y: number){

            super();
            var name = name
var dimension = dimension
var x = x
var y = y

        try {
            initComponents();
    
this.name= name;
    
initMyComponents(dimension);
    
this.workAreaJTreeJPanel= new WorkAreaJTreeJPanel(this.name);
    

    var canvasJPanel: CanvasJPanel = new CanvasJPanel(this.workAreaJTreeJPanel, this.getSize(), x, y);
        
        
;
    
this.canvasJPanelList!.add(canvasJPanel);
    
this.selectedFrame= 0;
    
this.propertiesJPanel!.set(this.workAreaJTreeJPanel);
    
this.canvasHolderJPanel!.add(canvasJPanel as Component);
    

                //: 
} catch(e) 
            {



                            throw e
}

}

public constructor (workAreaDom: WorkAreaDom, dimension: Dimension){

            super();
            var workAreaDom = workAreaDom
var dimension = dimension

        try {
            initComponents();
    
this.name= workAreaDom!.getName();
    
initMyComponents(dimension);
    

    var canvasNodeList: BasicArrayList = workAreaDom!.getCanvasNodes()!;
        
        
;
    

    var numberOfFrames: number = canvasNodeList!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < numberOfFrames; index++)
        {

    var node: Node = canvasNodeList!.get(index);

                         as Node;
        
        
;
    

    var canvasJPanel: CanvasJPanel = new CanvasJPanel(this.workAreaJTreeJPanel, this.getSize(), new CanvasDom(node));
        
        
;
    
this.canvasJPanelList!.add(canvasJPanel);
    
}

this.selectedFrame= 0;
    
this.canvasHolderJPanel!.add(this.getCurrentFrame();

                         as Component);
    
this.propertiesJPanel!.set(this.workAreaJTreeJPanel);
    

                //: 
} catch(e) 
            {

                        if(LOGGING.contains(LOGGING.LOADINGERROR))
                        
                                    {
                                    this.logUtil!.put("Constructor Error", this, "WorkAreaJPanel", e);
    

                                    }
                                



                            throw e
}

}


    initMyComponents(dimension: Dimension){
var dimension = dimension
this.workAreaJTreeJPanel= new WorkAreaJTreeJPanel(this.name);
    
this.canvasHolderJPanel= new JPanel();
    
this.canvasHolderJPanel!.setSize(dimension);
    
this.canvasHolderJPanel!.setLayout(new GridLayout(1, 1));
    
this.setSize(dimension);
    
this.canvasJPanelList= new LinkedList();
    

    var gridBagLayout: GridBagLayout = new GridBagLayout();
        
        
;
    

    var gridBagConstraints: GridBagConstraints = new GridBagConstraints();
        
        
;
    
this.innerJPanel!.setLayout(gridBagLayout);
    
gridBagConstraints!.gridx= 0;
    
gridBagConstraints!.gridy= 0;
    
gridBagConstraints!.gridwidth= 1;
    
gridBagConstraints!.fill= java.awt.GridBagConstraints.BOTH;
    
gridBagConstraints!.weightx= .05;
    
gridBagConstraints!.weighty= .05;
    

    var toolJPanel: ToolJPanel = new ToolJPanel();
        
        
;
    
gridBagLayout!.setConstraints(toolJPanel, gridBagConstraints);
    
this.innerJPanel!.add(toolJPanel);
    
gridBagConstraints= new GridBagConstraints();
    
gridBagConstraints!.gridx= 1;
    
gridBagConstraints!.gridy= 0;
    
gridBagConstraints!.gridwidth= 6;
    
gridBagConstraints!.fill= java.awt.GridBagConstraints.BOTH;
    
gridBagConstraints!.weightx= 1;
    
gridBagConstraints!.weighty= 1;
    
gridBagLayout!.setConstraints(canvasHolderJPanel, gridBagConstraints);
    
this.innerJPanel!.add(canvasHolderJPanel);
    
gridBagConstraints= new GridBagConstraints();
    
gridBagConstraints!.gridx= 8;
    
gridBagConstraints!.gridy= 0;
    
gridBagConstraints!.gridwidth= java.awt.GridBagConstraints.REMAINDER;
    
gridBagConstraints!.fill= java.awt.GridBagConstraints.BOTH;
    
gridBagConstraints!.weightx= .1;
    
gridBagConstraints!.weighty= .1;
    
propertiesJPanel= new PropertiesJPanel();
    
gridBagLayout!.setConstraints(propertiesJPanel, gridBagConstraints);
    
this.innerJPanel!.add(propertiesJPanel);
    
MyCanvasEventService.addListener(this as MyCanvasEventListener);
    
}


    getCanvasHashMap(): HashMap<any, any>{

    var canvasJPanelHashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var size: number = this.canvasJPanelList!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var canvasJPanel: CanvasJPanel = this.canvasJPanelList!.get(index);

                         as CanvasJPanel;
        
        
;
    
canvasJPanelHashMap!.put(canvasJPanel!.getTreeNode(), new Integer(index));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return canvasJPanelHashMap;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public play(){
isPlaying= true;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public stop(){
isPlaying= false;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public isPlaying(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isPlaying;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public setName(value: string){
var value = value
this.name= value;
    
}


    public disableCanvas(){
this.canvasHolderJPanel!.removeAll();
    
}


    public enableCanvas(){
this.canvasHolderJPanel!.add(this.getCurrentFrame();

                         as Component);
    
}


    public deselect(){
super.setVisible(false);
    
}


    public select(){
super.setVisible(true);
    

                        if(this.canvasHolderJPanel!.getComponentCount() == 1)
                        
                                    {
                                    
    var component: Component = this.canvasHolderJPanel!.getComponent(0)!;
        
        
;
    

                        if(component != 
                                    null
                                )
                        
                                    {
                                    component.repaint();
    

                                    }
                                

                                    }
                                
}


    public changeZoom(factor: number){
var factor = factor

    var size: number = canvasJPanelList!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var canvasJPanel: CanvasJPanel = canvasJPanelList!.get(index);

                         as CanvasJPanel;
        
        
;
    
canvasJPanel!.getGrid()!.setZoom(canvasJPanel!.getGrid()!.getZoom() +factor);
    
}

}


    public getCurrentFrame(): CanvasJPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.canvasJPanelList!.get(this.selectedFrame);

                         as CanvasJPanel;
    
}


    initDuplicate(newCanvasJPanel: CanvasJPanel){
var newCanvasJPanel = newCanvasJPanel

                        if(newCanvasJPanel != 
                                    null
                                )
                        
                                    {
                                    this.canvasJPanelList!.add(newCanvasJPanel);
    
this.select(this.canvasJPanelList!.size() -1);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    duplicate(treeNode: MutableTreeNode){
var treeNode = treeNode

    var canvasJPanelHashMap: HashMap<any, any> = this.getCanvasHashMap()!;
        
        
;
    

                        if(canvasJPanelHashMap!.containsKey(treeNode))
                        
                                    {
                                    
    var frameInteger: Integer = canvasJPanelHashMap!.get(treeNode as Object);

                         as Integer;
        
        
;
    

    var canvasJPanel: CanvasJPanel = this.canvasJPanelList!.get(frameInteger!.toInt());

                         as CanvasJPanel;
        
        
;
    
initDuplicate(canvasJPanel!.duplicate());
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public autoRotate(increments: number, totalAngle: number){
var increments = increments
var totalAngle = totalAngle

    var incrementAngle: number = (totalAngle /increments).toInt();
        
        
;
    




                        for (
    var index: number = 1;
        
        
index < increments; index++)
        {

    var canvasJPanel: CanvasJPanel = this.getCurrentFrame();

                         as CanvasJPanel;
        
        
;
    

    var newCanvasJPanel: CanvasJPanel = canvasJPanel!.duplicate()!;
        
        
;
    
newCanvasJPanel!.setAngle(incrementAngle *index);
    
initDuplicate(newCanvasJPanel);
    
}

}


    public explodeAll(){

    var canvasJPanel: CanvasJPanel = this.getCurrentFrame();

                         as CanvasJPanel;
        
        
;
    
canvasJPanel!.explodeAll();
    
}


                //@Throws(Error::class)
            
    public autoExplode(numberOfFrames: number, explodeType: number){
var numberOfFrames = numberOfFrames
var explodeType = explodeType




                        for (
    var index: number = 1;
        
        
index < numberOfFrames; index++)
        {

    var canvasJPanel: CanvasJPanel = this.getCurrentFrame();

                         as CanvasJPanel;
        
        
;
    

    var newCanvasJPanel: CanvasJPanel = canvasJPanel!.duplicate()!;
        
        
;
    
newCanvasJPanel!.explode(index +1, explodeType);
    
initDuplicate(newCanvasJPanel);
    
}

}


                //@Throws(Error::class)
            
    public autoMirror(){

    var canvasJPanel: CanvasJPanel = this.getCurrentFrame();

                         as CanvasJPanel;
        
        
;
    

    var newCanvasJPanel: CanvasJPanel = canvasJPanel!.duplicate()!;
        
        
;
    
newCanvasJPanel!.mirror();
    
initDuplicate(newCanvasJPanel);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    select(index: number){
var index = index

                        if(index < this.canvasJPanelList!.size())
                        
                                    {
                                    
    var canvasJPanel: CanvasJPanel = this.canvasJPanelList!.get(index);

                         as CanvasJPanel;
        
        
;
    

                        if(canvasJPanel != 
                                    null
                                )
                        
                                    {
                                    this.canvasHolderJPanel!.removeAll();
    
this.canvasHolderJPanel!.add(canvasJPanel);
    
this.selectedFrame= index;
    
canvasJPanel!.changed();
    
this.canvasHolderJPanel!.repaint();
    
canvasJPanel!.repaint();
    

                                    }
                                

                                    }
                                
}


    select(treeNode: MutableTreeNode){
var treeNode = treeNode

    var canvasJPanelHashMap: HashMap<any, any> = this.getCanvasHashMap()!;
        
        
;
    

    var frameInteger: Integer = canvasJPanelHashMap!.get(treeNode as Object);

                         as Integer;
        
        
;
    

                        if(frameInteger != 
                                    null
                                )
                        
                                    {
                                    this.select(frameInteger!.toInt());
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public toDocument(): Document{
document= DomHelper.getInstance()!.createDocument();
    

    var workAreaNode: Node = document.createElement(WorkAreaDom.WORKAREA)!;
        
        
;
    

    var nameNode: Node = document.createElement(WorkAreaDom.NAME)!;
        
        
;
    

    var nameTextNode: Node = document.createTextNode(this.name)!;
        
        
;
    
nameNode!.appendChild(nameTextNode);
    

    var framesNode: Node = document.createElement(WorkAreaDom.FRAMES)!;
        
        
;
    

    var size: number = canvasJPanelList!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var canvasJPanel: CanvasJPanel = canvasJPanelList!.get(index);

                         as CanvasJPanel;
        
        
;
    
framesNode!.appendChild(canvasJPanel!.toDom());
    
}

workAreaNode!.appendChild(nameNode);
    
workAreaNode!.appendChild(framesNode);
    
document.appendChild(workAreaNode);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
}


    initComponents(){
innerJPanel= new javax.swing.JPanel();
    
setLayout(new java.awt.GridLayout(1, 1));
    
innerJPanel!.addKeyListener(new object: java.awt.event.KeyAdapter()
                                {
                                
    public keyTyped(evt: java.awt.event.KeyEvent){
var evt = evt
innerJPanelKeyTyped(evt);
    
}

    public keyPressed(evt: java.awt.event.KeyEvent){
var evt = evt
innerJPanelKeyPressed(evt);
    
}

    public keyReleased(evt: java.awt.event.KeyEvent){
var evt = evt
innerJPanelKeyReleased(evt);
    
}

                                }
                            );
    
add(innerJPanel);
    
}


    innerJPanelKeyReleased(evt: java.awt.event.KeyEvent){
var evt = evt
StatusFactory.getInstance()!.setStatus("Key Pressed1");
    
}


    innerJPanelKeyPressed(evt: java.awt.event.KeyEvent){
var evt = evt
StatusFactory.getInstance()!.setStatus("Key Pressed2");
    
}


    innerJPanelKeyTyped(evt: java.awt.event.KeyEvent){
var evt = evt
StatusFactory.getInstance()!.setStatus("Key Pressed3");
    
}


    public keyPressed(keyEvent: java.awt.event.KeyEvent){
var keyEvent = keyEvent
this.getCurrentFrame()!.keyPressed(keyEvent);
    
}


    public keyReleased(keyEvent: java.awt.event.KeyEvent){
var keyEvent = keyEvent
}


    public keyTyped(keyEvent: java.awt.event.KeyEvent){
var keyEvent = keyEvent
}


    public delete(evt: MyCanvasEvent){
var evt = evt

    var canvasJPanelHashMap: HashMap<any, any> = this.getCanvasHashMap()!;
        
        
;
    

                        if(canvasJPanelHashMap!.containsKey(evt.getTreeNode()))
                        
                                    {
                                    this.canvasHolderJPanel!.removeAll();
    

    var frameInt: Integer = canvasJPanelHashMap!.get(evt.getTreeNode());

                         as Integer;
        
        
;
    
this.canvasJPanelList!.remove(frameInt!.toInt());
    
this.select(frameInt!.toInt());
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public duplicate(evt: MyCanvasEvent){
var evt = evt
this.duplicate(evt.getTreeNode());
    
}


    public select(evt: MyCanvasEvent){
var evt = evt
this.select(evt.getTreeNode());
    
StatusFactory.getInstance()!.setStatus("Frame Selected");
    
}


    public rotate(evt: MyCanvasEvent){
var evt = evt

    var canvasJPanelHashMap: HashMap<any, any> = this.getCanvasHashMap()!;
        
        
;
    

    var treeNode: MutableTreeNode = evt.getTreeNode()!;
        
        
;
    

    var frameInt: Integer = canvasJPanelHashMap!.get(evt.getTreeNode());

                         as Integer;
        
        
;
    

    var canvasJPanel: CanvasJPanel = this.canvasJPanelList!.get(frameInt!.toInt());

                         as CanvasJPanel;
        
        
;
    

                        if(canvasJPanel != 
                                    null
                                )
                        
                                    {
                                    canvasJPanel!.addAngle(evt.getAngle());
    
this.select(frameInt!.toInt());
    

                                    }
                                
StatusFactory.getInstance()!.setStatus("Canvas Rotated");
    
}


    public explode(evt: MyCanvasEvent){
var evt = evt
this.explodeAll();
    
}


                //@Throws(Error::class)
            
    public autoExplode(evt: MyCanvasEvent){
var evt = evt
this.autoExplode(10, 0);
    
}


                //@Throws(Error::class)
            
    public center(){

    var canvasJPanel: CanvasJPanel = this.getCurrentFrame();

                         as CanvasJPanel;
        
        
;
    
canvasJPanel!.center();
    
}


                //@Throws(Error::class)
            
    public center(evt: MyCanvasEvent){
var evt = evt
this.center();
    
}


    public run(){

        try {
            
        while(true)
        {

                        if(this.isPlaying())
                        
                                    {
                                    
    var size: number = this.canvasJPanelList!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

                        if(!this.isPlaying();

                        )
                        
                                    {
                                    break;

                    

                                    }
                                
this.select(index);
    
Thread.sleep(100);
    
}


                                    }
                                
                        else {
                            Thread.sleep(500);
    

                        }
                            
Thread.sleep(250);
    
}


                //: 
} catch(e) 
            {
}

}


    private innerJPanel: javax.swing.JPanel

}
                
            

