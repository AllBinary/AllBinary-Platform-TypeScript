
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

    
import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { TableMappingInterface } from "../../../../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface PaymentGatewayInterface extends TableMappingInterface {
        

    getEnable(): string

    getStoreName(): string

    getName(): string

    getPaymentMethod(): string

    getMode(): string

    getTestProtocol(): string

    getTestServer(): string

    getTestPort(): string

    getTestPath(): string

    getServerProtocol(): string

    getServer(): string

    getServerPort(): string

    getServerPath(): string

    getUserName(): string

    getPassword(): string

    getProxyProtocol(): string

    getProxyServer(): string

    getProxyPath(): string

    getProxyPort(): string

    getProxyUserName(): string

    getProxyPassword(): string

    getTimeout(): string

    getProxyTimeout(): string

    getSpecial1(): string

    getSpecial2(): string

    getSpecial3(): string

    getSpecial4(): string

    getSpecial5(): string

    getSpecial6(): string

    getSpecial7(): string

    getSpecial8(): string

    getSpecial9(): string

    getLastModified(): string

    getTimeEntered(): string

    setEnable(value: string)

    setStoreName(value: string)

    setName(value: string)

    setPaymentMethod(value: string)

    setMode(value: string)

    setTestProtocol(value: string)

    setTestServer(value: string)

    setTestPort(value: string)

    setTestPath(value: string)

    setServerProtocol(value: string)

    setServer(value: string)

    setServerPort(value: string)

    setServerPath(value: string)

    setUserName(value: string)

    setPassword(value: string)

    setProxyProtocol(value: string)

    setProxyServer(value: string)

    setProxyPath(value: string)

    setProxyPort(value: string)

    setProxyUserName(value: string)

    setProxyPassword(value: string)

    setTimeout(value: string)

    setProxyTimeout(value: string)

    setSpecial1(value: string)

    setSpecial2(value: string)

    setSpecial3(value: string)

    setSpecial4(value: string)

    setSpecial5(value: string)

    setSpecial6(value: string)

    setSpecial7(value: string)

    setSpecial8(value: string)

    setSpecial9(value: string)

    setLastModified(value: string)

    setTimeEntered(value: string)

                //@Throws(Error::class)
            
    toHashMap(isEncrypted: boolean): HashMap<any, any>

    toVector(isEncrypted: boolean): Vector

}
                
            

