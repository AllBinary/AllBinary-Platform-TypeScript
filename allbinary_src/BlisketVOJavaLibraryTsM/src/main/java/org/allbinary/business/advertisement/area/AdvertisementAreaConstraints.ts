
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
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { DomSearchHelper } from '../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
//not game specific package import { DisplayInBrowserContraints } from '../../../../../org/allbinary/logic/control/contraints/display/browser/DisplayInBrowserContraints.js';
      const DisplayInBrowserContraints = globalThis.org.allbinary.logic.control.contraints.display.browser.DisplayInBrowserContraints;

      
//not game specific package import { DisplayInBrowserContraintsInterface } from '../../../../../org/allbinary/logic/control/contraints/display/browser/DisplayInBrowserContraintsInterface.js';
      const DisplayInBrowserContraintsInterface = globalThis.org.allbinary.logic.control.contraints.display.browser.DisplayInBrowserContraintsInterface;

      
//not game specific package import { TwoDimensionalConstraint } from '../../../../../org/allbinary/logic/control/contraints/size/TwoDimensionalConstraint.js';
      const TwoDimensionalConstraint = globalThis.org.allbinary.logic.control.contraints.size.TwoDimensionalConstraint;

      
//not game specific package import { TwoDimensionalConstraintInterface } from '../../../../../org/allbinary/logic/control/contraints/size/TwoDimensionalConstraintInterface.js';
      const TwoDimensionalConstraintInterface = globalThis.org.allbinary.logic.control.contraints.size.TwoDimensionalConstraintInterface;

      
//not game specific package import { Document } from '../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AdvertisementAreaConstraintsInterface } from './AdvertisementAreaConstraintsInterface.js';
import { AdvertisementAreaData } from './AdvertisementAreaData.js';

export class AdvertisementAreaConstraints
            extends Object
         implements AdvertisementAreaConstraintsInterface {
        

    private displayInBrowserContraintsInterface: DisplayInBrowserContraintsInterface;

    private twoDimensionConstraintsInterface: TwoDimensionalConstraintInterface;

public constructor (document: Document){

            super();
        
    var node: Node = DomSearchHelper.getNode(AdvertisementAreaData.getInstance()!.NAME, document.getChildNodes())!;;
    
this.displayInBrowserContraintsInterface= new DisplayInBrowserContraints(node);
    
this.twoDimensionConstraintsInterface= new TwoDimensionalConstraint(node);
    
}


    public setDisplayInBrowserContraints(displayInBrowserContraintsInterface: DisplayInBrowserContraintsInterface){
this.displayInBrowserContraintsInterface= displayInBrowserContraintsInterface;
    
}


    public getTwoDimensionContraints(twoDimensionConstraintsInterface: TwoDimensionalConstraintInterface){
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
                
            

