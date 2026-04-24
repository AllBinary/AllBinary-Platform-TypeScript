
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
        



import { AllBinaryGameLayer } from "../../../../org/allbinary/game/layer/AllBinaryGameLayer.js";

    
import { VelocityProperties } from "../../../../org/allbinary/game/physics/velocity/VelocityProperties.js";

    
import { BasicDecimal } from "../../../../org/allbinary/logic/math/BasicDecimal.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicConstantVelocityMovement } from "./BasicConstantVelocityMovement.js";

export class OscillateVelocityMovement extends BasicConstantVelocityMovement {
        

    private oscillateMin: number

    private oscillateMax: number

    private oscillate: number= 0

    private oscillatePositive: boolean= false
public constructor (speedBasicDecimal: BasicDecimal, oscillateMin: number, oscillateMax: number){
            super(speedBasicDecimal, new VelocityProperties(speedBasicDecimal!.getUnscaled(), speedBasicDecimal!.getUnscaled()));
                    var speedBasicDecimal = speedBasicDecimal
var oscillateMin = oscillateMin
var oscillateMax = oscillateMax


                            //For kotlin this is before the body of the constructor.
                    
this.oscillateMin= oscillateMin;
    
this.oscillateMax= oscillateMax;
    
}


                //@Throws(Error::class)
            
    public process(layer: AllBinaryGameLayer){
var layer = layer
super.process(layer);
    

                        if(this.oscillate < this.oscillateMin)
                        
                                    {
                                    this.oscillatePositive= true;
    

                                    }
                                
                             else 
                        if(this.oscillate > this.oscillateMax)
                        
                                    {
                                    this.oscillatePositive= false;
    

                                    }
                                

                        if(this.oscillatePositive)
                        
                                    {
                                    this.oscillate++;
    
this.getVelocityProperties()!.getVelocityXBasicDecimalP()!.add(2000);
    

                                    }
                                
                        else {
                            this.oscillate--;
    
this.getVelocityProperties()!.getVelocityXBasicDecimalP()!.subtract(2000);
    

                        }
                            
}


}
                
            

