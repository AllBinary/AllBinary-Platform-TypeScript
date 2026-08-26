
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
//not game specific package import { Activity } from '../../../../android/app/Activity.js';
      const Activity = globalThis.android.app.Activity;

      
//not game specific package import { MotionEvent } from '../../../../android/view/MotionEvent.js';
      const MotionEvent = globalThis.android.view.MotionEvent;

      
//not game specific package import { View } from '../../../../android/view/View.js';
      const View = globalThis.android.view.View;

      
//not game specific package import { GenericMotionEventVerifyInterface } from '../../../../org/allbinary/android/GenericMotionEventVerifyInterface.js';
      const GenericMotionEventVerifyInterface = globalThis.org.allbinary.android.GenericMotionEventVerifyInterface;

      
//not game specific package import { GameFeatureEvent } from '../../../../org/allbinary/game/configuration/event/GameFeatureEvent.js';
      const GameFeatureEvent = globalThis.org.allbinary.game.configuration.event.GameFeatureEvent;

      
//not game specific package import { GameFeatureListenerInterface } from '../../../../org/allbinary/game/configuration/event/GameFeatureListenerInterface.js';
      const GameFeatureListenerInterface = globalThis.org.allbinary.game.configuration.event.GameFeatureListenerInterface;

      
//not game specific package import { GameInitializedEvent } from '../../../../org/allbinary/game/configuration/event/GameInitializedEvent.js';
      const GameInitializedEvent = globalThis.org.allbinary.game.configuration.event.GameInitializedEvent;

      
//not game specific package import { GameInitializedListenerInterface } from '../../../../org/allbinary/game/configuration/event/GameInitializedListenerInterface.js';
      const GameInitializedListenerInterface = globalThis.org.allbinary.game.configuration.event.GameInitializedListenerInterface;

      
//not game specific package import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SimpleProgressActivityInterface } from './SimpleProgressActivityInterface.js';
import { KeyInputViewCompositeInterface } from './KeyInputViewCompositeInterface.js';

export class MidletActivityBase extends Activity implements GameFeatureListenerInterface, GameInitializedListenerInterface, SimpleProgressActivityInterface, KeyInputViewCompositeInterface, GenericMotionEventVerifyInterface {
        

    public onGameFeatureChange(gameFeatureEvent: GameFeatureEvent){
}


    public onEvent(eventObject: AllBinaryEventObject){
}


    public onGameInitialized(gameInitializedEvent: GameInitializedEvent){
}


                //@Throws(Exception.constructor)
            
    public onSetProgress(value: number, text: string){
}


                //@Throws(Exception.constructor)
            
    public onDismissProgress(animationSequence: number[]){
}


                //@Throws(Exception.constructor)
            
    public onShowProgress(indeterminate: boolean, animationSequence: number[]){
}


    public getRootView(): View{



                            throw new RuntimeException();
                    
}


    public getView(): View{



                            throw new RuntimeException();
                    
}


    public setKeyInputView(keyInputView: View){
}


    public onGenericMotionEvent(event: MotionEvent): boolean{



                            throw new RuntimeException();
                    
}


}
                
            

