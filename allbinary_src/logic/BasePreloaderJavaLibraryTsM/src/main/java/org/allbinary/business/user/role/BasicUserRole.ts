
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
        
import { Serializable } from "../../../../../java/io/Serializable.js";

    

//import { Vector } from "../../../../../java/util/Vector.js";

    

export class BasicUserRole
            extends Object
        
                , Serializable {
        

    private static readonly roleVector: Vector<any> = new Vector<any>();
        
        

                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static getRole(role: string): BasicUserRole{
var role = role

    var roleVector: Vector<any> = BasicUserRole.getAll()!;
        
        
;
    

    var size: number = roleVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var userRole: BasicUserRole = roleVector!.get(index);

                         as BasicUserRole;
        
        
;
    

                        if(role.compareTo(userRole!.toString()) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return userRole;
    

                                    }
                                
}




                            throw new Error("Unable to get role - Unknown Role")
}


    public static getAll(): Vector<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicUserRole.roleVector;
    
}


    private readonly m_int_RoleId: number

    private readonly role: string

    private readonly displayValue: string

    private readonly sessionTimeout: number

    private readonly sessionInactivityTimeout: number
 constructor (aRole: string, a_int_RoleId: number, aSessionTimeout: number, aSessionInactivityTimeout: number)                        

                            : this(aRole, aRole, a_int_RoleId, aSessionTimeout, aSessionInactivityTimeout){

            super();
            var aRole = aRole
var a_int_RoleId = a_int_RoleId
var aSessionTimeout = aSessionTimeout
var aSessionInactivityTimeout = aSessionInactivityTimeout


                            //For kotlin this is before the body of the constructor.
                    
}

 constructor (aRole: string, aDisplayValue: string, a_int_RoleId: number, aSessionTimeout: number, aSessionInactivityTimeout: number){

            super();
            var aRole = aRole
var aDisplayValue = aDisplayValue
var a_int_RoleId = a_int_RoleId
var aSessionTimeout = aSessionTimeout
var aSessionInactivityTimeout = aSessionInactivityTimeout
this.m_int_RoleId= a_int_RoleId;
    
this.role= aRole;
    
this.displayValue= aDisplayValue;
    
this.sessionTimeout= aSessionTimeout;
    
this.sessionInactivityTimeout= aSessionInactivityTimeout;
    
roleVector!.add(this);
    
}


    getRoleId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.m_int_RoleId;
    
}


    public getRole(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.role;
    
}


    public getSessionTimeout(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sessionTimeout;
    
}


    public getSessionInactivityTimeout(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sessionInactivityTimeout;
    
}


    public equals(basicUserRole: BasicUserRole?): boolean{
var basicUserRole = basicUserRole

                        if(this.getRoleId() == basicUserRole!.getRoleId())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getRole();

                        ;
    
}


}
                
            

