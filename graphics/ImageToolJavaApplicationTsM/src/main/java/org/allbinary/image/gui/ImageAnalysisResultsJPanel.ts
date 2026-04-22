
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
        



import { ImageAnalysisResults } from "../../../../org/allbinary/media/image/analysis/ImageAnalysisResults.js";

    
import { ImageColorRangeResults } from "../../../../org/allbinary/media/image/analysis/ImageColorRangeResults.js";

    
import { ImageColorResults } from "../../../../org/allbinary/media/image/analysis/ImageColorResults.js";

    
import { CommonPhoneStrings } from "../../../../org/allbinary/string/CommonPhoneStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { JPanel } from "./JPanel.js";

import { Short } from "./Short.js";

export class ImageAnalysisResultsJPanel extends javax.swing.JPanel {
        
public constructor (imageAnalysisResultsArray: ImageAnalysisResults[]){

            super();
            //var imageAnalysisResultsArray = imageAnalysisResultsArray
initComponents();
    

    var imageAnalysisResults: ImageAnalysisResults = imageAnalysisResultsArray[0]!;
        
        
;
    
this.updateImageColorRangeResults(imageAnalysisResults);
    
}


    initComponents(){
this.jLabel1= new javax.swing.JLabel();
    
this.jLabel2= new javax.swing.JLabel();
    
this.jLabel3= new javax.swing.JLabel();
    
this.percentMatchingJTextField= new javax.swing.JTextField();
    
this.totalPixelsJTextField= new javax.swing.JTextField();
    
this.matchingPixelsJTextField= new javax.swing.JTextField();
    
this.jComboBox1= new javax.swing.JComboBox();
    
this.jLabel4= new javax.swing.JLabel();
    
this.jLabel5= new javax.swing.JLabel();
    
this.jLabel6= new javax.swing.JLabel();
    
this.jLabel7= new javax.swing.JLabel();
    
this.avgRedJTextField= new javax.swing.JTextField();
    
this.avgGreenJTextField= new javax.swing.JTextField();
    
this.avgBlueJTextField= new javax.swing.JTextField();
    
this.minGreenJTextField= new javax.swing.JTextField();
    
this.jLabel8= new javax.swing.JLabel();
    
this.jLabel9= new javax.swing.JLabel();
    
this.jLabel10= new javax.swing.JLabel();
    
this.minRedJTextField= new javax.swing.JTextField();
    
this.minBlueJTextField= new javax.swing.JTextField();
    
this.jLabel11= new javax.swing.JLabel();
    
this.jLabel12= new javax.swing.JLabel();
    
this.jLabel13= new javax.swing.JLabel();
    
this.maxRedJTextField= new javax.swing.JTextField();
    
this.maxGreenJTextField= new javax.swing.JTextField();
    
this.maxBlueJTextField= new javax.swing.JTextField();
    
this.jLabel1!.setText("Matching Pixels:");
    
this.jLabel2!.setText("Total Pixels:");
    
this.jLabel3!.setText("Percent Matching:");
    
this.percentMatchingJTextField!.setEditable(false);
    
this.totalPixelsJTextField!.setEditable(false);
    
this.matchingPixelsJTextField!.setEditable(false);
    
this.jComboBox1!.setModel(new javax.swing.DefaultComboBoxModel(
                                                [
                                                    CommonPhoneStrings.getInstance()!.ONE;
        
        
                                                ]));
    
this.jComboBox1!.setEnabled(false);
    
this.jLabel4!.setText("Image:");
    
this.jLabel5!.setText("Average Red:");
    
this.jLabel6!.setText("Average Green:");
    
this.jLabel7!.setText("Average Blue:");
    
this.avgRedJTextField!.setEditable(false);
    
this.avgGreenJTextField!.setEditable(false);
    
this.avgBlueJTextField!.setEditable(false);
    
this.minGreenJTextField!.setEditable(false);
    
this.jLabel8!.setText("Min Red:");
    
this.jLabel9!.setText("Min Green:");
    
this.jLabel10!.setText("Min Blue:");
    
this.minRedJTextField!.setEditable(false);
    
this.minBlueJTextField!.setEditable(false);
    
this.jLabel11!.setText("Max Red:");
    
this.jLabel12!.setText("Max Green:");
    
this.jLabel13!.setText("Max Blue:");
    
this.maxRedJTextField!.setEditable(false);
    
this.maxGreenJTextField!.setEditable(false);
    
this.maxBlueJTextField!.setEditable(false);
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        
;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(jLabel3)!.addComponent(jLabel2)!.addComponent(jLabel1)!.addComponent(jLabel5)!.addComponent(jLabel6)!.addComponent(jLabel7)!.addComponent(jLabel4))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(jComboBox1, javax.swing.GroupLayout.PREFERRED_SIZE, 81, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(avgBlueJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 81, Short.MAX_VALUE)!.addComponent(avgGreenJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 81, Short.MAX_VALUE)!.addComponent(avgRedJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 81, Short.MAX_VALUE)!.addComponent(totalPixelsJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 81, Short.MAX_VALUE)!.addComponent(percentMatchingJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 81, Short.MAX_VALUE)!.addComponent(matchingPixelsJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 81, Short.MAX_VALUE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(jLabel12)!.addComponent(jLabel13)!.addComponent(jLabel8)!.addComponent(jLabel9)!.addComponent(jLabel10)!.addComponent(jLabel11))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(minRedJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(maxGreenJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(minGreenJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(minBlueJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(maxRedJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(maxBlueJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE))!.addContainerGap(18, Short.MAX_VALUE)));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel4)!.addComponent(jComboBox1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel1)!.addComponent(matchingPixelsJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel8)!.addComponent(minRedJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel2)!.addComponent(totalPixelsJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel9)!.addComponent(minGreenJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel3)!.addComponent(percentMatchingJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel10)!.addComponent(minBlueJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel5)!.addComponent(avgRedJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel11)!.addComponent(maxRedJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel6)!.addComponent(avgGreenJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(maxGreenJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel12))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel7)!.addComponent(avgBlueJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel13)!.addComponent(maxBlueJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))));
    
}


    updateImageColorRangeResults(imageAnalysisResults: ImageAnalysisResults){
    //var imageAnalysisResults = imageAnalysisResults

    var imageColorRangeResults: ImageColorRangeResults = imageAnalysisResults!.getImageColorRangeResults()!;
        
        
;
    
this.matchingPixelsJTextField!.setText(imageColorRangeResults!.getMatchingPixelsChecked() as Long.
                            toString());
    
this.totalPixelsJTextField!.setText(imageColorRangeResults!.getTotalPixelsChecked() as Long.
                            toString());
    
this.percentMatchingJTextField!.setText(new Float(imageColorRangeResults!.getPercent()).
                            toString());
    

    var imageColorResults: ImageColorResults = imageAnalysisResults!.getImageColorResults()!;
        
        
;
    
this.avgRedJTextField!.setText(new Float(imageColorResults!.getColorAverage()!.getAvgRed()).
                            toString());
    
this.avgGreenJTextField!.setText(new Float(imageColorResults!.getColorAverage()!.getAvgGreen()).
                            toString());
    
this.avgBlueJTextField!.setText(new Float(imageColorResults!.getColorAverage()!.getAvgBlue()).
                            toString());
    
this.minRedJTextField!.setText(imageColorResults!.getColorRange()!.getMinRed() as Long.
                            toString());
    
this.minGreenJTextField!.setText(imageColorResults!.getColorRange()!.getMinGreen() as Long.
                            toString());
    
this.minBlueJTextField!.setText(imageColorResults!.getColorRange()!.getMinBlue() as Long.
                            toString());
    
this.maxRedJTextField!.setText(imageColorResults!.getColorRange()!.getMaxRed() as Long.
                            toString());
    
this.maxGreenJTextField!.setText(imageColorResults!.getColorRange()!.getMaxGreen() as Long.
                            toString());
    
this.maxBlueJTextField!.setText(imageColorResults!.getColorRange()!.getMaxBlue() as Long.
                            toString());
    
}


    private avgBlueJTextField: javax.swing.JTextField

    private avgGreenJTextField: javax.swing.JTextField

    private avgRedJTextField: javax.swing.JTextField

    private jComboBox1: javax.swing.JComboBox

    private jLabel1: javax.swing.JLabel

    private jLabel10: javax.swing.JLabel

    private jLabel11: javax.swing.JLabel

    private jLabel12: javax.swing.JLabel

    private jLabel13: javax.swing.JLabel

    private jLabel2: javax.swing.JLabel

    private jLabel3: javax.swing.JLabel

    private jLabel4: javax.swing.JLabel

    private jLabel5: javax.swing.JLabel

    private jLabel6: javax.swing.JLabel

    private jLabel7: javax.swing.JLabel

    private jLabel8: javax.swing.JLabel

    private jLabel9: javax.swing.JLabel

    private matchingPixelsJTextField: javax.swing.JTextField

    private maxBlueJTextField: javax.swing.JTextField

    private maxGreenJTextField: javax.swing.JTextField

    private maxRedJTextField: javax.swing.JTextField

    private minBlueJTextField: javax.swing.JTextField

    private minGreenJTextField: javax.swing.JTextField

    private minRedJTextField: javax.swing.JTextField

    private percentMatchingJTextField: javax.swing.JTextField

    private totalPixelsJTextField: javax.swing.JTextField

}
                
            

