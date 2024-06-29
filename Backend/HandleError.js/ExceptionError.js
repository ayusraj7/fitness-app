export const ExceptionError=(statuscode,message,res)=>{
    res.status(statuscode).json({
      success:false,
      message:message
    })
  }