
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

        


import { Money } from '../../../../../../../org/allbinary/business/user/commerce/money/Money.js';
//not GWT import const Money

import { TableMappingInterface } from '../../../../../../../org/allbinary/data/tables/TableMappingInterface.js';
//not GWT import const TableMappingInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface ItemInterface extends TableMappingInterface {
        

    setId(itemId: string): void;

    setNumber(number: string): void;

    setInBaskets(value: string): void;

    setWeight(value: string): void;

    setEnabled(value: string): void;

    setNewOrUsed(value: string): void;

    setSummary(value: string): void;

    setDistributor(value: string): void;

    setIdUsedByDistributor(value: string): void;

    setProducedBy(value: string): void;

    setProductionDate(value: string): void;

    setStartProductionDate(value: string): void;

    setDescription(value: string): void;

    setKeywords(value: string): void;

    setCategory(value: string): void;

    setType(value: string): void;

    setSmallImage(value: string): void;

    setMediumImage(value: string): void;

    setLargeImage(value: string): void;

    setTimeEntered(value: string): void;

    setLastModified(value: string): void;

    setPrice(value: Money): void;

    setComment(value: string): void;

    setCustoms(value: string): void;

    setDownloads(value: string): void;

    setGroups(value: string): void;

    setOptions(value: string): void;

    setPermissions(value: string): void;

    setSpecials(value: string): void;

    getId(): string;

    getNumber(): string;

    getInBaskets(): string;

    getWeight(): string;

    getEnabled(): string;

    getNewOrUsed(): string;

    getSummary(): string;

    getDistributor(): string;

    getIdUsedByDistributor(): string;

    getProducedBy(): string;

    getProductionDate(): string;

    getStartProductionDate(): string;

    getDescription(): string;

    getKeywords(): string;

    getCategory(): string;

    getType(): string;

    getSmallImage(): string;

    getMediumImage(): string;

    getLargeImage(): string;

    getTimeEntered(): string;

    getLastModified(): string;

    getPrice(): Money;

    getComment(): string;

    getCustoms(): string;

    getDownloads(): string;

    getGroups(): string;

    getOptions(): string;

    getPermissions(): string;

    getSpecials(): string;

    getTotal(): Money;

}

