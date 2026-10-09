# 🌡️ Temperature Converter Website

A simple, interactive, and responsive temperature converter built using **HTML5, CSS3, and Vanilla JavaScript**. It allows users to convert temperatures between Celsius, Fahrenheit, and Kelvin with real-time input validation and absolute-zero error handling.

## 📌 Features

* **Temperature Input:** Enter a numeric temperature value.
* **Unit Selection:** Choose Celsius, Fahrenheit, or Kelvin as the input unit.
* **Instant Conversion:** Convert the input temperature into all three units simultaneously by clicking the Convert Temperature button.
* **Input Validation:** Displays an error message when the input is empty or invalid.
* **Absolute Zero Validation:** Prevents temperatures below the physical limit of absolute zero.
* **Responsive Design:** Clean, centered layout that adapts to different screen sizes.
* **Accessible Interface:** Includes descriptive labels and accessible error and result announcements.

## 🛠️ Technologies Used

* **HTML5** – Website structure and input elements.
* **CSS3** – Styling, layout, gradients, and responsive design.
* **JavaScript (Vanilla)** – Temperature conversion, validation, and interactive functionality.

## 📂 Project Structure

```text
temperature-converter/
│
├── index.html     # Main HTML structure
├── style.css      # Website styling
├── script.js      # Conversion logic and validation
└── README.md      # Project documentation
```

## 🌡️ Temperature Conversion Formulas

The converter first converts the input value to Celsius and then calculates the equivalent Fahrenheit and Kelvin values.

| Conversion            | Formula            |
| --------------------- | ------------------ |
| Celsius to Fahrenheit | F = (C × 9/5) + 32 |
| Fahrenheit to Celsius | C = (F − 32) × 5/9 |
| Celsius to Kelvin     | K = C + 273.15     |
| Kelvin to Celsius     | C = K − 273.15     |

Where:

* **C** represents Celsius.
* **F** represents Fahrenheit.
* **K** represents Kelvin.

## ⚠️ Input Validation

The application handles the following cases:

* Empty temperature input.
* Invalid or non-finite numeric values.
* Temperatures below absolute zero.

The minimum valid temperatures are:

* Celsius: −273.15°C
* Fahrenheit: −459.67°F
* Kelvin: 0 K

Conversion results are displayed to two decimal places.

## 🚀 How to Run the Project

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code or another code editor.
3. Ensure that `index.html`, `style.css`, and `script.js` are in the same directory.
4. Open `index.html` in your web browser.

Alternatively, install the **Live Server** extension in Visual Studio Code, right-click `index.html`, and select **Open with Live Server**.

No additional libraries, frameworks, or installations are required.

## 🧪 Example

**Input:**

* Temperature: `25`
* Unit: Celsius

**Output:**

* Celsius: `25.00 °C`
* Fahrenheit: `77.00 °F`
* Kelvin: `298.15 K`

## 🎯 Project Objective

The objective of this project is to build an interactive web application while practising HTML forms, CSS styling, JavaScript event handling, mathematical calculations, and input validation.

## 📚 Learning Resources

* [MDN Web Docs – HTML Forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms)
* [MDN Web Docs – JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [MDN Web Docs – Constraint Validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation)

## 🔮 Future Improvements

* Add automatic conversion while typing.
* Include temperature conversion history.
* Add dark mode.
* Allow users to select their preferred decimal precision.

## 👨‍💻 Author

Naveen varma
Mail: naveenvarma2106@gmail.com

Developed as part of a web development task to practise fundamental frontend development skills.

---

**License:** This project is available for educational and personal use.
