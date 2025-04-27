// "use client";

// import { useState } from "react";
// import { supabase } from "../../lib/supabaseClient";
// import { useRouter } from "next/navigation";

// export default function Login() {
//   const [data, setData] = useState<{
//     email: string;
//     password: string;
//   }>({
//     email: "",
//     password: "",
//   });

//   const router = useRouter();

//   const login = async () => {
//     try {
//       const { data: userData, error } = await supabase.auth.signInWithPassword({
//         email: data.email,
//         password: data.password,
//       });

//       if (userData) {
//         router.replace("/");
//       } 

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="p-4 max-w-sm mx-auto">
//       <div className="grid mb-4">
//         <label className="mb-1 font-medium">Email</label>
//         <input
//           type="text"
//           name="email"
//           value={data.email}
//           onChange={handleChange}
//           className="border px-3 py-2 rounded"
//         />
//       </div>

//       <div className="grid mb-4">
//         <label className="mb-1 font-medium">Password</label>
//         <input
//           type="password"
//           name="password"
//           value={data.password}
//           onChange={handleChange}
//           className="border px-3 py-2 rounded"
//         />
//       </div>

//       <button
//         onClick={login}
//         className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
//       >
//         Login
//       </button>
//     </div>
//   );
// }
