
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
        



import { ForcedLogUtil } from "../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class AllBinarySensor
            extends Object
        
                , AllBinarySensorListener {
        

    public static readonly NULL_ALLBINARY_SENSOR: AllBinarySensor = new AllBinarySensor();
        
        

    private max: number = 100;
        
        

    public static setMax(max: number){
var max = max
AllBinarySensor.max= max
}


    public static getMax(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return max;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
protected constructor (){

            super();
            }


    public init(){
}


                @Throws(Exception::class)
            
    public update(){
}


    public getId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinarySensor.getMax();
    
}


    public shutdown(){
put(commonStrings!.START, this, "shutdown")
}


    public onSensorChange(){
log(commonStrings!.NOT_IMPLEMENTED, this)
}


}
                
            

