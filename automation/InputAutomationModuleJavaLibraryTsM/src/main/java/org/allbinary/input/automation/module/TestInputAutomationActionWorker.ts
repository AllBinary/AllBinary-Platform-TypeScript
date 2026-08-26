
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Thread } from '../../../../../java/lang/Thread.js';
        
//not game specific package import { Hashtable } from '../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { Set } from '../../../../../java/util/Set.js';
      const Set = globalThis.java.util.Set;

      
//not game specific package import { InputRobotFactory } from '../../../../../org/allbinary/input/automation/robot/InputRobotFactory.js';
      const InputRobotFactory = globalThis.org.allbinary.input.automation.robot.InputRobotFactory;

      
//not game specific package import { InputRobotInterface } from '../../../../../org/allbinary/input/automation/robot/InputRobotInterface.js';
      const InputRobotInterface = globalThis.org.allbinary.input.automation.robot.InputRobotInterface;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { ImageComparatorConstraintsInterface } from '../../../../../org/allbinary/media/image/comparison/ImageComparatorConstraintsInterface.js';
      const ImageComparatorConstraintsInterface = globalThis.org.allbinary.media.image.comparison.ImageComparatorConstraintsInterface;

      
//not game specific package import { MotionRectangleConstraintsInterface } from '../../../../../org/allbinary/media/image/comparison/motion/MotionRectangleConstraintsInterface.js';
      const MotionRectangleConstraintsInterface = globalThis.org.allbinary.media.image.comparison.motion.MotionRectangleConstraintsInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbstractInputAutomationWorker } from './AbstractInputAutomationWorker.js';
import { InputAutomationActionInterface } from './InputAutomationActionInterface.js';

export class TestInputAutomationActionWorker extends AbstractInputAutomationWorker {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private sleep: number;

public constructor (sleep: number, inputAutomationActionInterface: InputAutomationActionInterface, imageComparatorConstraintsInterface: ImageComparatorConstraintsInterface, motionRectangleConstraintsInterface: MotionRectangleConstraintsInterface){
            super(inputAutomationActionInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF("BasicTestAttackWorder", this, this.commonStrings!.CONSTRUCTOR);
    
this.sleep= sleep;
    
}


                //@Throws(Exception.constructor)
            
    public processBetweenWorkers(){
Thread.sleep(2000);
    
}


                //@Throws(Exception.constructor)
            
    public process(){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.PROCESS);
    

    var hashtable: Hashtable<any, any> = InputRobotFactory.getInstance()!.get()!;;
    

    var set: Set = hashtable.keys()!;;
    

    var inputTypeNameArray: any[] = set.toArray()!;;
    

    var size: number = inputTypeNameArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var inputTypeNameString: string = inputTypeNameArray[index]! as string;;
    

    var robot: InputRobotInterface = hashtable.get(inputTypeNameString) as InputRobotInterface;;
    

                        if(this.sleep > 0)
                        
                                    {
                                    Thread.sleep(this.sleep);
    

                                    }
                                
}

}


}
                
            

