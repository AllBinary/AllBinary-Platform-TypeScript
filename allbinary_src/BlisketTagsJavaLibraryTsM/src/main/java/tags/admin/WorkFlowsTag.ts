
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
        



import { JspTagException } from "../../javax/servlet/jsp/JspTagException.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    
import { StoreValidationTransformTag } from "../../tags/StoreValidationTransformTag.js";

    

export class WorkFlowsTag extends StoreValidationTransformTag {
        
public constructor (){

            super();
            }


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
                        if(this.getCommand() != 
                                    null
                                )
                        
                                    {
                                    
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.NEW) == 0)
                        
                                    {
                                    this.this.setName("New WorkFlow View")
this.this.setObjectFile("views.admin.workflow.NewView")

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(this.commonStrings!.INSERT) == 0)
                        
                                    {
                                    this.this.setName("Add Validation WorkFlow View")
this.this.setObjectFile("views.admin.workflow.AddValidationView")

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.VIEW) == 0)
                        
                                    {
                                    this.this.setName("Validation WorkFlow View")
this.this.setObjectFile("views.admin.workflow.WorkflowsValidationView")

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.EDIT) == 0)
                        
                                    {
                                    this.this.setName("Validation WorkFlow View")
this.this.setObjectFile("views.admin.workflow.EditValidationView")

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(this.commonStrings!.UPDATE) == 0)
                        
                                    {
                                    this.this.setName("Update Validation WorkFlow View")
this.this.setObjectFile("views.admin.workflow.UpdateValidationView")

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(this.commonStrings!.DELETE) == 0)
                        
                                    {
                                    this.this.setName("Delete Validation WorkFlow View")
this.this.setObjectFile("views.admin.workflow.DeleteValidationView")

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.BACKUP) == 0)
                        
                                    {
                                    


                            throw Error("View not implemented")

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(org.allbinary.globals.GLOBALS2.RESTORE) == 0)
                        
                                    {
                                    


                            throw Error("View not implemented")

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(this.commonStrings!.DROP) == 0)
                        
                                    {
                                    


                            throw Error("View not implemented")

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(this.commonStrings!.CREATE) == 0)
                        
                                    {
                                    


                            throw Error("View not implemented")

                                    }
                                
                        else {
                            


                            throw Error("No Such View Command: " +this.getCommand())

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();
    

                                    }
                                



                            throw Error("Command Null")
} catch(e: Exception)
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}
                
            

