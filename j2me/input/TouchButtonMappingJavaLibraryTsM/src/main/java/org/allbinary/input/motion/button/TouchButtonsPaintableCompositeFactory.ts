
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
        
//not game specific package import { InputMappingInterface } from '../../../../../org/allbinary/game/input/mapping/InputMappingInterface.js';
      const InputMappingInterface = globalThis.org.allbinary.game.input.mapping.InputMappingInterface;

      
//not game specific package import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { ProcessPaintable } from '../../../../../org/allbinary/graphics/paint/ProcessPaintable.js';
      const ProcessPaintable = globalThis.org.allbinary.graphics.paint.ProcessPaintable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TouchButtonsPaintableComposite } from './TouchButtonsPaintableComposite.js';

export class TouchButtonsPaintableCompositeFactory
            extends Object
         {
        

    public static getInstance(inputMappingInterface: InputMappingInterface, basicColor: BasicColor): ProcessPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TouchButtonsPaintableComposite(inputMappingInterface, basicColor);
    
}


}
                
            

