
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
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      //not GWT import const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
import { ScrollSelectionForm } from '../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
      //not GWT import const ScrollSelectionForm = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;

      
import { MotionGestureEvent } from '../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js';
      //not GWT import const MotionGestureEvent = globalThis.org.allbinary.input.motion.gesture.observer.MotionGestureEvent;

      
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      //not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CommandFormInputProcessor } from './CommandFormInputProcessor.js';
//not GWT import const  = globalThis.org.allbinary.game.displayable.canvas.CommandFormInputProcessor;

                import { GameCommandCanvas } from './GameCommandCanvas.js';
//not GWT import const  = globalThis.org.allbinary.game.displayable.canvas.GameCommandCanvas;

                
export class ImmediateCommandFormInputProcessor extends CommandFormInputProcessor {
        

    private readonly timeHelper: TimeDelayHelper = new TimeDelayHelper(25);

    gameCommandCanvas: GameCommandCanvas;

public constructor (gameKeyEventList: BasicArrayList, playerInputId: number, gameCommandCanvas: GameCommandCanvas, form: ScrollSelectionForm){
            super(gameKeyEventList, playerInputId, gameCommandCanvas, form);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.gameCommandCanvas= gameCommandCanvas;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public onPressGameKeyEvent(gameKeyEvent: GameKeyEvent){

        try {
            super.onPressGameKeyEvent(gameKeyEvent);
    

                        if(this.timeHelper!.isTimeTNT())
                        
                                    {
                                    this.processInputList();
    
this.gameCommandCanvas!.repaintBehavior!.onChangeRepaint(this.getCanvas());
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.gameInputStrings!.ON_PRESS_GAME_KEY, e);
    
}

}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public onDownGameKeyEvent(gameKeyEvent: GameKeyEvent){

        try {
            super.onDownGameKeyEvent(gameKeyEvent);
    

                        if(this.timeHelper!.isTimeTNT())
                        
                                    {
                                    this.processInputList();
    
this.gameCommandCanvas!.repaintBehavior!.onChangeRepaint(this.getCanvas());
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.gameInputStrings!.ON_DOWN_GAME_KEY, e);
    
}

}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public onUpGameKeyEvent(gameKeyEvent: GameKeyEvent){

        try {
            super.onUpGameKeyEvent(gameKeyEvent);
    

                        if(this.timeHelper!.isTimeTNT())
                        
                                    {
                                    this.processInputList();
    
this.gameCommandCanvas!.repaintBehavior!.onChangeRepaint(this.getCanvas());
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.gameInputStrings!.ON_UP_GAME_KEY, e);
    
}

}


    public onMotionGestureEvent(motionGestureEvent: MotionGestureEvent){

        try {
            super.onMotionGestureEvent(motionGestureEvent);
    

                        if(this.timeHelper!.isTimeTNT())
                        
                                    {
                                    this.processInputList();
    
this.gameCommandCanvas!.repaintBehavior!.onChangeRepaint(this.getCanvas());
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "onMotionGestureEvent", e);
    
}

}


}



