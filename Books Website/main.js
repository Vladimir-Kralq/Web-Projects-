document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    const successMessage = document.getElementById("success-message");

    let isValid = true;

    // Нулиране на съобщения
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    nameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";
    successMessage.style.display = "none";

    // Валидации
    if (name === "") {
        nameError.textContent = "Моля, въведете име.";
        nameError.style.display = "block";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.textContent = "Моля, въведете имейл.";
        emailError.style.display = "block";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Моля, въведете валиден имейл адрес.";
        emailError.style.display = "block";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent = "Моля, въведете съобщение.";
        messageError.style.display = "block";
        isValid = false;
    }

    // Ако всичко е валидно – покажи успешно съобщение
    if (isValid) {
        successMessage.textContent = `✅ Успешно изпратихте съобщението, ${name}!`;
        successMessage.style.display = "block";
        this.reset();
    }
});






const categorySelect = document.getElementById('category-select');
const bookSummaries = document.querySelector('.book-summaries');
const featuredBooksSection = document.getElementById('books');

function filterBooks(category) {
    const books = bookSummaries.querySelectorAll('.book');

    books.forEach(book => {
        if (category === 'all' || book.classList.contains(category)) {
            book.style.display = 'flex';
        } else {
            book.style.display = 'none';
        }
    });
}

function scrollToFeaturedBooks() {
    featuredBooksSection.scrollIntoView({ behavior: 'smooth' });
}

const categoryLinks = document.querySelectorAll('.category-link');

categoryLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const selectedCategory = this.getAttribute('data-category');
        categorySelect.value = selectedCategory;
        filterBooks(selectedCategory);
        scrollToFeaturedBooks();
    });
});

categorySelect.addEventListener('change', function() {
    const selectedCategory = this.value;
    filterBooks(selectedCategory);
    scrollToFeaturedBooks();
});

filterBooks('all');


const burgerButton = document.getElementById("burger-menu");
const nav = document.querySelector("nav");

burgerButton.addEventListener("click", function () {
    nav.classList.toggle("show");

    // Смяна на иконата ☰ ↔ ✖
    if (nav.classList.contains("show")) {
        burgerButton.textContent = "✖";
    } else {
        burgerButton.textContent = "☰";
    }
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
        burgerButton.textContent = "☰";
    });
});

