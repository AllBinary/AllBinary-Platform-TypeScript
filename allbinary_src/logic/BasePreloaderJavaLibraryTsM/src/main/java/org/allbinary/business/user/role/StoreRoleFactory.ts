
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

    

export class StoreRoleFactory
            extends Object
         {
        

    private static readonly instance: StoreRoleFactory = new StoreRoleFactory();
        
        

    public static getInstance(): StoreRoleFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly roles: Vector<Any> = new Vector<Any>();
        
        

    private readonly subscriberRoles: Vector<Any> = new Vector<Any>();
        
        

    private readonly wholesaleRoles: Vector<Any> = new Vector<Any>();
        
        
private constructor (){

            super();
            
    var basicUserRoleFactory: BasicUserRoleFactory = BasicUserRoleFactory.getInstance()!;
        
        

roles.add(basicUserRoleFactory!.CUSTOMER)
roles.add(basicUserRoleFactory!.SUBSCRIBERCUSTOMER)
roles.add(basicUserRoleFactory!.WHOLESALECUSTOMER)
subscriberRoles!.add(basicUserRoleFactory!.SUBSCRIBERCUSTOMER)
wholesaleRoles!.add(basicUserRoleFactory!.WHOLESALECUSTOMER)
}


    public getRoles(): Vector<Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return roles;
    
}


    public getSubscriberRoles(): Vector<Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return subscriberRoles;
    
}


    public getWholesaleRoles(): Vector<Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return wholesaleRoles;
    
}


}
                
            

