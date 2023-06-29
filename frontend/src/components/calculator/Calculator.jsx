// import "./styles.css";
// import React, { useState } from "react";

// export default function App() {
//   const [brand, setBrand] = useState("");
//   const [ram, setRam] = useState("");
//   const [memory, setMemory] = useState("");
//   const [condition, setCondition] = useState("");
//   const [sellingPrice, setSellingPrice] = useState(0);
//   let Val_M = 0;
//   let Val_S = 0;
//   let solde = 0;

//   const categories = [
//     { min: -Infinity, max: 90, name: "1 - HC" },
//     { min: 90, max: 165, name: "2 - C" },
//     { min: 165, max: 255, name: "3 - B" },
//     { min: 255, max: 375, name: "4 - A" },
//     { min: 375, max: Infinity, name: "5 - Premium" }
//   ];

//   const calculPrice = () => {
//     // Calculate RAM
//     switch (ram) {
//         case "1":
//           Val_M = 30;
//           break;
//         case "2":
//           Val_M = 32;
//           break;
//         case "3":
//           Val_M = 54;
//           break;
//         case "4":
//           Val_M = 60;
//           break;
//         case "6":
//           Val_M = 70;
//           break;
//         case "8":
//           Val_M = 75;
//           break;
//         case "12":
//           Val_M = 80;
//           break;
//         default:
//           Val_M = 0;
//           break;
//       }

//       // Calculate memory
//       switch (memory) {
//         case "31":
//           Val_S = 31;
//           break;
//         case "32":
//           Val_S = 45;
//           break;
//         case "64":
//           Val_S = 66;
//           break;
//         case "128":
//           Val_S = 70;
//           break;
//         case "256":
//           Val_S = 78;
//           break;
//         case "512":
//           Val_S = 88;
//           break;
//         case "1000":
//           Val_S = 100;
//           break;
//         default:
//           Val_S = 0;
//           break;
//       }

//     // Calculate solde
//     switch (condition) {
//       case "DEEE":
//         solde = -80;
//         break;
//       case "reparable":
//         solde = -30;
//         break;
//       case "bloque":
//         solde = -10;
//         break;
//       case "reconditionable":
//         solde = -5;
//         break;
//       case "reconditionne":
//         solde = 0;
//         break;
//       case "comme-neuf":
//         solde = 50;
//         break;
//       default:
//         solde = 0;
//         break;
//     }

//     // Calculate initial price
//     let initialPrice = Val_M + Val_S + solde;
//     let sellingPrice = initialPrice >= 0 ? initialPrice : 0;

//     setSellingPrice(sellingPrice);

//     for (var i = 0; i < categories.length; i++) {
//       if (
//         sellingPrice >= categories[i].min &&
//         sellingPrice < categories[i].max
//       ) {
//         console.log(categories[i].name);
//       }
//     }
//   };

//   return (
//     <div className="calculator">
//       <div>
//         <label htmlFor="pet-select">Marque</label>
//         <select
//           name="etats"
//           value={brand}
//           onChange={(e) => setBrand(e.target.value)}
//           id="L'état du smartphone"
//         >
//           <option value="">--Please choose an option--</option>
//           <option value="Apple">Apple</option>
//           <option value="Oppo">Oppo</option>
//           <option value="Oneplus">OnePlus</option>
//           <option value="Samsung">Samsung</option>
//           <option value="Huawei">Huawei</option>
//         </select>
//       </div>
//       <label htmlFor="name">RAM :</label>
//       <input
//         type="text"
//         id="ram"
//         required
//         minLength="4"
//         maxLength="8"
//         size="10"
//         value={ram}
//         onChange={(e) => setRam(e.target.value)}
//       ></input>
//       <div>
//         <label htmlFor="memory">Stockage :</label>
//         <input
//           type="text"
//           id="memory"
//           name="ram"
//           required
//           minLength="4"
//           maxLength="8"
//           size="10"
//           value={memory}
//           onChange={(e) => setMemory(e.target.value)}
//         ></input>
//       </div>
//       <div></div>
//       <label htmlFor="pet-select">L'état du smartphone</label>
//       <select
//         name="etats"
//         id="L'état du smartphone"
//         value={condition}
//         onChange={(e) => setCondition(e.target.value)}
//       >
//         <option value="">--Please choose an option--</option>
//         <option value="DEEE">DEEE</option>
//         <option value="reparable">Reparable</option>
//         <option value="bloque">Bloqué</option>
//         <option value="reconditionable">Reconditionable</option>
//         <option value="reconditionne">Reconditionné</option>
//         <option value="comme-neuf">Comme neuf</option>
//       </select>

//       <div>
//         <button onClick={calculPrice}>Click to see price</button>

//         <span> {sellingPrice} </span>
//       </div>
//     </div>
//   );
// }
