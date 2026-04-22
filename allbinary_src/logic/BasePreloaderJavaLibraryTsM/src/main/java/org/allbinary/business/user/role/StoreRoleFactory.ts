
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
        



import { Vector } from "../../../../../java/util/Vector.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicUserRoleFactory } from "./BasicUserRoleFactory.js";

export class StoreRoleFactory
            extends Object
         {
        

    private static readonly instance: StoreRoleFactory = new StoreRoleFactory();
        
        

    public static getInstance(): StoreRoleFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly roles: Vector<any> = new Vector<any>();
        
        

    private readonly subscriberRoles: Vector<any> = new Vector<any>();
        
        

    private readonly wholesaleRoles: Vector<any> = new Vector<any>();
        
        
private constructor (){

            super();
        
    var basicUserRoleFactory: BasicUserRoleFactory = BasicUserRoleFactory.getInstance()!;
        
        
;
    
this.roles.add(basicUserRoleFactory!.CUSTOMER);
    
this.roles.add(basicUserRoleFactory!.SUBSCRIBERCUSTOMER);
    
this.roles.add(basicUserRoleFactory!.WHOLESALECUSTOMER);
    
this.subscriberRoles!.add(basicUserRoleFactory!.SUBSCRIBERCUSTOMER);
    
this.wholesaleRoles!.add(basicUserRoleFactory!.WHOLESALECUSTOMER);
    
}


    public getRoles(): Vector<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return roles;
    
}


    public getSubscriberRoles(): Vector<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return subscriberRoles;
    
}


    public getWholesaleRoles(): Vector<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return wholesaleRoles;
    
}


}
                
            

