
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
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../../../../../java/util/Vector.js";

    

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
    
adminRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
storeAdminRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
storeAdminRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
storeManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
storeManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
storeManagementRoles!.add(basicUserRoleFactory!.CUSTOMERMANAGER);
    
storeManagementRoles!.add(basicUserRoleFactory!.ADJUSTER);
    
storeManagementRoles!.add(basicUserRoleFactory!.PRODUCTMANAGER);
    
storeManagementRoles!.add(basicUserRoleFactory!.REVIEWER);
    
storeManagementRoles!.add(basicUserRoleFactory!.SHIPPING);
    
productManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
productManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
productManagementRoles!.add(basicUserRoleFactory!.PRODUCTMANAGER);
    
reviewManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
reviewManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
reviewManagementRoles!.add(basicUserRoleFactory!.REVIEWER);
    
customerManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
customerManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
customerManagementRoles!.add(basicUserRoleFactory!.CUSTOMERMANAGER);
    
workflowManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
workflowManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
workflowManagementRoles!.add(basicUserRoleFactory!.WORKFLOWEDITOR);
    
orderManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
orderManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
adjusterManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
adjusterManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
adjusterManagementRoles!.add(basicUserRoleFactory!.ADJUSTER);
    
shippingManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
shippingManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
shippingManagementRoles!.add(basicUserRoleFactory!.SHIPPING);
    
webManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR);
    
webManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER);
    
webManagementRoles!.add(basicUserRoleFactory!.WEBMANAGER);
    
webManagementRoles!.add(basicUserRoleFactory!.WORKFLOWEDITOR);
    
webManagementRoles!.add(basicUserRoleFactory!.VIEWEDITOR);
    
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
                
            

