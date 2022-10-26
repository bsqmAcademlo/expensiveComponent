import { newData, amountTotal } from "./data.js";

const dash_metri = document.querySelector(".dash_metri");
const report_dollar = document.querySelector(".report_dollar");

let html = "";
for (let { day, amount, percent } of newData) {
    html += `
        <div class="dash_metri-item">
            <p class="metri_number">
                $${amount}
            </p>
            <div class="progress" style="height: ${percent}%;"></div>
            <p class="metri-item-day">${day}</p>
        </div>
    `;
}

report_dollar.innerHTML = `$${amountTotal}`;
dash_metri.innerHTML = html;
