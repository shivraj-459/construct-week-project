var row2 =[
    {name: "SENBONO Max2 Smartwatch",
    img:"https://img.gkbcdn.com/s3/bn/2205/497705-626f45ba2b40c9339c112e8e.jpg",
    },

    {name: "SENBONO Max2 Smartwatch",
    img:"https://img.gkbcdn.com/s3/bn/2205/449701-626f45ea2b40c9339c112e8f.jpg",
    },

    {name: "SENBONO Max2 Smartwatch",
    img:"https://img.gkbcdn.com/s3/bn/2205/463887-626f45612b40c9339c112e8d.jpg",
    },

    {name: "SENBONO Max2 Smartwatch",
    img:"https://img.gkbcdn.com/s3/bn/2205/499068-626f46232b40c9339c112e90.jpg",
    },
]

display2(row2)

function display2(data)
{
  data.forEach(function (ele){
     var div = document.createElement("div")

     var h3 = document.createElement("h3")
     h3.innerText=ele.name
     var img = document.createElement("img")
     img.setAttribute("src",ele.img)
div.append(h3,img)
document.querySelector("#row2").append(div)
console.log(div)
  })
}

var  row3 = [
    {
        image_url: "https://img.gkbcdn.com/p/2022-03-29/LOKMAT-APPLLP-MAX-Android-Watch-Phone-Black-498482-0._w280_p1_.jpg",
        price: 38475.04,
        strikedoffprice : 62816.89 ,
        discount: "$24% Off",
    },
    {
        image_url: "https://img.gkbcdn.com/p/2022-02-19/LOKMAT-Time-2-Sport-Smart-Watch-Black-496727-0._w280_p1_.jpg" ,
       
        price: 39260.26 ,
        strikedoffprice : 49468.14 ,
       discount: "$26% Off",
    },
    {
        image_url: "https://img.gkbcdn.com/p/2017-07-26/xiaomi-wifi-amplifier-pro-black-1574132393616._w280_p1_.jpg" ,
        price: 24341.07 ,
        strikedoffprice : 36119.38 ,
        discount: "$21% Off",
    },
    {
        image_url: "https://img.gkbcdn.com/p/2021-11-29/razer-deathadder-essential-optical-gaming-mouse-black-aa9d23-1638169302886._w280_p1_.jpg" ,
        price: 83814.49,
        strikedoffprice : 117782.36,
        discount: "$9% Off",
    },
    {
        image_url: "https://img.gkbcdn.com/p/2019-03-22/tronsmart-glary-virtual-7-1-gaming-headset-1571985014193._w280_p1_.jpg" ,
        price: 83814.49,
        strikedoffprice : 117782.36,
        discount: "9% Off",
    },
];

display3(row3)

function display3(data)
{
  data.forEach(function (ele){
     var div = document.createElement("div")

     var img = document.createElement("img")
     img.setAttribute("src",ele.image_url)

     var h4 = document.createElement("h4")
     h4.innerText=ele.price
     var em = document.createElement("em")
     em.innerText = ele.strikedoffprice

     var h5 = document.createElement("h5")
     h5.innerText = ele.discount
   
div.append(img,h4,em,h5)
document.querySelector("#row3").append(div)
console.log(div)
  })
}

var  row4 = [
   
    {
           imge: "https://img.gkbcdn.com/s3/bn/2204/laser-6260f66a2b40c93724be1ee9.jpg",
            name: "Tronsmart T6 Pro",
            dis :"Patented SoundPulse technology,three EQ effects,up to 24 hours playtime " ,
           
        },
        {
            imge : "https://img.gkbcdn.com/s3/bn/2204/Gamesir-6260f6532b40c93724be1ee8.jpg" ,
           
            name: "Wlyoys RC Car ",
           dis: "independent 60A ESC, up to 75km/h, aliminum alloy body",
        },
        {
            imge: "https://img.gkbcdn.com/s3/bn/2203/481198-623d205c2b40c91d90971af4.jpg" ,
            name: "Eleglide D1 Off-road E-Scooter",
            dis: "10'' pneumatic tires, 500W motor,48V 18A battery,45/h max speed",
        },
        {
            imge: "https://img.gkbcdn.com/s3/bn/2204/497217-624fa3172b40c931484ec7f2.jpg" ,
            name: "ACGAM B1-402 Treadmill",
            dis: "Jogging & running 2 in 1, installation-free built-in Bluetooth speaker",
        },
     
    ];

    display4(row4)

    function display4(data){
        data.map(function(ele){
            var div = document.createElement("div")

            var p = document.createElement("h4")
            p.textContent=ele.name;

            var image = document.createElement("img")
            image.setAttribute("src",ele.imge)

   

            var pone = document.createElement("h5")
            pone.textContent=ele.dis

            div.append(p,image,pone);
           document.querySelector("#row4").append(div);
        })
    }