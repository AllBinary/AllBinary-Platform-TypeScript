
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
        



import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TwoDimensionalConstraintInterface } from "./TwoDimensionalConstraintInterface.js";

import { SizeConstraintInterface } from "./SizeConstraintInterface.js";

export class TwoDimensionalConstraint
            extends Object
         implements TwoDimensionalConstraintInterface {
        

    private widthSizeConstraintInterface: SizeConstraintInterface

    private heightSizeConstraintInterface: SizeConstraintInterface
public constructor (node: Node){

            super();
        var node = node
}


    public getHeight(): SizeConstraintInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.heightSizeConstraintInterface;
    
}


    public getWidth(): SizeConstraintInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.widthSizeConstraintInterface;
    
}


    public setHeight(heightSizeConstraintInterface: SizeConstraintInterface){
var heightSizeConstraintInterface = heightSizeConstraintInterface
this.heightSizeConstraintInterface= heightSizeConstraintInterface;
    
}


    public setWidth(widthSizeConstraintInterface: SizeConstraintInterface){
var widthSizeConstraintInterface = widthSizeConstraintInterface
this.widthSizeConstraintInterface= widthSizeConstraintInterface;
    
}


}
                
            

