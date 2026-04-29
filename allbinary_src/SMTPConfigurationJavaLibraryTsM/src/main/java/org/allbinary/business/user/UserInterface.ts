
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
        



import { HashMap } from "../../../../java/util/HashMap.js";

    
import { UserConfigurationInterface } from "../../../../org/allbinary/business/user/modules/configuration/UserConfigurationInterface.js";

    
import { UserRole } from "../../../../org/allbinary/business/user/role/UserRole.js";

    
import { TableMappingInterface } from "../../../../org/allbinary/data/tables/TableMappingInterface.js";

    
import { WeblisketSessionInterface } from "../../../../org/allbinary/logic/communication/http/request/session/WeblisketSessionInterface.js";

    
import { ValidationInterface } from "../../../../org/allbinary/logic/control/validate/ValidationInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface UserInterface extends TableMappingInterface, ValidationInterface {
        

    public setUserName(value: string)

    public setPrefixName(value: string)

    public setFirstName(value: string)

    public setLastName(value: string)

    public setMiddleName(value: string)

    public setSuffixName(value: string)

    public setCompany(value: string)

    public setPositionAtCompany(value: string)

    public setMainEmail(value: string)

    public setSecondaryEmail(value: string)

    public setHomePhone(value: string)

    public setCellPhone(value: string)

    public setWorkPhone(value: string)

    public setOtherContact(value: string)

    public setElectronicContact(value: string)

    public setFax(value: string)

    public setRole(aRole: UserRole)

    public setEncryption(value: string)

    public setSecret(value: string)

    public setPassword(value: string)

    public setPermissions(value: string)

    public enable()

    public setEnable(enable: string)

    public getUserName(): string

    public getPrefixName(): string

    public getFirstName(): string

    public getLastName(): string

    public getMiddleName(): string

    public getSuffixName(): string

    public getCompany(): string

    public getPositionAtCompany(): string

    public getMainEmail(): string

    public getSecondaryEmail(): string

    public getHomePhone(): string

    public getCellPhone(): string

    public getWorkPhone(): string

    public getOtherContact(): string

    public getElectronicContact(): string

    public getFax(): string

    public getRole(): UserRole

    public getEncryption(): string

    public getSecret(): string

    public getPassword(): string

    public getPermissions(): string

    public getUserConfigurationInterface(): UserConfigurationInterface

    public setUserConfigurationInterface(userConfigurationInterface: UserConfigurationInterface)

    public toPasswordHashMap(): HashMap<any, any>

    public validateSession(weblisketSession: WeblisketSessionInterface)

    public updateSession(weblisketSession: WeblisketSessionInterface)

    public isSessionValid(): Boolean

}
                
            

