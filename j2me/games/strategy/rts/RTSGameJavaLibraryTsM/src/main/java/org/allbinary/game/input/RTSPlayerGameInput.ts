
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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
        



import { Canvas } from "../../../../javax/microedition/lcdui/Canvas.js";

    
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { RTSFormInput } from "../../../../org/allbinary/game/input/form/RTSFormInput.js";

    
import { RTSLayer } from "../../../../org/allbinary/game/layer/RTSLayer.js";

    
import { RTSLayerInfoPaintable } from "../../../../org/allbinary/game/layer/RTSLayerInfoPaintable.js";

    
import { RTSPlayerLayerInterface } from "../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { InputFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js";

    
import { AllBinaryGameCanvas } from "../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js";

    
import { GameKeyEvent } from "../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { NullRTSFormInputFactory } from "../../../../org/allbinary/game/input/form/NullRTSFormInputFactory.js";

    
import { AllBinaryGameLayerManager } from "../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { AllBinaryTiledLayer } from "../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { NullRTSLayer } from "../../../../org/allbinary/game/layer/NullRTSLayer.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { GPoint } from "../../../../org/allbinary/graphics/GPoint.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { DisplayChangeEvent } from "../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js";

    
import { MotionGestureEvent } from "../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { SecondaryPlayerQueueFactory } from "../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js";

    
import { SelectSound } from "../../../../org/allbinary/media/audio/SelectSound.js";

    
import { BasicGeographicMap } from "../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPosition } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCompositeInterface } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js";

    
import { SimpleGeographicMapCellPositionFactory } from "../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    

export class RTSPlayerGameInput extends PlayerGameInput {
        

    readonly inputProcessorArray: GameInputProcessor[] = new Array(InputFactory.getInstance()!.MAX);
        
        

    readonly removeInputProcessorArray: GameInputProcessor[] = new Array(InputFactory.getInstance()!.MAX);
        
        

    private readonly inputList: BasicArrayList

    private readonly isSingleKeyProcessing: boolean = Features.getInstance()!.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_REPEAT_PRESS) || Features.getInstance()!.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_PRESS);
        
        

    private readonly gameCanvas: AllBinaryGameCanvas

    private readonly motionGestureInputList: BasicArrayList = new BasicArrayList();
        
        

    private readonly scrollPlayerGameInput: ScrollMapPlayerGameInput

    private readonly selectedRTSLayerPlayerGameInput: SelectedRTSLayersPlayerGameInput

    private readonly towerInfoPaintable: RTSLayerInfoPaintable

    private readonly rtsPlayerLayerInterface: RTSPlayerLayerInterface

    private readonly layerPositionFinderInterface: LayerPositionFinderInterface

    private selectedRtsFormInput: RTSFormInput = NullRTSFormInputFactory.getInstance()!;
        
        
public constructor (gameCanvas: AllBinaryGameCanvas, inputList: BasicArrayList, playerInputId: number, towerInfoPaintable: RTSLayerInfoPaintable, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerPositionFinderInterface: LayerPositionFinderInterface, selectRTSLayerVisitorFactoryInterface: SelectRTSLayerVisitorFactoryInterface)                        

                            : super(inputList, playerInputId){

            super();
                //var gameCanvas = gameCanvas
    //var inputList = inputList
    //var playerInputId = playerInputId
    //var towerInfoPaintable = towerInfoPaintable
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var layerPositionFinderInterface = layerPositionFinderInterface
    //var selectRTSLayerVisitorFactoryInterface = selectRTSLayerVisitorFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    
this.initInputProcessors();
    
this.gameCanvas= gameCanvas;
    
this.inputList= inputList;
    
this.towerInfoPaintable= towerInfoPaintable;
    
this.rtsPlayerLayerInterface= rtsPlayerLayerInterface;
    
this.selectedRTSLayerPlayerGameInput= new SelectedRTSLayersPlayerGameInput(this.getRTSLayerInfoPaintable(), this.getRtsPlayerLayerInterface(), this.inputList, playerInputId, selectRTSLayerVisitorFactoryInterface);
    

                        if(this.rtsPlayerLayerInterface != NullRTSLayer.NULL_RTS_LAYER)
                        
                                    {
                                    this.setSelectedRtsFormInput(this.rtsPlayerLayerInterface!.getRTSFormInput());
    

                                    }
                                

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = gameCanvas!.getLayerManager();

                         as GeographicMapCompositeInterface;
        
        
;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        
;
    
this.scrollPlayerGameInput= new ScrollMapPlayerGameInput(geographicMapInterface, this.inputList, playerInputId);
    
this.layerPositionFinderInterface= layerPositionFinderInterface;
    
}


                //@Throws(Error::class)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
