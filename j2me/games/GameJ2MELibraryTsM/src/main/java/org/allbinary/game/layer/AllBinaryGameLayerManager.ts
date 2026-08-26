
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
        
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';
      const GameInfo = globalThis.org.allbinary.game.GameInfo;

      
//not game specific package import { NullPlayerGameInputComposite } from '../../../../org/allbinary/game/input/NullPlayerGameInputComposite.js';
      const NullPlayerGameInputComposite = globalThis.org.allbinary.game.input.NullPlayerGameInputComposite;

      
//not game specific package import { PlayerGameInputCompositeInterface } from '../../../../org/allbinary/game/input/PlayerGameInputCompositeInterface.js';
      const PlayerGameInputCompositeInterface = globalThis.org.allbinary.game.input.PlayerGameInputCompositeInterface;

      
//not game specific package import { ItemColorFactory } from '../../../../org/allbinary/graphics/ItemColorFactory.js';
      const ItemColorFactory = globalThis.org.allbinary.graphics.ItemColorFactory;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { LayerProcessor } from '../../../../org/allbinary/layer/LayerProcessor.js';
      const LayerProcessor = globalThis.org.allbinary.layer.LayerProcessor;

      
//not game specific package import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
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
                
            

