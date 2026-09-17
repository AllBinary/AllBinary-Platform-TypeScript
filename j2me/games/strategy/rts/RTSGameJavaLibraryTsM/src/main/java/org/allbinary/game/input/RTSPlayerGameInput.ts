
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics
import { RTSFormInput } from '../../../../org/allbinary/game/input/form/RTSFormInput.js';
//not GWT import const RTSFormInput
import { RTSLayer } from '../../../../org/allbinary/game/layer/RTSLayer.js';
//not GWT import const RTSLayer
import { RTSLayerInfoPaintable } from '../../../../org/allbinary/game/layer/RTSLayerInfoPaintable.js';
//not GWT import const RTSLayerInfoPaintable
import { RTSPlayerLayerInterface } from '../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js';
//not GWT import const RTSPlayerLayerInterface
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features
import { InputFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
//not GWT import const InputFeatureFactory
import { AllBinaryGameCanvas } from '../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
//not GWT import const AllBinaryGameCanvas
import { GameKeyEvent } from '../../../../org/allbinary/game/input/event/GameKeyEvent.js';
//not GWT import const GameKeyEvent
import { NullRTSFormInputFactory } from '../../../../org/allbinary/game/input/form/NullRTSFormInputFactory.js';
//not GWT import const NullRTSFormInputFactory
import { AllBinaryGameLayerManager } from '../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryGameLayerManager
import { AllBinaryTiledLayer } from '../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
//not GWT import const AllBinaryTiledLayer
import { NullRTSLayer } from '../../../../org/allbinary/game/layer/NullRTSLayer.js';
//not GWT import const NullRTSLayer
import { CollidableDestroyableDamageableLayer } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import const CollidableDestroyableDamageableLayer
import { GPoint } from '../../../../org/allbinary/graphics/GPoint.js';
//not GWT import const GPoint
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
import { DisplayChangeEvent } from '../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js';
//not GWT import const DisplayChangeEvent
import { MotionGestureEvent } from '../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js';
//not GWT import const MotionGestureEvent
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer
import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { SecondaryPlayerQueueFactory } from '../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js';
//not GWT import const SecondaryPlayerQueueFactory
import { SelectSound } from '../../../../org/allbinary/media/audio/SelectSound.js';
//not GWT import const SelectSound
import { BasicGeographicMap } from '../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap
import { GeographicMapCellPosition } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition
import { GeographicMapCompositeInterface } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
//not GWT import const GeographicMapCompositeInterface
import { SimpleGeographicMapCellPositionFactory } from '../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
//not GWT import const SimpleGeographicMapCellPositionFactory
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PlayerGameInput } from './PlayerGameInput.js';
//not GWT import - same folder const PlayerGameInputimport { InputFactory } from './InputFactory.js';
//not GWT import - same folder const InputFactoryimport { GameInputProcessor } from './GameInputProcessor.js';
//not GWT import - same folder const GameInputProcessorimport { ScrollMapPlayerGameInput } from './ScrollMapPlayerGameInput.js';
//not GWT import - same folder const ScrollMapPlayerGameInputimport { SelectedRTSLayersPlayerGameInput } from './SelectedRTSLayersPlayerGameInput.js';
//not GWT import - same folder const SelectedRTSLayersPlayerGameInputimport { LayerPositionFinderInterface } from './LayerPositionFinderInterface.js';
//not GWT import - same folder const LayerPositionFinderInterfaceimport { SelectRTSLayerVisitorFactoryInterface } from './SelectRTSLayerVisitorFactoryInterface.js';
//not GWT import - same folder const SelectRTSLayerVisitorFactoryInterfaceimport { RTSPlayerLeftGameInputProcessor } from './RTSPlayerLeftGameInputProcessor.js';
//not GWT import - same folder const RTSPlayerLeftGameInputProcessorimport { RTSPlayerRightGameInputProcessor } from './RTSPlayerRightGameInputProcessor.js';
//not GWT import - same folder const RTSPlayerRightGameInputProcessorimport { RTSPlayerFireGameInputProcessor } from './RTSPlayerFireGameInputProcessor.js';
//not GWT import - same folder const RTSPlayerFireGameInputProcessorimport { GameInputProcessorUtil } from './GameInputProcessorUtil.js';
//not GWT import - same folder const GameInputProcessorUtil
export class RTSPlayerGameInput extends PlayerGameInput {
        

