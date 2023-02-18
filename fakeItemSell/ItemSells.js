import Item from '../models/itemSell';
const ITEMS = [
  new Item(
    '1',
    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSL5yxzKrkpFXSP0l6G8zFzhu_vn9um8vmdn2cwWHEYaX05cnHhi0IyX8PS3iN13S2smMZLgplPViY&usqp=CAc',
    'Guanto IronMan',
    'costruzione',
    59.99,
    'Marvel',
  ),
  new Item(
    '2',
    'https://m.media-amazon.com/images/I/91Q-n5PzkDL._AC_SX679_.jpg',
    'Baby groot',
    'costruzione',
    49.99,
    'Marvel',
  ),
  new Item(
    '3',
    'https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw16f3519e/images/4/4/3/6/443641a.jpg?sfrm=png',
    'Felpa Marvel',
    'Abbigliamento',
    54.99,
    'Marvel',
  ),
  new Item(
    '4',
    'https://m.media-amazon.com/images/I/81gzsFn-mZL._AC_SL1500_.jpg',
    'guanto del infinito',
    'costruzione',
    69.99,
    'Marvel',
  ),
  new Item(
    '5',
    'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS9BSF37RslG0G-Wx6LOUdWsiNRbvjt-DX-qTWRJZwKa1g95Iwl4eGDe96P5Bnc729D3Q3PNiNLJQ&usqp=CAc',
    'T-shirt Marvel',
    'Abbigliamento',
    19.99,
    'Marvel',
  ),
  new Item(
    '6',
    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmgP6n63Z669F8DPtPLtf7A_Whjdj0jrVECJVz7LF7Drx1X9kfMWI3zxAma83s7AZL784U1KEAMA&usqp=CAc',
    'Action figure SpiderMan',
    'Decoro',
    49.99,
    'Marvel',
  ),
  new Item(
    '7',
    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOVjMbqHcS5BFnFNkyVmF3d_fDPpuYdgOMsxJmDmo8vtqws_U_psIZxsRw6GP5H3p1PFcMWzMskQBa2pbF0FEZeD4eN-wSK7YwvcrH6rXaUsVMBL150mC0&usqp=CAc',
    'Quadro Avengers',
    'Decoro',
    69.99,
    'Marvel',
  ),
  new Item(
    '8',
    'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRCP2ZeLKJpS4b3hvEsqvcVUggGuRY3du-J4RDEpayJbGnUlQF9WbFdte5KZFwraQl-lC6XsA17WA&usqp=CAc',
    'Martello di Thor',
    'costruzione',
    119.99,
    'Marvel',
  ),
  new Item(
    '9',
    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ4Cvg_CqqLtygs9A_5AJkkI--6thcJ7nC_CaIY3TgESncsyb9GbpVMwu_MiBXRVFD6F-4kSzwWRBSw1eZCT3h1mOir1gr4-6_hf4nV9FXBC8VuLZjXA1wYqa7Ew3z9FtjdKIE&usqp=CAc',
    'Playstation 5 digital + GOW',
    'console',
    499.99,
    'Sony',
  ),

  new Item(
    '10',
    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRHYcZaJnt3gokDhSzKz4mmR0CO8fyzQpZGhKTebWNzIiNIFxiuiSa2q8fdejb1IKrc5wogCUh9cpE1UmPA14oku6A8hgJyAUGwocOJQcH04FQ&usqp=CAc',
    'Playstation 5 disc + GOW',
    'console',
    549.99,
    'Sony',
  ),
  new Item(
    '11',
    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTIl0oqxZZZEV05cTHJaPCDkuWAL7pwWL35B1QRL2V-NrEENi_C3Tsm22NPaGGPeK-FJ75ZPREC5AUcsAQUZ_nGzZSMz7ACGOyN1Bpwrj805mo8nO_Djxxu3Dbb2DI14_E0jg&usqp=CAc',
    'Elden Ring',
    'VG',
    79.99,
    'Sony',
  ),
  new Item(
    '12',
    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSEIOHjPHa31nmu_clF5dQvwBo2eBV0zT4KKG71gvchqMV1mUHwAJKCyicQ0u1zZ7FCMzSRjc7Amsjt-pb_fJZXXxEXmIFYaWcqRFT9Ga1CZUPBXlpwvAQeb9Dn3yPhV59bjA&usqp=CAc',
    'Fifa 23',
    'VG',
    79.99,
    'Sony',
  ),
  new Item(
    '13',
    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSxtACfeuMBt_dRgt00S6Zr2QA6jNoqC7-kPSiFzkFXt1H2cxr_NmDsHeyY2RDpVN4ipfTg2N417V1BAH2YDzS2yOBUCangq7wkSrXFTkw8Nc7T1mXG0ATCGseY7fZHqQ_bug&usqp=CAc',
    'Horizon forbidden west',
    'VG',
    79.99,
    'Sony',
  ),
  new Item(
    '14',
    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSyPyxYcF4x3u29A4S8zvohv1RQxXTqzfoQvsL9-P4EiYG3TIn3WNs5i3JTMqsvbi5D28FqIMvKTCGQBv2S1mAZQkjwEJv_HV4gBwRKI6ESVG20KanX5dmdOZq0HQYzIyiTMw&usqp=CAc',
    'Dualsense',
    'controller',
    79.99,
    'Sony',
  ),
  new Item(
    '15',
    'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ9u9_C6NKkRbaZ542wyHEO08sDnu3nE2AxCvtVx52BLhoVLsh7CuawPRDCSKLwhpPKEVY3K2rHLmNiCf3FLZxSS9k6nSDPUY1RMeNZIBpVGslKrj8777k-pJ6Nu3LtSMLcdw&usqp=CAc',
    'Lampada Sony',
    'decoro',
    24.99,
    'Sony',
  ),
  new Item(
    '16',
    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRQ3K7tUx-N59DBtmugcbW3DjpzN8YpnkqjYPMJucnQ7aJXfAg4WXODQykZtpfupPrn1TKmaPr2Vzg&usqp=CAc',
    'Nintendo Switch',
    'console',
    249.99,
    'Nintendo',
  ),
  new Item(
    '17',
    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIls63Qn93Bux7mGHB9IpPLjgzC7JvBXu7D1zt0y7TmyP5LtaxXW8NafSmnG5rhu9-lgBc5ckGMTQ&usqp=CAc',
    'Nintendo Switch Lite',
    'console',
    199.99,
    'Nintendo',
  ),
  new Item(
    '18',
    'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQimBTbY0nfOn--Nbw2uozOLsNFvhwHo2uaN7fEc70qOSP5LPTCdPzmhWNlhPswovHUy_s5oxPBIrs&usqp=CAc',
    'Mario Kart 8',
    'Video-Game',
    59.99,
    'Nintendo',
  ),
  new Item(
    '19',
    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRNS7r_OgtI6K4JjccL5xc35V-Hr5zTVndoLnOlYZrfLQfj3AD7aHbj3yn0UW-lwSMIoCf_NZ3Rkw&usqp=CAc',
    'Joycon',
    'controller',
    69.99,
    'Nintendo',
  ),
  new Item(
    '20',
    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS8O6ic6t8E5Qmz0DMaRPBC-y5GQGKWG-qerrxxr9g7N3LLNhuVOMCEpjdnmVILoUE8O16yw2AGn-Y&usqp=CAc',
    'zelda breath of the wild',
    'Video-Game',
    59.99,
    'Nintendo',
  ),
  new Item(
    '21',
    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTjChM8b7gu6Vv88JBQomT9VBQ7GymSmpQhTUB2E8wYe4cBf8iytY1sXW4APcZJpwbxpnuN3pWzOqUE81eCvN3UvvkkFG-HtE2jcWE7TrM&usqp=CAc',
    'Lampada Nintendo',
    'decoro',
    60.99,
    'Nintendo',
  ),
  new Item(
    '22',
    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTsDDBQmrYmE8cRbCJuQjAnhESq26UxhR97W3Q0nKhb-fISYXnU5tjLZyMItD_rgoOLdebS-mghTw&usqp=CAc',
    'NES',
    'costruzione',
    249.50,
    'Nintendo',
  ),
  new Item(
    '23',
    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQvrDp5RSqWT4sap8mDZT2M5C-uSkyejsMSWTXR7II3zAN1R7agxK99tCqfcl_MHkYFy0aDqqgnQr0&usqp=CAc',
    'Castello di Hogwarts',
    'costruzione',
    466.99,
    'Harry Potter',
  ),
  new Item(
    '24',
    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSTxSdzgAEt0ndE8XgmuGuiLWNiXmfLXbjd3TkXJ-zLLvf1zaRXXpSqAudELMPkYHaMtXYVdxgS3Q&usqp=CAc',
    'Sciarpa Grifondoro',
    'Abbigliamento',
    18.90,
    'Harry Potter',
  ),
  new Item(
    '25',
    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTeYAxmmEy4Vhijv4vx9k7S0UHPZAsMJYSXdb863fiBIv5sPiYeJuXw4kYd8oGnt6EbWczikC6UwOA&usqp=CAc',
    'Sciarpa SerpeVerde',
    'Abbigliamento',
    18.90,
    'Harry Potter',
  ),
  new Item(
    '26',
    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRTGizBdKImqd_Hw1KSBxaWvQ3gA0MP3mOAy1__08Bv6T4cPidCj6e21GVfPlwEyc-2iyxqKT5WIg&usqp=CAc',
    'Harry Potter Bacchetta',
    'Decoro',
    40.50,
    'Harry Potter',
  ),
  new Item(
    '27',
    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRcwzTtZ-AC4u1eh0xbOuIYL0XVLlNAon310_2-82j9QQwOQ3vf86n_Ji3gY0l04wTAZxLkNIczehY&usqp=CAc',
    'Draco Malfoy Bacchetta',
    'decoro',
    40.50,
    'Harry Potter',
  ),
  new Item(
    '28',
    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQemDK1uZ5uojXTCEvgjVbb-Wsw6ET1_IfZmsP7P-8KJFgiNY3JDc8Ok-Zo_ZmRKKrpItC2nO9CMa8&usqp=CAc',
    'Burro Birra',
    'alimenti',
    3.50,
    'Harry Potter',
  ),
  new Item(
    '29',
    'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRWmhkkN6jIeARcWMdnR2XIfFGbrG7Fjn0psXVdarRSrYl9Fuj4zWbRYTkbJYTWyL_--ti2D3tFRZ8&usqp=CAc',
    'Tutti i gusti + 1',
    'alimenti',
    12.99,
    'Harry Potter',
  ),
  new Item(
    '30',
    'https://images.everyeye.it/img-notizie/captain-marvel-entra-far-avengers-nuove-lattine-coca-cola-v4-368237-720x720.jpg',
    'Coca-cola Avengers',
    'alimenti',
    2.00,
    'Marvel',
  ),
];

export default ITEMS;
