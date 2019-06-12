const $DESC = document.getElementById('description');
const $CALORIES = document.getElementById('calories');
const $CARBS = document.getElementById('carbs');
const $PROTEIN = document.getElementById('protein');
const $ADD_BUTTON = document.getElementById('add');

const IS_INVALID = 'is-invalid'

let itemsList = [];

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

const validateInputs = () =>
{

    if ($DESC.value && $CALORIES.value && $CARBS.value && $PROTEIN.value)
    {
        add(itemsList);
        clearInputs();
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