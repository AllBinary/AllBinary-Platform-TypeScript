
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

                //@Throws(Error::class)
            
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

                //@Throws(Error::class)
            
    setHomeHostNamePath(value: string)

    setHostName(value: string)

                //@Throws(Error::class)
            
    setHostNamePath(value: string)

    setTestHomeHostName(value: string)

                //@Throws(Error::class)
            
    setTestHomeHostNamePath(value: string)

    setTestHostName(value: string)

                //@Throws(Error::class)
            
    setTestHostNamePath(value: string)

                //@Throws(Error::class)
            
    setImagePath(value: string)

                //@Throws(Error::class)
            
    setStaticPath(value: string)

                //@Throws(Error::class)
            
    setCategoryPath(value: string)

    setPackageLocation(value: string)

    setInventoryControl(value: string)

    setFtp(value: string)

                //@Throws(Error::class)
            
    setFtpPath(value: string)

    setFtpUserName(value: string)

    setFtpPassword(value: string)

    setTestFtp(value: string)

                //@Throws(Error::class)
            
    setTestFtpPath(value: string)

    setTestFtpUserName(value: string)

    setTestFtpPassword(value: string)

    setTimeCreated(value: string)

    setLastModified(value: string)

                //@Throws(Error::class)
            
    install(current: number, total: number)

}
                
            

