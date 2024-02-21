let listElements = document.querySelectorAll('.dropdown-btn');

Array.from(listElements).forEach((element) => {
    element.addEventListener('click', () => {
        element.classList.toggle('arrow');
        let height= 0;
        let dropdownContent = element.nextElementSibling;
        console.log(dropdownContent);
        if (dropdownContent.clientHeight === 0){
            height = dropdownContent.scrollHeight;

        }
        dropdownContent.style.height = height + 'px';
    });
    }
);