
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
        



import { UserFactory } from "../../../../../org/allbinary/business/user/modules/UserFactory.js";

    
import { AdminUserFactory } from "../../../../../org/allbinary/business/user/modules/admin/AdminUserFactory.js";

    
import { StoreAdminUserFactory } from "../../../../../org/allbinary/business/user/modules/admin/store/StoreAdminUserFactory.js";

    
import { CustomerStoreAdminUserFactory } from "../../../../../org/allbinary/business/user/modules/admin/store/customer/CustomerStoreAdminUserFactory.js";

    
import { OrderStoreAdminUserFactory } from "../../../../../org/allbinary/business/user/modules/admin/store/order/OrderStoreAdminUserFactory.js";

    
import { AdjustOrderStoreAdminUserFactory } from "../../../../../org/allbinary/business/user/modules/admin/store/order/adjust/AdjustOrderStoreAdminUserFactory.js";

    
import { ReviewOrderStoreAdminUserFactory } from "../../../../../org/allbinary/business/user/modules/admin/store/order/review/ReviewOrderStoreAdminUserFactory.js";

    
import { ShipOrderStoreAdminUserFactory } from "../../../../../org/allbinary/business/user/modules/admin/store/order/ship/ShipOrderStoreAdminUserFactory.js";

    
import { PaymentStoreAdminUserFactory } from "../../../../../org/allbinary/business/user/modules/admin/store/payment/PaymentStoreAdminUserFactory.js";

    
import { ProductStoreAdminUserFactory } from "../../../../../org/allbinary/business/user/modules/admin/store/product/ProductStoreAdminUserFactory.js";

    
import { WebStoreAdminUserFactory } from "../../../../../org/allbinary/business/user/modules/admin/store/web/WebStoreAdminUserFactory.js";

    
import { ViewEditorWebStoreAdminUserFactory } from "../../../../../org/allbinary/business/user/modules/admin/store/web/view/editor/ViewEditorWebStoreAdminUserFactory.js";

    
import { WizardWebStoreAdminUserFactory } from "../../../../../org/allbinary/business/user/modules/admin/store/web/wizard/WizardWebStoreAdminUserFactory.js";

    
import { WorkflowEditorWebStoreAdminUserFactory } from "../../../../../org/allbinary/business/user/modules/admin/store/web/workflow/editor/WorkflowEditorWebStoreAdminUserFactory.js";

    
import { SubscriberUserFactory } from "../../../../../org/allbinary/business/user/modules/customer/subscriber/SubscriberUserFactory.js";

    
import { WholesaleUserFactory } from "../../../../../org/allbinary/business/user/modules/customer/wholesale/WholesaleUserFactory.js";

    

export class UserRoleFactory
            extends Object
         {
        

    private static readonly instance: UserRoleFactory = new UserRoleFactory();
        
        

    public static getInstance(): UserRoleFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly basicUserRoleFactory: BasicUserRoleFactory = BasicUserRoleFactory.getInstance()!;
        
        

    public readonly INSTALLER: UserRole = new UserRoleB(basicUserRoleFactory!.INSTALLER, 
                            null);
        
        

    public readonly ADMINISTRATOR: UserRole = new UserRoleB(basicUserRoleFactory!.ADMINISTRATOR, AdminUserFactory());
        
        

    public readonly CUSTOMER: UserRole = new UserRoleB(basicUserRoleFactory!.CUSTOMER, UserFactory());
        
        

    public readonly SUBSCRIBERCUSTOMER: UserRole = new UserRoleB(basicUserRoleFactory!.SUBSCRIBERCUSTOMER, SubscriberUserFactory());
        
        

    public readonly WHOLESALECUSTOMER: UserRole = new UserRoleB(basicUserRoleFactory!.WHOLESALECUSTOMER, WholesaleUserFactory());
        
        

    public readonly STOREMANAGER: UserRole = new UserRoleB(basicUserRoleFactory!.STOREMANAGER, StoreAdminUserFactory());
        
        

    public readonly PRODUCTMANAGER: UserRole = new UserRoleB(basicUserRoleFactory!.PRODUCTMANAGER, ProductStoreAdminUserFactory());
        
        

    public readonly CUSTOMERMANAGER: UserRole = new UserRoleB(basicUserRoleFactory!.CUSTOMERMANAGER, CustomerStoreAdminUserFactory());
        
        

    public readonly PAYMENTMANAGER: UserRole = new UserRoleB(basicUserRoleFactory!.PAYMENTMANAGER, PaymentStoreAdminUserFactory());
        
        

    public readonly ORDERMANAGER: UserRole = new UserRoleB(basicUserRoleFactory!.ORDERMANAGER, OrderStoreAdminUserFactory());
        
        

    public readonly WEBMANAGER: UserRole = new UserRoleB(basicUserRoleFactory!.WEBMANAGER, WebStoreAdminUserFactory());
        
        

    public readonly REVIEWER: UserRole = new UserRoleB(basicUserRoleFactory!.REVIEWER, ReviewOrderStoreAdminUserFactory());
        
        

    public readonly SHIPPING: UserRole = new UserRoleB(basicUserRoleFactory!.SHIPPING, ShipOrderStoreAdminUserFactory());
        
        

    public readonly ADJUSTER: UserRole = new UserRoleB(basicUserRoleFactory!.ADJUSTER, AdjustOrderStoreAdminUserFactory());
        
        

    public readonly WORKFLOWEDITOR: UserRole = new UserRoleB(basicUserRoleFactory!.WORKFLOWEDITOR, WorkflowEditorWebStoreAdminUserFactory());
        
        

    public readonly WIZARD: UserRole = new UserRoleB(basicUserRoleFactory!.WIZARD, WizardWebStoreAdminUserFactory());
        
        

    public readonly VIEWEDITOR: UserRole = new UserRoleB(basicUserRoleFactory!.VIEWEDITOR, ViewEditorWebStoreAdminUserFactory());
        
        

}
                
            

