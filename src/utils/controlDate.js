
export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // les mois sont indexés à partir de 0
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
}

export function isDateValid(inputDate) {
  const currentDate = new Date();
    const minDate = new Date(currentDate.getFullYear() - 90, currentDate.getMonth(), currentDate.getDate());
    const maxDate = new Date(currentDate.getFullYear() - 12, currentDate.getMonth(), currentDate.getDate());
    const dateOfBirth = new Date(inputDate);
    if (dateOfBirth < minDate || dateOfBirth > maxDate) {
      return false;
    } else return true;
}

// export function calculateAge(dateString) {
//     const birthDate = new Date(dateString);
//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDifference = today.getMonth() - birthDate.getMonth();
  
//     if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
  
//     return age;
//   }


export function calculateAge(datestring) {
    const birthDate = new Date(datestring);
  
    if (isNaN(birthDate.getTime())) {
      // Si la date n'est pas valide, retourne une erreur ou une chaîne vide selon votre besoin
      return "";
    }
  
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
  
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
}

export const sortDates = (a, b,sortKey, sortOrder ) => {
  const dateRegex = /^\d{2}([./-])\d{2}\1\d{4}$/;
  const isDate = dateRegex.test(a[sortKey]) && dateRegex.test(b[sortKey]);
  if (isDate) {
    const delimiter = dateRegex.exec(a[sortKey])[1];
    const [dayA, monthA, yearA] = a[sortKey].split(delimiter).map((x) => parseInt(x, 10));
    const [dayB, monthB, yearB] = b[sortKey].split(delimiter).map((x) => parseInt(x, 10));
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    if (dateA < dateB) return sortOrder === 'asc' ? -1 : 1;
    if (dateA > dateB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  } else {
    if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  }
};