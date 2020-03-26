const { Connection, Request } = require("tedious");
var express = require("express");
var app = express();
var router = express.Router();
//var sql = require("mysql");
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var guid = require('node-uuid');
var storage = require('azure-storage');

module.exports = router;

const config = {
    "useDevelopmentStorage": true,
    "connectionString": "DefaultEndpointsProtocol=https;AccountName=medicaldrawingimages;AccountKey=7mY1XHgrJjeyzb6+7YMxL8mmVIB9WutumKqiL/9/Kh4wLDede8n8ay8MTQA5ZPyBYm67DEkU/8TQlFv8T4jdcA==;EndpointSuffix=core.windows.net",
    "accountName": "medicaldrawingimages",
    "accountKey": "7mY1XHgrJjeyzb6+7YMxL8mmVIB9WutumKqiL/9/Kh4wLDede8n8ay8MTQA5ZPyBYm67DEkU/8TQlFv8T4jdcA==",
    "sas": "?sv=2019-02-02&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-03-31T03:14:35Z&st=2020-03-17T20:14:35Z&spr=https,http&sig=88sZdBaBWyymN%2BN80RRQ%2BCsLVEZc7F8O0jm6LNgD6K8%3D"
}

router.get('/', async function(req, res, next) {

    var file = imageStorageBlob(imageToUpload);
    res.download(file);
    
    
});

function imageStorageBlob(imageToUpload){

    var blobService = storage.createBlobService(config.connectionString);
    var imageToUpload = "/Users/chenbainuo/Desktop/1234.png";  
    var blockBlobContainerName = "medical-images" + guid.v1();
    var blockBlobName = "medicalimages" + imageToUpload;

    console.log('Image Blob Storage');

    //create container
    console.log('Creating Container');
    blobService.createContainerIfNotExists(blockBlobContainerName, function (error){
        if(error) return console.error(error);

        //upload a blockblob to the container
        console.log('Uploading BlockBlob');
        blobService.createBlockBlobFromLocalFile(blockBlobContainerName, blockBlobName, imageToUpload, function (error){
            if (error) return console.error(error);

            // Download a blob to your file system
            console.log('Download Blob');
            var downloadedImageName = imageToUpload;
            blobService.getBlobToLocalFile(blockBlobContainerName, blockBlobName, downloadedImageName, function (error) {
              if (error) return console.error(error);
            });
        });
    });
}