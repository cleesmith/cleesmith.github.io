DriveThruCards (DTC)

requirements:
1. digitized art as JPG or PNG files
2. spreadsheet (Excel, Google's Sheets) to make a CSV file
3. imagemagick (GIMP or Photoshop) to resize, colorspace, TIFF
4. InDesign to create PDF file to upload to DTC
__________________________________________________________________
at a glance how to print cards:
1. create art
2. digitize (scan or photograph) art to card size
3. use imagemagick to alter images to: TIFF, CMYK, ICC profile
4. create CSV file of folder + filenames (cards) for data merge
5. use InDesign and it's Data Merge tool to automate the 
   creation of a PDF file based on the data from the 
   CSV file, i.e. each page is a card image
6. upload exported PDF file to DTC for processing, now
   go wait by the mail box
__________________________________________________________________

step by step how to print cards:
1. do art ... the easy part of all of this, lol :-)

2. digitize art, which usually becomes a JPG/PNG 
   file and in RGB color space
   - for DTC these files (card images) need to be converted 
     to TIFF files with a colorspace of CMYK and an ICC profile
     of SWOP_Coated_240percent_Ink_Limit.icc (download from DTC)

3. use imagemagick (GIMP, Photoshop, or whatever) to convert files:
   magick convert Cups1.png -format tif -compress none -strip 
                  -colorspace CMYK 
                  -profile ../SWOP_Coated_240percent_Ink_Limit.icc 
                  ../Cups_tiff/Cups1.tif
   note: using imagemagick's covert command in bash scripts makes
         conversion happen in the blink of an eye, it's fast

4. create a CSV file with paths to all files/images
   - use Google Sheets via Google Drive, or a text editor
   - in the header row of the spreadsheet, use the "@" to 
     indicate to InDesign's data merge that the entire 
     column is the folder/pathname + filename of the card 
     image file (i.e. Cups1.tif)

5. InDesign
   - use the 7 day trial (it's a fully functional version), or 
     pay $20+ per month (but you can cancel early)
   - use "Template TarotCard - InDesign.inx" which is a 
     page template (download from DTC) ... this gives 
     you a page size of 3 inches by 5 inches, and if your 
     card images are this size already you don't really
     need a template
   - DRY (don't repeat yourself) is a good thing when it 
     comes to efficiently creating a PDF for printing by 
     DriveThruCards ... otherwise everything you do is 
     repeated 78 times over and over again ... hence the 
     magick of Data Merge, which is included with InDesign
     * i.e. you are "automating" the process of creating a 
       PDF that has all images for a deck of cards, see:
       https://www.youtube.com/watch?v=3HKwtUz807c
       ... think "game design", where you might experiment 
           and change your mind several times as you 
           develop a design ... it's the same with tarot 
           and oracle cards (well, in terms of print design)
   - Data Merge allows you to create a single page and get
     it perfect, then preview how each page will look as 
     it uses the CSV file to load the card images being 
     referenced
     - see: https://helpx.adobe.com/indesign/using/data-merge.html

6. the end ... aspirin time
