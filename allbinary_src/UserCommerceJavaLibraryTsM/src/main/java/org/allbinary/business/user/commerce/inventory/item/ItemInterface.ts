
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
        



import { Money } from "../../../../../../../org/allbinary/business/user/commerce/money/Money.js";

    
import { TableMappingInterface } from "../../../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface ItemInterface extends TableMappingInterface {
        

    setId(itemId: string)

    setNumber(number: string)

    setInBaskets(value: string)

    setWeight(value: string)

    setEnabled(value: string)

    setNewOrUsed(value: string)

    setSummary(value: string)

    setDistributor(value: string)

    setIdUsedByDistributor(value: string)

    setProducedBy(value: string)

    setProductionDate(value: string)

    setStartProductionDate(value: string)

    setDescription(value: string)

    setKeywords(value: string)

    setCategory(value: string)

    setType(value: string)

    setSmallImage(value: string)

    setMediumImage(value: string)

    setLargeImage(value: string)

    setTimeEntered(value: string)

    setLastModified(value: string)

    setPrice(value: Money)

    setComment(value: string)

    setCustoms(value: string)

    setDownloads(value: string)

    setGroups(value: string)

    setOptions(value: string)

    setPermissions(value: string)

    setSpecials(value: string)

    getId(): string

    getNumber(): string

    getInBaskets(): string

    getWeight(): string

    getEnabled(): string

    getNewOrUsed(): string

    getSummary(): string

    getDistributor(): string

    getIdUsedByDistributor(): string

    getProducedBy(): string

    getProductionDate(): string

    getStartProductionDate(): string

    getDescription(): string

    getKeywords(): string

    getCategory(): string

    getType(): string

    getSmallImage(): string

    getMediumImage(): string

    getLargeImage(): string

    getTimeEntered(): string

    getLastModified(): string

    getPrice(): Money

    getComment(): string

    getCustoms(): string

    getDownloads(): string

    getGroups(): string

    getOptions(): string

    getPermissions(): string

    getSpecials(): string

    getTotal(): Money

}
                
            

