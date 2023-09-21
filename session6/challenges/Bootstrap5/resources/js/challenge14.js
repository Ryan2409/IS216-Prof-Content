// KrazyMLBB API v1.0 - Documentation
// http://krazywoman.com/krazymlbb/


// When the webpage loads
// Display all heroes
function display_default() {

    // Display all heroes
    
    // YOUR CODE GOES HERE
    // url on load should be all
    let Class = "all";
    call_api(Class);
}


function call_api(Class){
    let url = ""
    if(Class=="all"){
        url = "http://krazywoman.com/krazymlbb/api/hero/read.php"
    }else{
        url = `http://krazywoman.com/krazymlbb/api/hero/search.php?c=${Class}`
    }


    axios.get(url)
    .then(response => {

        // SUCCESS
        // Got an API response
        // console.log(response)
        let heroes_array = response.data.records
        console.log(heroes_array)
        process_data(heroes_array)
    })
    .catch(error => {

        // ERROR
        // Something went wrong
        console.log(error.message)
    })
    
}


function process_data(heroes_array){
    let hero_str = ""
    //loop thru array
    for(hero of heroes_array){
        // console.log(hero)
        //put onto the page
        hero_str +=
        `
        <div class="card mb-3 mx-auto">
                    <div class="row no-gutters">
                        <div class="col-md-3">
                            <img src="${hero.img_profile_url}" class="card-img" width="100%" alt="${hero.name}">
                        </div>
                        <div class="col-md-9">
                            <!-- Hero -->
                            <div class="card-body">
                                <h5 class="card-title">${hero.name}</h5>

                                <p class="card-text">${hero.description}</p>
                                
                                <p class="text-center">
                                    <button type="button" class="btn mb-1" style="background-color:#ff7002; color: white; width: 220px">
                                        Battlepoint Cost <span class="badge bg-light text-dark">${hero.purchase.battlepoint_cost}</span>
                                    </button>

                                    <button type="button" class="btn mb-1" style="background-color:#1326ff; color: white; width: 220px">
                                        Diamond Cost <span class="badge bg-light text-dark">${hero.diamond_cost}</span>
                                    </button>

                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                        Movement Speed <span class="badge bg-light text-dark">${hero.stats.movement_speed}</span>
                                    </button>

                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                        Physical Attack <span class="badge bg-light text-dark">${hero.stats.physical_attack}</span>
                                    </button>

                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                        Physical Defense <span class="badge bg-light text-dark">${hero.stats.physical_defense}</span>
                                    </button>

                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                        Magic Power <span class="badge bg-light text-dark">${hero.stats.magic_power}</span>
                                    </button>

                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                        Armor <span class="badge bg-light text-dark">${hero.stats.armor}</span>
                                    </button>

                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                        Magic Resistance <span class="badge bg-light text-dark">${hero.stats.magic_resistance}</span>
                                    </button>

                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                        HP <span class="badge bg-light text-dark">${hero.stats.hp}</span>
                                    </button>

                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                        Mana <span class="badge bg-light text-dark">${hero.stats.mana}</span>
                                    </button>

                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                        Attack Speed <span class="badge bg-light text-dark">${hero.stats.attack_speed}</span>
                                    </button>

                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                        HP Regen Rate <span class="badge bg-light text-dark">${hero.stats.hp_regen_rate}</span>
                                    </button>

                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                        Mana Regen Rate <span class="badge bg-light text-dark">${hero.stats.mana_regen_rate}</span>
                                    </button>

                                    <button type="button" class="btn mb-1" style="background-color:#3e3b3a; color: white; width: 220px">
                                        Class <span class="badge bg-light text-dark">${hero.class}</span>
                                    </button>

                                </p>
                            </div> <!-- end of card-body -->
                        </div> <!-- end of col -->
                    </div> <!-- end of row -->
                </div> <!-- end of card (one hero) -->
        `
    }

    let hero_cards = document.getElementById("hero_cards")
    hero_cards.innerHTML = hero_str
}


// Given a hero_class (tank, fighter, mage, asassin, marksman, support, all)
function show_heroes(hero_class) {

    // if 'tank'
    // only display 'tank' heroes
    call_api(hero_class)
    // if 'all'
    // display ALL heroes

    // YOUR CODE GOES HERE


}