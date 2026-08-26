
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
        
//not game specific package import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { RTSFormInput } from '../../../../org/allbinary/game/input/form/RTSFormInput.js';
      const RTSFormInput = globalThis.org.allbinary.game.input.form.RTSFormInput;

      
//not game specific package import { RTSLayer } from '../../../../org/allbinary/game/layer/RTSLayer.js';
      const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;

      
//not game specific package import { RTSLayerInfoPaintable } from '../../../../org/allbinary/game/layer/RTSLayerInfoPaintable.js';
      const RTSLayerInfoPaintable = globalThis.org.allbinary.game.layer.RTSLayerInfoPaintable;

      
//not game specific package import { RTSPlayerLayerInterface } from '../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js';
      const RTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.RTSPlayerLayerInterface;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { InputFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
      const InputFeatureFactory = globalThis.org.allbinary.game.configuration.feature.InputFeatureFactory;

      
//not game specific package import { AllBinaryGameCanvas } from '../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
      const AllBinaryGameCanvas = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;

      
//not game specific package import { GameKeyEvent } from '../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
//not game specific package import { NullRTSFormInputFactory } from '../../../../org/allbinary/game/input/form/NullRTSFormInputFactory.js';
      const NullRTSFormInputFactory = globalThis.org.allbinary.game.input.form.NullRTSFormInputFactory;

      
//not game specific package import { AllBinaryGameLayerManager } from '../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
//not game specific package import { AllBinaryTiledLayer } from '../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
//not game specific package import { NullRTSLayer } from '../../../../org/allbinary/game/layer/NullRTSLayer.js';
      const NullRTSLayer = globalThis.org.allbinary.game.layer.NullRTSLayer;

      
//not game specific package import { CollidableDestroyableDamageableLayer } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
//not game specific package import { GPoint } from '../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { DisplayChangeEvent } from '../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js';
      const DisplayChangeEvent = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEvent;

      
//not game specific package import { MotionGestureEvent } from '../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js';
      const MotionGestureEvent = globalThis.org.allbinary.input.motion.gesture.observer.MotionGestureEvent;

      
//not game specific package import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { SecondaryPlayerQueueFactory } from '../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js';
      const SecondaryPlayerQueueFactory = globalThis.org.allbinary.media.audio.SecondaryPlayerQueueFactory;

      
//not game specific package import { SelectSound } from '../../../../org/allbinary/media/audio/SelectSound.js';
      const SelectSound = globalThis.org.allbinary.media.audio.SelectSound;

      
//not game specific package import { BasicGeographicMap } from '../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { GeographicMapCompositeInterface } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
      const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;

      
//not game specific package import { SimpleGeographicMapCellPositionFactory } from '../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
      const SimpleGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.SimpleGeographicMapCellPositionFactory;

      
//not game specific package import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PlayerGameInput } from './PlayerGameInput.js';
import { InputFactory } from './InputFactory.js';
import { GameInputProcessor } from './GameInputProcessor.js';
import { ScrollMapPlayerGameInput } from './ScrollMapPlayerGameInput.js';
import { SelectedRTSLayersPlayerGameInput } from './SelectedRTSLayersPlayerGameInput.js';
import { LayerPositionFinderInterface } from './LayerPositionFinderInterface.js';
import { SelectRTSLayerVisitorFactoryInterface } from './SelectRTSLayerVisitorFactoryInterface.js';
import { RTSPlayerLeftGameInputProcessor } from './RTSPlayerLeftGameInputProcessor.js';
import { RTSPlayerRightGameInputProcessor } from './RTSPlayerRightGameInputProcessor.js';
import { RTSPlayerFireGameInputProcessor } from './RTSPlayerFireGameInputProcessor.js';
import { GameInputProcessorUtil } from './GameInputProcessorUtil.js';

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
                
            

