console.log(`location`,location);
console.log(`window`,window);
console.log(`history`,history);

console.log(`---------------------------------`);

navigator.geolocation.getCurrentPosition(loc => 
    console.log(`location`,loc));
