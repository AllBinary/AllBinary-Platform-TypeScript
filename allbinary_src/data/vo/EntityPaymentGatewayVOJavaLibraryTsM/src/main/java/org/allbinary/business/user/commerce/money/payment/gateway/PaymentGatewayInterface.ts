
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

        


            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { TableMappingInterface } from '../../../../../../../../org/allbinary/data/tables/TableMappingInterface.js';
//not GWT import const TableMappingInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface PaymentGatewayInterface extends TableMappingInterface {
        

    getEnable(): string;

    getStoreName(): string;

    getName(): string;

    getPaymentMethod(): string;

    getMode(): string;

    getTestProtocol(): string;

    getTestServer(): string;

    getTestPort(): string;

    getTestPath(): string;

    getServerProtocol(): string;

    getServer(): string;

    getServerPort(): string;

    getServerPath(): string;

    getUserName(): string;

    getPassword(): string;

    getProxyProtocol(): string;

    getProxyServer(): string;

    getProxyPath(): string;

    getProxyPort(): string;

    getProxyUserName(): string;

    getProxyPassword(): string;

    getTimeout(): string;

    getProxyTimeout(): string;

    getSpecial1(): string;

    getSpecial2(): string;

    getSpecial3(): string;

    getSpecial4(): string;

    getSpecial5(): string;

    getSpecial6(): string;

    getSpecial7(): string;

    getSpecial8(): string;

    getSpecial9(): string;

    getLastModified(): string;

    getTimeEntered(): string;

    setEnable(value: string): void;

    setStoreName(value: string): void;

    setName(value: string): void;

    setPaymentMethod(value: string): void;

    setMode(value: string): void;

    setTestProtocol(value: string): void;

    setTestServer(value: string): void;

    setTestPort(value: string): void;

    setTestPath(value: string): void;

    setServerProtocol(value: string): void;

    setServer(value: string): void;

    setServerPort(value: string): void;

    setServerPath(value: string): void;

    setUserName(value: string): void;

    setPassword(value: string): void;

    setProxyProtocol(value: string): void;

    setProxyServer(value: string): void;

    setProxyPath(value: string): void;

    setProxyPort(value: string): void;

    setProxyUserName(value: string): void;

    setProxyPassword(value: string): void;

    setTimeout(value: string): void;

    setProxyTimeout(value: string): void;

    setSpecial1(value: string): void;

    setSpecial2(value: string): void;

    setSpecial3(value: string): void;

    setSpecial4(value: string): void;

    setSpecial5(value: string): void;

    setSpecial6(value: string): void;

    setSpecial7(value: string): void;

    setSpecial8(value: string): void;

    setSpecial9(value: string): void;

    setLastModified(value: string): void;

    setTimeEntered(value: string): void;

                //@Throws(Exception.constructor)
            
    toHashMap(isEncrypted: boolean): HashMap<any, any>;

    toVector(isEncrypted: boolean): BasicArrayList;

}

