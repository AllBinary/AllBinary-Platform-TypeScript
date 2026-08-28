
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
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not game specific package import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not game specific package import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
      const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;

      
//not game specific package import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { InputFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
      const InputFeatureFactory = globalThis.org.allbinary.game.configuration.feature.InputFeatureFactory;

      
//not game specific package import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
//not game specific package import { GameKeyEventFactory } from '../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
      const GameKeyEventFactory = globalThis.org.allbinary.game.input.event.GameKeyEventFactory;

      
//not game specific package import { SWTUtil } from '../../../../../org/allbinary/game/layer/SWTUtil.js';
      const SWTUtil = globalThis.org.allbinary.game.layer.SWTUtil;

      
//not game specific package import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { MyCanvas } from '../../../../../org/allbinary/graphics/displayable/MyCanvas.js';
      const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;

      
//not game specific package import { CommandCurrentSelectionForm } from '../../../../../org/allbinary/graphics/form/CommandCurrentSelectionForm.js';
      const CommandCurrentSelectionForm = globalThis.org.allbinary.graphics.form.CommandCurrentSelectionForm;

      
//not game specific package import { ScrollSelectionForm } from '../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
      const ScrollSelectionForm = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;

      
//not game specific package import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
      const OpenGLFeatureFactory = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureFactory;

      
//not game specific package import { MotionGestureInput } from '../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js';
      const MotionGestureInput = globalThis.org.allbinary.input.motion.gesture.MotionGestureInput;

      
//not game specific package import { TouchMotionGestureFactory } from '../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
      const TouchMotionGestureFactory = globalThis.org.allbinary.input.motion.gesture.TouchMotionGestureFactory;

      
//not game specific package import { MotionGestureEvent } from '../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js';
      const MotionGestureEvent = globalThis.org.allbinary.input.motion.gesture.observer.MotionGestureEvent;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { PrimaryPlayerQueueFactory } from '../../../../../org/allbinary/media/audio/PrimaryPlayerQueueFactory.js';
      const PrimaryPlayerQueueFactory = globalThis.org.allbinary.media.audio.PrimaryPlayerQueueFactory;

      
//not game specific package import { SelectSound } from '../../../../../org/allbinary/media/audio/SelectSound.js';
      const SelectSound = globalThis.org.allbinary.media.audio.SelectSound;

      
//not game specific package import { PrimaryThreadPool } from '../../../../../org/allbinary/thread/PrimaryThreadPool.js';
      const PrimaryThreadPool = globalThis.org.allbinary.thread.PrimaryThreadPool;

      
//not game specific package import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicMenuInputProcessor } from './BasicMenuInputProcessor.js';
import { CommandRunnable } from './CommandRunnable.js';
//In general allow scrolling of the menu and selection the center item
export class CommandFormInputProcessor extends BasicMenuInputProcessor {
        

    private readonly MOTION_GESTURE_SOURCE_ID: number = GameKeyEventFactory.getInstance()!.MOTION_GESTURE_SOURCE_ID;

    private readonly CLICK_DELAY: number = 150;

    private readonly clickTimeHelper: TimeDelayHelper = new TimeDelayHelper(this.CLICK_DELAY);

    private readonly DOUBLE_CLICK_DELAY: number = 1200;

    private readonly doubleClickTimeHelper: TimeDelayHelper = new TimeDelayHelper(this.DOUBLE_CLICK_DELAY);

    readonly isSingleKeyProcessing: boolean = InputFeatureFactory.getInstance()!.isSingleKeyProcessing()!;

    private form: ScrollSelectionForm;

    private hasPressed: boolean = false;

public constructor (gameKeyEventList: BasicArrayList, playerInputId: number, gameCanvas: MyCanvas, form: ScrollSelectionForm){
            super(gameKeyEventList, playerInputId, gameCanvas);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.form= form;
    
}


                //@Throws(Exception.constructor)
            
    public processInput(key: number): number{

                        if(key == Canvas.LEFT || key == Canvas.RIGHT || key == Canvas.UP || key == Canvas.DOWN)
                        
                                    {
                                    PrimaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance());
    
this.form.processInputKey(key);
    



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

    var commandCurrentSelectionForm: CommandCurrentSelectionForm = this.form as CommandCurrentSelectionForm;;
    

    var command: Command = commandCurrentSelectionForm!.getSelectedCommand()!;;
    
this.logUtil!.putF(command.toString(), this, this.PROCESS_COMMAND);
    

    var features: Features = Features.getInstance()!;;
    

    var openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;;
    

                        if(SWTUtil.isSWT && features.isFeature(openGLFeatureFactory!.OPENGL) && command != GameCommandsFactory.getInstance()!.EXIT_COMMAND)
                        
                                    {
                                    new CommandRunnable(this, command).run();
    

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


                //@Throws(Exception.constructor)
            
    public processInputList(): number{

        try {
            
    var motionInputsIndex: number = this.processMotionInputs()!;;
    

    var list: BasicArrayList = this.getGameKeyEventList()!;;
    

    var size: number = list.size()!;;
    

    var key: number = 0;;
    

    var gameKeyEvent: GameKeyEvent;;
    




                        for (
    var index: number = 0;index < size; index++)
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
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.gameInputStrings!.PROCESS_INPUT, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}

}


                //@Throws(Exception.constructor)
            
    public processMotionInputs(): number{

    var lastIndex: number = this.motionGestureEventList!.size() -1;;
    

                        if(lastIndex >= 0)
                        
                                    {
                                    
    var motionGestureEvent: MotionGestureEvent = this.motionGestureEventList!.objectArray[lastIndex]! as MotionGestureEvent;;
    
this.processMotionInput(motionGestureEvent);
    

                                    }
                                
this.motionGestureEventList!.clear();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return lastIndex;
    
}


                //@Throws(Exception.constructor)
            
    processMotionInput(motionGestureEvent: MotionGestureEvent){

    var touchMotionGestureFactory: TouchMotionGestureFactory = TouchMotionGestureFactory.getInstance()!;;
    

    var motionGestureInput: MotionGestureInput = motionGestureEvent!.getMotionGesture()!;;
    

                        if(motionGestureInput == touchMotionGestureFactory!.RELEASED)
                        
                                    {
                                    
    var point: GPoint = motionGestureEvent!.getCurrentPoint()!;;
    

                        if(this.form.isInForm(point))
                        
                                    {
                                    
    var index: number = this.form.getSelectedIndexForPoint(point)!;;
    

                        if(index !=  -1)
                        
                                    {
                                    PrimaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance());
    

                        if(index == this.form.getSelectedIndex())
                        
                                    {
                                    
                        if(this.clickTimeHelper!.isTimeTNT())
                        
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
                                    
                        if(!this.doubleClickTimeHelper!.isTimeTNT())
                        
                                    {
                                    this.logUtil!.putF("Double Press", this, this.gameInputStrings!.PROCESS_MOTION_INPUT);
    
this.processCommand();
    

                                    }
                                
this.doubleClickTimeHelper!.delay= this.DOUBLE_CLICK_DELAY;
    
this.doubleClickTimeHelper!.setStartTimeTNT();
    

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
                        return new StringMaker().append(super.toString())!.append(this.NAME_LABEL)!.append(this.form.toString())!.toString();;
    
}


}



