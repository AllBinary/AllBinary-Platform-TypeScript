
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

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../../../java/lang/Long.js';
        
import { Calendar } from '../../../../../../../../java/util/Calendar.js';
//not GWT import const Calendar

import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { EntryData } from '../../../../../../../../org/allbinary/business/entry/EntryData.js';
//not GWT import const EntryData

import { BasicItemData } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
//not GWT import const BasicItemData

import { ProductIdGenerator } from '../../../../../../../../org/allbinary/data/generator/ProductIdGenerator.js';
//not GWT import const ProductIdGenerator

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { StringValidationUtil } from '../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

import { TimeUtil } from '../../../../../../../../org/allbinary/time/TimeUtil.js';
//not GWT import const TimeUtil

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DownloadItemData } from './DownloadItemData.js';
//sameFolderImports - not GWT import - same folder const DownloadItemData

export class DownloadableItem
            extends Object
         {
        

    private readonly id: string;

    private readonly basicItemId: string;

    private readonly enabled: string;

    private readonly system: string;

    private readonly platform: string;

    private readonly specialName: string;

    private readonly version: string;

    private readonly changes: string;

    private readonly licenseFile: string;

    private readonly file: string;

    private readonly size: Long;

    private readonly validTime: Long;

    private readonly retries: string;

    public constructor(...args: any[]) {
        super();if(args.length === 1 && typeof args[0] === 'string') {
            
            this.constructor$0(args[0]);
            
        }
        else if(args.length === 1) {
            
            this.constructor$1(args[0]);
            
        }
        
    }
    
    private constructor$0(id: string): void {
        
    let EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;;
    
this.id= new ProductIdGenerator().getNext();
    
this.basicItemId= id;
    
this.enabled= EntryData.getInstance()!.YES;
    
this.system= "Java";
    
this.platform= "Android";
    
this.specialName= EMPTY_STRING;
    
this.version= EMPTY_STRING;
    
this.changes= EMPTY_STRING;
    
this.licenseFile= EMPTY_STRING;
    
this.file= EMPTY_STRING;
    
this.size= Number(0);
    
this.validTime= Number(0);
    
this.retries= EMPTY_STRING;
    

    }
    
    private constructor$1(hashMap: HashMap<any, any>): void {
        this.id= hashMap!.get(DownloadItemData.ID) as string;
    
this.basicItemId= hashMap!.get(BasicItemData.getInstance()!.ID) as string;
    
this.enabled= hashMap!.get(EntryData.getInstance()!.ENABLE) as string;
    
this.system= hashMap!.get(DownloadItemData.SYSTEM) as string;
    
this.platform= hashMap!.get(DownloadItemData.PLATFORM) as string;
    
this.specialName= hashMap!.get(DownloadItemData.SPECIAL_NAME) as string;
    
this.version= hashMap!.get(DownloadItemData.VERSION) as string;
    
this.changes= hashMap!.get(DownloadItemData.CHANGES) as string;
    
this.licenseFile= hashMap!.get(DownloadItemData.LICENSE_FILE) as string;
    
this.file= hashMap!.get(DownloadItemData.FILE) as string;
    

    let value: string = hashMap!.get(DownloadItemData.SIZE) as string;;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(value))
                        
                                    {
                                    this.size= Number(value);
    

                                    }
                                
                        else {
                            this.size= new Long(0);
    

                        }
                            

    let validTime: string = hashMap!.get(DownloadItemData.VALID_TIME) as string;;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(validTime))
                        
                                    {
                                    this.validTime= Number(validTime);
    

                                    }
                                
                        else {
                            
    let totalYears: string = hashMap!.get(DownloadItemData.VALID_TIME_YEARS) as string;;
    

    let totalMonths: string = hashMap!.get(DownloadItemData.VALID_TIME_MONTHS) as string;;
    

    let totalDays: string = hashMap!.get(DownloadItemData.VALID_TIME_DAYS) as string;;
    

    let totalHours: string = hashMap!.get(DownloadItemData.VALID_TIME_HOURS) as string;;
    

    let totalMinutes: string = hashMap!.get(DownloadItemData.VALID_TIME_MINUTES) as string;;
    

    let totalSeconds: string = hashMap!.get(DownloadItemData.VALID_TIME_SECONDS) as string;;
    

    let totalTime: number = TimeUtil.getInstance()!.getTotalTime(totalYears, totalMonths, totalDays, totalHours, totalMinutes, totalSeconds)!;;
    
this.validTime= new Long(totalTime);
    

                        }
                            
this.retries= hashMap!.get(DownloadItemData.RETRIES) as string;
    

    }
    
    public toVector(): BasicArrayList{

    let calendar: Calendar = Calendar.getInstance()!;;
    

    let time: string = new Long(calendar.getTimeInMillis()).toString()!;;
    

    let values: BasicArrayList = new BasicArrayListD();;
    
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


    public toHashMap(): HashMap<any, any>{

    let values: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
values.put(DownloadItemData.ID, this.getId());
    
values.put(BasicItemData.getInstance()!.ID, this.basicItemId);
    
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
    

    let calendar: Calendar = Calendar.getInstance()!;;
    

    let time: string = new Long(calendar.getTimeInMillis()).toString();;
    
values.put(EntryData.getInstance()!.LASTMODIFIED, time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


    public getId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.id;
    
}


    public getSystem(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.system;
    
}


    public getPlatform(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.platform;
    
}


    public getSpecialName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.specialName;
    
}


    public getVersion(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.version;
    
}


    public getChanges(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.changes;
    
}


    public getLicenseFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.licenseFile;
    
}


    public getFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file;
    
}


    public getSize(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.size;
    
}


    public getValidTime(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.validTime;
    
}


    public getRetries(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.retries;
    
}


}

