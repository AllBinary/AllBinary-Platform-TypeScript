
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
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Set } from '../../../../../../../../java/util/Set.js';
//not GWT import const Set = globalThis.java.util.Set;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { StoreFrontInterface } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { UserInterface } from '../../../../../../../../org/allbinary/business/user/UserInterface.js';
//not GWT import const UserInterface = globalThis.org.allbinary.business.user.UserInterface;

      
import { UserRole } from '../../../../../../../../org/allbinary/business/user/role/UserRole.js';
//not GWT import const UserRole = globalThis.org.allbinary.business.user.role.UserRole;

      
import { UserEntityFactory } from '../../../../../../../../org/allbinary/data/tables/user/UserEntityFactory.js';
//not GWT import const UserEntityFactory = globalThis.org.allbinary.data.tables.user.UserEntityFactory;

      
import { UserEntityInterface } from '../../../../../../../../org/allbinary/data/tables/user/UserEntityInterface.js';
//not GWT import const UserEntityInterface = globalThis.org.allbinary.data.tables.user.UserEntityInterface;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreFrontUsersStatisticsInterface } from './StoreFrontUsersStatisticsInterface.js';
//not GWT import - same folder const StoreFrontUsersStatisticsInterface = globalThis.org.allbinary.business.context.modules.storefront.statistics.users.StoreFrontUsersStatisticsInterface;

                import { StoreFrontUsersStatisticsData } from './StoreFrontUsersStatisticsData.js';
//not GWT import - same folder const StoreFrontUsersStatisticsData = globalThis.org.allbinary.business.context.modules.storefront.statistics.users.StoreFrontUsersStatisticsData;

                
export class StoreFrontUsersStatistics
            extends Object
         implements StoreFrontUsersStatisticsInterface {
        

    private totalNumberOfUsers: Long;

    private totalUsersByRoleHashMap: HashMap<any, any>;

public constructor (storeFrontInterface: StoreFrontInterface){

            super();
        this.totalUsersByRoleHashMap= StdUtil.getInstance()!.createHashMap();
    

    var userEntityInterface: UserEntityInterface = UserEntityFactory.getInstance()!;;
    

    var userVector: BasicArrayList = userEntityInterface!.getCustomers()!;;
    
this.totalNumberOfUsers= new Long(userVector!.size());
    

    var size: number = userVector!.size()!;;
    




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

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
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


    public toVector(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}



