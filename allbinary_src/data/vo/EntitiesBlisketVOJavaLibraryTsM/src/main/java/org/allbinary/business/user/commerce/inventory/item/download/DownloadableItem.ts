
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
        



import { Calendar } from "../../../../../../../../java/util/Calendar.js";

    
import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { EntryData } from "../../../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { BasicItemData } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { ProductIdGenerator } from "../../../../../../../../org/allbinary/data/generator/ProductIdGenerator.js";

    
import { StringUtil } from "../../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { TimeUtil } from "../../../../../../../../org/allbinary/time/TimeUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { DownloadItemData } from "./DownloadItemData.js";

export class DownloadableItem
            extends Object
         {
        

    private readonly id: string

    private readonly basicItemId: string

    private readonly enabled: string

    private readonly system: string

    private readonly platform: string

    private readonly specialName: string

    private readonly version: string

    private readonly changes: string

    private readonly licenseFile: string

    private readonly file: string

    private readonly size: number

    private readonly validTime: number

    private readonly retries: string
public constructor (id: string){

            super();
        var id = id

    var EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;
;
    
this.id= new ProductIdGenerator().
                            getNext();
    
this.basicItemId= id;
    
this.enabled= EntryData.getInstance()!.YES;
    
this.system= "Java";
    
this.platform= "Android";
    
this.specialName= EMPTY_STRING;
    
this.version= EMPTY_STRING;
    
this.changes= EMPTY_STRING;
    
this.licenseFile= EMPTY_STRING;
    
this.file= EMPTY_STRING;
    
this.size= (0).toLong();
    
this.validTime= (0).toLong();
    
this.retries= EMPTY_STRING;
    
}

public constructor (hashMap: HashMap){

            super();
        var hashMap = hashMap
this.id=  as StringhashMap!.get(DownloadItemData.ID);;
    
this.basicItemId=  as StringhashMap!.get(BasicItemData.ID);;
    
this.enabled=  as StringhashMap!.get(EntryData.getInstance()!.ENABLE);;
    
this.system=  as StringhashMap!.get(DownloadItemData.SYSTEM);;
    
this.platform=  as StringhashMap!.get(DownloadItemData.PLATFORM);;
    
this.specialName=  as StringhashMap!.get(DownloadItemData.SPECIAL_NAME);;
    
this.version=  as StringhashMap!.get(DownloadItemData.VERSION);;
    
this.changes=  as StringhashMap!.get(DownloadItemData.CHANGES);;
    
this.licenseFile=  as StringhashMap!.get(DownloadItemData.LICENSE_FILE);;
    
this.file=  as StringhashMap!.get(DownloadItemData.FILE);;
    

    var value: string =  as StringhashMap!.get(DownloadItemData.SIZE);;
;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(value);)
                        
                                    {
                                    this.size= (value).toLong();
    

                                    }
                                
                        else {
                            this.size= 0;
    

                        }
                            

    var validTime: string =  as StringhashMap!.get(DownloadItemData.VALID_TIME);;
;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(validTime);)
                        
                                    {
                                    this.validTime= (validTime).toLong();
    

                                    }
                                
                        else {
                            
    var totalYears: string =  as StringhashMap!.get(DownloadItemData.VALID_TIME_YEARS);;
;
    

    var totalMonths: string =  as StringhashMap!.get(DownloadItemData.VALID_TIME_MONTHS);;
;
    

    var totalDays: string =  as StringhashMap!.get(DownloadItemData.VALID_TIME_DAYS);;
;
    

    var totalHours: string =  as StringhashMap!.get(DownloadItemData.VALID_TIME_HOURS);;
;
    

    var totalMinutes: string =  as StringhashMap!.get(DownloadItemData.VALID_TIME_MINUTES);;
;
    

    var totalSeconds: string =  as StringhashMap!.get(DownloadItemData.VALID_TIME_SECONDS);;
;
    

    var totalTime: number = TimeUtil.getInstance()!.getTotalTime(totalYears, totalMonths, totalDays, totalHours, totalMinutes, totalSeconds)!;
;
    
this.validTime= totalTime;
    

                        }
                            
this.retries=  as StringhashMap!.get(DownloadItemData.RETRIES);;
    
}


    public toVector(): Vector{

    var calendar: Calendar = Calendar.getInstance()!;
;
    

    var time: string = calendar.getTimeInMillis().
                            toString()!;
;
    

    var values: Vector = new Vector();
;
    
values.add(getId());
    
values.add(this.basicItemId);
    
values.add(this.enabled);
    
values.add(this.getSpecialName());
    
values.add(this.getVersion());
    
values.add(this.getChanges());
    
values.add(this.getSystem());
    
values.add(this.getPlatform());
    
values.add(this.getLicenseFile());
    
values.add(this.getFile());
    
values.add(this.getSize()!.toString());
    
values.add(this.getValidTime()!.toString());
    
values.add(this.getRetries());
    
values.add(time);
    
values.add(time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


    public toHashMap(): HashMap{

    var values: HashMap = new HashMap();
;
    
values.put(DownloadItemData.ID, this.getId());
    
values.put(BasicItemData.ID, this.basicItemId);
    
values.put(EntryData.getInstance()!.ENABLE, this.enabled);
    
values.put(DownloadItemData.SYSTEM, this.getSystem());
    
values.put(DownloadItemData.PLATFORM, this.getPlatform());
    
values.put(DownloadItemData.SPECIAL_NAME, this.getSpecialName());
    
values.put(DownloadItemData.VERSION, this.getVersion());
    
values.put(DownloadItemData.CHANGES, this.getChanges());
    
values.put(DownloadItemData.LICENSE_FILE, this.getLicenseFile());
    
values.put(DownloadItemData.FILE, this.getFile());
    
values.put(DownloadItemData.SIZE, this.getSize()!.toString());
    
values.put(DownloadItemData.VALID_TIME, this.getValidTime()!.toString());
    
values.put(DownloadItemData.RETRIES, this.getRetries());
    

    var calendar: Calendar = Calendar.getInstance()!;
;
    

    var time: string = calendar.getTimeInMillis().
                            toString();
;
    
values.put(EntryData.getInstance()!.LASTMODIFIED, time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


    public getId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return id;
    
}


    public getSystem(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return system;
    
}


    public getPlatform(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return platform;
    
}


    public getSpecialName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return specialName;
    
}


    public getVersion(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return version;
    
}


    public getChanges(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return changes;
    
}


    public getLicenseFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return licenseFile;
    
}


    public getFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return file;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return size;
    
}


    public getValidTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return validTime;
    
}


    public getRetries(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return retries;
    
}


}
                
            

