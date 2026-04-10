
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
        



import { Serializable } from "../../../../../java/io/Serializable.js";

    
import { UserFactoryInterface } from "../../../../../org/allbinary/business/user/UserFactoryInterface.js";

    

export class UserRole
            extends Object
        
                , Serializable {
        

    private basicUserRole: BasicUserRole

    private userFactoryInterface: UserFactoryInterface
protected constructor (aBasicUserRole: BasicUserRole, aUserFactoryInterface: UserFactoryInterface){

            super();
            var aBasicUserRole = aBasicUserRole
var aUserFactoryInterface = aUserFactoryInterface
this.basicUserRole= aBasicUserRole
this.userFactoryInterface= aUserFactoryInterface
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicUserRole!.toString();
    
}


    public getBasicUserRole(): BasicUserRole{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicUserRole;
    
}


                @Throws(Exception::class)
            
    public getUserFactory(): UserFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userFactoryInterface;
    
}


    public getSessionTimeout(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicUserRole!.getSessionTimeout();
    
}


    public getSessionInactivityTimeout(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicUserRole!.getSessionInactivityTimeout();
    
}


}
                
            

