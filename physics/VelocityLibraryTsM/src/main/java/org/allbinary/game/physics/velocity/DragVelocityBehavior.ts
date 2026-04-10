
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
        



import { BasicDecimal } from "../../../../../org/allbinary/logic/math/BasicDecimal.js";

    

export class DragVelocityBehavior extends VelocityBehaviorBase {
        

    public static readonly instance: DragVelocityBehavior = new DragVelocityBehavior();
        
        

    public reduce(velocityProperties: BasicVelocityProperties, nominator: number, denominator: number){
    //var velocityProperties = velocityProperties
    //var nominator = nominator
    //var denominator = denominator

    
                        if(velocityProperties!.getVelocityXBasicDecimalP()!.getUnscaled() != 0L)
                        
                                    {
                                    
    var basicDecimal: BasicDecimal = velocityProperties!.getVelocityXBasicDecimalP()!;
        
        

multiply(nominator)
divide(denominator)

                                    }
                                

    
                        if(velocityProperties!.getVelocityYBasicDecimalP()!.getUnscaled() != 0L)
                        
                                    {
                                    
    var basicDecimal: BasicDecimal = velocityProperties!.getVelocityYBasicDecimalP()!;
        
        

multiply(nominator)
divide(denominator)

                                    }
                                
}


    public reduceX(velocityProperties: BasicVelocityProperties, nominator: number, denominator: number){
    //var velocityProperties = velocityProperties
    //var nominator = nominator
    //var denominator = denominator

    var basicDecimal: BasicDecimal = velocityProperties!.getVelocityXBasicDecimalP()!;
        
        


    
                        if(basicDecimal!.getUnscaled() != 0L)
                        
                                    {
                                    multiply(nominator)
divide(denominator)

                                    }
                                
}


    public reduceY(velocityProperties: BasicVelocityProperties, nominator: number, denominator: number){
    //var velocityProperties = velocityProperties
    //var nominator = nominator
    //var denominator = denominator

    
                        if(velocityProperties!.getVelocityYBasicDecimalP()!.getUnscaled() != 0L)
                        
                                    {
                                    
    var basicDecimal: BasicDecimal = velocityProperties!.getVelocityYBasicDecimalP()!;
        
        

multiply(nominator)
divide(denominator)

                                    }
                                
}


}
                
            

