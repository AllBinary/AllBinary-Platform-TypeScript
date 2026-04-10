
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
        




export class StoreFrontOrdersHistoryStatisticsData
            extends Object
         {
        

    private static readonly instance: StoreFrontOrdersHistoryStatisticsData = new StoreFrontOrdersHistoryStatisticsData();
        
        

    public static getInstance(): StoreFrontOrdersHistoryStatisticsData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public readonly NAME: string = "STOREFRONT_ORDERS_HISTORY_STATISTICS_NAME";
        
        

    public readonly NUMBEROFORDERS: string = "STOREFRONT_ORDERS_HISTORY_STATISTICS_NUMBER_OF_ORDERS";
        
        

    public readonly SUBTOTAL: string = "STOREFRONT_ORDERS_HISTORY_STATISTICS_SUBTOTAL";
        
        

    public readonly SHIPPINGCOST: string = "STOREFRONT_ORDERS_HISTORY_STATISTICS_SHIPPINGCOST";
        
        

    public readonly TAXES: string = "STOREFRONT_ORDERS_HISTORY_STATISTICS_TAXES";
        
        

    public readonly TOTAL: string = "STOREFRONT_ORDERS_HISTORY_STATISTICS_TOTAL";
        
        

}
                
            

