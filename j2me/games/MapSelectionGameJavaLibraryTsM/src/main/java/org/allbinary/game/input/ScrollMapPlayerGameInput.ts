
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
        



import { Canvas } from "../../../../javax/microedition/lcdui/Canvas.js";

    
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { InputFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js";

    
import { GameKeyEvent } from "../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { AllBinaryGameLayerManager } from "../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { AllBinaryTiledLayer } from "../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { ScrollMapEvent } from "../../../../org/allbinary/layer/event/ScrollMapEvent.js";

    
import { ScrollMapEventHandler } from "../../../../org/allbinary/layer/event/ScrollMapEventHandler.js";

    
import { BasicGeographicMap } from "../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    

import { InputFactory } from "./InputFactory.js";

import { GameInputProcessorUtil } from "./GameInputProcessorUtil.js";

import {  } from "./.js";

export class ScrollMapPlayerGameInput extends PlayerGameInput {
        

    readonly inputProcessorArray: GameInputProcessor[] = new Array(InputFactory.getInstance()!.MAX);
        
        

    private readonly border: number = 150;
        
        

    private readonly inputList: BasicArrayList

    readonly isSingleKeyProcessing: boolean = Features.getInstance()!.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_REPEAT_PRESS) || Features.getInstance()!.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_PRESS);
        
        

    private readonly geographicMapInterface: BasicGeographicMap

    private maxBottom: number= 0

    private maxRight: number= 0
