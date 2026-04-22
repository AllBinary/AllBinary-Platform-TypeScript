
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
        



import { Vector } from "../../../../../java/util/Vector.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicUserRoleFactory } from "./BasicUserRoleFactory.js";

export class AdminRoleFactory
            extends Object
         {
        

    private static readonly instance: AdminRoleFactory = new AdminRoleFactory();
        
        

    public static getInstance(): AdminRoleFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly adminRoles: Vector<any> = new Vector<any>();
        
        

    private readonly storeAdminRoles: Vector<any> = new Vector<any>();
        
        

    private readonly storeManagementRoles: Vector<any> = new Vector<any>();
        
        

    private readonly productManagementRoles: Vector<any> = new Vector<any>();
        
        

    private readonly reviewManagementRoles: Vector<any> = new Vector<any>();
        
        

    private readonly customerManagementRoles: Vector<any> = new Vector<any>();
        
        

    private readonly workflowManagementRoles: Vector<any> = new Vector<any>();
        
        

    private readonly orderManagementRoles: Vector<any> = new Vector<any>();
        
        

    private readonly adjusterManagementRoles: Vector<any> = new Vector<any>();
        
        

    private readonly shippingManagementRoles: Vector<any> = new Vector<any>();
        
        

    private readonly webManagementRoles: Vector<any> = new Vector<any>();
        
        
private constructor (){

            super();
        
    var basicUserRoleFactory: BasicUserRoleFactory = BasicUserRoleFactory.getInstance()!;
        
        
;
    
this.adminRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
this.storeAdminRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
this.storeAdminRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
this.storeManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
this.storeManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
this.storeManagementRoles!.add(basicUserRoleFactory!.CUSTOMERMANAGER);
    
this.storeManagementRoles!.add(basicUserRoleFactory!.ADJUSTER);
    
this.storeManagementRoles!.add(basicUserRoleFactory!.PRODUCTMANAGER);
    
this.storeManagementRoles!.add(basicUserRoleFactory!.REVIEWER);
    
this.storeManagementRoles!.add(basicUserRoleFactory!.SHIPPING);
    
this.productManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
this.productManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
this.productManagementRoles!.add(basicUserRoleFactory!.PRODUCTMANAGER);
    
this.reviewManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
this.reviewManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
this.reviewManagementRoles!.add(basicUserRoleFactory!.REVIEWER);
    
this.customerManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
this.customerManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
this.customerManagementRoles!.add(basicUserRoleFactory!.CUSTOMERMANAGER);
    
this.workflowManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
this.workflowManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
this.workflowManagementRoles!.add(basicUserRoleFactory!.WORKFLOWEDITOR);
    
this.orderManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
this.orderManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
this.adjusterManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
this.adjusterManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
this.adjusterManagementRoles!.add(basicUserRoleFactory!.ADJUSTER);
    
this.shippingManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
this.shippingManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
this.shippingManagementRoles!.add(basicUserRoleFactory!.SHIPPING);
    
this.webManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
this.webManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
this.webManagementRoles!.add(basicUserRoleFactory!.WEBMANAGER);
    
this.webManagementRoles!.add(basicUserRoleFactory!.WORKFLOWEDITOR);
    
this.webManagementRoles!.add(basicUserRoleFactory!.VIEWEDITOR);
    
}


    public getProductManagementRoles(): Vector<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return productManagementRoles;
    
}


    public getAdminRoles(): Vector<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return adminRoles;
    
}


    public getStoreAdminRoles(): Vector<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return storeAdminRoles;
    
}


    public getStoreManagementRoles(): Vector<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return storeManagementRoles;
    
}


    public getReviewManagementRoles(): Vector<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return reviewManagementRoles;
    
}


    public getCustomerManagementRoles(): Vector<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return customerManagementRoles;
    
}


    public getWorkflowManagementRoles(): Vector<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return workflowManagementRoles;
    
}


    public getWebManagementRoles(): Vector<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return webManagementRoles;
    
}


    public getShippingManagementRoles(): Vector<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return shippingManagementRoles;
    
}


    public getAdjusterManagementRoles(): Vector<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return adjusterManagementRoles;
    
}


    public getOrderManagementRoles(): Vector<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderManagementRoles;
    
}


}
                
            

