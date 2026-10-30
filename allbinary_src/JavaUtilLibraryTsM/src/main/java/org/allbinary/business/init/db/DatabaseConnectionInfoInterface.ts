
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

        


















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface DatabaseConnectionInfoInterface {
        

    getUrl(): string;

    getJdbcDriver(): string;

    getName(): string;

    getUserName(): string;

    getPassword(): string;

    getHost(): string;

    getSchema(): string;

    getServer(): string;

    getPort(): string;

    setJdbcDriver(value: string): void;

    setName(value: string): void;

    setUserName(value: string): void;

    setPassword(value: string): void;

    setSchema(value: string): void;

    setServer(value: string): void;

    setPort(value: string): void;

    getUserNameKey(): string;

    getPasswordKey(): string;

}

