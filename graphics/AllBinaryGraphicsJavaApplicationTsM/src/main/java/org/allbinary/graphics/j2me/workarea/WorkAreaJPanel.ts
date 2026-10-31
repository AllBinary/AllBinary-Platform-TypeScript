
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
            import { Thread } from '../../../../../java/lang/Thread.js';
        
            import { Runnable } from '../../../../../java/lang/Runnable.js';
        
import { awt } from '../../../../../java/awt.js';
//not GWT import const awt

import { EventListener } from '../../../../../java/util/EventListener.js';
//not GWT import const EventListener

import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { LinkedList } from '../../../../../java/util/LinkedList.js';
//not GWT import const LinkedList

import { swing } from '../../../../../javax/swing.js';
//not GWT import const swing

import { MutableTreeNode } from '../../../../../javax/swing/tree/MutableTreeNode.js';
//not GWT import const MutableTreeNode

import { DomHelper } from '../../../../../org/allbinary/dom/DomHelper.js';
//not GWT import const DomHelper

import { StatusFactory } from '../../../../../org/allbinary/graphics/j2me/StatusFactory.js';
//not GWT import const StatusFactory

import { CanvasDom } from '../../../../../org/allbinary/graphics/j2me/workarea/canvas/CanvasDom.js';
//not GWT import const CanvasDom

import { CanvasJPanel } from '../../../../../org/allbinary/graphics/j2me/workarea/canvas/CanvasJPanel.js';
//not GWT import const CanvasJPanel

import { MyCanvasEvent } from '../../../../../org/allbinary/graphics/j2me/workarea/canvas/event/MyCanvasEvent.js';
//not GWT import const MyCanvasEvent

import { MyCanvasEventListener } from '../../../../../org/allbinary/graphics/j2me/workarea/canvas/event/MyCanvasEventListener.js';
//not GWT import const MyCanvasEventListener

import { MyCanvasEventService } from '../../../../../org/allbinary/graphics/j2me/workarea/canvas/event/MyCanvasEventService.js';
//not GWT import const MyCanvasEventService

import { PropertiesJPanel } from '../../../../../org/allbinary/graphics/j2me/workarea/properties/PropertiesJPanel.js';
//not GWT import const PropertiesJPanel

import { ToolJPanel } from '../../../../../org/allbinary/graphics/j2me/workarea/tools/ToolJPanel.js';
//not GWT import const ToolJPanel

import { LOGGING } from '../../../../../org/allbinary/log/LOGGING.js';
//not GWT import const LOGGING

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

import { Document } from '../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JPanel } from './JPanel.js';
//sameFolderImports - not GWT import - same folder const JPanel
import { WorkAreaJPanelInterface } from './WorkAreaJPanelInterface.js';
//sameFolderImports - not GWT import - same folder const WorkAreaJPanelInterface
import { WorkAreaJTreeJPanel } from './WorkAreaJTreeJPanel.js';
//sameFolderImports - not GWT import - same folder const WorkAreaJTreeJPanel
import { Component } from './Component.js';
//sameFolderImports - not GWT import - same folder const Component
import { Dimension } from './Dimension.js';
//sameFolderImports - not GWT import - same folder const Dimension
import { WorkAreaDom } from './WorkAreaDom.js';
//sameFolderImports - not GWT import - same folder const WorkAreaDom
import { GridLayout } from './GridLayout.js';
//sameFolderImports - not GWT import - same folder const GridLayout
import { GridBagLayout } from './GridBagLayout.js';
//sameFolderImports - not GWT import - same folder const GridBagLayout
import { GridBagConstraints } from './GridBagConstraints.js';
//sameFolderImports - not GWT import - same folder const GridBagConstraints
import { KeyAdapter } from './KeyAdapter.js';
//sameFolderImports - not GWT import - same folder const KeyAdapter
import { KeyEvent } from './KeyEvent.js';
//sameFolderImports - not GWT import - same folder const KeyEvent

export class WorkAreaJPanel extends JPanel implements WorkAreaJPanelInterface, MyCanvasEventListener, EventListener, Runnable {
        

