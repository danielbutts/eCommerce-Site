document.addEventListener("DOMContentLoaded", function() {

  populateCategories();
  populateEsrbs();
  addEventsToSort();

  activeProducts = products;
  sortBy = 'Title A-Z';

  sortProducts();
  populateProducts();

});

let sortBy;
// let categoryFilters;
// let esrbFilters;
let activeProducts;
let activeCategoryTags;
let activeEsrbTags;



function sortProducts () {

  if (sortBy != '') {
    switch (sortBy) {
      case '$ High to Low':
        activeProducts.sort(function compare(a, b) {
          return b.price - a.price;
        });
      break;
      case '$ Low to High':
      activeProducts.sort(function compare(a, b) {
        return a.price - b.price;
      });
      break;
      case 'Biggest Discount':
        activeProducts.sort(function compare(a, b) {
          return b.discount - a.discount;
        });
      break;
      case 'Highest Rated':
      activeProducts.sort(function compare(a, b) {
        return b.avgRating - a.avgRating;
      });
      break;
      case 'Title A-Z':
        activeProducts.sort(function compare(a, b) {
          if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return -1;
          }
          if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return 1;
          }
          return 0;
        });
      break;
      case 'Title Z-A':
      activeProducts.sort(function compare(a, b) {
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return -1;
        }
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return 1;
        }
        return 0;
      });
      break;
    }
  }
}

function getDisplayableProducts() {
  activeProducts = []
  console.log('getDisplayableProducts');
  console.log(activeCategoryTags);
  console.log(activeEsrbTags);

  console.log(products.length);
  for (let prod of products) {
    console.log(prod);
    let catActive = false;
    let esrbActive = false;
    for (let cat of prod.categories) {
      if (activeCategoryTags.includes(cat)) {
        catActive = true;
        break;
      }
    }
    console.log(activeEsrbTags);
    if (activeEsrbTags.includes(prod.esrbRating)) {
      esrbActive = true;
    }

    if (esrbActive && catActive) {
      activeProducts.push(prod);
    }
  }

  sortProducts()
  clearProducts();
  populateProducts();
}


function getFilterSet() {
  console.log('getFilterSet');
  activeCategoryTags = []
  // console.log(document.querySelectorAll('span.category'))
  for (let tag of document.querySelectorAll('span.category')) {
    if ($(tag).hasClass('label-success')) {
      activeCategoryTags.push($(tag).text());
    }
  }
  console.log(activeCategoryTags);

  activeEsrbTags = []
  // console.log(document.querySelectorAll('span.esrb'))
  for (let tag of document.querySelectorAll('span.esrb')) {
    if ($(tag).hasClass('label-danger')) {
      activeEsrbTags.push($(tag).text());
    }
  }
  console.log(activeEsrbTags);


  getDisplayableProducts();
}


// function updateStoredTags(selector,activeLabel) {
//   let obj = {}
//   for (let tag of document.querySelectorAll(selector)) {
//     obj[tag.innerHTML] = $(tag).hasClass(activeLabel);
//   }
//   getFilterSet();
//   return obj;
// }


function clickTag (e) {
  console.log('ClickTag');
  if($(e.target).hasClass('label-success')) {
    $(e.target).removeClass('label-success');
    $(e.target).addClass('label-default');
    let noneActive = true;
    for (let tag of document.querySelectorAll('span.category')) {
      if ($(tag).hasClass('label-success')) {
        noneActive = false;
        break;
      }
    }
    if (noneActive) {
      $('.label.tag.category').removeClass('label-default');
      $('.label.tag.category').addClass('label-success');
    }
  } else {
    $(e.target).removeClass('label-default');
    $(e.target).addClass('label-success');
  }

  getFilterSet();
}

function doubleClickTag (e) {
  console.log('doubleClickTag');
  $('.label.tag.category').removeClass('label-success');
  $('.label.tag.category').addClass('label-default');
  $(e.target).removeClass('label-default');
  $(e.target).addClass('label-success');
  getFilterSet();

  // categoryStates = updateStoredTags('span.category','label-success');
}

function clickEsrb (e) {
  console.log('clickEsrb');
  if($(e.target).hasClass('label-danger')) {
    $(e.target).removeClass('label-danger');
    $(e.target).addClass('label-default');
    let noneActive = true;
    for (let tag of document.querySelectorAll('span.esrb')) {
      if ($(tag).hasClass('label-danger')) {
        noneActive = false;
        break;
      }
    }
    if (noneActive) {
      $('.label.tag.esrb').removeClass('label-default');
      $('.label.tag.esrb').addClass('label-danger');
    }
  } else {
    $(e.target).removeClass('label-default');
    $(e.target).addClass('label-danger');
  }
  getFilterSet();
}

function doubleClickEsrb (e) {
  console.log('doubleClickEsrb');
  $('.label.tag.esrb').removeClass('label-danger');
  $('.label.tag.esrb').addClass('label-default');
  $(e.target).removeClass('label-default');
  $(e.target).addClass('label-danger');
  getFilterSet();
}

