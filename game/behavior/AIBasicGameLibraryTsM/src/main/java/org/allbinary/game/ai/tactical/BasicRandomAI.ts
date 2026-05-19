
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
      
import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
      
import { InputProbability } from '../../../../../org/allbinary/game/ai/InputProbability.js';
      
import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
      
import { MyRandomFactory } from '../../../../../org/allbinary/game/rand/MyRandomFactory.js';
      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      
import { Visitor } from '../../../../../org/allbinary/logic/util/visitor/Visitor.js';
      
import { GameTickTimeDelayHelperFactory } from '../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicRandomAI extends BasicAI {
        

    private i_random: number = 0;

    private readonly inputProbability: InputProbability

    private readonly visitor: Visitor

    private readonly keyArray: number[] = [Canvas.UP,Canvas.DOWN,Canvas.LEFT,Canvas.RIGHT,Canvas.KEY_NUM1,Canvas.KEY_NUM7,Canvas.KEY_NUM9];
public constructor (ownerLayerInterface: AllBinaryLayer, gameInput: GameInput, inputProbability: InputProbability, visitor: Visitor){
            super(ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.inputProbability= inputProbability;
    
this.visitor= visitor;
    
}


    private readonly myRandomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;

                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){

                        if(this.inputProbability!.getTimeDelayHelper()!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime))
                        
                                    {
                                    this.i_random= this.myRandomFactory!.getAbsoluteNextInt(this.inputProbability!.getMax());
    

    var repeat: boolean = false;
;
    

    var repeatLikelyhoodIntegerArray: Integer[] = this.inputProbability!.getRepeatLikelyhoodIntegerArray()!;
;
    

                        if(this.getLastKey() !=  -1 && repeatLikelyhoodIntegerArray[this.getLastKey()]!.intValue() >= this.i_random)
                        
                                    {
                                    repeat= true;
    

                                    }
                                

                        if(!repeat)
                        
                                    {
                                    
    var likelyhoodIntegerArray: Integer[][] = this.inputProbability!.getLikelyhoodIntegerArray()!;
;
    
this.i_random= this.myRandomFactory!.getAbsoluteNextInt(this.inputProbability!.getMax());
    

    var size: number = this.keyArray!.length
                ;
;
    

    var likelyhoodIntegerKeyArray: Integer[]
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {

    var key: number = this.keyArray[index]!;
;
    
likelyhoodIntegerKeyArray= likelyhoodIntegerArray[key]!;
    

                        if(likelyhoodIntegerArray!.length >= key && likelyhoodIntegerKeyArray[0] != 
                                    null
                                )
                        
                                    {
                                    
                        if(this.i_random >= likelyhoodIntegerKeyArray[0]!.intValue() && this.i_random < likelyhoodIntegerKeyArray[1]!.intValue())
                        
                                    {
                                    this.setLastKey(key);
    
break;

                    

                                    }
                                

                                    }
                                
}


                                    }
                                
this.visitor.visit(this);
    

                                    }
                                
}


}
                
            

