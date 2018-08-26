import jsonpRequset from "jsonp";


export default class jsonp {
  static jsonp (data){
    return new Promise((resolve, reject) => {
      jsonpRequset(data.url,{
        param:'callback'
      },(err,res)=>{
        if (res.status == 'success') {
          resolve(res);
        } else {
          reject(res.messsage);
        }
      })
    })
  }
}