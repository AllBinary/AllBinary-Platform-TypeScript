
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
        



            import { Object } from '../../../../../../../../../java/lang/Object.js';


        
import { Vector } from '../../../../../../../../../java/util/Vector.js';

    
import { PaymentGatewayInterface } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayInterface.js';

    
import { BasicPaymentType } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentType.js';

    
import { BasicDataTableInterface } from '../../../../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface PaymentGatewayEntityInterface extends BasicDataTableInterface {
        

    getPaymentGatewayInterface(storeName: string, paymentType: BasicPaymentType): PaymentGatewayInterface

    findPaymentTypeVectorByStore(storeName: string): Vector

    remove(storeName: string, paymentType: BasicPaymentType)

    add(paymentGatewayInterface: PaymentGatewayInterface)

    update(paymentGatewayInterface: PaymentGatewayInterface)

}
                
            

