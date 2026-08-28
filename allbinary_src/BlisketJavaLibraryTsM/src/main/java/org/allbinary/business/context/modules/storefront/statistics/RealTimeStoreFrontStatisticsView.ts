
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
        
//not game specific package import { StoreFrontAdvertisementsStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/advertisements/StoreFrontAdvertisementsStatisticsInterface.js';
      const StoreFrontAdvertisementsStatisticsInterface = globalThis.org.allbinary.business.context.modules.storefront.statistics.advertisements.StoreFrontAdvertisementsStatisticsInterface;

      
//not game specific package import { StoreFrontAdvertisementsStatisticsView } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/advertisements/StoreFrontAdvertisementsStatisticsView.js';
      const StoreFrontAdvertisementsStatisticsView = globalThis.org.allbinary.business.context.modules.storefront.statistics.advertisements.StoreFrontAdvertisementsStatisticsView;

      
//not game specific package import { StoreFrontInventoryStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/inventory/StoreFrontInventoryStatisticsInterface.js';
      const StoreFrontInventoryStatisticsInterface = globalThis.org.allbinary.business.context.modules.storefront.statistics.inventory.StoreFrontInventoryStatisticsInterface;

      
//not game specific package import { StoreFrontInventoryStatisticsView } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/inventory/StoreFrontInventoryStatisticsView.js';
      const StoreFrontInventoryStatisticsView = globalThis.org.allbinary.business.context.modules.storefront.statistics.inventory.StoreFrontInventoryStatisticsView;

      
//not game specific package import { StoreFrontOrdersHistoryStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/orders/history/StoreFrontOrdersHistoryStatisticsInterface.js';
      const StoreFrontOrdersHistoryStatisticsInterface = globalThis.org.allbinary.business.context.modules.storefront.statistics.orders.history.StoreFrontOrdersHistoryStatisticsInterface;

      
//not game specific package import { StoreFrontOrdersHistoryStatisticsView } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/orders/history/StoreFrontOrdersHistoryStatisticsView.js';
      const StoreFrontOrdersHistoryStatisticsView = globalThis.org.allbinary.business.context.modules.storefront.statistics.orders.history.StoreFrontOrdersHistoryStatisticsView;

      
//not game specific package import { StoreFrontUsersStatisticsInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/users/StoreFrontUsersStatisticsInterface.js';
      const StoreFrontUsersStatisticsInterface = globalThis.org.allbinary.business.context.modules.storefront.statistics.users.StoreFrontUsersStatisticsInterface;

      
//not game specific package import { StoreFrontUsersStatisticsView } from '../../../../../../../org/allbinary/business/context/modules/storefront/statistics/users/StoreFrontUsersStatisticsView.js';
      const StoreFrontUsersStatisticsView = globalThis.org.allbinary.business.context.modules.storefront.statistics.users.StoreFrontUsersStatisticsView;

      
//not game specific package import { UserRole } from '../../../../../../../org/allbinary/business/user/role/UserRole.js';
      const UserRole = globalThis.org.allbinary.business.user.role.UserRole;

      
//not game specific package import { UserRoleFactory } from '../../../../../../../org/allbinary/business/user/role/UserRoleFactory.js';
      const UserRoleFactory = globalThis.org.allbinary.business.user.role.UserRoleFactory;

      
//not game specific package import { DomNodeInterface } from '../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not game specific package import { Document } from '../../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
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



