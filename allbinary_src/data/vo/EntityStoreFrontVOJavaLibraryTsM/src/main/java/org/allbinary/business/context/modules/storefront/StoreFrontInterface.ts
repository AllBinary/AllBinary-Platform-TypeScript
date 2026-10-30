
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { ContextConfigurationInterface } from '../../../../../../org/allbinary/business/context/configuration/ContextConfigurationInterface.js';
//not GWT import const ContextConfigurationInterface

import { TableMappingInterface } from '../../../../../../org/allbinary/data/tables/TableMappingInterface.js';
//not GWT import const TableMappingInterface

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface StoreFrontInterface extends TableMappingInterface {
        

    isNameValid(): Boolean;

    isValid(): Boolean;

    nameValidationInfo(): string;

    validationInfo(): string;

    getTestHtmlPath(): string;

    getCurrentHostName(): string;

    getCurrentHostNamePath(): string;

    getCurrentHomeHostName(): string;

    getCurrentHomeHostNamePath(): string;

    getName(): string;

    getBasketName(): string;

    getHomeHostName(): string;

    getHomeHostNamePath(): string;

    getHostName(): string;

    getHostNamePath(): string;

    getTestHomeHostName(): string;

    getTestHomeHostNamePath(): string;

    getTestHostName(): string;

    getTestHostNamePath(): string;

    getStaticPath(): string;

    getCategoryPath(): string;

                //@Throws(Exception.constructor)
            
    getSubStores(): BasicArrayList;

    getTagLocation(): string;

    getPackageLocation(): string;

    getInventoryControl(): string;

    getContextConfigurationInterface(): ContextConfigurationInterface;

    setContextConfigurationInterface(contextConfigurationInterface: ContextConfigurationInterface): void;

    getFtp(): string;

    getFtpPath(): string;

    getFtpUserName(): string;

    getFtpPassword(): string;

    getTestFtp(): string;

    getTestFtpPath(): string;

    getTestFtpUserName(): string;

    getTestFtpPassword(): string;

    getTimeCreated(): string;

    getLastModified(): string;

    setName(value: string): void;

    setBasketName(value: string): void;

    setHomeHostName(value: string): void;

                //@Throws(Exception.constructor)
            
    setHomeHostNamePath(value: string): void;

    setHostName(value: string): void;

                //@Throws(Exception.constructor)
            
    setHostNamePath(value: string): void;

    setTestHomeHostName(value: string): void;

                //@Throws(Exception.constructor)
            
    setTestHomeHostNamePath(value: string): void;

    setTestHostName(value: string): void;

                //@Throws(Exception.constructor)
            
    setTestHostNamePath(value: string): void;

                //@Throws(Exception.constructor)
            
    setImagePath(value: string): void;

                //@Throws(Exception.constructor)
            
    setStaticPath(value: string): void;

                //@Throws(Exception.constructor)
            
    setCategoryPath(value: string): void;

    setPackageLocation(value: string): void;

    setInventoryControl(value: string): void;

    setFtp(value: string): void;

                //@Throws(Exception.constructor)
            
    setFtpPath(value: string): void;

    setFtpUserName(value: string): void;

    setFtpPassword(value: string): void;

    setTestFtp(value: string): void;

                //@Throws(Exception.constructor)
            
    setTestFtpPath(value: string): void;

    setTestFtpUserName(value: string): void;

    setTestFtpPassword(value: string): void;

    setTimeCreated(value: string): void;

    setLastModified(value: string): void;

                //@Throws(Exception.constructor)
            
    install(current: number, total: number): void;

}

