
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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
        
import { Visitor } from '../../../../org/allbinary/logic/util/visitor/Visitor.js';
      //not GWT import const Visitor = globalThis.org.allbinary.logic.util.visitor.Visitor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SelectRTSLayerVisitorFactoryInterface } from './SelectRTSLayerVisitorFactoryInterface.js';
//not GWT import const  = globalThis.org.allbinary.game.input.SelectRTSLayerVisitorFactoryInterface;

                import { SelectRTSLayerVisitor } from './SelectRTSLayerVisitor.js';
//not GWT import const  = globalThis.org.allbinary.game.input.SelectRTSLayerVisitor;

                import { SelectedRTSLayersPlayerGameInput } from './SelectedRTSLayersPlayerGameInput.js';
//not GWT import const  = globalThis.org.allbinary.game.input.SelectedRTSLayersPlayerGameInput;

                
export class SelectRTSLayerVisitorFactory
            extends Object
         implements SelectRTSLayerVisitorFactoryInterface {
        

    private static readonly instance: SelectRTSLayerVisitorFactory = new SelectRTSLayerVisitorFactory();

    public static getInstance(): SelectRTSLayerVisitorFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SelectRTSLayerVisitorFactory.instance;
    
}


private constructor (){

            super();
        }


    public create(selectedRTSLayersPlayerGameInput: SelectedRTSLayersPlayerGameInput): Visitor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new SelectRTSLayerVisitor();
    
}


}



