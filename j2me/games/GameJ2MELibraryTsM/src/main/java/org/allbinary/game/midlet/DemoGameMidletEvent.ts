
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
        



import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    

export class DemoGameMidletEvent extends AllBinaryEventObject {
        

    private demoGameMidletState: DemoGameMidletState
public constructor (anyType: any = {}, demoGameMidletState: DemoGameMidletState)                        

                            : super(anyType){

            super();
            var anyType = anyType
var demoGameMidletState = demoGameMidletState


                            //For kotlin this is before the body of the constructor.
                    
this.demoGameMidletState= demoGameMidletState
}


    public init(anyType: any = {}){
var anyType = anyType
this.this.setSource(anyType)
}


    public setDemoGameMidletState(demoGameMidletState: DemoGameMidletState){
var demoGameMidletState = demoGameMidletState
this.demoGameMidletState= demoGameMidletState
}


    public getDemoGameMidletState(): DemoGameMidletState{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return demoGameMidletState;
    
}


}
                
            

