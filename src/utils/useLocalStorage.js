import { dataEmployeesMock } from "../mock/data";
import { fetchEmployees } from "../store/employeesSlice";


export function initializeLocalStorage() {
    const employees = JSON.parse(localStorage.getItem("employees"));
    if (!employees) {
      localStorage.setItem("employees", JSON.stringify(dataEmployeesMock));
    }
}
  