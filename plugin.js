
// Day Plan Buy Now Button Div
const day_plan_buy_now_button = document.getElementById("day-plan-buy-now-plugin-button");
const day_plan_background_freeze = document.getElementById("day-plan-background-freeze-div");
const day_plan_buy_now_button_div = document.getElementById("day-plan-buy-now-plugin-button-div");

day_plan_buy_now_button.addEventListener("click", function () {
    day_plan_background_freeze.style.display = "flex";
});

day_plan_background_freeze.addEventListener("click", function (e) {
    if (!day_plan_buy_now_button_div.contains(e.target)) {
        day_plan_background_freeze.style.display = "none";
    }
});

// Meeting Room Buy Now Button Div
const meeting_room_buy_now_button = document.getElementById("meeting-room-buy-now-plugin-button");
const meeting_room_background_freeze = document.getElementById("meeting-room-plan-background-freeze-div");
const meeting_room_buy_now_button_div = document.getElementById("meeting-room-plan-buy-now-plugin-button-div");

meeting_room_buy_now_button.addEventListener("click", function () {
    meeting_room_background_freeze.style.display = "flex";
});

meeting_room_background_freeze.addEventListener("click", function (e) {
    if (!meeting_room_buy_now_button_div.contains(e.target)) {
        meeting_room_background_freeze.style.display = "none";
    }
});






//  Contact Us
function contactus() {
    window.location.href = "https://akota.co/contact-us/";
}

















//Step Forwarder
//Buy Now Button
const hot_desk_buy_now_button = document.getElementById("hot-desk-buy-now-plugin-button");
const day_office_buy_now_button = document.getElementById("day-office-buy-now-plugin-button");
const dedicated_buy_now_button = document.getElementById("dedicated-desk-buy-now-plugin-button");
const flexible_buy_now_button = document.getElementById("flexible-desk-buy-now-plugin-button");
const virtual_buy_now_button = document.getElementById("virtual-office-buy-now-plugin-button");
const conference_buy_now_button = document.getElementById("conference-room-buy-now-plugin-button");
const alap_buy_now_button = document.getElementById("alap-room-buy-now-plugin-button");
const alochona_buy_now_button = document.getElementById("alochona-room-buy-now-plugin-button");
const colorburst_buy_now_button = document.getElementById("colorburst-room-buy-now-plugin-button");
const event_space_buy_now_button = document.getElementById("event-space-buy-now-plugin-button");
const zoom_call_room_buy_now_button = document.getElementById("zoom-call-room-buy-now-plugin-button");
const podcast_studio_buy_now_button = document.getElementById("podcast-room-buy-now-plugin-button");
//Booking Form
const booking_form = document.getElementById("common-booking-form");
//Booking Form Close Button
const booking_form_closing_button = document.getElementById("booking-form-header-heading-img-close-icon");
//Booking Form Step Number Divs
const step_one_div = document.getElementById("booking-form-header-info-step-all-step-number-one-div");
const step_two_div = document.getElementById("booking-form-header-info-step-all-step-number-two-div");
const step_three_div = document.getElementById("booking-form-header-info-step-all-step-number-three-div");
const step_four_div = document.getElementById("booking-form-header-info-step-all-step-number-four-div");
//Booking Form User Input Divs
const plan_type_div             = document.getElementById("plan-type-booking-form-user-input-div");
const agreement_details_div     = document.getElementById("agreement-details-booking-form-user-input-div");
const personal_information_div  = document.getElementById("personal-information-booking-form-user-input-div");
const payment_information_div   = document.getElementById("payment-information-booking-form-user-input-div");
//Back Button
const agreement_details_back_button     = document.getElementById("agreement-details-booking-form-user-input-back-button");
const personal_information_back_button  = document.getElementById("personal-information-booking-form-user-input-back-button");
const payment_information_back_button   = document.getElementById("payment-information-booking-form-user-input-back-button");
//Continue Button
const plan_type_continue_button             = document.getElementById("plan-type-booking-form-user-input-continue-button");
const agreement_details_continue_button     = document.getElementById("agreement-details-booking-form-user-input-continue-button");
const personal_information_continue_button  = document.getElementById("personal-information-booking-form-user-input-continue-button");
const payment_information_continue_button   = document.getElementById("payment-information-booking-form-user-input-continue-button");
//Plan Type Span
const plan_type_name = document.getElementById("booking-form-header-info-user-data-all-div-value-div-span-1-plan-type");
const plan_type_package_name = document.getElementById("booking-form-header-info-user-data-all-div-value-div-span-2-plan-type");
//Number Of People Span
const number_of_people = document.getElementById("booking-form-header-info-user-data-all-div-value-div-span-number-of-people");
//Start Date Span
const start_date = document.getElementById("booking-form-header-info-user-data-all-div-value-div-span-start-date");
//Plan Type Selection
const hot_desk_plan_type_div            = document.getElementById("booking-form-user-input-div-plan-type-hot-desk-selection-div");
const day_office_plan_type_div          = document.getElementById("booking-form-user-input-div-plan-type-day-office-selection-div");
const dedicated_desk_plan_type_div      = document.getElementById("booking-form-user-input-div-plan-type-dedicated-desk-selection-div");
const flexible_desk_plan_type_div       = document.getElementById("booking-form-user-input-div-plan-type-flexible-desk-selection-div");
const virtual_office_plan_type_div      = document.getElementById("booking-form-user-input-div-plan-type-virtual-office-selection-div");
const conference_room_plan_type_div     = document.getElementById("booking-form-user-input-div-plan-type-conference-room-selection-div");
const alap_room_plan_type_div           = document.getElementById("booking-form-user-input-div-plan-type-alap-room-selection-div");
const alochona_room_plan_type_div       = document.getElementById("booking-form-user-input-div-plan-type-alochona-room-selection-div");
const colorburst_room_plan_type_div     = document.getElementById("booking-form-user-input-div-plan-type-colorburst-room-selection-div");
const zoom_call_room_plan_type_div      = document.getElementById("booking-form-user-input-div-plan-type-zoom-call-room-selection-div");
const podcast_studio_plan_type_div      = document.getElementById("booking-form-user-input-div-plan-type-podcast-studio-selection-div");


