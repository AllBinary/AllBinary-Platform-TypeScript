
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
        



import { swing } from "../../../../../../../../../javax/swing.js";

    
import { KeyStrokeMap } from "../../../../../../../../../abbot/tester/KeyStrokeMap.js";

    
import { KeySingletonFactory } from "../../../../../../../../../org/allbinary/input/KeySingletonFactory.js";

    

export class KeyCharDefaultComboBoxModelFactory
            extends Object
         {
        

    public static getInstance(): DefaultComboBoxModel{

    var defaultComboBoxModel: DefaultComboBoxModel = new DefaultComboBoxModel();
        
        


    var keyArray: Integer[] = KeySingletonFactory.getArray()!;
        
        





                        for (
    var index: number = 0;
        
        
index < keyArray!.length; index++)
        {

    var nextKey: Integer = keyArray[index]!;
        
        


    var keyStroke: KeyStroke = KeyStroke.getKeyStroke(nextKey!.toInt(), 0)!;
        
        


    var keyChar: string = KeyStrokeMap.getChar(keyStroke)!;
        
        

addElement(Character.toString(keyChar))
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return defaultComboBoxModel;
    
}

private constructor (){

            super();
            }


}
                
            

