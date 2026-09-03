
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicItemData
            extends Object
         {
        

    private static readonly instance: BasicItemData = new BasicItemData();

    public static getInstance(): BasicItemData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly ITEM: string = "BASICITEM";

    public readonly TOTAL: string = "BASICITEM_TOTAL";

    public readonly ID: string = "BASICITEM_ID";

    public readonly NUMBER: string = "BASICITEM_NUMBER";

    public readonly INBASKETS: string = "BASICITEM_IN_BASKETS";

    public readonly WEIGHT: string = "BASICITEM_WEIGHT";

    public readonly NEWORUSED: string = "BASICITEM_NEW_OR_USED";

    public readonly SUMMARY: string = "BASICITEM_SUMMARY";

    public readonly DISTRIBUTOR: string = "BASICITEM_DISTRIBUTOR";

    public readonly IDUSEDBYDISTRIBUTOR: string = "BASICITEM_IDUSEDBYDISTRIBUTOR";

    public readonly PRODUCEDBY: string = "BASICITEM_PRODUCEDBY";

    public readonly PRODUCTIONDATE: string = "BASICITEM_PRODUCTIONDATE";

    public readonly STARTPRODUCTIONDATE: string = "BASICITEM_STARTPRODUCTIONDATE";

    public readonly DESCRIPTION: string = "BASICITEM_DESCRIPTION";

    public readonly KEYWORDS: string = "BASICITEM_KEYWORDS";

    public readonly CATEGORY: string = "BASICITEM_CATEGORY";

    public readonly TYPE: string = "BASICITEM_TYPE";

    public readonly IMAGE: string = "BASICITEM_IMG";

    public readonly SMALLIMAGE: string = "BASICITEM_SMALL_IMG";

    public readonly MEDIUMIMAGE: string = "BASICITEM_MEDIUM_IMG";

    public readonly LARGEIMAGE: string = "BASICITEM_LARGE_IMG";

    public readonly PRICE: string = "BASICITEM_PRICE";

    public readonly COMMENT: string = "BASICITEM_COMMENT";

    public readonly CUSTOMS: string = "BASICITEM_CUSTOMS";

    public readonly DOWNLOADS: string = "BASICITEM_DOWNLOADS";

    public readonly GROUPS: string = "BASICITEM_GROUPS";

    public readonly OPTIONS: string = "BASICITEM_OPTIONS";

    public readonly PERMISSIONS: string = "BASICITEM_PERMISSIONS";

    public readonly SPECIALS: string = "BASICITEM_SPECIALS";

}