//Form Opening Listener
hot_desk_buy_now_button.addEventListener("click", function() {
    booking_form.style.display = "flex";

    plan_type_name.textContent = "Hot Desk";

    hot_desk_plan_type_div.style.display = "flex";
});

day_office_buy_now_button.addEventListener("click", function() {
    booking_form.style.display = "flex";

    plan_type_name.textContent = "Day Office";

    day_office_plan_type_div.style.display = "flex";
});

dedicated_buy_now_button.addEventListener("click", function() {
    booking_form.style.display = "flex";

    plan_type_name.textContent = "Dedicated Desk";

    dedicated_desk_plan_type_div.style.display = "flex";
});

flexible_buy_now_button.addEventListener("click", function() {
    booking_form.style.display = "flex";

    plan_type_name.textContent = "Flexible Desk";

    flexible_desk_plan_type_div.style.display = "flex";
});

virtual_buy_now_button.addEventListener("click", function() {
    booking_form.style.display = "flex";

    plan_type_name.textContent = "Virtual Office";

    virtual_office_plan_type_div.style.display = "flex";
});

conference_buy_now_button.addEventListener("click", function() {
    booking_form.style.display = "flex";

    plan_type_name.textContent = "Conference Room";

    conference_room_plan_type_div.style.display = "flex";
});

alap_buy_now_button.addEventListener("click", function() {
    booking_form.style.display = "flex";

    plan_type_name.textContent = "Alap Room";

    alap_room_plan_type_div.style.display = "flex";
});

