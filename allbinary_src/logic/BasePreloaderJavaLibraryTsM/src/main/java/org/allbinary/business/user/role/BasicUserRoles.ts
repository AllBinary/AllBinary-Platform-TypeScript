
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
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
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

    let roleVector: BasicArrayList = this.getAll()!;;
    

    let size: number = roleVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let userRole: BasicUserRole = roleVector!.get(index) as BasicUserRole;;
    

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

