/**
 * datepicker function code written by fellow student Sean Murphy, 
 * who gave it to me to demonstrate how to get it working
 */

['#activityFilterDatepickerSm',
    '#activityFilterDatepickerLg',
    '#start',
    '#end',
    '#date'
].forEach(datepick => {
    $(datepick).datepicker({
        autoclose: true,
        todayHighlight: true,
        uiLibrary: 'bootstrap4',
        format: 'dd/mm/yyyy',
        todayBtn: "linked",
        language: "it",
    });
});

['#monStart', '#monEnd', '#tueStart', '#tueEnd', '#wedStart', '#wedEnd', '#thuStart',
    '#thuEnd', '#friStart', '#friEnd', '#satStart', '#satEnd', '#sunStart', '#sunEnd',
].forEach(timepick => {
    $(timepick).timepicker({
        autoclose: true,
        uiLibrary: 'bootstrap4'
    });
});