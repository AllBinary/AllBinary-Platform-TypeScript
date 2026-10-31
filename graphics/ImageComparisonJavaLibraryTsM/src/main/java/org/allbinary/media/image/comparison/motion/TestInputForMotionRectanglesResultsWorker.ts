
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
        
import { Rectangle } from '../../../../../../java/awt/Rectangle.js';
//not GWT import const Rectangle

import { InputEvent } from '../../../../../../java/awt/event/InputEvent.js';
//not GWT import const InputEvent

import { KeyEvent } from '../../../../../../java/awt/event/KeyEvent.js';
//not GWT import const KeyEvent

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { InputRobotFactory } from '../../../../../../org/allbinary/input/automation/robot/InputRobotFactory.js';
//not GWT import const InputRobotFactory

import { InputRobotInterface } from '../../../../../../org/allbinary/input/automation/robot/InputRobotInterface.js';
//not GWT import const InputRobotInterface

import { TempInputRobotNames } from '../../../../../../org/allbinary/input/automation/robot/TempInputRobotNames.js';
//not GWT import const TempInputRobotNames

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { TimeDelayHelper } from '../../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MotionRectanglesResultsListener } from './MotionRectanglesResultsListener.js';
//sameFolderImports - not GWT import - same folder const MotionRectanglesResultsListener
import { MotionRectanglesResultsEvent } from './MotionRectanglesResultsEvent.js';
//sameFolderImports - not GWT import - same folder const MotionRectanglesResultsEvent
import { MotionRectangles } from './MotionRectangles.js';
//sameFolderImports - not GWT import - same folder const MotionRectangles

export class TestInputForMotionRectanglesResultsWorker
            extends Object
         implements MotionRectanglesResultsListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private index: number= 0;

    private running: boolean= false;

    private motionRectanglesVector: BasicArrayList;

public constructor (){

            super();
        this.motionRectanglesVector= new BasicArrayListD();
    
}


    public getMotionRectanglesVector(): BasicArrayList{



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

 try { this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.RUN);
    
this.setRunning(true);
    

    let timeHelper: TimeDelayHelper = new TimeDelayHelper(1000);;
    
timeHelper!.setStartTimeTNT();
    

    let motionRectangles: MotionRectangles = this.getMotionRectanglesVector()!.get(0) as MotionRectangles;;
    

    let motionRectangleVector: BasicArrayList = motionRectangles!.getVector()!;;
    

                        if(motionRectangleVector!.size() > 0)
                        
                                    {
                                    
    let rectangle: Rectangle = motionRectangleVector!.get(0) as Rectangle;;
    

    let robotHashtable: ABHashtable<any, any> = InputRobotFactory.getInstance()!.get()!;;
    

    let inputTypeNameArray: any[] = robotHashtable!.keys().toArray()!;;
    

    let size: number = inputTypeNameArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let inputTypeNameString: string = inputTypeNameArray[index]! as string;;
    

    let inputRobotInterface: InputRobotInterface = robotHashtable!.get(inputTypeNameString) as InputRobotInterface;;
    
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
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    

 }
   }
 
}


}

