
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
        
            //not plain js import { Character }
            const Character = (globalThis.java?.lang?.Character ?? class {}) as typeof globalThis.java.lang.Character;
            type Character<T = any, U = any> = typeof Character extends abstract new (...args: any[]) => infer Instance ? Instance : typeof Character;
        
            import { Integer } from '../../../../../../../../../java/lang/Integer.js';
        
import { swing } from '../../../../../../../../../javax/swing.js';
//not GWT import const swing

import { KeyStrokeMap } from '../../../../../../../../../abbot/tester/KeyStrokeMap.js';
//not GWT import const KeyStrokeMap

import { KeySingletonFactory } from '../../../../../../../../../org/allbinary/input/KeySingletonFactory.js';
//not GWT import const KeySingletonFactory

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DefaultComboBoxModel } from './DefaultComboBoxModel.js';
//sameFolderImports - not GWT import - same folder const DefaultComboBoxModel
import { KeyStroke } from './KeyStroke.js';
//sameFolderImports - not GWT import - same folder const KeyStroke

export class KeyCharDefaultComboBoxModelFactory
            extends Object
         {
        

    public static getInstance(): DefaultComboBoxModel{

    let defaultComboBoxModel: DefaultComboBoxModel = new DefaultComboBoxModel();;
    

    let keyArray: Integer[] = KeySingletonFactory.getArray()!;;
    




                        for (
    let index: number = 0;index < keyArray!.length; index++)
        {

    let nextKey: Integer = keyArray[index]!;;
    

    let keyStroke: KeyStroke = KeyStroke.getKeyStroke(nextKey!.intValue(), 0)!;;
    

    let keyChar: string = KeyStrokeMap.getChar(keyStroke)!;;
    
defaultComboBoxModel!.addElement(Character.toString(keyChar));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return defaultComboBoxModel;
    
}


private constructor (){

            super();
        }


}

