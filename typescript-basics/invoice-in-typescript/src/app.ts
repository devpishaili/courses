import { Invoice } from "./app/classes/invoice";
import { HasFormatter } from "./app/interfaces/HasFormatter";

import { ListTemplate } from "./app/classes/ListTemplate";
import { formData } from "./app/dom/form";
import { filterOptionsContainer } from "./app/dom/filterOptions";
import { Payment } from "./app/classes/payment";

const form = document.querySelector(".new-item-form") as HTMLFormElement,
  type = document.querySelector("#type") as HTMLSelectElement,
  toFrom = document.querySelector("#tofrom") as HTMLInputElement,
  details = document.querySelector("#details") as HTMLInputElement,
  amount = document.querySelector("#amount") as HTMLInputElement,
  //   list template instance
  ul = document.querySelector("ul")!,
  list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const data = formData(form);
  console.log(data);

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
  console.log(doc);

  clearForm();
  console.log(filterOptionsContainer.options.item.name);
});

function clearForm() {
  type.value = "invoice";
  toFrom.value = "";
  details.value = "";
  amount.value = "";
}

// GENERICS

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "yoshi", age: 40 });

console.log(docOne.name);

//  with interfaces

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

console.log("Hello Typescript bundle");
