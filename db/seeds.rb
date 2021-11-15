user1 = User.create!(username: "bbaney", password_digest: "password")

item1 = Item.create!(
        name: "Pre-lit 8' Tree. Ornaments Included",
        price: 150,
        item_type: "tree",
        description: "This beautiful 8’ tree comes with built in colored lights that are set on a timer so that they don’t burn out. The tree also includes all of the white and gold ornaments in the picture. ",
        info: "This is an 8' tree with built in lights, 72 inches in diameter",
        return: "This is the return information for this product",
        shipping: "This is the shipping information for this product",
        image: "https://static.wixstatic.com/media/84770f_87ce07af00b54500899015d9de6f0c69~mv2_d_1500_1500_s_2.jpg/v1/fill/w_728,h_728,al_c,q_85,usm_0.66_1.00_0.01/84770f_87ce07af00b54500899015d9de6f0c69~mv2_d_1500_1500_s_2.webp",
        user_id: 1
)

item2 = Item.create!(
        name: "Snow-Styled 10' Tree",
        price: 120,
        item_type: "tree",
        description: "This beautiful 10’ tree comes with fake pinecones and a fake snow effect to make it appear snowy.",
        info: "This is an 10' tree, 80 inches in diameter",
        return: "This is the return information for this product",
        shipping: "This is the shipping information for this product",
        image: "https://static.wixstatic.com/media/84770f_b0aad5af51b54bda937415b47907945f~mv2_d_1500_1500_s_2.jpg/v1/fill/w_728,h_728,al_c,q_85,usm_0.66_1.00_0.01/84770f_b0aad5af51b54bda937415b47907945f~mv2_d_1500_1500_s_2.webp",
        user_id: 1
)

item3 = Item.create!(
        name: "Mini 3' Apartment Tree",
        price: 30,
        item_type: "tree",
        description: "This 3' tall tree is perfect for small apartment, it's beautiful and requires no assembly.",
        info: "This is a 3' tree, perfect for a small coffee table",
        return: "This is the return information for this product",
        shipping: "This is the shipping information for this product",
        image: "https://static.wixstatic.com/media/84770f_a67ae9b05c6345b69cbaa49b1867fe0e~mv2_d_1500_1500_s_2.jpg/v1/fill/w_728,h_728,al_c,q_85,usm_0.66_1.00_0.01/84770f_a67ae9b05c6345b69cbaa49b1867fe0e~mv2_d_1500_1500_s_2.webp",
        user_id: 1
)

item4 = Item.create!(
        name: 'Reindeer Lights',
        price: 75,
        item_type: "light",
        description: "These lights are perfect for any hunters or animal lovers. They show a beautiful deer statue with lights around the horns.",
        info: "Reindeer Lights, 24 Inches tall, 12 Inches wide",
        return: "This is the return information for this product",
        shipping: "This is the shipping information for this product",
        image: "https://static.wixstatic.com/media/84770f_5ae06a886c2e4db58d1ca341bdef732d~mv2_d_1500_1500_s_2.jpg/v1/fill/w_728,h_728,al_c,q_85,usm_0.66_1.00_0.01/84770f_5ae06a886c2e4db58d1ca341bdef732d~mv2_d_1500_1500_s_2.webp",
        user_id: 1
)

item5 = Item.create!(
        name: "20' White Light Strand",
        price: 15,
        item_type: "light",
        description: "These beautiful white lights will look great on any tree and also work great outside as well!",
        info: "20' strand of indoor/outdoor lights",
        return: "This is the return information for this product",
        shipping: "This is the shipping information for this product",
        image: "https://static.wixstatic.com/media/84770f_4cc787f4e77e4e14a8f95d96f7c67394~mv2.jpg/v1/fill/w_728,h_728,al_c,q_85,usm_0.66_1.00_0.01/84770f_4cc787f4e77e4e14a8f95d96f7c67394~mv2.webp",
        user_id: 1
)

item6 = Item.create!(
        name: "15' Star Lights",
        price: 18,
        item_type: "light",
        description: "These beautiful star styled lights will look great on any tree!",
        info: "15' strand of indoor lights",
        return: "This is the return information for this product",
        shipping: "This is the shipping information for this product",
        image: "https://static.wixstatic.com/media/84770f_387431e2b56a4f2fb94846f3e252e23e~mv2_d_1500_1500_s_2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/84770f_387431e2b56a4f2fb94846f3e252e23e~mv2_d_1500_1500_s_2.webp",
        user_id: 1
)

item7 = Item.create!(
        name: "Holiday Wreath",
        price: 22,
        item_type: "ornament",
        description: "This beautiful wreath is ready to go, it comes with a holder to hang it on the door",
        info: "14 inch X 14 inch holiday wreath",
        return: "This is the return information for this product",
        shipping: "This is the shipping information for this product",
        image: "https://static.wixstatic.com/media/84770f_818268cadd8d45f8ae4ca2ee1a6ceb3f~mv2_d_1500_1500_s_2.jpg/v1/fill/w_728,h_728,al_c,q_85,usm_0.66_1.00_0.01/84770f_818268cadd8d45f8ae4ca2ee1a6ceb3f~mv2_d_1500_1500_s_2.webp",
        user_id: 1
)

item8 = Item.create!(
        name: "Gold Ornament Bundle",
        price: 25,
        item_type: "ornament",
        description: "This variety pack of gold colored ornaments would be great on any tree, 20 ornaments included",
        info: "20 pack of a variety of gold colored ornaments",
        return: "This is the return information for this product",
        shipping: "This is the shipping information for this product",
        image: "https://static.wixstatic.com/media/84770f_871b564a648646fbae8dab34497fd593~mv2_d_1500_1500_s_2.jpg/v1/fill/w_728,h_728,al_c,q_85,usm_0.66_1.00_0.01/84770f_871b564a648646fbae8dab34497fd593~mv2_d_1500_1500_s_2.webp",
        user_id: 1
)

item9 = Item.create!(
        name: "Blue Ornament Bundle",
        price: 15,
        item_type: "ornament",
        description: "This variety pack of blue colored ornaments would be great on any tree, 20 ornaments included",
        info: "20 pack of a variety of blue colored ornaments",
        return: "This is the return information for this product",
        shipping: "This is the shipping information for this product",
        image: "https://static.wixstatic.com/media/84770f_e597ce4800724c76ae276424d5cc9754~mv2.jpg/v1/fill/w_728,h_728,al_c,q_85,usm_0.66_1.00_0.01/84770f_e597ce4800724c76ae276424d5cc9754~mv2.webp",
        user_id: 1
)