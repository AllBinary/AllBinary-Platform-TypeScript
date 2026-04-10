
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
        



import { KeyEvent } from "../../../../../../../../../java/awt/event/KeyEvent.js";

    
import { swing } from "../../../../../../../../../javax/swing.js";

    
import { KeySingletonFactory } from "../../../../../../../../../org/allbinary/input/KeySingletonFactory.js";

    

export class KeyNameDefaultComboBoxModelFactory
            extends Object
         {
        

    public static getInstance(): DefaultComboBoxModel{

    var defaultComboBoxModel: DefaultComboBoxModel = new DefaultComboBoxModel();
        
        


    var keyArray: Integer[] = KeySingletonFactory.getArray()!;
        
        





                        for (
    var index: number = 0;
        
        
index < keyArray!.length; index++)
        {

    var keyAsString: string = KeyEvent.getKeyText(keyArray[index]!)!;
        
        

addElement(keyAsString)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return defaultComboBoxModel;
    
}

private constructor (){

            super();
            }


}
                
            

