
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
        



import { HashMap } from "../../../../java/util/HashMap.js";

    
import { UserRole } from "../../../../org/allbinary/business/user/role/UserRole.js";

    
import { UserRoleB } from "../../../../org/allbinary/business/user/role/UserRoleB.js";

    
import { UserRoleData } from "../../../../org/allbinary/business/user/role/UserRoleData.js";

    
import { StringValidationUtil } from "../../../../org/allbinary/logic/string/StringValidationUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { UserInterface } from "./UserInterface.js";

export class CreateUserFactory
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getInstance(hashMap: HashMap<any, any>): UserInterface{
var hashMap = hashMap

                        if(hashMap != 
                                    null
                                )
                        
                                    {
                                    
    var roleString: string = hashMap!.get(UserRoleData.NAME.toString());

                         as String;
        
        
;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(roleString);

                        )
                        
                                    {
                                    
    var role: UserRole = UserRoleB.getRole(roleString)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return role.getUserFactory()!.getInstance(hashMap);

                        ;
    

                                    }
                                
                        else {
                            


                            throw new Error("No Role Specified")

                        }
                            

                                    }
                                
                        else {
                            


                            throw new Error("Null HashMap")

                        }
                            
}

private constructor (){

            super();
        }


}
                
            

