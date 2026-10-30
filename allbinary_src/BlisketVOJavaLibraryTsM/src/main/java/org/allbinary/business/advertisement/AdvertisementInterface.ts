
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

        


import { AdvertisementImageInterface } from '../../../../org/allbinary/business/advertisement/image/AdvertisementImageInterface.js';
//not GWT import const AdvertisementImageInterface

import { AdvertisementProductInterface } from '../../../../org/allbinary/business/advertisement/product/AdvertisementProductInterface.js';
//not GWT import const AdvertisementProductInterface

import { AdvertisementThumbnailInterface } from '../../../../org/allbinary/business/advertisement/thumbnail/AdvertisementThumbnailInterface.js';
//not GWT import const AdvertisementThumbnailInterface

import { Money } from '../../../../org/allbinary/business/user/commerce/money/Money.js';
//not GWT import const Money

import { DisplayInBrowserContraintsInterface } from '../../../../org/allbinary/logic/control/contraints/display/browser/DisplayInBrowserContraintsInterface.js';
//not GWT import const DisplayInBrowserContraintsInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface AdvertisementInterface {
        

    getArtist(): string;

    getArtistLink(): string;

    getTitle(): string;

    getDateAdded(): string;

    getDirectory(): string;

    getFramedLink(): string;

    getListPrice(): Money;

    getOurPrice(): Money;

    getRank(): number;

    getImage(): AdvertisementImageInterface;

    getProduct(): AdvertisementProductInterface;

    getThumbnail(): AdvertisementThumbnailInterface;

    getDisplayInBrowserContraintsInterface(): DisplayInBrowserContraintsInterface;

    setArtist(artist: string): void;

    setArtistLink(artistLink: string): void;

    setTitle(title: string): void;

    setDateAdded(dateAdded: string): void;

    setDirectory(directory: string): void;

    setFramedLink(framedLink: string): void;

    setRank(rank: number): void;

    setImage(AdvertisementImageInterface: AdvertisementImageInterface): void;

    setProduct(AdvertisementProductInterface: AdvertisementProductInterface): void;

    setThumbnail(AdvertisementThumbnailInterface: AdvertisementThumbnailInterface): void;

}

