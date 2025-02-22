class StatusResponse{

 sendResponse(res,statusHttp,statusExito,data,msg){
        res.status(statusHttp).json({
           'estado':statusExito,
           'smg': msg,
           'data':data
       })
     }  
}

module.exports = StatusResponse;