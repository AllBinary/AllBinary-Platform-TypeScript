
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { RTSFormInput } from "../../../../org/allbinary/game/input/form/RTSFormInput.js";

    
import { MultiSelectPaintable } from "../../../../org/allbinary/game/layer/MultiSelectPaintable.js";

    
import { RTSGameStrings } from "../../../../org/allbinary/game/layer/RTSGameStrings.js";

    
import { RTSLayer } from "../../../../org/allbinary/game/layer/RTSLayer.js";

    
import { RTSLayerInfoPaintable } from "../../../../org/allbinary/game/layer/RTSLayerInfoPaintable.js";

    
import { RTSPlayerLayerInterface } from "../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js";

    
import { EndLevelNoBuildingSelectedTouchButtonsBuilder } from "../../../../org/allbinary/input/motion/button/EndLevelNoBuildingSelectedTouchButtonsBuilder.js";

    
import { EndLevelTouchButtonsBuilder } from "../../../../org/allbinary/input/motion/button/EndLevelTouchButtonsBuilder.js";

    
import { NoBuildingSelectedTouchButtonsBuilder } from "../../../../org/allbinary/input/motion/button/NoBuildingSelectedTouchButtonsBuilder.js";

    
import { RTSTouchButtonsBuilder } from "../../../../org/allbinary/input/motion/button/RTSTouchButtonsBuilder.js";

    
import { SelectBuildingSound } from "../../../../org/allbinary/media/audio/SelectBuildingSound.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BooleanFactory } from "../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { AllBinaryGameCanvas } from "../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js";

    
import { AllBinaryGameLayerManager } from "../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { GameNotificationEvent } from "../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js";

    
import { GameNotificationEventHandler } from "../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { GameState } from "../../../../org/allbinary/game/state/GameState.js";

    
import { GPoint } from "../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../org/allbinary/graphics/PointFactory.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { ScrollSelectionForm } from "../../../../org/allbinary/graphics/form/ScrollSelectionForm.js";

    
import { CustomItem } from "../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { NullInitUpdatePaintable } from "../../../../org/allbinary/graphics/paint/NullInitUpdatePaintable.js";

    
import { TouchButtonsBuilderFactory } from "../../../../org/allbinary/input/motion/button/TouchButtonsBuilderFactory.js";

    
import { MotionGestureInput } from "../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js";

    
import { TouchMotionGestureFactory } from "../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js";

    
import { BaseMotionGestureEventListener } from "../../../../org/allbinary/input/motion/gesture/observer/BaseMotionGestureEventListener.js";

    
import { BasicMotionGesturesHandler } from "../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js";

    
import { MotionGestureEvent } from "../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { RectangleCollisionUtil } from "../../../../org/allbinary/math/RectangleCollisionUtil.js";

    
import { ErrorSound } from "../../../../org/allbinary/media/audio/ErrorSound.js";

    
import { BasicGeographicMap } from "../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPosition } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCompositeInterface } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { RTSPlayerGameInput } from "./RTSPlayerGameInput.js";

import { LayerPositionFinderInterface } from "./LayerPositionFinderInterface.js";

import { SelectRTSLayerVisitorFactoryInterface } from "./SelectRTSLayerVisitorFactoryInterface.js";

export class HumanRTSPlayerGameInput extends RTSPlayerGameInput implements BaseMotionGestureEventListener {
        

    private isDragging: boolean = false;
        
        

    private readonly rectangleCollisionUtil: RectangleCollisionUtil = RectangleCollisionUtil.getInstance()!;
        
        

    private readonly touchMotionGestureFactory: TouchMotionGestureFactory = TouchMotionGestureFactory.getInstance()!;
        
        

    private readonly PRESSED: MotionGestureInput = touchMotionGestureFactory!.PRESSED;
        
        

    private readonly RELEASED: MotionGestureInput = touchMotionGestureFactory!.RELEASED;
        
        

    private readonly touchButtonsBuilderFactory: TouchButtonsBuilderFactory

