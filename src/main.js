import {SalesOrder} from './sales/domain/model/sales-order.js';

//const order :SalesOrder =new SalesOrder(id:{1, customerId:1});

const order = new SalesOrder({ id: 1, customerId: 1 });
order.addItem({productId:1,quantity:2,uniPrice:100});
order.addItem({productId:2,quantity:1,uniPrice:50});
console.log(`Sales Order Total Price is ${order.calculateItemPrice()}`);