public constructor (geographicMapInterface: BasicGeographicMap, list: BasicArrayList, playerInputId: number)                        

                            : super(list, playerInputId){

            super();
            var geographicMapInterface = geographicMapInterface
var list = list
var playerInputId = playerInputId


                            //For kotlin this is before the body of the constructor.
                    
this.initInputProcessors();
    
this.geographicMapInterface= geographicMapInterface;
    
this.inputList= list;
    
this.init();
    
}


    private readonly scrollMapEvent: ScrollMapEvent = new ScrollMapEvent(this);
        
        

                //@Throws(Error::class)
            
    move(dx: number, dy: number){
var dx = dx
var dy = dy

    var terrainTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        
;
    
terrainTiledLayer!.move( -dx,  -dy);
    
scrollMapEvent!.setDxDy( -dx,  -dy);
    
ScrollMapEventHandler.getInstance()!.fireEvent(scrollMapEvent);
    
}


    public init(){
this.maxBottom= this.getSpecialHeight();
    
this.maxRight= this.getSpecialWidth();
    
}


                //@Throws(Error::class)
            
    public scrollMiddleX(){

    var terrainTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        
;
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    
this.move( -terrainTiledLayer!.getXP();

                        , 0);
    

                        if(terrainTiledLayer!.getWidth() < displayInfo!.getLastWidth())
                        
                                    {
                                    
    var diffX: number = ((displayInfo!.getLastWidth() -terrainTiledLayer!.getWidth()) shr 1);
        
        
;
    
this.move( -diffX, 0);
    

                                    }
                                
                        else {
                            
    var diffX: number = ((terrainTiledLayer!.getWidth() -displayInfo!.getLastWidth()) shr 1);
        
        
;
    
this.move(diffX, 0);
    

                        }
                            
}


                //@Throws(Error::class)
            
    public scrollY(anchor: number){
var anchor = anchor

    var terrainTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        
;
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

                        if(anchor == Graphics.TOP)
                        
                                    {
                                    this.logUtil!.putF("Top", this, "scrollY");
    

                                    }
                                
                             else 
                        if(anchor == Graphics.BOTTOM)
                        
                                    {
                                    this.logUtil!.putF("Bottom", this, "scrollY");
    

    var diffY: number = (terrainTiledLayer!.getHeight() -displayInfo!.getLastHeight());
        
        
;
    
this.move(0, diffY);
    

                                    }
                                
                             else 
                        if(anchor == Graphics.VCENTER)
                        
                                    {
                                    this.logUtil!.putF("Center", this, "scrollY");
    

    var diffY: number = (terrainTiledLayer!.getHeight() -displayInfo!.getLastHeight()) /2;
        
        
;
    
this.move(0, diffY);
    

                                    }
                                
                        else {
                            


                            throw new Error("No Such Anchor Supported")

                        }
                            
}


                //@Throws(Error::class)
            
    up(){

    var y: number = geographicMapInterface!.getAllBinaryTiledLayer()!.getYP() -10;
        
        
;
    

                        if(this.keepOnMapMinY(y))
                        
                                    {
                                    this.move(0,  -10);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    down(){

    var y: number =  -geographicMapInterface!.getAllBinaryTiledLayer()!.getYP();

                         +10;
        
        
;
    

                        if(this.keepOnMapMaxY(y))
                        
                                    {
                                    this.move(0, 10);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    right(){

    var x: number = geographicMapInterface!.getAllBinaryTiledLayer()!.getYP() +10;
        
        
;
    

                        if(this.keepOnMapMinX(x))
                        
                                    {
                                    this.move(10, 0);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    left(){

    var x: number =  -geographicMapInterface!.getAllBinaryTiledLayer()!.getYP();

                         -10;
        
        
;
    

                        if(this.keepOnMapMaxX(x))
                        
                                    {
                                    this.move( -10, 0);
    

                                    }
                                
}


    public initInputProcessors(){
this.inputProcessorArray[Canvas.UP]= new ScrollMapUpGameInputProcessor(this);
    
this.inputProcessorArray[Canvas.DOWN]= new ScrollMapDownGameInputProcessor(this);
    
this.inputProcessorArray[Canvas.KEY_NUM9]= new ScrollMapRightGameInputProcessor(this);
    
this.inputProcessorArray[Canvas.KEY_NUM7]= new ScrollMapLeftGameInputProcessor(this);
    
GameInputProcessorUtil.init(this.inputProcessorArray);
    
}


                //@Throws(Error::class)
            
    public processInput(key: number){
var key = key
inputProcessorArray[key]!.process(AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER, GameKeyEvent.NONE);
    
}


                //@Throws(Error::class)
            
    public processInput(layerManager: AllBinaryLayerManager){
var layerManager = layerManager

        try {
            
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
    
this.processInput(key);
    
}


                        if(isSingleKeyProcessing)
                        
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


    getSpecialHeight(): number{

    var terrainTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        
;
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

                        if(terrainTiledLayer!.getHeight() > displayInfo!.getLastHeight())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return terrainTiledLayer!.getHeight() -displayInfo!.getLastHeight();
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return displayInfo!.getLastHeight() -terrainTiledLayer!.getHeight() +terrainTiledLayer!.getCellHeight();
    

                        }
                            
}


    getSpecialWidth(): number{

    var terrainTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        
;
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

                        if(terrainTiledLayer!.getWidth() > displayInfo!.getLastWidth())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return terrainTiledLayer!.getWidth() -displayInfo!.getLastWidth();
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return displayInfo!.getLastWidth() -terrainTiledLayer!.getWidth() +terrainTiledLayer!.getCellWidth();
    

                        }
                            
}


    public keepOnMapMaxY(newY: number): boolean{
var newY = newY

    var y: number = geographicMapInterface!.getAllBinaryTiledLayer()!.getYP()!;
        
        
;
    

                        if(y > maxBottom +border)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


    public keepOnMapMinY(newY: number): boolean{
var newY = newY

    var y: number = geographicMapInterface!.getAllBinaryTiledLayer()!.getYP()!;
        
        
;
    

                        if(y <  -border)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


    public keepOnMapMaxX(newX: number): boolean{
var newX = newX

    var x: number = geographicMapInterface!.getAllBinaryTiledLayer()!.getXP()!;
        
        
;
    

                        if(x <  -maxRight -border)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


    public keepOnMapMinX(newX: number): boolean{
var newX = newX

    var x: number = geographicMapInterface!.getAllBinaryTiledLayer()!.getXP()!;
        
        
;
    

                        if(x > border)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


}
                
            

