function apiGetData(itemName, itemID, container){
    var url = "https://api.rsbuddy.com/grandExchange?a=guidePrice&i=" + itemID
    
    /*
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        crossDomain : true,
        xhrFields: {
            withCredentials: false
        },
        success: function(result,status,xhr){
            var overall = JSON.stringify(result.overall);
            var buying = JSON.stringify(result.buying);
            var buyingQuantity = JSON.stringify(result.buyingQuantity);
            var selling = JSON.stringify(result.selling);
            var sellingQuantity = JSON.stringify(result.sellingQuantity);
            var largeIcon = "<img src='http://services.runescape.com/m=itemdb_oldschool/5139_obj_big.gif?id=" + itemID + "' />";
            
            container.html(largeIcon + "<h3>" + itemName + "</h3>" + "<br />" + "Average Price: " + overall + "<br /> <br />" + "Average Buy: " + buying + " - Total Buying: " + buyingQuantity + "<br />" + "Average Sell: " + selling + " - Total Selling: " + sellingQuantity + "<br />");
            
            console.log(itemName);
            console.log("API Request status: " + status);
            console.log(url);
            //console.log(xhr);
        },
        error: function(xhr,status,error){
            container.html("FAILED TO LOOKUP ITEM");
            
            console.log("API Request status: " + status);
            console.log(url);
            //console.log(error);
        }
    });
    */
    
    $.ajax({
        url: 'http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=' + itemID,
        dataType: 'json',
        success: function(result){
            console.log(JSON.parse(result));
            console.log(itemName);
            console.log("API Request status: ");
            console.log("http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=" + itemID);
            //console.log(xhr);
        },
        error: function(xhr,status,error){
            container.html("FAILED TO LOOKUP ITEM");
            console.log("FAILED TO LOOKUP ITEM");
            console.log("API Request status: " + status);
            console.log("http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=" + itemID);
            console.log(error);
        }
    });
}