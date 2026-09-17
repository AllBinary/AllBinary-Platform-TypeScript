
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
        
import { Activity } from '../../../../android/app/Activity.js';
//not GWT import const Activity

import { MotionEvent } from '../../../../android/view/MotionEvent.js';
//not GWT import const MotionEvent

import { View } from '../../../../android/view/View.js';
//not GWT import const View

import { GenericMotionEventVerifyInterface } from '../../../../org/allbinary/android/GenericMotionEventVerifyInterface.js';
//not GWT import const GenericMotionEventVerifyInterface

import { GameFeatureEvent } from '../../../../org/allbinary/game/configuration/event/GameFeatureEvent.js';
//not GWT import const GameFeatureEvent

import { GameFeatureListenerInterface } from '../../../../org/allbinary/game/configuration/event/GameFeatureListenerInterface.js';
//not GWT import const GameFeatureListenerInterface

import { GameInitializedEvent } from '../../../../org/allbinary/game/configuration/event/GameInitializedEvent.js';
//not GWT import const GameInitializedEvent

import { GameInitializedListenerInterface } from '../../../../org/allbinary/game/configuration/event/GameInitializedListenerInterface.js';
//not GWT import const GameInitializedListenerInterface

import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SimpleProgressActivityInterface } from './SimpleProgressActivityInterface.js';
//not GWT import - same folder const SimpleProgressActivityInterface
import { KeyInputViewCompositeInterface } from './KeyInputViewCompositeInterface.js';
//not GWT import - same folder const KeyInputViewCompositeInterface

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



