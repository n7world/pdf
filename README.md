# N7 World PDF

This is the PDF version of N7 World: A Mass Effect TTRPG

## Requirements
1. Access to the n7world homebrewery account
2. Basic understanding of [homebrewery](https://homebrewery.naturalcrit.com/)
3. Node.js

## Editing
1. Edit the contents in `./sections`
    1. (optional) if you need to host an image statically for the pdf, you can do so in images
2. Copy the contents into the Homebrewery file
3. Save
    1. (optional) if you added pages, you may have to adjust the table of contents
4. with Node.js installed, run `node combine.js`
5. Copy the contents of `full-pdf.md` into the full document on homebrewery
