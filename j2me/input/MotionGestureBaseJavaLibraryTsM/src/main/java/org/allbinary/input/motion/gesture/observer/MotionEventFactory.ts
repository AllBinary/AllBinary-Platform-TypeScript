
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
        



            import { Object } from '../../../../../../java/lang/Object.js';
        
//not game specific package import { Input } from '../../../../../../org/allbinary/game/input/Input.js';
      const Input = globalThis.org.allbinary.game.input.Input;

      
//not game specific package import { InputFactory } from '../../../../../../org/allbinary/game/input/InputFactory.js';
      const InputFactory = globalThis.org.allbinary.game.input.InputFactory;

      
//not game specific package import { MotionGestureInput } from '../../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js';
      const MotionGestureInput = globalThis.org.allbinary.input.motion.gesture.MotionGestureInput;

      
//not game specific package import { TouchMotionGestureFactory } from '../../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
      const TouchMotionGestureFactory = globalThis.org.allbinary.input.motion.gesture.TouchMotionGestureFactory;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { AllBinaryEventObjectFactoryInterface } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObjectFactoryInterface.js';
      const AllBinaryEventObjectFactoryInterface = globalThis.org.allbinary.logic.util.event.AllBinaryEventObjectFactoryInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MotionGestureEvent } from './MotionGestureEvent.js';

export class MotionEventFactory
            extends Object
         implements AllBinaryEventObjectFactoryInterface {
        

    private static index: number = 0;

    private readonly source: any;

    private readonly id: number;

public constructor (source: any = {}, id: number){

            super();
        this.source= source;
    
this.id= id;
    
MotionEventFactory.index= TouchMotionGestureFactory.getInstance()!.LAST_MOTION.getId();
    
}


    public getInstance(): AllBinaryEventObject{

    var inputFactory: InputFactory = InputFactory.getInstance()!;;
    

    var input: Input = inputFactory!.getInstanceById(MotionEventFactory.index++)!;;
    

                        if(input == inputFactory!.NO_INPUT)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new MotionGestureEvent(this.source, this.id, TouchMotionGestureFactory.getInstance()!.NO_MOTION as MotionGestureInput);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new MotionGestureEvent(this.source, this.id, input as MotionGestureInput);
    

                        }
                            
}


}



