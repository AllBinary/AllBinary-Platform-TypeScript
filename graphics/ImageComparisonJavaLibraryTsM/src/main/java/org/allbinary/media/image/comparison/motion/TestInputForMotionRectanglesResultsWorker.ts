
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
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Thread } from '../../../../../../java/lang/Thread.js';
        
//not game specific package import { awt } from '../../../../../../java/awt.js';
      const awt = globalThis.java.awt;

      
//not game specific package import { InputEvent } from '../../../../../../java/awt/event/InputEvent.js';
      const InputEvent = globalThis.java.awt.event.InputEvent;

      
//not game specific package import { KeyEvent } from '../../../../../../java/awt/event/KeyEvent.js';
      const KeyEvent = globalThis.java.awt.event.KeyEvent;

      
//not game specific package import { Hashtable } from '../../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { Vector } from '../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { InputRobotFactory } from '../../../../../../org/allbinary/input/automation/robot/InputRobotFactory.js';
      const InputRobotFactory = globalThis.org.allbinary.input.automation.robot.InputRobotFactory;

      
//not game specific package import { InputRobotInterface } from '../../../../../../org/allbinary/input/automation/robot/InputRobotInterface.js';
      const InputRobotInterface = globalThis.org.allbinary.input.automation.robot.InputRobotInterface;

      
//not game specific package import { TempInputRobotNames } from '../../../../../../org/allbinary/input/automation/robot/TempInputRobotNames.js';
      const TempInputRobotNames = globalThis.org.allbinary.input.automation.robot.TempInputRobotNames;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { CommonLabels } from '../../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { TimeDelayHelper } from '../../../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MotionRectanglesResultsListener } from './MotionRectanglesResultsListener.js';
import { MotionRectanglesResultsEvent } from './MotionRectanglesResultsEvent.js';
import { MotionRectangles } from './MotionRectangles.js';
import { Rectangle } from './Rectangle.js';

export class TestInputForMotionRectanglesResultsWorker
            extends Object
         implements MotionRectanglesResultsListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private index: number= 0;

    private running: boolean= false;

    private motionRectanglesVector: Vector;

public constructor (){

            super();
        this.motionRectanglesVector= new Vector();
    
}


    public getMotionRectanglesVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.motionRectanglesVector;
    
}


    public onMotionRectanglesImageComparisonResultsEvent(motionRectanglesImageComparisonResultsEvent: MotionRectanglesResultsEvent){
this.getMotionRectanglesVector()!.add(motionRectanglesImageComparisonResultsEvent!.getMotionRectangles());
    
this.run();
    
}


    public onEvent(allBinaryEventObject: AllBinaryEventObject){
this.onMotionRectanglesImageComparisonResultsEvent(allBinaryEventObject as MotionRectanglesResultsEvent);
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.running;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public setRunning(running: boolean){
this.running= running;
    
}


    public run(){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.RUN);
    
this.setRunning(true);
    

    var timeHelper: TimeDelayHelper = new TimeDelayHelper(1000);;
    
timeHelper!.setStartTimeTNT();
    

    var motionRectangles: MotionRectangles = this.getMotionRectanglesVector()!.get(0) as MotionRectangles;;
    

    var motionRectangleVector: Vector = motionRectangles!.getVector()!;;
    

                        if(motionRectangleVector!.length > 0)
                        
                                    {
                                    
    var rectangle: Rectangle = motionRectangleVector!.get(0) as Rectangle;;
    

    var robotHashtable: Hashtable<any, any> = InputRobotFactory.getInstance()!.get()!;;
    

    var inputTypeNameArray: any[] = robotHashtable!.keys().()!;;
    

    var size: number = inputTypeNameArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var inputTypeNameString: string = inputTypeNameArray[index]! as string;;
    

    var inputRobotInterface: InputRobotInterface = robotHashtable!.get(inputTypeNameString) as InputRobotInterface;;
    
inputRobotInterface!.mouseMoveToTarget(rectangle);
    

                        if(inputRobotInterface!.getName()!.compareTo(TempInputRobotNames.DX_NAME) == 0)
                        
                                    {
                                    inputRobotInterface!.mousePress(InputEvent.BUTTON1_MASK);
    
Thread.sleep(300);
    
inputRobotInterface!.mouseRelease(InputEvent.BUTTON1_MASK);
    
inputRobotInterface!.mousePress(InputEvent.BUTTON2_MASK);
    
Thread.sleep(300);
    
inputRobotInterface!.mouseRelease(InputEvent.BUTTON2_MASK);
    
inputRobotInterface!.mousePress(InputEvent.BUTTON3_MASK);
    
Thread.sleep(300);
    
inputRobotInterface!.mouseRelease(InputEvent.BUTTON3_MASK);
    
inputRobotInterface!.keyPress(KeyEvent.VK_1);
    
Thread.sleep(300);
    
inputRobotInterface!.keyRelease(KeyEvent.VK_1);
    
inputRobotInterface!.keyPress(KeyEvent.VK_2);
    
Thread.sleep(300);
    
inputRobotInterface!.keyRelease(KeyEvent.VK_2);
    
inputRobotInterface!.keyPress(KeyEvent.VK_3);
    
Thread.sleep(300);
    
inputRobotInterface!.keyRelease(KeyEvent.VK_3);
    
inputRobotInterface!.keyPress(KeyEvent.VK_4);
    
Thread.sleep(300);
    
inputRobotInterface!.keyRelease(KeyEvent.VK_4);
    
inputRobotInterface!.keyPress(KeyEvent.VK_F1);
    
Thread.sleep(300);
    
inputRobotInterface!.keyRelease(KeyEvent.VK_F1);
    

                                    }
                                
}


                                    }
                                
this.index++;
    
this.getMotionRectanglesVector()!.remove(motionRectangles);
    
this.logUtil!.putF(CommonLabels.getInstance()!.ELAPSED +timeHelper!.getElapsedTNT(), this, this.commonStrings!.RUN);
    
this.logUtil!.putF(this.commonStrings!.END, this, this.commonStrings!.RUN);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    
}

}


}
                
            

