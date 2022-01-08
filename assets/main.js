const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnsBuy = $$(".js-modal-buy-ticket");
const modal = $(".modal");
const btnClose = $(".modal-close");
const modalContainer = $(".modal-container");
const mobieMenu = $(".mobie-menu-btn");
const header = $("#header");
const currentHieght = header.clientHeight;
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
const subnav = document.querySelector('.subnav')
const moreBtn = document.querySelector("#nav li:last-child a");

btnsBuy.forEach((btnBuy) => {
    btnBuy.onclick = showBuyTicket;
});
btnClose.onclick = closeBuyTicket;

modal.onclick = closeBuyTicket;

modalContainer.onclick = (e) => {
    e.stopPropagation();
};

mobieMenu.onclick = () => {
    var isClose = header.clientHeight === currentHieght;
    if (isClose) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
        closeSubNav()
    }
};
moreBtn.onclick = closeSubNav


for (i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = (e) => {
        var moreBtn = document.querySelector("#nav li:last-child a");
        if (e.target == moreBtn) {
            e.preventDefault();
            subnav.style.position = "unset";
            subnav.style.display = "block";
        } else {
            header.style.height = null;
            closeSubNav()
        }
    };
}

function closeSubNav(){
    subnav.style.display = "none";
}
function showBuyTicket() {
    modal.classList.add("modal-open");
}
function closeBuyTicket() {
    modal.classList.remove("modal-open");
}
