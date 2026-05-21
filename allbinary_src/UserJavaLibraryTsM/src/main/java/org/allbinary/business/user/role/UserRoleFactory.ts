
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
import { UserFactory } from '../../../../../org/allbinary/business/user/modules/UserFactory.js';
      
import { AdminUserFactory } from '../../../../../org/allbinary/business/user/modules/admin/AdminUserFactory.js';
      
import { StoreAdminUserFactory } from '../../../../../org/allbinary/business/user/modules/admin/store/StoreAdminUserFactory.js';
      
import { CustomerStoreAdminUserFactory } from '../../../../../org/allbinary/business/user/modules/admin/store/customer/CustomerStoreAdminUserFactory.js';
      
import { OrderStoreAdminUserFactory } from '../../../../../org/allbinary/business/user/modules/admin/store/order/OrderStoreAdminUserFactory.js';
      
import { AdjustOrderStoreAdminUserFactory } from '../../../../../org/allbinary/business/user/modules/admin/store/order/adjust/AdjustOrderStoreAdminUserFactory.js';
      
import { ReviewOrderStoreAdminUserFactory } from '../../../../../org/allbinary/business/user/modules/admin/store/order/review/ReviewOrderStoreAdminUserFactory.js';
      
import { ShipOrderStoreAdminUserFactory } from '../../../../../org/allbinary/business/user/modules/admin/store/order/ship/ShipOrderStoreAdminUserFactory.js';
      
import { PaymentStoreAdminUserFactory } from '../../../../../org/allbinary/business/user/modules/admin/store/payment/PaymentStoreAdminUserFactory.js';
      
import { ProductStoreAdminUserFactory } from '../../../../../org/allbinary/business/user/modules/admin/store/product/ProductStoreAdminUserFactory.js';
      
import { WebStoreAdminUserFactory } from '../../../../../org/allbinary/business/user/modules/admin/store/web/WebStoreAdminUserFactory.js';
      
import { ViewEditorWebStoreAdminUserFactory } from '../../../../../org/allbinary/business/user/modules/admin/store/web/view/editor/ViewEditorWebStoreAdminUserFactory.js';
      
import { WizardWebStoreAdminUserFactory } from '../../../../../org/allbinary/business/user/modules/admin/store/web/wizard/WizardWebStoreAdminUserFactory.js';
      
import { WorkflowEditorWebStoreAdminUserFactory } from '../../../../../org/allbinary/business/user/modules/admin/store/web/workflow/editor/WorkflowEditorWebStoreAdminUserFactory.js';
      
import { SubscriberUserFactory } from '../../../../../org/allbinary/business/user/modules/customer/subscriber/SubscriberUserFactory.js';
      
import { WholesaleUserFactory } from '../../../../../org/allbinary/business/user/modules/customer/wholesale/WholesaleUserFactory.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicUserRoleFactory } from './BasicUserRoleFactory.js';
import { UserRoleB } from './UserRoleB.js';
import { UserRole } from './UserRole.js';

export class UserRoleFactory
            extends Object
         {
        

    private static readonly instance: UserRoleFactory = new UserRoleFactory();

    public static getInstance(): UserRoleFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UserRoleFactory.instance;
    
}


    private readonly basicUserRoleFactory: BasicUserRoleFactory = BasicUserRoleFactory.getInstance()!;

    public readonly INSTALLER: UserRole = new UserRoleB(this.basicUserRoleFactory!.INSTALLER, 
                            null);

    public readonly ADMINISTRATOR: UserRole = new UserRoleB(this.basicUserRoleFactory!.ADMINISTRATOR, new AdminUserFactory());

    public readonly CUSTOMER: UserRole = new UserRoleB(this.basicUserRoleFactory!.CUSTOMER, new UserFactory());

    public readonly SUBSCRIBERCUSTOMER: UserRole = new UserRoleB(this.basicUserRoleFactory!.SUBSCRIBERCUSTOMER, new SubscriberUserFactory());

    public readonly WHOLESALECUSTOMER: UserRole = new UserRoleB(this.basicUserRoleFactory!.WHOLESALECUSTOMER, new WholesaleUserFactory());

    public readonly STOREMANAGER: UserRole = new UserRoleB(this.basicUserRoleFactory!.STOREMANAGER, new StoreAdminUserFactory());

    public readonly PRODUCTMANAGER: UserRole = new UserRoleB(this.basicUserRoleFactory!.PRODUCTMANAGER, new ProductStoreAdminUserFactory());

    public readonly CUSTOMERMANAGER: UserRole = new UserRoleB(this.basicUserRoleFactory!.CUSTOMERMANAGER, new CustomerStoreAdminUserFactory());

    public readonly PAYMENTMANAGER: UserRole = new UserRoleB(this.basicUserRoleFactory!.PAYMENTMANAGER, new PaymentStoreAdminUserFactory());

    public readonly ORDERMANAGER: UserRole = new UserRoleB(this.basicUserRoleFactory!.ORDERMANAGER, new OrderStoreAdminUserFactory());

    public readonly WEBMANAGER: UserRole = new UserRoleB(this.basicUserRoleFactory!.WEBMANAGER, new WebStoreAdminUserFactory());

    public readonly REVIEWER: UserRole = new UserRoleB(this.basicUserRoleFactory!.REVIEWER, new ReviewOrderStoreAdminUserFactory());

    public readonly SHIPPING: UserRole = new UserRoleB(this.basicUserRoleFactory!.SHIPPING, new ShipOrderStoreAdminUserFactory());

    public readonly ADJUSTER: UserRole = new UserRoleB(this.basicUserRoleFactory!.ADJUSTER, new AdjustOrderStoreAdminUserFactory());

    public readonly WORKFLOWEDITOR: UserRole = new UserRoleB(this.basicUserRoleFactory!.WORKFLOWEDITOR, new WorkflowEditorWebStoreAdminUserFactory());

    public readonly WIZARD: UserRole = new UserRoleB(this.basicUserRoleFactory!.WIZARD, new WizardWebStoreAdminUserFactory());

    public readonly VIEWEDITOR: UserRole = new UserRoleB(this.basicUserRoleFactory!.VIEWEDITOR, new ViewEditorWebStoreAdminUserFactory());

}
                
            

