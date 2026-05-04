
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
        



            import { Object } from '../../../../../../../../../java/lang/Object.js';


        
            import { Character } from '../../../../../../../../../java/lang/Character.js';
        
            import { Integer } from '../../../../../../../../../java/lang/Integer.js';
        
import { swing } from '../../../../../../../../../javax/swing.js';

    
import { KeyStrokeMap } from '../../../../../../../../../abbot/tester/KeyStrokeMap.js';

    
import { KeySingletonFactory } from '../../../../../../../../../org/allbinary/input/KeySingletonFactory.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DefaultComboBoxModel } from './DefaultComboBoxModel.js';
import { KeyStroke } from './KeyStroke.js';

export class KeyCharDefaultComboBoxModelFactory
            extends Object
         {
        

    public static getInstance(): DefaultComboBoxModel{

    var defaultComboBoxModel: DefaultComboBoxModel = new DefaultComboBoxModel();
;
    

    var keyArray: number[] = KeySingletonFactory.getArray()!;
;
    




                        for (
    var index: number = 0;
index < keyArray!.length; index++)
        {

    var nextKey: number = keyArray[index]!;
;
    

    var keyStroke: KeyStroke = KeyStroke.getKeyStroke(nextKey0)!;
;
    

    var keyChar: string = KeyStrokeMap.getChar(keyStroke)!;
;
    
defaultComboBoxModel!.addElement(Character.toString(keyChar));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return defaultComboBoxModel;
    
}

private constructor (){

            super();
        }


}
                
            

