const $DESC = document.getElementById('description');
const $CALORIES = document.getElementById('calories');
const $CARBS = document.getElementById('carbs');
const $PROTEIN = document.getElementById('protein');
const $ADD_BUTTON = document.getElementById('add');

const validateInputs = () =>
{

    if (
        $DESC.value &&
        $CALORIES.value &&
        $CARBS.value &&
        $PROTEIN.value
    )
    {
        console.log('OK');
    }
    else
    {
        $DESC.classList.add('is-invalid');
        $CALORIES.classList.add('is-invalid');
        $CARBS.classList.add('is-invalid');
        $PROTEIN.classList.add('is-invalid');
    }
}

$ADD_BUTTON.addEventListener('click', validateInputs);
$DESC.addEventListener('keyup', ()=>{
    $DESC.classList.remove('is-invalid');
});
$CALORIES.addEventListener('keyup', ()=>{
    $CALORIES.classList.remove('is-invalid');
});
$CARBS.addEventListener('keyup', ()=>{
    $CARBS.classList.remove('is-invalid');
});
$PROTEIN.addEventListener('keyup', ()=>{
    $PROTEIN.classList.remove('is-invalid');
});