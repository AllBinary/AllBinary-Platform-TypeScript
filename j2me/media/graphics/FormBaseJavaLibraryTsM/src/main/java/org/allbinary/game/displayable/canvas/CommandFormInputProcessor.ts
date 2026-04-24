
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

    
import { Command } from "../../../../../javax/microedition/lcdui/Command.js";

    
import { GameCommandsFactory } from "../../../../../org/allbinary/game/commands/GameCommandsFactory.js";

    
import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { InputFeatureFactory } from "../../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js";

    
import { GameInputStrings } from "../../../../../org/allbinary/game/input/GameInputStrings.js";

    
import { GameKeyEvent } from "../../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { GameKeyEventFactory } from "../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js";

    
import { SWTUtil } from "../../../../../org/allbinary/game/layer/SWTUtil.js";

    
import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { MyCanvas } from "../../../../../org/allbinary/graphics/displayable/MyCanvas.js";

    
import { CommandCurrentSelectionForm } from "../../../../../org/allbinary/graphics/form/CommandCurrentSelectionForm.js";

    
import { ScrollSelectionForm } from "../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js";

    
import { OpenGLFeatureFactory } from "../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js";

    
import { MotionGestureInput } from "../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js";

    
import { TouchMotionGestureFactory } from "../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js";

    
import { MotionGestureEvent } from "../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { PrimaryPlayerQueueFactory } from "../../../../../org/allbinary/media/audio/PrimaryPlayerQueueFactory.js";

    
import { SelectSound } from "../../../../../org/allbinary/media/audio/SelectSound.js";

    
import { PrimaryThreadPool } from "../../../../../org/allbinary/thread/PrimaryThreadPool.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicMenuInputProcessor } from "./BasicMenuInputProcessor.js";

export class CommandFormInputProcessor extends BasicMenuInputProcessor {
        

    private readonly MOTION_GESTURE_SOURCE_ID: number = GameKeyEventFactory.getInstance()!.MOTION_GESTURE_SOURCE_ID;
        
        

    private readonly CLICK_DELAY: number = 150;
        
        

    private readonly clickTimeHelper: TimeDelayHelper = new TimeDelayHelper(CLICK_DELAY);
        
        

    private readonly DOUBLE_CLICK_DELAY: number = 1200;
        
        

    private readonly doubleClickTimeHelper: TimeDelayHelper = new TimeDelayHelper(DOUBLE_CLICK_DELAY);
        
        

    readonly isSingleKeyProcessing: boolean = InputFeatureFactory.getInstance()!.isSingleKeyProcessing()!;
        
        

    private form: ScrollSelectionForm

    private hasPressed: boolean = false;
        
        
public constructor (gameKeyEventList: BasicArrayList, playerInputId: number, gameCanvas: MyCanvas, form: ScrollSelectionForm){
            super(gameKeyEventList, playerInputId, gameCanvas);
                        //var gameKeyEventList = gameKeyEventList
    //var playerInputId = playerInputId
    //var gameCanvas = gameCanvas
    //var form = form


                            //For kotlin this is before the body of the constructor.
                    
this.form= form;
    
}


                //@Throws(Error::class)
            
    public processInput(key: number): number{
    //var key = key

                        if(key == Canvas.LEFT || key == Canvas.RIGHT || key == Canvas.UP || key == Canvas.DOWN)
                        
                                    {
                                    PrimaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance());
    
this.form.processInput(key);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    

                                    }
                                
                             else 
                        if(key == Canvas.FIRE)
                        
                                    {
                                    PrimaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.processCommand();;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    private readonly PROCESS_COMMAND: string = "processCommand";
        
        

    processCommand(): number{

    var commandCurrentSelectionForm: CommandCurrentSelectionForm = this.form as CommandCurrentSelectionForm;
        
        
;
    

    var command: Command = commandCurrentSelectionForm!.getSelectedCommand()!;
        
        
;
    
this.logUtil!.putF(command.toString(), this, PROCESS_COMMAND);
    

    var features: Features = Features.getInstance()!;
        
        
;
    

    var openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;
        
        
;
    

                        if(SWTUtil.isSWT && features.isFeature(openGLFeatureFactory!.OPENGL) && command != GameCommandsFactory.getInstance()!.EXIT_COMMAND)
                        
                                    {
                                    new CommandRunnable(this, command).
                            run();
    

                                    }
                                
                        else {
                            PrimaryThreadPool.getInstance()!.runTask(new CommandRunnable(this, command));
    

                        }
                            

                        if(command == GameCommandsFactory.getInstance()!.QUIT_COMMAND)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    

                        }
                            
}


