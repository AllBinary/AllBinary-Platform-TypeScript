
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


        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicUserRole } from './BasicUserRole.js';

export class BasicUserRoleFactory
            extends Object
         {
        

    private static readonly instance: BasicUserRoleFactory = new BasicUserRoleFactory();

    public static getInstance(): BasicUserRoleFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicUserRoleFactory.instance;
    
}


    private readonly INACTIVITYTIMEOUT: number = 360000000;

    private readonly CUSTOMERTIMEOUT: number = 360000000;

    private readonly CUSTOMERMAXSESSIONTIME: number = 360000000;

    private readonly MAXSESSIONTIME: number = 360000000;

    public readonly INSTALLER: BasicUserRole = new BasicUserRole("Installer", 16, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);

    public readonly ADMINISTRATOR: BasicUserRole = new BasicUserRole("Administrator", 0, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);

    public readonly CUSTOMER: BasicUserRole = new BasicUserRole("CustomerUser", "Customer User", 1, this.CUSTOMERTIMEOUT, this.CUSTOMERMAXSESSIONTIME);

    public readonly SUBSCRIBERCUSTOMER: BasicUserRole = new BasicUserRole("SubscriberUser", "Subscriber User", 2, this.CUSTOMERTIMEOUT, this.CUSTOMERMAXSESSIONTIME);

    public readonly WHOLESALECUSTOMER: BasicUserRole = new BasicUserRole("WholesaleUser", "Wholesale User", 3, this.CUSTOMERTIMEOUT, this.CUSTOMERMAXSESSIONTIME);

    public readonly STOREMANAGER: BasicUserRole = new BasicUserRole("StoreManager", "Store Manager", 4, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);

    public readonly PRODUCTMANAGER: BasicUserRole = new BasicUserRole("ProductManager", "Product Manager", 5, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);

    public readonly CUSTOMERMANAGER: BasicUserRole = new BasicUserRole("UserManager", "User Manager", 6, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);

    public readonly PAYMENTMANAGER: BasicUserRole = new BasicUserRole("PaymentManager", "Payment Manager", 7, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);

    public readonly ORDERMANAGER: BasicUserRole = new BasicUserRole("OrderManager", "Order Manager", 8, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);

    public readonly WEBMANAGER: BasicUserRole = new BasicUserRole("WebManager", "Web Manager", 9, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);

    public readonly REVIEWER: BasicUserRole = new BasicUserRole("Reviewer", 10, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);

    public readonly SHIPPING: BasicUserRole = new BasicUserRole("Shipping", 11, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);

    public readonly ADJUSTER: BasicUserRole = new BasicUserRole("Adjuster", 12, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);

    public readonly WORKFLOWEDITOR: BasicUserRole = new BasicUserRole("WorkFlowEditor", "WorkFlow Editor", 13, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);

    public readonly WIZARD: BasicUserRole = new BasicUserRole("WizardUser", "Wizard User", 14, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);

    public readonly VIEWEDITOR: BasicUserRole = new BasicUserRole("ViewEditor", "View Editor", 15, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);

}
                
            

