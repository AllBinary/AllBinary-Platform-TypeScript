
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
        



            import { Integer } from "../../../../../../../java/lang/Integer.js";
        
import { OrderInterface } from "../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderInterface.js";

    
import { UserRole } from "../../../../../../../org/allbinary/business/user/role/UserRole.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface WeblisketSessionInterface {
        

    clear()

    getAttempts(): Integer

    getAuthentication(): string

    getCreationTime(): number

    getId(): string

    getLastAccessedTime(): number

                //@Throws(Error::class)
            
    getOrder(): OrderInterface

    getPassword(): string

    getPaymentMethod(): string

                //@Throws(Error::class)
            
    getRole(): UserRole

    getStoreName(): string

    getTimeout(): string

    getUserName(): string

    getWebAppPath(): string

    removeBasket()

    setAttempts(value: Integer)

    setAuthenticated()

    setAuthenticated(value: boolean)

    setPassword(password: string)

    setPaymentMethod(value: string)

    setRole(aRole: UserRole)

    setStoreName(value: string)

    setTimeout(value: string)

    setUserName(userName: string)

}
                
            

