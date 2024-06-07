import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch all data
export async function getAllData() {
  try {
    const response = await api.get("/data");
    return response.data;
  } catch (error) {
    console.error("getAllData error:", error);
    throw error;
  }
}

// Fetch filtered data
export async function getFilteredData(filters) {
  try {
    const queryString = new URLSearchParams(filters).toString();
    const response = await api.get(`/data?${queryString}`);
    return response.data;
  } catch (error) {
    console.error("getFilteredData error:", error);
    throw error;
  }
}

// export async function getFilteredData(filters) {
//   try {
//     const response = await api.get("/data/filter", { params: filters });
//     return response.data;
//   } catch (error) {
//     console.error("getFilteredData error:", error);
//     throw error; // Re-throw the error after logging it
//   }
// }
//     const response = await api.get("/data");
//     return response.data;
//   } catch (error) {
//     console.error("getAllData error:", error);
//     throw error;
//   }
// }
