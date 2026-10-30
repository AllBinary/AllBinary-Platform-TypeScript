
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
//not GWT import const HashMap

import { Set } from '../../../../../../../../java/util/Set.js';
//not GWT import const Set

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { StoreFrontInterface } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { UserInterface } from '../../../../../../../../org/allbinary/business/user/UserInterface.js';
//not GWT import const UserInterface

import { UserRole } from '../../../../../../../../org/allbinary/business/user/role/UserRole.js';
//not GWT import const UserRole

import { UserEntityFactory } from '../../../../../../../../org/allbinary/data/tables/user/UserEntityFactory.js';
//not GWT import const UserEntityFactory

import { UserEntityInterface } from '../../../../../../../../org/allbinary/data/tables/user/UserEntityInterface.js';
//not GWT import const UserEntityInterface

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreFrontUsersStatisticsInterface } from './StoreFrontUsersStatisticsInterface.js';
//not GWT import - same folder const StoreFrontUsersStatisticsInterface
import { StoreFrontUsersStatisticsData } from './StoreFrontUsersStatisticsData.js';
//not GWT import - same folder const StoreFrontUsersStatisticsData

export class StoreFrontUsersStatistics
            extends Object
         implements StoreFrontUsersStatisticsInterface {
        

    private totalNumberOfUsers: Long;

    private totalUsersByRoleHashMap: HashMap<any, any>;

public constructor (storeFrontInterface: StoreFrontInterface){

            super();
        this.totalUsersByRoleHashMap= StdUtil.getInstance()!.createHashMap();
    

    let userEntityInterface: UserEntityInterface = UserEntityFactory.getInstance()!;;
    

    let userVector: BasicArrayList = userEntityInterface!.getCustomers()!;;
    
this.totalNumberOfUsers= new Long(userVector!.size());
    

    let size: number = userVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let userInterface: UserInterface = userVector!.get(index) as UserInterface;;
    

    let nextUserRole: UserRole = userInterface!.getRole()!;;
    

    let currentNumberOfUsersForRole: Long = this.getNewTotal(nextUserRole)!;;
    
this.totalUsersByRoleHashMap!.put(nextUserRole, currentNumberOfUsersForRole);
    
}

}


    getNewTotal(userRole: UserRole): Long{

    let numberOfUsersForRoleLong: Long = this.totalUsersByRoleHashMap!.get(userRole) as Long;;
    

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

    let totalForRole: Long = this.totalUsersByRoleHashMap!.get(role) as Long;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return totalForRole;
    
}


    public toHashMap(): HashMap<any, any>{

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(StoreFrontUsersStatisticsData.getInstance()!.NUMBEROFUSERS, this.getNumberOfUsers()!.toString());
    

    let setOfUserRoles: Set = this.totalUsersByRoleHashMap!.keys()!;;
    

    let nextUserRole: UserRole;;
    

    let userRoleArray: any[] = setOfUserRoles!.toArray()!;;
    

    let size: number = userRoleArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
nextUserRole= userRoleArray[index]! as UserRole;
    

    let totalForRole: Long = this.totalUsersByRoleHashMap!.get(nextUserRole) as Long;;
    
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

