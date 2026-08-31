
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { UserRole } from '../../../../org/allbinary/business/user/role/UserRole.js';
      //not GWT import const UserRole = globalThis.org.allbinary.business.user.role.UserRole;

      
import { UserRoleB } from '../../../../org/allbinary/business/user/role/UserRoleB.js';
      //not GWT import const UserRoleB = globalThis.org.allbinary.business.user.role.UserRoleB;

      
import { UserRoleData } from '../../../../org/allbinary/business/user/role/UserRoleData.js';
      //not GWT import const UserRoleData = globalThis.org.allbinary.business.user.role.UserRoleData;

      
import { StringValidationUtil } from '../../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserInterface } from './UserInterface.js';

export class CreateUserFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(hashMap: HashMap<any, any>): UserInterface{

                        if(hashMap != 
                                    null
                                )
                        
                                    {
                                    
    var roleString: string = hashMap!.get(UserRoleData.NAME.toString()) as string;;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(roleString))
                        
                                    {
                                    
    var role: UserRole = UserRoleB.getRole(roleString)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return role.getUserFactory()!.getInstance(hashMap);;
    

                                    }
                                
                        else {
                            


                            throw new Exception("No Role Specified");
                    

                        }
                            

                                    }
                                
                        else {
                            


                            throw new Exception("Null HashMap");
                    

                        }
                            
}


private constructor (){

            super();
        }


}



