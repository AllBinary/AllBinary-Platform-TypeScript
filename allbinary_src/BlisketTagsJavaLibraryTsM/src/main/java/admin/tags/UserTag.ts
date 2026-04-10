
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

    
import { UserHelperFactory } from "../../admin/taghelpers/UserHelperFactory.js";

    
import { EntryData } from "../../org/allbinary/business/entry/EntryData.js";

    
import { UserRoleData } from "../../org/allbinary/business/user/role/UserRoleData.js";

    
import { AbResponseHandler } from "../../org/allbinary/logic/communication/http/request/AbResponseHandler.js";

    

export class UserTag extends TableTag {
        

    private role: string

    private enable: string
public constructor (){

            super();
            this.this.setTagHelperFactory(UserHelperFactory())
this.this.setTagRequestHelperFactory(UserHelperFactory())
}


    public setRole(value: string){
var value = value
this.role= value
this.getPropertiesHashMap()!.put(UserRoleData.NAME, this.role)
}


    public setEnable(value: string){
var value = value
this.enable= value
this.getPropertiesHashMap()!.put(EntryData.getInstance()!.ENABLE, this.enable)
}


                //@Throws(JspTagException::class)
            
    public doStartTag(): number{

        try {
            
                        if(this.isEnabled())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
} catch(e: Exception)
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

}


}
                
            

