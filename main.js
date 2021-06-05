class From1To100 {
    constructor() {
        this.answer = document.getElementById("ex1_answer");
        this.clearAnswer();
        let i = 1;
        while (i <= 100) {
            this.writeIntoAnswer(i);
            i++;
        }
    }
    writeIntoAnswer(value) {
        this.answer.innerHTML += value;
        if (value < 100) {
            this.answer.innerHTML += ", ";
        }
    }
    clearAnswer() {
        this.answer.innerHTML = "";
    }

}
//тут будет хардкод. вообще, можно было бы сделать фабричным методом создание товара, который падал бы в корзину
var ItemsNomenclature = {
    "Item1": {
        name: "Item1",
        cost: 102.5
    },
    "Item2": {
        name: "Item2",
        cost: 1.55
    },
    Item3: {
        name: "Item3",
        cost: 24.54
    }

}

class ShopingCart {
    constructor() {
        this.cart = [];
        this.cost = 0;
        document.getElementById("ex2_answer").innerHTML = this.cost.toFixed(2);
    }
    AddToCart(item) {
        this.cart.push(item);
        this.RefreshCost();
        document.getElementById("cart").innerHTML += item.name + ": " + item.cost+" $<br>";
    }
    RefreshCost() {
        this.cost = 0;
        this.cart.forEach(element => {
            this.cost += element.cost;
        });
        document.getElementById("ex2_answer").innerHTML = this.cost.toFixed(2);
    }
    ClearCart() {
        this.cart = [];
        this.RefreshCost();
        document.getElementById("cart").innerHTML = "";
    }
}

var Cart = new ShopingCart;

class ForFrom0to9 {
    constructor() {
        this.answer = document.getElementById("ex3_answer");
        this.answer.innerHTML = "";
        for (let i = 0; this.printNumber(i) && i < 9; i++) { }
    }
    printNumber(i) {
        this.answer.innerHTML += i;
        if (i < 9) {
            this.answer.innerHTML += ", ";
        }
        return true;
    }
}

class Pyramide {
    constructor() {
    for (let i = 1; i <= 20; i++) {
        this.answer = document.getElementById("ex4_answer");
        this.answer.innerHTML += i + ". ";
        for (let j = i; j > 0; j--) {
            this.answer.innerHTML += "*";
        }
        this.answer.innerHTML += "<br>";
    }
}
}