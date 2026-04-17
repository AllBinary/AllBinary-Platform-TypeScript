
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
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StoreFrontInventoryStatisticsData
            extends Object
         {
        

    private static readonly instance: StoreFrontInventoryStatisticsData = new StoreFrontInventoryStatisticsData();
        
        

    public static getInstance(): StoreFrontInventoryStatisticsData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public readonly NAME: string = "STOREFRONT_INVENTORY_STATISTICS_NAME";
        
        

    public readonly NUMBEROFITEMS: string = "STOREFRONT_INVENTORY_STATISTICS_NUMBER_OF_ITEMS";
        
        

    public readonly TOTALVALUE: string = "STOREFRONT_INVENTORY_STATISTICS_TOTAL_VALUE";
        
        

}
                
            