this.selectedRTSLayerPlayerGameInput!.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    

                        if(this.selectedRtsFormInput != NullRTSFormInputFactory.getInstance())
                        
                                    {
                                    this.selectedRtsFormInput!.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    

                                    }
                                
}


    public onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent){
var displayChangeEvent = displayChangeEvent

        try {
            this.logUtil!.putF(commonStrings!.START, this, "onDisplayChangeEvent");
    
this.getRTSLayerInfoPaintable()!.update();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "onDisplayChangeEvent", e);
    
}

}


                //@Throws(Error::class)
            
    left(){
this.rtsPlayerLayerInterface!.getCurrentScrollSelectionForm()!.processInput(Canvas.LEFT);
    
}


                //@Throws(Error::class)
            
    right(){
this.rtsPlayerLayerInterface!.getCurrentScrollSelectionForm()!.processInput(Canvas.RIGHT);
    
}


    public initInputProcessors(){
this.inputProcessorArray[Canvas.LEFT]= new RTSPlayerLeftGameInputProcessor(this);
    
this.inputProcessorArray[Canvas.KEY_NUM0]= this.inputProcessorArray[Canvas.LEFT]!;
    
this.inputProcessorArray[Canvas.RIGHT]= new RTSPlayerRightGameInputProcessor(this);
    
this.inputProcessorArray[Canvas.KEY_POUND]= this.inputProcessorArray[Canvas.RIGHT]!;
    
this.removeInputProcessorArray[Canvas.KEY_NUM1]= new RTSPlayerFireGameInputProcessor(this);
    
this.removeInputProcessorArray[Canvas.KEY_NUM3]= this.removeInputProcessorArray[Canvas.KEY_NUM1]!;
    
this.removeInputProcessorArray[Canvas.KEY_NUM3]= this.removeInputProcessorArray[Canvas.KEY_NUM1]!;
    
this.removeInputProcessorArray[Canvas.LEFT]= this.removeInputProcessorArray[Canvas.KEY_NUM1]!;
    
this.removeInputProcessorArray[Canvas.RIGHT]= this.removeInputProcessorArray[Canvas.KEY_NUM1]!;
    
this.removeInputProcessorArray[Canvas.KEY_NUM0]= this.removeInputProcessorArray[Canvas.KEY_NUM1]!;
    
this.removeInputProcessorArray[Canvas.KEY_POUND]= this.removeInputProcessorArray[Canvas.KEY_NUM1]!;
    
GameInputProcessorUtil.init(this.inputProcessorArray);
    
GameInputProcessorUtil.init(this.removeInputProcessorArray);
    
}


                //@Throws(Error::class)
            
    public processInput(layerManager: AllBinaryLayerManager){
var layerManager = layerManager

        try {
            this.processMotionInput(layerManager);
    

    var size: number = inputList!.size()!;
        
        
;
    

    var key: number = 0;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var gameKeyEvent: GameKeyEvent = inputList!.get(index);

                         as GameKeyEvent;
        
        
;
    
key= gameKeyEvent!.getKey();
    
this.getScrollPlayerGameInput()!.processInput(key);
    
this.getSelectedBuildingPlayerGameInput()!.processInput(key);
    
this.inputProcessorArray[key]!.process(layerManager, gameKeyEvent);
    
this.removeInputProcessorArray[key]!.process(layerManager, gameKeyEvent);
    
}


                        if(isIsSingleKeyProcessing())
                        
                                    {
                                    this.clear();
    

                                    }
                                
                        else {
                            this.update();
    

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, gameInputStrings!.PROCESS_INPUT, e);
    
}

}


                //@Throws(Error::class)
            
    public processMotionInput(layerManager: AllBinaryLayerManager){
    //var layerManager = layerManager
}


                //@Throws(Error::class)
            
    select(motionGestureEvent: MotionGestureEvent){
    //var motionGestureEvent = motionGestureEvent

    var point: GPoint = motionGestureEvent!.getCurrentPoint()!;
        
        
;
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = gameCanvas!.getLayerManager();

                         as GeographicMapCompositeInterface;
        
        
;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        
;
    

    var allBinaryTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        
;
    

    var x: number = point.getX() +allBinaryTiledLayer!.getXP();
        
        
;
    

    var y: number = point.getY() +allBinaryTiledLayer!.getYP();
        
        
;
    

    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapInterface!.getCellPositionAtNoThrow(x, y)!;
        
        
;
    

                        if(geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    SecondaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance());
    

    var layer: AllBinaryLayer = this.layerPositionFinderInterface!.getLayerInterface(geographicMapCellPosition)!;
        
        
;
    

                        if(layer == AllBinaryLayer.NULL_ALLBINARY_LAYER)
                        
                                    {
                                    layer= CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER;
    

                                    }
                                
                        else {
                            geographicMapCellPosition= geographicMapInterface!.getCellPositionAt(layer.getXP(), layer.getYP());
    

                        }
                            

    var foundRTSLayer: CollidableDestroyableDamageableLayer = layer as CollidableDestroyableDamageableLayer;
        
        
;
    
this.setSelectedRTSLayer(foundRTSLayer, geographicMapCellPosition);
    

                                    }
                                
                        else {
                            
    var commonLabels: CommonLabels = CommonLabels.getInstance()!;
        
        
;
    
this.logUtil!.putF(new StringMaker().
                            append("Off Of Map -")!.append(commonLabels!.WIDTH_LABEL)!.appendint(allBinaryTiledLayer!.getWidth())!.append(commonLabels!.HEIGHT_LABEL)!.appendint(allBinaryTiledLayer!.getHeight())!.toString(), this, "select");
    

                        }
                            
}


                //@Throws(Error::class)
            
    public setSelectedRTSLayer(rtsLayer: CollidableDestroyableDamageableLayer, geographicMapCellPosition: GeographicMapCellPosition){
var rtsLayer = rtsLayer
var geographicMapCellPosition = geographicMapCellPosition
this.getSelectedBuildingPlayerGameInput()!.setSelectedRTSLayer(rtsLayer);
    
}


    public paint(graphics: Graphics){
var graphics = graphics

    var geographicMapCellPosition: GeographicMapCellPosition = this.getSelectedRtsFormInput()!.getSelectedGeographicCellPosition()!;
        
        
;
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = gameCanvas!.getLayerManager();

                         as GeographicMapCompositeInterface;
        
        
;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        
;
    

    var allBinaryTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        
;
    
graphics.setColor(BasicColorFactory.getInstance()!.GREEN.toInt());
    

    var list: BasicArrayList = this.getSelectedBuildingPlayerGameInput()!.getPaintSelectedRTSLayersList()!;
        
        
;
    

    var width: number = 0;
        
        
;
    

    var height: number = 0;
        
        
;
    

                        if(list.size() > 0)
                        
                                    {
                                    



                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {

    var rtsLayer: RTSLayer = list.get(index);

                         as RTSLayer;
        
        
;
    
width= rtsLayer!.getWidth();
    
height= rtsLayer!.getHeight();
    
graphics.drawRect(rtsLayer!.getXP() -allBinaryTiledLayer!.getXP(), rtsLayer!.getYP() -allBinaryTiledLayer!.getYP(), width, height);
    
}


                                    }
                                
                             else 
                        if(geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    
    var point: GPoint = geographicMapCellPosition!.getPoint()!;
        
        
;
    
width= allBinaryTiledLayer!.getCellWidth();
    
height= allBinaryTiledLayer!.getCellHeight();
    
graphics.drawRect(point.getX() -allBinaryTiledLayer!.getXP(), point.getY() -allBinaryTiledLayer!.getYP(), width, height);
    

                                    }
                                
}


    public updatePaintable(){
}


    public getSelectedBuildingPlayerGameInput(): SelectedRTSLayersPlayerGameInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return selectedRTSLayerPlayerGameInput;
    
}


    public getSelectedRtsFormInput(): RTSFormInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.selectedRtsFormInput;
    
}


    public setSelectedRtsFormInput(selectedRtsFormInput: RTSFormInput){
var selectedRtsFormInput = selectedRtsFormInput
this.logUtil!.putF(new StringMaker().
                            append("RTSFormInput: ")!.append(StringUtil.getInstance()!.toString(selectedRtsFormInput))!.toString(), this, "setSelectedRtsFormInput");
    
this.selectedRtsFormInput= selectedRtsFormInput;
    
}


    public getRtsPlayerLayerInterface(): RTSPlayerLayerInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rtsPlayerLayerInterface;
    
}


    public getRTSLayerInfoPaintable(): RTSLayerInfoPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return towerInfoPaintable;
    
}


    public getMotionGestureInputList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return motionGestureInputList;
    
}


    getGameCanvas(): AllBinaryGameCanvas{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameCanvas;
    
}


    public isIsSingleKeyProcessing(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isSingleKeyProcessing;
    
}


    public getScrollPlayerGameInput(): ScrollMapPlayerGameInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scrollPlayerGameInput;
    
}


}
                
            