    private readonly notYoursGameNotificationEvent: GameNotificationEvent

    private selectedRtsLayer: CollidableDestroyableDamageableLayer = CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER;
        
        
public constructor (gameCanvas: AllBinaryGameCanvas, geographicMapInterface: BasicGeographicMap, inputList: BasicArrayList, playerInputId: number, towerInfoPaintable: RTSLayerInfoPaintable, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerPositionFinderInterface: LayerPositionFinderInterface, selectRTSLayerVisitorFactoryInterface: SelectRTSLayerVisitorFactoryInterface)                        

                            : this(gameCanvas, inputList, playerInputId, towerInfoPaintable, rtsPlayerLayerInterface, layerPositionFinderInterface, selectRTSLayerVisitorFactoryInterface, TouchButtonsBuilderFactory.NO_TOUCH_BUTTON_BUILDER_FACTORY){

            super();
                //var gameCanvas = gameCanvas
    //var geographicMapInterface = geographicMapInterface
    //var inputList = inputList
    //var playerInputId = playerInputId
    //var towerInfoPaintable = towerInfoPaintable
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var layerPositionFinderInterface = layerPositionFinderInterface
    //var selectRTSLayerVisitorFactoryInterface = selectRTSLayerVisitorFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (gameCanvas: AllBinaryGameCanvas, inputList: BasicArrayList, playerInputId: number, towerInfoPaintable: RTSLayerInfoPaintable, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerPositionFinderInterface: LayerPositionFinderInterface, selectRTSLayerVisitorFactoryInterface: SelectRTSLayerVisitorFactoryInterface, touchButtonsBuilderFactory: TouchButtonsBuilderFactory)                        

                            : super(gameCanvas, inputList, playerInputId, towerInfoPaintable, rtsPlayerLayerInterface, layerPositionFinderInterface, selectRTSLayerVisitorFactoryInterface){

            super();
                //var gameCanvas = gameCanvas
    //var inputList = inputList
    //var playerInputId = playerInputId
    //var towerInfoPaintable = towerInfoPaintable
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var layerPositionFinderInterface = layerPositionFinderInterface
    //var selectRTSLayerVisitorFactoryInterface = selectRTSLayerVisitorFactoryInterface
    //var touchButtonsBuilderFactory = touchButtonsBuilderFactory


                            //For kotlin this is before the body of the constructor.
                    
this.touchButtonsBuilderFactory= touchButtonsBuilderFactory;
    

    var basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;
        
        
;
    
this.notYoursGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.NOT_YOURS, SmallIntegerSingletonFactory.getInstance()!.getInstance(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE);
    
BasicMotionGesturesHandler.getInstance()!.addListener(this);
    
}


                //@Throws(Error::class)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = allBinaryGameLayerManager as GeographicMapCompositeInterface;
        
        
;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        
;
    
this.notYoursGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
}


                //@Throws(Error::class)
            
