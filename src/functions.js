export async  function sendData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (response.ok){
        return await response.json();
    } else {
        console.error(`Fetch err to ${url} with: ${response.status}`);
        return response.json();
    }
}

export async function getRequest(url, urlParams){
    const response = await fetch(`${url}?${(new URLSearchParams(urlParams)).toString()}`);
    if (response.ok){
        return await response.json();
    } else {
        console.error(await response.json());
        return await response.json();
    }
}
