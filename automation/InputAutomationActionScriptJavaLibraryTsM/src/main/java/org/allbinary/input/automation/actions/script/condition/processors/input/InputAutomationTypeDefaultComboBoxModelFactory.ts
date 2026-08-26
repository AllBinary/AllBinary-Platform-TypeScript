
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
        
            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
//not game specific package import { Set } from '../../../../../../../../../java/util/Set.js';
      const Set = globalThis.java.util.Set;

      
//not game specific package import { swing } from '../../../../../../../../../javax/swing.js';
      const swing = globalThis.javax.swing;

      
//not game specific package import { InputRobotFactory } from '../../../../../../../../../org/allbinary/input/automation/robot/InputRobotFactory.js';
      const InputRobotFactory = globalThis.org.allbinary.input.automation.robot.InputRobotFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DefaultComboBoxModel } from './DefaultComboBoxModel.js';

export class InputAutomationTypeDefaultComboBoxModelFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(): DefaultComboBoxModel{

    var defaultComboBoxModel: DefaultComboBoxModel = new DefaultComboBoxModel();;
    

    var set: Set = InputRobotFactory.getInstance()!.get()!.keySet()!;;
    

    var nameArray: any[] = set.toArray()!;;
    

    var size: number = nameArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
defaultComboBoxModel!.addElement(nameArray[index]! as string);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return defaultComboBoxModel;
    
}


private constructor (){

            super();
        }


}
                
            

