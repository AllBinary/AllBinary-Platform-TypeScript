
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

        


            import { Integer } from '../../../../java/lang/Integer.js';
        
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';
//not GWT import const GameInfo = globalThis.org.allbinary.game.GameInfo;

      
import { NullPlayerGameInputComposite } from '../../../../org/allbinary/game/input/NullPlayerGameInputComposite.js';
//not GWT import const NullPlayerGameInputComposite = globalThis.org.allbinary.game.input.NullPlayerGameInputComposite;

      
import { PlayerGameInputCompositeInterface } from '../../../../org/allbinary/game/input/PlayerGameInputCompositeInterface.js';
//not GWT import const PlayerGameInputCompositeInterface = globalThis.org.allbinary.game.input.PlayerGameInputCompositeInterface;

      
import { ItemColorFactory } from '../../../../org/allbinary/graphics/ItemColorFactory.js';
//not GWT import const ItemColorFactory = globalThis.org.allbinary.graphics.ItemColorFactory;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { LayerProcessor } from '../../../../org/allbinary/layer/LayerProcessor.js';
//not GWT import const LayerProcessor = globalThis.org.allbinary.layer.LayerProcessor;

      
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { SmallIntegerSingletonFactory } 
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AllBinaryGameLayerManager extends AllBinaryLayerManager {
        

    private static NULL_ALLBINARY_LAYER_MANAGER: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getNullInstance(): AllBinaryGameLayerManager{

                        if(AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER= new AllBinaryGameLayerManager(BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE, GameInfo.NONE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER as AllBinaryGameLayerManager;
    
}


    public static readonly ID: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(22)!;

    private backgroundBasicColor: BasicColor;

    private foregroundBasicColor: BasicColor;

    private gameInfo: GameInfo;

    private playerGameInputCompositeInterface: PlayerGameInputCompositeInterface = NullPlayerGameInputComposite.NULL_PLAYER_GAME_INPUT_COMPOSITE;

public constructor (backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor, gameInfo: GameInfo){

            super();
        this.backgroundBasicColor= backgroundBasicColor;
    
this.foregroundBasicColor= foregroundBasicColor;
    

    var itemColorFactory: ItemColorFactory = ItemColorFactory.getInstance()!;;
    
itemColorFactory!.INVERT_PAINT= this.backgroundBasicColor!.intValue();
    
itemColorFactory!.PAINT= this.foregroundBasicColor!.intValue();
    
this.gameInfo= gameInfo;
    
}


    public getLayerManager(): AllBinaryLayerManager{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this;
    
}


    public init(){
}


    public getBackgroundBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.backgroundBasicColor;
    
}


    public setBackgroundBasicColor(backgroundBasicColor: BasicColor){
this.backgroundBasicColor= backgroundBasicColor;
    
ItemColorFactory.getInstance()!.INVERT_PAINT= this.backgroundBasicColor!.intValue();
    
}


    public getForegroundBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.foregroundBasicColor;
    
}


    public setForegroundBasicColor(foregroundBasicColor: BasicColor){
this.foregroundBasicColor= foregroundBasicColor;
    
ItemColorFactory.getInstance()!.PAINT= this.foregroundBasicColor!.intValue();
    
}


    public getGameInfo(): GameInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameInfo;
    
}


    public setGameInfo(gameInfo: GameInfo){
this.gameInfo= gameInfo;
    
}


    public setLayerProcessorList(list: BasicArrayList){

    var layerProcessorInterfaceArray: LayerProcessor[] = new Array(list.size());;
    

    var size: number = layerProcessorInterfaceArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
layerProcessorInterfaceArray[index]= list.objectArray[index]! as LayerProcessor;
    
}

this.setLayerProcessorArray(layerProcessorInterfaceArray);
    
}


    public setPlayerGameInputCompositeInterface(playerGameInputCompositeInterface: PlayerGameInputCompositeInterface){
this.playerGameInputCompositeInterface= playerGameInputCompositeInterface;
    
}


    public getPlayerGameInputCompositeInterface(): PlayerGameInputCompositeInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.playerGameInputCompositeInterface;
    
}


}



