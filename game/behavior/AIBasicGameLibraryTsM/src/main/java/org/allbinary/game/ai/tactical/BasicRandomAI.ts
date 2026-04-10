
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
        



import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { BasicAI } from "../../../../../org/allbinary/game/ai/BasicAI.js";

    
import { InputProbability } from "../../../../../org/allbinary/game/ai/InputProbability.js";

    
import { GameInput } from "../../../../../org/allbinary/game/input/GameInput.js";

    
import { MyRandomFactory } from "../../../../../org/allbinary/game/rand/MyRandomFactory.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { Visitor } from "../../../../../org/allbinary/logic/util/visitor/Visitor.js";

    
import { GameTickTimeDelayHelperFactory } from "../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js";

    

export class BasicRandomAI extends BasicAI {
        

    private i_random: number = 0;
        
        

    private readonly inputProbability: InputProbability

    private readonly visitor: Visitor

    private readonly keyArray: IntArray = intArrayOf(Canvas.UP,Canvas.DOWN,Canvas.LEFT,Canvas.RIGHT,Canvas.KEY_NUM1,Canvas.KEY_NUM7,Canvas.KEY_NUM9);
        
        
public constructor (ownerLayerInterface: AllBinaryLayer, gameInput: GameInput, inputProbability: InputProbability, visitor: Visitor)                        

                            : super(ownerLayerInterface, gameInput){

            super();
            var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput
var inputProbability = inputProbability
var visitor = visitor


                            //For kotlin this is before the body of the constructor.
                    
this.inputProbability= inputProbability
this.visitor= visitor
}


    private readonly myRandomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

                        if(this.inputProbability!.getTimeDelayHelper()!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime))
                        
                                    {
                                    i_random= myRandomFactory!.getAbsoluteNextInt(this.inputProbability!.getMax())

    var repeat: boolean = false;
        
        


    var repeatLikelyhoodIntegerArray: Integer[] = this.inputProbability!.getRepeatLikelyhoodIntegerArray()!;
        
        


                        if(this.getLastKey() !=  -1 && repeatLikelyhoodIntegerArray[this.getLastKey()]!.toInt() >= i_random)
                        
                                    {
                                    repeat= true

                                    }
                                

                        if(!repeat)
                        
                                    {
                                    
    var likelyhoodIntegerArray: Integer[][] = this.inputProbability!.getLikelyhoodIntegerArray()!;
        
        

i_random= myRandomFactory!.getAbsoluteNextInt(this.inputProbability!.getMax())

    var size: number = keyArray!.length
                ;
        
        


    var likelyhoodIntegerKeyArray: Integer[]





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var key: number = keyArray[index]!;
        
        

likelyhoodIntegerKeyArray= likelyhoodIntegerArray[key]!

                        if(likelyhoodIntegerArray!.length >= key && likelyhoodIntegerKeyArray[0] != 
                                    null
                                )
                        
                                    {
                                    
                        if(i_random >= likelyhoodIntegerKeyArray[0]!.toInt() && i_random < likelyhoodIntegerKeyArray[1]!.toInt())
                        
                                    {
                                    this.this.setLastKey(key)
break;

                    

                                    }
                                

                                    }
                                
}


                                    }
                                
this.visitor.visit(this)

                                    }
                                
}


}
                
            

