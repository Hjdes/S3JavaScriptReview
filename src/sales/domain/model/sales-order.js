import {SalesOrderItem} from './sales-order-item.js';

  export class SalesOrder{
    constructor(id,customerId) {
        this.id=id;
        this.customerId=customerId;
        this.items=[];


    }
    addItem({ productId, quantity, uniPrice }) {
        this.items.push(new SalesOrder({
            orderId: this.id,
            productId,
            quantity,
            uniPrice
        }));
    }

    calculateTotal(){
        return this.items.reduce((total,item)=> total+item.calculateItemPrice(),0);
    }

    get items() {
        return this._items;
    }

}