
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
        



import { TwoDimensionalConstraintInterface } from "../../../../../org/allbinary/logic/control/contraints/size/TwoDimensionalConstraintInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AdvertisementProduct
            extends Object
         implements AdvertisementProductInterface {
        

    private type: string

    private link: string

    private number: number= 0

    private constraint: TwoDimensionalConstraintInterface
public constructor (){

            super();
            }


    public getType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.type;
    
}


    public getLink(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.link;
    
}


    public getNumber(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.number;
    
}


    public getTwoDimensionalConstraint(): TwoDimensionalConstraintInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.constraint;
    
}


}
                
            

