document.addEventListener("DOMContentLoaded", () => {
    const cars = document.querySelectorAll(".car");
    
    cars.forEach((car, index) => {
        car.addEventListener("mouseenter", () => {
            const description = car.querySelector(".description");
            loadCarDescription(description, index + 1); // Assuming your car descriptions are in separate files (e.g., car1.txt, car2.txt).
        });
    });
});

function loadCarDescription(descriptionElement, carNumber) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `car${carNumber}.txt`, true);

    xhr.onload = function () {
        if (xhr.status == 200) {
            descriptionElement.textContent = xhr.responseText;
        }
    };

    xhr.send();
}
