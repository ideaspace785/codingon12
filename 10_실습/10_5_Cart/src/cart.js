let shop = document.getElementById('shop')
let basket = JSON.parse(localStorage.getItem('data')) || [];

let calculation = ()=>{
    let cartIcon= document.getElementById('cartAmount')
    cartIcon.innerHTML=basket.map( x => x.item ).reduce((x,y)=>x+y, 0)
    //배열.reduce(합계를 갖는 변수, 각 항목, 헙계를 갖는 변수의 초기값) 합계를 구해줘야한다 
}
calculation();

let generateShop = () => {
    return shop.innerHTML = shopItemsData.map((x) => {
        let { id, name, price, desc, img } = x;
        let search=basket.find(x => x.id === id ) || [];
        return `
        <div id=product-id-${id} class="item">
        <img width="220" src=${img}>
        <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity"> 
                ${search.item === undefined ? 0 : search.item}
                </div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
        </div>
    </div>
</div>
        `
    }).join("")

}
generateShop();

function increment(id) {
    let selectedId = id;
    let search = basket.find(x => x.id === selectedId.id)    //undefined는 localStorage에 없다는 의미

    if (search === undefined) {
        basket.push({
            id: selectedId.id,
            item: 1
        })
    } else {
        search.item += 1
    }
    update(selectedId.id)
    basket = basket.filter(x => x.item !== 0)
    localStorage.setItem('data', JSON.stringify(basket))
    //내용 반영해주고 아이템이 0이 아닐 때 basket에 넣어주고 localStorage에 다시 

}
function decrement(id) {
    let selectedId = id;
    let search = basket.find((x) => x.id === selectedId.id)    //undefined는 localStorage에 없다는 의미

    //0이하 때는 감소되지 않도록 해야함
    if (search === undefined) return
    else if (search.item === 0) return
    else {
        search.item -= 1;
    }
    update(selectedId.id)
    basket = basket.filter(x => x.item !== 0)
    localStorage.setItem('data', JSON.stringify(basket))
}

let update = (id) => {
    //증가 또는 감소를 하고 변경내용을 localStorage에 반영
    let search = basket.find(x => x.id === id)
    document.getElementById(id).innerHTML = search.item
    calculation();
}


