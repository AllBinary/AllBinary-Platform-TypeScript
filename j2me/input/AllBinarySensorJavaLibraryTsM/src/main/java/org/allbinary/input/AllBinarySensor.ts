
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinarySensorListener } from './AllBinarySensorListener.js';
//not GWT import - same folder const AllBinarySensorListener = globalThis.org.allbinary.input.AllBinarySensorListener;

                
export class AllBinarySensor
            extends Object
         implements AllBinarySensorListener {
        

    public static readonly NULL_ALLBINARY_SENSOR: AllBinarySensor = new AllBinarySensor();

    private static max: number = 100;

    public static setMax(max: number){
AllBinarySensor.max= max;
    
}


    public static getMax(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinarySensor.max;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

protected constructor (){

            super();
        }


    public init(){
}


                //@Throws(Exception.constructor)
            
    public update(){
}


    public getId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinarySensor.getMax();;
    
}


    public shutdown(){
this.logUtil!.putF(this.commonStrings!.START, this, "shutdown");
    
}


    public onSensorChange(){
ForcedLogUtil.log(this.commonStrings!.NOT_IMPLEMENTED, this);
    
}


}



