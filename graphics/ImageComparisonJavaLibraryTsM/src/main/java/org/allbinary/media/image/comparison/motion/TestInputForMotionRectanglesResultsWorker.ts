
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
        



import { awt } from "../../../../../../java/awt.js";

    
import { InputEvent } from "../../../../../../java/awt/event/InputEvent.js";

    
import { KeyEvent } from "../../../../../../java/awt/event/KeyEvent.js";

    
import { Hashtable } from "../../../../../../java/util/Hashtable.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { InputRobotFactory } from "../../../../../../org/allbinary/input/automation/robot/InputRobotFactory.js";

    
import { InputRobotInterface } from "../../../../../../org/allbinary/input/automation/robot/InputRobotInterface.js";

    
import { TempInputRobotNames } from "../../../../../../org/allbinary/input/automation/robot/TempInputRobotNames.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { CommonLabels } from "../../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { TimeDelayHelper } from "../../../../../../org/allbinary/time/TimeDelayHelper.js";

    

export class TestInputForMotionRectanglesResultsWorker
            extends Object
        
                , MotionRectanglesResultsListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private index: number= 0

    private running: boolean= false

    private motionRectanglesVector: Vector
public constructor (){

            super();
            this.motionRectanglesVector= Vector()
}


    public getMotionRectanglesVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.motionRectanglesVector;
    
}


    public onMotionRectanglesImageComparisonResultsEvent(motionRectanglesImageComparisonResultsEvent: MotionRectanglesResultsEvent){
var motionRectanglesImageComparisonResultsEvent = motionRectanglesImageComparisonResultsEvent
add(motionRectanglesImageComparisonResultsEvent!.getMotionRectangles())
this.run()
}


    public onEvent(allBinaryEventObject: AllBinaryEventObject){
var allBinaryEventObject = allBinaryEventObject
this.onMotionRectanglesImageComparisonResultsEvent(allBinaryEventObject as MotionRectanglesResultsEvent)
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return running;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setRunning(running: boolean){
var running = running
this.running= running
}


    public run(){

        try {
            put(this.commonStrings!.START, this, this.commonStrings!.RUN)
this.setRunning(true)

    var timeHelper: TimeDelayHelper = new TimeDelayHelper(1000);
        
        

setStartTime()

    var motionRectangles: MotionRectangles = this.getMotionRectanglesVector()!.get(0) as MotionRectangles;
        
        


    var motionRectangleVector: Vector = motionRectangles!.getVector()!;
        
        


    
                        if(motionRectangleVector!.length > 0)
                        
                                    {
                                    
    var rectangle: Rectangle = motionRectangleVector!.get(0) as Rectangle;
        
        


    var robotHashtable: Hashtable<Any, Any> = InputRobotFactory.getInstance()!.get()!;
        
        


    var inputTypeNameArray: any = {}[] = robotHashtable!.keys.toTypedArray()!;
        
        


    var size: number = inputTypeNameArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var inputTypeNameString: string = inputTypeNameArray[index]! as String;
        
        


    var inputRobotInterface: InputRobotInterface = robotHashtable!.get(inputTypeNameString as Object) as InputRobotInterface;
        
        

mouseMoveToTarget(rectangle)

    
                        if(inputRobotInterface!.getName()!.compareTo(TempInputRobotNames.DX_NAME) == 0)
                        
                                    {
                                    mousePress(InputEvent.BUTTON1_MASK)
sleep(300)
mouseRelease(InputEvent.BUTTON1_MASK)
mousePress(InputEvent.BUTTON2_MASK)
sleep(300)
mouseRelease(InputEvent.BUTTON2_MASK)
mousePress(InputEvent.BUTTON3_MASK)
sleep(300)
mouseRelease(InputEvent.BUTTON3_MASK)
keyPress(KeyEvent.VK_1)
sleep(300)
keyRelease(KeyEvent.VK_1)
keyPress(KeyEvent.VK_2)
sleep(300)
keyRelease(KeyEvent.VK_2)
keyPress(KeyEvent.VK_3)
sleep(300)
keyRelease(KeyEvent.VK_3)
keyPress(KeyEvent.VK_4)
sleep(300)
keyRelease(KeyEvent.VK_4)
keyPress(KeyEvent.VK_F1)
sleep(300)
keyRelease(KeyEvent.VK_F1)

                                    }
                                
}


                                    }
                                
this.index++
remove(motionRectangles)
put(CommonLabels.getInstance()!.ELAPSED +timeHelper!.getElapsed(), this, this.commonStrings!.RUN)
put(this.commonStrings!.END, this, this.commonStrings!.RUN)
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e)
}

}


}
                
            

