
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
        



import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { StoreFrontInterface } from "../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { UserInterface } from "../../../../../org/allbinary/business/user/UserInterface.js";

    
import { UserRole } from "../../../../../org/allbinary/business/user/role/UserRole.js";

    
import { BasicDataTableInterface } from "../../../../../org/allbinary/data/tables/BasicDataTableInterface.js";

    

export interface UserEntityInterface extends BasicDataTableInterface {
        

                //@Throws(Error::class)
            
    public getAdministrators(): Vector

                //@Throws(Error::class)
            
    public getStoreManagers(storeFrontInterface: StoreFrontInterface): Vector

                //@Throws(Error::class)
            
    public getCustomers(): Vector

                //@Throws(Error::class)
            
    public getUsersWithRole(userRole: UserRole): Vector

                //@Throws(Error::class)
            
    public getUsers(storeFrontInterface: StoreFrontInterface): Vector

                //@Throws(Error::class)
            
    public getUser(userName: string): UserInterface

    public login(userName: string, password: string): string

    public deleteWhere(key: string, value: string)

    public insert(values: Vector)

    public update(userName: string, updatedValues: HashMap<any, any>)

}
                
            

