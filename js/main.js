const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data)

/*
    function compose(...functions) {
        return function (data) {
            functions.reduceRight((value, function) => func(value), data){
            })
        }
    }
*/

const $DESC = document.getElementById('description');
const $CALORIES = document.getElementById('calories');
const $CARBS = document.getElementById('carbs');
const $PROTEIN = document.getElementById('protein');

const $ADD_BUTTON = document.getElementById('add');

const IS_INVALID = 'is-invalid'

let itemsList = [];

const attrToString = (obj = {}) =>
    Object.keys(obj)
        .map(key => `${key}="${obj[key]}"`)
        .join(' ')

// console.log(attrToString({'class': 'title'}));
const tagAttrs = obj => (content = '') =>
    `<${obj.tag}${obj.attrs ? ' ' : ''}${attrToString(obj.attrs)}> ${content} </${obj.tag}>`;

// console.log(tagAttrs({tag: 'tr'})( ' Hola, mundo '));

const tag = nameTag =>
    typeof nameTag === 'string' ? tagAttrs({ tag: nameTag }) : tagAttrs(nameTag);

const tableRowTag = tag('tr');
// const tableRow = (items) => tableRowTag(tableCells(items));
const tableRow = (items) => compose(tableRowTag, tableCells)(items);

const tableCell = tag('td');
const tableCells = items => items.map(tableCell).join('');

const add = (list) =>
{
    const newItem = {
        description: $DESC.value,
        calories: parseInt($CALORIES.value),
        carbs: parseInt($CARBS.value),
        protein: parseInt($PROTEIN.value),
    }


    list.push(newItem);
    console.log(list);
}

const clearInputs = () =>
{
    $DESC.value = '';
    $CALORIES.value = '';
    $CARBS.value = '';
    $PROTEIN.value = '';
}

const removeItem = index =>
{
    itemsList.splice(index, 1);
    updateTotal()
    renderItems();
}

const updateTotal = () =>
{
    let calories = 0, carbs = 0, protein = 0;

    itemsList.map((item) =>
    {
        calories += item.calories;
        carbs += item.carbs;
        protein += item.protein;
    });

    document.getElementById('total-calories').textContent = calories;
    document.getElementById('total-carbs').textContent = carbs;
    document.getElementById('total-protein').textContent = protein;
}

const renderItems = () =>
{
    const $TBODY = document.getElementById('list-items');

    const rows = itemsList.map((item, index) =>
    {

        const buttonTag = tag(
            {
                tag: 'button',
                attrs:
                {
                    class: 'remove',
                    onclick: `removeItem(${index})`,
                }
            })('X');

        const button = tag('td')(buttonTag)
        return tableRow([item.description, item.calories, item.carbs, item.protein, button]);
    }).join('');

    $TBODY.innerHTML = rows;
}

const validateInputs = () =>
{
    if ($DESC.value && $CALORIES.value && $CARBS.value && $PROTEIN.value)
    {
        add(itemsList);
        clearInputs();
        updateTotal();
        renderItems();
    }
    else
    {
        $DESC.classList.add(IS_INVALID);
        $CALORIES.classList.add(IS_INVALID);
        $CARBS.classList.add(IS_INVALID);
        $PROTEIN.classList.add(IS_INVALID);
    }
}

$ADD_BUTTON.addEventListener('click', validateInputs);

$DESC.addEventListener('keyup', () => { $DESC.classList.remove(IS_INVALID) });

$CALORIES.addEventListener('keyup', () => { $CALORIES.classList.remove(IS_INVALID) });

$CARBS.addEventListener('keyup', () => { $CARBS.classList.remove(IS_INVALID) });

$PROTEIN.addEventListener('keyup', () => { $PROTEIN.classList.remove(IS_INVALID) });