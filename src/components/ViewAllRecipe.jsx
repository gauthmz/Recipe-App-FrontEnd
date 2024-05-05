import React, { useState } from 'react'
import RecipeNavbar from './RecipeNavbar'

const VIewAllRecipe = () => {
    const [data, changeData] = useState(
        [
            { "RecipeTitle": "Strawberry Jalapeno Margarita", "IMGLink": "https://www.allrecipes.com/thmb/61ANqzvV3yGOHrNGPRThwPEAn5Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8636576_Strawberry-Jalapeno-Margarita_FranceCevallos_4x3-6f678fc9926a4c1e87e27748bd1fd28f.jpg", "category":"Veg" },
            { "RecipeTitle": "One-Pan Shrimp And Rice", "IMGLink": "https://www.allrecipes.com/thmb/gYax2FGTxdX1KXCdmmYQ0d_qr0Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8635722-one-pan-shrimp-rice-ddmfs-4x3-5a018fbd30f54cff9fc66af7f79c82a6.jpg", "category":"Non Veg" },
            { "RecipeTitle": "French Onion Soup Rice", "IMGLink": "https://www.allrecipes.com/thmb/Gcnvf8V9oVjttGVVdDBSSts-6qc=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8633479-French-Onion-Soup-Rice-4x3-035-92fc114c6309472a97db6acb5c559cc1.jpg", "category":"Veg" },
            { "RecipeTitle": "Strawberry Cheesecake Cookies", "IMGLink": "https://www.allrecipes.com/thmb/aNYmInKh_0suMdL_GYwpKez49ug=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8635005-strawberry-cheesecake-cookies-ddmfs-4x3-1e27b9b5d5cd4c2c9796b2f94ce652b7.jpg", "category":"Veg" },
            { "RecipeTitle": "Slow Cooker Honey Garlic Chicken Noodles", "IMGLink": "https://www.allrecipes.com/thmb/gRMZsZGTGwWz_qHvx9huxQjEYIw=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8629517-Slow-Cooker-Honey-Garlic-Chicken-Noodles-4x3-053-40e60ea56d684f2397804cbc30bf238b.jpg", "category":"Non Veg" },
            { "RecipeTitle": "Strawberry Lemon Cheesecake Rolls", "IMGLink": "https://www.allrecipes.com/thmb/ttgHTjoROxny_bxqCHaS_MIZOEg=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8629243-Strawberry-Lemon-Cheesecake-Rolls-4x3-223-b1828a20bab94c239b1efcf21024ae21.jpg", "category":"Veg" },
            { "RecipeTitle": "Arayes (Lebanese Meat Stuffed Pita)", "IMGLink": "https://www.allrecipes.com/thmb/o9wphACIViW8rV7JRC0gPiUN-Cw=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8635793_Arayes_John-Mitzewich_4x3-08237ade9d1b446ea11e719603e8b0df.jpg", "category":"Non Veg" },
            { "RecipeTitle": "Limoncello Poppy Seed Chiffon Cake", "IMGLink": "https://www.allrecipes.com/thmb/9YPK-d5LnHJPIfphKMFDKRWAMwk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8634352_Limoncello-Poppy-Seed-Chiffon-Cake_Kim_4x3-fbaa0745f6ec405586cedac749773373.jpg", "category":"Veg" },
            { "RecipeTitle": "Blackened Shrimp Tacos with Pineapple", "IMGLink": "https://www.allrecipes.com/thmb/uWgYL40zm5CUQFv8BY4jK8PpKN0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8629864_Blackened-Shrimp-and-Pineapple-Tacos_Maura-Rawlette_4x3-6d6cff4dfbb54e958b7577db16ab8311.jpg", "category":"Non Veg" },
            { "RecipeTitle": "Artichoke Parmesan Soup", "IMGLink": "https://www.allrecipes.com/thmb/dFon0ch7LqgzC38faDJkuO-zv5s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8634426_Artichoke-Parmesan-Soup_France-Cevallos_4x3-ed02e27d568c4a45a56db1b5750135f0.jpg", "category":"Veg" },
            { "RecipeTitle": "Chopped Greek Chicken Sandwich", "IMGLink": "https://www.allrecipes.com/thmb/HGzhGL7mZwBaT-KXYCOD7M5DcMA=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8629838_Chopped-Greek-Chicken-Sandwich_John-Mitzewich_4x3-48824fa8c0a746f0826c88994189cd1b.jpg", "category":"Non Veg" },
            { "RecipeTitle": "Rosemary Mashed Potatoes", "IMGLink": "https://www.allrecipes.com/thmb/V7HHX_m1v7663qFp0ZLIBwefPO8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8634938RosemaryMashedPotatoeslutzflcat4x3-12a675e137a849d09a3e3ad33ff68d69.jpg", "category":"Veg" },
            { "RecipeTitle": "Lemon Orzo", "IMGLink": "https://www.allrecipes.com/thmb/Z_9tlVAosIncD-dPQY31SiQEeBk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8634992-lemon-orzo-ddmfs-4x3-dc9ca5a6ca9e4324aa77a9c36e34649c.jpg", "category":"Veg" },
            { "RecipeTitle": "Sawdust Pie", "IMGLink": "https://www.allrecipes.com/thmb/dSyhzHDx9Ho2muUiH1UgpXsubLo=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8633508-Sawdust-Pie-4x3-075-bfbf48227da74668861f22e229d6f5ba.jpg", "category":"Veg" },
            { "RecipeTitle": "Tortilla de Patatas", "IMGLink": "https://www.allrecipes.com/thmb/EvujCXq9oUCuYAq1v_2EK0NGi00=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8640102_Chef_Johns-Tortilla-de-Patatas_John-Mitzewich_4x3-832ef082e8f24032af1be0dd6b0d3dc7.jpg", "category":"Veg" },
            { "RecipeTitle": "Thai Iced Coffee", "IMGLink": "https://www.allrecipes.com/thmb/Lt3YCBoqkE3JeUZ4gGZpHmHrwrA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8641489ThaiIcedCoffeeYoly4x3-bf7a4539edf2434ca022b2accda27f91.jpg", "category":"Veg" },
            { "RecipeTitle": "Espresso Cake", "IMGLink": "https://www.allrecipes.com/thmb/juK5-M587TT5dxDpSdePKx6Egg0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8636967_Espresso-Cake_Yolanda-Gutierrez_4x3-05380b28a5104ec081b9a8cb1c1750cb.jpg", "category":"Veg" },
            { "RecipeTitle": "Gin and Jam Cocktail", "IMGLink": "https://www.allrecipes.com/thmb/--o01Q4oE-F78XSMOgEHVv1C4QI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8638068_Gin-and-Jam-Cocktail_France-Cevallos_4x3-b964162e6e7c463d9f1a382838d6cb60.jpg", "category":"Veg" },
            { "RecipeTitle": "Chicken Scampi Pasta", "IMGLink": "https://www.allrecipes.com/thmb/Rly-mpp8OC4O4cr2k3VRpRnJR5w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8636935_Chicken-Scampi-Pasta_Shelia-Johnson_4x3-5da7db73eee24fc8a0cbac43a939d295.jpg", "category":"Non Veg" },
            { "RecipeTitle": "Shrimp Cocktail Wraps", "IMGLink": "https://www.allrecipes.com/thmb/KlZ-_a_79nyLIFCxvIhOv9uOAPU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8635373_Shrimp-Cocktail-Wraps_Nicole-Russell_4x3-cbea9543decb4c259aa5aa68c154777b.jpg", "category":"Non Veg" }
        ]
    )
    return (
        <div>
            <RecipeNavbar />
            <br />
            <div className="container">
                <div className="row">
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <center><h3>Recipes</h3></center>
                            <center><p>Discover delicious recipes from savory mains to sweet treats, it's your go-to for culinary inspiration!</p></center>
                            <br/>
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card h-100">
                                            <img src={value.IMGLink}
                                                class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.RecipeTitle}</h5>
                                                <p>{value.category}</p>
                                                <a href="#" class="btn btn-dark">View</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )
                            }

                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default VIewAllRecipe