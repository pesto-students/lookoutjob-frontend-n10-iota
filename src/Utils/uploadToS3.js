
// import S3 from 'react-aws-s3';
import S3FileUpload from 'react-s3';
 
//Optional Import
import { uploadFile } from 'react-s3';
 

import photos from '../Constants/constants';
import { bucketName,secretAccessKey,accessKeyId,region,dirName, } from "../Constants/constants";
const config = {
    bucketName: bucketName,
    dirName: dirName,
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
}
 



export default function upload(f){
    // const S3FileUpload = new S3(config);
    var d= "data"
   return S3FileUpload.uploadFile(f,config).then((data)=>{
        return data;
        console.log("s2",data);
    }).catch((error)=>{
        console.log("file which I am talking",f);
        console.log(error);
    })
    return d;
 }