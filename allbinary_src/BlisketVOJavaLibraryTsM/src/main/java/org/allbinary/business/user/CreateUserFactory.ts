
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
      
import { UserRole } from '../../../../org/allbinary/business/user/role/UserRole.js';
      
import { UserRoleB } from '../../../../org/allbinary/business/user/role/UserRoleB.js';
      
import { UserRoleData } from '../../../../org/allbinary/business/user/role/UserRoleData.js';
      
import { StringValidationUtil } from '../../../../org/allbinary/logic/string/StringValidationUtil.js';
      
















                                        
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
                
            

