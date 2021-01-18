let address = {
    street   : 'a',
    city     : 'b',
    zipCode  : 'c'
};

function createAddress(address){
    return {
        street: address.street, 
        city : address.city, 
        zipCode: address.zipCode
    }
}; 

const address1 = new createAddress(address);
console.log(address1);

// The above process can also be written as 

let address2 = createAddress2('d','e','f');

function createAddress2(street, city, zipCode){
    return{
            street, 
            city, 
            zipCode
    };
}

console.log(address2);



// _________The above codes are written based on Factory function ____________________________________//





// _________The above codes are written based on Constructor function ____________________________________//


function Address3(street,city, zipCode){
    this.street = street; 
    this.city = city; 
    this.zipCode = zipCode;
}

const address3 = new Address3('g','h','i'); 
console.log(address3);




let address4 = {
    street   : 'j',
    city     : 'k',
    zipCode  : 'l'
};


function Address4(address4){
    this.street = address4.street;
    this.city = address4.city;
    this.zipCode = address4.zipCode;
}

const address5 = new Address4(address4); 
console.log(address5);