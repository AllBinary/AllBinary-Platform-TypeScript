
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
        



            import { Object } from '../../../../../../../../java/lang/Object.js';


        
            import { Integer } from '../../../../../../../../java/lang/Integer.js';
        
import { Vector } from '../../../../../../../../java/util/Vector.js';

    
import { PaymentInterface } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentInterface.js';

    
import { BasicDataTableInterface } from '../../../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface PaymentEntityInterface extends BasicDataTableInterface {
        

    getLastId(userName: string): string

    setDefault(userName: string, index: Integer)

    getDefault(userName: string): PaymentInterface

    get(userName: string): Vector

    add(userName: string, paymentInterface: PaymentInterface)

    remove(userName: string, index: Integer)

    insert(values: Vector)

}
                
            

