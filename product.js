document.addEventListener("DOMContentLoaded", function() {
  populateProducts();
});

function populateProducts() {
  let prodEl = $('.products');
  for (let product of products) {

    let productTags =' ';
    for (let tag of product.categories) {
      productTags += `<span class="label label-primary">${tag}</span> `
    }
    productTags += `<span class="label label-danger">${product.rating}</span>`

    let stars =' ';
    for (let i=0;i<5;i++) {
      if (i + 1 <= Math.floor(product.avgRating)) {
        stars += `<span class="glyphicon glyphicon-star orange" aria-hidden="true"></span>`
      } else {
        stars += `<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>`
      }
    }

    let discount = '';
    if (product.discount > 0) {
      discount += `&nbsp;<span class="glyphicon glyphicon-tags green"></span> <span class="h5 green">${product.discount} Off!</span>`
    }

    let productListing = `<div class="row">
      <div class="col-xs-2">
        <a href="#" class="thumbnail">
          <img src="${product.image}" alt="game poster image">
        </a>
      </div>

      <div class="col-xs-8">
        <strong class="h4">${product.name}</strong>  &nbsp;${productTags}
        <p class="h6">${product.description}</p>

        ${stars}
        <br>
        <strong class="h5">${product.price} ${discount}</strong>
      </div>
      <div class="col-xs-2 text-right">
        <input type="text" class="form-control input-sm inline-quantity" id="${product.id}-quantity" placeholder="0"></input>
        &nbsp;<a id="${product.id}-buy-link" href="#"><span class="glyphicon glyphicon-share-alt green"></span><!--
        --><span class="glyphicon glyphicon-shopping-cart green"></span></a>
      </div>
    </div>
    <br><br>
    `;
    prodEl.append(productListing);
  }
}

let products = [
  {
    id : "1001",
    name : "Gears of War - Xbox One",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/gears_of_war.jpg",
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:40.95,
    quantity:100,
    rating:'NC-17',
    categories:
      ['fps',
      'rpg',
      'puzzle',
      'adventure'
      ],
    publsiher:'Microsoft',
    discount:.5
  },
  {
    id : "1002",
    name : "Pac-Man Championship Edition 2 + Arcade Game Series - Xbox One",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/pac_man.jpg",
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:40.95,
    quantity:100,
    rating:'NC-17',
    categories:
      ['fps',
      'rpg',
      'puzzle',
      'adventure'
      ],
    publsiher:'Microsoft',
    discount:.5
  },
  {
    id : "1003",
    name : "Call of Duty: Infinite Warfare - Xbox One Legacy Edition",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/call_of_duty.jpg",
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:40.95,
    quantity:100,
    rating:'NC-17',
    categories:
      ['fps',
      'rpg',
      'puzzle',
      'adventure'
      ],
    publsiher:'Microsoft',
    discount:.5
  },
  {
    id : "1004",
    name : "Star Wars Battlefront Ultimate Edition - Xbox One",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/star_wars.jpg",
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:40.95,
    quantity:100,
    rating:'NC-17',
    categories:
      ['fps',
      'rpg',
      'puzzle',
      'adventure'
      ],
    publsiher:'Microsoft',
    discount:.5
  },
  {
    id : "1005",
    name : "The Crew - Xbox One",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/the_crew.jpg",
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:40.95,
    quantity:100,
    rating:'NC-17',
    categories:
      ['fps',
      'rpg',
      'puzzle',
      'adventure'
      ],
    publsiher:'Microsoft',
    discount:.5
  },
  {
    id : "1006",
    name : "Resident Evil 7 Biohazard - Xbox One",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/resident_evil.jpg",
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:40.95,
    quantity:100,
    rating:'NC-17',
    categories:
      ['fps',
      'rpg',
      'puzzle',
      'adventure'
      ],
    publsiher:'Microsoft',
    discount:.5
  },
  {
    id : "1007",
    name : "Tom Clancy's The Division - Xbox One",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/the_division.jpg",
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:40.95,
    quantity:100,
    rating:'NC-17',
    categories:
      ['fps',
      'rpg',
      'puzzle',
      'adventure'
      ],
    publsiher:'Microsoft',
    discount:.5
  },
  {
    id : "1008",
    name : "Batman: Arkham Knight - Xbox One",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/batman.jpg",
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:40.95,
    quantity:100,
    rating:'NC-17',
    categories:
      ['fps',
      'rpg',
      'puzzle',
      'adventure'
      ],
    publsiher:'Microsoft',
    discount:.5
  },
  {
    id : "1009",
    name : "Halo 5: Guardians",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/halo_5.jpg",
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:40.95,
    quantity:100,
    rating:'NC-17',
    categories:
      ['fps',
      'rpg',
      'puzzle',
      'adventure'
      ],
    publsiher:'Microsoft',
    discount:.5
  },
  {
    id : "1010",
    name : "Battlefield 1 - Xbox One",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/battlefield.jpg",
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:40.95,
    quantity:100,
    rating:'NC-17',
    categories:
      ['fps',
      'rpg',
      'puzzle',
      'adventure'
      ],
    publsiher:'Microsoft',
    discount:.5
  },
  {
    id : "1011",
    name : "Watch Dogs 2 - Xbox One",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/watch_dogs.jpg",
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:40.95,
    quantity:100,
    rating:'NC-17',
    categories:
      ['fps',
      'rpg',
      'puzzle',
      'adventure'
      ],
    publsiher:'Microsoft',
    discount:.5
  }
]


let cart = [
  //obj - key of item_id and value of quantity
  {'1001': 2},
  {'1010': 1},
  {'1007': 1}
]
