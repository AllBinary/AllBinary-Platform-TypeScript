
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
        



            import { Exception } from '../../java/lang/Exception.js';
        
//not game specific package import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
      const JspTagException = globalThis.javax.servlet.jsp.JspTagException;

      
//not game specific package import { UserRoleData } from '../../org/allbinary/business/user/role/UserRoleData.js';
      const UserRoleData = globalThis.org.allbinary.business.user.role.UserRoleData;

      
//not game specific package import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
      const AbResponseHandler = globalThis.org.allbinary.logic.communication.http.request.AbResponseHandler;

      
//not game specific package import { SqlStrings } from '../../org/allbinary/logic/communication/sql/SqlStrings.js';
      const SqlStrings = globalThis.org.allbinary.logic.communication.sql.SqlStrings;

      
//not game specific package import { StoreValidationTransformTag } from '../../tags/StoreValidationTransformTag.js';
      const StoreValidationTransformTag = globalThis.tags.StoreValidationTransformTag;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class UserTag extends StoreValidationTransformTag {
        

    private role: string;

public constructor (){

            super();
        }


    public setRole(value: string){
this.role= value;
    
this.getPropertiesHashMap()!.put(UserRoleData.NAME, this.role);
    
}


                //@Throws(JspTagException.constructor)
            
    public doStartTag(): number{

        try {
            
                        if(this.getCommand() != 
                                    null
                                )
                        
                                    {
                                    
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.NEW) == 0)
                        
                                    {
                                    this.setName("New User View");
    
this.setObjectFile("views.admin.user.NewUserView");
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(this.commonStrings!.INSERT) == 0 || this.getCommand()!.compareTo(SqlStrings.getInstance()!.INSERT_INTO) == 0)
                        
                                    {
                                    this.setName("Add Validation User View");
    
this.setObjectFile("views.admin.user.AddValidationUserView");
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.VIEW) == 0)
                        
                                    {
                                    this.setName("Validation User View");
    
this.setObjectFile("views.admin.user.ViewValidationUserView");
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.EDIT) == 0)
                        
                                    {
                                    this.setName("Validation User View");
    
this.setObjectFile("views.admin.user.EditValidationUserView");
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(this.commonStrings!.UPDATE) == 0 || this.getCommand()!.compareTo(SqlStrings.getInstance()!.UPDATE) == 0)
                        
                                    {
                                    this.setName("Update Validation User View");
    
this.setObjectFile("views.admin.user.UpdateValidationUserView");
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(this.commonStrings!.DELETE) == 0)
                        
                                    {
                                    this.setName("Delete Validation User View");
    
this.setObjectFile("views.admin.user.DeleteValidationUserView");
    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.BACKUP) == 0)
                        
                                    {
                                    


                            throw new Exception("View not implemented");
                    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.RESTORE) == 0)
                        
                                    {
                                    


                            throw new Exception("View not implemented");
                    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(this.commonStrings!.DROP) == 0)
                        
                                    {
                                    


                            throw new Exception("View not implemented");
                    

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(this.commonStrings!.CREATE) == 0)
                        
                                    {
                                    


                            throw new Exception("View not implemented");
                    

                                    }
                                
                        else {
                            


                            throw new Exception("No Such View Command: " +this.getCommand());
                    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();;
    

                                    }
                                



                            throw new Exception("Command Null");
                    

                //: 
} catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}



