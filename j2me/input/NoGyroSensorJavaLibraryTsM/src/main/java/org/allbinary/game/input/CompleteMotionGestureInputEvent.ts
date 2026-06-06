
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { MotionGestureInput } from '../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js';
      
import { TouchMotionGestureFactory } from '../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CompleteMotionGestureInputInterface } from './CompleteMotionGestureInputInterface.js';

export class CompleteMotionGestureInputEvent extends AllBinaryEventObject implements CompleteMotionGestureInputInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;

    private motionGestureInput: MotionGestureInput = TouchMotionGestureFactory.getInstance()!.NO_MOTION;

public constructor (name: string, motionGestureInput: MotionGestureInput){
            super(motionGestureInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setName(name);
    

        try {
            this.setMotionGestureInput(motionGestureInput);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "InputToGameKeyEventAction", e);
    
}

}


    setName(name: string){
this.name= name;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public setMotionGestureInput(motionGestureInput: MotionGestureInput){
this.motionGestureInput= motionGestureInput;
    
}


    public getMotionGestureInput(): MotionGestureInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.motionGestureInput;
    
}


}
                
            