    private static document: org.w3c.dom.Document;

    public static getDocument(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return WorkAreaJPanel.document;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private canvasJPanelList: LinkedList;

    private canvasHolderJPanel: JPanel;

    private name: string;

    private selectedFrame: number= 0;

    private propertiesJPanel: PropertiesJPanel;

    private workAreaJTreeJPanel: WorkAreaJTreeJPanel;

    private isPlaying: boolean = false;

    public constructor(...args: any[]) {
        super();
        if(args.length === 4) {
            this.constructor$0(args[0], args[1], args[2], args[3]);
        }
        else if(args.length === 2) {
            this.constructor$1(args[0], args[1]);
        }
        
    }
    
    private constructor$0(name: string, dimension: Dimension, x: number, y: number): void {
        
 try { this.initComponents();
    
this.name= name;
    
this.initMyComponents(dimension);
    
this.workAreaJTreeJPanel= new WorkAreaJTreeJPanel(this.name);
    

    let canvasJPanel: CanvasJPanel = new CanvasJPanel(this.workAreaJTreeJPanel, this.getSize(), x, y);;
    
this.canvasJPanelList!.add(canvasJPanel);
    
this.selectedFrame= 0;
    
this.propertiesJPanel!.set(this.workAreaJTreeJPanel);
    
this.canvasHolderJPanel!.add(canvasJPanel as Component);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 

    }
    
    private constructor$1(workAreaDom: WorkAreaDom, dimension: Dimension): void {
        
 try { this.initComponents();
    
this.name= workAreaDom!.getName();
    
this.initMyComponents(dimension);
    

    let canvasNodeList: BasicArrayList = workAreaDom!.getCanvasNodes()!;;
    

    let numberOfFrames: number = canvasNodeList!.size()!;;
    




                        for (
    let index: number = 0;index < numberOfFrames; index++)
        {

    let node: Node = canvasNodeList!.get(index) as Node;;
    

    let canvasJPanel: CanvasJPanel = new CanvasJPanel(this.workAreaJTreeJPanel, this.getSize(), new CanvasDom(node));;
    
this.canvasJPanelList!.add(canvasJPanel);
    
}

this.selectedFrame= 0;
    
this.canvasHolderJPanel!.add(this.getCurrentFrame() as Component);
    
this.propertiesJPanel!.set(this.workAreaJTreeJPanel);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(LOGGING.contains(LOGGING.LOADINGERROR))
                        
                                    {
                                    this.logUtil!.put("Constructor Error", this, "WorkAreaJPanel", e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 

    }
    
    initMyComponents(dimension: Dimension){
this.workAreaJTreeJPanel= new WorkAreaJTreeJPanel(this.name);
    
this.canvasHolderJPanel= new JPanel();
    
this.canvasHolderJPanel!.setSize(dimension);
    
this.canvasHolderJPanel!.setLayout(new GridLayout(1, 1));
    
this.setSize(dimension);
    
this.canvasJPanelList= new LinkedList();
    

    let gridBagLayout: GridBagLayout = new GridBagLayout();;
    

    let gridBagConstraints: GridBagConstraints = new GridBagConstraints();;
    
this.innerJPanel!.setLayout(gridBagLayout);
    
gridBagConstraints!.gridx= 0;
    
gridBagConstraints!.gridy= 0;
    
gridBagConstraints!.gridwidth= 1;
    
gridBagConstraints!.fill= java.awt.GridBagConstraints.BOTH;
    
gridBagConstraints!.weightx= .05;
    
gridBagConstraints!.weighty= .05;
    

    let toolJPanel: ToolJPanel = new ToolJPanel();;
    
gridBagLayout!.setConstraints(toolJPanel, gridBagConstraints);
    
this.innerJPanel!.add(toolJPanel);
    
gridBagConstraints= new GridBagConstraints();
    
gridBagConstraints!.gridx= 1;
    
gridBagConstraints!.gridy= 0;
    
gridBagConstraints!.gridwidth= 6;
    
gridBagConstraints!.fill= java.awt.GridBagConstraints.BOTH;
    
gridBagConstraints!.weightx= 1;
    
gridBagConstraints!.weighty= 1;
    
gridBagLayout!.setConstraints(this.canvasHolderJPanel, gridBagConstraints);
    
this.innerJPanel!.add(this.canvasHolderJPanel);
    
gridBagConstraints= new GridBagConstraints();
    
gridBagConstraints!.gridx= 8;
    
gridBagConstraints!.gridy= 0;
    
gridBagConstraints!.gridwidth= java.awt.GridBagConstraints.REMAINDER;
    
gridBagConstraints!.fill= java.awt.GridBagConstraints.BOTH;
    
gridBagConstraints!.weightx= .1;
    
gridBagConstraints!.weighty= .1;
    
this.propertiesJPanel= new PropertiesJPanel();
    
gridBagLayout!.setConstraints(this.propertiesJPanel, gridBagConstraints);
    
this.innerJPanel!.add(this.propertiesJPanel);
    
MyCanvasEventService.addListener(this as MyCanvasEventListener);
    
}


    getCanvasHashMap(): HashMap<any, any>{

    let canvasJPanelHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

    let size: number = this.canvasJPanelList!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let canvasJPanel: CanvasJPanel = this.canvasJPanelList!.get(index) as CanvasJPanel;;
    
canvasJPanelHashMap!.put(canvasJPanel!.getTreeNode(), new Integer(index));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return canvasJPanelHashMap;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public play(){
this.isPlaying= true;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public stop(){
this.isPlaying= false;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public isPlaying(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isPlaying;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public setName(value: string){
this.name= value;
    
}


    public disableCanvas(){
this.canvasHolderJPanel!.removeAll();
    
}


    public enableCanvas(){
this.canvasHolderJPanel!.add(this.getCurrentFrame() as Component);
    
}


    public deselect(){
super.setVisible(false);
    
}

select(...args: any[]): any {
   
    if (args.length === 0) return this.select$overload1();
   
    if (args.length === 1 && typeof args[0] === 'number') return this.select$overload2(args[0]);
   
    if (args.length === 1) return this.select$overload3(args[0]);
   
    if (args.length === 1) return this.select$overload4(args[0]);
   
   throw new TypeError('No matching overload: select'); }
  
    public select$overload1(){
super.setVisible(true);
    

                        if(this.canvasHolderJPanel!.getComponentCount() == 1)
                        
                                    {
                                    
    let component: Component = this.canvasHolderJPanel!.getComponent(0)!;;
    

                        if(component != 
                                    null
                                )
                        
                                    {
                                    component.repaint();
    

                                    }
                                

                                    }
                                
}


    public changeZoom(factor: number){

    let size: number = this.canvasJPanelList!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let canvasJPanel: CanvasJPanel = this.canvasJPanelList!.get(index) as CanvasJPanel;;
    
canvasJPanel!.getGrid()!.setZoom(canvasJPanel!.getGrid()!.getZoom() +factor);
    
}

}


    public getCurrentFrame(): CanvasJPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.canvasJPanelList!.get(this.selectedFrame) as CanvasJPanel;
    
}


    initDuplicate(newCanvasJPanel: CanvasJPanel){

                        if(newCanvasJPanel != 
                                    null
                                )
                        
                                    {
                                    this.canvasJPanelList!.add(newCanvasJPanel);
    
this.select(this.canvasJPanelList!.size() -1);
    

                                    }
                                
}

duplicate(...args: any[]): any {
   
    if (args.length === 1) return this.duplicate$overload1(args[0]);
   
    if (args.length === 1) return this.duplicate$overload2(args[0]);
   
   throw new TypeError('No matching overload: duplicate'); }
  
                //@Throws(Exception.constructor)
            
    duplicate$overload1(treeNode: MutableTreeNode){

    let canvasJPanelHashMap: HashMap<any, any> = this.getCanvasHashMap()!;;
    

                        if(canvasJPanelHashMap!.containsKey(treeNode))
                        
                                    {
                                    
    let frameInteger: Integer = canvasJPanelHashMap!.get(treeNode) as Integer;;
    

    let canvasJPanel: CanvasJPanel = this.canvasJPanelList!.get(frameInteger!.intValue()) as CanvasJPanel;;
    
this.initDuplicate(canvasJPanel!.duplicate());
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public autoRotate(increments: number, totalAngle: number){

    let incrementAngle: number = globalThis.Math.trunc((globalThis.Math.trunc(totalAngle /increments)));;
    




                        for (
    let index: number = 1;index < increments; index++)
        {

    let canvasJPanel: CanvasJPanel = this.getCurrentFrame() as CanvasJPanel;;
    

    let newCanvasJPanel: CanvasJPanel = canvasJPanel!.duplicate()!;;
    
newCanvasJPanel!.setAngle(incrementAngle *index);
    
this.initDuplicate(newCanvasJPanel);
    
}

}


    public explodeAll(){

    let canvasJPanel: CanvasJPanel = this.getCurrentFrame() as CanvasJPanel;;
    
canvasJPanel!.explodeAll();
    
}

autoExplode(...args: any[]): any {
   
    if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') return this.autoExplode$overload1(args[0], args[1]);
   
    if (args.length === 1) return this.autoExplode$overload2(args[0]);
   
   throw new TypeError('No matching overload: autoExplode'); }
  
                //@Throws(Exception.constructor)
            
    public autoExplode$overload1(numberOfFrames: number, explodeType: number){




                        for (
    let index: number = 1;index < numberOfFrames; index++)
        {

    let canvasJPanel: CanvasJPanel = this.getCurrentFrame() as CanvasJPanel;;
    

    let newCanvasJPanel: CanvasJPanel = canvasJPanel!.duplicate()!;;
    
newCanvasJPanel!.explode(index +1, explodeType);
    
this.initDuplicate(newCanvasJPanel);
    
}

}


                //@Throws(Exception.constructor)
            
    public autoMirror(){

    let canvasJPanel: CanvasJPanel = this.getCurrentFrame() as CanvasJPanel;;
    

    let newCanvasJPanel: CanvasJPanel = canvasJPanel!.duplicate()!;;
    
newCanvasJPanel!.mirror();
    
this.initDuplicate(newCanvasJPanel);
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    select$overload2(index: number){

                        if(index < this.canvasJPanelList!.size())
                        
                                    {
                                    
    let canvasJPanel: CanvasJPanel = this.canvasJPanelList!.get(index) as CanvasJPanel;;
    

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


    select$overload3(treeNode: MutableTreeNode){

    let canvasJPanelHashMap: HashMap<any, any> = this.getCanvasHashMap()!;;
    

    let frameInteger: Integer = canvasJPanelHashMap!.get(treeNode) as Integer;;
    

                        if(frameInteger != 
                                    null
                                )
                        
                                    {
                                    this.select(frameInteger!.intValue());
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public toDocument(): Document{
WorkAreaJPanel.document= DomHelper.getInstance()!.createDocument();
    

    let workAreaNode: Node = WorkAreaJPanel.document.createElement(WorkAreaDom.WORKAREA)!;;
    

    let nameNode: Node = WorkAreaJPanel.document.createElement(WorkAreaDom.NAME)!;;
    

    let nameTextNode: Node = WorkAreaJPanel.document.createTextNode(this.name)!;;
    
nameNode!.appendChild(nameTextNode);
    

    let framesNode: Node = WorkAreaJPanel.document.createElement(WorkAreaDom.FRAMES)!;;
    

    let size: number = this.canvasJPanelList!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let canvasJPanel: CanvasJPanel = this.canvasJPanelList!.get(index) as CanvasJPanel;;
    
framesNode!.appendChild(canvasJPanel!.toDom());
    
}

workAreaNode!.appendChild(nameNode);
    
workAreaNode!.appendChild(framesNode);
    
WorkAreaJPanel.document.appendChild(workAreaNode);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
}


    initComponents(){
this.innerJPanel= new javax.swing.JPanel();
    
setLayout(new java.awt.GridLayout(1, 1));
    
this.innerJPanel!.addKeyListener(new class extends java.awt.event.KeyAdapter
                                {
                                
    public keyTyped(evt: java.awt.event.KeyEvent){
innerJPanelKeyTyped(evt);
    
}

    public keyPressed(evt: java.awt.event.KeyEvent){
innerJPanelKeyPressed(evt);
    
}

    public keyReleased(evt: java.awt.event.KeyEvent){
innerJPanelKeyReleased(evt);
    
}

                                }
                            );
    
add(this.innerJPanel);
    
}


    innerJPanelKeyReleased(evt: java.awt.event.KeyEvent){
StatusFactory.getInstance()!.setStatus("Key Pressed1");
    
}


    innerJPanelKeyPressed(evt: java.awt.event.KeyEvent){
StatusFactory.getInstance()!.setStatus("Key Pressed2");
    
}


    innerJPanelKeyTyped(evt: java.awt.event.KeyEvent){
StatusFactory.getInstance()!.setStatus("Key Pressed3");
    
}


    public keyPressed(keyEvent: java.awt.event.KeyEvent){
this.getCurrentFrame()!.keyPressed(keyEvent);
    
}


    public keyReleased(keyEvent: java.awt.event.KeyEvent){
}


    public keyTyped(keyEvent: java.awt.event.KeyEvent){
}


    public delete(evt: MyCanvasEvent){

    let canvasJPanelHashMap: HashMap<any, any> = this.getCanvasHashMap()!;;
    

                        if(canvasJPanelHashMap!.containsKey(evt.getTreeNode()))
                        
                                    {
                                    this.canvasHolderJPanel!.removeAll();
    

    let frameInt: Integer = canvasJPanelHashMap!.get(evt.getTreeNode()) as Integer;;
    
this.canvasJPanelList!.remove(frameInt!.intValue());
    
this.select(frameInt!.intValue());
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public duplicate$overload2(evt: MyCanvasEvent){
this.duplicate(evt.getTreeNode());
    
}


    public select$overload4(evt: MyCanvasEvent){
this.select(evt.getTreeNode());
    
StatusFactory.getInstance()!.setStatus("Frame Selected");
    
}


    public rotate(evt: MyCanvasEvent){

    let canvasJPanelHashMap: HashMap<any, any> = this.getCanvasHashMap()!;;
    

    let treeNode: MutableTreeNode = evt.getTreeNode()!;;
    

    let frameInt: Integer = canvasJPanelHashMap!.get(evt.getTreeNode()) as Integer;;
    

    let canvasJPanel: CanvasJPanel = this.canvasJPanelList!.get(frameInt!.intValue()) as CanvasJPanel;;
    

                        if(canvasJPanel != 
                                    null
                                )
                        
                                    {
                                    canvasJPanel!.addAngle(evt.getAngle());
    
this.select(frameInt!.intValue());
    

                                    }
                                
StatusFactory.getInstance()!.setStatus("Canvas Rotated");
    
}


    public explode(evt: MyCanvasEvent){
this.explodeAll();
    
}


                //@Throws(Exception.constructor)
            
    public autoExplode$overload2(evt: MyCanvasEvent){
this.autoExplode(10, 0);
    
}

center(...args: any[]): any {
   
    if (args.length === 0) return this.center$overload1();
   
    if (args.length === 1) return this.center$overload2(args[0]);
   
   throw new TypeError('No matching overload: center'); }
  
                //@Throws(Exception.constructor)
            
    public center$overload1(){

    let canvasJPanel: CanvasJPanel = this.getCurrentFrame() as CanvasJPanel;;
    
canvasJPanel!.center();
    
}


                //@Throws(Exception.constructor)
            
    public center$overload2(evt: MyCanvasEvent){
this.center();
    
}


    public run(){

 try { 
        while(true)
        {

                        if(this.isPlaying())
                        
                                    {
                                    
    let size: number = this.canvasJPanelList!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

                        if(!this.isPlaying())
                        
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

 }
 catch (caught: any) {
 {
  const e = caught;
  

 }
   }
 
}


    private innerJPanel: javax.swing.JPanel;

}

