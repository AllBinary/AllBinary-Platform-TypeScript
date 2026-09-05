
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { ArtificialIntelligence } from '../../../../org/allbinary/ai/ArtificialIntelligence.js';
//not GWT import const ArtificialIntelligence = globalThis.org.allbinary.ai.ArtificialIntelligence;

      
import { CanvasUtil } from '../../../../org/allbinary/game/displayable/canvas/CanvasUtil.js';
//not GWT import const CanvasUtil = globalThis.org.allbinary.game.displayable.canvas.CanvasUtil;

      
import { GameInput } from '../../../../org/allbinary/game/input/GameInput.js';
//not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
import { GameKeyEventSourceInterface } from '../../../../org/allbinary/game/input/GameKeyEventSourceInterface.js';
//not GWT import const GameKeyEventSourceInterface = globalThis.org.allbinary.game.input.GameKeyEventSourceInterface;

      
import { GameKeyEventFactory } from '../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
//not GWT import const GameKeyEventFactory = globalThis.org.allbinary.game.input.event.GameKeyEventFactory;

      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { SmallIntegerSingletonFactory } 
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicAI extends ArtificialIntelligence implements GameKeyEventSourceInterface {
        

    public static readonly AI_VISITOR: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(2)!;

    public static readonly ID: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(1)!;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;

    private readonly ownerLayerInterface: AllBinaryLayer;

    private readonly gameInput: GameInput;

    private lastKey: number =  -1;

public constructor (ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){

            super();
        this.ownerLayerInterface= ownerLayerInterface;
    
this.gameInput= gameInput;
    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


                //@Throws(Exception.constructor)
            
    public processKeyAI(key: number){

                        if(key !=  -1)
                        
                                    {
                                    this.gameInput!.add(this.gameKeyEventFactory!.getInstanceForKey(this, key));
    

                                    }
                                
}


    public setLastKey(lastKey: number){
this.lastKey= lastKey;
    
}


    public getLastKey(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.lastKey;
    
}


    public getOwnerLayerInterface(): AllBinaryLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ownerLayerInterface;
    
}


    public getGameInput(): GameInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameInput;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.constructor.name.toString()!;;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
stringBuffer!.append(this.getName());
    
stringBuffer!.append(" LastKey: ");
    
stringBuffer!.append(CanvasUtil.getKeyName(this.getLastKey()));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    
}


}



