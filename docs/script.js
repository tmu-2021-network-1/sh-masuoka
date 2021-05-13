const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'Studio';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;

const renderJson = (json) => {
  const studios = json.records;

  studios.pop();
  
  studios.forEach(studio => {
   const studioDiv = document.createElement('div');
   const studioTitle = document.createElement("span");
   studioTitle.className = 'studio-title';
   studioTitle.textContent = studio['name-ja'];
   const studioTitleEn = document.createElement("span");
   studioTitleEn.className = 'studio-title-en';
   studioTitleEn.textContent = studio['name-en'];
   const studioDescription = document.createElement("p");
   studioDescription.className = 'studio-description';
   studioDescription.textContent = studio['description-ja'];
   const studioFaculty = document.createElement("p");
   studioFaculty.className = 'studio-faculty';
   studioFaculty.textContent = studio['faculty-ja'];
   const studioImage1 = document.createElement("img");
   studioImage1.className = 'studio-image1';
   studioImage1.imgContent = studio['photo2'];
   studioDiv.appendChild(studioTitle);
   studioDiv.appendChild(studioTitleEn);
   studioDiv.appendChild(studioFaculty);
   studioDiv.appendChild(studioImage1);
   studioDiv.appendChild(studioDescription);
   document.getElementById('studios').appendChild(studioDiv);
 });
  document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}

const getData = async () => {
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
			renderJson(jsonResponse);
    }
  }
  catch (error) {
    console.log(error);
  }
}

getData();