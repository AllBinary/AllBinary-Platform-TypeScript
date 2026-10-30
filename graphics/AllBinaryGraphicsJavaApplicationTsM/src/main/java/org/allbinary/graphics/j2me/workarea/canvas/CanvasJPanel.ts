
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../java/lang/Integer.js';
        
            import { Double } from '../../../../../../java/lang/Double.js';
        
import { awt } from '../../../../../../java/awt.js';
//not GWT import const awt

import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { DefaultMutableTreeNode } from '../../../../../../javax/swing/tree/DefaultMutableTreeNode.js';
//not GWT import const DefaultMutableTreeNode

import { MutableTreeNode } from '../../../../../../javax/swing/tree/MutableTreeNode.js';
//not GWT import const MutableTreeNode

import { VectorExplosionGenerator } from '../../../../../../org/allbinary/animation/VectorExplosionGenerator.js';
//not GWT import const VectorExplosionGenerator

import { VectorMirrorGenerator } from '../../../../../../org/allbinary/animation/VectorMirrorGenerator.js';
//not GWT import const VectorMirrorGenerator

import { VectorCenterGenerator } from '../../../../../../org/allbinary/animation/vector/VectorCenterGenerator.js';
//not GWT import const VectorCenterGenerator

import { GameInputStrings } from '../../../../../../org/allbinary/game/input/GameInputStrings.js';
//not GWT import const GameInputStrings

import { GPoint } from '../../../../../../org/allbinary/graphics/GPoint.js';
//not GWT import const GPoint

import { PointFactory } from '../../../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory

import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory

import { GraphicsException } from '../../../../../../org/allbinary/graphics/j2me/GraphicsException.js';
//not GWT import const GraphicsException

import { StatusFactory } from '../../../../../../org/allbinary/graphics/j2me/StatusFactory.js';
//not GWT import const StatusFactory

import { WorkAreaJTreeJPanel } from '../../../../../../org/allbinary/graphics/j2me/workarea/WorkAreaJTreeJPanel.js';
//not GWT import const WorkAreaJTreeJPanel

import { GraphicItemFactory } from '../../../../../../org/allbinary/graphics/j2me/workarea/tools/GraphicItemFactory.js';
//not GWT import const GraphicItemFactory

import { GraphicItemInterface } from '../../../../../../org/allbinary/graphics/j2me/workarea/tools/GraphicItemInterface.js';
//not GWT import const GraphicItemInterface

import { LinesGraphicItem } from '../../../../../../org/allbinary/graphics/j2me/workarea/tools/LinesGraphicItem.js';
//not GWT import const LinesGraphicItem

import { MouseStrings } from '../../../../../../org/allbinary/graphics/j2me/workarea/tools/MouseStrings.js';
//not GWT import const MouseStrings

import { Points } from '../../../../../../org/allbinary/graphics/j2me/workarea/tools/Points.js';
//not GWT import const Points

import { ToolFactory } from '../../../../../../org/allbinary/graphics/j2me/workarea/tools/ToolFactory.js';
//not GWT import const ToolFactory

import { MyGraphicItemEvent } from '../../../../../../org/allbinary/graphics/j2me/workarea/tools/event/MyGraphicItemEvent.js';
//not GWT import const MyGraphicItemEvent

import { MyGraphicItemEventListener } from '../../../../../../org/allbinary/graphics/j2me/workarea/tools/event/MyGraphicItemEventListener.js';
//not GWT import const MyGraphicItemEventListener

import { MyGraphicItemEventService } from '../../../../../../org/allbinary/graphics/j2me/workarea/tools/event/MyGraphicItemEventService.js';
//not GWT import const MyGraphicItemEventService

import { RandomRotationFactory } from '../../../../../../org/allbinary/graphics/pipeline/RandomRotationFactory.js';
//not GWT import const RandomRotationFactory