function addEventsToSort () {
  $('.label.sort').click(clickSortBy);
}

function clickSortBy (e) {
  console.log('clickSortBy');
  $('.label.sort').removeClass('label-warning');
  $('.label.sort').addClass('label-default');
  $(e.target).removeClass('label-default');
  $(e.target).addClass('label-warning');

  // console.log(e.target.innerHTML);
  sortBy = e.target.innerHTML;
  sortProducts()
  clearProducts();
  populateProducts();

}


function populateCategories () {
  console.log('populateCategories');
  let tagsEl = $('#tags');
  let tags = getTags();
  for (let tag in tags) {
    let tagEl = document.createElement('span');
    tagEl.className = 'label label-success tag category';
    tagEl.innerHTML = tag;
    $(tagEl).click(clickTag);
    $(tagEl).dblclick(doubleClickTag);
    tagsEl.append(tagEl);
    tagsEl.append(' ');
  }
}

function getTags () {
  console.log('getTags');
  let tags = {};
  for (let product of products) {
    for (let category of product.categories) {
      if (tags[category]!=null) {
        tags[category] = tags[category] + 1;
      } else {
        tags[category] = 1;
      }
    }
  }
  return tags;
}



function populateEsrbs () {
  console.log('populateEsrbs');
  let esrbsEl = $('#esrbs');
  let esrbs = getEsrbs();
  for (let esrb in esrbs) {
    let esrbEl = document.createElement('span');
    esrbEl.className = 'label label-danger tag esrb';
    esrbEl.innerHTML = esrb;
    $(esrbEl).click(clickEsrb);
    $(esrbEl).dblclick(doubleClickEsrb);
    esrbsEl.append(esrbEl);
    esrbsEl.append(' ');
  }
}

function getEsrbs () {
  console.log('getEsrbs');

  let esrbs = {};
  for (let product of products) {
    // console.log(product.esrbRating);
    if (esrbs[product.esrbRating]!=null) {
      esrbs[product.esrbRating] = esrbs[product.esrbRating] + 1;
    } else {
      esrbs[product.esrbRating] = 1;
    }
  }
  return esrbs;
}

function clearProducts () {
  console.log('clearProducts');
  let prodEl = $('.products');
  prodEl.empty();
}

