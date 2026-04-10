
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
        



import { ArtificialIntelligence } from "../../../../org/allbinary/ai/ArtificialIntelligence.js";

    
import { CanvasUtil } from "../../../../org/allbinary/game/displayable/canvas/CanvasUtil.js";

    
import { GameInput } from "../../../../org/allbinary/game/input/GameInput.js";

    
import { GameKeyEventSourceInterface } from "../../../../org/allbinary/game/input/GameKeyEventSourceInterface.js";

    
import { GameKeyEventFactory } from "../../../../org/allbinary/game/input/event/GameKeyEventFactory.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class BasicAI extends ArtificialIntelligence
                , GameKeyEventSourceInterface {
        

    public static readonly AI_VISITOR: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(2)!;
        
        

    public static readonly ID: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(1)!;
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly ownerLayerInterface: AllBinaryLayer

    private readonly gameInput: GameInput

    private lastKey: number =  -1;
        
        

    private readonly gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;
        
        
public constructor (ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){

            super();
            var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput
this.ownerLayerInterface= ownerLayerInterface
this.gameInput= gameInput
}


                @Throws(Exception::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager



                            throw Exception(commonStrings!.NOT_IMPLEMENTED)
}


                @Throws(Exception::class)
            
    public processAI(key: number){
var key = key

    
                        if(key !=  -1)
                        
                                    {
                                    add(gameKeyEventFactory!.getInstance(this, key))

                                    }
                                
}


    public setLastKey(lastKey: number){
var lastKey = lastKey
this.lastKey= lastKey
}


    public getLastKey(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return lastKey;
    
}


    public getOwnerLayerInterface(): AllBinaryLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ownerLayerInterface;
    
}


    public getGameInput(): GameInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameInput;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this::class.toString()!;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(CommonSeps.getInstance()!.NEW_LINE)
append(this.getName())
append(" LastKey: ")
append(CanvasUtil.getKeyName(this.getLastKey()))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    
}


}
                
            

