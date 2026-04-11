
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
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../../../../../java/util/Vector.js";

    
import { UserFactoryInterface } from "../../../../../org/allbinary/business/user/UserFactoryInterface.js";

    
import { StringValidationUtil } from "../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    

export class UserRoleB extends UserRole {
        

    public roleVector: Vector = new Vector();
        
        

                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static getRole(role: string): UserRole{
var role = role
UserRoleFactory.getInstance();
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(role);

                        )
                        
                                    {
                                    
    var roleVector: Vector = UserRoleB.getAll()!;
        
        
;
    

    var size: number = roleVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var userRole: UserRole = roleVector!.get(index);

                         as UserRole;
        
        
;
    

                        if(role.compareTo(userRole!.toString()) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return userRole;
    

                                    }
                                
}


                                    }
                                



                            throw Error("Unable to get role - Unknown Role = " +role)
}


    public static getAll(): Vector{
UserRoleFactory.getInstance();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UserRoleB.roleVector;
    
}

protected constructor (aBasicUserRole: BasicUserRole, aUserFactoryInterface: UserFactoryInterface)                        

                            : super(aBasicUserRole, aUserFactoryInterface){

            super();
            var aBasicUserRole = aBasicUserRole
var aUserFactoryInterface = aUserFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    
roleVector!.add(this);
    
}


}
                
            

