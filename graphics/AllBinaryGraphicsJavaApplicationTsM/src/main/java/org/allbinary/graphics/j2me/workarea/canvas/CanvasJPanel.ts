
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
        



            import Vector from "@ohos.util.Vector";
        
import { awt } from "../../../../../../java/awt.js";

    
import { HashMap } from "../../../../../../java/util/HashMap.js";

    

//import { Vector } from "../../../../../../java/util/Vector.js";

    
import { DefaultMutableTreeNode } from "../../../../../../javax/swing/tree/DefaultMutableTreeNode.js";

    
import { MutableTreeNode } from "../../../../../../javax/swing/tree/MutableTreeNode.js";

    
import { VectorExplosionGenerator } from "../../../../../../org/allbinary/animation/VectorExplosionGenerator.js";

    
import { VectorMirrorGenerator } from "../../../../../../org/allbinary/animation/VectorMirrorGenerator.js";

    
import { VectorCenterGenerator } from "../../../../../../org/allbinary/animation/vector/VectorCenterGenerator.js";

    
import { GameInputStrings } from "../../../../../../org/allbinary/game/input/GameInputStrings.js";

    
import { GPoint } from "../../../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../../../org/allbinary/graphics/PointFactory.js";

    
import { BasicColorFactory } from "../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { GraphicsException } from "../../../../../../org/allbinary/graphics/j2me/GraphicsException.js";

    
import { StatusFactory } from "../../../../../../org/allbinary/graphics/j2me/StatusFactory.js";

    
import { WorkAreaJTreeJPanel } from "../../../../../../org/allbinary/graphics/j2me/workarea/WorkAreaJTreeJPanel.js";

    
import { GraphicItemFactory } from "../../../../../../org/allbinary/graphics/j2me/workarea/tools/GraphicItemFactory.js";

    
import { GraphicItemInterface } from "../../../../../../org/allbinary/graphics/j2me/workarea/tools/GraphicItemInterface.js";

    
import { LinesGraphicItem } from "../../../../../../org/allbinary/graphics/j2me/workarea/tools/LinesGraphicItem.js";

    
import { MouseStrings } from "../../../../../../org/allbinary/graphics/j2me/workarea/tools/MouseStrings.js";

    
import { Points } from "../../../../../../org/allbinary/graphics/j2me/workarea/tools/Points.js";

    
import { ToolFactory } from "../../../../../../org/allbinary/graphics/j2me/workarea/tools/ToolFactory.js";

    
import { MyGraphicItemEvent } from "../../../../../../org/allbinary/graphics/j2me/workarea/tools/event/MyGraphicItemEvent.js";

    
import { MyGraphicItemEventListener } from "../../../../../../org/allbinary/graphics/j2me/workarea/tools/event/MyGraphicItemEventListener.js";

    
import { MyGraphicItemEventService } from "../../../../../../org/allbinary/graphics/j2me/workarea/tools/event/MyGraphicItemEventService.js";

    
import { RandomRotationFactory } from "../../../../../../org/allbinary/graphics/pipeline/RandomRotationFactory.js";

    
import { LOGGING } from "../../../../../../org/allbinary/log/LOGGING.js";

    
import { GuiLog } from "../../../../../../org/allbinary/logic/communication/log/GuiLog.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PositionStrings } from "../../../../../../org/allbinary/math/PositionStrings.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

