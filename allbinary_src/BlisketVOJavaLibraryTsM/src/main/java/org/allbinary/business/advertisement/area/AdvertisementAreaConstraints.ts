
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
        



import { DomSearchHelper } from "../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { DisplayInBrowserContraints } from "../../../../../org/allbinary/logic/control/contraints/display/browser/DisplayInBrowserContraints.js";

    
import { DisplayInBrowserContraintsInterface } from "../../../../../org/allbinary/logic/control/contraints/display/browser/DisplayInBrowserContraintsInterface.js";

    
import { TwoDimensionalConstraint } from "../../../../../org/allbinary/logic/control/contraints/size/TwoDimensionalConstraint.js";

    
import { TwoDimensionalConstraintInterface } from "../../../../../org/allbinary/logic/control/contraints/size/TwoDimensionalConstraintInterface.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AdvertisementAreaData } from "./AdvertisementAreaData.js";

export class AdvertisementAreaConstraints
            extends Object
         implements AdvertisementAreaConstraintsInterface {
        

    private displayInBrowserContraintsInterface: DisplayInBrowserContraintsInterface

    private twoDimensionConstraintsInterface: TwoDimensionalConstraintInterface
public constructor (document: Document){

            super();
            var document = document

    var node: Node = DomSearchHelper.getNode(AdvertisementAreaData.getInstance()!.NAME, document.getChildNodes())!;
        
        
;
    
this.displayInBrowserContraintsInterface= new DisplayInBrowserContraints(node);
    
this.twoDimensionConstraintsInterface= new TwoDimensionalConstraint(node);
    
}


    public setDisplayInBrowserContraints(displayInBrowserContraintsInterface: DisplayInBrowserContraintsInterface){
var displayInBrowserContraintsInterface = displayInBrowserContraintsInterface
this.displayInBrowserContraintsInterface= displayInBrowserContraintsInterface;
    
}


    public getTwoDimensionContraints(twoDimensionConstraintsInterface: TwoDimensionalConstraintInterface){
var twoDimensionConstraintsInterface = twoDimensionConstraintsInterface
this.twoDimensionConstraintsInterface= twoDimensionConstraintsInterface;
    
}


    public getDisplayInBrowserContraints(): DisplayInBrowserContraintsInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.displayInBrowserContraintsInterface;
    
}


    public getTwoDimensionContraints(): TwoDimensionalConstraintInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.twoDimensionConstraintsInterface;
    
}


}
                
            

