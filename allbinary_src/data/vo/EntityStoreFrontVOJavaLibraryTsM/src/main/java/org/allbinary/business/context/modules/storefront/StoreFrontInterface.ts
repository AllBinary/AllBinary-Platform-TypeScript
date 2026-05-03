
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
        



            import { Object } from "../../../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../../../java/lang/Exception.js";
        
import { ContextConfigurationInterface } from "../../../../../../org/allbinary/business/context/configuration/ContextConfigurationInterface.js";

    
import { TableMappingInterface } from "../../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface StoreFrontInterface extends TableMappingInterface {
        

    isNameValid(): Boolean

    isValid(): Boolean

    nameValidationInfo(): string

    validationInfo(): string

    getTestHtmlPath(): string

    getCurrentHostName(): string

    getCurrentHostNamePath(): string

    getCurrentHomeHostName(): string

    getCurrentHomeHostNamePath(): string

    getName(): string

    getBasketName(): string

    getHomeHostName(): string

    getHomeHostNamePath(): string

    getHostName(): string

    getHostNamePath(): string

    getTestHomeHostName(): string

    getTestHomeHostNamePath(): string

    getTestHostName(): string

    getTestHostNamePath(): string

    getStaticPath(): string

    getCategoryPath(): string

                //@Throws(Exception.constructor)
            
    getSubStores(): BasicArrayList

    getTagLocation(): string

    getPackageLocation(): string

    getInventoryControl(): string

    getContextConfigurationInterface(): ContextConfigurationInterface

    setContextConfigurationInterface(contextConfigurationInterface: ContextConfigurationInterface)

    getFtp(): string

    getFtpPath(): string

    getFtpUserName(): string

    getFtpPassword(): string

    getTestFtp(): string

    getTestFtpPath(): string

    getTestFtpUserName(): string

    getTestFtpPassword(): string

    getTimeCreated(): string

    getLastModified(): string

    setName(value: string)

    setBasketName(value: string)

    setHomeHostName(value: string)

                //@Throws(Exception.constructor)
            
    setHomeHostNamePath(value: string)

    setHostName(value: string)

                //@Throws(Exception.constructor)
            
    setHostNamePath(value: string)

    setTestHomeHostName(value: string)

                //@Throws(Exception.constructor)
            
    setTestHomeHostNamePath(value: string)

    setTestHostName(value: string)

                //@Throws(Exception.constructor)
            
    setTestHostNamePath(value: string)

                //@Throws(Exception.constructor)
            
    setImagePath(value: string)

                //@Throws(Exception.constructor)
            
    setStaticPath(value: string)

                //@Throws(Exception.constructor)
            
    setCategoryPath(value: string)

    setPackageLocation(value: string)

    setInventoryControl(value: string)

    setFtp(value: string)

                //@Throws(Exception.constructor)
            
    setFtpPath(value: string)

    setFtpUserName(value: string)

    setFtpPassword(value: string)

    setTestFtp(value: string)

                //@Throws(Exception.constructor)
            
    setTestFtpPath(value: string)

    setTestFtpUserName(value: string)

    setTestFtpPassword(value: string)

    setTimeCreated(value: string)

    setLastModified(value: string)

                //@Throws(Exception.constructor)
            
    install(current: number, total: number)

}
                
            

