class SalesOrderItem {
    constructor({orderId,producId,quantity,unitPrice}) {
        this.orderId=orderId;
        this.productId=producId;
        this.quantity=quantity;
        this.uniPrice=unitPrice;
    }

    calculateItemPrice(){
        return this.quantity*this.uniPrice;
    }

}