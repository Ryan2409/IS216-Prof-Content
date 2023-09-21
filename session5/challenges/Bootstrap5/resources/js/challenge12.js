// [IMPORTANT]
// DO NOT MODIFY challenge12.html content
// YOU MUST WORK WITH WHAT IS GIVEN TO YOU



// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function highlight_words() {

    // YOUR CODE GOES HERE
    if(false){
        
    }else{
        var len = prompt("How long word, more than this will be highlighted");
        // let body = document.getElementById("book_chapter");
        // let all_p = body.getElementsByTagName("p");
        var paras = document.querySelectorAll('#book_chapter p');

        for(para of paras){
            let arr = ["<p>"];
            let split = para.innerText.split(" ");
            for (word of split){
                if(word.length > len){
                    arr.push(`<span style="background-color:yellow;">${word}</span>`);
                }else{
                    arr.push(word);
                }
            }
            arr.push("</p>");
            arr = arr.join(" ");
            // console.log(arr);
            para.innerHTML = arr;
            console.log(para);
        }

    }
}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_num_words() {

    // YOUR CODE GOES HERE
    
}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_emoticons() {

    // YOUR CODE GOES HERE
}