export class CanvasJPanel extends javax.swing.JPanel
                , java.awt.event.MouseListener
                , java.awt.event.MouseMotionListener
                , java.awt.event.KeyListener
                , MyGraphicItemEventListener {
        

    private frame: number = 0;
        
        

    private static readonly gridColor: Color = new Color(BasicColorFactory.getInstance()!.WHITE.toInt());
        
        

    private static readonly backgroundColor: Color = new Color(BasicColorFactory.getInstance()!.CLEAR_COLOR.toInt());
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly guiLog: GuiLog = GuiLog.getInstance()!;
        
        

    private readonly gameInputStrings: GameInputStrings = GameInputStrings.getInstance()!;
        
        

    private selectedTool: GraphicItemInterface = 
                null
            ;
        
        

    private graphicItemHashMap: HashMap<any, any>

    private canvasDimension: IntegerDimension

    private angle: number = 0;
        
        

    private canvasTreeNode: DefaultMutableTreeNode

    private frameLabel: CanvasTreeLabel

    private workAreaJTreeJPanel: WorkAreaJTreeJPanel

    private readonly grid: Grid
public constructor (workAreaJTreeJPanel: WorkAreaJTreeJPanel, dimension: Dimension, x: number, y: number){

            super();
            var workAreaJTreeJPanel = workAreaJTreeJPanel
var dimension = dimension
var x = x
var y = y
this.grid= new Grid();
    

        try {
            this.workAreaJTreeJPanel= workAreaJTreeJPanel;
    
initComponents();
    
initMyComponents();
    
this.setSize(dimension);
    
this.setCanvasSize(x, y);
    

                //: 
} catch(e) 
            {

                        if(LOGGING.contains(LOGGING.GRAPHICSCREATION))
                        
                                    {
                                    guiLog!.put("Constructor Error", this, "contructor", e);
    

                                    }
                                
}

}

public constructor (workAreaJTreeJPanel: WorkAreaJTreeJPanel, dimension: Dimension, canvasDom: CanvasDom){

            super();
            var workAreaJTreeJPanel = workAreaJTreeJPanel
var dimension = dimension
var canvasDom = canvasDom
this.grid= new Grid(canvasDom!.getGrid());
    

        try {
            this.workAreaJTreeJPanel= workAreaJTreeJPanel;
    
initComponents();
    
initMyComponents();
    
this.setSize(dimension);
    
this.setCanvasSize(canvasDom!.getDimension()!.getWidth(), canvasDom!.getDimension()!.getHeight());
    
this.graphicItemHashMap= canvasDom!.getGraphicItemHashMap();
    

    var graphicItemArray: any[] = graphicItemHashMap!.keys.toTypedArray()!;
        
        
;
    

    var size: number = graphicItemArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var graphicItemTreeNode: MutableTreeNode = graphicItemArray[index]! as MutableTreeNode;
        
        
;
    
canvasTreeNode!.add(graphicItemTreeNode);
    
}

this.repaint();
    
this.setAngle(canvasDom!.getAngle());
    
this.workAreaJTreeJPanel!.updateTree();
    
this.workAreaJTreeJPanel!.expand();
    
this.workAreaJTreeJPanel!.repaint();
    

                //: 
} catch(e) 
            {

                        if(LOGGING.contains(LOGGING.GRAPHICSCREATION))
                        
                                    {
                                    guiLog!.put("Constructor Error", this, "contructor", e);
    

                                    }
                                
}

}


                //@Throws(Error::class)
            
    initMyComponents(){
this.frameLabel= new CanvasTreeLabel("FrameLabel" +new Integer(frame).
                            toString());
    
this.canvasTreeNode= new DefaultMutableTreeNode(this.frameLabel);
    
frame++;
    
this.workAreaJTreeJPanel!.add(this.getTreeNode());
    
this.graphicItemHashMap= new HashMap<any, any>();
    
this.grid.grid= PointFactory.getInstance()!.getInstance(0, 0);
    
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


                //@Throws(Error::class)
            
    public setCanvasSize(x: number, y: number){
var x = x
var y = y
this.grid.isGridPossible= true;
    

                        if(x <= 0)
                        
                                    {
                                    this.grid.isGridPossible= false;
    



                            throw new GraphicsException("X Size Error: " +x, this, "setWorkAreaSize")

                                    }
                                

                        if(y <= 0)
                        
                                    {
                                    this.grid.isGridPossible= false;
    



                            throw new GraphicsException("Y Size Error: " +y, this, "setWorkAreaSize")

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


    public setGrid(point: GPoint){
var point = point
this.setGrid(point.getX(), point.getY());
    
}


    public setGrid(xSize: number, ySize: number){
var xSize = xSize
var ySize = ySize

        try {
            
                        if(xSize >= getCanvasDimension()!.getWidth() /2 || xSize < 1)
                        
                                    {
                                    


                            throw new GraphicsException("X Size Error: " +xSize +" WorkArea X: " +getCanvasDimension()!.getWidth(), this, "setGrid")

                                    }
                                

                        if(ySize >= getCanvasDimension()!.getHeight() /2 || ySize < 1)
                        
                                    {
                                    


                            throw new GraphicsException("Y Size Error" +ySize +" WorkArea Y: " +getCanvasDimension()!.getHeight(), this, "setGrid")

                                    }
                                
this.grid.grid= PointFactory.getInstance()!.getInstance(xSize, ySize);
    
this.grid.isChanged= true;
    

                //: 
} catch(e) 
            {
}

}


                //@Throws(Error::class)
            
    public setDefaultGrid(){

    var xPixelsPerWorkAreaPixel: number = this.getWidth() /this.getCanvasDimension()!.getWidth();
        
        
;
    

    var yPixelsPerWorkAreaPixel: number = this.getHeight() /this.getCanvasDimension()!.getHeight();
        
        
;
    
this.setGrid(1, 1);
    
this.grid.isChanged= true;
    
}


    public getAngle(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.angle;
    
}


    public setAngle(angle: number){
var angle = angle
this.angle= angle;
    
}


    public addAngle(angle: number){
var angle = angle
this.setAngle(this.angle +angle);
    
}


    public explodeAll(){

    var newPoints: Vector = new Vector();
        
        
;
    

    var graphicItemArray: any[] = this.getGraphicItemHashMap()!.keys.toTypedArray()!;
        
        
;
    

    var size: number = graphicItemArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var graphicItemNode: MutableTreeNode = graphicItemArray[index]! as MutableTreeNode;
        
        
;
    

    var graphicItem: GraphicItemInterface = this.getGraphicItemHashMap()!.get(graphicItemNode as Object);

                         as GraphicItemInterface;
        
        
;
    

                        if(graphicItem!.getName() == LinesGraphicItem.getStaticName())
                        
                                    {
                                    
        while(graphicItem!.getPointsInterface()!.getSize() > 2)
        {

    var newGraphicItem: GraphicItemInterface = GraphicItemFactory.getInstance()!.getInstance(graphicItem!.getName())!.getInstance(this)!;
        
        
;
    

    var pointOne: GPoint = new GPoint(graphicItem!.removePoint());
        
        
;
    

    var pointTwo: GPoint = new GPoint(graphicItem!.removePoint());
        
        
;
    

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


    var size2: number = newPoints!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size2; index++)
        {

    var newGraphicItem: GraphicItemInterface = newPoints!.get(index);

                         as GraphicItemInterface;
        
        
;
    
canvasTreeNode!.add(newGraphicItem!.getTreeNode());
    
this.getGraphicItemHashMap()!.put(newGraphicItem!.getTreeNode(), newGraphicItem);
    
}

this.workAreaJTreeJPanel!.updateTree();
    
this.workAreaJTreeJPanel!.expand();
    
this.workAreaJTreeJPanel!.repaint();
    
}


                //@Throws(Error::class)
            
    public explode(howMuch: number, explosionType: number){
var howMuch = howMuch
var explosionType = explosionType

    var graphicItemArray: any[] = this.getGraphicItemHashMap()!.keys.toTypedArray()!;
        
        
;
    

    var size: number = graphicItemArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var item: GraphicItemInterface = this.getGraphicItemHashMap()!.get(graphicItemArray[index]!);

                         as GraphicItemInterface;
        
        
;
    

    var basicArrayList: BasicArrayList = VectorExplosionGenerator.getInstance()!.getInstance(item.getPointsInterface()!.getPoints(), howMuch, VectorExplosionGenerator.getInstance()!.RANDOM)!;
        
        
;
    

    var newPoints: Points = new Points();
        
        
;
    
newPoints!.addPoints(basicArrayList);
    
item.setPointsInterface(newPoints);
    

    var angleDelta: number = RandomRotationFactory.getInstance()!.getNextRandomAngle(howMuch)!;
        
        
;
    
item.setAngle(angleDelta);
    
}

this.repaint();
    
}


                //@Throws(Error::class)
            
    public mirror(){

    var width: number = this.getCanvasDimension()!.getWidth()!;
        
        
;
    

    var graphicItemArray: any[] = this.getGraphicItemHashMap()!.keys.toTypedArray()!;
        
        
;
    

    var size: number = graphicItemArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var item: GraphicItemInterface = this.getGraphicItemHashMap()!.get(graphicItemArray[index]!);

                         as GraphicItemInterface;
        
        
;
    

    var basicArrayList: BasicArrayList = VectorMirrorGenerator.getInstance()!.getInstance(item.getPointsInterface()!.getPoints(), width)!;
        
        
;
    

    var newPoints: Points = new Points();
        
        
;
    
newPoints!.addPoints(basicArrayList);
    
item.setPointsInterface(newPoints);
    
}

this.repaint();
    
}


                //@Throws(Error::class)
            
    public center(){
new VectorCenterGenerator().
                            transform(this.getGraphicItemHashMap());
    
this.repaint();
    
}


    public setNewTool(){

        try {
            StatusFactory.getInstance()!.setStatus("Tool Selected");
    
this.selectedTool= ToolFactory.getInstance()!.getSelectedToolFactory()!.getInstance(this);
    

    var newNode: MutableTreeNode = this.selectedTool!.getTreeNode()!;
        
        
;
    
this.getGraphicItemHashMap()!.put(newNode, this.selectedTool);
    
this.canvasTreeNode!.add(newNode);
    

                        if(this.getSelectedTool() == 
                                    null
                                )
                        
                                    {
                                    


                            throw new GraphicsException("No Tool Selected", this, "setSelectedTool")

                                    }
                                

                //: 
} catch(e) 
            {
}

}


                //@Throws(Error::class)
            
    public duplicateGraphicItem(graphicItem: GraphicItemInterface){
var graphicItem = graphicItem

    var graphicItemClone: GraphicItemInterface = graphicItem!.duplicate()!;
        
        
;
    
this.getGraphicItemHashMap()!.put(graphicItemClone!.getTreeNode(), graphicItemClone);
    
canvasTreeNode!.add(graphicItemClone!.getTreeNode());
    
}


                //@Throws(Error::class)
            
    public duplicateGraphicItemHashMap(hashMap: HashMap<any, any>){
var hashMap = hashMap

    var mutableTreeNodeArray: any[] = hashMap!.keys.toTypedArray()!;
        
        
;
    

    var size: number = mutableTreeNodeArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var treeNode: MutableTreeNode = mutableTreeNodeArray[index]! as MutableTreeNode;
        
        
;
    

    var graphicItem: GraphicItemInterface = hashMap!.get(treeNode as Object);

                         as GraphicItemInterface;
        
        
;
    
this.duplicateGraphicItem(graphicItem);
    
}

}


    public getGraphicItemHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.graphicItemHashMap;
    
}


    public getXPixelsPerWorkAreaPixel(): number{

    var x: number = this.getGrid()!.grid.getX() *(this.getWidth() -10) /this.getCanvasDimension()!.getWidth();
        
        
;
    

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

    var y: number = this.getGrid()!.grid.getY() *(this.getHeight() -10) /this.getCanvasDimension()!.getHeight();
        
        
;
    

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
var graphics = graphics

    var angleDouble: Double = new Double(this.angle);
        
        
;
    

    var graphicItemArray: any[] = this.getGraphicItemHashMap()!.keys.toTypedArray()!;
        
        
;
    

    var size: number = graphicItemArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var item: GraphicItemInterface = this.getGraphicItemHashMap()!.get(graphicItemArray[index]!);

                         as GraphicItemInterface;
        
        
;
    
item.paint(graphics, angleDouble, this.getCanvasDimension(), this.getXPixelsPerWorkAreaPixel(), this.getYPixelsPerWorkAreaPixel());
    
}

}


    public drawGrid(graphics: Graphics){
var graphics = graphics

    var xAdjust: number = (this.getWidth() % this.getXPixelsPerWorkAreaPixel()) /2;
        
        
;
    

    var yAdjust: number = (this.getHeight() % this.getYPixelsPerWorkAreaPixel()) /2;
        
        
;
    

    var xLeft: number = xAdjust;
        
        
;
    

    var yUpper: number = yAdjust;
        
        
;
    

    var xRight: number = this.getWidth() -xAdjust;
        
        
;
    

    var yLower: number = this.getHeight() -yAdjust;
        
        
;
    
graphics.setColor(gridColor);
    




                        for (
    var value: number = yAdjust;
        
        
value <= this.getHeight() -yAdjust; )
        {
graphics.drawLine(xLeft, value, xRight, value);
    
}





                        for (
    var value: number = xAdjust;
        
        
value <= this.getWidth() -xAdjust; )
        {
graphics.drawLine(value, yUpper, value, yLower);
    
}

}


    public paint(graphics: Graphics){
var graphics = graphics

        try {
            
                        if(this.getGrid()!.isChanged)
                        
                                    {
                                    graphics.setColor(backgroundColor);
    
graphics.fillRect(0, 0, getWidth(), getHeight());
    

                        if(this.getGrid()!.getZoom() > 2 && this.getGrid()!.isGridOn && this.getGrid()!.isGridPossible)
                        
                                    {
                                    this.setDefaultGrid();
    
this.drawGrid(graphics);
    

                                    }
                                
this.drawItems(graphics);
    
graphics.drawString(new Double(this.getAngle()).
                            toString(), this.getWidth() -75, this.getHeight() -15);
    
this.grid.isChanged= false;
    

                                    }
                                

                //: 
} catch(e) 
            {
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


                //@Throws(Error::class)
            
    public toDom(): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new CanvasDom(this).
                            toDom();

                        ;
    
}


    public changed(){
this.grid.isChanged= true;
    
}


    public mouseClicked(mouseEvent: java.awt.event.MouseEvent){
var mouseEvent = mouseEvent
StatusFactory.getInstance()!.setStatusNoLog(MouseStrings.getInstance()!.MOUSE_CLICKED_LABEL +this.logMouseEvent(mouseEvent));
    

                        if(this.getSelectedTool() != 
                                    null
                                 && this.getSelectedTool()!.isActive())
                        
                                    {
                                    
    var graphicItem: GraphicItemInterface = this.getSelectedTool()!;
        
        
;
    
graphicItem!.mouseClicked(mouseEvent, this.getXPixelsPerWorkAreaPixel(), this.getYPixelsPerWorkAreaPixel());
    

                                    }
                                
                        else {
                            this.setNewTool();
    

    var graphicItem: GraphicItemInterface = this.getSelectedTool()!;
        
        
;
    

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
var mouseEvent = mouseEvent
StatusFactory.getInstance()!.setStatusNoLog(this.logMouseEvent(mouseEvent));
    
}


    public mouseExited(mouseEvent: java.awt.event.MouseEvent){
var mouseEvent = mouseEvent
StatusFactory.getInstance()!.setStatusNoLog(this.logMouseEvent(mouseEvent));
    
}


    public mousePressed(mouseEvent: java.awt.event.MouseEvent){
var mouseEvent = mouseEvent
StatusFactory.getInstance()!.setStatusNoLog(MouseStrings.getInstance()!.MOUSE_PRESSED_LABEL +this.logMouseEvent(mouseEvent));
    

                        if(this.getSelectedTool() != 
                                    null
                                )
                        
                                    {
                                    
    var graphicItem: GraphicItemInterface = this.getSelectedTool()!;
        
        
;
    
graphicItem!.mousePressed(mouseEvent, this.getXPixelsPerWorkAreaPixel(), this.getYPixelsPerWorkAreaPixel());
    

                                    }
                                
this.requestFocus();
    
this.grid.isChanged= true;
    
this.repaint();
    
}


    public mouseReleased(mouseEvent: java.awt.event.MouseEvent){
var mouseEvent = mouseEvent
StatusFactory.getInstance()!.setStatusNoLog(MouseStrings.getInstance()!.MOUSE_RELEASED_LABEL +this.logMouseEvent(mouseEvent));
    

    var graphicItem: GraphicItemInterface = this.getSelectedTool()!;
        
        
;
    

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
var mouseEvent = mouseEvent
StatusFactory.getInstance()!.setStatusNoLog(MouseStrings.getInstance()!.MOUSE_DRAGGED_LABEL +this.logMouseEvent(mouseEvent));
    

    var graphicItem: GraphicItemInterface = this.getSelectedTool()!;
        
        
;
    

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
var mouseEvent = mouseEvent
StatusFactory.getInstance()!.setStatusNoLog(MouseStrings.getInstance()!.MOUSE_MOVED_LABEL +this.logMouseEvent(mouseEvent));
    

                        if(this.getSelectedTool() != 
                                    null
                                 && this.getSelectedTool()!.isActive())
                        
                                    {
                                    
    var graphicItem: GraphicItemInterface = this.getSelectedTool()!;
        
        
;
    
graphicItem!.mouseMoved(mouseEvent, this.getXPixelsPerWorkAreaPixel(), this.getYPixelsPerWorkAreaPixel());
    

                                    }
                                
this.requestFocus();
    
this.grid.isChanged= true;
    
this.repaint();
    
}


    logMouseEvent(mouseEvent: java.awt.event.MouseEvent): string{
var mouseEvent = mouseEvent

    var stringBuffer: StringBuilder = new StringBuilder();
        
        
;
    
stringBuffer!.append(PositionStrings.getInstance()!.X_LABEL);
    
stringBuffer!.append(mouseEvent!.getX() /this.getXPixelsPerWorkAreaPixel());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(PositionStrings.getInstance()!.Y_LABEL);
    
stringBuffer!.append(mouseEvent!.getY() /this.getYPixelsPerWorkAreaPixel());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    public keyPressed(keyEvent: java.awt.event.KeyEvent){
var keyEvent = keyEvent
StatusFactory.getInstance()!.setStatus("Key Pressed");
    

        try {
            
    var graphicItemArray: any[] = this.graphicItemHashMap!.keys.toTypedArray()!;
        
        
;
    

    var size: number = graphicItemArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var graphicItemInterface: GraphicItemInterface = this.graphicItemHashMap!.get(graphicItemArray[index]!);

                         as GraphicItemInterface;
        
        
;
    

    var keyCode: number = keyEvent!.getKeyCode()!;
        
        
;
    

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


                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, gameInputStrings!.KEY_PRESSED, e);
    
}


                        if(this.getSelectedTool() != 
                                    null
                                 && this.getSelectedTool()!.isActive())
                        
                                    {
                                    StatusFactory.getInstance()!.setStatus("Key Pressed for Tool");
    

    var graphicItem: GraphicItemInterface = this.getSelectedTool()!;
        
        
;
    
graphicItem!.keyPressed(keyEvent);
    

                                    }
                                
                        else {
                            this.setNewTool();
    

                        }
                            
this.grid.isChanged= true;
    
this.repaint();
    
}


    public keyReleased(keyEvent: java.awt.event.KeyEvent){
var keyEvent = keyEvent
}


    public keyTyped(keyEvent: java.awt.event.KeyEvent){
var keyEvent = keyEvent
}


    public delete(evt: MyGraphicItemEvent){
var evt = evt
this.getGraphicItemHashMap()!.remove(evt.getTreeNode());
    
this.workAreaJTreeJPanel!.updateTree();
    
this.workAreaJTreeJPanel!.expand();
    
this.workAreaJTreeJPanel!.repaint();
    
}


    public deselect(evt: MyGraphicItemEvent){
var evt = evt

    var graphicItemInterface: GraphicItemInterface = this.getGraphicItemHashMap()!.get(evt.getTreeNode());

                         as GraphicItemInterface;
        
        
;
    

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
var evt = evt

    var graphicItemInterface: GraphicItemInterface = this.getGraphicItemHashMap()!.get(evt.getTreeNode());

                         as GraphicItemInterface;
        
        
;
    

                        if(graphicItemInterface != 
                                    null
                                )
                        
                                    {
                                    graphicItemInterface!.setColor(Color.YELLOW);
    
graphicItemInterface!.activate();
    
this.workAreaJTreeJPanel!.repaint();
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public duplicate(): CanvasJPanel{

    var newCanvasJPanel: CanvasJPanel = new CanvasJPanel(this.workAreaJTreeJPanel, this.getSize(), this.getCanvasDimension()!.getWidth(), this.getCanvasDimension()!.getHeight());
        
        
;
    
newCanvasJPanel!.setGrid(this.getGrid()!.getGrid());
    
newCanvasJPanel!.setAngle(this.getAngle());
    
newCanvasJPanel!.duplicateGraphicItemHashMap(this.getGraphicItemHashMap());
    
this.workAreaJTreeJPanel!.updateTree();
    
this.workAreaJTreeJPanel!.expand();
    
this.workAreaJTreeJPanel!.repaint();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newCanvasJPanel;
    
}


                //@Throws(Error::class)
            
    public duplicate(event: MyGraphicItemEvent){
var event = event

    var treeNode: MutableTreeNode = event.getTreeNode()!;
        
        
;
    

    var graphicItem: GraphicItemInterface = this.getGraphicItemHashMap()!.get(treeNode as Object);

                         as GraphicItemInterface;
        
        
;
    

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
var event = event

    var treeNode: MutableTreeNode = event.getTreeNode()!;
        
        
;
    

    var graphicItem: GraphicItemInterface = this.getGraphicItemHashMap()!.get(treeNode as Object);

                         as GraphicItemInterface;
        
        
;
    

                        if(graphicItem != 
                                    null
                                )
                        
                                    {
                                    graphicItem!.addAngle(event.getAngle());
    

                                    }
                                
}


    public getCanvasDimension(): IntegerDimension{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return canvasDimension;
    
}


    public setCanvasDimension(canvasDimension: IntegerDimension){
var canvasDimension = canvasDimension
this.canvasDimension= canvasDimension;
    
}


    public getGrid(): Grid{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return grid;
    
}


}
                
            

