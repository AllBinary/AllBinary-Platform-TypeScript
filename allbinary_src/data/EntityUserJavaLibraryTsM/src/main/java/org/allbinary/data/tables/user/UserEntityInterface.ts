
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
        
//not game specific package import { HashMap } from '../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Vector } from '../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { StoreFrontInterface } from '../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { UserInterface } from '../../../../../org/allbinary/business/user/UserInterface.js';
      const UserInterface = globalThis.org.allbinary.business.user.UserInterface;

      
//not game specific package import { UserRole } from '../../../../../org/allbinary/business/user/role/UserRole.js';
      const UserRole = globalThis.org.allbinary.business.user.role.UserRole;

      
//not game specific package import { BasicDataTableInterface } from '../../../../../org/allbinary/data/tables/BasicDataTableInterface.js';
      const BasicDataTableInterface = globalThis.org.allbinary.data.tables.BasicDataTableInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface UserEntityInterface extends BasicDataTableInterface {
        

                //@Throws(Exception.constructor)
            
    getAdministrators(): Vector

                //@Throws(Exception.constructor)
            
    getStoreManagers(storeFrontInterface: StoreFrontInterface): Vector

                //@Throws(Exception.constructor)
            
    getCustomers(): Vector

                //@Throws(Exception.constructor)
            
    getUsersWithRole(userRole: UserRole): Vector

                //@Throws(Exception.constructor)
            
    getUsers(storeFrontInterface: StoreFrontInterface): Vector

                //@Throws(Exception.constructor)
            
    getUser(userName: string): UserInterface

    login(userName: string, password: string): string

    deleteWhere(key: string, value: string)

    insert(values: Vector)

    update(userName: string, updatedValues: HashMap<any, any>)

}



