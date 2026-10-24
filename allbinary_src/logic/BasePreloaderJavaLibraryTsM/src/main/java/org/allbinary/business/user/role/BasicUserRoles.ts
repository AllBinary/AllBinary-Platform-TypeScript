
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2026 AllBinary 
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
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicUserRole } from './BasicUserRole.js';
//not GWT import - same folder const BasicUserRole

export class BasicUserRoles
            extends Object
         {
        

    private static readonly instance: BasicUserRoles = new BasicUserRoles();

    public static getInstance(): BasicUserRoles{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicUserRoles.instance;
    
}


    public readonly roleVector: BasicArrayList = new BasicArrayListD();

                //@Throws(Exception.constructor)
            
    public getRole(role: string): BasicUserRole{

    var roleVector: BasicArrayList = this.getAll()!;;
    

    var size: number = roleVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var userRole: BasicUserRole = roleVector!.get(index) as BasicUserRole;;
    

                        if(role.compareTo(userRole!.toString()) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return userRole;
    

                                    }
                                
}




                            throw new Exception("Unable to get role - Unknown Role");
                    
}


    public getAll(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.roleVector;
    
}


}



