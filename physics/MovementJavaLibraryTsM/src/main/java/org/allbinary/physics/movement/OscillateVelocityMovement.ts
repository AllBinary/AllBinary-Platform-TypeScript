
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { AllBinaryGameLayer } from '../../../../org/allbinary/game/layer/AllBinaryGameLayer.js';
      
import { VelocityProperties } from '../../../../org/allbinary/game/physics/velocity/VelocityProperties.js';
      
import { BasicDecimal } from '../../../../org/allbinary/logic/math/BasicDecimal.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicConstantVelocityMovement } from './BasicConstantVelocityMovement.js';

export class OscillateVelocityMovement extends BasicConstantVelocityMovement {
        

    private oscillateMin: number

    private oscillateMax: number

    private oscillate: number= 0

    private oscillatePositive: boolean= false
public constructor (speedBasicDecimal: BasicDecimal, oscillateMin: number, oscillateMax: number){
            super(speedBasicDecimal, new VelocityProperties(Math.round(speedBasicDecimal!.getUnscaled()), Math.round(speedBasicDecimal!.getUnscaled())));
                    

                            //For kotlin this is before the body of the constructor.
                    
this.oscillateMin= oscillateMin;
    
this.oscillateMax= oscillateMax;
    
}


                //@Throws(Exception.constructor)
            
    public process(layer: AllBinaryGameLayer){
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
    
this.getVelocityProperties()!.getVelocityXBasicDecimalP()!.addint(2000);
    

                                    }
                                
                        else {
                            this.oscillate--;
    
this.getVelocityProperties()!.getVelocityXBasicDecimalP()!.subtractint(2000);
    

                        }
                            
}


}
                
            

