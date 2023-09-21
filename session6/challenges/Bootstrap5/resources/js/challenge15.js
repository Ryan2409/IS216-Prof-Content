// KrazyMLBB API v1.0 - Documentation
// http://krazywoman.com/krazymlbb/

const YOUTUBE_API_KEY = 'AIzaSyCiXFYHvIBMDt_4DHzPrtHn-1aWgZDKmy8'; // Did you get your YouTube API key?

// When the webpage loads
// Display all heroes
function display_default() {

    // Display all heroes
    
    // YOUR CODE GOES HERE
    let Class = "all";
    call_api(Class);
}

function call_youtube_api(hero_name){
    let hero_search = `mlbb ${hero_name} gameplay`
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${hero_search}&key=${YOUTUBE_API_KEY}`
    axios.get(url)
    .then(response => {

        // SUCCESS
        // Got an API response
        // console.log(response)
        let link = response.data.items[0].id.videoId
        document.getElementById("iframe_"+hero_name).setAttribute("src", `https://www.youtube.com/embed/${link}`)
        
    })
    .catch(error => {

        // ERROR
        // Something went wrong
        console.log(error.message)
    })

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
    let counter = 0
    for(hero of heroes_array){
        // console.log(hero)
        //put onto the page
        counter += 1
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

                                <button class="badge rounded-pill bg-secondary rounded" data-bs-toggle="modal" data-bs-target="#youtube_modal${counter}" onclick="call_youtube_api('${hero.name}')">
                                Youtube Videos
                            </button>
                            
                            <div class="modal" id="youtube_modal${counter}">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">

                                        <!-- Modal Header -->
                                        <div class="modal-header">
                                            <h4 class="modal-title">${hero.name} Gameplay</h4>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal">&times;</button>
                                        </div>
                                        
                                        <!-- Modal body -->
                                        <div class="modal-body mx-auto">
                                            <iframe id="iframe_${hero.name}" width="560" height="315" src= frameborder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                                                                
                                        <!-- Modal footer -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- YouTube Modal Ends Here -->

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