                //@Throws(Error::class)
            
    public processInput(): number{

        try {
            
    var motionInputsIndex: number = this.processMotionInputs()!;
        
        
;
    

    var list: BasicArrayList = this.getGameKeyEventList()!;
        
        
;
    

    var size: number = list.size()!;
        
        
;
    

    var key: number = 0;
        
        
;
    

    var gameKeyEvent: GameKeyEvent
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
gameKeyEvent= list.objectArray[index]! as GameKeyEvent;
    
key= gameKeyEvent!.getKey();
    

                        if(gameKeyEvent!.getSourceId() != this.MOTION_GESTURE_SOURCE_ID)
                        
                                    {
                                    
                        if(this.processInput(key) == 1)
                        
                                    {
                                    break;

                    

                                    }
                                

                                    }
                                
}

this.clear();
    

                        if(size > 0 || motionInputsIndex >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, this.gameInputStrings!.PROCESS_INPUT, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}

}


                //@Throws(Error::class)
            
    public processMotionInputs(): number{

    var lastIndex: number = this.motionGestureEventList!.size() -1;
        
        
;
    

                        if(lastIndex >= 0)
                        
                                    {
                                    
    var motionGestureEvent: MotionGestureEvent = this.motionGestureEventList!.objectArray[lastIndex]! as MotionGestureEvent;
        
        
;
    
this.processMotionInput(motionGestureEvent);
    

                                    }
                                
motionGestureEventList!.clear();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return lastIndex;
    
}


                //@Throws(Error::class)
            
    processMotionInput(motionGestureEvent: MotionGestureEvent){
    //var motionGestureEvent = motionGestureEvent

    var touchMotionGestureFactory: TouchMotionGestureFactory = TouchMotionGestureFactory.getInstance()!;
        
        
;
    

    var motionGestureInput: MotionGestureInput = motionGestureEvent!.getMotionGesture()!;
        
        
;
    

                        if(motionGestureInput == touchMotionGestureFactory!.RELEASED)
                        
                                    {
                                    
    var point: GPoint = motionGestureEvent!.getCurrentPoint()!;
        
        
;
    

                        if(this.form.isInForm(point))
                        
                                    {
                                    
    var index: number = this.form.getSelectedIndex(point)!;
        
        
;
    

                        if(index !=  -1)
                        
                                    {
                                    PrimaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance());
    

                        if(index == this.form.getSelectedIndex())
                        
                                    {
                                    
                        if(this.clickTimeHelper!.isTime())
                        
                                    {
                                    this.processCommand();
    

                                    }
                                

                                    }
                                
                        else {
                            this.form.setSelectedIndex(index);
    

                        }
                            

                                    }
                                
                        else {
                            
                        }
                            

                                    }
                                

                        if(this.hasPressed)
                        
                                    {
                                    
                        if(!this.doubleClickTimeHelper!.isTime();)
                        
                                    {
                                    this.logUtil!.putF("Double Press", this, gameInputStrings!.PROCESS_MOTION_INPUT);
    
this.processCommand();
    

                                    }
                                
this.doubleClickTimeHelper!.delay= this.DOUBLE_CLICK_DELAY;
    
this.doubleClickTimeHelper!.setStartTime();
    

                                    }
                                
this.hasPressed= false;
    

                                    }
                                
                             else 
                        if(motionGestureInput == touchMotionGestureFactory!.PRESSED)
                        
                                    {
                                    this.doubleClickTimeHelper!.delay= 0;
    
this.hasPressed= true;
    

                                    }
                                
}


    private readonly NAME_LABEL: string = " ScrollSelectionForm: ";
        
        

    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            append(super.toString())!.append(NAME_LABEL)!.append(this.form.toString())!.toString();;
    
}


}
                
            

