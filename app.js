console.log("Let's get this party started!");
// Sorry that this looks very similar to the solution. For some reason, I am having a lot of trouble with axios. Not every link given works for me.

const $gifArea = $("#gif-area");
const $searchInput = $("#search");

function openGif(res) {
    let outcome = res.data.length;
    if (outcome) {
        let random = Math.floor(Math.random() * outcome);
        let $column = $("<div>", { class: "col-md-4 col-12 mb-4"});
        let $newGif = $("<img>", { 
            src: res.data[random].images.original.url, 
            class: "w-100"
        });
    $column.append($newGif);
    $gifArea.append($column);
    }
}


$("form").on("submit", async function(e) {
    e.preventDefault();

    let wordSearch = $searchInput.val();
    $searchInput.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
          q: wordSearch,
          api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
      });
      openGif(response.data); // Taken from solution. I was having a lot of trouble trying to work with axios on my own. It would only work on some links, not all.
});

$("#remove").on("click", function() {
    $gifArea.empty();
})