
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

      
//not game specific package import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
//not game specific package import { ScrollSelectionForm } from '../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
      const ScrollSelectionForm = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;

      
//not game specific package import { MotionGestureEvent } from '../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js';
      const MotionGestureEvent = globalThis.org.allbinary.input.motion.gesture.observer.MotionGestureEvent;

      
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
        import { CommandFormInputProcessor } from './CommandFormInputProcessor.js';
import { GameCommandCanvas } from './GameCommandCanvas.js';

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