    processDraggingMotionInput(layerManager: AllBinaryLayerManager): boolean{
    //var layerManager = layerManager

    var motionGestureEvent: MotionGestureEvent = this.getMotionGestureInputList()!.get(this.getMotionGestureInputList()!.size() -1);

                         as MotionGestureEvent;
        
        
;
    

    var motionGestureInput: MotionGestureInput = motionGestureEvent!.getMotionGesture()!;
        
        
;
    

    var rtsFormInput: RTSFormInput = this.getSelectedRtsFormInput()!;
        
        
;
    

                        if(motionGestureInput == PRESSED)
                        
                                    {
                                    
    var point: GPoint = motionGestureEvent!.getCurrentPoint()!;
        
        
;
    

                        if(this.getRtsPlayerLayerInterface()!.getCurrentScrollSelectionForm()!.isInForm(point))
                        
                                    {
                                    isDragging= rtsFormInput!.processSticky(this.getSelectedRtsLayer(), this.getRtsPlayerLayerInterface(), layerManager, point);
    

                                    }
                                

                                    }
                                
                             else 
                        if(motionGestureInput == RELEASED)
                        
                                    {
                                    
    var point: GPoint = motionGestureEvent!.getCurrentPoint()!;
        
        
;
    

                        if(this.getRtsPlayerLayerInterface()!.getCurrentScrollSelectionForm()!.isInForm(point))
                        
                                    {
                                    rtsFormInput!.process(this.getSelectedRtsLayer(), this.getRtsPlayerLayerInterface(), layerManager, point);
    

                                    }
                                
                             else 
                        if(rtsFormInput!.isStickyItemSelected())
                        
                                    {
                                    
    var previousRtsFormInput: RTSFormInput = rtsFormInput;
        
        
;
    
this.select(motionGestureEvent);
    
this.getSelectedBuildingPlayerGameInput()!.selectAllPreselected();
    
previousRtsFormInput!.process(this.getSelectedRtsLayer(), this.getRtsPlayerLayerInterface(), layerManager, point);
    
this.getSelectedBuildingPlayerGameInput()!.deselectAllPreselected();
    

                                    }
                                
                        else {
                            this.select(motionGestureEvent);
    

                        }
                            
rtsFormInput!.setStickyItemSelected(false);
    
rtsFormInput!.setSelectedStickyItem(CustomItem.NULL_CUSTOM_ITEM);
    
rtsFormInput!.setSelectedStickyItemIndex( -1);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    private startPoint: GPoint = PointFactory.getInstance()!.ZERO_ZERO;
        
        

    private endPoint: GPoint = PointFactory.getInstance()!.ZERO_ZERO;
        
        

    readonly POSSIBLE: string = "Possible: ";
        
        

    readonly AT: string = "At: ";
        
        

    readonly METHOD: string = "makeSelection";
        
        

    readonly ADDING: string = "Adding: ";
        
        

    readonly SPACE: string = CommonSeps.getInstance()!.SPACE;
        
        

    makeSelection(){

    var rtsLayerList: BasicArrayList = this.getRtsPlayerLayerInterface()!.getPlayerOwnedRTSLayers()!.rtsLayerList;
        
        
;
    

    var rectX1: number = this.startPoint!.getX()!;
        
        
;
    

    var rectY1: number = this.startPoint!.getY()!;
        
        
;
    

    var rectX2: number = this.endPoint!.getX()!;
        
        
;
    

    var rectY2: number = this.endPoint!.getY()!;
        
        
;
    

                        if(rectX1 > rectX2)
                        
                                    {
                                    rectX2= rectX1;
    
rectX1= this.endPoint!.getX();
    

                                    }
                                

                        if(rectY1 > rectY2)
                        
                                    {
                                    rectY2= rectY1;
    
rectY1= this.endPoint!.getY();
    

                                    }
                                

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(AT);
    
stringBuffer!.appendint(rectX1);
    
stringBuffer!.append(SPACE);
    
stringBuffer!.appendint(rectY1);
    
stringBuffer!.append(SPACE);
    
stringBuffer!.appendint(rectX2);
    
stringBuffer!.append(SPACE);
    
stringBuffer!.appendint(rectY2);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD);
    

    var rtsLayer: RTSLayer
;
    




                        for (
    var index: number = rtsLayerList!.size() -1;
        
        
index >= 0; index--)
        {
rtsLayer= rtsLayerList!.get(index);

                         as RTSLayer;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(POSSIBLE);
    
stringBuffer!.append(rtsLayer!.getName());
    
stringBuffer!.append(SPACE);
    
stringBuffer!.append(AT);
    
stringBuffer!.appendint((rtsLayer!.getViewPosition()!.getX() +rtsLayer!.getHalfWidth()));
    
stringBuffer!.append(SPACE);
    
stringBuffer!.appendint((rtsLayer!.getViewPosition()!.getY() +rtsLayer!.getHalfHeight()));
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD);
    

                        if(rectangleCollisionUtil!.isInside(rectX1, rectY1, rectX2, rectY2, rtsLayer!.getViewPosition()!.getX() +rtsLayer!.getHalfWidth(), rtsLayer!.getViewPosition()!.getY() +rtsLayer!.getHalfHeight()))
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().
                            append(ADDING)!.append(rtsLayer!.getName())!.toString(), this, METHOD);
    
rtsLayer!.select();
    
this.getSelectedBuildingPlayerGameInput()!.addSelectedRTSLayer(rtsLayer);
    

                                    }
                                
}


    var gameLayer: CollidableDestroyableDamageableLayer = this.getSelectedBuildingPlayerGameInput()!.getLastSelectedRtsLayer()!;
        
        
