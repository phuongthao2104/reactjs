// const axios = require('axios').default;

// // thread
// // 1. Create
// // 2. Get Detail by id
// // 3. Delete by id
// // 4. Update
// // 5. Get All

// // Async/Await approach

// // 1. Create
// const axios = require('axios');
// async function create() {
//     const data={
//         "name" : "Nguyen Thi Phuong Thao",
//        "avatar" : 'https://media.viezone.vn/prod/2021/9/23/241366902_4247740978656972_7915015121044317989_n_ba04f12588.jpeg'
//     }
//     const apiResult = await axios.post('https://624061412aeb48a9af735b00.mockapi.io/api/v1/users/',data);
// console.log(apiResult.data);
// }

// // 2. Get Detail by id
// async function getDetailById() {
  
//     const id = 01;
//     const apiResult =await axios.get("https://624061412aeb48a9af735b00.mockapi.io/api/v1/users?id=" + id);
// console.log(apiResult.data);
// }
// // 3. Delete by id
// async function deleteById() {
//     const id = 01;
//     const apiResult = await axios.delete("https://624061412aeb48a9af735b00.mockapi.io/api/v1/users?id=" + id);
// console.log(apiResult.data);
// }
// // 4. Update
// async function update() {
//     const id = 01;
  
//     const data={
//        "name" : "Nguyen Phuong Thao",
//     }
//     const apiResult =await axios.patch("https://624061412aeb48a9af735b00.mockapi.io/api/v1/users/" + id,data);
// console.log(apiResult.data);
// }

// async function getAll() {
//     const apiResult = await axios.get('https://624061412aeb48a9af735b00.mockapi.io/api/v1/users/');
//     console.log('Result ', apiResult.data);
// }

// // create();
// // getDetailById();
// // deleteById();
// // update();
// getAll();