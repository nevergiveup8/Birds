
    var goods = [];
    function Bird (type, quantity, price){
        this.type = type;
        this.quantity = quantity;
        this.price = price;
        this.soldQuantity = 0;
        this.cash = 0;

    }
    function addBirds (Bird, quantity) {
        Bird.quantity =+ quantity;
    }
    function saleBirds (Bird, quantity) {
        Bird.quantity =- quantity;
        Bird.soldQuantity =+ quantity;
        Bird.cash = this.soldQuantity * this.price;
    }
    function addBird(event) {

        var Eagle = new Bird ("Eagle", '2','20');
        goods.push(Eagle);
        console.log("addBird ---> " + event);
        var table = document.getElementById("summary");
        var row = table.insertRow();
        var c_1 = row.insertCell(0);
        c_1.innerHTML = goods[0].type;
        var c_2 = row.insertCell(1);
        c_2.innerHTML = test.quantity;
        var c_2 = row.insertCell(2);
        c_2.innerHTML = test.price;
    }


    // var sumMoney = 0;
    // var sumSaledGoods = 0;
    //
    //
    // function saleBird (bird, quant) {
    // //    var result = findBirdInArray (bird);
    //   //      if (result != "Bird isn't exists!") {
    //             for (bird in kindOfGoods) {
    //                 bird.quantity =- quant;
    //                 bird.sold =+ quant;
    //             }
    // }
    // maxQuantityOfBirds();
    // function findBirdInArray(bird){
    //     for (var index=0; index<kindOfGoods.length; index++){
    //         if (bird == kindOfGoods[index]){
    //             return index;
    //         } else {
    //             alert("Bird isn't exists!")
    //             return "Bird isn't exists!";
    //         }}
    // }
    // function saledGoods() {
    //     return sumSaledGoods;
    // }
    // function kindsOfGoodsExist(bird) {
    //     for (var i=0; i<kindOfGoods.length; i++){
    //         if (bird == kindOfGoods[i]){
    //             return quantityOfGoods[i];
    //         }
    //         return "Bird isn't exists!";
    //     }
    // }
    // function lessThen3 () {
    //     for (var i=0; i<kindOfGoods.length; i++){
    //         if (kindsOfGoodsExist(kindOfGoods[i])<3){
    //             console.log(kindOfGoods[i] + ' = '  + kindsOfGoodsExist(kindOfGoods[i]));
    //         }
    //     }
    // }
    // function changePrice(bird, newPrice) {
    //     var result = findBirdInArray (bird);
    //     if (result != "Bird isn't exists!") {
    //         priceOfGoods[result] = newPrice;
    //     }
    // }
    //
    // function addBird(bird, quant) {
    //     var result = findBirdInArray (bird);
    //     quantityOfGoods[result] += quant;
    // }
    // function isExistBird(bird) {
    //     var result = findBirdInArray (bird);
    //     if (quantityOfGoods[result]>0){
    //         console.log("Birds exist");
    //     }
    // }
    // function showProfit(){
    //     console.log(sumMoney);
    // }
    // function maxQuantityOfBirds(){
    //     var tempQ = 0;
    //     var tempName = "";
    //     for (var i=0; i<quantityOfGoods.length; i++){
    //         if (quantityOfGoods[i]>tempQ) {
    //             tempQ = quantityOfGoods[i];
    //             tempName = kindOfGoods[i];
    //         }
    //     }
    //     console.log(tempName + " = " + tempQ  + ' items')
    //     return tempName + " = " + tempQ  + ' items';
    //
    // }


