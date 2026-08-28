
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
        
//not game specific package import { JsType } from '../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { ForcedLogUtil } from '../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinarySensorListener } from './AllBinarySensorListener.js';

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



