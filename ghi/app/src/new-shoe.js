window.addEventListener('DOMContentLoaded', async () => {
    const url = "http://localhost:8000/api/shoes/"

    const response = await fetch(url)

    if (response.ok) {

        const data = await response.json()
    }

    const formTag = document.getElementById('create-shoes-form')
    formTag.addEventListener("submit", async event => {
        event.preventDefault()
        const formData = new FormData(formTag)
        const json = JSON.stringify(Object.fromEntries(formData));

        const binUrl = "http://localhost:8000/api/bins/"
        const fetchConfig = {
            method: "POST",
            body: json,
            headers: {
                "Content-Type": "application/json",
            }
        }
        const response = await fetch(binUrl, fetchConfig);
        if (response.ok) {
            formTag.reset()
            const newShoe = await response.json()
        }
    })
})
