
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
        



            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../../../java/lang/Long.js';
        
//not game specific package import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Set } from '../../../../../../../../java/util/Set.js';
      const Set = globalThis.java.util.Set;

      
//not game specific package import { Vector } from '../../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { StoreFrontInterface } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { UserInterface } from '../../../../../../../../org/allbinary/business/user/UserInterface.js';
      const UserInterface = globalThis.org.allbinary.business.user.UserInterface;

      
//not game specific package import { UserRole } from '../../../../../../../../org/allbinary/business/user/role/UserRole.js';
      const UserRole = globalThis.org.allbinary.business.user.role.UserRole;

      
//not game specific package import { UserEntityFactory } from '../../../../../../../../org/allbinary/data/tables/user/UserEntityFactory.js';
      const UserEntityFactory = globalThis.org.allbinary.data.tables.user.UserEntityFactory;

      
//not game specific package import { UserEntityInterface } from '../../../../../../../../org/allbinary/data/tables/user/UserEntityInterface.js';
      const UserEntityInterface = globalThis.org.allbinary.data.tables.user.UserEntityInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreFrontUsersStatisticsInterface } from './StoreFrontUsersStatisticsInterface.js';
import { StoreFrontUsersStatisticsData } from './StoreFrontUsersStatisticsData.js';

export class StoreFrontUsersStatistics
            extends Object
         implements StoreFrontUsersStatisticsInterface {
        

    private totalNumberOfUsers: Long;

    private totalUsersByRoleHashMap: HashMap<any, any>;

public constructor (storeFrontInterface: StoreFrontInterface){

            super();
        this.totalUsersByRoleHashMap= new HashMap<any, any>();
    

    var userEntityInterface: UserEntityInterface = UserEntityFactory.getInstance()!;;
    

    var userVector: Vector = userEntityInterface!.getCustomers()!;;
    
this.totalNumberOfUsers= new Long(userVector!.length);
    

    var size: number = userVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var userInterface: UserInterface = userVector!.get(index) as UserInterface;;
    

    var nextUserRole: UserRole = userInterface!.getRole()!;;
    

    var currentNumberOfUsersForRole: Long = this.getNewTotal(nextUserRole)!;;
    
this.totalUsersByRoleHashMap!.put(nextUserRole, currentNumberOfUsersForRole);
    
}

}


    getNewTotal(userRole: UserRole): Long{

    var numberOfUsersForRoleLong: Long = this.totalUsersByRoleHashMap!.get(userRole) as Long;;
    

                        if(numberOfUsersForRoleLong == 
                                    null
                                )
                        
                                    {
                                    numberOfUsersForRoleLong= new Long(0);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Long(numberOfUsersForRoleLong!.longValue() +1);
    
}


    public getNumberOfUsers(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.totalNumberOfUsers;
    
}


    public getNumberOfUsersByRole(role: string): Long{

    var totalForRole: Long = this.totalUsersByRoleHashMap!.get(role) as Long;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return totalForRole;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    
hashMap!.put(StoreFrontUsersStatisticsData.getInstance()!.NUMBEROFUSERS, this.getNumberOfUsers()!.toString());
    

    var setOfUserRoles: Set = this.totalUsersByRoleHashMap!.keys()!;;
    

    var nextUserRole: UserRole;;
    

    var userRoleArray: any[] = setOfUserRoles!.toArray()!;;
    

    var size: number = userRoleArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
nextUserRole= userRoleArray[index]! as UserRole;
    

    var totalForRole: Long = this.totalUsersByRoleHashMap!.get(nextUserRole) as Long;;
    
hashMap!.put(nextUserRole!.toString(), totalForRole!.toString());
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public toVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