import { LOGGING } from '../../../../../../org/allbinary/log/LOGGING.js';
//not GWT import const LOGGING

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { GuiLog } from '../../../../../../org/allbinary/logic/communication/log/GuiLog.js';
//not GWT import const GuiLog

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { PositionStrings } 
const PositionStrings = globalThis.org.allbinary.math.PositionStrings;
type PositionStrings<T = any, U = any> = typeof PositionStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PositionStrings;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JPanel } from './JPanel.js';
//not GWT import - same folder const JPanel
import { MouseListener } from './MouseListener.js';
//not GWT import - same folder const MouseListener
import { MouseMotionListener } from './MouseMotionListener.js';
//not GWT import - same folder const MouseMotionListener
import { KeyListener } from './KeyListener.js';
//not GWT import - same folder const KeyListener
import { IntegerDimension } from './IntegerDimension.js';
//not GWT import - same folder const IntegerDimension
import { CanvasTreeLabel } from './CanvasTreeLabel.js';
//not GWT import - same folder const CanvasTreeLabel
import { Color } from './Color.js';
//not GWT import - same folder const Color
import { Grid } from './Grid.js';
//not GWT import - same folder const Grid
import { Dimension } from './Dimension.js';
//not GWT import - same folder const Dimension
import { CanvasDom } from './CanvasDom.js';
//not GWT import - same folder const CanvasDom
import { GridLayout } from './GridLayout.js';
//not GWT import - same folder const GridLayout
import { Graphics } from './Graphics.js';
//not GWT import - same folder const Graphics
import { MouseEvent } from './MouseEvent.js';
//not GWT import - same folder const MouseEvent
import { KeyEvent } from './KeyEvent.js';
//not GWT import - same folder const KeyEvent

export class CanvasJPanel extends javax.swing.JPanel implements java.awt.event.MouseListener, java.awt.event.MouseMotionListener, java.awt.event.KeyListener, MyGraphicItemEventListener {
        

    private static frame: number = 0;

    private static readonly gridColor: Color = new Color(BasicColorFactory.getInstance()!.WHITE.intValue());

    private static readonly backgroundColor: Color = new Color(BasicColorFactory.getInstance()!.CLEAR_COLOR.intValue());

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly guiLog: GuiLog = GuiLog.getInstance()!;

    private readonly gameInputStrings: GameInputStrings = GameInputStrings.getInstance()!;

    private selectedTool: GraphicItemInterface = 
                null
            ;

    private graphicItemHashMap: HashMap<any, any>;

    private canvasDimension: IntegerDimension;

    private angle: number = 0;

    private canvasTreeNode: DefaultMutableTreeNode;

    private frameLabel: CanvasTreeLabel;

    private workAreaJTreeJPanel: WorkAreaJTreeJPanel;

    private readonly grid: Grid;

public constructor (workAreaJTreeJPanel: WorkAreaJTreeJPanel, dimension: Dimension, x: number, y: number){

            super();
        this.grid= new Grid();
    

 try { this.workAreaJTreeJPanel= workAreaJTreeJPanel;
    
this.initComponents();
    
this.initMyComponents();
    
this.setSize(dimension);
    
this.setCanvasSize(x, y);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(LOGGING.contains(LOGGING.GRAPHICSCREATION))
                        
                                    {
                                    this.guiLog!.put("Constructor Error", this, "contructor", e);
    

                                    }
                                

 }
   }
 
}