    readonly inputProcessorArray: GameInputProcessor[] = new Array(InputFactory.getInstance()!.MAX);

    readonly removeInputProcessorArray: GameInputProcessor[] = new Array(InputFactory.getInstance()!.MAX);

    private readonly inputList: BasicArrayList;

    private readonly isSingleKeyProcessing: boolean = Features.getInstance()!.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_REPEAT_PRESS) || Features.getInstance()!.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_PRESS);

    private readonly gameCanvas: AllBinaryGameCanvas;

    private readonly motionGestureInputList: BasicArrayList = new BasicArrayListD();

    private readonly scrollPlayerGameInput: ScrollMapPlayerGameInput;

    private readonly selectedRTSLayerPlayerGameInput: SelectedRTSLayersPlayerGameInput;

    private readonly towerInfoPaintable: RTSLayerInfoPaintable;

    private readonly rtsPlayerLayerInterface: RTSPlayerLayerInterface;

    private readonly layerPositionFinderInterface: LayerPositionFinderInterface;

    private selectedRtsFormInput: RTSFormInput = NullRTSFormInputFactory.getInstance()!;

public constructor (gameCanvas: AllBinaryGameCanvas, inputList: BasicArrayList, playerInputId: number, towerInfoPaintable: RTSLayerInfoPaintable, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerPositionFinderInterface: LayerPositionFinderInterface, selectRTSLayerVisitorFactoryInterface: SelectRTSLayerVisitorFactoryInterface){
            super(inputList, new BasicArrayListD(), playerInputId);
                    

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
                                

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.gameCanvas!.getLayerManager() as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    
this.scrollPlayerGameInput= new ScrollMapPlayerGameInput(geographicMapInterface, this.inputList, playerInputId);
    
this.layerPositionFinderInterface= layerPositionFinderInterface;
    
}


                //@Throws(Exception.constructor)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
this.selectedRTSLayerPlayerGameInput!.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    

                        if(this.selectedRtsFormInput != NullRTSFormInputFactory.getInstance())
                        
                                    {
                                    this.selectedRtsFormInput!.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    

                                    }
                                
}


    public onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "onDisplayChangeEvent");
    
