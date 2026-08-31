
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

      
import { MyCanvas } from '../../../../../org/allbinary/graphics/displayable/MyCanvas.js';
      //not GWT import const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;

      
import { ScrollSelectionForm } from '../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
      //not GWT import const ScrollSelectionForm = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;

      
import { MotionGestureEvent } from '../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js';
      //not GWT import const MotionGestureEvent = globalThis.org.allbinary.input.motion.gesture.observer.MotionGestureEvent;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CommandFormInputProcessor } from './CommandFormInputProcessor.js';
//not GWT import const  = globalThis.org.allbinary.game.displayable.canvas.CommandFormInputProcessor;

                import { PopupMenuInputProcessor } from './PopupMenuInputProcessor.js';
//not GWT import const  = globalThis.org.allbinary.game.displayable.canvas.PopupMenuInputProcessor;

                
export class PopupCommandFormInputProcessor extends CommandFormInputProcessor {
        

public constructor (gameKeyEventList: BasicArrayList, playerInputId: number, gameCanvas: MyCanvas, form: ScrollSelectionForm, popupMenuInputProcessor: PopupMenuInputProcessor){
            super(gameKeyEventList, playerInputId, gameCanvas, form);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public processInput(key: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.processInput(key);;
    
}


                //@Throws(Exception.constructor)
            
    processMotionInput(motionGestureEvent: MotionGestureEvent){
super.processMotionInput(motionGestureEvent);
    
}


}



