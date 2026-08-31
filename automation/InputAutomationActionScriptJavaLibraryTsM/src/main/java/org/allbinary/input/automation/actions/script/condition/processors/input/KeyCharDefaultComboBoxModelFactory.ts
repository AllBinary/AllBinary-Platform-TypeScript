
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
      //not GWT import const swing = globalThis.javax.swing;

      
import { KeyStrokeMap } from '../../../../../../../../../abbot/tester/KeyStrokeMap.js';
      //not GWT import const KeyStrokeMap = globalThis.abbot.tester.KeyStrokeMap;

      
import { KeySingletonFactory } from '../../../../../../../../../org/allbinary/input/KeySingletonFactory.js';
      //not GWT import const KeySingletonFactory = globalThis.org.allbinary.input.KeySingletonFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DefaultComboBoxModel } from './DefaultComboBoxModel.js';
//not GWT import const DefaultComboBoxModel = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.DefaultComboBoxModel;

                import { KeyStroke } from './KeyStroke.js';
//not GWT import const KeyStroke = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.KeyStroke;

                
export class KeyCharDefaultComboBoxModelFactory
            extends Object
         {
        

    public static getInstance(): DefaultComboBoxModel{

    var defaultComboBoxModel: DefaultComboBoxModel = new DefaultComboBoxModel();;
    

    var keyArray: Integer[] = KeySingletonFactory.getArray()!;;
    




                        for (
    var index: number = 0;index < keyArray!.length; index++)
        {

    var nextKey: Integer = keyArray[index]!;;
    

    var keyStroke: KeyStroke = KeyStroke.getKeyStroke(nextKey!.intValue(), 0)!;;
    

    var keyChar: string = KeyStrokeMap.getChar(keyStroke)!;;
    
defaultComboBoxModel!.addElement(Character.toString(keyChar));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return defaultComboBoxModel;
    
}


private constructor (){

            super();
        }


}



