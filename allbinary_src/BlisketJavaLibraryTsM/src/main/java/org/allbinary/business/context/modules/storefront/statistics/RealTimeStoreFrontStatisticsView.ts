
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
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { StoreFrontAdvertisementsStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/advertisements/StoreFrontAdvertisementsStatisticsInterface.js';
      //not GWT import const StoreFrontAdvertisementsStatisticsInterface = globalThis.org.allbinary.business.context.modules.storefront.statistics.advertisements.StoreFrontAdvertisementsStatisticsInterface;

      
import { StoreFrontAdvertisementsStatisticsView } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/advertisements/StoreFrontAdvertisementsStatisticsView.js';
      //not GWT import const StoreFrontAdvertisementsStatisticsView = globalThis.org.allbinary.business.context.modules.storefront.statistics.advertisements.StoreFrontAdvertisementsStatisticsView;

      
import { StoreFrontInventoryStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/inventory/StoreFrontInventoryStatisticsInterface.js';
      //not GWT import const StoreFrontInventoryStatisticsInterface = globalThis.org.allbinary.business.context.modules.storefront.statistics.inventory.StoreFrontInventoryStatisticsInterface;

      
import { StoreFrontInventoryStatisticsView } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/inventory/StoreFrontInventoryStatisticsView.js';
      //not GWT import const StoreFrontInventoryStatisticsView = globalThis.org.allbinary.business.context.modules.storefront.statistics.inventory.StoreFrontInventoryStatisticsView;

      
import { StoreFrontOrdersHistoryStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/orders/history/StoreFrontOrdersHistoryStatisticsInterface.js';
      //not GWT import const StoreFrontOrdersHistoryStatisticsInterface = globalThis.org.allbinary.business.context.modules.storefront.statistics.orders.history.StoreFrontOrdersHistoryStatisticsInterface;

      
import { StoreFrontOrdersHistoryStatisticsView } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/orders/history/StoreFrontOrdersHistoryStatisticsView.js';
      //not GWT import const StoreFrontOrdersHistoryStatisticsView = globalThis.org.allbinary.business.context.modules.storefront.statistics.orders.history.StoreFrontOrdersHistoryStatisticsView;

      
import { StoreFrontUsersStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/users/StoreFrontUsersStatisticsInterface.js';
      //not GWT import const StoreFrontUsersStatisticsInterface = globalThis.org.allbinary.business.context.modules.storefront.statistics.users.StoreFrontUsersStatisticsInterface;

      
import { StoreFrontUsersStatisticsView } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/users/StoreFrontUsersStatisticsView.js';
      //not GWT import const StoreFrontUsersStatisticsView = globalThis.org.allbinary.business.context.modules.storefront.statistics.users.StoreFrontUsersStatisticsView;

      
import { UserRole } from '../../../../../../../org/allbinary/business/user/role/UserRole.js';
      //not GWT import const UserRole = globalThis.org.allbinary.business.user.role.UserRole;

      
import { UserRoleFactory } from '../../../../../../../org/allbinary/business/user/role/UserRoleFactory.js';
      //not GWT import const UserRoleFactory = globalThis.org.allbinary.business.user.role.UserRoleFactory;

      
import { DomNodeInterface } from '../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { Document } from '../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreFrontStatisticsInterface } from './StoreFrontStatisticsInterface.js';
import { StoreFrontStatisticsData } from './StoreFrontStatisticsData.js';

export class RealTimeStoreFrontStatisticsView
            extends Object
         implements DomNodeInterface {
        

    private readonly storeFrontStatisticsInterface: StoreFrontStatisticsInterface;

    private readonly userRole: UserRole;

public constructor (storeFrontStatisticsInterface: StoreFrontStatisticsInterface, userRole: UserRole){

            super();
        this.storeFrontStatisticsInterface= storeFrontStatisticsInterface;
    
this.userRole= userRole;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = document.createElement(StoreFrontStatisticsData.getInstance()!.NAME)!;;
    

    var storeFrontAdvertisementsStatisticsInterface: StoreFrontAdvertisementsStatisticsInterface = this.storeFrontStatisticsInterface!.getAdvertisements()!;;
    

    var storeFrontAdvertisementsStatisticsDomNodeInterface: DomNodeInterface = new StoreFrontAdvertisementsStatisticsView(storeFrontAdvertisementsStatisticsInterface);;
    
node.appendChild(storeFrontAdvertisementsStatisticsDomNodeInterface!.toXmlNode(document));
    

    var storeFrontInventoryStatisticsInterface: StoreFrontInventoryStatisticsInterface = this.storeFrontStatisticsInterface!.getInventory()!;;
    

    var storeFrontInventoryStatisticsDomNodeInterface: DomNodeInterface = new StoreFrontInventoryStatisticsView(storeFrontInventoryStatisticsInterface);;
    
node.appendChild(storeFrontInventoryStatisticsDomNodeInterface!.toXmlNode(document));
    

    var storeFrontOrdersHistoryStatisticsInterface: StoreFrontOrdersHistoryStatisticsInterface = this.storeFrontStatisticsInterface!.getOrders()!;;
    

    var storeFrontOrdersHistoryStatisticsDomNodeInterface: DomNodeInterface = new StoreFrontOrdersHistoryStatisticsView(storeFrontOrdersHistoryStatisticsInterface);;
    
node.appendChild(storeFrontOrdersHistoryStatisticsDomNodeInterface!.toXmlNode(document));
    

                        if(this.userRole == UserRoleFactory.getInstance()!.ADMINISTRATOR)
                        
                                    {
                                    
    var storeFrontUsersStatisticsInterface: StoreFrontUsersStatisticsInterface = this.storeFrontStatisticsInterface!.getUsers()!;;
    

    var storeFrontUsersStatisticsDomNodeInterface: DomNodeInterface = new StoreFrontUsersStatisticsView(storeFrontUsersStatisticsInterface);;
    
node.appendChild(storeFrontUsersStatisticsDomNodeInterface!.toXmlNode(document));
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