public constructor (workAreaJTreeJPanel: WorkAreaJTreeJPanel, dimension: Dimension, canvasDom: CanvasDom){

            super();
        this.grid= new Grid(canvasDom!.getGrid());
    

 try { this.workAreaJTreeJPanel= workAreaJTreeJPanel;
    
this.initComponents();
    
this.initMyComponents();
    
this.setSize(dimension);
    
this.setCanvasSize(canvasDom!.getDimension()!.getWidth(), canvasDom!.getDimension()!.getHeight());
    
this.graphicItemHashMap= canvasDom!.getGraphicItemHashMap();
    

    let graphicItemArray: any[] = this.graphicItemHashMap!.keys().()!;;
    

    let size: number = graphicItemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let graphicItemTreeNode: MutableTreeNode = graphicItemArray[index]! as MutableTreeNode;;
    
this.canvasTreeNode!.add(graphicItemTreeNode);
    
}

this.repaint();
    
this.setAngle(canvasDom!.getAngle());
    
this.workAreaJTreeJPanel!.updateTree();
    
this.workAreaJTreeJPanel!.expand();
    
this.workAreaJTreeJPanel!.repaint();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(LOGGING.contains(LOGGING.GRAPHICSCREATION))
                        
                                    {
                                    this.guiLog!.put("Constructor Error", this, "contructor", e);
    

                                    }
                                

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    initMyComponents(){
this.frameLabel= new CanvasTreeLabel("FrameLabel" +new Integer(CanvasJPanel.frame).toString());
    
this.canvasTreeNode= new DefaultMutableTreeNode(this.frameLabel);
    
CanvasJPanel.frame++;
    
this.workAreaJTreeJPanel!.add(this.getTreeNode());
    
this.graphicItemHashMap= StdUtil.getInstance()!.createHashMap();
    
this.grid.grid= PointFactory.getInstance()!.createXY(0, 0);
    
this.setCanvasDimension(new IntegerDimension(0, 0));
    
this.selectedTool= 
                                        null
                                    ;
    
this.addKeyListener(this);
    
this.addMouseListener(this);
    
this.addMouseMotionListener(this);
    
MyGraphicItemEventService.addListener(this);
    
}


    public getTreeNode(): MutableTreeNode{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.canvasTreeNode;
    
}


    initComponents(){
setLayout(new java.awt.GridLayout(1, 1));
    
}


                //@Throws(Exception.constructor)
            
    public setCanvasSize(x: number, y: number){
this.grid.isGridPossible= true;
    

                        if(x <= 0)
                        
                                    {
                                    this.grid.isGridPossible= false;
    



                            throw new GraphicsException("X Size Error: " +x, this, "setWorkAreaSize");
                    

                                    }
                                

                        if(y <= 0)
                        
                                    {
                                    this.grid.isGridPossible= false;
    



                            throw new GraphicsException("Y Size Error: " +y, this, "setWorkAreaSize");
                    

                                    }
                                

                        if(x > this.getWidth())
                        
                                    {
                                    this.grid.isGridPossible= false;
    

                                    }
                                

                        if(y > this.getHeight())
                        
                                    {
                                    this.grid.isGridPossible= false;
    

                                    }
                                
this.setCanvasDimension(new IntegerDimension(x, y));
    
this.grid.isChanged= true;
    
}

setGrid(...args: any[]): any {
   
    if (args.length === 1) return this.setGrid$overload1(args[0]);
   
    if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') return this.setGrid$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: setGrid'); }
  
    public setGrid$overload1(point: GPoint){
this.setGrid(point.getX(), point.getY());
    
}


    public setGrid$overload2(xSize: number, ySize: number){

 try { 
                        if(xSize >= getCanvasDimension()!.getWidth() /2 || xSize < 1)
                        
                                    {
                                    


                            throw new GraphicsException("X Size Error: " +xSize +" WorkArea X: " +getCanvasDimension()!.getWidth(), this, "setGrid");
                    

                                    }
                                

                        if(ySize >= getCanvasDimension()!.getHeight() /2 || ySize < 1)
                        
                                    {
                                    


                            throw new GraphicsException("Y Size Error" +ySize +" WorkArea Y: " +getCanvasDimension()!.getHeight(), this, "setGrid");
                    

                                    }
                                
this.grid.grid= PointFactory.getInstance()!.createXY(xSize, ySize);
    
this.grid.isChanged= true;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public setDefaultGrid(){

    let xPixelsPerWorkAreaPixel: number = this.getWidth() /this.getCanvasDimension()!.getWidth();;
    

    let yPixelsPerWorkAreaPixel: number = this.getHeight() /this.getCanvasDimension()!.getHeight();;
    
this.setGrid(1, 1);
    
this.grid.isChanged= true;
    
}


    public getAngle(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.angle;
    
}


    public setAngle(angle: number){
this.angle= angle;
    
}


    public addAngle(angle: number){
this.setAngle(this.angle +angle);
    
}


    public explodeAll(){

    let newPoints: BasicArrayList = new BasicArrayListD();;
    

    let graphicItemArray: any[] = this.getGraphicItemHashMap()!.keys().()!;;
    

    let size: number = graphicItemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let graphicItemNode: MutableTreeNode = graphicItemArray[index]! as MutableTreeNode;;
    

    let graphicItem: GraphicItemInterface = this.getGraphicItemHashMap()!.get(graphicItemNode) as GraphicItemInterface;;
    

                        if(graphicItem!.getName() == LinesGraphicItem.getStaticName())
                        
                                    {
                                    
        while(graphicItem!.getPointsInterface()!.getSize() > 2)
        {

    let newGraphicItem: GraphicItemInterface = GraphicItemFactory.getInstance()!.getInstance(graphicItem!.getName())!.getInstance(this)!;;
    

    let pointOne: GPoint = GPoint.getInstance(graphicItem!.removePoint())!;;
    

    let pointTwo: GPoint = GPoint.getInstance(graphicItem!.removePoint())!;;
    

                        if(pointOne != 
                                    null
                                 && pointTwo != 
                                    null
                                )
                        
                                    {
                                    newGraphicItem!.addPoint(pointOne);
    
newGraphicItem!.addPoint(pointTwo);
    

                                    }
                                
newPoints!.add(newGraphicItem);
    
}


                                    }
                                
}


    let size2: number = newPoints!.size()!;;
    




                        for (
    let index: number = 0;index < size2; index++)
        {

    let newGraphicItem: GraphicItemInterface = newPoints!.get(index) as GraphicItemInterface;;
    
this.canvasTreeNode!.add(newGraphicItem!.getTreeNode());
    
this.getGraphicItemHashMap()!.put(newGraphicItem!.getTreeNode(), newGraphicItem);
    
}

this.workAreaJTreeJPanel!.updateTree();
    
this.workAreaJTreeJPanel!.expand();
    
this.workAreaJTreeJPanel!.repaint();
    
}


                //@Throws(Exception.constructor)
            
    public explode(howMuch: number, explosionType: number){

    let graphicItemArray: any[] = this.getGraphicItemHashMap()!.keys().()!;;
    

    let size: number = graphicItemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let item: GraphicItemInterface = this.getGraphicItemHashMap()!.get(graphicItemArray[index]!) as GraphicItemInterface;;
    

    let basicArrayList: BasicArrayList = VectorExplosionGenerator.getInstance()!.createList(item.getPointsInterface()!.getPoints(), howMuch, VectorExplosionGenerator.getInstance()!.RANDOM)!;;
    

    let newPoints: Points = new Points();;
    
newPoints!.addPoints(basicArrayList);
    
item.setPointsInterface(newPoints);
    

    let angleDelta: number = RandomRotationFactory.getInstance()!.getNextRandomAngle(howMuch)!;;
    
item.setAngle(angleDelta);
    
}

this.repaint();
    
}


                //@Throws(Exception.constructor)
            
    public mirror(){

    let width: number = this.getCanvasDimension()!.getWidth()!;;
    

    let graphicItemArray: any[] = this.getGraphicItemHashMap()!.keys().()!;;
    

    let size: number = graphicItemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let item: GraphicItemInterface = this.getGraphicItemHashMap()!.get(graphicItemArray[index]!) as GraphicItemInterface;;
    

    let basicArrayList: BasicArrayList = VectorMirrorGenerator.getInstance()!.getInstance(item.getPointsInterface()!.getPoints(), width)!;;
    

    let newPoints: Points = new Points();;
    
newPoints!.addPoints(basicArrayList);
    
item.setPointsInterface(newPoints);
    
}

