
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
        



import { GameInfo } from "../../../../org/allbinary/game/GameInfo.js";

    
import { NullPlayerGameInputComposite } from "../../../../org/allbinary/game/input/NullPlayerGameInputComposite.js";

    
import { PlayerGameInputCompositeInterface } from "../../../../org/allbinary/game/input/PlayerGameInputCompositeInterface.js";

    
import { ItemColorFactory } from "../../../../org/allbinary/graphics/ItemColorFactory.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { LayerProcessor } from "../../../../org/allbinary/layer/LayerProcessor.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class AllBinaryGameLayerManager extends AllBinaryLayerManager {
        

    public static readonly NULL_ALLBINARY_LAYER_MANAGER: AllBinaryGameLayerManager = new AllBinaryGameLayerManager(BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE, GameInfo.NONE);
        
        

    public static readonly ID: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(22)!;
        
        

    private backgroundBasicColor: BasicColor

    private foregroundBasicColor: BasicColor

    private gameInfo: GameInfo

    private playerGameInputCompositeInterface: PlayerGameInputCompositeInterface = NullPlayerGameInputComposite.NULL_PLAYER_GAME_INPUT_COMPOSITE;
        
        
public constructor (backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor, gameInfo: GameInfo){

            super();
                //var backgroundBasicColor = backgroundBasicColor
    //var foregroundBasicColor = foregroundBasicColor
    //var gameInfo = gameInfo
this.backgroundBasicColor= backgroundBasicColor;
    
this.foregroundBasicColor= foregroundBasicColor;
    

    var itemColorFactory: ItemColorFactory = ItemColorFactory.getInstance()!;
        
        
;
    
itemColorFactory!.INVERT_PAINT= this.backgroundBasicColor!.toInt();
    
itemColorFactory!.PAINT= this.foregroundBasicColor!.toInt();
    
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
                        return backgroundBasicColor;
    
}


    public setBackgroundBasicColor(backgroundBasicColor: BasicColor){
    //var backgroundBasicColor = backgroundBasicColor
this.backgroundBasicColor= backgroundBasicColor;
    
ItemColorFactory.getInstance()!.INVERT_PAINT= this.backgroundBasicColor!.toInt();
    
}


    public getForegroundBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return foregroundBasicColor;
    
}


    public setForegroundBasicColor(foregroundBasicColor: BasicColor){
    //var foregroundBasicColor = foregroundBasicColor
this.foregroundBasicColor= foregroundBasicColor;
    
ItemColorFactory.getInstance()!.PAINT= this.foregroundBasicColor!.toInt();
    
}


    public getGameInfo(): GameInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameInfo;
    
}


    public setGameInfo(gameInfo: GameInfo){
    //var gameInfo = gameInfo
this.gameInfo= gameInfo;
    
}


    public setLayerProcessorList(list: BasicArrayList){
    //var list = list

    var layerProcessorInterfaceArray: LayerProcessor[] = new Array(list.size());
        
        
;
    

    var size: number = layerProcessorInterfaceArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
layerProcessorInterfaceArray[index]= list.objectArray[index]! as LayerProcessor;
    
}

this.setLayerProcessorArray(layerProcessorInterfaceArray);
    
}


    public setPlayerGameInputCompositeInterface(playerGameInputCompositeInterface: PlayerGameInputCompositeInterface){
    //var playerGameInputCompositeInterface = playerGameInputCompositeInterface
this.playerGameInputCompositeInterface= playerGameInputCompositeInterface;
    
}


    public getPlayerGameInputCompositeInterface(): PlayerGameInputCompositeInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return playerGameInputCompositeInterface;
    
}


}
                
            

