// import { useState } from "react";

// export const setAuthToken = (user, roleValue = "buyer") => {
//   const currentUser = {
//     email: user.email,
//     role: roleValue,
//   };

//   // save user in database and get jwt token
//   fetch(`${http://localhost:5000}/user/${user?.email}`, {
//     method: "PUT",

//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(currentUser),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       localStorage.setItem("resalezone-token", data.token);
//     });
// };
