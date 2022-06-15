function evalBMI() {
  let weight = document.bmi_form.pounds.value,
    height = document.bmi_form.inches.value / 100;
  document.bmi_form.bmi.value = parseInt(weight / (height * height));
}
