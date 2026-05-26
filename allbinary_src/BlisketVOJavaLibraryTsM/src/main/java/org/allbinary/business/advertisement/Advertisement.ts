
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
import { AdvertisementImageInterface } from '../../../../org/allbinary/business/advertisement/image/AdvertisementImageInterface.js';
      
import { AdvertisementProductInterface } from '../../../../org/allbinary/business/advertisement/product/AdvertisementProductInterface.js';
      
import { AdvertisementThumbnailInterface } from '../../../../org/allbinary/business/advertisement/thumbnail/AdvertisementThumbnailInterface.js';
      
import { Money } from '../../../../org/allbinary/business/user/commerce/money/Money.js';
      
import { DisplayInBrowserContraintsInterface } from '../../../../org/allbinary/logic/control/contraints/display/browser/DisplayInBrowserContraintsInterface.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AdvertisementInterface } from './AdvertisementInterface.js';

export class Advertisement
            extends Object
         implements AdvertisementInterface {
        

    private artist: string;

    private artistLink: string;

    private title: string;

    private dateAdded: string;

    private directory: string;

    private framedLink: string;

    private rank: number= 0;

    private listPrice: Money;

    private ourPrice: Money;

    private image: AdvertisementImageInterface;

    private product: AdvertisementProductInterface;

    private thumbnail: AdvertisementThumbnailInterface;

    private readonly displayInBrowserContraintsInterface: DisplayInBrowserContraintsInterface;

public constructor (){

            super();
        this.displayInBrowserContraintsInterface= 
                                        null
                                    ;
    
}


    public getArtist(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.artist;
    
}


    public setArtist(artist: string){
this.artist= artist;
    
}


    public getArtistLink(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.artistLink;
    
}


    public setArtistLink(artistLink: string){
this.artistLink= artistLink;
    
}


    public getTitle(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.title;
    
}


    public setTitle(title: string){
this.title= title;
    
}


    public getDateAdded(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.dateAdded;
    
}


    public setDateAdded(dateAdded: string){
this.dateAdded= dateAdded;
    
}


    public getDirectory(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.directory;
    
}


    public setDirectory(directory: string){
this.directory= directory;
    
}


    public getFramedLink(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.framedLink;
    
}


    public setFramedLink(framedLink: string){
this.framedLink= framedLink;
    
}


    public getListPrice(): Money{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.listPrice;
    
}


    public setListPrice(listPrice: Money){
this.listPrice= listPrice;
    
}


    public getOurPrice(): Money{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ourPrice;
    
}


    public setOurPrice(ourPrice: Money){
this.ourPrice= ourPrice;
    
}


    public getRank(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rank;
    
}


    public setRank(rank: number){
this.rank= rank;
    
}


    public getImage(): AdvertisementImageInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.image;
    
}


    public setImage(image: AdvertisementImageInterface){
this.image= image;
    
}


    public getProduct(): AdvertisementProductInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.product;
    
}


    public setProduct(product: AdvertisementProductInterface){
this.product= product;
    
}


    public getThumbnail(): AdvertisementThumbnailInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.thumbnail;
    
}


    public setThumbnail(thumbnail: AdvertisementThumbnailInterface){
this.thumbnail= thumbnail;
    
}


    public getDisplayInBrowserContraintsInterface(): DisplayInBrowserContraintsInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.displayInBrowserContraintsInterface;
    
}


}
                
            

