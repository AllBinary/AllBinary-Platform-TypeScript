
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

    

export class MathVector
            extends Object
        
                , MathVectorInterface {
        

    private magnitudeBasicDecimal: BasicDecimal

    private direction: number

    resultBasicDecimal: BasicDecimal
public constructor (magnitudeBasicDecimal: BasicDecimal, direction: number){

            super();
            var magnitudeBasicDecimal = magnitudeBasicDecimal
var direction = direction
this.magnitudeBasicDecimal= magnitudeBasicDecimal
this.direction= direction
}


    public getMagnitude(): BasicDecimal{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.magnitudeBasicDecimal;
    
}


    public getDirection(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.direction;
    
}


    public getResult(): BasicDecimal{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resultBasicDecimal;
    
}


}
                
            

