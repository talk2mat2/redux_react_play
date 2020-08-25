export const filterCatItem = (items, itemtoadd) => {
const checkItem=items.find(item=>item.title===itemtoadd.title)
if(checkItem){
    return items.map(item=>item.title===itemtoadd.title?
        {...item,quantity:item.quantity+1}:{...item})
       
}
return [...items,{...itemtoadd,quantity:1}] 
};

// items.map((cartitems) =>
// cartitems.title === itemtoadd.id

//   ? { ...cartitems, quantity: cartitems.quantity + 1 }
//   :{ ...cartitems,itemtoadd,quantity : 1}
// );

// items.map((item) =>
//         item.title === itemtoadd.id
//           ? { ...item, quantity: item.quantity+1 }
//           : { ...item }
//       )
//     : [...items, { ...itemtoadd, quantity: 1 }]