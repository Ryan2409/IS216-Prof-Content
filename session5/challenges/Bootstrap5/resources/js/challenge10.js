//================================================
// DO NOT MODIFY THIS CONSTANT VARIABLE
//================================================
const stars_dataset = [
    {
        "Ryan Gosling": [
            "sm_bg_ryan.jpg",
            "I'm going to make a movie about 'Hey Girl.'",
            "https://en.wikipedia.org/wiki/Ryan_Gosling"
        ],
        "Zac Efron": [
            "sm_bg_zac.jpg",
            "A girl can tell I like her when I blush or start telling bad jokes.",
            "https://en.wikipedia.org/wiki/Zac_Efron"
        ],
        "Eminem": [
            "sm_bg_eminem.jpg",
            "I am whatever you say I am; if I wasn't, then why would you say I am.",
            "https://en.wikipedia.org/wiki/Eminem"
        ]
    },
    {
        "Irina Shayk": [
            "sm_bg_irina.jpg",
            "I am trying to concentrate on books. You know, I love Dostoevsky. He's my favorite writer.",
            "https://en.wikipedia.org/wiki/Irina_Shayk"
        ],
        "Anna Kendrick": [
            "sm_bg_anna.jpg",
            "An actor should always let humility outweigh ambition.",
            "https://en.wikipedia.org/wiki/Anna_Kendrick"
        ],
        "Taylor Swift": [
            "sm_bg_taylor.jpg",
            "I'm intimidated by the fear of being average.",
            "https://en.wikipedia.org/wiki/Taylor_Swift"
        ]
    }
];


// [TODO] IMPLEMENT THIS FUNCTION
// When the webpage loads, the web browser will call this function.
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {

    // YOUR CODE GOES HERE

    // Look for "[IMPORTANT]" inside challenge10.html file.
    // It tells you what elements need to be updated by JavaScript functions.

    // [IMPORTANT] Buttons
    //
    // When displaying "male" stars:
    //  - "Show Male Stars" button must be "disabled" (the user cannot click on it)
    //  - "Show Female Stars" button must be activated (the user should be able to click on it)
    //
    // When displaying "female" stars:
    //  - "Show Male Stars" button must be activated (the user should be able to click on it)
    //  - "Show Female Stars" button must be "disabled" (the user cannot click on it)
    var gender_index = 0;
    if(Math.random()<0.5){
        gender_index = 1;
    }
    display_by_gender(gender_index);
}


function display_by_gender(gender_index){
    var objects = stars_dataset[gender_index];
    console.log(objects);
    var count = 1;

    for(person in objects){

        // images, title, innertext
        console.log(person);
        console.log(objects[person]);

        let artis_img = objects[person][0];
        let img = document.getElementById("image"+count);
        console.log(img);
        img.setAttribute("src", "images/" + artis_img);

        let artis_name = person;
        let artis_info = objects[person][1];

        let title = document.getElementById("slide_heading" + count);
        title.innerText = artis_name;

        let info = document.getElementById("slide_title" + count);
        info.innerText = artis_info;

        

        // wiki
        let wiki = document.getElementById("wiki" + count); 
        let wiki_artis = objects[person][2];
        wiki.setAttribute("href", wiki_artis);
        wiki.innerText = person;


        count++

        if(gender_index==0){
            document.getElementById("male_button").disabled = true;
            document.getElementById("female_button").disabled = false;
        }else{
            document.getElementById("female_button").disabled = true;
            document.getElementById("male_button").disabled = false;
        }
    }
}





// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Male Stars" button is clicked, the web browser calls this function.
function show_male_stars() {

    // YOUR CODE GOES HERE
    display_by_gender(0);

}


// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Female Stars" button is clicked, the web browser calls this function.
function show_female_stars() {

    // YOUR CODE GOES HERE
    display_by_gender(1);
}