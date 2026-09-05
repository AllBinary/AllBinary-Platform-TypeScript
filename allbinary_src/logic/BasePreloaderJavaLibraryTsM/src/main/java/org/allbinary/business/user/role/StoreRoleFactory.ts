
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
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicUserRoleFactory } from './BasicUserRoleFactory.js';
//not GWT import - same folder const BasicUserRoleFactory = globalThis.org.allbinary.business.user.role.BasicUserRoleFactory;

                
export class StoreRoleFactory
            extends Object
         {
        

    private static readonly instance: StoreRoleFactory = new StoreRoleFactory();

    public static getInstance(): StoreRoleFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StoreRoleFactory.instance;
    
}


    private readonly roles: BasicArrayList = new BasicArrayListD();

    private readonly subscriberRoles: BasicArrayList = new BasicArrayListD();

    private readonly wholesaleRoles: BasicArrayList = new BasicArrayListD();

private constructor (){

            super();
        
    var basicUserRoleFactory: BasicUserRoleFactory = BasicUserRoleFactory.getInstance()!;;
    
this.roles.add(basicUserRoleFactory!.CUSTOMER);
    
this.roles.add(basicUserRoleFactory!.SUBSCRIBERCUSTOMER);
    
this.roles.add(basicUserRoleFactory!.WHOLESALECUSTOMER);
    
this.subscriberRoles!.add(basicUserRoleFactory!.SUBSCRIBERCUSTOMER);
    
this.wholesaleRoles!.add(basicUserRoleFactory!.WHOLESALECUSTOMER);
    
}


    public getRoles(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.roles;
    
}


    public getSubscriberRoles(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.subscriberRoles;
    
}


    public getWholesaleRoles(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.wholesaleRoles;
    
}


}



