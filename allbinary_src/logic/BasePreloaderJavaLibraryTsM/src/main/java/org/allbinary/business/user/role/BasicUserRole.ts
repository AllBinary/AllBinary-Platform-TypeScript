
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { Serializable } from '../../../../../java/io/Serializable.js';
//not GWT import const Serializable

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicUserRoles } from './BasicUserRoles.js';
//not GWT import - same folder const BasicUserRoles

export class BasicUserRole
            extends Object
         implements Serializable {
        

    private readonly m_int_RoleId: number;

    private readonly role: string;

    private readonly displayValue: string;

    private readonly sessionTimeout: number;

    private readonly sessionInactivityTimeout: number;

 constructor (aRole: string, a_int_RoleId: number, aSessionTimeout: number, aSessionInactivityTimeout: number){
            this(aRole, aRole, a_int_RoleId, aSessionTimeout, aSessionInactivityTimeout);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


 constructor (aRole: string, aDisplayValue: string, a_int_RoleId: number, aSessionTimeout: number, aSessionInactivityTimeout: number){

            super();
        this.m_int_RoleId= a_int_RoleId;
    
this.role= aRole;
    
this.displayValue= aDisplayValue;
    
this.sessionTimeout= aSessionTimeout;
    
this.sessionInactivityTimeout= aSessionInactivityTimeout;
    
BasicUserRoles.getInstance()!.roleVector!.add(this);
    
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


    public equals(basicUserRole: BasicUserRole): boolean{

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
                        return this.getRole();;
    
}


}



