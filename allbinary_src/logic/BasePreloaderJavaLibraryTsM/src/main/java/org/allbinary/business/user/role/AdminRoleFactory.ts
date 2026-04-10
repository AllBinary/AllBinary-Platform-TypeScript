
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

    

export class AdminRoleFactory
            extends Object
         {
        

    private static readonly instance: AdminRoleFactory = new AdminRoleFactory();
        
        

    public static getInstance(): AdminRoleFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly adminRoles: Vector<Any> = new Vector<Any>();
        
        

    private readonly storeAdminRoles: Vector<Any> = new Vector<Any>();
        
        

    private readonly storeManagementRoles: Vector<Any> = new Vector<Any>();
        
        

    private readonly productManagementRoles: Vector<Any> = new Vector<Any>();
        
        

    private readonly reviewManagementRoles: Vector<Any> = new Vector<Any>();
        
        

    private readonly customerManagementRoles: Vector<Any> = new Vector<Any>();
        
        

    private readonly workflowManagementRoles: Vector<Any> = new Vector<Any>();
        
        

    private readonly orderManagementRoles: Vector<Any> = new Vector<Any>();
        
        

    private readonly adjusterManagementRoles: Vector<Any> = new Vector<Any>();
        
        

    private readonly shippingManagementRoles: Vector<Any> = new Vector<Any>();
        
        

    private readonly webManagementRoles: Vector<Any> = new Vector<Any>();
        
        
private constructor (){

            super();
            
    var basicUserRoleFactory: BasicUserRoleFactory = BasicUserRoleFactory.getInstance()!;
        
        

add(basicUserRoleFactory!.ADMINISTRATOR)
add(basicUserRoleFactory!.ADMINISTRATOR)
add(basicUserRoleFactory!.STOREMANAGER)
add(basicUserRoleFactory!.ADMINISTRATOR)
add(basicUserRoleFactory!.STOREMANAGER)
add(basicUserRoleFactory!.CUSTOMERMANAGER)
add(basicUserRoleFactory!.ADJUSTER)
add(basicUserRoleFactory!.PRODUCTMANAGER)
add(basicUserRoleFactory!.REVIEWER)
add(basicUserRoleFactory!.SHIPPING)
add(basicUserRoleFactory!.ADMINISTRATOR)
add(basicUserRoleFactory!.STOREMANAGER)
add(basicUserRoleFactory!.PRODUCTMANAGER)
add(basicUserRoleFactory!.ADMINISTRATOR)
add(basicUserRoleFactory!.STOREMANAGER)
add(basicUserRoleFactory!.REVIEWER)
add(basicUserRoleFactory!.ADMINISTRATOR)
add(basicUserRoleFactory!.STOREMANAGER)
add(basicUserRoleFactory!.CUSTOMERMANAGER)
add(basicUserRoleFactory!.ADMINISTRATOR)
add(basicUserRoleFactory!.STOREMANAGER)
add(basicUserRoleFactory!.WORKFLOWEDITOR)
add(basicUserRoleFactory!.ADMINISTRATOR)
add(basicUserRoleFactory!.STOREMANAGER)
add(basicUserRoleFactory!.ADMINISTRATOR)
add(basicUserRoleFactory!.STOREMANAGER)
add(basicUserRoleFactory!.ADJUSTER)
add(basicUserRoleFactory!.ADMINISTRATOR)
add(basicUserRoleFactory!.STOREMANAGER)
add(basicUserRoleFactory!.SHIPPING)
add(basicUserRoleFactory!.ADMINISTRATOR)
add(basicUserRoleFactory!.STOREMANAGER)
add(basicUserRoleFactory!.WEBMANAGER)
add(basicUserRoleFactory!.WORKFLOWEDITOR)
add(basicUserRoleFactory!.VIEWEDITOR)
}


    public getProductManagementRoles(): Vector<Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return productManagementRoles;
    
}


    public getAdminRoles(): Vector<Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return adminRoles;
    
}


    public getStoreAdminRoles(): Vector<Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return storeAdminRoles;
    
}


    public getStoreManagementRoles(): Vector<Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return storeManagementRoles;
    
}


    public getReviewManagementRoles(): Vector<Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return reviewManagementRoles;
    
}


    public getCustomerManagementRoles(): Vector<Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return customerManagementRoles;
    
}


    public getWorkflowManagementRoles(): Vector<Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return workflowManagementRoles;
    
}


    public getWebManagementRoles(): Vector<Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return webManagementRoles;
    
}


    public getShippingManagementRoles(): Vector<Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return shippingManagementRoles;
    
}


    public getAdjusterManagementRoles(): Vector<Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return adjusterManagementRoles;
    
}


    public getOrderManagementRoles(): Vector<Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderManagementRoles;
    
}


}
                
            