this.getRTSLayerInfoPaintable()!.update();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "onDisplayChangeEvent", e);
    
}

}


                //@Throws(Exception.constructor)
            
    left(){
this.rtsPlayerLayerInterface!.getCurrentScrollSelectionForm()!.processInputKey(Canvas.LEFT);
    
}


                //@Throws(Exception.constructor)
            
    right(){
this.rtsPlayerLayerInterface!.getCurrentScrollSelectionForm()!.processInputKey(Canvas.RIGHT);
    
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


                //@Throws(Exception.constructor)
            
    public processInput(layerManager: AllBinaryLayerManager){

        try {
            this.processMotionInput(layerManager);
    

    var size: number = this.inputList!.size()!;;
    

    var key: number = 0;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var gameKeyEvent: GameKeyEvent = this.inputList!.get(index) as GameKeyEvent;;
    
key= gameKeyEvent!.getKey();
    
this.getScrollPlayerGameInput()!.processInputKey(key);
    
this.getSelectedBuildingPlayerGameInput()!.processInputKey(key);
    
this.inputProcessorArray[key]!.processEvent(layerManager, gameKeyEvent);
    
this.removeInputProcessorArray[key]!.processEvent(layerManager, gameKeyEvent);
    
}


                        if(this.isIsSingleKeyProcessing())
                        
                                    {
                                    this.clear();
    

                                    }
                                
                        else {
                            this.update();
    

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.gameInputStrings!.PROCESS_INPUT, e);
    
}

}


                //@Throws(Exception.constructor)
            
    public processMotionInput(layerManager: AllBinaryLayerManager){
}


                //@Throws(Exception.constructor)
            
    select(motionGestureEvent: MotionGestureEvent){

    var point: GPoint = motionGestureEvent!.getCurrentPoint()!;;
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.gameCanvas!.getLayerManager() as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    

    var allBinaryTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    

    var x: number = point.getX() +allBinaryTiledLayer!.getXP();;
    

    var y: number = point.getY() +allBinaryTiledLayer!.getYP();;
    

    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapInterface!.getCellPositionAtXYNoThrow(x, y)!;;
    

                        if(geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    SecondaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance());
    

    var layer: AllBinaryLayer = this.layerPositionFinderInterface!.getLayerInterface(geographicMapCellPosition)!;;
    

                        if(layer == AllBinaryLayer.NULL_ALLBINARY_LAYER)
                        
                                    {
                                    layer= CollidableDestroyableDamageableLayer.getNullInstance();
    

                                    }
                                
                        else {
                            geographicMapCellPosition= geographicMapInterface!.getCellPositionAtXY(layer.getXP(), layer.getYP());
    

                        }
                            

    var foundRTSLayer: CollidableDestroyableDamageableLayer = layer as CollidableDestroyableDamageableLayer;;
    
this.setSelectedRTSLayer(foundRTSLayer, geographicMapCellPosition);
    

                                    }
                                
                        else {
                            
    var commonLabels: CommonLabels = CommonLabels.getInstance()!;;
    
this.logUtil!.putF(new StringMaker().append("Off Of Map -")!.append(commonLabels!.WIDTH_LABEL)!.appendint(allBinaryTiledLayer!.getWidth())!.append(commonLabels!.HEIGHT_LABEL)!.appendint(allBinaryTiledLayer!.getHeight())!.toString(), this, "select");
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public setSelectedRTSLayer(rtsLayer: CollidableDestroyableDamageableLayer, geographicMapCellPosition: GeographicMapCellPosition){
this.getSelectedBuildingPlayerGameInput()!.setSelectedRTSLayer(rtsLayer);
    
}


    public paint(graphics: Graphics){

    var geographicMapCellPosition: GeographicMapCellPosition = this.getSelectedRtsFormInput()!.getSelectedGeographicCellPosition()!;;
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.gameCanvas!.getLayerManager() as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    

    var allBinaryTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    
graphics.setColor(BasicColorFactory.getInstance()!.GREEN.intValue());
    

    var list: BasicArrayList = this.getSelectedBuildingPlayerGameInput()!.getPaintSelectedRTSLayersList()!;;
    

    var width: number = 0;;
    

    var height: number = 0;;
    

                        if(list.size() > 0)
                        
                                    {
                                    



                        for (
    var index: number = list.size() -1;index >= 0; index--)
        {

    var rtsLayer: RTSLayer = list.get(index) as RTSLayer;;
    
width= rtsLayer!.getWidth();
    
height= rtsLayer!.getHeight();
    
graphics.drawRect(rtsLayer!.getXP() -allBinaryTiledLayer!.getXP(), rtsLayer!.getYP() -allBinaryTiledLayer!.getYP(), width, height);
    
}


                                    }
                                
                             else 
                        if(geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    
    var point: GPoint = geographicMapCellPosition!.getPoint()!;;
    
width= allBinaryTiledLayer!.getCellWidth();
    
height= allBinaryTiledLayer!.getCellHeight();
    
graphics.drawRect(point.getX() -allBinaryTiledLayer!.getXP(), point.getY() -allBinaryTiledLayer!.getYP(), width, height);
    

                                    }
                                
}


    public updatePaintable(){
}


    public getSelectedBuildingPlayerGameInput(): SelectedRTSLayersPlayerGameInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.selectedRTSLayerPlayerGameInput;
    
}


    public getSelectedRtsFormInput(): RTSFormInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.selectedRtsFormInput;
    
}


    public setSelectedRtsFormInput(selectedRtsFormInput: RTSFormInput){
this.logUtil!.putF(new StringMaker().append("RTSFormInput: ")!.append(StringUtil.getInstance()!.toString(selectedRtsFormInput))!.toString(), this, "setSelectedRtsFormInput");
    
this.selectedRtsFormInput= selectedRtsFormInput;
    
}


    public getRtsPlayerLayerInterface(): RTSPlayerLayerInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rtsPlayerLayerInterface;
    
}


    public getRTSLayerInfoPaintable(): RTSLayerInfoPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.towerInfoPaintable;
    
}


    public getMotionGestureInputList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.motionGestureInputList;
    
}


    getGameCanvas(): AllBinaryGameCanvas{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameCanvas;
    
}


    public isIsSingleKeyProcessing(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isSingleKeyProcessing;
    
}


    public getScrollPlayerGameInput(): ScrollMapPlayerGameInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scrollPlayerGameInput;
    
}


}



