/* eslint-disable prettier/prettier */
const data = [
    {
        "name": "One Man Squad",
        "description": "Inspired by the tradition of herbal drinks, it is an alcoholic blend, with the flavours of african hers and fruits, combined to give a refreshing bitter-sweet taste",
        "imageUrl": "https://shop.prestonsliquors.co.za/wp-content/uploads/packshots/170211.png",
        "ingredients": [
            "Caramel",
            "Sweet Corn",
            "Apple",
            "Honey",
            "Custard",
            "Nutmeg",
            "Oak",
            "Creamy Toffee",
            "Ginger",
            "Vanilla",
            "Dark Stone Fruits",
            "Cola"
        ],
        "userId": 101,
        "catId": 1,
        "id": 1677151863141
    },
    {
        "name": "Kadji Beer",
        "description": "Inspired by the tradition of herbal drinks, it is an alcoholic blend, with the flavours of african hers and fruits, combined to give a refreshing bitter-sweet taste",
        "imageUrl": "https://assets.untappd.com/photos/2022_11_04/9a6d64f4875f9f135c637d0eaf84269e_640x640.jpg",
        "ingredients": [
            "Caramel",
            "Sweet Corn",
            "Apple",
            "Honey",
            "Custard",
            "Nutmeg",
            "Oak",
            "Creamy Toffee",
            "Ginger",
            "Vanilla",
            "Dark Stone Fruits",
            "Cola"
        ],
        "userId": 201,
        "catId": 3,
        "id": 1677495477195
    },
    {
        "name": "Orijin",
        "description": "Inspired by the tradition of herbal drinks, it is an alcoholic blend, with the flavours of african hers and fruits, combined to give a refreshing bitter-sweet taste",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdKqVSRjbla6FZxeT2oGjPLVXsratYpZ7_A&usqp=CAU",
        "ingredients": [
            "water",
            "alcohol",
            "sugar",
            "plant extract (kola nut, prune, oakwood, bitter orange peel, wormwood)"
        ],
        "userId": 202,
        "catId": 3,
        "id": 1677495535374
    },
    {
        "name": "Mutzig",
        "description": "Inspired by the tradition of herbal drinks, it is an alcoholic blend, with the flavours of african hers and fruits, combined to give a refreshing bitter-sweet taste",
        "imageUrl": "https://assets.untappd.com/photos/2023_02_25/2cdbb0a034fd226cf3595f96db28e7f3_640x640.jpg",
        "ingredients": [
            "water",
            "alcohol",
            "sugar",
            "plant extract (kola nut, prune, oakwood, bitter orange peel, wormwood)"
        ],
        "userId": 203,
        "catId": 3,
        "id": 1677495609321
    },
    {
        "name": "Jack Daniels",
        "description": "Inspired by the tradition of herbal drinks, it is an alcoholic blend, with the flavours of african hers and fruits, combined to give a refreshing bitter-sweet taste",
        "imageUrl": "https://images.unsplash.com/photo-1580537922571-ca7180cd700e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpc2t5JTIwYm90dGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "ingredients": [
            "80% corn",
            "12% rye",
            "8% malted barley"
        ],
        "userId": 105,
        "catId": 1,
        "id": 1677495636673
    },
    {
        "name": "Jim Beam",
        "description": "Inspired by the tradition of herbal drinks, it is an alcoholic blend, with the flavours of african hers and fruits, combined to give a refreshing bitter-sweet taste",
        "imageUrl": "https://images.unsplash.com/photo-1616189160957-83ec9bbebd23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "ingredients": [
            "We can't tell you the exact recipe for our bourbon—that's a family secret",
            "corn",
            "rye",
            "malted barley"
        ],
        "userId": 106,
        "catId": 1,
        "id": 1677495653025
    },
    {
        "name": "Tullamore Dew",
        "description": "Inspired by the tradition of herbal drinks, it is an alcoholic blend, with the flavours of african hers and fruits, combined to give a refreshing bitter-sweet taste",
        "imageUrl": "https://cdn.pixabay.com/photo/2017/03/17/16/54/irish-whiskey-2152126__340.jpg",
        "ingredients": [
            "water",
            "grain",
            "yeast",
            "golden grain",
            "pot still",
            "rich malt",
            "triple distilled",
            "three types of maturation casks: traditional",
            "ex-bourbon",
            "sherry"
        ],
        "userId": 107,
        "catId": 1,
        "id": 1677495671092
    },
    {
        "name": "Red Label",
        "description": "Inspired by the tradition of herbal drinks, it is an alcoholic blend, with the flavours of african hers and fruits, combined to give a refreshing bitter-sweet taste",
        "imageUrl": "https://images.unsplash.com/photo-1534221905680-192a9a88ac81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHdoaXNreSUyMGJvdHRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "ingredients": [],
        "userId": 108,
        "catId": 1,
        "id": 1677495698029
    },
    {
        "name": "Black Label",
        "description": "Inspired by the tradition of herbal drinks, it is an alcoholic blend, with the flavours of african hers and fruits, combined to give a refreshing bitter-sweet taste",
        "imageUrl": "https://images.unsplash.com/photo-1592620352607-53100d32f9fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpc2t5JTIwYm90dGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "ingredients": [],
        "userId": 109,
        "catId": 1,
        "id": 1677495716712
    },
    {
        "name": "Ballentines",
        "description": "Inspired by the tradition of herbal drinks, it is an alcoholic blend, with the flavours of african hers and fruits, combined to give a refreshing bitter-sweet taste",
        "imageUrl": "https://images.unsplash.com/photo-1607950714999-e856676eb87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
        "ingredients": [],
        "userId": 110,
        "catId": 1,
        "id": 1677495735826
    },
    {
        "name": "Hieneken",
        "description": "Inspired by the tradition of herbal drinks, it is an alcoholic blend, with the flavours of african hers and fruits, combined to give a refreshing bitter-sweet taste",
        "imageUrl": "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8QmVlciUyMGJvdHRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "ingredients": [],
        "userId": 204,
        "catId": 3,
        "id": 1677495757327
    },
    {
        "name": "Bavaria",
        "description": "Inspired by the tradition of herbal drinks, it is an alcoholic blend, with the flavours of african hers and fruits, combined to give a refreshing bitter-sweet taste",
        "imageUrl": "https://assets.untappd.com/photos/2023_02_26/d39415f25101b3bd30337cdfda60d8aa_640x640.jpg",
        "ingredients": [],
        "userId": 205,
        "catId": 3,
        "id": 1677495791886
    },
    {
        "name": "Bud Light",
        "description": "Inspired by the tradition of herbal drinks, it is an alcoholic blend, with the flavours of african hers and fruits, combined to give a refreshing bitter-sweet taste",
        "imageUrl": "https://images.unsplash.com/photo-1605306792171-9394b91eb0d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QmVlciUyMGJvdHRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "ingredients": [],
        "userId": 206,
        "catId": 3,
        "id": 1677495827989
    },
    {
        "name": "Sauvignon Blanc",
        "description": "Inspired by the tradition of herbal drinks, it is an alcoholic blend, with the flavours of african hers and fruits, combined to give a refreshing bitter-sweet taste",
        "imageUrl": "https://images.unsplash.com/photo-1557682204-e53b55fd750c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZSUyMGJvdHRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "ingredients": [],
        "userId": 201,
        "catId": 2,
        "id": 1677495845191
    },
    {
        "name": "Chianti",
        "description": "This results in a medium-bodied wine with notable earthy and rustic aromas. Common flavor notes include cherry, strawberry, dried herbs, balsamic vinegar, and smoke.",
        "imageUrl": "https://images.unsplash.com/photo-1610631787813-9eeb1a2386cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2luZSUyMGJvdHRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "ingredients": ["rustic aromas", "Common flavor", "cherry", "strawberry", "dried herbs", "balsamic vinegar", "smoke"],
        "userId": 201,
        "catId": 2,
        "id": 1677495865660
    },
    {
        "name": "Broadleaf",
        "description": "The hints of dark chocolate, roasted coffee, and exotic spices that the bourbon whiskey pulls out of the toasted French oak staves provide the perfect finish to the whiskey to complement any cigar and any occasion.",
        "imageUrl": "https://images.unsplash.com/photo-1592845148519-b0d41df97ac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2luZSUyMGJvdHRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "ingredients": [],
        "userId": 201,
        "catId": 2,
        "id": 1677495956132
    },
    {
        "name": "Beaufort Light",
        "description": "In her fifties, a great lady like the Beaufort Lager needed a little facelift. And then she never stopped...",
        "imageUrl": "https://www.boissonsducameroun.com/sites/default/files/illustration_produits/packshot-beaufort-light-site.png",
        "ingredients": [],
        "userId": 208,
        "catId": 3,
        "id": 1677495991970
    },
    {
        "name": "Chill",
        "description": "CHILL CITRON is a quality beer recognized for its sparkling lemon taste. A real treat that assures you of refreshment until the...",
        "imageUrl": "https://www.boissonsducameroun.com/sites/default/files/illustration_produits/chill-2.png",
        "ingredients": [],
        "userId": 210,
        "catId": 3,
        "id": 1677496025931
    },
    {
        "name": "Paros",
        "description": "Inspired by the tradition of herbal drinks, it is an alcoholic blend, with the flavours of african hers and fruits, combined to give a refreshing bitter-sweet taste",
        "imageUrl": "https://images.unsplash.com/photo-1628187832510-94b4d90445af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "ingredients": [],
        "userId": 201,
        "catId": 2,
        "id": 1677496066774
    },
    {
        "name": "33 Export",
        "description": "Its unanimity is no longer to be dismantled. With its moderate alcohol content of 5%, the most consumed blond beer in Cameroon is marketed in...",
        "imageUrl": "https://www.boissonsducameroun.com/sites/default/files/illustration_produits/packshot-33-export.png",
        "ingredients": [],
        "userId": 209,
        "catId": 2,
        "id": 1677496265971
    }
]

export default data;