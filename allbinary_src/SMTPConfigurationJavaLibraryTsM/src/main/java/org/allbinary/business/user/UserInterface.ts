
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
        

    setUserName(value: string)

    setPrefixName(value: string)

    setFirstName(value: string)

    setLastName(value: string)

    setMiddleName(value: string)

    setSuffixName(value: string)

    setCompany(value: string)

    setPositionAtCompany(value: string)

    setMainEmail(value: string)

    setSecondaryEmail(value: string)

    setHomePhone(value: string)

    setCellPhone(value: string)

    setWorkPhone(value: string)

    setOtherContact(value: string)

    setElectronicContact(value: string)

    setFax(value: string)

    setRole(aRole: UserRole)

    setEncryption(value: string)

    setSecret(value: string)

    setPassword(value: string)

    setPermissions(value: string)

    enable()

    setEnable(enable: string)

    getUserName(): string

    getPrefixName(): string

    getFirstName(): string

    getLastName(): string

    getMiddleName(): string

    getSuffixName(): string

    getCompany(): string

    getPositionAtCompany(): string

    getMainEmail(): string

    getSecondaryEmail(): string

    getHomePhone(): string

    getCellPhone(): string

    getWorkPhone(): string

    getOtherContact(): string

    getElectronicContact(): string

    getFax(): string

    getRole(): UserRole

    getEncryption(): string

    getSecret(): string

    getPassword(): string

    getPermissions(): string

    getUserConfigurationInterface(): UserConfigurationInterface

    setUserConfigurationInterface(userConfigurationInterface: UserConfigurationInterface)

    toPasswordHashMap(): HashMap<any, any>

    validateSession(weblisketSession: WeblisketSessionInterface)

    updateSession(weblisketSession: WeblisketSessionInterface)

    isSessionValid(): Boolean

}
                
            

