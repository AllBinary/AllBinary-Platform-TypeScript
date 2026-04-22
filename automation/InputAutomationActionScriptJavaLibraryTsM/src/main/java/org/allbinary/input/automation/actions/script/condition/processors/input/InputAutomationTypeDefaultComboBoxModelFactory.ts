
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
        



import { Set } from "../../../../../../../../../java/util/Set.js";

    
import { swing } from "../../../../../../../../../javax/swing.js";

    
import { InputRobotFactory } from "../../../../../../../../../org/allbinary/input/automation/robot/InputRobotFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { DefaultComboBoxModel } from "./DefaultComboBoxModel.js";

export class InputAutomationTypeDefaultComboBoxModelFactory
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getInstance(): DefaultComboBoxModel{

    var defaultComboBoxModel: DefaultComboBoxModel = new DefaultComboBoxModel();
        
        
;
    

    var set: Set = InputRobotFactory.getInstance()!.get()!.keySet()!;
        
        
;
    

    var nameArray: any[] = set.toArray()!;
        
        
;
    

    var size: number = nameArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
defaultComboBoxModel!.addElement(nameArray[index]! as String);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return defaultComboBoxModel;
    
}

private constructor (){

            super();
        }


}
                
            