this.repaint();
    
}


                //@Throws(Exception.constructor)
            
    public center(){
new VectorCenterGenerator().transform(this.getGraphicItemHashMap());
    
this.repaint();
    
}


    public setNewTool(){

 try { StatusFactory.getInstance()!.setStatus("Tool Selected");
    
this.selectedTool= ToolFactory.getInstance()!.getSelectedToolFactory()!.getInstance(this);
    

    let newNode: MutableTreeNode = this.selectedTool!.getTreeNode()!;;
    
this.getGraphicItemHashMap()!.put(newNode, this.selectedTool);
    
this.canvasTreeNode!.add(newNode);
    

                        if(this.getSelectedTool() == 
                                    null
                                )
                        
                                    {
                                    


                            throw new GraphicsException("No Tool Selected", this, "setSelectedTool");
                    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public duplicateGraphicItem(graphicItem: GraphicItemInterface){

    let graphicItemClone: GraphicItemInterface = graphicItem!.duplicate()!;;
    
this.getGraphicItemHashMap()!.put(graphicItemClone!.getTreeNode(), graphicItemClone);
    
this.canvasTreeNode!.add(graphicItemClone!.getTreeNode());
    
}


                //@Throws(Exception.constructor)
            
    public duplicateGraphicItemHashMap(hashMap: HashMap<any, any>){

    let mutableTreeNodeArray: any[] = hashMap!.keys().()!;;
    

    let size: number = mutableTreeNodeArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let treeNode: MutableTreeNode = mutableTreeNodeArray[index]! as MutableTreeNode;;
    

    let graphicItem: GraphicItemInterface = hashMap!.get(treeNode) as GraphicItemInterface;;
    
this.duplicateGraphicItem(graphicItem);
    
}

}


    public getGraphicItemHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.graphicItemHashMap;
    
}


    public getXPixelsPerWorkAreaPixel(): number{

    let x: number = this.getGrid()!.grid.getX() *(this.getWidth() -10) /this.getCanvasDimension()!.getWidth();;
    

                        if(this.getGrid()!.getZoom() == 1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return x;
    

                        }
                            
}


    public getYPixelsPerWorkAreaPixel(): number{

    let y: number = this.getGrid()!.grid.getY() *(this.getHeight() -10) /this.getCanvasDimension()!.getHeight();;
    

                        if(this.getGrid()!.getZoom() == 1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return y;
    

                        }
                            
}


    public getSelectedTool(): GraphicItemInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.selectedTool;
    
}


    public drawItems(graphics: Graphics){

    let angleDouble: number = new number(this.angle);;
    

    let graphicItemArray: any[] = this.getGraphicItemHashMap()!.keys().()!;;
    

    let size: number = graphicItemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let item: GraphicItemInterface = this.getGraphicItemHashMap()!.get(graphicItemArray[index]!) as GraphicItemInterface;;
    
item.paint(graphics, angleDouble, this.getCanvasDimension(), this.getXPixelsPerWorkAreaPixel(), this.getYPixelsPerWorkAreaPixel());
    
}

}


    public drawGrid(graphics: Graphics){

    let xAdjust: number = (this.getWidth() % this.getXPixelsPerWorkAreaPixel()) /2;;
    

    let yAdjust: number = (this.getHeight() % this.getYPixelsPerWorkAreaPixel()) /2;;
    

    let xLeft: number = xAdjust;;
    

    let yUpper: number = yAdjust;;
    

    let xRight: number = this.getWidth() -xAdjust;;
    

    let yLower: number = this.getHeight() -yAdjust;;
    
graphics.setColor(CanvasJPanel.gridColor);
    




                        for (
    let value: number = yAdjust;value <= this.getHeight() -yAdjust; )
        {
graphics.drawLine(xLeft, value, xRight, value);
    
}





                        for (
    let value: number = xAdjust;value <= this.getWidth() -xAdjust; )
        {
graphics.drawLine(value, yUpper, value, yLower);
    
}

}


    public paint(graphics: Graphics){

 try { 
                        if(this.getGrid()!.isChanged)
                        
                                    {
                                    graphics.setColor(CanvasJPanel.backgroundColor);
    
graphics.fillRect(0, 0, getWidth(), getHeight());
    

                        if(this.getGrid()!.getZoom() > 2 && this.getGrid()!.isGridOn && this.getGrid()!.isGridPossible)
                        
                                    {
                                    this.setDefaultGrid();
    
this.drawGrid(graphics);
    

                                    }
                                
this.drawItems(graphics);
    
graphics.drawString(new number(this.getAngle()).toString(), this.getWidth() -75, this.getHeight() -15);
    
this.grid.isChanged= false;
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

 }
   }
 
}


    public repaint(){

                        if(this.grid != 
                                    null
                                )
                        
                                    {
                                    this.grid.isChanged= true;
    

                                    }
                                
super.repaint();
    
}


                //@Throws(Exception.constructor)
            
    public toDom(): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new CanvasDom(this).toDom();;
    
}


    public changed(){
this.grid.isChanged= true;
    
}


    public mouseClicked(mouseEvent: java.awt.event.MouseEvent){
StatusFactory.getInstance()!.setStatusNoLog(MouseStrings.getInstance()!.MOUSE_CLICKED_LABEL +this.logMouseEvent(mouseEvent));
    

                        if(this.getSelectedTool() != 
                                    null
                                 && this.getSelectedTool()!.isActive())
                        
                                    {
                                    
    let graphicItem: GraphicItemInterface = this.getSelectedTool()!;;
    
graphicItem!.mouseClicked(mouseEvent, this.getXPixelsPerWorkAreaPixel(), this.getYPixelsPerWorkAreaPixel());
    

                                    }
                                
                        else {
                            this.setNewTool();
    

    let graphicItem: GraphicItemInterface = this.getSelectedTool()!;;
    

                        if(graphicItem != 
                                    null
                                )
                        
                                    {
                                    graphicItem!.mouseClicked(mouseEvent, this.getXPixelsPerWorkAreaPixel(), this.getYPixelsPerWorkAreaPixel());
    

                                    }
                                

                        }
                            
this.grid.isChanged= true;
    
this.repaint();
    
this.workAreaJTreeJPanel!.updateTree();
    
this.workAreaJTreeJPanel!.expand();
    
this.workAreaJTreeJPanel!.repaint();
    
}


    public mouseEntered(mouseEvent: java.awt.event.MouseEvent){
StatusFactory.getInstance()!.setStatusNoLog(this.logMouseEvent(mouseEvent));
    
}


    public mouseExited(mouseEvent: java.awt.event.MouseEvent){
StatusFactory.getInstance()!.setStatusNoLog(this.logMouseEvent(mouseEvent));
    
}


    public mousePressed(mouseEvent: java.awt.event.MouseEvent){
StatusFactory.getInstance()!.setStatusNoLog(MouseStrings.getInstance()!.MOUSE_PRESSED_LABEL +this.logMouseEvent(mouseEvent));
    

                        if(this.getSelectedTool() != 
                                    null
                                )
                        
                                    {
                                    
    let graphicItem: GraphicItemInterface = this.getSelectedTool()!;;
    
graphicItem!.mousePressed(mouseEvent, this.getXPixelsPerWorkAreaPixel(), this.getYPixelsPerWorkAreaPixel());
    

                                    }
                                
this.requestFocus();
    
this.grid.isChanged= true;
    
this.repaint();
    
}


    public mouseReleased(mouseEvent: java.awt.event.MouseEvent){
StatusFactory.getInstance()!.setStatusNoLog(MouseStrings.getInstance()!.MOUSE_RELEASED_LABEL +this.logMouseEvent(mouseEvent));
    

    let graphicItem: GraphicItemInterface = this.getSelectedTool()!;;
    

                        if(graphicItem != 
                                    null
                                )
                        
                                    {
                                    graphicItem!.mouseReleased(mouseEvent, this.getXPixelsPerWorkAreaPixel(), this.getYPixelsPerWorkAreaPixel());
    

                                    }
                                
this.requestFocus();
    
this.grid.isChanged= true;
    
this.repaint();
    
}


    public mouseDragged(mouseEvent: java.awt.event.MouseEvent){
StatusFactory.getInstance()!.setStatusNoLog(MouseStrings.getInstance()!.MOUSE_DRAGGED_LABEL +this.logMouseEvent(mouseEvent));
    

    let graphicItem: GraphicItemInterface = this.getSelectedTool()!;;
    

                        if(graphicItem != 
                                    null
                                )
                        
                                    {
                                    graphicItem!.mouseDragged(mouseEvent, this.getXPixelsPerWorkAreaPixel(), this.getYPixelsPerWorkAreaPixel());
    

                                    }
                                
this.requestFocus();
    
this.grid.isChanged= true;
    
this.repaint();
    
}


    public mouseMoved(mouseEvent: java.awt.event.MouseEvent){
StatusFactory.getInstance()!.setStatusNoLog(MouseStrings.getInstance()!.MOUSE_MOVED_LABEL +this.logMouseEvent(mouseEvent));
    

                        if(this.getSelectedTool() != 
                                    null
                                 && this.getSelectedTool()!.isActive())
                        
                                    {
                                    
    let graphicItem: GraphicItemInterface = this.getSelectedTool()!;;
    
graphicItem!.mouseMoved(mouseEvent, this.getXPixelsPerWorkAreaPixel(), this.getYPixelsPerWorkAreaPixel());
    

                                    }
                                
this.requestFocus();
    
this.grid.isChanged= true;
    
this.repaint();
    
}


    logMouseEvent(mouseEvent: java.awt.event.MouseEvent): string{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(PositionStrings.getInstance()!.X_LABEL);
    
stringBuffer!.appendint(mouseEvent!.getX() /this.getXPixelsPerWorkAreaPixel());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(PositionStrings.getInstance()!.Y_LABEL);
    
stringBuffer!.appendint(mouseEvent!.getY() /this.getYPixelsPerWorkAreaPixel());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public keyPressed(keyEvent: java.awt.event.KeyEvent){
StatusFactory.getInstance()!.setStatus("Key Pressed");
    

 try { 
    let graphicItemArray: any[] = this.graphicItemHashMap!.keys().()!;;
    

    let size: number = graphicItemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let graphicItemInterface: GraphicItemInterface = this.graphicItemHashMap!.get(graphicItemArray[index]!) as GraphicItemInterface;;
    

    let keyCode: number = keyEvent!.getKeyCode()!;;
    

                        if(graphicItemInterface!.isActive())
                        
                                    {
                                    
                        if(keyCode == keyEvent!.VK_UP)
                        
                                    {
                                    graphicItemInterface!.translate(0,  -1);
    

                                    }
                                
                             else 
                        if(keyCode == keyEvent!.VK_DOWN)
                        
                                    {
                                    graphicItemInterface!.translate(0, 1);
    

                                    }
                                
                             else 
                        if(keyCode == keyEvent!.VK_LEFT)
                        
                                    {
                                    graphicItemInterface!.translate( -1, 0);
    

                                    }
                                
                             else 
                        if(keyCode == keyEvent!.VK_RIGHT)
                        
                                    {
                                    graphicItemInterface!.translate(1, 0);
    

                                    }
                                

                                    }
                                
}

 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, this.gameInputStrings!.KEY_PRESSED, e);
    

 }
   }
 

                        if(this.getSelectedTool() != 
                                    null
                                 && this.getSelectedTool()!.isActive())
                        
                                    {
                                    StatusFactory.getInstance()!.setStatus("Key Pressed for Tool");
    

    let graphicItem: GraphicItemInterface = this.getSelectedTool()!;;
    
graphicItem!.keyPressed(keyEvent);
    

                                    }
                                
                        else {
                            this.setNewTool();
    

                        }
                            
