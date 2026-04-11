
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
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { PaymentInterface } from "../../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentInterface.js";

    
import { BasicDataTableInterface } from "../../../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js";

    

interface PaymentEntityInterface extends BasicDataTableInterface {
        

    public getLastId(userName: string): string

    public setDefault(userName: string, index: Integer)

    public getDefault(userName: string): PaymentInterface

    public get(userName: string): Vector

    public add(userName: string, paymentInterface: PaymentInterface)

    public remove(userName: string, index: Integer)

    public insert(values: Vector)

}
                
            

