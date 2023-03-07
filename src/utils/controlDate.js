
export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // les mois sont indexés à partir de 0
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
}

export function isDateValid(dateString) {
    const inputDate = new Date(dateString);
    const currentDate = new Date();
    return inputDate <= currentDate;
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