;
    

                        if(gameLayer != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER)
                        
                                    {
                                    
    var lastRTSLayer: RTSLayer = gameLayer as RTSLayer;
        
        
;
    

                        if(lastRTSLayer!.getScrollSelectionForm() != ScrollSelectionForm.NULL_SCROLL_SELECTION_FORM)
                        
                                    {
                                    this.updateForm(lastRTSLayer!.getScrollSelectionForm(), lastRTSLayer!.getRTSFormInput());
    
this.setSelectedRtsLayer(lastRTSLayer);
    

                                    }
                                

                                    }
                                
this.updatePaintable();
    
}


                //@Throws(Error::class)
            
    processSelectionBoxMotionInput(layerManager: AllBinaryLayerManager){
    //var layerManager = layerManager




                        for (
    var index: number = this.getMotionGestureInputList()!.size() -1;
        
        
index >= 0; index--)
        {

    var motionGestureEvent: MotionGestureEvent = this.getMotionGestureInputList()!.get(index);

                         as MotionGestureEvent;
        
        
;
    

    var motionGestureInput: MotionGestureInput = motionGestureEvent!.getMotionGesture()!;
        
        
;
    

    var point: GPoint = motionGestureEvent!.getCurrentPoint()!;
        
        
;
    

                        if(motionGestureInput == touchMotionGestureFactory!.PRESSED)
                        
                                    {
                                    this.startPoint= point;
    
this.endPoint= point;
    

                                    }
                                
                             else 
                        if(motionGestureInput == touchMotionGestureFactory!.RELEASED)
                        
                                    {
                                    this.endPoint= point;
    
this.makeSelection();
    
this.startPoint= PointFactory.getInstance()!.ZERO_ZERO;
    
this.endPoint= PointFactory.getInstance()!.ZERO_ZERO;
    

                                    }
                                
                        else {
                            this.endPoint= point;
    

                        }
                            
}

}


                //@Throws(Error::class)
            
    public processMotionInput(layerManager: AllBinaryLayerManager){
    //var layerManager = layerManager

                        if(this.getMotionGestureInputList()!.size() > 0)
                        
                                    {
                                    
    var endDrag: boolean = this.processDraggingMotionInput(layerManager)!;
        
        
;
    

                        if(!isDragging)
                        
                                    {
                                    this.processSelectionBoxMotionInput(layerManager);
    

                                    }
                                

                        if(endDrag)
                        
                                    {
                                    isDragging= false;
    

                                    }
                                

                                    }
                                
getMotionGestureInputList()!.clear();
    
}


    public setSelectedRtsFormInput(selectedRtsFormInput: RTSFormInput){
    //var selectedRtsFormInput = selectedRtsFormInput

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    
this.logUtil!.putF(new StringMaker().
                            append(CommonLabels.getInstance()!.START)!.append(StringUtil.getInstance()!.toString(selectedRtsFormInput))!.toString(), this, "setSelectedRtsFormInput");
    
super.setSelectedRtsFormInput(selectedRtsFormInput);
    
this.setSelectedRtsLayer(CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER);
    
}


    updateForm(rtsLayer: RTSLayer){
    //var rtsLayer = rtsLayer

    var scrollSelectionForm: ScrollSelectionForm = rtsLayer!.getScrollSelectionForm()!;
        
        
;
    

                        if(scrollSelectionForm != ScrollSelectionForm.NULL_SCROLL_SELECTION_FORM && this.getRtsPlayerLayerInterface()!.getGroupInterface()[0] == rtsLayer!.getGroupInterface()[0])
                        
                                    {
                                    this.updateForm(scrollSelectionForm, rtsLayer!.getRTSFormInput());
    
this.getSelectedBuildingPlayerGameInput()!.setSelectedRTSLayer(CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER);
    
this.setSelectedRtsLayer(rtsLayer);
    

                                    }
                                
                        else {
                            this.getRtsPlayerLayerInterface()!.setCurrentScrollSelectionForm(this.getRtsPlayerLayerInterface()!.getBuildingScrollSelectionForm());
    
this.setSelectedRtsFormInput(this.getRtsPlayerLayerInterface()!.getRTSFormInput());
    
this.getSelectedBuildingPlayerGameInput()!.setSelectedRTSLayer(CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER);
    

                        }
                            
}


    updateForm(scrollSelectionForm: ScrollSelectionForm, rtfFormInput: RTSFormInput){
    //var scrollSelectionForm = scrollSelectionForm
    //var rtfFormInput = rtfFormInput
this.getRtsPlayerLayerInterface()!.setCurrentScrollSelectionForm(scrollSelectionForm);
    
this.setSelectedRtsFormInput(rtfFormInput);
    
}


                //@Throws(Error::class)
            
    public setSelectedRTSLayer(rtSLayer: CollidableDestroyableDamageableLayer, geographicMapCellPosition: GeographicMapCellPosition){
    //var rtSLayer = rtSLayer
    //var geographicMapCellPosition = geographicMapCellPosition

                        if(rtSLayer != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER && this.getRtsPlayerLayerInterface()!.getGroupInterface()[0] != rtSLayer!.getGroupInterface()[0])
                        
                                    {
                                    this.getRtsPlayerLayerInterface()!.add(ErrorSound.getInstance());
    
GameNotificationEventHandler.getInstance()!.fireEvent(notYoursGameNotificationEvent);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var gameCanvas: AllBinaryGameCanvas = this.getGameCanvas()!;
        
        
;
    

                        if(rtSLayer != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER)
                        
                                    {
                                    this.getRtsPlayerLayerInterface()!.add(SelectBuildingSound.getInstance());
    

    var rtsLayer: RTSLayer = rtSLayer as RTSLayer;
        
        
;
    
rtsLayer!.select();
    
this.updateForm(rtsLayer);
    

                        if(gameCanvas!.getGameState() == GameState.PLAYING_GAME_STATE)
                        
                                    {
                                    
                        if(rtsLayer!.isSelfUpgradeable())
                        
                                    {
                                    gameCanvas!.updateCurrentTouchInputFactory(new RTSTouchButtonsBuilder());
    

                                    }
                                
                        else {
                            gameCanvas!.updateCurrentTouchInputFactory(new NoBuildingSelectedTouchButtonsBuilder());
    

                        }
                            

                                    }
                                
                        else {
                            
    var endLevelTouchButtonsBuilder: EndLevelTouchButtonsBuilder = new EndLevelTouchButtonsBuilder();
        
        
;
    

                        if(this.touchButtonsBuilderFactory != 
                                    null
                                )
                        
                                    {
                                    endLevelTouchButtonsBuilder!.add(this.touchButtonsBuilderFactory!.getInstance());
    

                                    }
                                
gameCanvas!.updateCurrentTouchInputFactory(endLevelTouchButtonsBuilder);
    

                        }
                            

                                    }
                                
                        else {
                            this.logUtil!.putF("Set Player Default Form", this, "setSelectedRTSLayer");
    
this.getRtsPlayerLayerInterface()!.setCurrentScrollSelectionForm(this.getRtsPlayerLayerInterface()!.getBuildingScrollSelectionForm());
    
this.setSelectedRtsFormInput(this.getRtsPlayerLayerInterface()!.getRTSFormInput());
    
this.getSelectedBuildingPlayerGameInput()!.setSelectedRTSLayer(CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER);
    

                        if(gameCanvas!.getGameState() == GameState.PLAYING_GAME_STATE)
                        
                                    {
                                    gameCanvas!.updateCurrentTouchInputFactory(new NoBuildingSelectedTouchButtonsBuilder());
    

                                    }
                                
                        else {
                            
    var endLevelNoBuildingSelectedTouchButtonsBuilder: EndLevelNoBuildingSelectedTouchButtonsBuilder = new EndLevelNoBuildingSelectedTouchButtonsBuilder();
        
        
;
    

                        if(this.touchButtonsBuilderFactory != 
                                    null
                                )
                        
                                    {
                                    endLevelNoBuildingSelectedTouchButtonsBuilder!.add(this.touchButtonsBuilderFactory!.getInstance());
    

                                    }
                                
gameCanvas!.updateCurrentTouchInputFactory(endLevelNoBuildingSelectedTouchButtonsBuilder);
    

                        }
                            

                        }
                            
this.getSelectedRtsFormInput()!.setSelectedGeographicCellPosition(geographicMapCellPosition);
    
this.getSelectedBuildingPlayerGameInput()!.setSelectedRTSLayer(rtSLayer);
    
this.updatePaintable();
    
}


    private readonly multiSelectPaintable: MultiSelectPaintable = new MultiSelectPaintable();
        
        

    public updatePaintable(){

    var list: BasicArrayList = this.getSelectedBuildingPlayerGameInput()!.getSelectedBasicArrayList()!;
        
        
;
    

                        if(list.size() > 1)
                        
                                    {
                                    
    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.getGameCanvas();

                         as GeographicMapCompositeInterface;
        
        
;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        
;
    
multiSelectPaintable!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
multiSelectPaintable!.update(list);
    
this.getRTSLayerInfoPaintable()!.updateRTSLayerInfo(multiSelectPaintable);
    

                                    }
                                
                             else 
                        if(list.size() == 1)
                        
                                    {
                                    
    var rtsLayer: RTSLayer = list.get(0);

                         as RTSLayer;
        
        
;
    
this.getRTSLayerInfoPaintable()!.updateRTSLayerInfo(rtsLayer!.createHudPaintable());
    

                                    }
                                
                        else {
                            this.getRTSLayerInfoPaintable()!.updateRTSLayerInfo(NullInitUpdatePaintable.getInstance());
    

                        }
                            
}


    public paint(graphics: Graphics){
    //var graphics = graphics
super.paint(graphics);
    

                        if(this.startPoint != PointFactory.getInstance()!.ZERO_ZERO && this.endPoint != PointFactory.getInstance()!.ZERO_ZERO)
                        
                                    {
                                    graphics.setColor(BasicColorFactory.getInstance()!.RED.toInt());
    

    var rectX1: number = this.startPoint!.getX()!;
        
        
;
    

    var rectY1: number = this.startPoint!.getY()!;
        
        
;
    

    var rectX2: number = this.endPoint!.getX()!;
        
        
;
    

    var rectY2: number = this.endPoint!.getY()!;
        
        
;
    

                        if(rectX1 > rectX2)
                        
                                    {
                                    rectX2= rectX1;
    
rectX1= this.endPoint!.getX();
    

                                    }
                                

                        if(rectY1 > rectY2)
                        
                                    {
                                    rectY2= rectY1;
    
rectY1= this.endPoint!.getY();
    

                                    }
                                
graphics.drawRect(rectX1, rectY1, rectX2 -rectX1, rectY2 -rectY1);
    

                                    }
                                
}


    public onMotionGestureEvent(motionGestureEvent: MotionGestureEvent){
    //var motionGestureEvent = motionGestureEvent
getMotionGestureInputList()!.add(motionGestureEvent);
    
}


    getSelectedRtsLayer(): CollidableDestroyableDamageableLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return selectedRtsLayer;
    
}


    setSelectedRtsLayer(selectedRtsLayer: CollidableDestroyableDamageableLayer){
    //var selectedRtsLayer = selectedRtsLayer
this.selectedRtsLayer= selectedRtsLayer;
    
}


}
                
            

