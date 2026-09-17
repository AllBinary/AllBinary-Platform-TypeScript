
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

import { UserFactoryInterface } from '../../../../../org/allbinary/business/user/UserFactoryInterface.js';
//not GWT import const UserFactoryInterface

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

import { StringValidationUtil } from '../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserRole } from './UserRole.js';
//not GWT import - same folder const UserRole
import { BasicUserRole } from './BasicUserRole.js';
//not GWT import - same folder const BasicUserRole
import { UserRoleFactory } from './UserRoleFactory.js';
//not GWT import - same folder const UserRoleFactory

export class UserRoleB extends UserRole {
        

    public static roleVector: BasicArrayList = new BasicArrayListD();

                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static getRole(role: string): UserRole{
UserRoleFactory.getInstance();
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(role))
                        
                                    {
                                    
    var roleVector: BasicArrayList = UserRoleB.getAll()!;;
    

    var size: number = roleVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var userRole: UserRole = roleVector!.get(index) as UserRole;;
    

                        if(role.compareTo(userRole!.toString()) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return userRole;
    

                                    }
                                
}


                                    }
                                



                            throw new Exception("Unable to get role - Unknown Role = " +role);
                    
}


    public static getAll(): BasicArrayList{
UserRoleFactory.getInstance();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UserRoleB.roleVector;
    
}


protected constructor (aBasicUserRole: BasicUserRole, aUserFactoryInterface: UserFactoryInterface){
            super(aBasicUserRole, aUserFactoryInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
UserRoleB.roleVector!.add(this);
    
}


}



