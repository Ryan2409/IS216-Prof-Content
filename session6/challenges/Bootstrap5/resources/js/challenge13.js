// KrazyStars API v1.0 - Documentation
// http://krazywoman.com/krazystars/


// When the webpage loads
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {

    // YOUR CODE GOES HERE
    // Call API
    let gender = "m"
    if(Math.random()<0.5){
        gender = "f"
    }
    callAPI(gender)
    display_gender_button(gender)
}

// disable button of current gender
function display_gender_button(gender){
    let male_button = document.getElementById("male_button");
    let female_button = document.getElementById("female_button");
    if (gender == "m"){
        male_button.disabled = true;
        female_button.disabled = false;
    }else{
        female_button.disabled = true;
        male_button.disabled = false;
    }
}


function callAPI(gender){
    // assigning gender
    let api_endpoint_url = `http://krazywoman.com/krazystars/api/star/search.php?g=${gender}`;
    axios.get(api_endpoint_url)
    .then(response => {
        let data_records = response.data.records
        console.log(data_records)
        process_data(data_records)
        // SUCCESS
        // Got an API response
    })
    .catch(error => {

        // ERROR
        // Something went wrong
        console.log(error.message)
    })
}


function process_data(data_records){
    let wiki_str = ""
    let imdb_str = ""
    let slideshow_str = ""
    let counter = 0
    for(person of data_records){
        console.log(person)
        counter += 1
        let name = person.fullname
        // wiki
        let wiki = person.wikipedia_url
        wiki_str += `
        <a id="wiki${counter}" class="dropdown-item" href="${wiki}" target="_blank">${name}</a>
        `
        // assingning wiki links
        let wiki_links = document.getElementById("wiki_links")
        wiki_links.innerHTML = wiki_str

        //imdb
        let imdb = person.imdb_url
        imdb_str += `
        <a id="imdb${counter}" class="dropdown-item" href="${imdb}" target="_blank">${name}</a>
        `
        // assigning imdb links
        let imdb_links = document.getElementById("imdb_links")
        imdb_links.innerHTML = imdb_str

        //slideshow
        let quote = person.quote
        let photo = person.photo_profile_url

        var active = " active";
        if( counter > 1 ) {
            active = "";
        }

        slideshow_str += `
        <div class="carousel-item ${active}">
            <img id="image${counter}" src="${photo}" alt="${name}">
            <div class="carousel-caption">
                <h2 class="star_h2" id="slide_heading${counter}" style="padding: 5px; background-color: grey; color: white">${name}</h2>
                <p id="slide_title${counter}" style="padding: 5px; background-color: black; color: white">${quote}</p>
            </div>
        </div>
        `
        // assigning slideshow
        let slide_show = document.getElementById("slide_show")
        slide_show.innerHTML = slideshow_str
    }
}


// This function is called when user clicks on "Show Male Stars" button.
function show_male_stars() {

    // YOUR CODE GOES HERE
    callAPI("m")
    display_gender_button("m")
}


// This function is called when user clicks on "Show Female Stars" button.
function show_female_stars() {

    // YOUR CODE GOES HERE  
    callAPI("f")
    display_gender_button("f")
}