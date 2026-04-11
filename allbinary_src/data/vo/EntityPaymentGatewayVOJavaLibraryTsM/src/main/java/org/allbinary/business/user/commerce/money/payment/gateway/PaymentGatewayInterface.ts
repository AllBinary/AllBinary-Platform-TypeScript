
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
        



            import Vector from "@ohos.util.Vector";
        
import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    

//import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { TableMappingInterface } from "../../../../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    

interface PaymentGatewayInterface extends TableMappingInterface {
        

    public getEnable(): string

    public getStoreName(): string

    public getName(): string

    public getPaymentMethod(): string

    public getMode(): string

    public getTestProtocol(): string

    public getTestServer(): string

    public getTestPort(): string

    public getTestPath(): string

    public getServerProtocol(): string

    public getServer(): string

    public getServerPort(): string

    public getServerPath(): string

    public getUserName(): string

    public getPassword(): string

    public getProxyProtocol(): string

    public getProxyServer(): string

    public getProxyPath(): string

    public getProxyPort(): string

    public getProxyUserName(): string

    public getProxyPassword(): string

    public getTimeout(): string

    public getProxyTimeout(): string

    public getSpecial1(): string

    public getSpecial2(): string

    public getSpecial3(): string

    public getSpecial4(): string

    public getSpecial5(): string

    public getSpecial6(): string

    public getSpecial7(): string

    public getSpecial8(): string

    public getSpecial9(): string

    public getLastModified(): string

    public getTimeEntered(): string

    public setEnable(value: string)

    public setStoreName(value: string)

    public setName(value: string)

    public setPaymentMethod(value: string)

    public setMode(value: string)

    public setTestProtocol(value: string)

    public setTestServer(value: string)

    public setTestPort(value: string)

    public setTestPath(value: string)

    public setServerProtocol(value: string)

    public setServer(value: string)

    public setServerPort(value: string)

    public setServerPath(value: string)

    public setUserName(value: string)

    public setPassword(value: string)

    public setProxyProtocol(value: string)

    public setProxyServer(value: string)

    public setProxyPath(value: string)

    public setProxyPort(value: string)

    public setProxyUserName(value: string)

    public setProxyPassword(value: string)

    public setTimeout(value: string)

    public setProxyTimeout(value: string)

    public setSpecial1(value: string)

    public setSpecial2(value: string)

    public setSpecial3(value: string)

    public setSpecial4(value: string)

    public setSpecial5(value: string)

    public setSpecial6(value: string)

    public setSpecial7(value: string)

    public setSpecial8(value: string)

    public setSpecial9(value: string)

    public setLastModified(value: string)

    public setTimeEntered(value: string)

                //@Throws(Error::class)
            
    public toHashMap(isEncrypted: boolean): HashMap<any, any>

    public toVector(isEncrypted: boolean): Vector

}
                
            