function populateProducts () {
  console.log('populateProducts');
  let prodEl = $('.products');
  for (let product of activeProducts) {

    let productTags =' ';
    for (let tag of product.categories) {
      productTags += `<span class="label label-primary">${tag}</span> `
    }
    productTags += `<span class="label label-danger">${product.esrbRating}</span>`

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
      discount += `&nbsp;<span class="glyphicon glyphicon-tags green"></span> <span class="h5 green">${product.discount*100}% Off!</span>`
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
        <strong class="h5">$${product.price} ${discount}</strong>
      </div>
      <div class="col-xs-2 text-right">
      <div>
        <span class="inline-block black">
          <select autocomplete="off" id="${product.id}-quantity">
            <option value="1" selected="">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </span>
        <span class="inline-block" height-25">
          <span class="block line-height-10">&nbsp;</span>
          <a id="${product.id}-buy-link" class="no-dec" href="#">&nbsp;
            <span class="glyphicon glyphicon-share-alt green"></span><!--
                  --><span class="glyphicon glyphicon-shopping-cart green"></span>
          </a>
        </span>
      </div>
      </div>
    </div>
    <br><br>
    `;
    prodEl.append(productListing);
  }
}

products = [
  {
    id : "1002",
    name : "Pac-Man Championship Edition 2 - Xbox One",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/pac_man.jpg",
    avgRating: 3,
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:40.95,
    quantity:100,
    esrbRating:'Everyone',
    categories:
      ['puzzle',
      'arcade',
      '1-player'
      ],
    publsiher:'Microsoft',
    discount:0
  },
  {
    id : "1003",
    name : "Call of Duty: Infinite Warfare - Xbox One Legacy Edition",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/call_of_duty.jpg",
    avgRating: 4.5,
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:27.14,
    quantity:100,
    esrbRating:'Adult',
    categories:
      ['fps',
      'multiplayer',
      'sci-fi'
      ],
    publsiher:'Microsoft',
    discount:0
  },
  {
    id : "1001",
    name : "Gears of War - Xbox One",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/gears_of_war.jpg",
    avgRating: 3.5,
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:19.99,
    quantity:100,
    esrbRating:'Adult',
    categories:
      ['fps',
      'multiplayer',
      'sci-fi'
      ],
    publsiher:'Microsoft',
    discount:0
  },
  {
    id : "1004",
    name : "Star Wars Battlefront Ultimate Edition - Xbox One",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/star_wars.jpg",
    avgRating: 3.5,
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:16.45,
    quantity:100,
    esrbRating:'Teen',
    categories:
      ['fps',
      'multiplayer',
      'sci-fi'
      ],
    publsiher:'Microsoft',
    discount:0
  },
  {
    id : "1005",
    name : "The Crew - Xbox One",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/the_crew.jpg",
    avgRating: 2,
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:11.25,
    quantity:100,
    esrbRating:'Mature',
    categories:
      ['crime',
      'multiplayer',
      'action'
      ],
    publsiher:'Microsoft',
    discount:.45
  },
  {
    id : "1006",
    name : "Resident Evil 7 Biohazard - Xbox One",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/resident_evil.jpg",
    avgRating: 3.5,
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:39.95,
    quantity:100,
    esrbRating:'Adult',
    categories:
      ['fps',
      'horror',
      'adventure',
      '1-player'
      ],
    publsiher:'Microsoft',
    discount:.5
  },
  {
    id : "1007",
    name : "Tom Clancy's The Division - Xbox One",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/the_division.jpg",
    avgRating: 4,
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:40.95,
    quantity:100,
    esrbRating:'Adult',
    categories:
      ['fps',
      'multiplayer'
      ],
    publsiher:'Microsoft',
    discount:.25
  },
  {
    id : "1008",
    name : "Batman: Arkham Knight - Xbox One",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/batman.jpg",
    avgRating: 2.5,
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:32.00,
    quantity:100,
    esrbRating:'Adult',
    categories:
      ['fps',
      'rpg',
      'multiplayer',
      'superhero'
      ],
    publsiher:'Microsoft',
    discount:.33
  },
  {
    id : "1009",
    name : "Halo 5: Guardians",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/halo_5.jpg",
    avgRating: 3.5,
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:25.95,
    quantity:100,
    esrbRating:'Adult',
    categories:
      ['fps',
      'multiplayer',
      'sci-fi'
      ],
    publsiher:'Microsoft',
    discount:0
  },
  {
    id : "1010",
    name : "Battlefield 1 - Xbox One",
    description : "- 25 Years after Gears of War 3, spurred by a series of strange disappearances, JD Fenix must embrace his father’s legacy and battle a terrifying new enemy.\n- Never Fight Alone: Enjoy two-player co-op with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del.\n- Redefined Cover Gameplay: New close-cover combat moves and combat-knife executions turn each piece of cover into an offensive opportunity.\n- Brutal New Weapons: An incredible arsenal of new weapons includes the Buzzkill and Dropshot, which can shoot around and over cover, raining destruction from all angles",
    image : "./images/battlefield.jpg",
    avgRating: 3.5,
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:34.00,
    quantity:100,
    esrbRating:'Teen',
    categories:
      ['fps',
      'multiplayer'],
    publsiher:'Microsoft',
    discount:.15
  },
  {
    id : "1011",
    name : "Watch Dogs 2 - Xbox One",
    description : "Explore a massive and dynamic open world - Experience an incredible variety of gameplay possibilities.<br>Hack everything- Every person, vehicle and connected device can be hacked. Take control of drones, cars, cranes, and more to use them as your weapon.<br>Connect with friends - Play Co-op and Player vs. Player activities in a seamless shared world.<br>You are in CTRL - Develop your skills and combine hacking, weapons and stealth to complete missions in ways that suit your playstyle.<br>Welcome to the San Francisco Bay - Experience the winding streets of San Francisco, the vibrant neighborhoods of Oakland, and cutting edge Silicon Valley.",
    image : "./images/watch_dogs.jpg",
    avgRating: 3,
    reviews : [
      {rating:3,
      review:"I'm a huge fan of Gears 1-3. I loved horde mode, the story and the multiplayer but Gears 4 just felt like they got lazy and copy and pasted all the gameplay and features from 3. The story is very weak and uninteresting I couldn't even get through 2 hours of it. Multiplayer just felt like a throwback to gears 3 there wasn't anything special or different to it, and the shotguns are constantly being spammed if you can't use a shotgun effectively then you lose. Horde just feels the same as the original and the classes feel restrictive. If you haven't played any of the previous gears then it's worth the 60 dollars otherwise I don't see it being worth that much."},
      {rating:5,
      review:"Got this for my 12 year-old son for Christmas, and the gamer in me came back out to play as we spent hours in 2-player mode (there's a girl character, which I of course loved), bashing monsters, chainsawing locusts and fighting our way through the crazy awesomeness that is Gears of War 4. One of the best games I've played. Reminded me of my other fave, Rise of the Tomb Raider, in terms of graphics and how fun the battle scenes were. We got through fairly quickly - the only downside - and can't wait to go back through on Insane mode. Tons and tons of fun!!"}
    ],
    price:45.95,
    quantity:100,
    esrbRating:'Mature',
    categories:
      ['fps',
      'adventure',
      'multiplayer'
      ],
    publsiher:'Microsoft',
    discount:0
  }
]


let cart = [
  //obj - key of item_id and value of quantity
  {'1001': 2},
  {'1010': 1},
  {'1007': 1}
]
