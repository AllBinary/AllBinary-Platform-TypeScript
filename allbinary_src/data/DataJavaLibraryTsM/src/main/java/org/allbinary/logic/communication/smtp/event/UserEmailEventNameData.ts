
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { OrderHistoryData } from "../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js";

    

export class UserEmailEventNameData
            extends Object
         {
        

    private userNameEvenNameHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

    private nextId: number = 0;
        
        

    public static readonly INSTALLER: UserEmailEventNameData = new UserEmailEventNameData("Installer");
        
        

    public static readonly EXCEPTION: UserEmailEventNameData = new UserEmailEventNameData("Exception");
        
        

    public static readonly LOGGEDEXCEPTION: UserEmailEventNameData = new UserEmailEventNameData("Logged Exception");
        
        

    public static readonly ERROR: UserEmailEventNameData = new UserEmailEventNameData("Error");
        
        

    public static readonly OUTOFMEMORY: UserEmailEventNameData = new UserEmailEventNameData("Out Of Memory Error");
        
        

    public static readonly ADMINGENERATINGSTATICPAGES: UserEmailEventNameData = new UserEmailEventNameData("Admin Generating Static Pages");
        
        

    public static readonly STOREERROROCCURRED: UserEmailEventNameData = new UserEmailEventNameData("Store Error Occurred");
        
        

    public static readonly STOREOUTOFMEMORY: UserEmailEventNameData = new UserEmailEventNameData("Store Out Of Memory Error");
        
        

    public static readonly STORECREATED: UserEmailEventNameData = new UserEmailEventNameData("Store Created");
        
        

    public static readonly STOREOPENED: UserEmailEventNameData = new UserEmailEventNameData("Store Opened");
        
        

    public static readonly STORECLOSED: UserEmailEventNameData = new UserEmailEventNameData("Store Closed");
        
        

    public static readonly STOREGENERATINGSTATICPAGES: UserEmailEventNameData = new UserEmailEventNameData("Store Generating Static Pages");
        
        

    public static readonly PRODUCTISOUT: UserEmailEventNameData = new UserEmailEventNameData("Product Is Out");
        
        

    public static readonly PRODUCTISAVAILABLE: UserEmailEventNameData = new UserEmailEventNameData("Product Is Available");
        
        

    public static readonly PRODUCTISOLD: UserEmailEventNameData = new UserEmailEventNameData("Product Is Old");
        
        

    public static readonly PRODUCTISONSALE: UserEmailEventNameData = new UserEmailEventNameData("Product Is On Sale");
        
        

    public static readonly PRODUCTSALEISOVER: UserEmailEventNameData = new UserEmailEventNameData("Product Sale Is Over");
        
        

    public static readonly ORDERPREPROCESSING: UserEmailEventNameData = new UserEmailEventNameData(OrderHistoryData.PREPROCESSING);
        
        

    public static readonly ORDERPROCESSING: UserEmailEventNameData = new UserEmailEventNameData(OrderHistoryData.PROCESSING);
        
        

    public static readonly ORDERCANCELLED: UserEmailEventNameData = new UserEmailEventNameData(OrderHistoryData.CANCELLED);
        
        

    public static readonly ORDERPARTIALLYSHIPPED: UserEmailEventNameData = new UserEmailEventNameData(OrderHistoryData.PARTIALLYSHIPPED);
        
        

    public static readonly ORDERSHIPPED: UserEmailEventNameData = new UserEmailEventNameData(OrderHistoryData.SHIPPED);
        
        

    public static readonly QUOTEREQUEST: UserEmailEventNameData = new UserEmailEventNameData("Quote Request");
        
        

    public static readonly NEWPASSWORD: UserEmailEventNameData = new UserEmailEventNameData("New Password");
        
        

                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static getInstance(userEmailEventNameString: string): UserEmailEventNameData{
var userEmailEventNameString = userEmailEventNameString

    var userEmailEventNameData: UserEmailEventNameData = UserEmailEventNameData.userNameEvenNameHashMap!.get(userEmailEventNameString as Object) as UserEmailEventNameData;
        
        


    
                        if(userEmailEventNameData == 
                                    null
                                )
                        
                                    {
                                    


                            throw Exception()

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return userEmailEventNameData;
    

                        }
                            
}


    private eventNameId: number= 0

    private eventHandlerName: string
public constructor (eventHandlerName: string){

            super();
            var eventHandlerName = eventHandlerName
this.eventHandlerName= eventHandlerName
this.initNextId()
put(this.eventHandlerName, this)
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    initNextId(){
this.eventNameId= UserEmailEventNameData.nextId
UserEmailEventNameData.nextId++
}


    public isEvent(userEmailEventNameString: string): boolean{
var userEmailEventNameString = userEmailEventNameString



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userNameEvenNameHashMap!.containsKey(userEmailEventNameString);
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.eventHandlerName;
    
}


}
                
            

