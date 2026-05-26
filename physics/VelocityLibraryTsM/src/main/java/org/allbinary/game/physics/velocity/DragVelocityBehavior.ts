
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
import { BasicDecimal } from '../../../../../org/allbinary/logic/math/BasicDecimal.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { VelocityBehaviorBase } from './VelocityBehaviorBase.js';
import { BasicVelocityProperties } from './BasicVelocityProperties.js';

export class DragVelocityBehavior extends VelocityBehaviorBase {
        

    public static readonly instance: DragVelocityBehavior = new DragVelocityBehavior();

    public reduce(velocityProperties: BasicVelocityProperties, nominator: number, denominator: number){

                        if(velocityProperties!.getVelocityXBasicDecimalP()!.getUnscaled() != 0L)
                        
                                    {
                                    
    var basicDecimal: BasicDecimal = velocityProperties!.getVelocityXBasicDecimalP()!;;
    
basicDecimal!.multiplyint(nominator);
    
basicDecimal!.divideint(denominator);
    

                                    }
                                

                        if(velocityProperties!.getVelocityYBasicDecimalP()!.getUnscaled() != 0L)
                        
                                    {
                                    
    var basicDecimal: BasicDecimal = velocityProperties!.getVelocityYBasicDecimalP()!;;
    
basicDecimal!.multiplyint(nominator);
    
basicDecimal!.divideint(denominator);
    

                                    }
                                
}


    public reduceX(velocityProperties: BasicVelocityProperties, nominator: number, denominator: number){

    var basicDecimal: BasicDecimal = velocityProperties!.getVelocityXBasicDecimalP()!;;
    

                        if(basicDecimal!.getUnscaled() != 0L)
                        
                                    {
                                    basicDecimal!.multiplyint(nominator);
    
basicDecimal!.divideint(denominator);
    

                                    }
                                
}


    public reduceY(velocityProperties: BasicVelocityProperties, nominator: number, denominator: number){

                        if(velocityProperties!.getVelocityYBasicDecimalP()!.getUnscaled() != 0L)
                        
                                    {
                                    
    var basicDecimal: BasicDecimal = velocityProperties!.getVelocityYBasicDecimalP()!;;
    
basicDecimal!.multiplyint(nominator);
    
basicDecimal!.divideint(denominator);
    

                                    }
                                
}


}
                
            