this.grid.isChanged= true;
    
this.repaint();
    
}


    public keyReleased(keyEvent: java.awt.event.KeyEvent){
}


    public keyTyped(keyEvent: java.awt.event.KeyEvent){
}


    public delete(evt: MyGraphicItemEvent){
this.getGraphicItemHashMap()!.remove(evt.getTreeNode());
    
this.workAreaJTreeJPanel!.updateTree();
    
this.workAreaJTreeJPanel!.expand();
    
this.workAreaJTreeJPanel!.repaint();
    
}


    public deselect(evt: MyGraphicItemEvent){

    let graphicItemInterface: GraphicItemInterface = this.getGraphicItemHashMap()!.get(evt.getTreeNode()) as GraphicItemInterface;;
    

                        if(graphicItemInterface != 
                                    null
                                )
                        
                                    {
                                    graphicItemInterface!.setColor(Color.WHITE);
    
graphicItemInterface!.deactivate();
    
this.workAreaJTreeJPanel!.repaint();
    

                                    }
                                
}


    public highlight(evt: MyGraphicItemEvent){

    let graphicItemInterface: GraphicItemInterface = this.getGraphicItemHashMap()!.get(evt.getTreeNode()) as GraphicItemInterface;;
    

                        if(graphicItemInterface != 
                                    null
                                )
                        
                                    {
                                    graphicItemInterface!.setColor(Color.YELLOW);
    
graphicItemInterface!.activate();
    
this.workAreaJTreeJPanel!.repaint();
    

                                    }
                                
}

