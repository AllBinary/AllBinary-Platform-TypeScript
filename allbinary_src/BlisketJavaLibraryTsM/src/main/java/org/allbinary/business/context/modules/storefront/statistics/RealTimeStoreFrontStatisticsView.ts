
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
        



import { StoreFrontAdvertisementsStatisticsInterface } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/advertisements/StoreFrontAdvertisementsStatisticsInterface.js";

    
import { StoreFrontAdvertisementsStatisticsView } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/advertisements/StoreFrontAdvertisementsStatisticsView.js";

    
import { StoreFrontInventoryStatisticsInterface } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/inventory/StoreFrontInventoryStatisticsInterface.js";

    
import { StoreFrontInventoryStatisticsView } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/inventory/StoreFrontInventoryStatisticsView.js";

    
import { StoreFrontOrdersHistoryStatisticsInterface } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/orders/history/StoreFrontOrdersHistoryStatisticsInterface.js";

    
import { StoreFrontOrdersHistoryStatisticsView } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/orders/history/StoreFrontOrdersHistoryStatisticsView.js";

    
import { StoreFrontUsersStatisticsInterface } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/users/StoreFrontUsersStatisticsInterface.js";

    
import { StoreFrontUsersStatisticsView } from "../../../../../../../org/allbinary/business/context/modules/storefront/statistics/users/StoreFrontUsersStatisticsView.js";

    
import { UserRole } from "../../../../../../../org/allbinary/business/user/role/UserRole.js";

    
import { UserRoleFactory } from "../../../../../../../org/allbinary/business/user/role/UserRoleFactory.js";

    
import { DomNodeInterface } from "../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    

export class RealTimeStoreFrontStatisticsView
            extends Object
        
                , DomNodeInterface {
        

    private readonly storeFrontStatisticsInterface: StoreFrontStatisticsInterface

    private readonly userRole: UserRole
public constructor (storeFrontStatisticsInterface: StoreFrontStatisticsInterface, userRole: UserRole){

            super();
            var storeFrontStatisticsInterface = storeFrontStatisticsInterface
var userRole = userRole
this.storeFrontStatisticsInterface= storeFrontStatisticsInterface
this.userRole= userRole
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = document.createElement(StoreFrontStatisticsData.getInstance()!.NAME)!;
        
        


    var storeFrontAdvertisementsStatisticsInterface: StoreFrontAdvertisementsStatisticsInterface = this.storeFrontStatisticsInterface!.getAdvertisements()!;
        
        


    var storeFrontAdvertisementsStatisticsDomNodeInterface: DomNodeInterface = new StoreFrontAdvertisementsStatisticsView(storeFrontAdvertisementsStatisticsInterface);
        
        

node.appendChild(storeFrontAdvertisementsStatisticsDomNodeInterface!.toXmlNode(document))

    var storeFrontInventoryStatisticsInterface: StoreFrontInventoryStatisticsInterface = this.storeFrontStatisticsInterface!.getInventory()!;
        
        


    var storeFrontInventoryStatisticsDomNodeInterface: DomNodeInterface = new StoreFrontInventoryStatisticsView(storeFrontInventoryStatisticsInterface);
        
        

node.appendChild(storeFrontInventoryStatisticsDomNodeInterface!.toXmlNode(document))

    var storeFrontOrdersHistoryStatisticsInterface: StoreFrontOrdersHistoryStatisticsInterface = this.storeFrontStatisticsInterface!.getOrders()!;
        
        


    var storeFrontOrdersHistoryStatisticsDomNodeInterface: DomNodeInterface = new StoreFrontOrdersHistoryStatisticsView(storeFrontOrdersHistoryStatisticsInterface);
        
        

node.appendChild(storeFrontOrdersHistoryStatisticsDomNodeInterface!.toXmlNode(document))

                        if(this.userRole == UserRoleFactory.getInstance()!.ADMINISTRATOR)
                        
                                    {
                                    
    var storeFrontUsersStatisticsInterface: StoreFrontUsersStatisticsInterface = this.storeFrontStatisticsInterface!.getUsers()!;
        
        


    var storeFrontUsersStatisticsDomNodeInterface: DomNodeInterface = new StoreFrontUsersStatisticsView(storeFrontUsersStatisticsInterface);
        
        

node.appendChild(storeFrontUsersStatisticsDomNodeInterface!.toXmlNode(document))

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

