
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
import { Group } from '../../../../../../org/allbinary/game/identification/Group.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CapitalEventHandler } from './CapitalEventHandler.js';

export class CapitalEventHandlerFactory
            extends Object
         {
        

    private static readonly capitalEventHandlerArray: CapitalEventHandler[]

                private static initResult: number = CapitalEventHandlerFactory.init();
                private static init(): number { 
                    
capitalEventHandlerArray= new Array(10);
    




                        for (
    var index: number = CapitalEventHandlerFactory.capitalEventHandlerArray!.length -1;
index >= 0; index--)
        {
CapitalEventHandlerFactory.capitalEventHandlerArray[index]= new CapitalEventHandler();
    
}



                    return 0;
                }
            
    public static getInstance(groupInterface: Group): CapitalEventHandler{
var groupInterface = groupInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CapitalEventHandlerFactory.capitalEventHandlerArray[Math.round(groupInterface!.getGroupId();)]!;
    
}


    public static removeAll(){




                        for (
    var index: number = CapitalEventHandlerFactory.capitalEventHandlerArray!.length -1;
index >= 0; index--)
        {
CapitalEventHandlerFactory.capitalEventHandlerArray[index]!.removeAllListeners();
    
}

}


}
                
            

