
    new Vue({
        el: '#product',
        data: {
        myname: 'Iphone 11',
        image: './iphone11-white.jpg',
        
        instock: 100,
        customername: 'enter name',
        line1: '1121 N college DR',
        line2: 'Apt 6',
        city: 'Maryville',
        zip: '64468',
        specs: ["IOS 13", "Triple Camera", "1 hour battery backup"],
        
        variant: ["256 GB", "512 GB"],
        items: 0,
        variant: [
            {
                color: 'White',
                storage: '256 GB',
                variantimage: './iphone11-white.jpg',
                variantquantity: 100,
                variantinstock: 100,
            },
            {
                color: 'Red',
                storage:'512 GB',
                variantimage: './iphone11-red.jpg',
                variantquantity: 0,
                variantinstock: 0,
            }
        ]
        },

        methods: {
        addtocart() {
            this.items += 1
        },

        updateimage(variantimage){
            this.image=variantimage
        },

        updatestock(variantinstock){
            this.instock=variantinstock
        }
    },

    computed: {
        displayorder(){
            return "Shipping Address: \n" + this.customername + "\n" + this.line1 + this.line2  + this.city + this.zip
        }
    }
   
    })
    
    
