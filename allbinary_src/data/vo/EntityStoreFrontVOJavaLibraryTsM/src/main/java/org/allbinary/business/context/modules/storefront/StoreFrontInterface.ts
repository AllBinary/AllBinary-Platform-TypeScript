
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
        



import { ContextConfigurationInterface } from "../../../../../../org/allbinary/business/context/configuration/ContextConfigurationInterface.js";

    
import { TableMappingInterface } from "../../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

interface StoreFrontInterface extends TableMappingInterface {
        

    public isNameValid(): Boolean

    public isValid(): Boolean

    public nameValidationInfo(): string

    public validationInfo(): string

    public getTestHtmlPath(): string

    public getCurrentHostName(): string

    public getCurrentHostNamePath(): string

    public getCurrentHomeHostName(): string

    public getCurrentHomeHostNamePath(): string

    public getName(): string

    public getBasketName(): string

    public getHomeHostName(): string

    public getHomeHostNamePath(): string

    public getHostName(): string

    public getHostNamePath(): string

    public getTestHomeHostName(): string

    public getTestHomeHostNamePath(): string

    public getTestHostName(): string

    public getTestHostNamePath(): string

    public getStaticPath(): string

    public getCategoryPath(): string

                @Throws(Exception::class)
            
    public getSubStores(): BasicArrayList

    public getTagLocation(): string

    public getPackageLocation(): string

    public getInventoryControl(): string

    public getContextConfigurationInterface(): ContextConfigurationInterface

    public setContextConfigurationInterface(contextConfigurationInterface: ContextConfigurationInterface)

    public getFtp(): string

    public getFtpPath(): string

    public getFtpUserName(): string

    public getFtpPassword(): string

    public getTestFtp(): string

    public getTestFtpPath(): string

    public getTestFtpUserName(): string

    public getTestFtpPassword(): string

    public getTimeCreated(): string

    public getLastModified(): string

    public setName(value: string)

    public setBasketName(value: string)

    public setHomeHostName(value: string)

                @Throws(Exception::class)
            
    public setHomeHostNamePath(value: string)

    public setHostName(value: string)

                @Throws(Exception::class)
            
    public setHostNamePath(value: string)

    public setTestHomeHostName(value: string)

                @Throws(Exception::class)
            
    public setTestHomeHostNamePath(value: string)

    public setTestHostName(value: string)

                @Throws(Exception::class)
            
    public setTestHostNamePath(value: string)

                @Throws(Exception::class)
            
    public setImagePath(value: string)

                @Throws(Exception::class)
            
    public setStaticPath(value: string)

                @Throws(Exception::class)
            
    public setCategoryPath(value: string)

    public setPackageLocation(value: string)

    public setInventoryControl(value: string)

    public setFtp(value: string)

                @Throws(Exception::class)
            
    public setFtpPath(value: string)

    public setFtpUserName(value: string)

    public setFtpPassword(value: string)

    public setTestFtp(value: string)

                @Throws(Exception::class)
            
    public setTestFtpPath(value: string)

    public setTestFtpUserName(value: string)

    public setTestFtpPassword(value: string)

    public setTimeCreated(value: string)

    public setLastModified(value: string)

                @Throws(Exception::class)
            
    public install(current: number, total: number)

}
                
            

