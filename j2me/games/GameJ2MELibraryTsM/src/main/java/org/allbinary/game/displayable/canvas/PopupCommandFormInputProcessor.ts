
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { MyCanvas } from '../../../../../org/allbinary/graphics/displayable/MyCanvas.js';
      
import { ScrollSelectionForm } from '../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
      
import { MotionGestureEvent } from '../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js';
      
import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CommandFormInputProcessor } from './CommandFormInputProcessor.js';
import { PopupMenuInputProcessor } from './PopupMenuInputProcessor.js';

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
                
            

