
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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


        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GroupCommonFactory
            extends Object
         {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): GroupCommonFactory{

                        if(GroupCommonFactory.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    GroupCommonFactory.instance= new GroupCommonFactory();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GroupCommonFactory.instance as GroupCommonFactory;
    
}


    public readonly ID: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(10)!;

    public readonly GROUP_NAME_LABEL: string = "Group Name: ";

    public readonly ID_LABEL: string = " Id: ";

    public readonly ADDING_LABEL: string = "Adding: ";

    public readonly TO_LABEL: string = " to: ";

}
                
            

