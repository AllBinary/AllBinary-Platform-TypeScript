
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
import { Activity } from '../../../../android/app/Activity.js';
      
import { MotionEvent } from '../../../../android/view/MotionEvent.js';
      
import { View } from '../../../../android/view/View.js';
      
import { GenericMotionEventVerifyInterface } from '../../../../org/allbinary/android/GenericMotionEventVerifyInterface.js';
      
import { GameFeatureEvent } from '../../../../org/allbinary/game/configuration/event/GameFeatureEvent.js';
      
import { GameFeatureListenerInterface } from '../../../../org/allbinary/game/configuration/event/GameFeatureListenerInterface.js';
      
import { GameInitializedEvent } from '../../../../org/allbinary/game/configuration/event/GameInitializedEvent.js';
      
import { GameInitializedListenerInterface } from '../../../../org/allbinary/game/configuration/event/GameInitializedListenerInterface.js';
      
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SimpleProgressActivityInterface } from './SimpleProgressActivityInterface.js';
import { KeyInputViewCompositeInterface } from './KeyInputViewCompositeInterface.js';

export class MidletActivityBase extends Activity implements GameFeatureListenerInterface, GameInitializedListenerInterface, SimpleProgressActivityInterface, KeyInputViewCompositeInterface, GenericMotionEventVerifyInterface {
        

    public onGameFeatureChange(gameFeatureEvent: GameFeatureEvent){
var gameFeatureEvent = gameFeatureEvent
}


    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject
}


    public onGameInitialized(gameInitializedEvent: GameInitializedEvent){
var gameInitializedEvent = gameInitializedEvent
}


                //@Throws(Exception.constructor)
            
    public onSetProgress(value: number, text: string){
var value = value
var text = text
}


                //@Throws(Exception.constructor)
            
    public onDismissProgress(animationSequence: number[]){
var animationSequence = animationSequence
}


                //@Throws(Exception.constructor)
            
    public onShowProgress(indeterminate: boolean, animationSequence: number[]){
var indeterminate = indeterminate
var animationSequence = animationSequence
}


    public getRootView(): View{



                            throw new RuntimeException();
                    
}


    public getView(): View{



                            throw new RuntimeException();
                    
}


    public setKeyInputView(keyInputView: View){
var keyInputView = keyInputView
}


    public onGenericMotionEvent(event: MotionEvent): boolean{
var event = event



                            throw new RuntimeException();
                    
}


}
                
            

