exports.requestproduct=(buyername ,sellername, productname,  productid)=>{
    return `<DOCTYPE html>
    <html>
        <head>

        <meta charset="UTF-8">
		<title>Request to Sell</title>
        <style>
            
        </style>
        </head>


        <body>
            <div>
            Hey ${sellername} you got a request from ${buyername} to sell your product ${productname}
            Product id ${productid}
            Kindly visit to the website to sell it.
            </div>
        </body>
    </html>
    `
}