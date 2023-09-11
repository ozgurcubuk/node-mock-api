var express = require("express");
var app = express();

app.listen(8080, () => {
 console.log("Server running on port 8080");
});


app.get("/products", (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    if (authorizationHeader === 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJzdWIiOiJodHRwczovL3d3dy5uZXRzcGFya2VyY2xvdWQuY29tLyIsImF1ZCI6ImRpc2NvLXN2YyIsInN5c3RlbV90eXBlIjoiaWUtdXMiLCJpc3MiOiJJbnZpY3RpIFNlY3VyaXR5IEx0ZCIsIm5iZiI6MTY5MzI5MzY1NCwiZXhwIjoxNzg3OTg4MDU0LCJpYXQiOjE2OTMyOTM2NTV9.q10H2AUwj4AqirX_4QnoS5f6fo4HzYcN8fE6fw5Ihxpvji9s8YUEF3ScXm-jI5SmK3BWjutZEvXfuqGoCmn7YA') {
		res.status(200).json([
            {
              "id": 1,
              "title": "Apple iPad 9. Nesil 64 GB",
              "description": "Lorem ipsum dolor sit amet.",
              "price": 5400,
              "isBasketDiscount": true,
              "basketDiscountPercentage": 10,
              "rating": 4.69,
              "stock": 50,
              "isActive": false,
              "brand": "Apple",
              "category": "ipad",
              "images": [
                "https://cdn.dsmcdn.com/ty321/product/media/images/20220204/14/43694637/262004743/1/1_org_zoom.jpg",
                "https://cdn.dsmcdn.com/ty323/product/media/images/20220204/14/43694637/262004743/3/3_org_zoom.jpg"
              ]
            },
            {
              "id": 2,
              "title": "Apple iPhone 12 64 GB",
              "description": "Lorem ipsum dolor sit amet.",
              "price": 13500,
              "isBasketDiscount": false,
              "rating": 4.4,
              "stock": 20,
              "brand": "Apple",
              "category": "smartphones",
              "images": [
                "https://cdn.dsmcdn.com/mnresize/1200/1800/ty94/product/media/images/20210404/09/74346117/57616583/1/1_org_zoom.jpg"
              ]
            }
        ])
    } else if(authorizationHeader === 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJzdWIiOiJodHRwczovL3d3dy5uZXRzcGFya2VyY2xvdWQuY29tLyIsImF1ZCI6ImRpc2NvLXN2YyIsInN5c3RlbV90eXBlIjoiaWUtdXMiLCJpc3MiOiJJbnZpY3RpIFNlY3VyaXR5IEx0ZCIsIm5iZiI6MTY5MzI5MzY1NCwiZXhwIjoxNzg3OTg4MDU0LCJpYXQiOjE2OTMyOTM2NTV9.q10H2AUwj4AqirX_4QnoS5f6fo4HzYcN8fE6fw5Ihxpvji9s8YUEF3ScXm-jI5SmK3BWjutZEvXfuqGoCmn7YB') {
        res.status(503).json({message: "Server is temporarily unavailable"})
    }
    else {
        res.status(401).json({ message: "Unauthorized" })
    }
});

app.get("/productsWithOneExtraProperty", (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    if (authorizationHeader === 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJzdWIiOiJodHRwczovL3d3dy5uZXRzcGFya2VyY2xvdWQuY29tLyIsImF1ZCI6ImRpc2NvLXN2YyIsInN5c3RlbV90eXBlIjoiaWUtdXMiLCJpc3MiOiJJbnZpY3RpIFNlY3VyaXR5IEx0ZCIsIm5iZiI6MTY5MzI5MzY1NCwiZXhwIjoxNzg3OTg4MDU0LCJpYXQiOjE2OTMyOTM2NTV9.q10H2AUwj4AqirX_4QnoS5f6fo4HzYcN8fE6fw5Ihxpvji9s8YUEF3ScXm-jI5SmK3BWjutZEvXfuqGoCmn7YA') {
		res.status(200).json([
            {
              "id": 1,
              "title": "Apple iPad 9. Nesil 64 GB",
              "description": "Lorem ipsum dolor sit amet.",
              "price": 5400,
              "isBasketDiscount": true,
              "basketDiscountPercentage": 10,
              "rating": 4.69,
              "stock": 50,
              "isActive": false,
              "brand": "Apple",
              "category": "ipad",
              "images": [
                "https://cdn.dsmcdn.com/ty321/product/media/images/20220204/14/43694637/262004743/1/1_org_zoom.jpg",
                "https://cdn.dsmcdn.com/ty323/product/media/images/20220204/14/43694637/262004743/3/3_org_zoom.jpg"
              ]
            },
            {
              "id": 2,
              "title": "Apple iPhone 12 64 GB",
              "description": "Lorem ipsum dolor sit amet.",
              "price": 13500,
              "isBasketDiscount": false,
              "rating": 4.4,
              "stock": 20,
              "brand": "Apple",
              "category": "smartphones",
              "images": [
                "https://cdn.dsmcdn.com/mnresize/1200/1800/ty94/product/media/images/20210404/09/74346117/57616583/1/1_org_zoom.jpg"
              ],
              "thatOneExtraProperty": "thatOneExtraPropertyValue"
            }
        ])
    }
});