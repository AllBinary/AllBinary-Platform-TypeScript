
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

        


import { StreetAddress } from '../../../../../../../org/allbinary/business/user/address/StreetAddress.js';
//not GWT import const StreetAddress

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ItemInterface } from './ItemInterface.js';
//sameFolderImports - not GWT import - same folder const ItemInterface

export interface OrderItemInterface extends ItemInterface {
        

    setGroup(value: string): void;

    setTax(value: string): void;

    setShippingType(value: string): void;

    setShippingCost(value: string): void;

    setShippingAddress(value: StreetAddress): void;

    setSpecial(value: string): void;

    getGroup(): string;

    getTax(): string;

    getShippingType(): string;

    getShippingCost(): string;

    getShippingAddress(): StreetAddress;

    getSpecial(): string;

}

