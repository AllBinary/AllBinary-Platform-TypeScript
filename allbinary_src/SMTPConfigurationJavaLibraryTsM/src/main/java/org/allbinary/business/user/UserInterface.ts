
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

        


import { HashMap } from '../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { UserConfigurationInterface } from '../../../../org/allbinary/business/user/modules/configuration/UserConfigurationInterface.js';
//not GWT import const UserConfigurationInterface

import { UserRole } from '../../../../org/allbinary/business/user/role/UserRole.js';
//not GWT import const UserRole

import { TableMappingInterface } from '../../../../org/allbinary/data/tables/TableMappingInterface.js';
//not GWT import const TableMappingInterface

import { WeblisketSessionInterface } from '../../../../org/allbinary/logic/communication/http/request/session/WeblisketSessionInterface.js';
//not GWT import const WeblisketSessionInterface

import { ValidationInterface } from '../../../../org/allbinary/logic/control/validate/ValidationInterface.js';
//not GWT import const ValidationInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface UserInterface extends TableMappingInterface, ValidationInterface {
        

    setUserName(value: string): void;

    setPrefixName(value: string): void;

    setFirstName(value: string): void;

    setLastName(value: string): void;

    setMiddleName(value: string): void;

    setSuffixName(value: string): void;

    setCompany(value: string): void;

    setPositionAtCompany(value: string): void;

    setMainEmail(value: string): void;

    setSecondaryEmail(value: string): void;

    setHomePhone(value: string): void;

    setCellPhone(value: string): void;

    setWorkPhone(value: string): void;

    setOtherContact(value: string): void;

    setElectronicContact(value: string): void;

    setFax(value: string): void;

    setRole(aRole: UserRole): void;

    setEncryption(value: string): void;

    setSecret(value: string): void;

    setPassword(value: string): void;

    setPermissions(value: string): void;

    enable(): void;

    setEnable(enable: string): void;

    getUserName(): string;

    getPrefixName(): string;

    getFirstName(): string;

    getLastName(): string;

    getMiddleName(): string;

    getSuffixName(): string;

    getCompany(): string;

    getPositionAtCompany(): string;

    getMainEmail(): string;

    getSecondaryEmail(): string;

    getHomePhone(): string;

    getCellPhone(): string;

    getWorkPhone(): string;

    getOtherContact(): string;

    getElectronicContact(): string;

    getFax(): string;

    getRole(): UserRole;

    getEncryption(): string;

    getSecret(): string;

    getPassword(): string;

    getPermissions(): string;

    getUserConfigurationInterface(): UserConfigurationInterface;

    setUserConfigurationInterface(userConfigurationInterface: UserConfigurationInterface): void;

    toPasswordHashMap(): HashMap<any, any>;

    validateSession(weblisketSession: WeblisketSessionInterface): void;

    updateSession(weblisketSession: WeblisketSessionInterface): void;

    isSessionValid(): Boolean;

}

