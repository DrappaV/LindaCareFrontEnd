const restUrl="http://localhost:9000"

export async function findAll(page=0) {
    let response = await fetch(`${restUrl}/findAll/${page}`, {
        mode: 'cors',
        method: "GET"
    })
    return await response.json();
}