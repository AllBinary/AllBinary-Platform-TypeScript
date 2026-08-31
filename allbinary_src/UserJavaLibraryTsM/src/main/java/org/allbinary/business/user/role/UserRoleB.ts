
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
        
import { Vector } from '../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { UserFactoryInterface } from '../../../../../org/allbinary/business/user/UserFactoryInterface.js';
      //not GWT import const UserFactoryInterface = globalThis.org.allbinary.business.user.UserFactoryInterface;

      
import { StringValidationUtil } from '../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserRole } from './UserRole.js';
//not GWT import const UserRole = globalThis.org.allbinary.business.user.role.UserRole;

                import { BasicUserRole } from './BasicUserRole.js';
//not GWT import const BasicUserRole = globalThis.org.allbinary.business.user.role.BasicUserRole;

                import { UserRoleFactory } from './UserRoleFactory.js';
//not GWT import const UserRoleFactory = globalThis.org.allbinary.business.user.role.UserRoleFactory;

                
export class UserRoleB extends UserRole {
        

    public static roleVector: Vector = new Vector();

                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static getRole(role: string): UserRole{
UserRoleFactory.getInstance();
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(role))
                        
                                    {
                                    
    var roleVector: Vector = UserRoleB.getAll()!;;
    

    var size: number = roleVector!.length!;;
    




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


    public static getAll(): Vector{
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



