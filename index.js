window.onload = function () {
    async function getFact() {
        try {
            let res = await fetch("https://asli-fun-fact-api.herokuapp.com/");
            if (res.ok) {
                let data = await res.json();
                document.getElementById("text-message-heading").innerText = data.data.cat;
                document.getElementById("text-message").innerText = data.data.fact;
            }
        }
        catch (error) {
            document.getElementById("text-message").className = "text-danger";
            document.getElementById("text-message").innerText = "Error! Something went wrong";
        }
    }

    document.getElementById("btn-fetch").addEventListener('click', function () {
        getFact();
    })
}