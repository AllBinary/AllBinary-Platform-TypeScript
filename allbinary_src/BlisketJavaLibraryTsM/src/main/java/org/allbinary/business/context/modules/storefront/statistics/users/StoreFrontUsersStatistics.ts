
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
        



import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../../../../java/util/Set.js";

    
import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { StoreFrontInterface } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { UserInterface } from "../../../../../../../../org/allbinary/business/user/UserInterface.js";

    
import { UserRole } from "../../../../../../../../org/allbinary/business/user/role/UserRole.js";

    
import { UserEntityFactory } from "../../../../../../../../org/allbinary/data/tables/user/UserEntityFactory.js";

    
import { UserEntityInterface } from "../../../../../../../../org/allbinary/data/tables/user/UserEntityInterface.js";

    

import { StoreFrontUsersStatisticsData } from "./StoreFrontUsersStatisticsData.js";

export class StoreFrontUsersStatistics
            extends Object
        
                , StoreFrontUsersStatisticsInterface {
        

    private totalNumberOfUsers: Long

    private totalUsersByRoleHashMap: HashMap<any, any>
public constructor (storeFrontInterface: StoreFrontInterface){

            super();
            var storeFrontInterface = storeFrontInterface
this.totalUsersByRoleHashMap= new HashMap<any, any>();
    

    var userEntityInterface: UserEntityInterface = UserEntityFactory.getInstance()!;
        
        
;
    

    var userVector: Vector = userEntityInterface!.getCustomers()!;
        
        
;
    
this.totalNumberOfUsers= userVector!.length as Long;
    

    var size: number = userVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var userInterface: UserInterface = userVector!.get(index);

                         as UserInterface;
        
        
;
    

    var nextUserRole: UserRole = userInterface!.getRole()!;
        
        
;
    

    var currentNumberOfUsersForRole: Long = this.getNewTotal(nextUserRole)!;
        
        
;
    
totalUsersByRoleHashMap!.put(nextUserRole, currentNumberOfUsersForRole);
    
}

}


    getNewTotal(userRole: UserRole): Long{
var userRole = userRole

    var numberOfUsersForRoleLong: Long = totalUsersByRoleHashMap!.get(userRole as Object);

                         as Long;
        
        
;
    

                        if(numberOfUsersForRoleLong == 
                                    null
                                )
                        
                                    {
                                    numberOfUsersForRoleLong= 0 as Long;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return numberOfUsersForRoleLong!.longValue() +1 as Long;
    
}


    public getNumberOfUsers(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.totalNumberOfUsers;
    
}


    public getNumberOfUsersByRole(role: string): Long{
var role = role

    var totalForRole: Long = this.totalUsersByRoleHashMap!.get(role as Object);

                         as Long;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return totalForRole;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(StoreFrontUsersStatisticsData.getInstance()!.NUMBEROFUSERS, this.getNumberOfUsers()!.toString());
    

    var setOfUserRoles: Set = this.totalUsersByRoleHashMap!.keys!;
        
        
;
    

    var nextUserRole: UserRole
;
    

    var userRoleArray: any[] = setOfUserRoles!.toArray()!;
        
        
;
    

    var size: number = userRoleArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
nextUserRole= userRoleArray[index]! as UserRole;
    

    var totalForRole: Long = this.totalUsersByRoleHashMap!.get(nextUserRole as Object);

                         as Long;
        
        
;
    
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
                
            