duplicate(...args: any[]): any {
   
    if (args.length === 0) return this.duplicate$overload1();
   
    if (args.length === 1) return this.duplicate$overload2(args[0]);
   
   throw new TypeError('No matching overload: duplicate'); }
  
                //@Throws(Exception.constructor)
            
    public duplicate$overload1(): CanvasJPanel{

    let newCanvasJPanel: CanvasJPanel = new CanvasJPanel(this.workAreaJTreeJPanel, this.getSize(), this.getCanvasDimension()!.getWidth(), this.getCanvasDimension()!.getHeight());;
    
newCanvasJPanel!.setGrid(this.getGrid()!.getGrid());
    
newCanvasJPanel!.setAngle(this.getAngle());
    
newCanvasJPanel!.duplicateGraphicItemHashMap(this.getGraphicItemHashMap());
    
this.workAreaJTreeJPanel!.updateTree();
    
this.workAreaJTreeJPanel!.expand();
    
this.workAreaJTreeJPanel!.repaint();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newCanvasJPanel;
    
}


                //@Throws(Exception.constructor)
            
    public duplicate$overload2(event: MyGraphicItemEvent){

    let treeNode: MutableTreeNode = event.getTreeNode()!;;
    

    let graphicItem: GraphicItemInterface = this.getGraphicItemHashMap()!.get(treeNode) as GraphicItemInterface;;
    

                        if(graphicItem != 
                                    null
                                )
                        
                                    {
                                    this.duplicateGraphicItem(graphicItem);
    
this.workAreaJTreeJPanel!.updateTree();
    
this.workAreaJTreeJPanel!.expand();
    
this.workAreaJTreeJPanel!.repaint();
    

                                    }
                                
}


    public rotate(event: MyGraphicItemEvent){

    let treeNode: MutableTreeNode = event.getTreeNode()!;;
    

    let graphicItem: GraphicItemInterface = this.getGraphicItemHashMap()!.get(treeNode) as GraphicItemInterface;;
    

                        if(graphicItem != 
                                    null
                                )
                        
                                    {
                                    graphicItem!.addAngle(event.getAngle());
    

                                    }
                                
}


    public getCanvasDimension(): IntegerDimension{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.canvasDimension;
    
}


    public setCanvasDimension(canvasDimension: IntegerDimension){
this.canvasDimension= canvasDimension;
    
}


    public getGrid(): Grid{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.grid;
    
}


}

