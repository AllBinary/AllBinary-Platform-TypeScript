
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

        


import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DemoGameMidletState } from './DemoGameMidletState.js';
//not GWT import const DemoGameMidletState = globalThis.org.allbinary.game.midlet.DemoGameMidletState;

                
export class DemoGameMidletEvent extends AllBinaryEventObject {
        

    private demoGameMidletState: DemoGameMidletState;

public constructor (anyType: any = {}, demoGameMidletState: DemoGameMidletState){
            super(anyType);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.demoGameMidletState= demoGameMidletState;
    
}


    public init(anyType: any = {}){
this.setSource(anyType);
    
}


    public setDemoGameMidletState(demoGameMidletState: DemoGameMidletState){
this.demoGameMidletState= demoGameMidletState;
    
}


    public getDemoGameMidletState(): DemoGameMidletState{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.demoGameMidletState;
    
}


}



