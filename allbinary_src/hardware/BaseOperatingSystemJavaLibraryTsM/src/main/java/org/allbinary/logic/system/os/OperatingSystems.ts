
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
        




















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OperatingSystems
            extends Object
         {
        

    private static readonly instance: OperatingSystems = new OperatingSystems();
        
        

    public static getInstance(): OperatingSystems{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly LINUX: string = "Linux";
        
        

    public readonly WINDOWS: string = "Windows";
        
        

    public readonly SOLARIS: string = "Solaris";
        
        

    public readonly WINDOWS2000: string = "Windows 2000";
        
        

    public readonly WINDOWS_NT: string = "Windows NT";
        
        

    public readonly WINDOWS_10: string = "Windows 10";
        
        

    public readonly WINDOWS_11: string = "Windows 11";
        
        

    public readonly WINDOWS_VISTA: string = "Windows Vista";
        
        

    public readonly WINDOWS_XP: string = "Windows XP";
        
        

    public readonly ANDROID: string = LINUX;
        
        
private constructor (){

            super();
        }


    private unknownSpecificOSAllowed: boolean = true;
        
        

    public isUnknownSpecificOSAllowed(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return unknownSpecificOSAllowed;
    
}


    public setUnknownSpecificOSAllowed(aUnknownSpecificOSAllowed: boolean){
var aUnknownSpecificOSAllowed = aUnknownSpecificOSAllowed
this.unknownSpecificOSAllowed= aUnknownSpecificOSAllowed;
    
}


}
                
            