alochona_buy_now_button.addEventListener("click", function() {
    booking_form.style.display = "flex";

    plan_type_name.textContent = "Alochona Room";

    alochona_room_plan_type_div.style.display = "flex";
});

colorburst_buy_now_button.addEventListener("click", function() {
    booking_form.style.display = "flex";

    plan_type_name.textContent = "Color Burst Room";

    colorburst_room_plan_type_div.style.display = "flex";
});

event_space_buy_now_button.addEventListener("click", function() {
    booking_form.style.display = "flex";

    plan_type_name.textContent = "Event Space";
});

zoom_call_room_buy_now_button.addEventListener("click", function() {
    booking_form.style.display = "flex";

    plan_type_name.textContent = "Zoom Call Room";

    zoom_call_room_plan_type_div.style.display = "flex";
});

podcast_studio_buy_now_button.addEventListener("click", function() {
    booking_form.style.display = "flex";

    plan_type_name.textContent = "Podcast Studio";

    podcast_studio_plan_type_div.style.display = "flex";
});
//Form Closing Listener
booking_form_closing_button.addEventListener("click", function() {
    booking_form.style.display = "none";

    hot_desk_plan_type_div.style.display        = "none";
    day_office_plan_type_div.style.display      = "none";
    dedicated_desk_plan_type_div.style.display  = "none";
    flexible_desk_plan_type_div.style.display   = "none";
    virtual_office_plan_type_div.style.display  = "none";
    conference_room_plan_type_div.style.display = "none";
    alap_room_plan_type_div.style.display       = "none";
    alochona_room_plan_type_div.style.display   = "none";
    colorburst_room_plan_type_div.style.display = "none";
    zoom_call_room_plan_type_div.style.display  = "none";
    podcast_studio_plan_type_div.style.display   = "none";
});
//Form Step One Active
step_one_div.classList.add("booking-form-header-info-step-all-step-number-div-active");
//Form Plan Type Display Flex
plan_type_div.style.display = "flex";
//Back & Continue Listener
plan_type_continue_button.addEventListener("click", function() {
    plan_type_div.style.display  = "none";
    agreement_details_div.style.display = "flex";

    step_one_div.classList.remove("booking-form-header-info-step-all-step-number-div-active");
    step_two_div.classList.add("booking-form-header-info-step-all-step-number-div-active");
});

agreement_details_back_button.addEventListener("click", function() {
    plan_type_div.style.display  = "flex";
    agreement_details_div.style.display = "none";

    step_two_div.classList.remove("booking-form-header-info-step-all-step-number-div-active");
    step_one_div.classList.add("booking-form-header-info-step-all-step-number-div-active");
});

agreement_details_continue_button.addEventListener("click", function() {
    agreement_details_div.style.display  = "none";
    personal_information_div.style.display = "flex";

    step_two_div.classList.remove("booking-form-header-info-step-all-step-number-div-active");
    step_three_div.classList.add("booking-form-header-info-step-all-step-number-div-active");
});

personal_information_back_button.addEventListener("click", function() {
    agreement_details_div.style.display  = "flex";
    personal_information_div.style.display = "none";

    step_three_div.classList.remove("booking-form-header-info-step-all-step-number-div-active");
    step_two_div.classList.add("booking-form-header-info-step-all-step-number-div-active");
});

personal_information_continue_button.addEventListener("click", function() {
    personal_information_div.style.display  = "none";
    payment_information_div.style.display = "flex";

    step_three_div.classList.remove("booking-form-header-info-step-all-step-number-div-active");
    step_four_div.classList.add("booking-form-header-info-step-all-step-number-div-active");
});

payment_information_back_button.addEventListener("click", function() {
    personal_information_div.style.display  = "flex";
    payment_information_div.style.display = "none";

    step_four_div.classList.remove("booking-form-header-info-step-all-step-number-div-active");
    step_three_div.classList.add("booking-form-header-info-step-all-step-number-div-active");
});

payment_information_continue_button.addEventListener("click", function() {
    booking_form.style.display  = "none";
});